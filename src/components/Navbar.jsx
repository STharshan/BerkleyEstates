import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { crawlableRouteEntries } from "../config/crawlableRoutes";


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
      className={`w-full px-4 md:px-8 py-4 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled || isOpen
          ? "bg-[#001C56]"
          : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <Link to="/" className="w-28 sm:w-32 md:w-40">
        <img
          src="/logo.png"
          alt="Berkley Logo"
          loading="lazy"
          className="w-full h-auto brightness-0 invert"
        />
      </Link>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white transition"
      >
        {isOpen ? (
          <IoCloseOutline size={40} />
        ) : (
          <IoMenuOutline size={40} />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-18 md:top-20 left-0 w-full  bg-[#001C56] text-white z-40 px-4 sm:px-6 md:px-10 py-6 flex flex-col overflow-y-auto"
        >
          {/* CONTENT */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* LEFT TEXT */}
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl mb-2">
                Berkley Estates
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Your trusted property experts in Leicestershire. Specialising in sales, lettings, development, property management, and block management, our experienced team provides a full-service approach with a commitment to excellence and outstanding results.
              </p>
            </div>

            {/* RIGHT MENU */}
            {/* RIGHT MENU */}
            <div className="flex flex-col items-start md:items-end space-y-4 w-full">
              {menuItems.map((item, index) => {
                // Determine the route
                const route = item === "SELL WITH US"
                  ? "/sell-berkley-estate"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

                return (
                  <div
                    key={item}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={route}
                      className="text-sm lg:text-base hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 pb-5 gap-6">
            {/* Locations */}
            <div className="flex flex-wrap items-center text-xs sm:text-base">
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
                    <span className="mx-2 ">|</span>
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
                <FaFacebookF className="cursor-pointer text-3xl" />
              </a>

              <a
                href="https://www.linkedin.com/company/berkleyestates/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="cursor-pointer  text-3xl" />
              </a>

              <a
                href="https://www.instagram.com/berkleyestates/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer  text-3xl" />
              </a>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: "none" }} aria-hidden="true">
        {crawlableRouteEntries.map((route) => (
          <a key={route.path} href={route.path}>
            {route.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
