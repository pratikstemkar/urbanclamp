import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Home Service Management made easy!",
};

const PartnersPage = () => {
    return (
        <main className="max-w-7xl m-auto">
            <div>
                <h1 className="font-bold text-2xl">Dashboard</h1>
            </div>
        </main>
    );
};

export default PartnersPage;
