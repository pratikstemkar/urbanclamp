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

const formSchema = z.object({
    flat: z.string().min(2).max(50),
    landmark: z.string().min(2).max(50),
    locality: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    state: z.string().min(2).max(50),
    country: z.string().min(2).max(50),
    pincode: z.string().min(6).max(6),
});

const NewAddressForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            flat: "",
            landmark: "",
            locality: "",
            city: "",
            state: "",
            country: "India",
            pincode: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-5"
            >
                <FormField
                    control={form.control}
                    name="flat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Door / Flat No.</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="798 B"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="landmark"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Landmark</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Near RTO Phule Nagar"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="locality"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Area / Society / Locality</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Phule Nagar, Yerwada"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Pune"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Maharashtra"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="India"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pin Code</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="411006"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Save address and proceed</Button>
            </form>
        </Form>
    );
};

export default NewAddressForm;
