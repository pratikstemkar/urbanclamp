"use client";

import { useAuth } from "@/store/hooks/useAuth";

const Greeting = () => {
    const auth = useAuth();
    return (
        <h1 className="font-bold text-2xl">
            {"Hello, " + auth.user?.firstName + " " + auth.user?.lastName}
        </h1>
    );
};

export default Greeting;
