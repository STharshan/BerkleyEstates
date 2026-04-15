import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Phone } from 'lucide-react';

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

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

const FlipCard = ({ member }) => {
  const [flipped, setFlipped] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center font-primary">
      <div
        className={`relative w-full aspect-[4/3] [perspective:1200px] ${!isMobile ? 'cursor-pointer' : ''}`}
        onMouseEnter={() => !isMobile && setFlipped(true)}
        onMouseLeave={() => !isMobile && setFlipped(false)}
      >
        <div
          className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out ${
            !isMobile && flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>

          {/* Back - Desktop only */}
          {!isMobile && (
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#001C56] flex flex-col items-center justify-center gap-5 px-6">
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 text-white text-[16px] hover:opacity-70 transition-opacity duration-200"
              >
                <FontAwesomeIcon icon={faEnvelope} size="sm" className="shrink-0 text-white" />
                <span>{member.email}</span>
              </a>
              <a
                href={`tel:${member.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white text-[16px] hover:opacity-70 transition-opacity duration-200"
              >
                <Phone size={15} className="shrink-0 text-white" />
                <span>{member.phone}</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <p className="mt-4 text-[16px] text-center font-normal text-black tracking-tight">
        {member.name}
      </p>

      {/* Mobile: always show email + phone below name */}
      {isMobile && (
        <div className="mt-2 flex flex-col items-center gap-2">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 text-[14px] text-black"
          >
            <FontAwesomeIcon icon={faEnvelope} size="sm" className="shrink-0" />
            <span>{member.email}</span>
          </a>
          <a
            href={`tel:${member.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-[14px] text-black"
          >
            <Phone size={14} className="shrink-0" />
            <span>{member.phone}</span>
          </a>
        </div>
      )}
    </div>
  );
};

const LettingsTeam = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-[20px] font-medium tracking-widest uppercase mb-16 text-black">
          Lettings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 gap-y-12">
          {teamMembers.map((member, index) => (
            <FlipCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LettingsTeam;