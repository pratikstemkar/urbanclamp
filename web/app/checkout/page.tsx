import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { WalletIcon } from "lucide-react";
import { Metadata } from "next";
import BillCard from "./_components/BillCard";
import AddressCard from "./_components/AddressCard";
import Link from "next/link";

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
                    <BillCard />
                </div>
                <div className="lg:w-2/3 flex flex-col space-y-5">
                    <AddressCard />
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
                            <Button
                                className="w-full"
                                asChild
                            >
                                <Link href="/checkout/success">
                                    Proceed to pay
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    );
};

export default CheckoutPage;
