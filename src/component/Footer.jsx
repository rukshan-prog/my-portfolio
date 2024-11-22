import React from "react";

const Footer = () => {
    const socialMediaLinks = [
        {
            name: "Linkedin",
            url: "https://www.facebook.com",
            icon: "fi fi-brands-linkedin text-2xl",
        },
        {
            name: "whatsapp",
            url: "https://www.twitter.com",
            icon: "fi fi-brands-whatsapp text-2xl",
        },
        {
            name: "youtube",
            url: "https://www.instagram.com",
            icon: "fi fi-brands-youtube text-2xl",
        },
        {
            name: "github",
            url: "https://www.youtube.com",
            icon: "fi fi-brands-github text-2xl",
        },
    ];

    return (
        <footer className="bg-white dark:bg-black text-black dark:text-white py-8">
            <div className="container mx-auto px-16">
                {/* Logo and About */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold">Rukshan Prog</h1>
                        <p className="mt-2 text-sm">
                            Creating innovative solutions for the web, one pixel at a time.
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {socialMediaLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-style text-4xl"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
                    <div className="mb-6">
                        <h2 className="font-bold">Quick Links</h2>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="font-bold">Resources</h2>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Support</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-8 border-t border-gray-300 dark:border-gray-700 pt-4">
                    <p className="text-sm">
                        &copy; 2024 Rukshan Prog. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
