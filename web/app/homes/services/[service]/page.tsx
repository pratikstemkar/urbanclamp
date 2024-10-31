"use client";

import { CartDrawer } from "@/app/cart/_components/CartDrawer";
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
import {
    addToCart,
    emptyCart,
    selectCurrentItems,
} from "@/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ExternalLinkIcon, StarIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceDescDialog from "./_components/ServiceDescDialog";
import ReviewsDialog from "./_components/ReviewsDialog";

const ServicePage = ({ params }: { params: { service: string } }) => {
    const foundService = findServiceBySlug(services, params.service);
    if (!foundService) {
        notFound();
    }

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCurrentItems);

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
                            <div className="bg-green-600 text-white flex space-x-2 items-center px-2.5 py-1 rounded-md">
                                <StarIcon className="h-4 w-4" />
                                <span className="font-bold text-sm">
                                    {foundService?.starRating}
                                </span>
                            </div>
                            <ReviewsDialog
                                reviewCount={foundService?.numberOfReviews}
                                serviceTitle={foundService?.title}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="flex flex-col space-y-2 mb-2">
                        {petGroomingServices.map((service, index) => (
                            <Card key={index}>
                                <CardContent className="mt-4 -mb-2">
                                    <div className="flex space-x-2">
                                        <div className="flex flex-col space-y-2 w-5/6">
                                            <div className="text-lg font-bold flex space-x-2 items-center group hover:text-violet-500 hover:cursor-pointer">
                                                <span>
                                                    <ServiceDescDialog
                                                        title={service.title}
                                                        description={
                                                            service.description
                                                        }
                                                        duration={
                                                            service.duration
                                                        }
                                                        price={service.price}
                                                        starRating={
                                                            service.starRating
                                                        }
                                                        numberOfReviews={
                                                            service.numberOfReviews
                                                        }
                                                        availableBreeds={
                                                            service.availableBreeds
                                                        }
                                                    />
                                                </span>
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
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart({
                                                            item: {
                                                                serviceSlug:
                                                                    params.service,
                                                                title: service.title,
                                                                price: service.price,
                                                                duration:
                                                                    service.duration,
                                                                partnerName:
                                                                    "John Doe",
                                                            },
                                                        })
                                                    );
                                                }}
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
                <div className="hidden lg:block lg:w-1/4 ">
                    <Card className="sticky top-20">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span>Your Cart</span>
                                {cartItems.length > 0 ? (
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => dispatch(emptyCart())}
                                    >
                                        <Trash2Icon className="h-4 w-4 mr-2" />
                                        <span>Empty Cart</span>
                                    </Button>
                                ) : null}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                {cartItems.length == 0 ? (
                                    <div className="flex w-full flex-col justify-center items-center space-y-2">
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
                                ) : (
                                    <div className="flex flex-col space-y-5">
                                        <div className="flex-col space-y-2">
                                            {cartItems.map((cart, index) => (
                                                <Card
                                                    key={index}
                                                    className="flex"
                                                >
                                                    <CardContent className="pt-6 flex flex-col space-y-2">
                                                        <div className="text-base font-semibold">
                                                            {cart.title}
                                                        </div>
                                                        <div className="text-sm flex space-x-2">
                                                            <span>
                                                                ₹{cart.price}
                                                            </span>
                                                            <span>
                                                                &#x2022;
                                                            </span>
                                                            <span>
                                                                {cart.duration}
                                                            </span>
                                                        </div>
                                                        <div className="text-sm">
                                                            {cart.partnerName}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                        <div className="flex w-full justify-between items-center">
                                            <span>₹ 5000</span>
                                            <Button>Checkout</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
};

export default ServicePage;
