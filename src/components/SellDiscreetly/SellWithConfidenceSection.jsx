import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const PropertySection = () => {
    return (
        <section className="bg-[#D8D6D0] py-12 px-36 md:py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">

                {/* Left Content Side */}
                <div className="space-y-8">
                    <header>
                        <span className="text-base  tracking-widest text-black uppercase">
                            SELL YOUR HOME WITH CONFIDENCE
                        </span>
                        <h2 className="mt-4 text-2xl text-black tracking-tight leading-10">
                            Connect with qualified buyers quickly and discreetly.​
                        </h2>
                    </header>

                    <div className="space-y-6 text-black text-lg leading-relaxed max-w-xl">
                        <p>
                           We maintain an extensive database of motivated buyers with whom we have close working relationships. Your home will be presented to those who are an ideal match for the property and ready to proceed promptly.
                        </p>
                    </div>

                    <div className="pt-4">
                        <a
                            href="#meet-the-team"
                            className="group flex items-center text-black tracking-wide uppercase"
                        >
                            <span className="mr-4 text-xl transition-transform group-hover:translate-x-1">
                                <IoIosArrowForward />
                            </span>
                            TELL ME MORE
                        </a>
                    </div>
                </div>

                {/* Right Image Side */}
                <div className="relative h-180 w-full overflow-hidden shadow-xl">
                    <img
                        src="s4.jpeg"
                        alt="Modern home with glass bifold doors"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default PropertySection;