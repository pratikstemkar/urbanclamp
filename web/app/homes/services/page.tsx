import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import CategoryList from "./CategoryList";

export const metadata: Metadata = {
    title: "Home Services",
    description: "Home Service Management made easy!",
};

const ServicesPage = () => {
    return (
        <main className="max-w-7xl m-auto my-5 px-5 lg:px-0">
            <div className="flex-col space-y-5">
                <div className="flex space-x-2 lg:space-x-5 items-center">
                    <Link href="/homes">
                        <ArrowLeftIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                    </Link>
                    <h1 className="text-2xl lg:text-4xl font-bold tracking-tighter">
                        What are you looking for?
                    </h1>
                </div>
                <CategoryList />
            </div>
        </main>
    );
};

export default ServicesPage;
