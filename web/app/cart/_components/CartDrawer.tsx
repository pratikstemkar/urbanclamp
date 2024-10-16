"use client";

import { ShoppingCartIcon, Trash2Icon } from "lucide-react";
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
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    removeFromCart,
    selectCurrentItems,
} from "@/store/features/cart/CartSlice";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CartDrawer() {
    const cartItems = useAppSelector(selectCurrentItems);
    const dispatch = useAppDispatch();

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
                    <div className="px-4 max-h-80 overflow-y-scroll">
                        {cartItems.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full">
                                {cartItems?.map((cart, index) => (
                                    <Card key={index}>
                                        <CardContent className="pt-6 flex flex-col space-y-2">
                                            <div className="font-semibold flex items-center justify-between">
                                                {cart.title}
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
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
                    <DrawerFooter className="flex flex-col lg:flex-row-reverse justify-center">
                        {cartItems.length > 0 ? (
                            <>
                                <Button className="lg:w-80">Checkout</Button>
                                <DrawerClose asChild>
                                    <Button
                                        variant="outline"
                                        className="lg:w-80"
                                    >
                                        Cancel
                                    </Button>
                                </DrawerClose>
                            </>
                        ) : null}
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
