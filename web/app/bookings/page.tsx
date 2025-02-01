import { Metadata } from "next";
import BookingComponent from "./_components/BookingComponent";
import WithRoleProtection from "../(auth)/_components/WithRoleProtection";

export const metadata: Metadata = {
    title: "Your Bookings",
    description: "Check all your bookings at one place.",
};

const BookingsPage = () => {
    return (
        <WithRoleProtection allowedRoles={["ROLE_USER"]}>
            <BookingComponent />
        </WithRoleProtection>
    );
};

export default BookingsPage;
