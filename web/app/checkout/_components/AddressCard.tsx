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
import { cn, getTotalPrice } from "@/lib/utils";
import ProceedToPay from "./ProceedToPay";
import { useGetAddressesByUserIdQuery } from "@/store/services/addressApi";
import { useAuth } from "@/store/hooks/useAuth";
import { useAppSelector } from "@/store/hooks";
import { selectCurrentItems } from "@/store/features/cart/CartSlice";

const AddressCard = ({ itemCount }: { itemCount: number }) => {
    const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
    const { user, isLoading: isAuthLoading } = useAuth();
    const cartItems = useAppSelector(selectCurrentItems);

    const userId = user?.id;
    const {
        data: addresses,
        isLoading,
        isFetching,
        error,
        refetch, // Added refetch function
    } = useGetAddressesByUserIdQuery(userId, {
        skip: !userId,
    });

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex space-x-2 items-center">
                        <div className="flex justify-center items-start relative">
                            <MapPinIcon className="h-6 w-6" />
                            {selectedAddress !== null && (
                                <div className="bg-green-500 text-white rounded-full flex justify-center items-center w-4 h-4 -ml-3 -mt-1">
                                    <CheckIcon />
                                </div>
                            )}
                        </div>
                        <span>
                            {selectedAddress === null
                                ? "Select delivery address"
                                : "Delivery Address Selected"}
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        {isAuthLoading || isLoading || isFetching ? ( // Show loading when fetching
                            <p>Loading addresses...</p>
                        ) : error ? (
                            <p className="text-red-500">
                                Failed to load addresses.
                            </p>
                        ) : addresses && addresses.length > 0 ? (
                            <div
                                className={cn("grid gap-5", {
                                    "grid-cols-1 lg:grid-cols-2":
                                        selectedAddress === null,
                                })}
                            >
                                {addresses.map(addr => (
                                    <Card
                                        key={addr.id}
                                        className={cn(
                                            "text-start shadow-none hover:shadow-md hover:cursor-pointer",
                                            {
                                                "border-2 border-green-500":
                                                    selectedAddress === addr.id,
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
                                                        {addr.street}
                                                    </h1>
                                                    <h4 className="text-xs text-muted-foreground">
                                                        {addr.city}
                                                    </h4>
                                                </div>
                                                <p className="text-muted-foreground">
                                                    {addr.state} -{" "}
                                                    {addr.pinCode}
                                                </p>
                                                {selectedAddress === null && (
                                                    <Button
                                                        onClick={() =>
                                                            setSelectedAddress(
                                                                addr.id
                                                            )
                                                        }
                                                        variant="outline"
                                                    >
                                                        Deliver Here
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                                {selectedAddress === null && (
                                    <div>
                                        <AddAddressSheet
                                            refetchAddresses={refetch}
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                {selectedAddress === null && (
                                    <div>
                                        <AddAddressSheet
                                            refetchAddresses={refetch}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </CardDescription>
                </CardContent>
            </Card>
            <ProceedToPay
                done={selectedAddress != null}
                userId={user?.id}
                partnerId={cartItems[0]?.partnerSlug}
                serviceId={cartItems[0]?.serviceSlug}
                serviceTitle={cartItems[0]?.title}
                bookingDate={new Date().toISOString().split("T")[0]}
                timeSlot="12:00"
                amount={parseFloat(
                    (
                        getTotalPrice(cartItems).valueOf() +
                        200 +
                        getTotalPrice(cartItems).valueOf() * 0.1 +
                        (getTotalPrice(cartItems).valueOf() + 200) * 0.02 +
                        (getTotalPrice(cartItems).valueOf() + 200) * 0.18
                    ).toFixed(2)
                )}
            />
        </>
    );
};

export default AddressCard;
