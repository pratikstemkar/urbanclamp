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
    authStatus: "idle" | "loading" | "succeeded" | "failed"; // Added status
};

const initialState: AuthState = {
    user: null,
    authStatus: "idle",
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
            state.authStatus = "idle";
        },
    },
    extraReducers: builder => {
        builder
            .addCase(validateTokenAndSetUser.pending, state => {
                state.authStatus = "loading";
            })
            .addCase(validateTokenAndSetUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.user.picture = "https://github.com/pratikstemkar.png";
                state.authStatus = "succeeded";
            })
            .addCase(validateTokenAndSetUser.rejected, state => {
                state.user = null;
                state.authStatus = "failed";
            });
    },
});

export const { logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAuthStatus = (state: RootState) => state.auth.authStatus; // Added selector
export default authSlice.reducer;
