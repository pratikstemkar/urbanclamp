import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import petGroomingServices from "@/data/pet-grooming";
import { services } from "@/data/services";
import { findServiceBySlug } from "@/lib/utils";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const ServicePage = ({ params }: { params: { service: string } }) => {
    const foundService = findServiceBySlug(services, params.service);
    if (!foundService) {
        notFound();
    }

    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 px-5 lg:px-0">
                <div className="lg:w-1/4">
                    <div className="flex flex-col items-center space-y-5 sticky top-20">
                        <Image
                            src={`/images/icons/services/${foundService?.slug}.png`}
                            alt={params.service}
                            height={100}
                            width={100}
                        />
                        <h1 className="text-4xl font-bold tracking-tighter">
                            {foundService?.title}
                        </h1>
                        <p className="text-sm text-muted-foreground text-center lg:text-left">
                            {foundService?.description}
                        </p>
                        <div className="flex space-x-2 w-full items-center justify-center lg:justify-start">
                            <div className="bg-green-600 text-white flex space-x-2 items-center px-2.5 py-1 rounded-md hover:cursor-pointer">
                                <StarIcon className="h-4 w-4" />
                                <span className="font-bold text-sm">
                                    {foundService?.starRating}
                                </span>
                            </div>
                            <Link href="#">
                                <span className="underline underline-offset-4 decoration-dotted text-sm">
                                    {foundService?.numberOfReviews} Reviews
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="flex flex-col space-y-2">
                        {petGroomingServices.map((service, index) => (
                            <Card key={index}>
                                <CardContent className="mt-4 -mb-2">
                                    <div className="flex space-x-2">
                                        <div className="flex flex-col space-y-2 w-5/6">
                                            <div className="text-lg font-bold flex space-x-2 items-center group hover:text-violet-500 hover:cursor-pointer">
                                                <span>{service.title}</span>
                                                <ExternalLinkIcon className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                            </div>
                                            <div className="flex space-x-2 items-center">
                                                <StarIcon className="h-4 w-4" />
                                                <Link
                                                    href="#"
                                                    className="underline underline-offset-4 decoration-dotted"
                                                >
                                                    <span className="text-xs">
                                                        {service.starRating} (
                                                        {
                                                            service.numberOfReviews
                                                        }{" "}
                                                        Reviews)
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {service.description}
                                            </div>
                                            <div className="flex space-x-2 text-sm">
                                                <span>₹{service.price}</span>
                                                <span>&#x2022;</span>
                                                <span>{service.duration}</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                {service.availableBreeds?.map(
                                                    (breed, index) => (
                                                        <span
                                                            key={index}
                                                            className="text-sm "
                                                        >
                                                            {breed}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-1/6 flex flex-col justify-center items-center">
                                            <Image
                                                src={`/images/icons/services/${foundService?.slug}.png`}
                                                alt={params.service}
                                                height={100}
                                                width={100}
                                                className="rounded-lg"
                                            />
                                            <Button
                                                variant="outline"
                                                className="-my-5"
                                            >
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:inline-block lg:w-1/4 ">
                    <Card className="sticky top-20">
                        <CardHeader>
                            <CardTitle>Your Cart</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col justify-center w-full items-center space-y-2">
                                <Image
                                    src="/images/icons/empty-cart.png"
                                    alt="empty"
                                    height={50}
                                    width={50}
                                />
                                <h4 className="text-muted-foreground text-sm">
                                    Your cart has no services
                                </h4>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
};

export default ServicePage;
