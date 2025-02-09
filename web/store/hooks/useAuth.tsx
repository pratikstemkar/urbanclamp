import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
    selectCurrentUser,
    selectAuthStatus,
} from "../features/auth/AuthSlice";

export const useAuth = () => {
    const user = useSelector(selectCurrentUser);
    const authStatus = useSelector(selectAuthStatus);

    const isLoading = authStatus === "loading";

    return useMemo(() => ({ user, isLoading }), [user, isLoading]);
};
