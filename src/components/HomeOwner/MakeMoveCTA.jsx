import React from 'react';

const MakeMoveCTA = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* 1. Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover"
        style={{ 
          backgroundImage: `url('/cta.webp')`, // Replace with actual path
        }}
      >
        {/* Dark overlay to make text pop - matching the image's moody blue-grey tone */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-3xl font-normal mb-6 tracking-wide">
          Looking to Make a Move?
        </h2>

        <p className="text-base md:text-lg font-light mb-10 leading-relaxed">
          Whether you’re selling or letting your home, we’re here to guide you. 
          Get in touch today to see how we can help you achieve your property goals.
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button className="border border-white/80 bg-transparent rounded-sm backdrop-blur-sm px-8 py-3 text-sm md:text-base uppercase transition-all duration-300 hover:bg-white hover:text-slate-900">
            Book a Valuation
          </button>
        </div>

      </div>
    </section>
  );
};

export default MakeMoveCTA;