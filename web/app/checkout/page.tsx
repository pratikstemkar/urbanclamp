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
import ProceedToPay from "./_components/ProceedToPay";

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
                    <ProceedToPay />
                </div>
            </div>
        </main>
    );
};

export default CheckoutPage;
