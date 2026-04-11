
const Partner = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_650px] gap-14 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-[600px]">
            
            {/* Quote */}
            <div className="text-[70px] md:text-[90px] leading-none text-[#c9c5bf] mb-6 font-serif">
              “
            </div>

            {/* Paragraph */}
            <p className="text-[16px] md:text-[17px] leading-[1.4] text-[#2d2d2d] font-primary mb-8 -mt-5">
              Recently sold our property through Jake and would highly
              recommend his services. His hard work to get us the sale paid off
              within a week of being on the market, and continued through to
              completion. Jake not only sold our house, but negotiated our
              purchase on our behalf, chased solicitors and was always there
              for any questions we had. He has a great network of sellers/buyers
              and some great contacts to get your move done
            </p>

            {/* Name */}
            <h3 className="text-[18px] md:text-[20px] font-medium text-[#2d2d2d] font-primary mb-1">
              Jake Brogden
            </h3>

            {/* Role */}
            <p className="text-[18px] md:text-[20px] text-black font-primary">
              Partner
            </p>

          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/DSC09716-1536x994.webp"
              alt="Jake Brogden testimonial"
              className="w-full h-[280px] md:h-[380px] lg:h-[420px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partner;