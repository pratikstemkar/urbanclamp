import { Metadata } from "next";
import CreatePartnerForm from "./CreatePartnerForm";

export const metadata: Metadata = {
    title: "Create Partner Account",
    description:
        "Join as Service Partner to find clients to service and multiply your earnings.",
};

const CreatePartnerPage = () => {
    return (
        <main className="max-w-7xl m-auto">
            <div className="flex space-x-5 w-full mt-10">
                <div className="w-1/2">Hello</div>
                <div className="flex flex-col space-y-5 w-1/2">
                    <h1 className="text-2xl font-bold">
                        Create Partner Account
                    </h1>
                    <div>
                        <CreatePartnerForm />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CreatePartnerPage;
