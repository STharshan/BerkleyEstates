import React from 'react';
import { Link } from 'react-router-dom';

const RelationshipSection = () => {
  return (
    <section className="bg-white py-17 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Value Proposition */}
        <h2 className="text-3xl text-black mb-5 leading-tight tracking-tight">
          Building authentic relationships and optimising the value of your asset.
        </h2>

        {/* Supporting Text */}
        <p className="text-black text-base leading-relaxed mb-8 font-light">
          At Berkley Estates, we’ve transformed the rental experience with a hands-on approach. 
          We pride ourselves on building trusting, transparent, and enduring relationships 
          with our clients.
        </p>

        {/* Centered CTA Button */}
        <Link to="/valuation" className="border px-5 py-2.5 rounded-sm text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#041C55] hover:text-white">
          Book Your Valuation
        </Link>

      </div>
    </section>
  );
};

export default RelationshipSection;