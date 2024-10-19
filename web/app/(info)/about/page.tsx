import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

const About = () => {
    return (
        <main className="max-w-7xl m-auto px-5 lg:px-0 mt-5 mb-10">
            <div className="flex flex-col space-y-10">
                <h1 className="text-4xl font-bold text-center lg:text-start tracking-tighter">
                    About Us
                </h1>
                <div className="flex flex-col space-y-2">
                    <h4 className="text-center lg:text-start text-lg font-semibold">
                        Who are we?
                    </h4>
                    <p className="text-center lg:text-start">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dignissimos dolores vero reiciendis aperiam non,
                        voluptatum deleniti commodi, amet illum veritatis quasi
                        incidunt laboriosam provident recusandae tempore?
                        Debitis illo harum reiciendis. Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Sunt distinctio nisi
                        corporis saepe odio quisquam minus aliquam perspiciatis
                        sequi exercitationem. Nisi repellendus provident
                        excepturi corrupti at quas, impedit officiis
                        voluptatibus. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quibusdam impedit, ipsa doloribus quos
                        quasi quisquam est ducimus distinctio illo reiciendis
                        unde doloremque, facilis fuga sequi tenetur vero optio
                        culpa et?
                    </p>
                    <p className="text-center lg:text-start">Vision: </p>
                </div>
                <div className="flex flex-col space-y-2 items-center lg:items-start">
                    <h4 className="text-lg font-semibold">Our Team</h4>
                    <div className="flex space-x-5 overflow-x-scroll">
                        <div className="flex flex-col space-y-5 justify-center items-center">
                            <Avatar className="h-40 w-40">
                                <AvatarImage src="https://github.com/pratikstemkar.png" />
                                <AvatarFallback>PT</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col space-y-2 justify-center items-center">
                                <h4 className="font-semibold">Pratik Temkar</h4>
                                <div className="flex space-x-2 items-center">
                                    <Link
                                        href="https://linkedin.com/in/pratikstemkar"
                                        target="_blank"
                                    >
                                        <Icons.linkedin className="h-6 w-6 hover:cursor-pointer" />
                                    </Link>
                                    <Link
                                        href="https://github.com/pratikstemkar"
                                        target="_blank"
                                    >
                                        <Icons.gitHub className="h-6 w-6 hover:cursor-pointer" />
                                    </Link>
                                    <Link
                                        href="https://x.com/pratikstemkar"
                                        target="_blank"
                                    >
                                        <Icons.x className="h-6 w-6 hover:cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
