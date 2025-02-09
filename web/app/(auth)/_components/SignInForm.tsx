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
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import {
    logout,
    validateTokenAndSetUser,
} from "@/store/features/auth/AuthSlice";
import { toast } from "sonner";
import { useLoginMutation } from "@/store/services/auth/authApi";
import { Loader2Icon } from "lucide-react";

const formSchema = z.object({
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
    password: z
        .string()
        .min(6, {
            message: "Password must have atleast 6 characters.",
        })
        .max(16, {
            message: "Password must have atmax 16 characters.",
        }),
});

const SignInForm = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [login, { isLoading, isError, error }] = useLoginMutation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const { email, password } = values;
        try {
            const response = await login({ email, password }).unwrap();
            console.log(response);
            const previousPath = localStorage.getItem("previousPath");

            if (previousPath) {
                localStorage.removeItem("previousPath");
                router.push(previousPath);
            } else {
                router.push("/homes");
            }
            dispatch(validateTokenAndSetUser(response.accessToken));
            toast("Sign In Successful!", {
                description: new Date().toLocaleString(),
                action: {
                    label: "Logout",
                    onClick: () => dispatch(logout()),
                },
            });
        } catch (err) {
            toast("Login failed!", {
                description: JSON.stringify(err),
            });
        }
    }

    return (
        <div className="w-full flex flex-col space-y-5">
            {/* <div className="grid grid-cols-2 gap-2">
                <Button variant="outline">
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    GitHub
                </Button>
                <Button variant="outline">
                    <Icons.google className="mr-2 h-4 w-4" />
                    Google
                </Button>
            </div> */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 flex flex-col w-full"
                >
                    {/* <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div> */}
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
                                <FormLabel className="flex justify-between items-center">
                                    Password
                                    {/* <Link
                                        href="/forgot-password"
                                        className="text-xs underline underline-offset-4"
                                    >
                                        Forgot Password?
                                    </Link> */}
                                </FormLabel>
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
                        <span>Sign In</span>
                    </Button>
                    <span className="text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="underline underline-offset-4"
                        >
                            Create Account
                        </Link>
                    </span>
                </form>
            </Form>
        </div>
    );
};

export default SignInForm;
