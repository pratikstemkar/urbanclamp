"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalPrice } from "@/lib/utils";
import {
    emptyCart,
    removeFromCart,
    selectCurrentItems,
} from "@/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceCart = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCurrentItems);

    return (
        <Card className="sticky top-20">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span className="text-lg">Your Cart</span>
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
                                className="dark:invert"
                            />
                            <h4 className="text-muted-foreground text-sm">
                                Your cart has no services
                            </h4>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-5">
                            <div className="flex-col space-y-4">
                                {cartItems.map((cart, index) => (
                                    <div key={index}>
                                        <div className="flex flex-col space-y-1 w-full">
                                            <div className="flex w-full justify-between items-center">
                                                <div className="flex flex-col">
                                                    <span className="text-base font-semibold">
                                                        {cart.title}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        {cart.serviceCategory}
                                                    </span>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() =>
                                                        dispatch(
                                                            removeFromCart(
                                                                cart.title
                                                            )
                                                        )
                                                    }
                                                >
                                                    <Trash2Icon className="h-[1.2rem] w-[1.2rem] text-red-500" />
                                                </Button>
                                            </div>
                                            <div className="text-sm flex space-x-2">
                                                <span>₹ {cart.price}</span>
                                                <span>&#x2022;</span>
                                                <span>{cart.duration}</span>
                                            </div>
                                            <Link
                                                href={`/partners/${cart.partnerSlug}`}
                                            >
                                                <span className="text-sm hover:underline underline-offset-4">
                                                    {cart.partnerName}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex w-full flex-col space-y-2">
                                <Button
                                    asChild
                                    className="w-full"
                                >
                                    <Link href="/checkout">Checkout</Link>
                                </Button>
                                <Button
                                    className="w-full"
                                    variant="destructive"
                                    onClick={() => dispatch(emptyCart())}
                                >
                                    <Trash2Icon className="h-4 w-4 mr-2" />
                                    <span>Empty Cart</span>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ServiceCart;
