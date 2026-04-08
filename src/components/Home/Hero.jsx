import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-exterior-of-a-modern-house-in-the-city-21111-large.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay to match image style */}
      <div className="absolute z-20 inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl">
        <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight mb-10 leading-tight">
          Your property,<br />our passion.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a 
            href="#properties" 
            className="w-full sm:w-48 px-8 py-3 border border-white text-white text-sm tracking-widest  hover:bg-white hover:text-[#041C55] transition-all duration-300 ease-in-out"
          >
            Properties
          </a>
          <a 
            href="#valuation" 
            className="w-full sm:w-48 px-8 py-3 border border-white text-white text-sm tracking-widest  hover:bg-white hover:text-[#041C55] transition-all duration-300 ease-in-out"
          >
            Valuation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;