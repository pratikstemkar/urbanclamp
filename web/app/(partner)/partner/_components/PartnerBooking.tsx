"use client";

import { columns } from "../../../bookings/_components/columns";
import { DataTable } from "../../../bookings/_components/data-table";
import { useGetBookingsByPartnerIdQuery } from "@/store/services/bookingApi";
import { useAuth } from "@/store/hooks/useAuth";
import { useGetPartnerByEmailQuery } from "@/store/services/partnerApi";

const PartnerBooking = () => {
    const { user, isLoading: isAuthLoading } = useAuth();

    const userEmail = user?.email || "";

    const {
        data: partner,
        isLoading: partnerLoading,
        isError,
    } = useGetPartnerByEmailQuery(userEmail, {
        skip: !userEmail,
    });

    const partnerId = partner?.id || "";
    const { data, isLoading, error } = useGetBookingsByPartnerIdQuery(
        partnerId,
        {
            skip: !partnerId,
        }
    );

    if (isAuthLoading || partnerLoading || isLoading) {
        return <p>Loading bookings...</p>;
    }

    if (!user) {
        return <p className="text-red-500">User not found. Please log in.</p>;
    }

    if (isError || error) {
        return <p className="text-red-500">Failed to load bookings.</p>;
    }

    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col space-y-5 px-5 lg:px-0">
                <h1 className="text-2xl font-bold tracking-tighter">
                    Your Partner Bookings
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

export default PartnerBooking;
