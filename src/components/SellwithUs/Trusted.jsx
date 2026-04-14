import { Link } from "react-router-dom";

const Trusted = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-12 lg:gap-10 items-center">
          
          {/* Image */}
          <div>
            <img
              src="/872a5a67-7872-42b8-a35c-4996bab5b356.webp"
              alt="Property expert"
              className="w-full h-[300px] md:h-[400px] lg:h-[380px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-[560px]">
            
            {/* Small Heading */}
            <h4 className="text-[16px] md:text-[16px] tracking-[2px] text-[#0A0A0A] mb-4 font-primary uppercase 2xl:-mt-24 font-normal -mt-0">
              Trusted Property Experts
            </h4>

            {/* Main Heading */}
            <h2 className="text-[24px] md:text-[24px] lg:text-[24px] leading-[38px] text-black mb-6 font-primary font-normal">
              Passion for design, unmatched property expertise
            </h2>

            {/* Paragraph */}
            <p className="text-[15px] md:text-[15px] leading-[24px] text-black mb-8 font-primary font-normal pt-0 2xl:pt-2">
              Our team is driven by a passion for design, unmatched property
              expertise, and unwavering dedication to our clients. Living locally
              gives us unparalleled hometown knowledge and a deep connection to
              the communities we serve. We’re proud to be both inspired by and
              embedded in the neighbourhoods where we work.
            </p>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[16px] md:text-[16px] font-primary text-black group leading-[25px]"
            >
             <span className="transition-transform duration-300 group-hover:translate-x-1">
  <svg
    aria-hidden="true"
    className="w-[18px] h-[18px] fill-current"
    viewBox="0 0 320 512"
  >
    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
  </svg>
</span>
              MEET THE TEAM
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Trusted;