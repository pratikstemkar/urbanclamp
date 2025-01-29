import { Metadata } from "next";
import BookingComponent from "./_components/BookingComponent";

export const metadata: Metadata = {
    title: "Your Bookings",
    description: "Check all your bookings at one place.",
};

const BookingsPage = () => {
    return <BookingComponent />;
};

export default BookingsPage;
