import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col space-y-5 items-center justify-center mt-10 lg:mt-32 px-2 lg:px-0">
                <h1 className="text-6xl font-extrabold tracking-tighter">
                    Home Services made easy!
                </h1>
                <h4 className="lg:text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque et assumenda eligendi odio doloribus eos
                    necessitatibus ullam ipsum officia, modi reiciendis illum
                    veritatis numquam odit vel? Expedita eaque impedit cum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto fuga velit ea illo pariatur, sed asperiores nobis
                    suscipit maiores impedit earum fugit mollitia nemo, dolor
                    iusto ipsum consequatur eaque maxime.
                </h4>
                <Button
                    size="lg"
                    className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                    asChild
                >
                    <Link href="/homes">
                        <span>Browse Services</span>
                    </Link>
                </Button>
            </div>
        </main>
    );
}
