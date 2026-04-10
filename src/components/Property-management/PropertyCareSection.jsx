
const PropertyCareSection = () => {
  return (
    <section className="w-full bg-white px-5 py-16 md:px-8 md:py-20 lg:py-24 font-primary">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center ">
        <h2
          className="
            max-w-[900px]
            text-[28px]
            leading-[32PX]
            text-black
            md:text-[28px]
            lg:text-[32px]
            font-normal
          "

        >
          Premium property care, so you can focus on what truly matters.
        </h2>

        <p
          className="
            mt-6
            max-w-[980px]
            text-[16px]
            leading-[25px]
            text-black
            md:text-[17px]
            lg:text-[17px]
            font-primary
          "
        >
          Managing a property is more than just maintenance—it’s about
          safeguarding your investment with care and expertise. Our personalised
          property management services take the stress off your shoulders,
          ensuring your home is well-maintained and in trusted hands. Experience
          hassle-free property ownership with our expert support.
        </p>

        <a
          href="/contact"
          className="
            mt-8
            inline-flex
            min-h-[44px]
            items-center
            justify-center
            border
            border-[#7d7d7d]
            py-[12px]
            px-[24px]
            text-[16px]
            font-medium
            uppercase
            tracking-[0.04em]
            text-black
            transition
            duration-300
            hover:bg-[#001C56]
            hover:text-white
          "
        >
          Speak To Our Team
        </a>
      </div>
    </section>
  );
};

export default PropertyCareSection;