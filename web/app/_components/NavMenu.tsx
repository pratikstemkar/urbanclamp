"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useAuth } from "@/store/hooks/useAuth";

const components: {
    title: string;
    href: string;
    description: string;
    slug: string;
}[] = [
    {
        title: "Pet Grooming",
        href: "/homes/services/pet-grooming",
        description: "Comprehensive grooming services for your pets.",
        slug: "pet-grooming",
    },
    {
        title: "Beauty Salon",
        href: "/homes/services/beauty-salon",
        description:
            "Salon services including haircuts, styling, facials, and more.",
        slug: "beauty-salon",
    },
    {
        title: "Gardening & Landscaping",
        href: "/homes/services/gardening-landscaping",
        description:
            "Gardening and landscaping services to beautify your outdoor spaces.",
        slug: "gardening-landscaping",
    },
    {
        title: "Plumbing",
        href: "/homes/services/plumbing",
        description:
            "Expert plumbing services for repairs, installations, and maintenance.",
        slug: "plumbing",
    },
    {
        title: "Sofa Cleaning",
        href: "/homes/services/sofa-cleaning",
        description:
            "Professional sofa and upholstery cleaning services for spotless furniture.",
        slug: "sofa-cleaning",
    },
    {
        title: "Electrician",
        href: "/homes/services/electrician",
        description:
            "Professional electrical services including wiring, repairs, and installations.",
        slug: "electrician",
    },
];

export function NavigationMenuDemo() {
    const auth = useAuth();

    return (
        <NavigationMenu className="hidden lg:inline-flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        Getting started
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full items-center w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Image
                                            src="/images/icons/house.png"
                                            alt="logo"
                                            height={100}
                                            width={100}
                                            className="h-14 w-14"
                                        />
                                        <h1 className="text-xl lg:text-2xl mb-2 mt-4">
                                            <span className="font-bold">
                                                Urban
                                            </span>
                                            <span className="font-light">
                                                Clamp
                                            </span>
                                        </h1>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Inventore voluptates, perspiciatis
                                            mollitia aperiam dolor quae velit
                                            ducimus labore!
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem
                                href="/"
                                title="Introduction"
                            >
                                What is UrbanClamp and what does it offer? Know
                                about our service.
                            </ListItem>
                            <ListItem
                                href="/about"
                                title="About Us"
                            >
                                Who are we and what do we aim for? Know more
                                about us.
                            </ListItem>
                            <ListItem
                                href="/tnc"
                                title="Terms & Conditions"
                            >
                                Terms and Conditions for our service partners
                                and users.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        Top Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map(component => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                    <Link
                        href="/partner"
                        legacyBehavior
                        passHref
                    >
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            {auth?.user?.roles.includes("ROLE_PARTNER")
                                ? "Partner Dashboard"
                                : "Become a Partner"}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {auth?.user?.roles.includes("ROLE_ADMIN") && (
                    <NavigationMenuItem>
                        <Link
                            href="/admin"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Admin
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
