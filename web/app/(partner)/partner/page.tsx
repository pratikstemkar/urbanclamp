import { Metadata } from "next";
import PartnerButton from "./dashboard/_components/PartnerButton";

export const metadata: Metadata = {
    title: "Become a Service Partner",
    description:
        "Join as Service Partner to find clients to service and multiply your earnings.",
};

const PartnersPage = () => {
    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col space-y-32 mt-32">
                <div className="flex flex-col space-y-5 items-center justify-center">
                    <h1 className="text-6xl font-extrabold tracking-tighter">
                        Find clients for your services with ease!
                    </h1>
                    <h4 className="lg:text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cumque et assumenda eligendi odio doloribus eos
                        necessitatibus ullam ipsum officia, modi reiciendis
                        illum veritatis numquam odit vel? Expedita eaque impedit
                        cum? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Architecto fuga velit ea illo pariatur, sed
                        asperiores nobis suscipit maiores impedit earum fugit
                        mollitia nemo, dolor iusto ipsum consequatur eaque
                        maxime.
                    </h4>
                    <PartnerButton />
                </div>
            </div>
        </main>
    );
};

export default PartnersPage;
