import Image from "next/image";
import SignUpForm from "../_components/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Account",
    description: "Home Service Management made easy!",
};

const SignUpPage = () => {
    return (
        <main className="flex flex-col lg:flex-row-reverse max-w-7xl m-auto justify-between items-center px-5 lg:px-0 mt-0 lg:mt-20 mb-10 lg:mb-0 space-y-5 lg:space-y-0">
            <div className="w-full lg:w-2/3 flex lg:justify-end">
                <Image
                    src="/images/landscapes/2.jpg"
                    alt="landscape"
                    height={250}
                    width={800}
                    className="rounded-lg"
                />
            </div>
            <div className="w-full lg:w-1/3 flex-col space-y-5">
                <div className="flex-col space-y-1">
                    <h1 className="font-bold text-xl">Create Account</h1>
                    <h4 className="text-muted-foreground text-sm">
                        Enter your details to create a new account
                    </h4>
                </div>
                <SignUpForm />
            </div>
        </main>
    );
};

export default SignUpPage;
