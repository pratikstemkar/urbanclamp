"use client";

import {
    logout,
    validateTokenAndSetUser,
} from "@/store/features/auth/AuthSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            dispatch(validateTokenAndSetUser(token));
        } else {
            dispatch(logout());
        }
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthProvider;
