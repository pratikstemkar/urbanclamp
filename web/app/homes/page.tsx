import { StarIcon, Users2Icon } from "lucide-react";
import Image from "next/image";
import { ServiceCarousel } from "./_components/ServiceCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getRandomTenServices } from "@/lib/utils";
import { services } from "@/data/services";

const HomesPage = () => {
    return (
        <main className="max-w-7xl m-auto px-5 lg:px-0 my-5 lg:mt-10 flex-col space-y-10">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-10">
                <div className="lg:w-1/2 flex-col space-y-5">
                    <h1 className="font-bold text-2xl lg:text-4xl tracking-tighter">
                        Home services at your doorstep!
                    </h1>
                    <Card>
                        <CardHeader className="-m-2 lg:-m-0">
                            <CardTitle className="text-xl font-semibold">
                                What are you looking for?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="-m-4 lg:-m-0">
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                {getRandomTenServices(services, 9).map(
                                    (service, index) => (
                                        <Link
                                            href={`/homes/services/${service.slug}`}
                                            key={index}
                                        >
                                            <Card
                                                className={`hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out ${
                                                    index >= 6
                                                        ? "hidden sm:inline-block"
                                                        : ""
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
                                    )
                                )}
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
                    <div className="flex px-2">
                        <div className="w-1/2 flex space-x-4 items-center">
                            <div>
                                <StarIcon className="h-8 w-8" />
                            </div>
                            <div className="flex-col">
                                <div>
                                    <span className="font-bold">4.8</span>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground">
                                        Service Rating
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex space-x-4 items-center">
                            <div>
                                <Users2Icon className="h-8 w-8" />
                            </div>
                            <div className="flex-col">
                                <div>
                                    <span className="font-bold">12M+</span>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground">
                                        Customers Globally
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <Image
                        src="/images/homesposter.webp"
                        alt="homes"
                        width={800}
                        height={800}
                    />
                </div>
            </div>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-0 lg:px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>New and noteworthy</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-0 lg:px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>Most booked services</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-0 lg:px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>AC & Appliance Repair</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
        </main>
    );
};

export default HomesPage;
