import { Metadata } from "next";
import Checkout from "./_components/Checkout";
import WithRoleProtection from "../(auth)/_components/WithRoleProtection";

export const metadata: Metadata = {
    title: "Checkout",
    description: "Home Service Management made easy!",
};

const CheckoutPage = () => {
    return (
        <WithRoleProtection allowedRoles={["ROLE_USER"]}>
            <main className="max-w-7xl m-auto px-5 lg:px-0">
                <Checkout />
            </main>
        </WithRoleProtection>
    );
};

export default CheckoutPage;
