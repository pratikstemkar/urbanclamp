import { categories } from "@/data/categories";
import { cn, getRandomTenServices } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ServiceBoard = () => {
    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-semibold">What are you looking for?</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {getRandomTenServices(categories, 9).map((category, index) => (
                    <Link
                        href={`/homes/services/${category.slug}`}
                        key={index}
                    >
                        <div
                            className={cn(
                                "border rounded-xl px-4 py-4 shadow-sm flex items-center space-x-1 hover:cursor-pointer hover:shadow-lg",
                                {
                                    "hidden lg:inline-flex": index >= 6,
                                }
                            )}
                        >
                            <div className="text-xs w-2/3">
                                {category.title}
                            </div>
                            <div className=" w-1/3">
                                <Image
                                    src={`/images/icons/services/${category.slug}.png`}
                                    alt={category.slug}
                                    height={100}
                                    width={100}
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServiceBoard;
