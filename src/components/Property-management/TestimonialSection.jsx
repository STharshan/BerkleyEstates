import React from "react";

const testimonials = [
  {
    text: `As an overseas landlord, Daniel Newton’s excellent communication and management give me real peace of mind. He keeps me informed and ensures my property is well looked after. Highly recommend his professional and reliable service!`,
    author: "Mr Thandi",
  },
  {
    text: `Managing a large portfolio requires trust, and Scott consistently delivers. His proactive approach, clear communication, and attention to detail ensure everything runs smoothly. Highly recommend his expertise and reliability!`,
    author: "Mr Mehta",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full bg-[#08285e] px-5 py-20 md:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px] text-center font-primary">

        {/* Heading */}
        <h3 className="text-[26px] text-white md:text-[32px] lg:text-[36px]">
          What Our Clients Are Saying
        </h3>

        <p className="mt-4 text-[18px] text-white/90 md:text-[20px]">
          Our customers words speak louder than ours.
        </p>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">

          {testimonials.map((item, index) => (
            <div key={index} className="text-left text-white">

              {/* Quote Icon */}
              <div className="text-[60px] leading-none opacity-80">“</div>

              {/* Text */}
              <p className="mt-6 text-[16px] leading-[1.9] md:text-[17px]">
                {item.text}
              </p>

              {/* Author */}
              <p className="mt-6 font-semibold text-[16px]">
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