// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '@flaticon/flaticon-uicons/css/all/all.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="font-serif">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="#">Rukshan Prog</a>
                </div>

                {/* Desktop Links */}
                <div className="hidden text-lg md:flex space-x-6">
                    <a href="#about" className="btn-style">
                        About
                    </a>
                    <a href="#projects" className="btn-style">
                        Projects
                    </a>
                    <a href="#contact" className="btn-style">
                        Contact
                    </a>
                </div>

                {/* Profile Icon */}
                <div className="hidden md:block">
                    <i className="fi fi-bs-user-add text-2xl icon-style"></i>

                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <i className="fi fi-bs-cross icon-style text-xl"></i> : <i className="fi fi-br-menu-burger icon-style text-xl"></i> }
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden shadow-xl ">
                    <a href="#about" className="block mx-3 btn-style">
                        About
                    </a>
                    <a href="#projects" className="block mx-3  btn-style">
                        Projects
                    </a>
                    <a href="#contact" className="block mx-3 btn-style">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
