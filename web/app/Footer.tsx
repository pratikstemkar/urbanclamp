import Link from "next/link";

const Footer = () => {
    return (
        <footer className="font-mono text-muted-foreground text-sm flex px-5 lg:px-10 py-4 lg:py-5">
            <div>
                <span>
                    Code available on{" "}
                    <Link
                        href="https://github.com/pratikstemkar/urbanclamp"
                        className="underline"
                    >
                        GitHub
                    </Link>
                    .
                </span>
            </div>
        </footer>
    );
};

export default Footer;
