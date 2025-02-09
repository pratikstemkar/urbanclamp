import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import axios from "axios";

const fetchUserDetails = async (token: string) => {
    try {
        const response = await axios.get(
            `https://api.urbanclamp.xyz/api/auth/validate/${token}`
        );
        return response.data;
    } catch (error) {
        console.error("Token validation failed", error);
        return null;
    }
};

export interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    picture: string;
    roles: string[];
    status: string;
    gender: string;
}

type AuthState = {
    user: User | null;
};

const initialState: AuthState = {
    user: null,
};

export const validateTokenAndSetUser = createAsyncThunk(
    "auth/validateToken",
    async (token: string, { rejectWithValue }) => {
        const user = await fetchUserDetails(token);
        if (!user) return rejectWithValue("Invalid token");
        localStorage.setItem("access_token", token);
        return user;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: state => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("previousPath");
            state.user = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(validateTokenAndSetUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(validateTokenAndSetUser.rejected, state => {
                state.user = null;
            });
    },
});

export const { logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
