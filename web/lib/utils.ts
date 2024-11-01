import { Booking, bookings } from "@/data/bookings";
import { services } from "@/data/services";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getRandomTenServices = (
    services: { title: string; slug: string; description: string }[],
    n: number = 10
): { title: string; slug: string; description: string }[] => {
    const shuffledServices = [...services].sort(() => 0.5 - Math.random());
    return shuffledServices.slice(0, n);
};

type Service = {
    title: string;
    slug: string;
    description: string;
    starRating: number;
    numberOfReviews: number;
};

export const findServiceBySlug = (
    services: Service[],
    slug: string
): Service | undefined => {
    return services.find(service => service.slug === slug);
};

export function getBookingById(bookingId: string): Booking | undefined {
    return bookings.find(booking => booking.id === bookingId);
}
