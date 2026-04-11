import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Jake Brogden",
    email: "jake.brogden@berkleyestates.co.uk",
    phone: "07463 757896",
    image: "https://berkleyestates.co.uk/wp-content/uploads/elementor/thumbs/Jake-Brogden-r2w5no4e45exzwe32y6iwk8psreflxi789ud2j0h6w.webp",
    ratio: "aspect-[4/5]",
  },
  {
    name: "Sam Nealon",
    email: "sam.nealon@berkleyestates.co.uk",
    phone: "0116 279 6161",
    image: "https://berkleyestates.co.uk/wp-content/uploads/elementor/thumbs/Sam-Nealon-r2w5pe5qitv9c5lb7h5lrfsa8x4cornwgp3kombbeo.webp",
    ratio: "aspect-[5/3.5]",
  },
  {
    name: "Nicole Parker",
    email: "nicole.parker@berkleyestates.co.uk",
    phone: "0116 254 4755",
    image: "https://berkleyestates.co.uk/wp-content/uploads/elementor/thumbs/36c7bd9e-e825-4467-9171-2e78ac0d3439-r65mmunopwy422do0on2ru4gwecmuzp7pyclb0dx1c.jpeg",
    ratio: "aspect-[5/3.5]",
  },
  {
    name: "Beth Shaw",
    email: "beth.shaw@berkleyestates.co.uk",
    phone: "07597 113853",
    image: "https://berkleyestates.co.uk/wp-content/uploads/elementor/thumbs/Beth-r2w5ok2wkimoyn3nwbzu9c6dzv0wvn12oo0vdxp3bc.webp",
    ratio: "aspect-[4/5]",
  },
];

const FlipCard = ({ member, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flex flex-col items-center ${
        index % 2 === 0 ? "md:items-end" : "md:items-start"
      }`}
    >
      <div
        className={`w-full max-w-md ${member.ratio} relative [perspective:1200px] cursor-pointer`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out ${
            flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>

          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0e2045] flex flex-col items-center justify-center gap-5 px-6">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-3 text-white text-sm hover:opacity-70 transition-opacity duration-200"
            >
              <Mail size={15} className="shrink-0" />
              <span>{member.email}</span>
            </a>
            <a
              href={`tel:${member.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-white text-sm hover:opacity-70 transition-opacity duration-200"
            >
              <Phone size={15} className="shrink-0" />
              <span>{member.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[13px] text-center w-full font-light text-black tracking-tight">
        {member.name}
      </p>
    </div>
  );
};

const SalesTeam = () => {
  return (
    <section className="bg-[#D1D1CB] min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-medium tracking-widest uppercase mb-16 text-gray-800">
          Sales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {teamMembers.map((member, index) => (
            <FlipCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesTeam;