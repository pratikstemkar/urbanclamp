import { useSelector } from "react-redux";

import { useMemo } from "react";
import { selectCurrentUser } from "../features/auth/AuthSlice";

export const useAuth = () => {
    const user = useSelector(selectCurrentUser);

    return useMemo(() => ({ user }), [user]);
};
