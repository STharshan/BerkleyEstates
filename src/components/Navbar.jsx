import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

// FIX: create motion version of Link
const MotionLink = motion(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "HOMEOWNERS",
    "PROPERTY MANAGEMENT",
    "LET",
    "SELL WITH US",
    "SELL DISCREETLY",
    "MAINTENANCE",
    "CONTACT",
    "VALUATION",
    "ABOUT",
    "PROPERTIES",
  ];

  const locations = [
    { name: "Leicester", phone: "01162544755" },
    { name: "Kibworth", phone: "01162796161" },
    { name: "Barrow Upon Soar", phone: "01509414787" },
  ];

  return (
    <nav
      className={`w-full px-4 md:px-8 py-4 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#041C55]/90 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <div className="w-28 sm:w-32 md:w-40">
        <img
          src="/logo.png"
          alt="Berkley Logo"
          className="w-full h-auto brightness-0 invert"
        />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:opacity-80 transition"
      >
        {isOpen ? (
          <IoCloseOutline size={36} />
        ) : (
          <IoMenuOutline size={36} />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] md:top-[80px] left-0 w-full  bg-[#041C55] text-white z-40 px-4 sm:px-6 md:px-16 py-6 flex flex-col overflow-y-auto"
          >
            {/* CONTENT */}
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              {/* LEFT TEXT */}
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Berkley Estates
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Your trusted property experts in Leicestershire. Specialising in sales, lettings, development, property management, and block management, our experienced team provides a full-service approach with a commitment to excellence and outstanding results.
                </p>
              </div>

              {/* RIGHT MENU */}
              <div className="flex flex-col items-start lg:items-end space-y-4 w-full">
                {menuItems.map((item, index) => (
                  <MotionLink
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] hover:text-blue-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </MotionLink>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-16 pb-10 gap-6">
              {/* Locations */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm font-semibold tracking-widest">
                <FaPhoneAlt size={12} className="mr-2" />

                {locations.map((loc, i) => (
                  <span key={loc.name} className="flex items-center">

                    {/* Clickable Location (Phone Link) */}
                    <a
                      href={`tel:${loc.phone}`}
                      className=" cursor-pointer"
                    >
                      {loc.name}
                    </a>

                    {/* Divider */}
                    {i < locations.length - 1 && (
                      <span className="mx-2 opacity-30">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/berkleyestates"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
                </a>

                <a
                  href="https://www.linkedin.com/company/berkleyestates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition" />
                </a>

                <a
                  href="https://www.instagram.com/berkleyestates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer hover:text-blue-400 transition" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;