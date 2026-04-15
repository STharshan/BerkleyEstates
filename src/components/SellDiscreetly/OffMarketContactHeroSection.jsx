import { Link } from "react-router-dom";

export default function OffMarketContactHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="s5.jpeg"
          alt="Off-market home selling"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 flex min-h-105 items-center justify-center px-5 py-16 sm:px-6 md:min-h-115 md:px-10 lg:min-h-124 lg:px-16 xl:px-20">
        <div className="mx-auto flex w-full max-w-275 flex-col items-center text-center">
          <h2 className="max-w-225 text-[32px] leading-tight font-normal text-white">
            Looking to sell your home off-market?
          </h2>

          <p className="mt-8 max-w-270 text-[16px] text-white ">
            Discover the benefits of a discreet and personalised selling
            experience. Let’s discuss your needs and find the perfect approach
            for your unique situation.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center border border-white px-18 py-3 text-[16px] font-normal uppercase tracking-wide text-white transition duration-300 hover:bg-white hover:text-black "
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}