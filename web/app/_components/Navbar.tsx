import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
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
                <Button asChild>
                    <Link href="/signin">
                        <LogInIcon className="h-4 w-4 mr-2" />
                        <span>Login</span>
                    </Link>
                </Button>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
