"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/store/features/auth/AuthSlice";
import { useAppDispatch } from "@/store/hooks";
import { useAuth } from "@/store/hooks/useAuth";
import {
    CreditCardIcon,
    LogOutIcon,
    MapPinHouseIcon,
    SettingsIcon,
    TicketIcon,
    UserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const UserNav = () => {
    const router = useRouter();
    const auth = useAuth();
    const dispatch = useAppDispatch();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src={auth.user?.avatar}
                            alt={auth.user?.email}
                        />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56"
                align="end"
                forceMount
            >
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {auth.user?.firstName + " " + auth.user?.lastName}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {auth.user?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {/* <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            router.push("/user/hgas");
                        }}
                    >
                        <UserIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                        <TicketIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>My Tickets</span>
                    </DropdownMenuItem> */}
                    <DropdownMenuItem className="hover:cursor-pointer">
                        <CreditCardIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>Bookings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                        <MapPinHouseIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>Addresses</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            router.push("/settings");
                        }}
                    >
                        <SettingsIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="hover:cursor-pointer text-red-500 group"
                    onClick={() => {
                        dispatch(logout());
                    }}
                >
                    <LogOutIcon className="mr-2 w-4 h-4 group-hover:text-muted-foreground" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNav;
