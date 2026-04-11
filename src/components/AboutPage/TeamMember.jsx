import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const TeamMember = () => {
  const [flipped, setFlipped] = useState(false);

  const member = {
    name: "Scott Burrows",
    role: "Director",
    email: "scott.burrows@berkleyestates.co.uk",
    phone: "0116 254 4755",
    image: "https://berkleyestates.co.uk/wp-content/uploads/2025/03/Scott-Burrows-1024x792.webp"
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-12 px-4">

      {/* Header */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Meet our team</h2>
        <p className="text-gray-600 leading-relaxed">
          Meet the team at Berkley Estates & Letting Agents! Friendly, dedicated, and always happy to help,
          our expert local agents—born and raised in Leicestershire—offer professional, knowledgeable advice
          for all your property needs.
        </p>
      </div>

      <div className="w-full max-w-md">
        <h3 className="text-center text-xl font-bold tracking-widest text-gray-800 mb-8 uppercase">
          Directors
        </h3>

        {/* Flip Card Wrapper */}
        <div
          className="relative w-full cursor-pointer [perspective:1200px]"
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
        >
          {/* Inner flipper */}
          <div
            className={`relative w-full [aspect-ratio:1024/792] [transform-style:preserve-3d] transition-transform duration-700 ease-in-out ${
              flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
            }`}
          >

            {/* Front — Image */}
            <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Back — Contact */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0e2045] shadow-lg flex flex-col items-center justify-center gap-6 px-8">
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 text-white text-base hover:opacity-70 transition-opacity duration-200 w-fit"
              >
                <Mail size={18} className="shrink-0" />
                <span>{member.email}</span>
              </a>
              <a
                href={`tel:${member.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white text-base hover:opacity-70 transition-opacity duration-200 w-fit"
              >
                <Phone size={18} className="shrink-0" />
                <span>{member.phone}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-4 text-center">
          <p className="text-lg font-medium text-gray-900">{member.name}</p>
          <p className="text-gray-500">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;