import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { StarIcon } from "lucide-react";

const ReviewsDialog = (props: {
    reviewCount: number;
    serviceTitle: string;
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
                        Reviews of {props.serviceTitle}
                    </h1>
                    <div className="flex flex-col space-y-1">
                        <div className="flex text-lg items-center">
                            <StarIcon className="h-6 w-6 mr-2" />
                            <span className="text-xl font-bold">4.8</span>
                        </div>
                        <div className="text-muted-foreground text-sm">
                            45 Reviews
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
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <h4 className="font-medium">
                                                    John Doe
                                                </h4>
                                                <div className="flex space-x-2 text-xs text-muted-foreground">
                                                    <div>Oct 24, 2024</div>
                                                    <div>Kitchen Cleaning</div>
                                                </div>
                                            </div>
                                            <div className="bg-green-600 text-white flex space-x-2 items-center px-2.5 py-1 rounded-md">
                                                <StarIcon className="h-4 w-4" />
                                                <span className="font-bold text-sm">
                                                    4.6
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Tempora quo inventore animi
                                            praesentium architecto id distinctio
                                            aspernatur aut eligendi, totam nulla
                                            deleniti, labore blanditiis repellat
                                            dignissimos sint dolore mollitia
                                            beatae?
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex mt-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                >
                                    Show All
                                </Button>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewsDialog;
