"use client";

import { useAuth } from "@/store/hooks/useAuth";

const Greeting = () => {
    const auth = useAuth();
    return (
        <h1 className="font-bold text-2xl">{"Hello, " + auth.user?.name}</h1>
    );
};

export default Greeting;
