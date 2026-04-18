import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import ViewingForm from "../ViewingForm";

const PropertyCTA = () => {
  // State to handle the full-screen overlay
  const [showViewingForm, setShowViewingForm] = useState(false);

  // Prevent background scrolling when overlay is active
  useEffect(() => {
    if (showViewingForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showViewingForm]);

  return (
    <section className="mb-20 mt-10 bg-[#001449] py-16 px-6 md:px-19 relative">

      {/* --- VIDEO STYLE OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out flex flex-col items-center justify-center px-6 ${showViewingForm ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowViewingForm(false)}
          className="absolute top-10 right-10 p-2 text-black transition-transform duration-300"
        >
          <X size={35} strokeWidth={1} />
        </button>

        {/* Form Container with Slide-up Animation */}
        <div className={`w-full max-w-4xl transform transition-all duration-700 delay-100 ${showViewingForm ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <ViewingForm />
        </div>
      </div>

      {/* --- MAIN CTA CONTENT --- */}
      <div className="mx-auto max-w-7xl font-primary">
        <div className="flex flex-col items-center space-y-6 sm:items-start">
          <h2 className="text-[25px] font-normal tracking-tight text-white text-center sm:text-left">
            Like this property?
          </h2>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10 lg:gap-32">
            {/* Click triggers the overlay instead of navigation */}
            <button
              onClick={() => setShowViewingForm(true)}
              className="inline-flex items-center justify-center bg-white border border-white hover:text-white hover:bg-[#001449] px-5 rounded-sm py-2.5 text-[15px] text-black transition-colors duration-200"
            >
              Arrange a viewing
            </button>

            <Link
              to="/properties"
              className="inline-flex items-center justify-center border rounded-sm hover:bg-white hover:text-black bg-[#001449] border-white px-5 py-2.5 text-[15px] text-white transition-all duration-200"
            >
              View similar properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCTA;