import React, { useState } from "react";

const ContactPropertyManagementSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const maxLength = 180;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <section className="w-full bg-white px-5 py-16 md:px-8 lg:px-80 lg:py-24 font-primary">
      <div className="mx-auto max-w-[1150px] font-primary">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="text-[28px] leading-[1.15] text-[#333333] md:text-[32px] lg:text-[32px] font-primary">
            Let’s talk about how we can meet your property management needs.
          </h2>

          <p className="mx-auto mt-8 max-w-[1100px] text-[18px] leading-[1.7] text-black md:text-[18px]">
            Discover the talented agents, creatives, and operational specialists
            behind the Berkley Estates team.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-[1128px] space-y-10"
        >
          <div>
            <label className="mb-2 block text-[14px] font-semibold text-black">
              First Name <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-[50px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[14px] font-semibold text-black">
              Last Name <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-[50px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[14px] font-semibold text-black">
              Your Email Address <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-[50px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[14px] font-semibold text-black">
              Mobile Phone <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-[50px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-4">
              <label className="block text-[14px] font-semibold text-black">
                How can we help?
              </label>
              <span className="text-[15px] text-black">
                {formData.message.length} / {maxLength}
              </span>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={maxLength}
              rows={6}
              className="min-h-[175px] w-full resize-none border border-[#c8b2b2] bg-transparent px-4 py-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 h-6 w-6 shrink-0 border border-[#8f8f8f] accent-[#24364b]"
            />

            <p className="text-[16px] leading-[1.6] text-black">
              Please confirm that it is okay for us to contact you about this
              information as well as products and services. (You will always be
              given the right to unsubscribe at any point in the future)
            </p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex min-h-[50px] min-w-[126px] items-center justify-center border border-[#24364b] px-10 py-3 text-[16px] font-medium text-[#0a2a67] transition hover:bg-[#0a2a67] hover:text-white"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPropertyManagementSection;