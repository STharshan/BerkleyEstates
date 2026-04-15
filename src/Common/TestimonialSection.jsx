import React from "react";
import { allTestimonials } from "../Data/sectionData";

const TestimonialSection = ({ pageId }) => {
  const data = allTestimonials[pageId];

  if (!data) return null;

  return (
    <section className="w-full bg-[#001C56] px-6 py-16 md:px-12 lg:py-24">
      <div className="mx-auto max-w-[1100px] text-center">
        
        {/* Dynamic Heading */}
        <h2 className="text-[24px] font-medium text-white lg:text-[28px] tracking-tight leading-tight font-primary">
          {data.heading}
        </h2>

        {/* Dynamic Sub-heading */}
        <p className="mt-4 text-[18px] text-white lg:text-[24px] font-normal font-primary">
          {data.subHeading}
        </p>

        {/* Grid Layout: Stacked on mobile and tablet, 2 cols on lg+ */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-8 2xl:mt-10 2xl:px-20">
          {data.reviews.map((item, index) => (
            <div key={index} className="flex flex-col text-left">
              
              {/* Fixed Quote Icon - Adjusted leading to prevent overlap */}
              <div className="h-12 text-[80px] leading-none text-[#f9fafa] select-none font-serif-new lg:text-[100px]">
                “
              </div>

              {/* Testimonial Text */}
              <p className="mt-2 text-[14px] leading-[1.7] text-white font-normal lg:text-[16px] font-primary">
                {item.text}
              </p>

              {/* Author Name */}
              <p className="mt-6 text-[16px] font-bold uppercase tracking-wider text-white font-primary">
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
