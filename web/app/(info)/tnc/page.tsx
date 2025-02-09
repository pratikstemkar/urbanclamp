import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Home Service Management made easy!",
};

const TermsPage = () => {
    return (
        <main className="max-w-7xl m-auto">
            <div>
                <h1 className="font-bold text-2xl tracking-tighter">
                    Terms &amp; Conditions
                </h1>
            </div>
        </main>
    );
};

export default TermsPage;
