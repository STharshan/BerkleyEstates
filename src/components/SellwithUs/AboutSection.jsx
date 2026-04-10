const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-12 lg:gap-10 items-center">
          
          {/* Image */}
          <div>
            <img
              src="/872a5a67-7872-42b8-a35c-4996bab5b356.webp"
              alt="Property expert"
              className="w-full h-[300px] md:h-[400px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-[560px]">
            
            {/* Small Heading */}
            <h4 className="text-[12px] md:text-[18px] tracking-[2px] text-[#2d2d2d] mb-4 font-primary uppercase">
              Trusted Property Experts
            </h4>

            {/* Main Heading */}
            <h2 className="text-[24px] md:text-[30px] lg:text-[26px] leading-[1.4] text-black mb-6 font-primary">
              Passion for design, unmatched property expertise
            </h2>

            {/* Paragraph */}
            <p className="text-[15px] md:text-[16px] leading-[1.5] text-black mb-8 font-primary">
              Our team is driven by a passion for design, unmatched property
              expertise, and unwavering dedication to our clients. Living locally
              gives us unparalleled hometown knowledge and a deep connection to
              the communities we serve. We’re proud to be both inspired by and
              embedded in the neighbourhoods where we work.
            </p>

            {/* CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-3 text-[14px] md:text-[15px] font-primary text-black group"
            >
              <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                ›
              </span>
              MEET THE TEAM
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;