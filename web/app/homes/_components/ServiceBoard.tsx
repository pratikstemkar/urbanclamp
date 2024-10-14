import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { services } from "@/data/services";
import { getRandomTenServices } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceBoard = () => {
    return (
        <Card>
            <CardHeader className="-m-2 lg:-m-0">
                <CardTitle className="text-xl font-semibold">
                    What are you looking for?
                </CardTitle>
            </CardHeader>
            <CardContent className="-m-4 lg:-m-0">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {getRandomTenServices(services, 9).map((service, index) => (
                        <Link
                            href={`/homes/services/${service.slug}`}
                            key={index}
                        >
                            <Card
                                className={`hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out ${
                                    index >= 6 ? "hidden sm:inline-block" : ""
                                }`}
                            >
                                <CardContent className="mt-6 text-sm flex items-center justify-between">
                                    {service.title}
                                    <Image
                                        src={`/images/icons/services/${service.slug}.png`}
                                        alt={service.slug}
                                        height={40}
                                        width={40}
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex-row-reverse -my-2">
                <Button
                    variant="outline"
                    asChild
                >
                    <Link
                        href="/homes/services"
                        className="text-violet-500"
                    >
                        <span>View all services</span>
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ServiceBoard;
