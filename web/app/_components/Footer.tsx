import { Icons } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between items-center px-5 lg:px-10 py-4 lg:py-5">
            <div className="font-mono text-muted-foreground text-sm flex space-x-5 ">
                <div>
                    <span className="">
                        Urban Clamp &copy; {new Date().getFullYear()}
                    </span>
                </div>
                {/* <div>
                    <Link
                        href="https://github.com/pratikstemkar/urbanclamp"
                        className="underline hover:text-primary"
                        target="_blank"
                    >
                        <div className="flex">
                            <Icons.gitHub className="h-4 w-4 mr-2" />
                            <span className="">GitHub</span>
                        </div>
                    </Link>
                </div> */}
                <div className="hidden lg:inline-flex">
                    <Link
                        href="/about"
                        className="underline hover:text-primary"
                    >
                        <span className="">About Us</span>
                    </Link>
                </div>
                <div className="hidden lg:inline-flex">
                    <Link
                        href="/privacy"
                        className="underline hover:text-primary"
                    >
                        <span className="">Privacy Notice</span>
                    </Link>
                </div>
                <div className="hidden lg:inline-flex">
                    <Link
                        href="/tnc"
                        className="underline hover:text-primary"
                    >
                        <span className="">Terms and Conditions</span>
                    </Link>
                </div>
            </div>
            <div className="inline-flex lg:hidden">
                <ThemeToggle />
            </div>
        </footer>
    );
};

export default Footer;
