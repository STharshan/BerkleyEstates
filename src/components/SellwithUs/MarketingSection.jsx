const MarketingSection = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-20">
      
      <div className="max-w-[1280px] mx-auto">
        
        {/* Grid eka 1280px athule fit wenna fixed widths nathiwa 1fr units use kara */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <div className="w-full ">
            <p className="text-[15px] md:text-[15px] leading-[24px] text-black dark:text-white font-primary">
              At <span className="text-black  font-semibold">Berkley Estates</span>, 
              we don’t just list properties—we actively
              market them to ensure they reach the right buyers. Our dynamic
              approach leverages the full power of social media, targeted
              digital campaigns, and high-quality content across all platforms,
              ensuring maximum exposure where buyers are truly looking. In an
              ever-evolving market, we adapt quickly, using data-driven
              insights to refine strategies and stay ahead of trends. We
              believe in being proactive, not passive—going above and beyond to
              generate interest, drive viewings, and secure strong offers. Our
              focus isn’t just on putting properties on the market; it’s on
              getting them sold, delivering results with energy, expertise, and
              a relentless commitment to success.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/IMG_9026.jpeg"
              alt="Berkley Estates kitchen interior"
              className="w-full  h-[300px] md:h-[380px] lg:h-[380px] object-cover rounded-sm shadow-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingSection;