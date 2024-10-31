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
        </footer>
    );
};

export default Footer;
