import React from 'react';
import { HiChevronDown } from 'react-icons/hi2'; // Heroicons v2

const HomeownersHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden bg-black font-sans">
      
      {/* 1. Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-[0.4] md:brightness-50"
        style={{ 
          backgroundImage: `url('/owner.webp')`,
        }}
      />

      {/* 2. Visual "Spotlight" Gradient Overlay */}
      <div className="absolute inset-0 " />

      {/* 3. Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl mb-20 mt-20 font-semibold tracking-tight text-white sm:text-7xl">
          Homeowners
        </h1>
        
        {/* Animated Icon from React Icons */}
        <div className=" text-white">
          <HiChevronDown 
            className="w-10 h-10 md:w-16 md:h-16 mt-10 stroke-2" 
          />
        </div>
      </div>

    </section>
  );
};

export default HomeownersHero;