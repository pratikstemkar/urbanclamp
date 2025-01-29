import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface User {
    name: string;
    email: string;
    picture: string;
    roles: Array<string>;
}

type AuthState = {
    user: User | null;
    access_token: string | null;
    refresh_token: string | null;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        access_token: null,
        refresh_token: null,
    } as AuthState,
    reducers: {
        setCredentials: (
            state,
            {
                payload: { user, access_token, refresh_token },
            }: PayloadAction<{
                user: User | null;
                access_token: string | null;
                refresh_token: string | null;
            }>
        ) => {
            state.user = user;
            state.access_token = access_token;
            state.refresh_token = refresh_token;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("access_token", access_token!);
            localStorage.setItem("refresh_token", refresh_token!);
        },
        logout: state => {
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            state.user = null;
            state.access_token = null;
            state.refresh_token = null;
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentAccessToken = (state: RootState) =>
    state.auth.access_token;
export const selectCurrentRefreshToken = (state: RootState) =>
    state.auth.refresh_token;
export default authSlice.reducer;
