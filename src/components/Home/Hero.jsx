import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <iframe
        src="https://player.vimeo.com/video/1047730947?h=4c98c5ce3b&autoplay=1&loop=1&muted=1&background=1"
        title="Berkley Estates hero video"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        poster="/fall.png"
        onError={(e) => (e.currentTarget.style.display = "none")}
      ></iframe>

      {/* Dark Overlay to match image style */}
      <div className="absolute inset-0 z-20 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-30 max-w-4xl px-4 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight mb-10 leading-tight">
          Your property,<br />our passion.
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
          <Link 
            to="/properties" 
            className="w-full sm:w-48 px-8 py-3 border border-white text-white text-sm tracking-widest  hover:bg-white hover:text-[#041C55] transition-all duration-300 ease-in-out"
          >
            Properties
          </Link>
          <Link 
            to="/valuation"
            className="w-full sm:w-48 px-8 py-3 border border-white text-white text-sm tracking-widest  hover:bg-white hover:text-[#041C55] transition-all duration-300 ease-in-out"
          >
            Valuation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
