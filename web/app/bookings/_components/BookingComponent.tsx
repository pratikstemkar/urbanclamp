"use client";

import { bookings } from "@/data/bookings";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const BookingComponent = () => {
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

export default BookingComponent;
