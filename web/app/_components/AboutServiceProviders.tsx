import Image from "next/image";
import React from "react";

const AboutServiceProviders = () => {
    return (
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
                        <h4 className="font-semibold">Proven and reliable</h4>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium maxime eveniet dicta optio alias,
                            ex molestias impedit fugit praesentium doloribus
                            ipsum doloremque debitis ipsa quos expedita? Nihil
                            optio totam temporibus.
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium maxime eveniet dicta optio alias,
                            ex molestias impedit fugit praesentium doloribus
                            ipsum doloremque debitis ipsa quos expedita? Nihil
                            optio totam temporibus.
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium maxime eveniet dicta optio alias,
                            ex molestias impedit fugit praesentium doloribus
                            ipsum doloremque debitis ipsa quos expedita? Nihil
                            optio totam temporibus.
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium maxime eveniet dicta optio alias,
                            ex molestias impedit fugit praesentium doloribus
                            ipsum doloremque debitis ipsa quos expedita? Nihil
                            optio totam temporibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutServiceProviders;
