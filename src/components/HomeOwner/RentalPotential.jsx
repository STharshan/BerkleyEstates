import React from 'react';

const RentalPotential = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full min-h-125 bg-[#dcdbd4]">
      
      {/* Left Side: Content Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 text-gray-900">
        <h2 className="text-3xl md:text-4xl font-normal mb-6 leading-tight">
          Maximise Your Rental Potential
        </h2>
        
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-10 max-w-xl">
          Letting your property with us means maximising your returns while minimising the stress. 
          Our expert team takes care of everything—from marketing and tenant screening to 
          ongoing management—so you can enjoy the benefits of being a landlord without 
          the hassle. With flexible service packages tailored to your needs, you can 
          choose the level of involvement that works best for you.
        </p>

        <button className="border border-black px-10 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-[#041C55] rounded-sm hover:text-white">
          Find Out More
        </button>
      </div>

      {/* Right Side: Image Container */}
      <div className="w-full md:w-1/2 h-88 md:h-auto">
        <img 
          src="/h2.webp" 
          alt="Elegant interior hallway with staircase"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      
    </section>
  );
};

export default RentalPotential;