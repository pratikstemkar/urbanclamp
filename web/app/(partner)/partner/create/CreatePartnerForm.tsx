"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { useAuth } from "@/store/hooks/useAuth";
import { useCreatePartnerMutation } from "@/store/services/partnerApi";

const formSchema = z.object({
    name: z
        .string()
        .min(3, {
            message: "Name must have atleast 3 characters.",
        })
        .max(20, {
            message: "Name must have at max 20 characters.",
        }),
    email: z
        .string()
        .min(10, {
            message: "Email must have atleast 10 characters.",
        })
        .max(50, {
            message: "Email must have atmax 50 characters.",
        })
        .email({
            message: "Enter a valid email address.",
        }),
    location: z
        .string()
        .min(3, {
            message: "Location must have atleast 3 characters.",
        })
        .max(20, {
            message: "Location must have at max 20 characters.",
        }),
    servicePinCode: z
        .string()
        .min(6, {
            message: "Service PinCode must have atleast 6 characters.",
        })
        .max(6, {
            message: "Servie PinCode must have at max 6 characters.",
        }),
});

const CreatePartnerForm = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [createPartner, { isLoading, isError, error }] =
        useCreatePartnerMutation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name,
            email: user?.email,
            location: "",
            servicePinCode: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const { name, email, location, servicePinCode } = values;
        try {
            const response = await createPartner({
                userId: user?.id,
                name,
                email,
                location,
                servicePinCode,
            }).unwrap();
            console.log(response);
            router.replace("/partner/dashboard");
            toast("Partner Account Created!", {
                description: new Date().toLocaleString(),
            });
        } catch (err) {
            toast("Account creation failed!", {
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
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
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
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="me@example.com"
                                        {...field}
                                        type="email"
                                        disabled
                                    />
                                </FormControl>
                                <FormDescription>
                                    We do not share your email with anyone.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
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
                        name="servicePinCode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Service PinCode</FormLabel>
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
                            {JSON.stringify(error)}
                        </span>
                    )}
                    <Button
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Loader2Icon className="h-4 w-4 animate-spin mr-2" />
                        )}
                        <span>Create Partner Account</span>
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default CreatePartnerForm;
