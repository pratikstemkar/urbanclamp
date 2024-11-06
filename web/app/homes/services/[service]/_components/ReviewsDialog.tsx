import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Review, reviews } from "@/data/reviews";
import { StarIcon } from "lucide-react";

const ReviewsDialog = (props: {
    reviewCount: number;
    serviceTitle: string;
    starRating: number;
    reviews: Array<Review>;
}) => {
    return (
        <Dialog>
            <DialogTrigger>
                <span className="underline underline-offset-4 decoration-dotted text-sm">
                    {props.reviewCount} Reviews
                </span>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-lg">
                <div className="flex flex-col space-y-5">
                    <h1 className="text-xl font-bold tracking-tighter">
                        Reviews for {props.serviceTitle}
                    </h1>
                    <div className="flex flex-col space-y-1">
                        <div className="flex text-lg items-center">
                            <StarIcon className="h-6 w-6 mr-2" />
                            <span className="text-xl font-bold">
                                {props.starRating}
                            </span>
                        </div>
                        <div className="text-muted-foreground text-sm">
                            {props.reviewCount} Reviews
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        {Array.from({ length: 5 }).map((i, index) => (
                            <div className="flex space-x-2 items-center text-sm">
                                <div
                                    className="flex space-x-1 items-center"
                                    key={index}
                                >
                                    <StarIcon className="h-4 w-4" />
                                    <span>{5 - index}</span>
                                </div>
                                <Progress value={(5 - index) * 30} />
                                <span>114K</span>
                            </div>
                        ))}
                    </div>
                    <Separator />
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-semibold">All Reviews</h4>
                        <ScrollArea className="h-64">
                            <div className="flex flex-col space-y-4">
                                {reviews.map((review, index) => (
                                    <div
                                        className="flex flex-col space-y-2"
                                        key={index}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <h4 className="font-medium">
                                                    {review?.fullName}
                                                </h4>
                                                <div className="flex space-x-2 text-xs text-muted-foreground">
                                                    <div>{review?.date}</div>
                                                    <div>
                                                        {
                                                            review?.serviceCategorySlug
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-600 text-white flex space-x-2 items-center px-2.5 py-1 rounded-md">
                                                <StarIcon className="h-4 w-4" />
                                                <span className="font-bold text-sm">
                                                    {review?.starRating}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm">
                                            {review?.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewsDialog;
