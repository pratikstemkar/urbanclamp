import Link from "next/link";

const Footer = () => {
    return (
        <footer className="font-mono text-muted-foreground text-sm flex px-5 lg:px-10 py-4 lg:py-5">
            <div>
                <span className="">
                    Urban Clamp &copy; {new Date().getFullYear()}
                    {" | "}
                </span>
                <span className="hidden lg:inline-block">
                    Code available on{" "}
                    <Link
                        href="https://github.com/pratikstemkar/urbanclamp"
                        className="underline"
                        target="_blank"
                    >
                        GitHub
                    </Link>
                    .
                </span>
                <span className="inline-block lg:hidden">
                    <Link
                        href="https://github.com/pratikstemkar/urbanclamp"
                        className="underline"
                        target="_blank"
                    >
                        GitHub
                    </Link>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
