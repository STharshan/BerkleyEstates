import React from 'react';
import { Link } from 'react-router-dom';

const WhyBerkleyEstates = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl text-black mb-6">
          Why Berkley Estates
        </h2>

        {/* Sub-heading / Tagline */}
        <h3 className="text-lg  text-black font-normal mb-10">
          Expertise you can trust, service that stands out.
        </h3>

        {/* Description Paragraph */}
        <p className="text-black leading-relaxed text-base text-left mb-12">
          As a local agency, we take pride in our strong community ties. Living and 
          working in the areas we serve gives us unparalleled insight into the local 
          property market. Our approach blends professionalism with a personal touch, 
          ensuring every client gets expert guidance and outstanding results.
        </p>

        {/* CTA Button */}
        <Link to="/valuation" className="border border-black px-5 py-2.5 rounded-sm text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-[#001C56] hover:text-white font-medium font-primary">
          Book Your Valuation
        </Link>

      </div>
    </section>
  );
};

export default WhyBerkleyEstates;