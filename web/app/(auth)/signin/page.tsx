import SignInForm from "../_components/SignInForm";

const SignInPage = () => {
    return (
        <main className="flex flex-col lg:flex-row max-w-7xl m-auto justify-between items-center px-5 lg:px-0 mt-10 lg:mt-20">
            <div className="w-full lg:w-2/3 flex p-20">Image</div>
            <div className="w-full lg:w-1/3 lg:justify-end flex">
                <SignInForm />
            </div>
        </main>
    );
};

export default SignInPage;
