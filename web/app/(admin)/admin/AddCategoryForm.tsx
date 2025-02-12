"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { useCreateCategoryMutation } from "@/store/services/categoryApi";

const formSchema = z.object({
    title: z
        .string()
        .min(5, {
            message: "Title must have atleast 5 characters.",
        })
        .max(50, {
            message: "Title must have atmax 50 characters.",
        }),
    description: z
        .string()
        .min(6, {
            message: "description must have atleast 6 characters.",
        })
        .max(100, {
            message: "description must have atmax 100 characters.",
        }),
    picture: z
        .string()
        .min(5, {
            message: "picture must have atleast 5 characters.",
        })
        .max(50, {
            message: "picture must have atmax 50 characters.",
        }),
});

const AddCategoryForm = () => {
    const [createCategory, { isLoading, isError, error }] =
        useCreateCategoryMutation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            picture: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const { title, description, picture } = values;
        try {
            const response = await createCategory({
                title,
                description,
                picture,
            }).unwrap();
            console.log(response);
            toast("Category Added!");
        } catch (err) {
            toast("Category not added!", {
                description: JSON.stringify(err),
            });
        }
    }

    return (
        <div className="w-full flex flex-col space-y-5">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 flex flex-col w-full"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex justify-between items-center">
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="picture"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex justify-between items-center">
                                    Picture
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {isError && (
                        <span className="text-red-500 text-sm">
                            {"data" in error ? JSON.stringify(error) : ""}
                        </span>
                    )}
                    <Button
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Loader2Icon className="h-4 w-4 animate-spin mr-2" />
                        )}
                        <span>Add Category</span>
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default AddCategoryForm;
