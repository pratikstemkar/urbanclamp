import { Loader2Icon } from "lucide-react";

const Loading = () => {
    return (
        <main className="flex w-full justify-center items-center mt-64">
            <Loader2Icon className="animate-spin h-10 w-10" />
        </main>
    );
};

export default Loading;
