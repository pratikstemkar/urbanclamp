"use client";

import {
    CircleUserRound,
    HomeIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "lucide-react";

const BottomNav = () => {
    return (
        <nav className="sticky bottom-0 px-2 py-4 bg-background flex w-full lg:hidden hover:bg-red-500">
            <div className="flex w-full justify-around">
                <HomeIcon />
                <SearchIcon />
                <ShoppingCartIcon />
                <CircleUserRound />
            </div>
        </nav>
    );
};

export default BottomNav;
