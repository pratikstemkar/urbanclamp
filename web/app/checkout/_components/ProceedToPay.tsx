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
import { emptyCart, selectCurrentItems } from "@/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCreateBookingMutation } from "@/store/services/bookingApi";
import { useCreatePaymentMutation } from "@/store/services/paymentApi";
import { Loader2Icon, WalletIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProceedToPay = (props: {
    done: boolean;
    userId: number;
    partnerId: string;
    serviceId: string;
    bookingDate: string;
    timeSlot: string;
    amount: number;
    serviceTitle: string;
}) => {
    const dispatch = useAppDispatch();
    const [createBooking, { isLoading, isError, isSuccess }] =
        useCreateBookingMutation();
    const [createPayment, { isLoading: payLoading, isSuccess: paySuccess }] =
        useCreatePaymentMutation();
    const router = useRouter();

    async function submit() {
        try {
            const response = await createBooking({
                userId: props.userId,
                partnerId: props.partnerId,
                serviceId: props.serviceId,
                bookingDate: props.bookingDate,
                timeSlot: props.timeSlot,
                amount: props.amount,
            }).unwrap();
            toast("Booking added!");

            console.log(response);
            dispatch(emptyCart());
            const payRes = await createPayment({
                amount: props.amount * 100,
                name: props.serviceTitle,
                currency: "INR",
                quantity: 1,
                bookingId: response.id,
            });
            router.push(payRes.data.sessionUrl);
        } catch (err) {
            toast("Booking not added!", {
                description: JSON.stringify(err),
            });
        }
    }

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
                    className="w-full flex"
                    onClick={() => submit()}
                    disabled={!props.done && !isLoading}
                >
                    <span>
                        {isLoading && (
                            <Loader2Icon className="animate-spin h-4 w-4 mr-2" />
                        )}
                        Proceed to pay
                    </span>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProceedToPay;
