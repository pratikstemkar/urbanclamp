"use client";

import { findServiceBySlug } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReviewsDialog from "./_components/ReviewsDialog";
import { categories } from "@/data/categories";
import ServiceCart from "./_components/ServiceCart";
import ServiceList from "./_components/ServiceList";
import { reviews } from "@/data/reviews";
import { useGetServiceByCategoryIdQuery } from "@/store/services/serviceApi";
import { useGetCategoryByIdQuery } from "@/store/services/categoryApi";

const ServicePage = ({ params }: { params: { service: string } }) => {
    const {
        data: foundCategory,
        error: catError,
        isLoading: catLoading,
    } = useGetCategoryByIdQuery(params.service);

    if (catLoading) {
        return (
            <main className="max-w-7xl m-auto flex justify-center items-center min-h-screen">
                <p className="text-lg font-semibold">Loading services...</p>
            </main>
        );
    }

    if (catError || !foundCategory) {
        return (
            <main className="max-w-7xl m-auto flex justify-center items-center min-h-screen">
                <p className="text-lg font-semibold text-red-500">
                    Failed to load services. Please try again later.
                    {JSON.stringify(catError)}
                </p>
            </main>
        );
    }

    return (
        <main className="max-w-7xl m-auto">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 px-5 lg:px-0">
                <div className="lg:w-1/4">
                    <div className="flex flex-col items-center space-y-5 sticky top-20">
                        <Image
                            src={`/images/icons/services/${foundCategory?.picture}.png`}
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
                                <span className="font-bold text-sm">4.8</span>
                            </div>
                            {/* <ReviewsDialog
                                reviewCount={foundCategory?.reviewCount}
                                serviceTitle={foundCategory?.title}
                                starRating={foundCategory?.starRating}
                                reviews={reviews}
                            /> */}
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <ServiceList foundCategorySlug={foundCategory?.id} />
                </div>

                <div className="hidden lg:block lg:w-1/4">
                    <ServiceCart />
                </div>
            </div>
        </main>
    );
};

export default ServicePage;
