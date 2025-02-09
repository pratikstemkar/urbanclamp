import Image from "next/image";
import SignInForm from "../_components/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
    description: "Home Service Management made easy!",
};

const SignInPage = () => {
    return (
        <main className="flex flex-col lg:flex-row max-w-7xl m-auto justify-between items-center px-5 lg:px-0 mt-0 lg:mt-20 mb-10 lg:mb-0 space-y-5 lg:space-y-0">
            <div className="w-full lg:w-2/3">
                <Image
                    src="/images/landscapes/1.jpg"
                    alt="landscape"
                    height={250}
                    width={800}
                    className="rounded-lg"
                />
            </div>
            <div className="w-full lg:w-1/3 lg:justify-end flex-col space-y-5">
                <div className="flex-col space-y-1">
                    <h1 className="font-bold text-xl">
                        Welcome to Urban Clamp
                    </h1>
                    <h4 className="text-muted-foreground text-sm">
                        Enter your credentials to Login
                    </h4>
                </div>
                <SignInForm />
            </div>
        </main>
    );
};

export default SignInPage;
