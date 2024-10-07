"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { selectCurrentItems } from "@/store/features/cart/CartSlice";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
    const cartItems = useAppSelector(selectCurrentItems);
    return (
        <div className="mt-5">
            {cartItems.length > 0 ? (
                <div className="flex flex-col space-y-2">
                    {cartItems?.map((cart, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6 flex flex-col space-y-2">
                                <h4 className="font-semibold text-lg">
                                    {cart.title}
                                </h4>
                                <div className="flex space-x-2 text-sm">
                                    <span>₹{cart.price}</span>
                                    <span>&#x2022;</span>
                                    <span>{cart.duration}</span>
                                </div>
                                <div>{cart.partnerName}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="w-full flex flex-col space-y-5 items-center justify-center mt-10 lg:mt-20">
                    <Image
                        src="/images/icons/empty-cart.png"
                        alt="hehe"
                        height={100}
                        width={100}
                    />
                    <div className="text-center space-y-0">
                        <h4>Your cart is empty</h4>
                        <h4 className="text-muted-foreground text-sm">
                            Lets add some services
                        </h4>
                    </div>
                    <Button
                        variant="outline"
                        asChild
                    >
                        <Link href="/homes">Explore Services</Link>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Cart;
