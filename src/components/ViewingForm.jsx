import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ViewingForm = ({ propertyTitle }) => {
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_FORM_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        e.target.reset();
        // Optional: Hide success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("Email Error:", error);
        setStatus("error");
      });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Arrange a viewing</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {/* Hidden field to include property title in the email */}
        <input type="hidden" name="property_title" value={propertyTitle} />
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
          <input 
            name="user_name" 
            required 
            type="text" 
            className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-black" 
            placeholder="Full Name" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
          <input 
            name="user_email" 
            required 
            type="email" 
            className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-black" 
            placeholder="Email Address" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Telephone Number <span className="text-red-500">*</span></label>
          <input 
            name="user_phone" 
            required 
            type="tel" 
            className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-black" 
            placeholder="Telephone Number" 
          />
        </div>

        <div className="md:col-span-2 pt-4">
          <button 
            type="submit" 
            disabled={status === "sending"}
            className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition disabled:bg-gray-400"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {/* --- MESSAGES UNDER BUTTON --- */}
          <div className="mt-4 min-h-[40px] text-center">
            {status === "success" && (
              <div className="animate-fade-in">
                <p className="text-green-600 font-bold">Request Sent!</p>
                <p className="text-sm text-gray-600">We will contact you shortly.</p>
              </div>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm font-medium">
                Something went wrong. Please check your connection and try again.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ViewingForm;