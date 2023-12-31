import React from "react";
import { FaCode } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { SiFacebook } from 'react-icons/si';


const Navbar = () => {
    return (
        <header className="bg-amber-300 text-black md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sm: pt-0">
                <a className="title-font md:mb-0 icon">
                    <a href="#body" className="ml-3 text-2xl">
                    <FaCode className="portfolio-icon hover:text-green-300 transition-colors duration-300 ease-in-out cursor-pointer sm:hover:text-amber-900" size={55}/>
                    </a>
                </a>
                <nav className="md:mr-50 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-2xl justify-center font-bold ">
                    <a href="#projects" className="mr-10 hover:text-amber-800">
                    Past Works
                    </a>
                    <a href="#skills" className="mr-5 hover:text-amber-800">
                    Skills
                    </a>
                </nav>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center font-medium">
                    <p className="mr-6 text-2xl font-semibold">Connects:</p>
                    <div className="flex flex-row gap-4 items-center">
                    <a href="https://www.instagram.com/souvik_23_/"><FaInstagram size={40} className="text-gray-500 hover:text-pink-600 transition-colors duration-800 ease-in-out cursor-pointer icon-rotate" /></a>
                    <a href="https://github.com/Souvik9205"><IoLogoGithub size={40} className="text-gray-500 hover:text-gray-800 transition-colors duration-800 ease-in-out cursor-pointer icon-rotate" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61550503551153"><SiFacebook size={40} className="text-gray-500 hover:text-blue-600 transition-colors duration-800 ease-in-out cursor-pointer icon-rotate" /></a>
                    </div>
                </nav>
                <a
                    href="#contact"
                    className="flex items-center bg-gray-700 border border-gray-500 py-1 px-3 focus:outline-none hover:bg-amber-500 rounded text-base mt-4 md:mt-0 text-white">
                    <span>Hire Me </span>
                    <span className="mr-2"><FiArrowRight /></span>
                </a>
            </div>
        </header>
    );
};

export default Navbar;