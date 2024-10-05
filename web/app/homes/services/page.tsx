import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <main className="max-w-7xl m-auto my-5 px-2 lg:px-0">
            <div className="flex-col space-y-5">
                <div className="flex space-x-2 lg:space-x-5 items-center">
                    <Link
                        href="/homes"
                        className=""
                    >
                        <ArrowLeftIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                    </Link>
                    <h1 className="text-2xl lg:text-4xl font-bold tracking-tighter">
                        What are you looking for?
                    </h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
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
                    <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
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
                    <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
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
                    <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
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
                    <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
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
                    <Card className="hover:cursor-pointer hover:scale-x-105 transition duration-300 ease-in-out">
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
                </div>
            </div>
        </main>
    );
};

export default ServicesPage;
