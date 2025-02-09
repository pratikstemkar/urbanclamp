"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useGetBookingsByUserIdQuery } from "@/store/services/bookingApi";
import { useAuth } from "@/store/hooks/useAuth";

const BookingComponent = () => {
    const { user, isLoading: isAuthLoading } = useAuth();

    // Wait until user is loaded before making the API call
    const userId = user?.id;
    const { data, isLoading, error } = useGetBookingsByUserIdQuery(userId, {
        skip: !userId, // Skip API call if userId is undefined
    });

    if (isAuthLoading || isLoading) {
        return <p>Loading bookings...</p>;
    }

    if (!userId) {
        return <p className="text-red-500">User not found. Please log in.</p>;
    }

    if (error) {
        return <p className="text-red-500">Failed to load bookings.</p>;
    }

    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col space-y-5 px-5 lg:px-0">
                <h1 className="text-2xl font-bold tracking-tighter">
                    Your Bookings
                </h1>
                <div>
                    <DataTable
                        columns={columns}
                        data={data || []}
                    />
                </div>
            </div>
        </main>
    );
};

export default BookingComponent;
