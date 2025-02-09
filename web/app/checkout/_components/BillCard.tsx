"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTotalPrice } from "@/lib/utils";
import {
    removeFromCart,
    selectCurrentItems,
} from "@/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ShoppingCartIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";

const BillCard = () => {
    const cartItems = useAppSelector(selectCurrentItems);
    const dispatch = useAppDispatch();
    const visitCharge = 200;

    return (
        <Card>
            <CardContent className="mt-6">
                {cartItems.length > 0 ? (
                    <div>
                        <div className="flex space-x-4">
                            {/* <Image
                                src={`/images/icons/services/${cartItems[0].picture}.png`}
                                alt="imae"
                                height={100}
                                width={100}
                                className="h-14 w-14"
                            /> */}
                            <div className="flex flex-col">
                                <h1 className="font-bold">
                                    {cartItems[0].title}
                                </h1>
                                <h4 className="text-sm text-muted-foreground">
                                    {cartItems[0].description}
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5 mt-4">
                            <div className="flex flex-col space-y-2">
                                {cartItems.map((item, index) => (
                                    <div
                                        className="flex items-center"
                                        key={index}
                                    >
                                        <div className="grow">
                                            <div>{item.title}</div>
                                        </div>
                                        <div className="w-1/6 flex justify-end text-sm text-ellipsis">
                                            {item.partnerName}
                                        </div>
                                        <div className="w-1/6 flex justify-end space-x-1 text-sm mx-2">
                                            {"₹ "}
                                            {item.price}
                                        </div>
                                        <div className="text-sm mx-2">
                                            <Trash2Icon
                                                className="h-4 w-4 hover:cursor-pointer hover:text-red-500"
                                                onClick={() => {
                                                    dispatch(
                                                        removeFromCart(
                                                            item.title
                                                        )
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Separator />
                            <div className="flex flex-col space-y-2 text-sm">
                                <h1 className="font-bold">Bill Details</h1>
                                <div className="flex flex-col space-y-1 text-muted-foreground text-xs">
                                    <div className="flex justify-between">
                                        <span>Item Total</span>
                                        <span>
                                            ₹{" "}
                                            {getTotalPrice(cartItems)
                                                .valueOf()
                                                .toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Visit charges</span>
                                        <span>
                                            ₹ {visitCharge.valueOf().toFixed(2)}
                                        </span>
                                    </div>
                                    <Separator />
                                    <div className="flex justify-between">
                                        <span>Service Tip</span>
                                        <span>
                                            ₹{" "}
                                            {(
                                                getTotalPrice(
                                                    cartItems
                                                ).valueOf() * 0.1
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Platform Fees</span>
                                        <span>
                                            ₹{" "}
                                            {(
                                                (getTotalPrice(
                                                    cartItems
                                                ).valueOf() +
                                                    visitCharge.valueOf()) *
                                                0.02
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>GST and other taxes</span>
                                        <span>
                                            ₹{" "}
                                            {(
                                                (getTotalPrice(
                                                    cartItems
                                                ).valueOf() +
                                                    visitCharge.valueOf()) *
                                                0.18
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Separator
                                decorative
                                className="bg-primary h-0.5"
                            />
                            <div className="flex justify-between">
                                <span className="uppercase font-bold">
                                    To Pay
                                </span>
                                <span>
                                    ₹{" "}
                                    {(
                                        getTotalPrice(cartItems).valueOf() +
                                        visitCharge.valueOf() +
                                        getTotalPrice(cartItems).valueOf() *
                                            0.1 +
                                        (getTotalPrice(cartItems).valueOf() +
                                            visitCharge.valueOf()) *
                                            0.02 +
                                        (getTotalPrice(cartItems).valueOf() +
                                            visitCharge.valueOf()) *
                                            0.18
                                    ).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex space-x-5">
                        <div>
                            <ShoppingCartIcon />
                        </div>
                        <div>
                            You have removed all services from the cart. Add
                            some services in the cart to checkout.
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default BillCard;
