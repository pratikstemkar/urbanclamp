import ReviewsDialog from "@/app/homes/services/[service]/_components/ReviewsDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { partners } from "@/data/partners";
import { reviews } from "@/data/reviews";
import { getPartnerBySlug } from "@/lib/utils";
import { Share2Icon, StarIcon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
    params,
}: {
    params: { partnerSlug: string };
}): Promise<Metadata> {
    const foundPartner = getPartnerBySlug(partners, params.partnerSlug);
    if (!foundPartner) {
        notFound();
    }
    return {
        title: foundPartner?.fullName,
        description: foundPartner?.bio,
    };
}

const PartnerProfile = ({ params }: { params: { partnerSlug: string } }) => {
    const foundPartner = getPartnerBySlug(partners, params.partnerSlug);
    if (!foundPartner) {
        notFound();
    }

    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col gap-y-5 px-5 lg:px-0">
                <div className="flex justify-between">
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <Avatar className="h-40 w-40">
                            <AvatarImage src={foundPartner?.imgUrl} />
                            <AvatarFallback>
                                {foundPartner?.slug}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col space-y-2 text-center lg:text-start">
                            <span className="text-xl font-bold">
                                {foundPartner?.fullName}
                            </span>
                            <span className="text-sm">{foundPartner?.bio}</span>
                            <div className="flex space-x-2 w-full items-center justify-center lg:justify-start">
                                <div className="bg-green-600 text-white flex space-x-2 items-center px-2.5 py-1 rounded-md">
                                    <StarIcon className="h-4 w-4" />
                                    <span className="font-bold text-sm">
                                        {foundPartner?.starRating}
                                    </span>
                                </div>
                                <ReviewsDialog
                                    reviewCount={reviews.length}
                                    serviceTitle={foundPartner?.fullName}
                                    starRating={foundPartner?.starRating}
                                    reviews={reviews}
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="hidden lg:inline-flex"
                    >
                        <Share2Icon className="h-4 w-4 mr-2" />
                        <span>Share</span>
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default PartnerProfile;
