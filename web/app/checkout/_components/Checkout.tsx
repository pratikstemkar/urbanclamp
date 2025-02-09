"use client";

import { useAppSelector } from "@/store/hooks";
import AddressCard from "./AddressCard";
import BillCard from "./BillCard";
import { selectCurrentItems } from "@/store/features/cart/CartSlice";

const Checkout = () => {
    const cartItems = useAppSelector(selectCurrentItems);

    return (
        <div>
            <h1 className="text-2xl font-bold tracking-tighter mt-2 lg:mt-5">
                Checkout
            </h1>
            <div className="flex flex-col lg:flex-row-reverse gap-x-5 gap-y-5 mt-5">
                <div className="lg:w-1/3">
                    <BillCard />
                </div>
                <div className="lg:w-2/3 flex flex-col space-y-5">
                    <AddressCard itemCount={cartItems.length} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
