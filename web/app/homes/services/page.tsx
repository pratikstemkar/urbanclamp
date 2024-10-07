import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

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
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                    {services.map((service, index) => (
                        <Link
                            href={`/homes/services/${service.slug}`}
                            key={index}
                        >
                            <Card className="hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
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
            </div>
        </main>
    );
};

export default ServicesPage;
