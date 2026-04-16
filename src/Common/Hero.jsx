import React from "react";

const HeroSection = ({ title, bgImage, overlay = true }) => {
  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
      

      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />

   
        {overlay && <div className="absolute inset-0 bg-black/30" />}
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <h1 className="text-white leading-[40px] tracking-tight font-primary font-normal max-w-6xl mx-auto tracking-[-1px] md:leading-[70px]
          text-[32px] 
          md:text-[40px] 
          lg:text-[70px]"
        >
          {title}
        </h1>
      </div>

   
      <a
        href="#team"
        className="absolute bottom-28 left-1/2 z-10 -translate-x-1/2 text-white transition hover:scale-110"
      >
        <svg
          viewBox="0 0 320 512"
          className="w-10 h-10 md:w-16 md:h-16 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>
      </a>

    </section>
  );
};

export default HeroSection;