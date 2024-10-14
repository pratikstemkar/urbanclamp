import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Benefits = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0 items-center justify-between px-2 lg:px-0">
            <div className="flex-col space-y-5 items-center justify-center text-center lg:text-left">
                <h4 className="text-muted-foreground text-xl font-semibold">
                    How is Urban Clamp different?
                </h4>
                <h1 className="text-4xl font-extrabold tracking-tighter">
                    Smarter, Safer, Simple Home Services
                </h1>
                <h4 className="lg:w-2/3">
                    We go out of our way to make the whole process as seamless
                    as possible – from click to clean.
                </h4>
                <Button
                    size="lg"
                    className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                    asChild
                >
                    <Link href="/homes">
                        <span>Find your service partner</span>
                    </Link>
                </Button>
            </div>
            <div className="lg:w-1/3">
                <Card>
                    <CardContent className="pt-6">
                        <h1 className="font-bold text-lg">
                            The benefits of Urban Clamp
                        </h1>
                        <div className="flex-col space-y-2 mt-5">
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Convenience</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Wide Range of Services</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Professional Service Providers</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Time-Saving</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Transparent Pricing</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Customer Reviews and Ratings</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Quality Assurance</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Flexibility</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Cashless Transactions</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <CheckIcon className="h-4 w-4" />
                                <span>Support and Assistance</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Benefits;
