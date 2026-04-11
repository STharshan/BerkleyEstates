import React from "react";
import { allTestimonials } from "../Data/sectionData";

const TestimonialSection = ({ pageId }) => {
  const data = allTestimonials[pageId];

  if (!data) return null;

  return (
    <section className="w-full bg-[#001C56] px-6 py-20 md:px-12 lg:py-24">
      <div className="mx-auto max-w-[1100px] text-center">
        
        {/* Dynamic Heading */}
        <h2 className="text-[28px] font-medium text-white md:text-[36px] tracking-tight">
          {data.heading}
        </h2>

        {/* Dynamic Sub-heading */}
        <p className="mt-4 text-[18px] text-white md:text-[24px] font-normal">
          {data.subHeading}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {data.reviews.map((item, index) => (
            <div key={index} className="text-left">
              
              {/* Stylized Quote Icon */}
              <div className="text-[120px] leading-[0.1] text-white select-none font-serif">
                “
              </div>

              {/* Testimonial Body */}
              <p className="mt-4 text-[16px] leading-[1.8] text-white font-normal md:text-[18px]">
                {item.text}
              </p>

              {/* Author Name - இப்போது வெள்ளை நிறத்தில் (White) */}
              <p className="mt-6 text-[18px] font-bold tracking-wide text-white">
                {item.author}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;