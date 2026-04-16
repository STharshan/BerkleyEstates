
const Partner = () => {
  return (
    <section className="w-full bg-white py-10 lg:py-28">
      <div className="max-w-[1300px] mx-auto px-6 md:px-18">
        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-8 xl:grid-cols-[1fr_650px] xl:gap-0">
          
          {/* Left Content */}
          <div className="max-w-full">
            
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
          <div className="ms-0 w-full lg:justify-self-end 2xl:ms-24">
            <img
              src="/DSC09716-1536x994.webp"
              alt="Jake Brogden testimonial"
              loading="lazy"
              className="h-[280px] w-full object-cover md:h-[380px] lg:max-w-[520px] xl:max-w-[560px] 2xl:max-w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partner;
