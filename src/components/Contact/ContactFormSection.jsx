import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Validation checks
    if (!formData.firstName.trim()) {
      setStatus({ type: "error", message: "First name is required." });
      return;
    }
    if (!formData.lastName.trim()) {
      setStatus({ type: "error", message: "Last name is required." });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!validatePhone(formData.phone)) {
      setStatus({
        type: "error",
        message: "Please enter a valid UK phone number starting with 0 or +44.",
      });
      return;
    }
    if (!formData.propertyAddress.trim()) {
      setStatus({ type: "error", message: "Property address is required." });
      return;
    }
    if (!formData.consent) {
      setStatus({ type: "error", message: "Please accept the privacy policy." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_CONTACT_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(serviceId, templateId, {
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        property_address: formData.propertyAddress.trim(),
        message: formData.message.trim(),
      }, publicKey);

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyAddress: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.text || error?.message || "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#d8d5cf] py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="max-w-[900px] mx-auto">
        <p className="text-[16px] text-black mb-10 font-primary">
          "*" indicates required fields
        </p>

        {status && (
          <div
            className={`mb-6 rounded border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-red-500 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-7 font-medium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              required
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Surname*"
              required
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="07123 456789 or +44 7123 456789*"
              required
              inputMode="numeric"
              autoComplete="tel"
              maxLength={18}
              pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?1\d{2,4}|\(?01\d{2,4}\)?)\s?\d{3,4}\s?\d{3,4}$|^(\+44\s?2\d{2,3}|\(?02\d{2,3}\)?)\s?\d{3,4}\s?\d{4}$"
              className="w-full h-[40px] bg-white px-4 text-[15px] text-[#6b7280] outline-none border-0 font-primary"
            />
          </div>

          <textarea
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            placeholder="Property Address*"
            rows={6}
            required
            className="w-full min-h-[140px] bg-white px-4 py-3 text-[15px] text-[#6b7280] outline-none border-0 resize-none font-primary"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={6}
            className="w-full min-h-[140px] bg-white px-4 py-3 text-[15px] text-[#6b7280] outline-none border-0 resize-none font-primary"
          />

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 h-5 w-5 border-0 accent-[#001C56]"
            />
            <span className="text-[14px] text-black font-primary">
              I have read and understand the privacy policy.
            </span>
          </label>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#001C56] px-7 py-3 text-[15px] text-white font-primary transition duration-300 hover:opacity-90 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto lg:px-8"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
