import { Booking, bookings } from "@/data/bookings";
import { ServiceCategory } from "@/data/categories";
import { Service, services } from "@/data/services";
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

export const findServiceBySlug = (
    categories: ServiceCategory[],
    slug: string
): ServiceCategory | undefined => {
    return categories.find(category => category.slug === slug);
};

export function getBookingById(bookingId: string): Booking | undefined {
    return bookings.find(booking => booking.id === bookingId);
}

export function getServicesByCategory(
    services: Service[],
    categorySlug: string
): Service[] {
    return services.filter(service => service.categorySlug === categorySlug);
}
