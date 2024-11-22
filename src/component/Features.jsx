// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaTools, FaRocket } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaLaptopCode size={50} className="text-black" />,
            title: 'Customizable Templates',
            description: 'Easily modify templates to suit your needs, no coding required.',
        },
        {
            icon: <FaMobileAlt size={50} className="text-black" />,
            title: 'Mobile-Friendly Designs',
            description: 'All templates are responsive and work perfectly on any device.',
        },
        {
            icon: <FaTools size={50} className="text-black" />,
            title: 'Easy-to-Use Tools',
            description: 'User-friendly interface and tools to help you create faster.',
        },
        {
            icon: <FaRocket size={50} className="text-black" />,
            title: 'Fast Launch Times',
            description: 'Launch your website in minutes with our optimized process.',
        },
    ];

    return (
        <section className="container mx-auto my-32 px-16">
            <h2 className="text-4xl text-center font-bold mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border "
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                        <p className="text-center text-gray-500 mt-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
