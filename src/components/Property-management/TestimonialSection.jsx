import React from "react";

const testimonials = [
  {
    text: "As an overseas landlord, Daniel Newton’s excellent communication and management give me real peace of mind. He keeps me informed and ensures my property is well looked after. Highly recommend his professional and reliable service!",
    author: "Mr Thandi",
  },
  {
    text: "Managing a large portfolio requires trust, and Scott consistently delivers. His proactive approach, clear communication, and attention to detail ensure everything runs smoothly. Highly recommend his expertise and reliability!",
    author: "Mr Mehta",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full bg-[#001C56] px-6 py-20 md:px-12 lg:py-24">
      <div className="mx-auto max-w-[1100px] text-center">
        
        {/* Heading */}
        <h2 className="text-[28px] font-medium text-white md:text-[36px] tracking-tight">
          What Our Clients Are Saying
        </h2>

        <p className="mt-4 text-[18px] text-white md:text-[24px] font-normal">
          Our customers' words speak louder than ours.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {testimonials.map((item, index) => (
            <div key={index} className="text-left">
              
              {/* Stylized Quote Icon */}
              <div 
                className="text-[120px] leading-[0.1] text-white select-none font-serif"
                
              >
                “
              </div>

              {/* Testimonial Body */}
              <p className="mt-4 text-[16px] leading-[1.8] text-white font-normal md:text-[18px] ">
                {item.text}
              </p>

              {/* Author Name */}
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