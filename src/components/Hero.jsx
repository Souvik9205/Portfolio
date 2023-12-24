import React from "react";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container mx-auto flex px-8 py-10 md:flex-row flex-col items-center mb-10">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        <span className="sm:text-5xl text-4xl sm:text-wrap">Hi, myself Souvik.. </span>
                        <br className="hidden lg:inline-block" /> I love to build amazing WebApps!
                    </p>
                    <p className="leading-relaxed">
                        Welcome! I'm a passionate and ambitious full-stack developer based in Kolkata, India. At 18 years old, I'm currently pursuing my BTech in Computer Science and Engineering (2023-'27).
                    </p>
                    <p className="mb-8 leading-relaxed">
                    My enthusiasm lies in learning and implementing cutting-edge as well as time-tested technology stacks to craft innovative and efficient web applications. I thrive on exploring the dynamic world of web development, constantly seeking new challenges and opportunities to grow my skills. Thank you!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-black bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-amber-300 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            className="ml-4 inline-flex text-white bg-cyan-500 border py-2 px-6 focus:outline-none hover:bg-cyan-400 hover:text-white rounded text-lg
                            cursor-not-allowed
                            ">
                            My Resume
                        </a>
                </div>
            </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded border border-gray-200"
                        alt="hero"
                        src="./hero.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;