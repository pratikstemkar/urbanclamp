"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/store/hooks/useAuth";
import Link from "next/link";

const PartnerButton = () => {
    const { user } = useAuth();
    const hasAccess = user?.roles.includes("ROLE_PARTNER");

    return (
        <>
            {hasAccess ? (
                <Button
                    size="lg"
                    className="rounded-full shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                    asChild
                >
                    <Link href="/partner/dashboard">
                        <span>View Dashboard</span>
                    </Link>
                </Button>
            ) : (
                <Button
                    size="lg"
                    className="rounded-full shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                    asChild
                >
                    <Link href="/partner/create">
                        <span>Become a Partner</span>
                    </Link>
                </Button>
            )}
        </>
    );
};

export default PartnerButton;
