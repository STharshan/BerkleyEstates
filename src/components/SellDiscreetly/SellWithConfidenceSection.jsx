import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const PropertySection = () => {
    return (
        <section className="bg-[#D8D6D0] py-12 px-6 md:px-16 lg:px-36 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">

                {/* Left Content Side - Order 1 (Top on mobile) */}
                <div className="space-y-6 md:space-y-8 order-1">
                    <header>
                        <span className="text-xs md:text-sm lg:text-base tracking-widest text-black uppercase font-medium">
                            SELL YOUR HOME WITH CONFIDENCE
                        </span>
                        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl text-black tracking-tight leading-snug md:leading-10">
                            Connect with qualified buyers quickly and discreetly.
                        </h2>
                    </header>

                    <div className="text-black text-base md:text-lg leading-relaxed max-w-xl">
                        <p>
                            We maintain an extensive database of motivated buyers with whom we have close working relationships. 
                            Your home will be presented to those who are an ideal match for the property and ready to proceed promptly.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            to="/contact"
                            className="group inline-flex items-center text-black tracking-wide uppercase font-semibold text-sm md:text-base"
                        >
                            <span className="mr-4 text-xl transition-transform duration-300 group-hover:translate-x-2">
                                <IoIosArrowForward />
                            </span>
                            TELL ME MORE
                        </Link>
                    </div>
                </div>

                {/* Right Image Side - Order 2 (Bottom on mobile) */}
                <div className="order-2">
                    <div className="relative h-72 sm:h-96 md:h-125 lg:h-150 w-full overflow-hidden shadow-2xl">
                        <img
                            src="s4.jpeg"
                            alt="Modern home with glass bifold doors"
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PropertySection;