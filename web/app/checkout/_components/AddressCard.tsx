"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckIcon, HouseIcon, MapPinIcon } from "lucide-react";
import AddAddressSheet from "./AddAddressSheet";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ProceedToPay from "./ProceedToPay";

const AddressCard = (props: { itemCount: number }) => {
    const [done, setDone] = useState(false);

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex space-x-2 items-center">
                        <div className="flex justify-center items-start relative">
                            <MapPinIcon className="h-6 w-6" />
                            {done ? (
                                <div className="bg-green-500 text-white rounded-full flex justify-center items-center w-4 h-4 -ml-3 -mt-1">
                                    <CheckIcon />
                                </div>
                            ) : null}
                        </div>

                        <span>
                            {!done
                                ? "Select delivery address"
                                : "Delivery Address Selected"}
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <div
                            className={cn("grid gap-5", {
                                "grid-cols-1 lg:grid-cols-2": !done,
                            })}
                        >
                            <div>
                                <Card
                                    className={cn(
                                        "text-start shadow-none hover:shadow-md hover:cursor-pointer",
                                        {
                                            // "lg:h-64": !done,
                                        }
                                    )}
                                >
                                    <CardContent className="flex space-x-5 mt-6">
                                        <div>
                                            <HouseIcon />
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <div>
                                                <h1 className="font-bold tracking-tighter">
                                                    Home
                                                </h1>
                                                <h4 className="text-xs text-muted-foreground">
                                                    Phule Nagar, Yerwada
                                                </h4>
                                            </div>
                                            <p className="text-muted-foreground">
                                                704B, Yada Yada Society, Near
                                                RTO Phule Nagar, Phule Nagar,
                                                Yerwada - 411006
                                            </p>
                                            {!done && (
                                                <Button
                                                    onClick={() =>
                                                        setDone(true)
                                                    }
                                                    variant={
                                                        done
                                                            ? "default"
                                                            : "outline"
                                                    }
                                                >
                                                    Deliver Here
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            {!done && (
                                <div>
                                    <AddAddressSheet />
                                </div>
                            )}
                        </div>
                    </CardDescription>
                </CardContent>
            </Card>
            <ProceedToPay done={done && props.itemCount.valueOf() > 0} />
        </>
    );
};

export default AddressCard;
