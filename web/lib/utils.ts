import { Booking, bookings } from "@/data/bookings";
import { ServiceCategory } from "@/data/categories";
import { Partner } from "@/data/partners";
import { Service, services } from "@/data/services";
import { CartItem } from "@/store/features/cart/CartSlice";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getRandomTenServices = (
    services: {
        title: string;
        id: number;
        description: string;
        picture: string;
    }[],
    n: number = 10
): { title: string; id: number; description: string; picture: string }[] => {
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

export function getPartnerBySlug(
    partners: Partner[],
    partnerSlug: string
): Partner | undefined {
    return partners.find(partner => partner.slug === partnerSlug);
}

export function getPartnerImgUrl(
    partnerSlug: string,
    partners: Partner[]
): string | undefined {
    const partner = partners.find(p => p.slug === partnerSlug);
    return partner ? partner.imgUrl : undefined;
}

export function getCategoryBySlug(
    categorySlug: string,
    categories: ServiceCategory[]
): string | undefined {
    const category = categories.find(p => p.slug === categorySlug);
    return category ? category.title : undefined;
}

export function getTotalPrice(cartItems: CartItem[]): Number {
    return cartItems.reduce((total, item) => total + item.price, 0);
}
