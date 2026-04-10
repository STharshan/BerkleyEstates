import { useState } from "react";
import { trustedContent } from "../Data/sectionData"; // Path check pannikonga

const Icon = ({ isOpen }) => {
  return (
    <span className="flex shrink-0 items-center justify-center">
      {isOpen ? (
        <svg viewBox="0 0 448 512" className="h-[13px] w-[13px] fill-black">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      ) : (
        <svg viewBox="0 0 448 512" className="h-[13px] w-[13px] fill-black">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      )}
    </span>
  );
};

const TrustedPartnerSection = ({ pageId }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // pageId vachu correct data-vah choose panrom
  const data = trustedContent[pageId];

  if (!data) return null; // ID thappa iruntha safe-ah ethuvum show pannathu

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-5 py-16 md:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2">
        
        {/* LEFT IMAGE - Now Dynamic */}
        <div className="w-full">
          <img
            src={data.image}
            alt={data.heading}
            className="mx-auto w-full max-w-[450px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT - Now Dynamic */}
        <div className="w-full font-primary">
          <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[25.88px] text-black">
            {data.heading}
          </h3>

          <p className="mb-6 text-[14px] leading-[22px] md:text-[18px] text-black lg:leading-[25.88px]">
            {data.description}
          </p>

          {/* ACCORDION LOOP */}
          <div>
            {data.accordions.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index}>
                  {/* HEADER */}
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full text-black items-center justify-between bg-white px-4 py-[10px] text-left text-[14px] md:text-[16px] border border-[#D5D8DC]"
                  >
                    <div className="flex items-center gap-3">
                      <Icon isOpen={isOpen} />
                      <span>{item.title}</span>
                    </div>
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Fixed border color to match your HEX #D5D8DC */}
                      <div className="border border-t-0 border-[#D5D8DC] bg-white px-4 py-3 text-[16px] leading-[1.8]">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerSection;