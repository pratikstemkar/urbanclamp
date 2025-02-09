"use client";

import { Loader2Icon } from "lucide-react";
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("../_components/Map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <Loader2Icon className="animate-spin h-10 w-10" />
        </div>
    ),
});

const TrackMap = () => {
    return <LazyMap />;
};

export default TrackMap;
