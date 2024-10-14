import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { StarIcon } from "lucide-react";
import Link from "next/link";

const ServiceDescDialog = (props: {
    title: string;
    description: string;
    duration: string;
    numberOfReviews: number;
    starRating: number;
    price: number;
    availableBreeds: Array<string>;
}) => {
    return (
        <Dialog>
            <DialogTrigger>{props.title}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{props.title}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-2">
                    <div>
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
                    <Button>Add</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ServiceDescDialog;
