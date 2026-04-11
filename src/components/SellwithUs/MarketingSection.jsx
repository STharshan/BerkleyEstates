const MarketingSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-20">
      
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-[580px_700px] gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <div className="max-w-[580px] pt-2">
            <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#111111] font-primary">
              At Berkley Estates, we don’t just list properties—we actively
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
          <div>
            <img
              src="/IMG_9026.jpeg"
              alt="Berkley Estates kitchen interior"
              className="w-full h-[280px] md:h-[360px] lg:h-[400px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingSection;