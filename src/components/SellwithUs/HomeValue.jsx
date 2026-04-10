
const HomeValue = () => {
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
          Find Out Your Home’s Value
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
         Selling your property with Berkley Estates ensures you receive the highest level of service, expert local knowledge, and outstanding results. With a strong presence across Leicestershire and South Derbyshire, Berkley’s three offices and talented agents provide unparalleled expertise in the local market. Their best-in-class marketing, combined with a well-established brand and an exceptional track record, means your home will receive maximum exposure to the right buyers. Committed to achieving the best possible price, Berkley Estates offers a full-service approach that makes the selling process seamless, professional, and highly effective.
        </p>

        <a
          href="/valuation"
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
          WHAT'S THE VALUE OF MY HOME?
        </a>
      </div>
    </section>
  );
};

export default HomeValue;