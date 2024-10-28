import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { HouseIcon, MapPinIcon, WalletIcon } from "lucide-react";
import { Metadata } from "next";
import AddAddressSheet from "./_components/AddAddressSheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Checkout",
    description: "Home Service Management made easy!",
};

const CheckoutPage = () => {
    return (
        <main className="max-w-7xl m-auto px-5 lg:px-0">
            <h1 className="text-2xl font-bold tracking-tighter mt-2 lg:mt-5">
                Checkout
            </h1>
            <div className="flex flex-col lg:flex-row-reverse gap-x-5 gap-y-5 mt-5">
                <div className="lg:w-1/3">
                    <Card>
                        <CardHeader>
                            <div className="flex space-x-4">
                                <Image
                                    src="/images/icons/services/pet-grooming.png"
                                    alt="imae"
                                    height={100}
                                    width={100}
                                    className="h-14 w-14"
                                />
                                <div className="flex flex-col">
                                    <h1 className="font-bold">Pet Grooming</h1>
                                    <h4 className="text-sm text-muted-foreground">
                                        Yerwada
                                    </h4>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-5">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex justify-between">
                                        <span>Haha Service</span>
                                        <span>Quatity</span>
                                        <span>₹ 76</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Haha Service</span>
                                        <span>Quatity</span>
                                        <span>₹ 76</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Haha Service</span>
                                        <span>Quatity</span>
                                        <span>₹ 76</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Haha Service</span>
                                        <span>Quatity</span>
                                        <span>₹ 76</span>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex flex-col space-y-2 text-sm">
                                    <h1 className="font-bold">Bill Details</h1>
                                    <div className="flex flex-col space-y-1 text-muted-foreground text-xs">
                                        <div className="flex justify-between">
                                            <span>Item Total</span>
                                            <span>₹ 716</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Visit charges</span>
                                            <span>₹ 46</span>
                                        </div>
                                        <Separator />
                                        <div className="flex justify-between">
                                            <span>Service Tip</span>
                                            <span>₹ 716</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Platform Fees</span>
                                            <span>₹ 716</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>GST and other taxes</span>
                                            <span>₹ 716</span>
                                        </div>
                                    </div>
                                </div>
                                <Separator
                                    decorative
                                    className="bg-black h-0.5"
                                />
                                <div className="flex justify-between">
                                    <span className="uppercase font-bold">
                                        To Pay
                                    </span>
                                    <span>₹ 716</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:w-2/3 flex flex-col space-y-5">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex space-x-2 items-center">
                                <MapPinIcon className="h-6 w-6" />
                                <span>Select delivery address</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div>
                                        <Card className="text-start shadow-none hover:shadow-md hover:cursor-pointer lg:h-64">
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
                                                        Lorem ipsum, dolor sit
                                                        amet consectetur
                                                        adipisicing elit. Cumque
                                                        repellat vel suscipit
                                                        harum natus assumenda,
                                                        quasi, eligendi minus
                                                        provident nam laboriosam
                                                        tenetur dolor hic vitae
                                                        omnis, nemo dicta enim?
                                                        Necessitatibus.
                                                    </p>
                                                    <Button>
                                                        Deliver here
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div>
                                        <AddAddressSheet />
                                    </div>
                                </div>
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex space-x-2 items-center">
                                <WalletIcon className="h-6 w-6" />
                                <span>Choose payment method</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col space-y-2">
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Harum illum inventore iste
                                vitae animi, cum eligendi tempore. Eos, dolore
                                tempore. Accusamus quaerat nostrum temporibus.
                                Repellendus perferendis reiciendis et distinctio
                                cupiditate?
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex w-full">
                            <Button>Proceed to pay</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    );
};

export default CheckoutPage;
