import Image from "next/image";
import ServiceBoard from "./_components/ServiceBoard";
import RatingStats from "./_components/RatingStats";
import ServiceDisplay from "./_components/ServiceDisplay";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomesPage = () => {
    return (
        <main className="max-w-7xl m-auto px-5 lg:px-0 my-5 lg:mt-10 flex-col space-y-10">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-10">
                <div className="lg:w-1/2 flex flex-col space-y-5">
                    <h1 className="font-bold text-2xl lg:text-4xl tracking-tighter">
                        Home services at your doorstep!
                    </h1>
                    <ServiceBoard />
                    <Button
                        variant="outline"
                        asChild
                    >
                        <Link href="/homes/services">View all services</Link>
                    </Button>
                    <RatingStats />
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <Image
                        src="/images/homesposter.webp"
                        alt="homes"
                        width={800}
                        height={800}
                        className="rounded-lg"
                    />
                </div>
            </div>
            {/* <ServiceDisplay /> */}
        </main>
    );
};

export default HomesPage;
