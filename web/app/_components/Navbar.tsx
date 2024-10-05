"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/store/hooks/useAuth";
import { LogInIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import UserNav from "./UserNav";

const Navbar = () => {
    const auth = useAuth();

    return (
        <nav className="flex justify-between items-center px-5 lg:px-10 py-4 lg:py-5 max-w-7xl m-auto">
            <div>
                <Link href="/">
                    <h1 className="text-2xl">
                        <span className="font-bold">Urban</span>
                        <span className="font-light">Clamp</span>
                    </h1>
                </Link>
            </div>
            <div className="flex items-center space-x-2 justify-center">
                <Button
                    variant="ghost"
                    size="icon"
                    asChild
                >
                    <Link href="/cart">
                        <ShoppingCartIcon className="h-[1.2rem] w-[1.2rem]" />
                    </Link>
                </Button>
                {auth.user ? (
                    <UserNav />
                ) : (
                    <Button asChild>
                        <Link href="/signin">
                            <LogInIcon className="h-4 w-4 mr-2" />
                            <span>Sign In</span>
                        </Link>
                    </Button>
                )}

                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
