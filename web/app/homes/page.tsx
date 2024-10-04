import { StarIcon, Users2Icon } from "lucide-react";
import Image from "next/image";
import { ServiceCarousel } from "./_components/ServiceCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomesPage = () => {
    return (
        <main className="max-w-7xl m-auto px-2 lg:px-0 my-5 lg:mt-10 flex-col space-y-10">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-10">
                <div className="lg:w-1/2 flex-col space-y-5">
                    <h1 className="font-bold text-2xl lg:text-4xl tracking-tighter">
                        Home services at your doorstep!
                    </h1>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">
                                What are you looking for?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Electrician
                                        <Image
                                            src="/images/icons/multimeter.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Carpenter
                                        <Image
                                            src="/images/icons/sawing.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Bathroom Cleaning
                                        <Image
                                            src="/images/icons/toilet.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Chimney Cleaning
                                        <Image
                                            src="/images/icons/chimney.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Painting
                                        <Image
                                            src="/images/icons/painting.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hidden lg:block hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        AC Service
                                        <Image
                                            src="/images/icons/ac.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hidden lg:block hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Refrigerator Repair
                                        <Image
                                            src="/images/icons/refrigerator.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hidden lg:block hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Machine Repair
                                        <Image
                                            src="/images/icons/washingmachine.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hidden lg:block hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Pest Control
                                        <Image
                                            src="/images/icons/pest-control.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Card className="hidden lg:block hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
                                    <CardContent className="mt-6 text-sm flex items-center justify-between">
                                        Home Cleaning
                                        <Image
                                            src="/images/icons/cleaning.png"
                                            alt="icon"
                                            height={40}
                                            width={40}
                                        />
                                    </CardContent>
                                </Card>
                                <Link
                                    href="/homes/services"
                                    className="lg:underline text-violet-500 hover:font-semibold flex pl-5 items-center"
                                >
                                    View all services
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex">
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
                <div className="flex justify-between items-center px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>New and noteworthy</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>Most booked services</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-2">
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
