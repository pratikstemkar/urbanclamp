import WithRoleProtection from "@/app/(auth)/_components/WithRoleProtection";
import { Metadata } from "next";
import AddCategoryForm from "./AddCategoryForm";

export const metadata: Metadata = {
    title: "Admin",
    description:
        "Book service partners for your home servicing needs at an affordable price. Don't waste your time in something you don't like. Spend your time for yourself and not for your home. We're there for your home.",
};

const AdminPage = () => {
    return (
        <WithRoleProtection allowedRoles={["ROLE_ADMIN"]}>
            <main className="max-w-7xl m-auto">
                <div className="flex w-full mt-10">
                    <div className="w-1/2">Hello Admin</div>
                    <div className="w-1/2">
                        <AddCategoryForm />
                    </div>
                </div>
            </main>
        </WithRoleProtection>
    );
};

export default AdminPage;
