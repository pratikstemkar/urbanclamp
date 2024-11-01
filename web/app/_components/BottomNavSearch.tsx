"use client";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { categories } from "@/data/categories";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BottomNavSearch = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="lg:hidden">
            <SearchIcon
                className="hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            />
            <CommandDialog
                open={open}
                onOpenChange={setOpen}
            >
                <CommandInput placeholder="Search services ..." />
                <CommandList className="bg-background w-full shadow-lg rounded-bl-lg rounded-br-lg">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Service Categories">
                        {categories.map((category, index) => (
                            <CommandItem
                                key={index}
                                className="flex space-x-5 items-center"
                                onSelect={() => {
                                    router.push(
                                        `/homes/services/${category.slug}`
                                    );
                                    setOpen(!open);
                                }}
                            >
                                <Image
                                    src={`/images/icons/services/${category.slug}.png`}
                                    alt={category.slug}
                                    height={50}
                                    width={50}
                                />
                                <span>{category.title}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    );
};

export default BottomNavSearch;
