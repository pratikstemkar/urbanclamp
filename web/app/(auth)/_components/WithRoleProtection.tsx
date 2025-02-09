"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/store/hooks/useAuth";

interface WithRoleProtectionProps {
    allowedRoles: string[];
    children: React.ReactNode;
}

const WithRoleProtection: React.FC<WithRoleProtectionProps> = ({
    allowedRoles,
    children,
}) => {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const hasAccess = user?.roles.some(role => allowedRoles.includes(role));

    useEffect(() => {
        if (!hasAccess) {
            router.push("/unauthorized");
        }
        if (user == null) {
            const currentPath = window.location.pathname;
            localStorage.setItem("previousPath", currentPath);
            router.push("/signin");
        }
        setLoading(false);
    }, [user?.roles, allowedRoles, router, hasAccess, user]);

    if (loading && !hasAccess) return <>Loading...</>;

    return <>{children}</>;
};

export default WithRoleProtection;
