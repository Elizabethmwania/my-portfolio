import React from 'react';
import PhoneIcon from '@heroicons/react/solid';
import { ArrowRightIcon  } from '@heroicons/react/solid'
import passport from'../images/profile.jpeg';
const Navbar = () => {
    return (
        <header className="bg-gray-900 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#"
                className="pasport-img">
                <img className='passport' src= {passport} />
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <a href="#projects" className="text-white mr-5 hover:text-orange-600">
                    Projects
                </a>
                <a href="#skills" className="text-white mr-5 hover:text-orange-600">
                    Skills
                </a>
                <a href="#contact" className="text-white mr-5 hover:text-orange-600">
                    Contact
                </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;