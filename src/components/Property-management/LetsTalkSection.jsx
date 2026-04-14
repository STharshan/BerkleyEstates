

import { Link } from "react-router-dom";

const LetsTalkSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lets-talk-bg.jpeg"
          alt="Let's Talk Background"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center justify-center px-5 py-20 md:px-10 lg:min-h-[700px] ">
        <div className="flex max-w-[1100px] flex-col items-center text-center font-primary">
          <h2 className="max-w-[1100px] text-[28px] leading-[1.2] text-white md:text-[32px] lg:text-[32px] font-medium">
            Leave the details to us and reap the benefits.
          </h2>

          <p className="mt-6 max-w-[1200px] text-[16px] leading-[1.8] text-white md:text-[16px] font-normal">
            We blend proactive maintenance, tailored service, and a dedication
            to quality, ensuring your property receives the highest level of
            care at all times.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center border border-white px-[24px] py-[12px] leading-none text-[15px] font-medium uppercase tracking-[0.04em] text-white transition duration-300 hover:bg-[#001C56] hover:text-white hover:border-[#001C56] rounded-[3px]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;