import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { addToCart, selectCurrentItems } from "@/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceDescDialog = (props: {
    title: string;
    description: string;
    duration: string;
    numberOfReviews: number;
    starRating: number;
    price: number;
    availableBreeds: Array<string>;
    slug: string;
}) => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCurrentItems);

    return (
        <Dialog>
            <DialogTrigger className="truncate">{props.title}</DialogTrigger>
            <DialogContent className="w-11/12 rounded-lg">
                <ScrollArea className="-mt-6 -mx-6">
                    <div className="flex space-x-1">
                        <Image
                            src="https://picsum.photos/id/16/1080/720"
                            alt={props.slug}
                            height={300}
                            width={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="https://picsum.photos/id/28/1080/720"
                            alt={props.slug}
                            height={300}
                            width={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="https://picsum.photos/id/37/1080/720"
                            alt={props.slug}
                            height={300}
                            width={400}
                            className="rounded-lg"
                        />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                <div className="flex flex-col space-y-2">
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-xl font-bold">{props.title}</h1>
                        <div className="flex space-x-2 items-center">
                            <StarIcon className="h-4 w-4" />
                            <Link
                                href="#"
                                className="underline underline-offset-4 decoration-dotted"
                            >
                                <span className="text-xs">
                                    {props.starRating} ({props.numberOfReviews}{" "}
                                    Reviews)
                                </span>
                            </Link>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {props.description}
                        </div>
                        <div className="flex space-x-2 text-sm">
                            <span>₹{props.price}</span>
                            <span>&#x2022;</span>
                            <span>{props.duration}</span>
                        </div>
                        <div className="flex space-x-2">
                            {props.availableBreeds?.map((breed, index) => (
                                <span
                                    key={index}
                                    className="text-sm "
                                >
                                    {breed}
                                </span>
                            ))}
                        </div>
                    </div>
                    <DialogClose className="flex w-full">
                        <Button
                            onClick={() => {
                                dispatch(
                                    addToCart({
                                        item: {
                                            serviceSlug: props.slug,
                                            title: props.title,
                                            price: props.price,
                                            duration: props.duration,
                                            partnerName: "John Doe",
                                        },
                                    })
                                );
                            }}
                            className="w-full"
                        >
                            Add
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ServiceDescDialog;
