import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex flex-col justify-center items-center mt-20">
            <h2 className="text-4xl font-bold text-red-500">Not Found</h2>
            <p>Could not find requested resource</p>
            <Link
                href="/homes"
                className="underline underline-offset-4"
            >
                Return Home
            </Link>
        </main>
    );
};

export default NotFound;
