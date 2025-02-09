import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const GetStarted = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0 justify-between px-2 lg:px-0">
            <div className="flex-col space-y-5 items-center justify-center text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tighter">
                    Ready to get started?
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 lg:w-1/3">
                <Input
                    placeholder="Enter your pincode"
                    className="h-12"
                />
                <Button className="h-12">Find your Service Partner</Button>
            </div>
        </div>
    );
};

export default GetStarted;
