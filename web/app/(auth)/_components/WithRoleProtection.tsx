"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuth } from "@/store/hooks/useAuth";

interface WithRoleProtectionProps {
    allowedRoles: string[];
    children: React.ReactNode;
}

const WithRoleProtection: React.FC<WithRoleProtectionProps> = ({
    allowedRoles,
    children,
}) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoading) return;

        if (!user) {
            localStorage.setItem("previousPath", window.location.pathname);
            router.push("/signin");
            return;
        }

        if (!user.roles.some(role => allowedRoles.includes(role))) {
            router.push("/unauthorized");
        }
    }, [user, isLoading, allowedRoles, router]);

    if (isLoading) return <>Loading...</>;

    return <>{children}</>;
};

export default WithRoleProtection;
