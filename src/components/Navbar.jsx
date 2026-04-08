import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    "HOMEOWNERS", "PROPERTY MANAGEMENT", "LET", "SELL WITH US",
    "SELL DISCREETLY", "MAINTENANCE", "CONTACT", "VALUATION",
    "ABOUT", "PROPERTIES"
  ];

  const locations = ["Leicester", "Kibworth", "Barrow Upon Soar"];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-full px-15 py-4 flex justify-between items-center fixed top-0 left-0 z-200 transition-all duration-300 ${(isScrolled || isOpen)
            ? "bg-[#041C55] backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <div className="w-32 md:w-44">
          <img
            src="logo.png"
            alt="Logo"
            className="w-full h-auto brightness-0 invert"
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:opacity-80 transition"
        >
          {isOpen ? (
            <IoCloseOutline size={45} />
          ) : (
            <IoMenuOutline size={45} />
          )}
        </button>
      </nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#041C55] text-white z-200 p-8 md:p-16 flex flex-col"
          >
            {/* CONTENT */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">

              {/* LEFT TEXT */}
              <div className="max-w-lg">
                <h2 className="text-3xl font-semibold mb-4">
                  Berkley Estates
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your trusted property experts in Leicestershire. Specialising in sales,
                  lettings, development, property management, and block management,
                  our experienced team provides a full-service approach with a commitment
                  to excellence and outstanding results.
                </p>
              </div>

              {/* RIGHT MENU */}
              <div className="ml-auto flex flex-col items-end space-y-5 text-right w-full md:w-auto">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm font-semibold tracking-[0.25em] hover:text-blue-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 mt-auto">

              {/* Locations */}
              <div className="flex items-center space-x-0 mb-6 md:mb-0 font-semibold tracking-widest">
                <FaPhoneAlt size={12} className="mr-2" />
                {locations.map((loc, i) => (
                  <span key={loc} className="flex items-center">
                    <span className="hover:underline cursor-pointer">{loc}</span>
                    {i < locations.length - 1 && (
                      <span className="mx-1 opacity-30">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex space-x-8">
                <FaFacebookF size={20} className="cursor-pointer hover:text-blue-400" />
                <FaLinkedinIn size={20} className="cursor-pointer hover:text-blue-400" />
                <FaInstagram size={20} className="cursor-pointer hover:text-blue-400" />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;