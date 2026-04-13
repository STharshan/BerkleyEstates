import React from 'react';
import { Link } from 'react-router-dom';
import { about } from '../Data/sectionData'; 

const AboutSection = ({ id, sectionId = "team" }) => {
  
  const data = about[id];

  if (!data) return null;

  return (
    <section id={sectionId} className="w-full bg-white px-5 py-6 md:px-8 md:py-8 lg:py-20 font-primary">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        
        <h2 className=" text-[28px]  leading-[28px] md:leading-[32px] text-[#000000] md:text-[32px] lg:text-[32px] font-medium font-primary">
          {data.title}
        </h2>

        <p className="mt-6  text-[14px] leading-[22px] md:leading-[25px] text-[#000000]  font-normal md:text-[14px] lg:text-[16px] font-primary px-0 md:px-4 lg:px-24">
          {data.description}
        </p>

        {/* Dynamic Button Logic */}
        {data.buttonText && (
          data.buttonLink?.startsWith("/") ? (
            <Link
              to={data.buttonLink || "/contact"}
              className="mt-9 inline-flex items-center justify-center border border-[#7d7d7d] py-[12px] px-[24px] text-[14px] md:text-[15px] font-medium uppercase leading-none text-black transition duration-300 hover:bg-[#001C56] hover:text-white rounded-[3px]"
            >
              {data.buttonText}
            </Link>
          ) : (
            <a
              href={data.buttonLink || "/contact"}
              className="mt-9 inline-flex items-center justify-center border border-[#7d7d7d] py-[12px] px-[24px] text-[14px] md:text-[15px] font-medium uppercase leading-none text-black transition duration-300 hover:bg-[#001C56] hover:text-white rounded-[3px]"
            >
              {data.buttonText}
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default AboutSection;