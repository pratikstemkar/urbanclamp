"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import Link from "next/link";
import { useRegisterMutation } from "@/store/services/auth/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
// import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z
    .object({
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
                message: "Email must have at max 50 characters.",
            })
            .email({
                message: "Enter a valid email address.",
            }),
        password: z
            .string()
            .min(6, {
                message: "Password must have atleast 6 characters.",
            })
            .max(16, {
                message: "Password must have at max 16 characters.",
            }),
        confirmpassword: z
            .string()
            .min(6, {
                message: "Password must have atleast 6 characters.",
            })
            .max(16, {
                message: "Password must have at max 16 characters.",
            }),
    })
    .refine(data => data.password === data.confirmpassword, {
        message: "Passwords do not match.",
        path: ["confirmpassword"],
    });

const SignUpForm = () => {
    const [register, { isLoading, isError, error }] = useRegisterMutation();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const { name, email, password } = values;
        try {
            const response = await register({ name, email, password }).unwrap();
            console.log(response);
            router.push("/signin");
            toast("Account created successfully!");
        } catch (err) {
            toast("Failed to create account!", {
                description: JSON.stringify(err),
            });
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-col w-full"
            >
                <div className="flex space-x-2 w-full">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
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
                </div>
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
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmpassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm flex items-center space-x-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer"
                    >
                        <span>Accept Terms and Conditions</span>
                        <Link
                            href="/tnc"
                            className="text-xs underline"
                        >
                            Read T&amp;C
                        </Link>
                    </label>
                </div> */}
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
                        <Loader2Icon className="h-4 w-4 mr-2 animate-spin" />
                    )}
                    <span>Create Account</span>
                </Button>
                <span className="text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/signin"
                        className="underline underline-offset-4"
                    >
                        Sign In
                    </Link>
                </span>
            </form>
        </Form>
    );
};

export default SignUpForm;
