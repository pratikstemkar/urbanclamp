import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Home Service Management made easy!",
};

const PrivacyPage = () => {
    return (
        <main className="max-w-7xl m-auto">
            <div>
                <h1 className="font-bold text-2xl tracking-tighter">
                    Privacy Policy
                </h1>
            </div>
        </main>
    );
};

export default PrivacyPage;
