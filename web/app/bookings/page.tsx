import { Metadata } from "next";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { bookings } from "@/data/bookings";

export const metadata: Metadata = {
    title: "Your Bookings",
    description: "Check all your bookings at one place.",
};

const BookingsPage = () => {
    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col space-y-5 px-5 lg:px-0">
                <h1 className="text-2xl font-bold tracking-tighter">
                    Your Bookings
                </h1>
                <div>
                    <DataTable
                        columns={columns}
                        data={bookings}
                    />
                </div>
            </div>
        </main>
    );
};

export default BookingsPage;
