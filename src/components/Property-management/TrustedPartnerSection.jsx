import React, { useState } from "react";

const accordionData = [
  {
    title: "Customised Care",
    content:
      "We prioritise genuine connections with our clients, taking the time to understand your unique needs and property requirements. This allows us to provide customised management solutions that ensure exceptional care and seamless oversight.",
  },
  {
    title: "Preventative care",
    content:
      "Our committed property managers carry out routine inspections, detecting and resolving potential concerns before they turn into expensive repairs. This forward-thinking strategy preserves your property’s value and charm.",
  },
  {
    title: "Reliable Partners",
    content:
      "We work with a trusted network of skilled professionals who uphold our standards of quality and dependability. Whether it’s routine upkeep or urgent repairs, our contractors make sure your property stays in excellent shape.",
  },
  {
    title: "Tenant Engagement",
    content:
      "We serve as the main point of contact for your tenants, managing everything from everyday questions to urgent issues. Our prompt and professional service builds strong tenant relationships, promoting longer stays and minimising turnover.",
  },
  {
    title: "Regulatory Assurance",
    content:
      "Property laws can be intricate and ever-changing. Our team keeps up-to-date with the latest legal updates, ensuring your property meets all regulatory requirements while keeping you informed about any changes that could affect your investment.",
  },
  {
    title: "Open and Detailed Reporting",
    content:
      "We deliver consistent, comprehensive reports on your property’s status, financial performance, and any maintenance work carried out. This transparency ensures you’re always informed and in control while freeing you from the everyday management concerns.",
  },
];


// ✅ ICON COMPONENT (PLUS / MINUS SVG)
const Icon = ({ isOpen }) => {
  return (
    <span className="flex shrink-0 items-center justify-center">
      {isOpen ? (
        // MINUS
        <svg
          viewBox="0 0 448 512"
          className="h-[13px] w-[13px] fill-black"
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      ) : (
        // PLUS
        <svg
          viewBox="0 0 448 512"
          className="h-[13px] w-[13px] fill-black"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      )}
    </span>
  );
};


const TrustedPartnerSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#efefef] px-5 py-16 md:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src="/trust.jpeg"
            alt="trust"
            className="mx-auto w-full max-w-[450px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full font-primary">

          <h3 className="mb-4 text-[22px] md:text-[26px] lg:text-[30px]">
            Your Trusted Partner
          </h3>

          <p className="mb-6 text-[14px] leading-[1.9] md:text-[15px]">
            Finding and keeping reliable tenants to preserving your property’s
            value and staying on top of legal requirements, we handle every
            aspect with precision—giving you the freedom to enjoy worry-free
            ownership.
          </p>

          {/* ACCORDION */}
          <div className="overflow-hidden border border-[#d1d1d1]">

            {accordionData.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#d1d1d1] last:border-b-0"
                >

                  {/* HEADER */}
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center gap-3 bg-[#f7f7f7] px-4 py-[15px] text-left text-[14px] md:text-[15px]"
                  >
                    <Icon isOpen={isOpen} />
                    <span>{item.title}</span>
                  </button>

                  {/* CONTENT (SMOOTH OPEN/CLOSE) */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="bg-white px-4 py-3 text-[14px] leading-[1.8]">
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