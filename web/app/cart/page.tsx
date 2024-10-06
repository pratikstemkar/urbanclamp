import { ShoppingCartIcon } from "lucide-react";

const CartPage = () => {
    return (
        <main className="max-w-7xl m-auto mt-5 lg:mt-10 px-2 lg:px-0">
            <div>
                <h1 className="text-4xl font-bold tracking-tighter flex space-x-2 items-center">
                    <ShoppingCartIcon className="h-9 w-9" />
                    <span>Your Cart</span>
                </h1>
                <div></div>
            </div>
        </main>
    );
};

export default CartPage;
