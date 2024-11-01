"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { emptyCart } from "@/store/features/cart/CartSlice";
import { useAppDispatch } from "@/store/hooks";
import { WalletIcon } from "lucide-react";
import Link from "next/link";

const ProceedToPay = (props: { done: boolean }) => {
    const dispatch = useAppDispatch();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex space-x-2 items-center">
                    <WalletIcon className="h-6 w-6" />
                    <span>Choose payment method</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
                <CardDescription>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum illum inventore iste vitae animi, cum eligendi
                    tempore. Eos, dolore tempore. Accusamus quaerat nostrum
                    temporibus. Repellendus perferendis reiciendis et distinctio
                    cupiditate?
                </CardDescription>
            </CardContent>
            <CardFooter className="flex w-full">
                <Button
                    className="w-full"
                    onClick={() => dispatch(emptyCart())}
                    disabled={!props.done}
                    asChild
                >
                    <Link href="/checkout/success">Proceed to pay</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProceedToPay;
