import { findServiceBySlug } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReviewsDialog from "./_components/ReviewsDialog";
import { categories } from "@/data/categories";
import ServiceCart from "./_components/ServiceCart";
import { Metadata } from "next";
import ServiceList from "./_components/ServiceList";
import { reviews } from "@/data/reviews";

export async function generateMetadata({
    params,
}: {
    params: { service: string };
}): Promise<Metadata> {
    const foundCategory = findServiceBySlug(categories, params.service);
    if (!foundCategory) {
        notFound();
    }
    return {
        title: foundCategory?.title,
        description: foundCategory?.description,
    };
}

const ServicePage = ({ params }: { params: { service: string } }) => {
    const foundCategory = findServiceBySlug(categories, params.service);
    if (!foundCategory) {
        notFound();
    }

    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 px-5 lg:px-0">
                <div className="lg:w-1/4">
                    <div className="flex flex-col items-center space-y-5 sticky top-20">
                        <Image
                            src={`/images/icons/services/${foundCategory?.slug}.png`}
                            alt={params.service}
                            height={100}
                            width={100}
                        />
                        <h1 className="text-4xl font-bold tracking-tighter">
                            {foundCategory?.title}
                        </h1>
                        <p className="text-sm text-muted-foreground text-center lg:text-left">
                            {foundCategory?.description}
                        </p>
                        <div className="flex space-x-2 w-full items-center justify-center lg:justify-start">
                            <div className="bg-green-600 text-white flex space-x-2 items-center px-2.5 py-1 rounded-md">
                                <StarIcon className="h-4 w-4" />
                                <span className="font-bold text-sm">
                                    {foundCategory?.starRating}
                                </span>
                            </div>
                            <ReviewsDialog
                                reviewCount={foundCategory?.reviewCount}
                                serviceTitle={foundCategory?.title}
                                starRating={foundCategory?.starRating}
                                reviews={reviews}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <ServiceList foundCategorySlug={foundCategory?.slug} />
                </div>
                <div className="hidden lg:block lg:w-1/4 ">
                    <ServiceCart />
                </div>
            </div>
        </main>
    );
};

export default ServicePage;
