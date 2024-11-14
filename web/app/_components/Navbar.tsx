"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/store/hooks/useAuth";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import UserNav from "./UserNav";
import { Icons } from "@/components/ui/icons";
import { CartDrawer } from "../cart/_components/CartDrawer";
import NavSearch from "./NavSearch";
import { NavigationMenuDemo } from "./NavMenu";

const Navbar = () => {
    const auth = useAuth();

    return (
        <nav className="sticky top-0 z-10 backdrop-blur-md">
            <div className="flex max-w-7xl m-auto justify-between items-center px-5 lg:px-10 py-2 lg:py-5">
                <div className="flex space-x-5 items-center">
                    <Link href="/">
                        <h1 className="text-xl lg:text-2xl">
                            <span className="font-bold">Urban</span>
                            <span className="font-light">Clamp</span>
                        </h1>
                    </Link>
                    <NavigationMenuDemo />
                </div>
                <div className="inline-flex flex-row-reverse lg:flex-row items-center space-x-2 justify-center">
                    <NavSearch />
                    <CartDrawer />
                    {auth.user ? (
                        <UserNav />
                    ) : (
                        <Button
                            asChild
                            className="hidden lg:inline-flex"
                        >
                            <Link href="/signin">
                                <LogInIcon className="h-4 w-4 mr-2" />
                                <span>Sign In</span>
                            </Link>
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        asChild
                    >
                        <Link
                            href="https://github.com/pratikstemkar/urbanclamp"
                            target="_blank"
                        >
                            <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
                        </Link>
                    </Button>
                    <div className="">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
