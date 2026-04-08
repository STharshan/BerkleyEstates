import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0c2d5c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ===== TOP ROW ===== */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* LEFT - LOGO */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <img
              src="logo.png"
              alt="logo"
              className="w-[180px]"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-5">

            {/* Locations */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 text-xl font-semibold">
              <a href="tel:01162544755" className="hover:underline">
                Leicester
              </a>
              <span className="opacity-50">|</span>
              <a href="tel:01162796161" className="hover:underline">
                Kibworth
              </a>
              <span className="opacity-50">|</span>
              <a href="tel:01509414787" className="hover:underline">
                Barrow Upon Soar
              </a>
            </div>

            {/* Button */}
            <a
              href="/valuation"
              className="text-sm  transition"
            >
              Request a valuation
            </a>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl mt-5">
              <a href="#" className="hover:opacity-70">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:opacity-70">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:opacity-70">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-start gap-3 text-sm">

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <span className="opacity-50">|</span>
              <a href="/terms" className="hover:underline">
                Terms and Conditions
              </a>
              <span className="opacity-50">|</span>
              <a href="/complaints" className="hover:underline">
                Complaints Procedure
              </a>
            </div>

            {/* Copyright */}
            <p className="opacity-80">© 2025 Berkley Estates</p>
          </div>

          {/* RIGHT SIDE LOGOS */}
          <div className="flex items-center justify-center lg:justify-end gap-16 flex-wrap">
            <img
              src="/f1.png"
              alt="rightmove"
              className="h-15 object-contain"
            />
            <img
              src="/f2.png"
              alt="tpo"
              className="h-15 object-contain"
            />
            <img
              src="/f3.png"
              alt="tsi"
              className="h-17 object-contain"
            />
          </div>
        </div>

        {/* ===== BOTTOM TEXT ===== */}
        <div className="mt-12 text-center text-sm">
          Partnered with{" "}
          <a
            href="https://www.ansely.co.uk/"
            className="text-orange-400 hover:underline"
          >
            Ansely
          </a>
        </div>
      </div>
    </footer>
  );
}