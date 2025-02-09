export type Review = {
    reviewId: string;
    bookingId: string;
    userId: string;
    fullName: string;
    serviceSlug: string;
    serviceCategorySlug: string;
    text: string;
    starRating: number;
    date: string;
};

export const reviews: Review[] = [
    {
        reviewId: "R001",
        bookingId: "B001",
        userId: "U001",
        fullName: "John Doe",
        serviceSlug: "home-deep-cleaning",
        serviceCategorySlug: "home-cleaning",
        text: "Amazing service! Very thorough and professional.",
        starRating: 5,
        date: "2023-09-15",
    },
    {
        reviewId: "R002",
        bookingId: "B002",
        userId: "U002",
        fullName: "Jane Smith",
        serviceSlug: "ac-installation",
        serviceCategorySlug: "ac-service-repair",
        text: "Quick and efficient installation. Highly recommended!",
        starRating: 4,
        date: "2023-09-18",
    },
    {
        reviewId: "R003",
        bookingId: "B003",
        userId: "U003",
        fullName: "Alice Johnson",
        serviceSlug: "pest-control-spray",
        serviceCategorySlug: "pest-control",
        text: "Solved my pest problem completely!",
        starRating: 5,
        date: "2023-09-20",
    },
    {
        reviewId: "R004",
        bookingId: "B004",
        userId: "U004",
        fullName: "Robert Brown",
        serviceSlug: "carpentry-repair",
        serviceCategorySlug: "carpentry",
        text: "Very skilled carpenter, fixed everything perfectly.",
        starRating: 4,
        date: "2023-09-22",
    },
    {
        reviewId: "R005",
        bookingId: "B005",
        userId: "U005",
        fullName: "Emily Clark",
        serviceSlug: "geyser-repair",
        serviceCategorySlug: "geyser-service-repair",
        text: "Great service, my geyser is working like new.",
        starRating: 5,
        date: "2023-09-25",
    },
    {
        reviewId: "R006",
        bookingId: "B006",
        userId: "U006",
        fullName: "Michael Green",
        serviceSlug: "laundry-service",
        serviceCategorySlug: "laundry-dry-cleaning",
        text: "Clean clothes, on time! Will use again.",
        starRating: 4,
        date: "2023-09-28",
    },
    {
        reviewId: "R007",
        bookingId: "B007",
        userId: "U007",
        fullName: "Sarah White",
        serviceSlug: "plumbing-repair",
        serviceCategorySlug: "plumbing",
        text: "Excellent plumber, fixed my leak in no time.",
        starRating: 5,
        date: "2023-09-30",
    },
    {
        reviewId: "R008",
        bookingId: "B008",
        userId: "U008",
        fullName: "James Hall",
        serviceSlug: "beauty-salon-haircut",
        serviceCategorySlug: "beauty-salon",
        text: "Best haircut I've ever had! Highly skilled stylist.",
        starRating: 5,
        date: "2023-10-02",
    },
    {
        reviewId: "R009",
        bookingId: "B009",
        userId: "U009",
        fullName: "Olivia King",
        serviceSlug: "appliance-repair",
        serviceCategorySlug: "appliance-repair",
        text: "Fast and reliable service. My appliance works perfectly.",
        starRating: 4,
        date: "2023-10-05",
    },
    {
        reviewId: "R010",
        bookingId: "B010",
        userId: "U010",
        fullName: "Daniel Scott",
        serviceSlug: "electrical-wiring",
        serviceCategorySlug: "electrician",
        text: "Fixed all wiring issues efficiently. Very knowledgeable.",
        starRating: 5,
        date: "2023-10-07",
    },
];
