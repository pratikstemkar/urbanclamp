import { StarIcon, Users2Icon } from "lucide-react";
import React from "react";

const RatingStats = () => {
    return (
        <div className="flex px-2">
            <div className="w-1/2 flex space-x-4 items-center">
                <div>
                    <StarIcon className="h-8 w-8" />
                </div>
                <div className="flex-col">
                    <div>
                        <span className="font-bold">4.8</span>
                    </div>
                    <div>
                        <span className="text-sm text-muted-foreground">
                            Service Rating
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex space-x-4 items-center">
                <div>
                    <Users2Icon className="h-8 w-8" />
                </div>
                <div className="flex-col">
                    <div>
                        <span className="font-bold">12M+</span>
                    </div>
                    <div>
                        <span className="text-sm text-muted-foreground">
                            Customers Globally
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingStats;
