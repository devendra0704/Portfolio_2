import React from 'react';
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">

                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(360deg, rgba(79,73,176,1) 9%, rgba(45,45,198,1) 22%, rgba(9,177,212,1) 35%)",
                            }}>
                            <a href="home">{"< Devendra Saini/>"}</a>
                        </h1>
                        <p className="text-gray-400 max-w-xs mt-2">
                            Let's build the future together and create something amazing!
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-400 text-2xl"><HiOutlineMail /></span>
                        <a href="mailto:devsaini150602@gmail.com" className="text-gray-400 hover:text-white">
                            devsaini150602@gmail.com
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-400">
                        <li>
                            <a href="#home" className="hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#education" className="hover:text-white">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-white">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-white">
                                Projects
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
