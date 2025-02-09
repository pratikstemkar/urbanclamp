"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
} from "@/store/services/categoryApi";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    const { data: categories, error, isLoading } = useGetCategoriesQuery("");

    return (
        <div>
            {error && <div>{JSON.stringify(error)}</div>}
            {isLoading ? (
                <main className="flex w-full justify-center items-center mt-64">
                    <Loader2Icon className="animate-spin h-10 w-10" />
                </main>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                    {categories.map((service, index) => (
                        <Link
                            href={`/homes/services/${service.id}`}
                            key={index}
                        >
                            <Card className="hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
                                <CardContent className="mt-6 text-sm flex items-center justify-between">
                                    {service.title}
                                    <Image
                                        src={`/images/icons/services/${service?.picture}.png`}
                                        alt={service.title}
                                        height={40}
                                        width={40}
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryList;
