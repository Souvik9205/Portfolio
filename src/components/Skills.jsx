import React from "react";
import { skills } from "../data";
import { FiCheck } from 'react-icons/fi';

const Skills = () => {
    return (
        <section className="text-teal-100 bg-teal-500 body-font" id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Here's a snapshot of the technologies I've learned and actively implement in my daily coding to build exciting projects
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center flex-row gap-3">
                <FiCheck className="text-green-500 rounded-full border border-green-500 p-1" size={22} />
                  <span className="title-font font-medium text-white">
                  {skill}
                  </span> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skills;