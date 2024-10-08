"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useAppSelector } from "@/store/hooks";
import { selectCurrentItems } from "@/store/features/cart/CartSlice";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CartDrawer() {
    const cartItems = useAppSelector(selectCurrentItems);

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                >
                    <div className="flex justify-center items-start relative">
                        <ShoppingCartIcon className="h-[1.2rem] w-[1.2rem]" />
                        {cartItems.length > 0 ? (
                            <div className="bg-red-500 text-white rounded-full flex justify-center items-center w-4 h-4 -ml-2 -mt-2">
                                <span className="text-xs">
                                    {cartItems.length}
                                </span>
                            </div>
                        ) : null}
                    </div>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm lg:max-w-7xl">
                    <DrawerHeader className="flex flex-col space-y-1 justify-center items-center">
                        <DrawerTitle>Your Cart</DrawerTitle>
                        <DrawerDescription>
                            Your selected services will be shown here
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4">
                        {cartItems.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full">
                                {cartItems?.map((cart, index) => (
                                    <Card key={index}>
                                        <CardContent className="pt-6 flex flex-col space-y-2">
                                            <h4 className="font-semibold">
                                                {cart.title}
                                            </h4>
                                            <div className="flex space-x-2 text-sm">
                                                <span>₹{cart.price}</span>
                                                <span>&#x2022;</span>
                                                <span>{cart.duration}</span>
                                            </div>
                                            <div className="text-sm">
                                                {cart.partnerName}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full flex flex-col space-y-5 items-center justify-center">
                                <Image
                                    src="/images/icons/empty-cart.png"
                                    alt="hehe"
                                    height={80}
                                    width={80}
                                />
                                <div className="text-center space-y-0">
                                    <h4>Your cart is empty</h4>
                                    <h4 className="text-muted-foreground text-sm">
                                        Lets add some services
                                    </h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <DrawerFooter className="flex flex-col lg:flex-row-reverse">
                        <Button className="lg:w-80">Checkout</Button>
                        <DrawerClose asChild>
                            <Button
                                variant="outline"
                                className="lg:w-80"
                            >
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
