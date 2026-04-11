import React from 'react';

const ValuationHero = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading: Scalable size for mobile to desktop */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-black mb-6">
          Discover your home's value
        </h1>

        {/* Subtext: Responsive width and line height */}
        <p className="text-black text-base font-normal text-center max-w-3xl mx-auto leading-relaxed">
          Start the process with a complimentary market valuation. We’ll then 
          connect you with an agent whose local market knowledge and experience 
          is second to none. Book your appointment today.
        </p>
      </div>
    </section>
  );
};

export default ValuationHero;