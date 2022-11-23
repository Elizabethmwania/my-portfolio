import React from 'react';
import PhoneIcon from '@heroicons/react/solid';
import { ArrowRightIcon  } from '@heroicons/react/solid'
import passport from'../images/Passport-size-photo.jpg';
const Navbar = () => {
    return (
        <header className="bg-orange-600 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                    Coder002
                </a>
                <a>
                    
                </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <a href="#projects" className="mr-5 hover:text-white">
                    Projects
                </a>
                <a href="#skills" className="mr-5 hover:text-white">
                    Skills
                </a>
                <a href="#testimonials" className="mr-5 hover:text-white">
                    Reviews
                </a>
                </nav>
                <a
                href="#contact"
                className="pasport-img">
                <img className='passport' src= {passport} />
               <p>+254 794 319 208</p> 
                <span>
                {/* <PhoneIcon className="w-4 h-4 ml-1" /> 254794319208 */}
                </span>
                </a>
            </div>
        </header>
    );
};

export default Navbar;