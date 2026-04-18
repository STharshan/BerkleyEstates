import React, { useState } from 'react';

const LandlordServices = () => {
    const [active, setActive] = useState(null);

    // Chevron component to match the thin, clean style in the image
    const Chevron = ({ isOpen }) => (
        <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
    );

    return (
        <div className='bg-[#E6E4E1] lg:py-25'>
            <div className="flex flex-col md:flex-row  w-full max-w-6xl mx-auto">
                {/* Left Section: Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16">
                    <div className="max-w-xl">
                        <p className=" uppercase text-black mb-6">
                            Landlords
                        </p>

                        <h1 className="text-2xl font-normal leading-tight text-black mb-4">
                            Our services
                        </h1>

                        <div className="text-[17px] leading-[1.6] text-black space-y-6 mb-12">
                            <p>
                                At Berkley Estates & Letting Agents we offer two types of services;
                                the first is a <span className="font-bold">fully managed </span> service,
                                and the second is a <span className="font-bold">tenant find </span> service.
                                If you choose our fully managed service, we will take care of everything every step of the way,
                                which will save you both time and money. Landlords at Berkley Estates Agents receive
                                high-quality marketing of their property, along with a wide range of other services.
                            </p>
                        </div>

                        {/* Accordion List */}
                        <div className="space-y-1">
                            {['Fully Managed', 'Tenant Find'].map((item) => {
                                let content = '';
                                if (item === 'Fully Managed') {
                                    content = `We will take care of everything every step of the way, saving you time and money. It is designed to offer a completely hands-off, stress-free experience from beginning to end.`;
                                } else if (item === 'Tenant Find') {
                                    content = `We offer this service for those landlords who like a ‘hands-on’ approach to their property portfolio. A flat fee covers marketing, viewings, referencing and collection of the first month’s rent and deposit.`;
                                }

                                return (
                                    <div key={item} className="border-b border-gray-400/30 ">
                                        <button
                                            onClick={() => setActive(active === item ? null : item)}
                                            className="w-full py-5 flex justify-between items-center text-lg text-black transition-colors"
                                        >
                                            <span className="font-normal">{item}</span>
                                            <span className="text-black font-bold ">
                                                <Chevron isOpen={active === item} />
                                            </span>
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === item ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                                            <p className="text-black text-sm">
                                                {content}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="w-[full] md:w-1/2 h-100 lg:h-auto my-auto p-6 overflow-hidden">
                    <img
                        src="/l2.webp"
                        alt="Interior Design"
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

            </div>
        </div>
    );
};

export default LandlordServices;