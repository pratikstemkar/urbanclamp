"use client";

import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

const CopyBookingId = () => {
    return (
        <CopyIcon
            className="h-4 w-4 hover:cursor-pointer"
            onClick={() => {
                toast("Booking ID Copied!");
            }}
        />
    );
};

export default CopyBookingId;
