import Image from "next/image";

const HomesPage = () => {
    return (
        <main className="max-w-7xl m-auto px-2 lg:px-0 mt-5 lg:mt-10">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-10">
                <div className="lg:w-1/2 flex-col space-y-5">
                    <h1 className="font-bold text-4xl tracking-tighter">
                        Home services at your doorstep!
                    </h1>
                    <div className="border border-slate-200 dark:border-slate-900 p-5 flex flex-col space-y-5 rounded-lg">
                        <h4 className="text-lg font-medium">
                            What are you looking for?
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                            <div className="px-4 py-6 hover:cursor-pointer bg-slate-200 dark:bg-slate-900 rounded-lg">
                                Electrician
                            </div>
                            <div className="px-4 py-6 hover:cursor-pointer bg-slate-200 dark:bg-slate-900 rounded-lg">
                                Plumber
                            </div>
                            <div className="px-4 py-6 hover:cursor-pointer bg-slate-200 dark:bg-slate-900 rounded-lg">
                                Cleaning
                            </div>
                            <div className="px-4 py-6 hover:cursor-pointer bg-slate-200 dark:bg-slate-900 rounded-lg">
                                Carpenter
                            </div>
                            <div className="px-4 py-6 hover:cursor-pointer bg-slate-200 dark:bg-slate-900 rounded-lg">
                                Painting
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">Stars</div>
                        <div className="w-1/2">Users</div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src="/images/homesposter.webp"
                        alt="homes"
                        width={800}
                        height={800}
                    />
                </div>
            </div>
        </main>
    );
};

export default HomesPage;
