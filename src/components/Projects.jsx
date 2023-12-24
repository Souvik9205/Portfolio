import React from "react";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="text-purple-100 bg-purple-500 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Created by a beginner exploring web development, this app is a product of practice and learning. It's built using the MERN stack and incorporates various cutting-edge technologies. It's a testament to growth and experimentation in the world of web development
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-full p-4"
                            >
                            <div className="relative overflow-hidden rounded-lg">
                                <div
                                className="aspect-w-16 aspect-h-9 bg-gray-900"
                                style={{ backgroundImage: `url(${project.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                                ></div>
                                <div className="p-6 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;