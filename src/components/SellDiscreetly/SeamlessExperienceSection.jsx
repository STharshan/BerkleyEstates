export default function SeamlessExperienceSection() {
  return (
    <section className="w-full bg-[#012169] px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          <div className="w-full overflow-hidden">
            <img
              src="/ss4.webp"
              alt="Luxury property exterior"
              className="h-65 w-full object-cover sm:h-85 md:h-105 lg:h-135 xl:h-143"
            />
          </div>

          <div className="w-full overflow-hidden lg:pt-0">
            <img
              src="s3.jpeg"
              alt="Luxury interior view"
              className="h-65 w-full object-cover sm:h-85 md:h-105 lg:h-135 xl:h-143"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-330 text-center md:mt-12 lg:mt-14">
          <h3 className="text-[15px] font-normal uppercase tracking-normal text-white ">
            A SEAMLESS EXPERIENCE
          </h3>

          <p className="mx-auto mt-5 max-w-225 text-[28px] font-semibold text-white sm:text-[32px] lg:text-[22px]">
            A tailored approach for a smooth transaction
          </p>

          <p className="mx-auto mt-10 max-w-330 text-[15px] font-normal text-white">
            At Berkley Estates, we understand that every client’s situation is
            unique. Whether you’re selling due to a life change, protecting
            your privacy, or simply seeking a quieter transaction, our team is
            committed to providing a service that aligns with your needs. With
            our extensive experience and deep market knowledge, we ensure that
            your property is handled with the utmost care and professionalism,
            delivering the results you desire while maintaining your peace of
            mind.
          </p>
        </div>
      </div>
    </section>
  );
}