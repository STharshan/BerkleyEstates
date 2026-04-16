import React from 'react';

const PropertyCTA = () => {
  return (
    <section className="bg-[#001449] py-20 px-6 mb-20 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8">
          
          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-4xl font-normal tracking-tight">
            Like this property?
          </h2>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            
            {/* Primary Action Button */}
            <button className="bg-white text-[#001449] px-10 py-3.5 text-lg font-medium hover:bg-slate-100 transition-colors duration-200">
              Arrange a viewing
            </button>

            {/* Secondary Action Button (Outlined) */}
            <button className="border border-white text-white px-10 py-3.5 text-lg font-medium hover:bg-white/10 transition-all duration-200">
              View similar properties
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCTA;