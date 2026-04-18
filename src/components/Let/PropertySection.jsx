import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const PropertySection = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-12 md:py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content Side */}
                <div className="space-y-8">
                    <header>
                        <span className="text-sm font-semibold tracking-widest text-black uppercase">
                            Your Trusted Local Property Experts
                        </span>
                        <h2 className="mt-4 text-2xl text-black tracking-tight leading-10">
                            We pride ourselves on unwavering attention to detail and dedicated personal service.
                        </h2>
                    </header>

                    <div className="space-y-6 text-black text-lg leading-relaxed max-w-xl">
                        <p>
                            We understand that life doesn’t always fit within office hours, so we
                            adapt to your schedule. Our doors are open later and on weekends,
                            and our agents are available beyond regular hours to meet your needs.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            to="/about/"
                            className="group flex items-center text-black tracking-wide uppercase"
                        >
                            <span className="mr-4 text-xl transition-transform group-hover:translate-x-1">
                                <IoIosArrowForward />
                            </span>
                            Meet the faces of the brand
                        </Link>
                    </div>
                </div>

                {/* Right Image Side */}
                <div className="relative h-90 w-full overflow-hidden shadow-xl">
                    <img
                        src="l6.webp" // Placeholder for the modern property image
                        alt="Modern home with glass bifold doors"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

            </div>
        </section>
    );
};

export default PropertySection;