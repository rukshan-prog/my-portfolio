// eslint-disable-next-line no-unused-vars
import React from 'react';

const services = [
    {
        title: "Free HTML/CSS Templates",
        description: "Fully responsive and customizable templates to kickstart your projects.",
        link: "#", // Link to more details or service page
        icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png" // You can replace with your icon or image
    },
    {
        title: "Tailwind CSS Components",
        description: "Reusable, clean, and mobile-first components for rapid development.",
        link: "#", // Link to more details or service page
        icon: "https://cdn-icons-png.flaticon.com/512/888/888870.png" // You can replace with your icon or image
    },
    {
        title: "Custom Web Development",
        description: "Tailored web solutions for businesses, from e-commerce to blogs.",
        link: "#", // Link to more details or service page
        icon: "https://cdn-icons-png.flaticon.com/512/888/888860.png" // You can replace with your icon or image
    },
    {
        title: "React Development",
        description: "Build fast and dynamic applications with React and its ecosystem.",
        link: "#", // Link to more details or service page
        icon: "https://cdn-icons-png.flaticon.com/512/888/888863.png" // You can replace with your icon or image
    },
];

const Services = () => {
    return (
        <section className="container mx-auto my-32 px-16">
            <h2 className="text-4xl font-bold text-center text-black mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-xl rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <a href={service.link} className="text-black/80 font-medium hover:underline">Learn More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
