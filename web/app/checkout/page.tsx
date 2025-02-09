import { Metadata } from "next";
import Checkout from "./_components/Checkout";

export const metadata: Metadata = {
    title: "Checkout",
    description: "Home Service Management made easy!",
};

const CheckoutPage = () => {
    return (
        <main className="max-w-7xl m-auto px-5 lg:px-0">
            <Checkout />
        </main>
    );
};

export default CheckoutPage;
