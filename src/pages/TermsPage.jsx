export default function TermsPage() {
  return (
    <div className="w-full bg-white text-black font-primary">
      
      {/* ===== Header Section ===== */}
      <section className="pt-20 px-4 text-center">
        <h1 className="text-[28px] md:text-[32px] 2xl:text-[70px] font-medium text-black">
          Terms & Conditions
        </h1>
      </section>

      {/* ===== Copyright Section ===== */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:px-20">
        <h3 className="text-[28px] md:text-[25.88px] font-normal mb-4">
          Copyright and Trademarks
        </h3>

        <p className="text-black leading-relaxed text-justify text-[16px]">
          All content and design of this website is protected by copyright,
          trademarks and other intellectual property rights and is the property
          of © Berkley Estates or issued under license from third party
          copyright owners. You may print or download such material in
          electronic form on your local hard drive for your personal and
          non-commercial use. You may not alter or otherwise make any changes to
          any material that you print or download including, without limitation,
          removing any copyright or proprietary notices. All other uses are
          prohibited including, without limitation, distributing, reproducing,
          modifying, copying or using for commercial purposes any of the
          materials or contents of this site. The license to copy also does not
          permit incorporation of the content or any part of the website in any
          other work or publication in any form whatsoever.
        </p>
      </section>

      {/* ===== Our Fees Section ===== */}
      <section className="max-w-7xl mx-auto  px-4 py-10 text-left md:px-20">
        <h3 className="text-[28px] md:text-[25.88px] font-normal mb-10">
          Our Fees
        </h3>

        <div className="flex justify-left">
          <img
            src="/LANDLORD-GUIDE-TO-FEES-791x1024.png"
            alt="Landlord Guide to Fees"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow"
          />
        </div>
      </section>

      
    </div>
  );
}