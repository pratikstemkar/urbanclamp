export type ServiceCategory = {
    categoryId: string;
    title: string;
    slug: string;
    description: string;
    starRating: number;
    reviewCount: number;
};

export const categories: ServiceCategory[] = [
    {
        categoryId: "C001",
        title: "Electrician",
        slug: "electrician",
        description:
            "Professional electrical services including wiring, repairs, and installations.",
        starRating: 4.7,
        reviewCount: 320,
    },
    {
        categoryId: "C002",
        title: "Home Cleaning",
        slug: "home-cleaning",
        description:
            "Comprehensive cleaning services for all areas of your home.",
        starRating: 4.8,
        reviewCount: 540,
    },
    {
        categoryId: "C003",
        title: "Plumbing",
        slug: "plumbing",
        description:
            "Expert plumbing services for repairs, installations, and maintenance.",
        starRating: 4.6,
        reviewCount: 410,
    },
    {
        categoryId: "C004",
        title: "Pest Control",
        slug: "pest-control",
        description:
            "Effective pest control solutions to keep your home pest-free.",
        starRating: 4.9,
        reviewCount: 260,
    },
    {
        categoryId: "C005",
        title: "AC Service & Repair",
        slug: "ac-service-repair",
        description:
            "Air conditioning installation, maintenance, and repair services.",
        starRating: 4.5,
        reviewCount: 300,
    },
    {
        categoryId: "C006",
        title: "Appliance Repair",
        slug: "appliance-repair",
        description:
            "Repair services for various home appliances, from refrigerators to microwaves.",
        starRating: 4.4,
        reviewCount: 210,
    },
    {
        categoryId: "C007",
        title: "Beauty Salon",
        slug: "beauty-salon",
        description:
            "Salon services including haircuts, styling, facials, and more.",
        starRating: 4.8,
        reviewCount: 430,
    },
    {
        categoryId: "C008",
        title: "Carpentry",
        slug: "carpentry",
        description:
            "Skilled carpentry services for repairs, installations, and custom furniture.",
        starRating: 4.6,
        reviewCount: 190,
    },
    {
        categoryId: "C009",
        title: "Geyser Service & Repair",
        slug: "geyser-service-repair",
        description: "Specialized geyser installation and repair services.",
        starRating: 4.7,
        reviewCount: 140,
    },
    {
        categoryId: "C010",
        title: "Laundry & Dry Cleaning",
        slug: "laundry-dry-cleaning",
        description:
            "Reliable laundry and dry cleaning services for all types of fabrics.",
        starRating: 4.5,
        reviewCount: 350,
    },
    {
        categoryId: "C011",
        title: "Furniture Assembly",
        slug: "furniture-assembly",
        description:
            "Professional assembly services for all types of furniture.",
        starRating: 4.7,
        reviewCount: 250,
    },
    {
        categoryId: "C012",
        title: "Home Renovation",
        slug: "home-renovation",
        description:
            "Comprehensive home renovation services including remodeling and repairs.",
        starRating: 4.8,
        reviewCount: 340,
    },
    {
        categoryId: "C013",
        title: "Interior Design",
        slug: "interior-design",
        description:
            "Creative interior design solutions for homes and offices.",
        starRating: 4.9,
        reviewCount: 290,
    },
    {
        categoryId: "C014",
        title: "Gardening & Landscaping",
        slug: "gardening-landscaping",
        description:
            "Gardening and landscaping services to beautify your outdoor spaces.",
        starRating: 4.6,
        reviewCount: 220,
    },
    {
        categoryId: "C015",
        title: "Massage Therapy",
        slug: "massage-therapy",
        description:
            "Professional massage therapy for relaxation and wellness.",
        starRating: 4.8,
        reviewCount: 360,
    },
    {
        categoryId: "C016",
        title: "Fitness & Personal Training",
        slug: "fitness-personal-training",
        description:
            "Personal training services to help you reach your fitness goals.",
        starRating: 4.7,
        reviewCount: 310,
    },
    {
        categoryId: "C017",
        title: "Pet Grooming",
        slug: "pet-grooming",
        description: "Comprehensive grooming services for your pets.",
        starRating: 4.5,
        reviewCount: 280,
    },
    {
        categoryId: "C018",
        title: "Event Planning & Decoration",
        slug: "event-planning-decoration",
        description:
            "Event planning and decoration services for all occasions.",
        starRating: 4.8,
        reviewCount: 400,
    },
    {
        categoryId: "C019",
        title: "Home Security Systems",
        slug: "home-security-systems",
        description: "Installation and maintenance of home security systems.",
        starRating: 4.6,
        reviewCount: 190,
    },
    {
        categoryId: "C020",
        title: "Laptop & Computer Repair",
        slug: "laptop-computer-repair",
        description:
            "Expert repair services for laptops and computers, including hardware and software issues.",
        starRating: 4.6,
        reviewCount: 275,
    },
    {
        categoryId: "C021",
        title: "Painting",
        slug: "painting",
        description:
            "Professional painting services for homes, offices, and buildings.",
        starRating: 4.7,
        reviewCount: 320,
    },
    {
        categoryId: "C022",
        title: "Chimney Repair",
        slug: "chimney-repair",
        description:
            "Maintenance and repair services for kitchen chimneys and exhausts.",
        starRating: 4.5,
        reviewCount: 180,
    },
    {
        categoryId: "C023",
        title: "Bathroom Cleaning",
        slug: "bathroom-cleaning",
        description:
            "Deep cleaning services for bathrooms, ensuring a hygienic and fresh space.",
        starRating: 4.8,
        reviewCount: 400,
    },
    {
        categoryId: "C024",
        title: "Refrigerator Repair",
        slug: "refrigerator-repair",
        description:
            "Comprehensive repair services for all types of refrigerators.",
        starRating: 4.6,
        reviewCount: 210,
    },
    {
        categoryId: "C025",
        title: "Washing Machine Repair",
        slug: "washing-machine-repair",
        description:
            "Repair services for washing machines of all brands and models.",
        starRating: 4.7,
        reviewCount: 230,
    },
    {
        categoryId: "C026",
        title: "Microwave Repair",
        slug: "microwave-repair",
        description:
            "Quick and reliable repair services for microwaves and ovens.",
        starRating: 4.5,
        reviewCount: 195,
    },
    {
        categoryId: "C027",
        title: "Sofa Cleaning",
        slug: "sofa-cleaning",
        description:
            "Professional sofa and upholstery cleaning services for spotless furniture.",
        starRating: 4.8,
        reviewCount: 340,
    },
    {
        categoryId: "C028",
        title: "Water Purifier Repair",
        slug: "water-purifier-repair",
        description:
            "Maintenance and repair services for all types of water purifiers.",
        starRating: 4.6,
        reviewCount: 160,
    },
    {
        categoryId: "C029",
        title: "Tile & Grout Cleaning",
        slug: "tile-grout-cleaning",
        description:
            "Specialized cleaning services for tiles and grout, restoring their original shine.",
        starRating: 4.7,
        reviewCount: 220,
    },
    {
        categoryId: "C030",
        title: "Locksmith Service",
        slug: "locksmith-service",
        description:
            "Expert locksmith services for residential, commercial, and automotive needs.",
        starRating: 4.8,
        reviewCount: 290,
    },
];
