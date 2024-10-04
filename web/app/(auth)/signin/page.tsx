import Image from "next/image";
import SignInForm from "../_components/SignInForm";

const SignInPage = () => {
    return (
        <main className="flex flex-col lg:flex-row max-w-7xl m-auto justify-between items-center px-5 lg:px-0 mt-5 lg:mt-20 space-y-5 lg:space-y-0">
            <div className="w-full lg:w-2/3 flex">
                <Image
                    src="/images/landscapes/1.jpg"
                    alt="landscape"
                    height={250}
                    width={800}
                    className="rounded-lg"
                />
            </div>
            <div className="w-full lg:w-1/3 lg:justify-end flex">
                <SignInForm />
            </div>
        </main>
    );
};

export default SignInPage;
