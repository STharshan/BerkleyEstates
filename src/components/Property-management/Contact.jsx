import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPropertyManagementSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const maxLength = 180;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.startsWith("44")) {
      return digitsOnly.length === 12;
    }

    if (digitsOnly.startsWith("0")) {
      return digitsOnly.length === 11;
    }

    return false;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      const sanitizedValue = value.replace(/[^\d\s()+-]/g, "");
      setFormData((prev) => ({
        ...prev,
        phone: sanitizedValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.firstName.trim()) {
      setStatus({ type: "error", message: "First name is required." });
      return;
    }

    if (!formData.lastName.trim()) {
      setStatus({ type: "error", message: "Last name is required." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      setStatus({
        type: "error",
        message:
          "Please enter a valid UK phone number starting with 0 or +44.",
      });
      return;
    }

    if (!formData.consent) {
      setStatus({
        type: "error",
        message: "Please confirm that we can contact you.",
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_EMAILJS_PROPERTY_MANAGEMENT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PROPERTY_MANAGEMENT_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white px-5 py-16 md:px-8 lg:px-12 lg:py-24 xl:px-80 font-primary">
      <div className="mx-auto max-w-[1150px] font-primary">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="text-[28px] leading-[1.15] text-[#333333] md:text-[32px] lg:text-[32px] font-primary">
            Let’s talk about how we can meet your property management needs.
          </h2>

          <p className="mx-auto mt-6 max-w-[1100px] text-[14px] leading-[1.7] text-black md:text-[16px]">
            Discover the talented agents, creatives, and operational specialists
            behind the Berkley Estates team.
          </p>
        </div>

        {status && (
          <div
            className={`mx-auto mt-10 max-w-[1128px] rounded border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-red-500 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-[1128px] space-y-8"
        >
          <div>
            <label className="mb-2 block text-[12px] font-semibold text-black">
              First Name <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-[40px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-black">
              Last Name <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-[40px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-black">
              Your Email Address <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-[45px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-black">
              Mobile Phone <span className="text-[#c85b68]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              inputMode="numeric"
              autoComplete="tel"
              placeholder=" 07123 456789 or +44 7123 456789"
              maxLength={18}
              pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?1\d{2,4}|\(?01\d{2,4}\)?)\s?\d{3,4}\s?\d{3,4}$|^(\+44\s?2\d{2,3}|\(?02\d{2,3}\)?)\s?\d{3,4}\s?\d{4}$"
              className="h-[45px] w-full border border-[#c8b2b2] bg-transparent px-4 text-[16px] outline-none transition focus:border-[#24364b]"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-4">
              <label className="block text-[12px] font-semibold text-black">
                How can we help?
              </label>
              <span className="text-[12px] text-black">
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

            <p className="text-[14px] leading-[1.6] text-black">
              Please confirm that it is okay for us to contact you about this
              information as well as products and services. (You will always be
              given the right to unsubscribe at any point in the future)
            </p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-[40px] w-full items-center justify-center border border-[#24364b] px-8 py-2 text-[14px] font-medium text-[#0a2a67] transition hover:bg-[#041c55] hover:text-white lg:min-w-[40px] lg:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPropertyManagementSection;
