import React from 'react';
import MyPic from '../assets/me2.png'; // Path to your image or video asset

const About = () => {
    return (
        <section className="container mx-auto my-32 px-4">
            <div className="flex flex-col-reverse md:flex-row items-center">
                {/* Image or Video */}
                <div className="flex-1 md:w-1/2">
                    <img
                        src={MyPic}
                        alt="About Me"
                        className="rounded-full shadow-xl max-w-xs mx-auto md:max-w-md"
                    />
                </div>

                {/* About Text */}
                <div className="flex-1 md:w-1/2 text-center md:text-left md:ml-12 mt-8 md:mt-0">
                    <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
                    <p className="text-xl text-gray-700 mb-4">
                        Hi, I’m Rukshan, a passionate web developer with expertise in building modern, responsive, and user-friendly websites. I specialize in frontend and backend development, with a focus on creating seamless user experiences and high-performance applications.
                    </p>
                    <p className="text-lg text-gray-500 mb-4">
                        My mission is to empower businesses and individuals by providing them with cutting-edge web development solutions that drive success in the digital world.
                    </p>
                    <p className="text-lg text-gray-500">
                        Whether you're looking for a custom website, an e-commerce platform, or a mobile application, I'm here to help bring your ideas to life!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
