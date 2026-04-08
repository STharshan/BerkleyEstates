import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
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
    <nav
      className={`w-full p-5 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#041C55]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="w-32 md:w-44">
        <img 
          src="/logo.png" 
          alt="Berkley Logo" 
          className="w-full h-auto brightness-0 invert" 
        />
      </div>

      {/* Hamburger Toggle */}
      <button 
        onClick={() => setIsOpen(true)}
        className="text-white hover:opacity-80 transition-opacity focus:outline-none"
      >
        <IoMenuOutline size={45} strokeWidth={1} />
      </button>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#041C55] text-white z-100 flex flex-col justify-between p-8 md:p-16"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-start">
              <div className="w-32 md:w-44">
                <img 
                  src="https://berkleyestates.co.uk/wp-content/uploads/2024/12/Screenshot_2024-12-20_151158-removebg-preview.png" 
                  alt="Berkley Logo" 
                  className="w-full h-auto brightness-0 invert"
                />
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
                <IoCloseOutline size={45} />
              </button>
            </div>

            {/* Main Navigation Links */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10">
              <div className="max-w-md mb-12 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4">Berkley Estates</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your trusted property experts in Leicestershire. Specialising in sales, 
                  lettings, development, property management, and block management.
                </p>
              </div>

              <div className="flex flex-col items-end space-y-4 w-full md:w-auto">
                {menuItems.map((item, index) => (
                  <motion.a 
                    key={item} 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.04 }}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm font-medium tracking-[0.2em] hover:text-blue-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Overlay Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8 mt-auto">
              <div className="flex items-center space-x-2 mb-6 md:mb-0 text-xs tracking-widest">
                <FaPhoneAlt size={12} className="mr-2" />
                {locations.map((loc, i) => (
                  <span key={loc} className="flex items-center">
                    <span className="hover:underline cursor-pointer">{loc}</span>
                    {i < locations.length - 1 && <span className="mx-3 opacity-30">|</span>}
                  </span>
                ))}
              </div>

              <div className="flex space-x-8">
                <FaFacebookF size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
                <FaLinkedinIn size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
                <FaInstagram size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;