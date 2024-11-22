// eslint-disable-next-line no-unused-vars
import React from 'react';

const portfolioItems = [
    {
        title: "Project 1: E-Commerce Website",
        description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB.",
        image: "https://via.placeholder.com/400x300",
        link: "#", // Link to view more details or project page
    },
    {
        title: "Project 2: Personal Blog",
        description: "A clean, minimalist blog built with Next.js and Tailwind CSS for fast loading and SEO.",
        image: "https://via.placeholder.com/400x300",
        link: "#", // Link to view more details or project page
    },
    {
        title: "Project 3: Portfolio Website",
        description: "A personal portfolio showcasing web development skills with React and Tailwind CSS.",
        image: "https://via.placeholder.com/400x300",
        link: "#", // Link to view more details or project page
    },
    {
        title: "Project 4: Task Manager App",
        description: "A task management application with a drag-and-drop feature, built with React and Firebase.",
        image: "https://via.placeholder.com/400x300",
        link: "#", // Link to view more details or project page
    },
];

const Portfolio = () => {
    return (
        <section className="container mx-auto my-32 px-16">
            <h2 className="text-4xl font-bold text-center text-black mb-8">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
                        <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <a href={item.link} className="text-black font-medium hover:underline">View More</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
