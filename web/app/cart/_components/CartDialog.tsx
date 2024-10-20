"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DialogDescription,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import {
    removeFromCart,
    selectCurrentItems,
} from "@/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ShoppingCartIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";

const CartDialog = () => {
    const cartItems = useAppSelector(selectCurrentItems);
    const dispatch = useAppDispatch();

    return (
        <Dialog>
            <DialogTrigger>
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
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col space-y-1 justify-center items-center">
                    <DialogTitle>Your Cart</DialogTitle>
                    <DialogDescription>
                        Your selected services will be shown here
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full">
                    <div className="max-h-80 overflow-y-scroll">
                        {cartItems.length > 0 ? (
                            <div className="flex flex-col space-y-2">
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
                    <DialogFooter className="flex space-x-2 mt-5">
                        {cartItems.length > 0 ? (
                            <>
                                <DialogClose asChild>
                                    <Button
                                        variant="outline"
                                        className="lg:w-80"
                                    >
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button className="lg:w-80">Checkout</Button>
                            </>
                        ) : null}
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CartDialog;
