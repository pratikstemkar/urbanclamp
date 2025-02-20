"use client";

import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { getCategoryBySlug, getServicesByCategory } from "@/lib/utils";
import ServiceDescDialog from "./ServiceDescDialog";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/features/cart/CartSlice";
import { categories } from "@/data/categories";
import { useGetServiceByCategoryIdQuery } from "@/store/services/serviceApi";

const ServiceList = (props: { foundCategorySlug: string }) => {
    const dispatch = useAppDispatch();
    const {
        data: services,
        error,
        isLoading,
    } = useGetServiceByCategoryIdQuery(props.foundCategorySlug);

    return (
        <div className="flex flex-col space-y-2">
            {isLoading ? (
                <>Loading...</>
            ) : (
                <>
                    {services.map((service, index) => (
                        <Card key={index}>
                            <CardContent className="mt-4 -mb-2">
                                <div className="flex space-x-2">
                                    <div className="flex flex-col space-y-2 w-5/6">
                                        <div className="text-lg font-bold flex space-x-2 items-center group hover:text-violet-500 hover:cursor-pointer">
                                            <ServiceDescDialog
                                                service={service}
                                            />
                                            <ExternalLinkIcon className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <StarIcon className="h-4 w-4" />
                                            <span className="text-xs underline underline-offset-4 decoration-dotted hover:cursor-pointer">
                                                4.8 ( 1289 Reviews)
                                            </span>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {service.description}
                                        </div>
                                        <div className="flex flex-wrap gap-x-2 text-sm">
                                            <span>₹ {service.price}</span>
                                            <span>&#x2022;</span>
                                            <span>
                                                {service.duration} minutes
                                            </span>
                                            <span>&#x2022;</span>
                                            <Link
                                                href={`/partners/${service.partner.id}`}
                                            >
                                                <span className="hover:underline underline-offset-4">
                                                    {service.partner.name}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-1/6 flex flex-col justify-center items-center">
                                        <Image
                                            src={`/images/icons/services/${service.picture}.png`}
                                            alt={service.picture}
                                            height={100}
                                            width={100}
                                            className="rounded-lg"
                                        />
                                        <Button
                                            variant="outline"
                                            className="-my-5"
                                            onClick={() => {
                                                dispatch(
                                                    addToCart({
                                                        item: {
                                                            serviceCategory: "",
                                                            serviceCategorySlug:
                                                                "",
                                                            description:
                                                                service.description,
                                                            serviceSlug:
                                                                service.id,
                                                            title: service.title,
                                                            price: service.price,
                                                            duration:
                                                                service.duration,
                                                            partnerName:
                                                                service.partner
                                                                    .name,
                                                            partnerSlug:
                                                                service.partner
                                                                    .id,
                                                        },
                                                    })
                                                );
                                            }}
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </>
            )}
        </div>
    );
};

export default ServiceList;
