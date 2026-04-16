import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronDown } from 'lucide-react';

export default function ValuationPage() {
  const [formData, setFormData] = useState({
    valuationType: "",
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTimeHours: "",
    preferredTimeMinutes: "",
    propertyAddress: "",
    source: "",
    consent: false,
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Validation checks
    if (!formData.valuationType) {
      setStatus({ type: "error", message: "Please select a valuation type." });
      return;
    }
    if (!formData.firstName.trim()) {
      setStatus({ type: "error", message: "First name is required." });
      return;
    }
    if (!formData.surname.trim()) {
      setStatus({ type: "error", message: "Surname is required." });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!validatePhone(formData.phone)) {
      setStatus({ type: "error", message: "Please enter a valid phone number (at least 10 digits)." });
      return;
    }
    if (!formData.propertyAddress.trim()) {
      setStatus({ type: "error", message: "Property address is required." });
      return;
    }
    if (!formData.preferredDate) {
      setStatus({ type: "error", message: "Please select a preferred date." });
      return;
    }
    if (!formData.consent) {
      setStatus({ type: "error", message: "Please accept the privacy policy." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_VALUATION_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_VALUATION_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(serviceId, templateId, {
        valuation_type: formData.valuationType,
        first_name: formData.firstName,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        preferred_date: formData.preferredDate,
        preferred_time: `${formData.preferredTimeHours || "00"}:${formData.preferredTimeMinutes || "00"}`,
        property_address: formData.propertyAddress,
        source: formData.source,
      }, publicKey);

      setStatus({ type: "success", message: "Valuation request sent successfully! We'll contact you soon." });
      setFormData({
        valuationType: "",
        firstName: "",
        surname: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTimeHours: "",
        preferredTimeMinutes: "",
        propertyAddress: "",
        source: "",
        consent: false,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.text || error?.message || "Unable to submit your valuation request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full font-sans text-black">
      {/* HERO SECTION */}
      <section className="w-full bg-white py-20 md:py-24 lg:py-28 px-4 md:px-8 2xl:pt-40">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[52px] md:text-[82px] leading-[1.05] font-normal tracking-tight mb-8">
            Discover your home's value
          </h1>

          <p className="max-w-4xl mx-auto text-[18px] leading-[1.55] text-black">
            Start the process with a complimentary market valuation. We’ll then
            connect you with an agent whose local market knowledge and
            experience is second to none. Book your appointment today.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="w-full bg-[#d8d5cf] py-16 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[14px] mb-10">"*" indicates required fields</p>

          {status && (
            <div
              className={`mb-6 rounded border px-4 py-3 text-sm ${status.type === "success"
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-red-500 bg-red-50 text-red-700"
                }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Valuation Type */}
            <div>
              <select
                name="valuationType"
                value={formData.valuationType}
                onChange={handleChange}
                className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none appearance-none">
                <option value="">Valuation Type</option>
                <option value="sales">Sales Valuation</option>
                <option value="lettings">Lettings Valuation</option>
              </select>
            </div>

            {/* First Name + Surname */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                required
                className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none placeholder:text-[#6b7280]"
              />
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Surname*"
                required
                className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none placeholder:text-[#6b7280]"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none placeholder:text-[#6b7280]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telephone Number*"
                required
                className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none placeholder:text-[#6b7280]"
              />
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label className="block text-[15px] font-semibold mb-2">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none placeholder:text-[#6b7280]"
                />
              </div>

              <div>
                <label className="block text-[15px] font-semibold mb-2">
                  Time (Optional)
                </label>
                <div className="grid grid-cols-2 gap-7">
                  <input
                    type="number"
                    name="preferredTimeHours"
                    value={formData.preferredTimeHours}
                    onChange={handleChange}
                    min="0"
                    max="23"
                    placeholder="HH"
                    className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none placeholder:text-[#6b7280]"
                  />
                  <input
                    type="number"
                    name="preferredTimeMinutes"
                    value={formData.preferredTimeMinutes}
                    onChange={handleChange}
                    min="0"
                    max="59"
                    placeholder="MM"
                    className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none placeholder:text-[#6b7280]"
                  />
                </div>
              </div>
            </div>

            {/* Property Address */}
            <div>
              <textarea
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                placeholder="Property Address*"
                rows={6}
                required
                className="w-full px-4 py-3 text-[15px] min-h-[140px] bg-white border-0 text-[#6b7280] outline-none resize-none placeholder:text-[#6b7280]"
              />
            </div>

            {/* Source */}
            <div className="w-full">
              <label className="block text-[15px] font-semibold mb-2">
                Please select
              </label>

              {/* Wrap the select in a relative container */}
              <div className="relative">
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full h-[40px] px-4 text-[15px] bg-white border-0 text-[#6b7280] outline-none appearance-none pr-10"
                >
                  <option value="">Where did you hear about us?*</option>
                  <option value="recommendations">Recommendations</option>
                  <option value="social">Social Media</option>
                  <option value="google">Google Search</option>
                  <option value="magazine">Magazine or Newspaper</option>
                  <option value="leaflet">Posted Leaflet</option>
                  <option value="rightmove">Rightmove or Zoopla</option>
                  <option value="board">For Sale / To Let Board</option>
                  <option value="other">Not Sure</option>
                </select>

                {/* The Arrow Icon */}
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-[#6b7280]" />
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 h-5 w-5 border-0 accent-[#001C56]"
              />
              <p className="text-[14px] leading-7 text-black">
                I have read and understand the privacy policy.
              </p>
            </label>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#001C56] text-white text-[15px] px-7 md:px-8 py-3 font-primary transition duration-300 hover:opacity-90 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}