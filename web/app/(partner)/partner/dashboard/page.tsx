import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ActivityIcon,
    CreditCardIcon,
    ExternalLinkIcon,
    IndianRupeeIcon,
    UsersIcon,
} from "lucide-react";
import { Metadata } from "next";
import { BarChartDemo } from "./_components/BarChart";
import { bookings } from "@/data/bookings";
import Image from "next/image";
import Greeting from "./_components/Greeting";
import WithRoleProtection from "@/app/(auth)/_components/WithRoleProtection";

export const metadata: Metadata = {
    title: "Dashboard",
    description:
        "Dashboard for service partners to check everything from their earning to their best performing service area.",
};

const PartnersPage = () => {
    return (
        <WithRoleProtection allowedRoles={["ROLE_PARTNER"]}>
            <main className="max-w-7xl m-auto">
                <div className="flex flex-col space-y-5 px-5 lg:px-0">
                    <div className="flex justify-between items-center">
                        <Greeting />
                        <Button>Download</Button>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 justify-between">
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">
                                        Total Revenue
                                    </span>
                                    <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent className="-mt-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-3xl tracking-tighter">
                                        ₹ 45,098
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">
                                        Bookings
                                    </span>
                                    <UsersIcon className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent className="-mt-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-3xl tracking-tighter">
                                        +23
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">
                                        Sales
                                    </span>
                                    <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent className="-mt-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-3xl tracking-tighter">
                                        +23,098
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        +10.1% from last month
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">
                                        Active Bookings
                                    </span>
                                    <ActivityIcon className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent className="-mt-4">
                                <div className="flex flex-col">
                                    <span className="font-bold text-3xl tracking-tighter">
                                        +5
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        +3 from last month
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex gap-5 flex-col lg:flex-row">
                        <div className="lg:w-7/12">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <BarChartDemo />
                                </CardContent>
                            </Card>
                        </div>
                        <Card className="lg:w-5/12">
                            <CardHeader>
                                <CardTitle>Recent Bookings</CardTitle>
                                <span className="text-xs text-muted-foreground">
                                    You serviced 234 homes this month
                                </span>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col space-y-5">
                                    {bookings.map((booking, index) => (
                                        <div
                                            className="flex justify-between items-center"
                                            key={index}
                                        >
                                            <div className="flex space-x-5 items-center">
                                                <Image
                                                    src={`/images/icons/services/${booking.serviceCategorySlug}.png`}
                                                    alt="img"
                                                    height={50}
                                                    width={50}
                                                    className="h-8 w-8 lg:h-10 lg:w-10"
                                                />
                                                <div className="flex flex-col">
                                                    <div className="flex space-x-2 items-center hover:text-violet-500 hover:cursor-pointer group">
                                                        <span className="text-sm lg:text-base font-semibold">
                                                            {
                                                                booking.serviceTitle
                                                            }
                                                        </span>
                                                        <ExternalLinkIcon className="hidden lg:inline-flex h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">
                                                        {
                                                            booking.serviceCategory
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-bold text-xs lg:text-lg">
                                                + ₹{booking.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </WithRoleProtection>
    );
};

export default PartnersPage;
