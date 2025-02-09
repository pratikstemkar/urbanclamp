import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SuccessPage = () => {
    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col justify-center items-center space-y-5 px-5 lg:px-0 mt-10">
                <Image
                    src="/images/icons/trust.png"
                    alt="trust"
                    height={200}
                    width={200}
                    className="h-28 w-28 lg:h-40 lg:w-40"
                />
                <h3 className="text-2xl font-bold text-center">
                    Your service order has been booked!
                </h3>
                <Button asChild>
                    <Link href="/bookings">Track your bookings</Link>
                </Button>
            </div>
        </main>
    );
};

export default SuccessPage;
