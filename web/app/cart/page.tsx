import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Your Cart",
    description: "Home Service Management made easy!",
};

const CartPage = () => {
    return (
        <main className="max-w-7xl m-auto mt-5 lg:mt-10 px-2 lg:px-0">
            <div>
                <h1 className="text-4xl font-bold tracking-tighter flex space-x-2 items-center">
                    <ShoppingCartIcon className="h-9 w-9" />
                    <span>Your Cart</span>
                </h1>
                <div>
                    <div className="w-full flex flex-col space-y-5 items-center justify-center mt-10 lg:mt-20">
                        <Image
                            src="/images/icons/empty-cart.png"
                            alt="hehe"
                            height={100}
                            width={100}
                        />
                        <div className="text-center space-y-0">
                            <h4>Your cart is empty</h4>
                            <h4 className="text-muted-foreground text-sm">
                                Lets add some services
                            </h4>
                        </div>
                        <Button
                            variant="outline"
                            asChild
                        >
                            <Link href="/homes">Explore Services</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
