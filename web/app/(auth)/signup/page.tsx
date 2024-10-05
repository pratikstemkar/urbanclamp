import Image from "next/image";
import SignUpForm from "../_components/SignUpForm";

const SignUpPage = () => {
    return (
        <main className="flex flex-col lg:flex-row-reverse max-w-7xl m-auto justify-between items-center px-5 lg:px-0 mt-0 lg:mt-20 space-y-5 lg:space-y-0">
            <div className="w-full lg:w-2/3 flex lg:justify-end">
                <Image
                    src="/images/landscapes/2.jpg"
                    alt="landscape"
                    height={250}
                    width={800}
                    className="rounded-lg"
                />
            </div>
            <div className="w-full lg:w-1/3  flex">
                <SignUpForm />
            </div>
        </main>
    );
};

export default SignUpPage;
