import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#002169] py-15">
      <div className="mx-auto flex max-w-6xl flex-col gap-7.5 px-5 md:px-7.5 lg:flex-row lg:items-center lg:px-15">

        {/* LEFT */}
        <div className="max-w-145">
          <h3 className="text-[24px] leading-[1.2] font-semibold tracking-[-0.01em] text-white">
            Let’s discuss your next step contact us today!
          </h3>

          <p className="mt-4.5 text-[16px] md:text-[18px] leading-[1.6] text-white">
            Whether you’re planning, deciding, or just considering your
            options, we’re here to support you every step of the way.
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex pl-15">
          <Link
            to="/contact"
            className="flex h-10 min-w-50 items-center justify-center border  border-white px-6 text-[13px] uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white hover:text-[#002169]"
          >
            Get in Touch.
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;