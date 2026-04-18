import React from 'react';
import { Link } from 'react-router-dom';

const TrustedGuidance = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-6xl bg-[#4a4743]">
      {/* Left Side: Image Container */}
      <div className="w-full md:w-1/2 h-88 md:h-auto">
        <img 
          src="/h1.webp" 
          alt="English Estate Row Houses"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Content Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 text-white">
        <h2 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">
          Trusted Guidance for Selling Your Home
        </h2>
        
        <p className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl">
          Selling your home is a major milestone, and we're here to support you every 
          step of the way. Our knowledgeable team understands the intricacies of the 
          property market and provides honest, practical advice to help you secure the 
          best possible outcome. From setting the right price to handling negotiations, 
          we put your needs first, ensuring a seamless and successful sale.
        </p>

        <Link to="/sell-berkley-estate" className="border border-white px-10 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#4a4743]">
          Find Out More
        </Link>
      </div>
    </section>
  );
};

export default TrustedGuidance;