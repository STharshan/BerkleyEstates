
const Partner = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1300px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_650px] gap-14 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-[600px]">
            
            {/* Quote */}
            <div className="text-[70px] md:text-[90px] leading-none text-[#c9c5bf] mb-6 font-serif-new">
              “
            </div>

            {/* Paragraph */}
            <p className="text-[14px] md:text-[15px] leading-[1.4] text-[#3F444B] font-primary mb-8 -mt-12">
              Recently sold our property through Jake and would highly
              recommend his services. His hard work to get us the sale paid off
              within a week of being on the market, and continued through to
              completion. Jake not only sold our house, but negotiated our
              purchase on our behalf, chased solicitors and was always there
              for any questions we had. He has a great network of sellers/buyers
              and some great contacts to get your move done
            </p>

            {/* Name */}
            <h3 className="text-[16px] md:text-[16px] font-medium text-[#3F444B] font-primary  leading-[25px] -mt-4">
              Jake Brogden
            </h3>

            {/* Role */}
            <p className="text-[16px] md:text-[16px] text-black font-primary">
              Partner
            </p>

          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/DSC09716-1536x994.webp"
              alt="Jake Brogden testimonial"
              className=" max-w-full md:max-w-[560px] h-[280px] md:h-[380px] lg:h-[380px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partner;