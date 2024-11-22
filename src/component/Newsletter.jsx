import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // You can integrate an email API or handle email submission here
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="container mx-auto my-32 px-16 text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Stay Updated with the Latest Templates and Design Resources!
            </h2>
            <p className="text-lg mb-8 text-gray-600">
                Sign up for our newsletter and get free design resources and exclusive updates directly to your inbox.
            </p>

            {/* Form Section */}
            {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full py-3 px-6 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-black text-white rounded-lg font-semibold hover:bg-black/80 transition duration-300"
                    >
                        Subscribe Now
                    </button>
                </form>
            ) : (
                <p className="text-xl font-semibold text-black/60">
                    Thank you for subscribing! Check your inbox for the latest updates.
                </p>
            )}
        </section>
    );
};

export default NewsletterSignup;
