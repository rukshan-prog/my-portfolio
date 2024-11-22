import React from 'react';

const CTASection = () => {
    return (
        <section className="container mx-auto my-32 px-4 text-center bg-black text-white py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Take Your Web Development to the Next Level?
            </h2>
            <p className="text-lg mb-8">
                Join thousands of developers and start building stunning websites with our premium templates and components.
            </p>

            {/* Primary CTA Button */}
            <a
                href="#"
                className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-400 transition-colors duration-300 mb-4 inline-block"
            >
                Get Started for Free
            </a>

            {/* Secondary CTA Button */}
            <div className="mt-4">
                <a
                    href="#"
                    className="text-white font-medium hover:underline transition duration-300 mr-6"
                >
                    Explore Our Templates
                </a>
                <a
                    href="#"
                    className="text-white font-medium hover:underline transition duration-300"
                >
                    Learn More About Us
                </a>
            </div>
        </section>
    );
};

export default CTASection;
