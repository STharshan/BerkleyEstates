import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#002169] py-[60px] md:py-[70px]">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-[30px] px-[20px] md:px-[30px] lg:flex-row lg:items-center lg:justify-between lg:px-[60px]">

        {/* LEFT */}
        <div className="max-w-[700px]">
          <h3 className="text-[28px] md:text-[34px] lg:text-[38px] leading-[1.2] font-light tracking-[-0.01em] text-white">
            Let’s discuss your next step contact us today!
          </h3>

          <p className="mt-[18px] text-[16px] md:text-[18px] leading-[1.6] text-white">
            Whether you’re planning, deciding, or just considering your
            options, we’re here to support you every step of the way.
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex lg:justify-end">
          <Link
            to="/contact"
            className="flex h-[48px] min-w-[200px] items-center justify-center border border-white px-[24px] text-[13px] uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-[#002169]"
          >
            Get in Touch.
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;