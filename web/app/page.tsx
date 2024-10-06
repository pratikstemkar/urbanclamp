import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QuestionsAccordion } from "./_components/QuestionsAccordion";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <main className="max-w-7xl m-auto">
            <div className="flex-col space-y-10 lg:space-y-32 mt-10 lg:mt-32 mb-10 lg:mb-32 px-5 lg:px-0">
                <div className="flex flex-col space-y-5 items-center justify-center">
                    <h1 className="text-6xl font-extrabold tracking-tighter">
                        Home Services made easy!
                    </h1>
                    <h4 className="lg:text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cumque et assumenda eligendi odio doloribus eos
                        necessitatibus ullam ipsum officia, modi reiciendis
                        illum veritatis numquam odit vel? Expedita eaque impedit
                        cum? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Architecto fuga velit ea illo pariatur, sed
                        asperiores nobis suscipit maiores impedit earum fugit
                        mollitia nemo, dolor iusto ipsum consequatur eaque
                        maxime.
                    </h4>
                    <Button
                        size="lg"
                        className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                        asChild
                    >
                        <Link href="/homes">
                            <span>Browse Services</span>
                        </Link>
                    </Button>
                </div>
                <div className="flex flex-col space-y-5 items-center justify-center px-2 lg:px-0">
                    <h4 className="text-muted-foreground text-xl font-semibold">
                        How it works?
                    </h4>
                    <h1 className="text-4xl font-extrabold tracking-tighter text-center">
                        Hassle-free Home Services
                    </h1>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 lg:space-x-2">
                        <div className="flex-col space-y-2 text-center">
                            <h4 className="font-bold text-lg">Step 1</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nobis, dolore nemo sint in
                                consectetur optio culpa id pariatur odit
                                mollitia sit dolor rerum rem? Odio dolore rem
                                iste! Impedit, harum.
                            </p>
                        </div>
                        <div className="flex-col space-y-2 text-center">
                            <h4 className="font-bold text-lg">Step 2</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nobis, dolore nemo sint in
                                consectetur optio culpa id pariatur odit
                                mollitia sit dolor rerum rem? Odio dolore rem
                                iste! Impedit, harum.
                            </p>
                        </div>
                        <div className="flex-col space-y-2 text-center">
                            <h4 className="font-bold text-lg">Step 3</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nobis, dolore nemo sint in
                                consectetur optio culpa id pariatur odit
                                mollitia sit dolor rerum rem? Odio dolore rem
                                iste! Impedit, harum.
                            </p>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                        asChild
                    >
                        <Link href="/homes">
                            <span>Find your service partner</span>
                        </Link>
                    </Button>
                </div>
                <div className="flex flex-col space-y-5 items-center justify-center px-2 lg:px-0">
                    <h4 className="text-muted-foreground text-xl font-semibold">
                        Why choose Urban Clamp?
                    </h4>
                    <h1 className="text-4xl font-extrabold tracking-tighter text-center">
                        Finally, Home Services that work
                    </h1>
                    <h4 className="text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cumque et assumenda eligendi odio doloribus eos
                        necessitatibus ullam ipsum officia, modi reiciendis
                        illum veritatis numquam odit vel? Expedita eaque impedit
                        cum? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Architecto fuga velit ea illo pariatur, sed
                        asperiores nobis suscipit maiores impedit earum fugit
                        mollitia nemo, dolor iusto ipsum consequatur eaque
                        maxime.
                    </h4>
                </div>
                <div className="flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0 items-center justify-between px-2 lg:px-0">
                    <div className="flex-col space-y-5 items-center justify-center text-center lg:text-left">
                        <h4 className="text-muted-foreground text-xl font-semibold">
                            How is Urban Clamp different?
                        </h4>
                        <h1 className="text-4xl font-extrabold tracking-tighter">
                            Smarter, Safer, Simple Home Services
                        </h1>
                        <h4 className="lg:w-2/3">
                            We go out of our way to make the whole process as
                            seamless as possible – from click to clean.
                        </h4>
                        <Button
                            size="lg"
                            className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                            asChild
                        >
                            <Link href="/homes">
                                <span>Find your service partner</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="lg:w-1/3">
                        <Card>
                            <CardContent className="pt-6">
                                <h1 className="font-bold text-lg">
                                    The benefits of Urban Clamp
                                </h1>
                                <div className="flex-col space-y-2 mt-5">
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Convenience</span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Wide Range of Services</span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>
                                            Professional Service Providers
                                        </span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Time-Saving</span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Transparent Pricing</span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>
                                            Customer Reviews and Ratings
                                        </span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Quality Assurance</span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Flexibility</span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Cashless Transactions</span>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <CheckIcon className="h-4 w-4" />
                                        <span>Support and Assistance</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 items-center justify-center px-2 lg:px-0">
                    <h4 className="text-muted-foreground text-xl font-semibold">
                        About the Service Partners
                    </h4>
                    <h1 className="text-4xl font-extrabold tracking-tighter text-center">
                        Tried &amp; trusted Service Partners
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="flex space-x-5 items-center">
                            <Image
                                src="/images/icons/reliable.png"
                                height={500}
                                width={100}
                                alt="Icon"
                            />
                            <div className="flex-col space-y-2">
                                <h4 className="font-semibold">
                                    Proven and reliable
                                </h4>
                                <p className="text-sm lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Accusantium maxime eveniet
                                    dicta optio alias, ex molestias impedit
                                    fugit praesentium doloribus ipsum doloremque
                                    debitis ipsa quos expedita? Nihil optio
                                    totam temporibus.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-5 items-center">
                            <Image
                                src="/images/icons/background-check.png"
                                height={500}
                                width={100}
                                alt="Icon"
                            />
                            <div className="flex-col space-y-2">
                                <h4 className="font-semibold">
                                    Vetted &amp; background-checked
                                </h4>
                                <p className="text-sm lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Accusantium maxime eveniet
                                    dicta optio alias, ex molestias impedit
                                    fugit praesentium doloribus ipsum doloremque
                                    debitis ipsa quos expedita? Nihil optio
                                    totam temporibus.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-5 items-center">
                            <Image
                                src="/images/icons/5star.png"
                                height={500}
                                width={100}
                                alt="Icon"
                            />
                            <div className="flex-col space-y-2">
                                <h4 className="font-semibold">5* ratings</h4>
                                <p className="text-sm lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Accusantium maxime eveniet
                                    dicta optio alias, ex molestias impedit
                                    fugit praesentium doloribus ipsum doloremque
                                    debitis ipsa quos expedita? Nihil optio
                                    totam temporibus.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-5 items-center">
                            <Image
                                src="/images/icons/tech.png"
                                height={500}
                                width={100}
                                alt="Icon"
                            />
                            <div className="flex-col space-y-2">
                                <h4 className="font-semibold">Tech-enabled</h4>
                                <p className="text-sm lg:text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Accusantium maxime eveniet
                                    dicta optio alias, ex molestias impedit
                                    fugit praesentium doloribus ipsum doloremque
                                    debitis ipsa quos expedita? Nihil optio
                                    totam temporibus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0 justify-between px-2 lg:px-0">
                    <div className="flex-col space-y-5 items-center justify-center text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold tracking-tighter">
                            Questions?
                        </h1>
                    </div>
                    <div className="lg:w-1/3">
                        <QuestionsAccordion />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0 justify-between px-2 lg:px-0">
                    <div className="flex-col space-y-5 items-center justify-center text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold tracking-tighter">
                            Ready to get started?
                        </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 lg:w-1/3">
                        <Input
                            placeholder="Enter your pincode"
                            className="h-12"
                        />
                        <Button className="h-12">
                            Find your Service Partner
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
