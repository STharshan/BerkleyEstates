import React from "react";
import { Link } from "react-router-dom";
import { propertyDataStore } from "../Data/sectionData"; // Import your data

const FeaturedProperties = ({ id }) => {
  // Find the specific data using the ID, or default to Sales if not found
  const sectionData = propertyDataStore[id] ;

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 lg:px-48">
      <div className="max-w-[1400px] mx-auto">
        <h3 className="text-[16px] tracking-[2px] uppercase mb-10 text-[#0A0A0A] font-primary leading-[16px]">
          {sectionData.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {sectionData.items.map((item) => (
            <div key={item.id} className="bg-white overflow-hidden group">
              <div className="w-full aspect-[3/2] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-[#001C56] text-white text-center py-2 text-[14px] md:text-[16px] font-primary">
                {id === "Maintenance" ? "Under Care" : "For Sale"}
              </div>

              <div className="pt-4 pb-1">
                <div className="grid grid-cols-2 gap-4 items-start">
                  <p className="text-[14px] md:text-[15px] text-black font-primary font-medium hover:text-[#B62025] cursor-pointer">
                    {item.title}
                  </p>
                  <div className="text-right">
                    <p className="text-[14px] md:text-[15px] text-black font-primary">{item.price}</p>
                    <p className="text-[14px] text-black font-primary font-normal mt-1">{item.beds}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          {sectionData.buttonLink?.startsWith("/") ? (
            <Link
              to={sectionData.buttonLink}
              className="inline-flex items-center justify-center border border-black px-8 md:px-16 py-3 text-[14px] md:text-[16px] uppercase text-black font-primary tracking-[0.5px] transition-all duration-300 hover:bg-[#001C56] hover:text-white hover:border-transparent"
            >
              {sectionData.buttonText}
            </Link>
          ) : (
            <a
              href={sectionData.buttonLink}
              className="inline-flex items-center justify-center border border-black px-8 md:px-16 py-3 text-[14px] md:text-[16px] uppercase text-black font-primary tracking-[0.5px] transition-all duration-300 hover:bg-[#001C56] hover:text-white hover:border-transparent"
            >
              {sectionData.buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;