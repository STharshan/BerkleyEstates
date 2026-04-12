const ContactFormSection = () => {
  return (
    <section className="w-full bg-[#d8d5cf] py-16 md:py-20 lg:py-24 px-4 md:px-8">
      <div className="max-w-[860px] mx-auto">
        <p className="text-[14px] text-black mb-10 font-primary">
          "*" indicates required fields
        </p>

        <form className="space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />

            <input
              type="text"
              placeholder="Surname*"
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />

            <input
              type="text"
              placeholder="Telephone Number*"
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />
          </div>

          <textarea
            placeholder="Property Address*"
            rows={6}
            className="w-full min-h-[140px] bg-white px-4 py-3 text-[15px] text-[#6b7280] outline-none border-0 resize-none font-primary"
          />

          <textarea
            placeholder="How can we help you?"
            rows={6}
            className="w-full min-h-[140px] bg-white px-4 py-3 text-[15px] text-[#6b7280] outline-none border-0 resize-none font-primary"
          />

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 border-0 accent-[#001C56]"
            />
            <span className="text-[14px] text-black font-primary">
              I have read and understand the privacy policy.
            </span>
          </label>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#001C56] text-white px-7 md:px-8 py-3 text-[15px] font-primary transition duration-300 hover:opacity-90 hover:bg-white hover:text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;