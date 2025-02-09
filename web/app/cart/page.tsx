import { ShoppingCartIcon } from "lucide-react";
import { Metadata } from "next";
import Cart from "./_components/Cart";

export const metadata: Metadata = {
    title: "Your Cart",
    description: "Home Service Management made easy!",
};

const CartPage = () => {
    return (
        <main className="max-w-7xl m-auto mt-5 lg:mt-10 px-5 lg:px-0">
            <div>
                <h1 className="text-2xl lg:text-4xl font-bold tracking-tighter flex space-x-2 items-center">
                    <ShoppingCartIcon className="h-6 w-6 lg:h-9 lg:w-9" />
                    <span>Your Cart</span>
                </h1>
                <div>
                    <Cart />
                </div>
            </div>
        </main>
    );
};

export default CartPage;
