import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const SolutionsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 lg:px-20 max-w-7xl mx-auto">
      
      {/* 1. Top Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
        {/* Left Vertical Image */}
        <div className="md:col-span-4 h-125 md:h-150">
          <img 
            src="/h3.webp" 
            alt="Modern bathroom interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Horizontal Image */}
        <div className="md:col-span-8 h-88 md:h-125">
          <img 
            src="/h4.webp" 
            alt="Brick house with garden" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Bottom Content Section */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Testimonial Side */}
        <div className="w-full md:w-1/3">
          <FaQuoteLeft className="text-4xl md:text-5xl text-black mb-6" />
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-4">
            A pleasure to deal with, nothing was too much trouble.
          </blockquote>
          <cite className="not-italic font-bold text-gray-900 text-lg">
            Mark
          </cite>
        </div>

        {/* Text Content Side */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-normal text-gray-900 mb-4">
            Personalised Solutions for Homeowners
          </h2>
          <h3 className="text-lg font-normal text-gray-800 mb-6">
            Expert Support, Every Step of the Way
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            From getting your home market-ready to finalising the deal, our team is 
            committed to making the process seamless and stress-free. With customised 
            marketing strategies, expert advice, and in-depth local knowledge, we ensure 
            your property reaches the right buyers or tenants—maximising its value and appeal.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;