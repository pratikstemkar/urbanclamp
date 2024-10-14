import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HowItWorks = () => {
    return (
        <div className="flex flex-col space-y-5 items-center justify-center px-2 lg:px-0">
            <h4 className="text-muted-foreground text-xl font-semibold">
                How it works?
            </h4>
            <h1 className="text-4xl font-extrabold tracking-tighter text-center">
                Hassle-free Home Services
            </h1>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 lg:space-x-2">
                <div className="flex-col space-y-2 text-center">
                    <h4 className="font-bold text-lg">Step 1</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, dolore nemo sint in consectetur optio culpa id
                        pariatur odit mollitia sit dolor rerum rem? Odio dolore
                        rem iste! Impedit, harum.
                    </p>
                </div>
                <div className="flex-col space-y-2 text-center">
                    <h4 className="font-bold text-lg">Step 2</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, dolore nemo sint in consectetur optio culpa id
                        pariatur odit mollitia sit dolor rerum rem? Odio dolore
                        rem iste! Impedit, harum.
                    </p>
                </div>
                <div className="flex-col space-y-2 text-center">
                    <h4 className="font-bold text-lg">Step 3</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, dolore nemo sint in consectetur optio culpa id
                        pariatur odit mollitia sit dolor rerum rem? Odio dolore
                        rem iste! Impedit, harum.
                    </p>
                </div>
            </div>
            <Button
                size="lg"
                className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                asChild
            >
                <Link href="/homes">
                    <span>Find your service partner</span>
                </Link>
            </Button>
        </div>
    );
};

export default HowItWorks;
