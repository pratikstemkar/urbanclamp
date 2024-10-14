import { Button } from "@/components/ui/button";
import React from "react";
import { ServiceCarousel } from "./ServiceCarousel";

const ServiceDisplay = () => {
    return (
        <>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-0 lg:px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>New and noteworthy</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-0 lg:px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>Most booked services</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
            <div className="flex-col space-y-2">
                <div className="flex justify-between items-center px-0 lg:px-2">
                    <h4 className="text-2xl font-bold tracking-tighter">
                        <span>AC & Appliance Repair</span>
                    </h4>
                    <Button variant="outline">See All</Button>
                </div>
                <ServiceCarousel />
            </div>
        </>
    );
};

export default ServiceDisplay;
