import { useState } from "react";
import { trustedContent } from "../Data/sectionData"; 

const TrustedPartnerSection = ({ pageId }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  
  const data = trustedContent[pageId];

  if (!data) return null; 

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-5 py-16 md:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2">
        
        {/* IMAGE */}
        <div className="w-full">
          <img
            src={data.image}
            alt="trust"
            className="mx-auto w-full max-w-[450px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full font-primary">
          <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[25.88px] text-black">
            {data.heading}
          </h3>
          <p className="mb-6 text-[14px] leading-[22px] md:text-[18px] text-black lg:leading-[25.88px]">
            {data.description}
          </p>

          {/* ACCORDION */}
          <div>
            {data.accordions.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index}>
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full text-black items-center justify-between bg-white px-4 py-[10px] text-left text-[14px] md:text-[16px] border border-[#D5D8DC]"
                  >
                    <div className="flex items-center gap-3">
                       {/* Icon component-ah inge use pannunga */}
                       <span className="text-lg">{isOpen ? '-' : '+'}</span>
                       <span>{item.title}</span>
                    </div>
                  </button>

                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="border border-t-0 border-[#D5D8DC] bg-white px-4 py-3 text-[14px] md:text-[16px] leading-[1.8] text-black">
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