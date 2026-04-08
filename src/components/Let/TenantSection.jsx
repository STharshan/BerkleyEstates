import React, { useState } from 'react';

const PropertyPage = () => {
    const [feesOpen, setFeesOpen] = useState(true);

    // Chevron SVG component for the dropdowns
    const Chevron = ({ isOpen, thin }) => (
        <svg
            className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'} ${thin ? 'w-3 h-3' : 'w-4 h-4'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={thin ? 3 : 2} d="M5 15l7-7 7 7" />
        </svg>
    );

    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* SECTION 2: IMAGE GALLERY & DESCRIPTION */}
            <section className="bg-[#041C55] px-6 pt-10 text-white text-center">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
                        <div className="w-full md:w-[35%] aspect-3/4 overflow-hidden">
                            <img src="l3.webp" alt="Interior" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-[60%] aspect-16/10 overflow-hidden">
                            <img src="l4.webp" alt="Exterior" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <p className="uppercase mb-4 text-white">Tenants</p>
                        <h2 className="text-2xl mb-8">Discover your perfect home and enjoy a seamless rental experience.</h2>
                        <p className="text-white leading-relaxed">
                            We pride ourselves on complete transparency with our service charges—no hidden fees, ever. Below is a clear breakdown of the payments you can expect throughout your tenancy:
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 1: TENANTS FEES DROPDOWN (NEW) */}
            <section className="bg-[#041C55] py-15 md:px-20">
                <div className="max-w-5xl mx-auto border border-white">
                    <button
                        onClick={() => setFeesOpen(!feesOpen)}
                        className="w-full flex items-center gap-2 px-4 py-3 bg-transparent border-b border-white hover:bg-white/5 transition-colors"
                    >
                        <span className="text-white">
                            <Chevron isOpen={feesOpen} thin={true} />
                        </span>
                        <span className="text-white uppercase tracking-widest">Tenants Fees</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${feesOpen ? 'max-h-300 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 md:p-8 space-y-4 text-white text-base leading-relaxed">
                            <p>Monthly rent charges.</p>
                            <p>Holding Deposit: capped at one week's rent.</p>
                            <p>Deposit: A maximum of 5 weeks rent, increasing to 6 weeks for properties with rent over £50,000 per year.</p>
                            <p>You can only be charged a late payment fee once you're 14 days late with rent.</p>
                            <p>Default fee for rent payment after 14 days: no more than 3% APR above the Bank of England base rate.</p>
                            <p>Default charges for lost keys or security fobs will be a reasonable cost for replacement only.</p>
                            <p>A landlord or agent is entitled to charge up to £50 for the administration involved in amending the tenancy agreement.</p>
                            <p>Bill payments include utilities, TV licences, council tax, and energy efficiency charges.</p>
                            <p>Berkley Estates are members of the Property Ombudsman scheme.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PropertyPage;