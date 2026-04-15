import React, { useState } from 'react';

const PropertyLandingSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col w-full">
            {/* 2. EXTENSIVE MARKET PRESENCE SECTION */}
            <section
                className="bg-[#D6D3CD] py-20 text-center"

            >
                <div className="max-w-280 mx-auto flex flex-col items-center">
                    {/* Logo that changes on hover */}
                    <div className="mb-6 flex justify-center" onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <img
                            src={isHovered ? "/l6.png" : "/l5.png"}
                            alt="Rightmove Logo"
                            loading="lazy"
                            className="h-10 md:h-14 w-auto object-contain transition-all duration-300"
                        />
                    </div>

                    <h2 className="text-xl md:text-2xl text-black mb-6">
                        Extensive Market Presence
                    </h2>

                    <p className="text-black text-sm md:text-base text-left leading-relaxed">
                        We advertise all our properties on Rightmove, the UK’s most popular property portal,
                        ensuring maximum visibility. Combined with our active social media presence,
                        we give every home the exposure it deserves.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PropertyLandingSection;