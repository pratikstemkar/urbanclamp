import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn, getBookingById } from "@/lib/utils";
import {
    BusIcon,
    CopyIcon,
    FlagIcon,
    MessageSquareTextIcon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import TrackMap from "./_components/TrackMap";

export async function generateMetadata({
    params,
}: {
    params: { bookingId: string };
}): Promise<Metadata> {
    const booking = getBookingById(params.bookingId);
    if (!booking) {
        notFound();
    }
    return {
        title: `Track #${booking?.id}`,
        description: "Track your booking with ease",
    };
}

const BookingTrackingPage = ({ params }: { params: { bookingId: string } }) => {
    const booking = getBookingById(params.bookingId);
    if (!booking) {
        notFound();
    }

    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col gap-y-5 px-5 lg:px-0">
                <div>
                    <h1 className="text-2xl font-bold tracking-tighter">
                        Track your booking
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row-reverse gap-5">
                    <div className="w-full lg:w-2/3 rounded-lg overflow-hidden">
                        <TrackMap />
                    </div>
                    <div className="lg:w-1/3 flex flex-col gap-y-5">
                        <Card>
                            <CardContent className="mt-6">
                                <div className="flex flex-col space-y-5">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="hidden lg:inline-flex border rounded-full p-3 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900">
                                                <BusIcon />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="text-sm text-muted-foreground">
                                                    Booking ID
                                                </div>
                                                <div className="flex space-x-2 items-center text-lg font-medium">
                                                    <span>
                                                        #{params.bookingId}
                                                    </span>
                                                    <CopyIcon className="h-4 w-4 hover:cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className={cn("rounded-full", {
                                                "text-green-500 border-green-500":
                                                    booking.status ===
                                                    "success",
                                                "text-red-500 border-red-500":
                                                    booking.status === "failed",
                                                "text-orange-500 border-orange-500":
                                                    booking.status === "booked",
                                                "text-yellow-500 border-yellow-500":
                                                    booking.status ===
                                                    "processing",
                                                "text-blue-500 border-blue-500":
                                                    booking.status ===
                                                    "complete",
                                            })}
                                        >
                                            {booking.status}
                                        </Badge>
                                    </div>
                                    <Separator />
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex space-x-2 items-center">
                                            <Image
                                                src={`/images/icons/services/${booking.serviceCategorySlug}.png`}
                                                alt={
                                                    booking.serviceCategorySlug
                                                }
                                                height={100}
                                                width={100}
                                                className="h-10 w-10"
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-xs text-muted-foreground">
                                                    Service Category
                                                </span>
                                                <span>
                                                    {booking.serviceCategory}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-muted-foreground">
                                                Service Title
                                            </span>
                                            <span>{booking.serviceTitle}</span>
                                        </div>
                                        <div className="flex">
                                            <div className="flex w-1/2 flex-col">
                                                <span className="text-xs text-muted-foreground">
                                                    Booking Date
                                                </span>
                                                <span>{booking.date}</span>
                                            </div>
                                            <div className="flex w-1/2 flex-col">
                                                <span className="text-xs text-muted-foreground">
                                                    Booking Time
                                                </span>
                                                <span>{booking.time}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-muted-foreground">
                                                Service Delivery Address
                                            </span>
                                            <span>{booking.address}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-muted-foreground">
                                                Price
                                            </span>
                                            <span>₹ {booking.price}</span>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-2 items-center">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/innei.png" />
                                                <AvatarFallback>
                                                    {booking.partnerId}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-muted-foreground">
                                                    Service Partner
                                                </span>
                                                <span>
                                                    {booking.partnerName}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <div className="border rounded-full p-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900">
                                                <MessageSquareTextIcon className="h-5 w-5" />
                                            </div>
                                            <div className="border rounded-full p-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900">
                                                <FlagIcon className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookingTrackingPage;
