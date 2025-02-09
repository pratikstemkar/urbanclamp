"use client";

import { getRandomTenServices } from "@/lib/utils";
import { useGetCategoriesQuery } from "@/store/services/categoryApi";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2Icon } from "lucide-react";

const ServiceBoard = () => {
    const { data: categories, error, isLoading } = useGetCategoriesQuery("");

    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">What are you looking for?</h1>
            {error && <div>{JSON.stringify(error)}</div>}
            {isLoading ? (
                <main className="flex w-full justify-center items-center mt-64">
                    <Loader2Icon className="animate-spin h-10 w-10" />
                </main>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {getRandomTenServices(categories, 9).map(
                        (service, index) => (
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
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default ServiceBoard;
