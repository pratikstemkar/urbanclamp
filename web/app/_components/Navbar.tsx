"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/store/hooks/useAuth";
import { LogInIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import UserNav from "./UserNav";
import { Icons } from "@/components/ui/icons";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
    const auth = useAuth();

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-black">
            <div className="flex max-w-7xl m-auto justify-between items-center px-5 lg:px-10 py-4 lg:py-5">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl">
                            <span className="font-bold">Urban</span>
                            <span className="font-light">Clamp</span>
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center space-x-2 justify-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                >
                                    <Link href="/cart">
                                        <ShoppingCartIcon className="h-[1.2rem] w-[1.2rem]" />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Your Cart</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
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
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                    className="hidden lg:inline-flex"
                                >
                                    <Link
                                        href="https://github.com/pratikstemkar/urbanclamp"
                                        target="_blank"
                                    >
                                        <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub Repository</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <div className="hidden lg:inline-flex">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
