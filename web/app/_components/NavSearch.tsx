"use client";

import { Button } from "@/components/ui/button";
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
import { useEffect, useState } from "react";

const NavSearch = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(open => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <div className="hidden lg:inline-flex">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
            >
                <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
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

export default NavSearch;
