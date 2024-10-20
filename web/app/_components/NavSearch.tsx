"use client";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import {
    Calculator,
    Calendar,
    CreditCard,
    SearchIcon,
    Settings,
    Smile,
    User,
} from "lucide-react";
import { useEffect, useState } from "react";

const NavSearch = () => {
    const [open, setOpen] = useState(false);

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
                className="lg:w-60 flex lg:justify-between group"
                onClick={() => setOpen(!open)}
                variant="outline"
            >
                <SearchIcon className="inline-flex lg:hidden h-4 w-4 lg:mr-2 lg:text-muted-foreground" />
                <span className="hidden lg:inline-flex text-xs text-muted-foreground group-hover:text-primary">
                    Search services...
                </span>
                <span className="hidden lg:inline-flex">
                    <p className="text-sm text-muted-foreground hover:text-primary">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </p>
                </span>
            </Button>
            <CommandDialog
                open={open}
                onOpenChange={setOpen}
            >
                <CommandInput placeholder="Search services ..." />
                <CommandList className="bg-background w-full shadow-lg rounded-bl-lg rounded-br-lg">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem disabled>
                            <Calculator />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    );
};

export default NavSearch;
