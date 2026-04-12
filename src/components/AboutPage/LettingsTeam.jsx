import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Claire Bateman",
    email: "claire.bateman@berkleyestates.co.uk",
    phone: "01509 414 787",
    image: "/Claire-Bateman-e1746111498155-r569m6d8vqy32134ahk1q1k0b41zsa1dv2omud0p6o.webp",
  },
  {
    name: "Julie Yates",
    email: "julie.yates@berkleyestates.co.uk",
    phone: "0116 279 6161",
    image: "/Julie-Yates-e1746111671797-r569qozbq34oukiwwxui7eir2rshrwyy5fjmv8bla8.webp",
  },
  {
    name: "Daniel Newton",
    email: "daniel.newton@berkleyestates.co.uk",
    phone: "0116 254 4755",
    image: "/Daniel-Newton-r3ctn8zhhrpe59i0w9oaualwxc1b37nmk5s86yygzk.jpg",
  },
  {
    name: "Nicola Morgan",
    email: "nicola.morgan@berkleyestates.co.uk",
    phone: "01509 414 787",
    image: "/1001379592-rhp0t4jjq7vzfckhj1w08iq5t4dd6zz1of1krp2ge8.jpg",
  },
  {
    name: "Joseph Slater",
    email: "joseph.slater@berkleyestates.co.uk",
    phone: "0116 254 4755",
    image: "/430e41c3-b14e-4ecb-be7f-758e4c1a9155-r65mmwjd3l0opaaxppgbwtne363dadwoe7nk9kb4ow.jpeg",
  },
];

const FlipCard = ({ member }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full aspect-[4/3] [perspective:1200px] cursor-pointer"
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

      <p className="mt-4 text-[13px] text-center font-light text-black tracking-tight">
        {member.name}
      </p>
    </div>
  );
};

const LettingsTeam = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl font-medium tracking-widest uppercase mb-16 text-gray-800">
          Lettings
        </h2>

        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          {teamMembers.map((member, index) => (
            <FlipCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LettingsTeam;