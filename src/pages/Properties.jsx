import { useState } from "react";
import { Link } from "react-router-dom";
import PropertySearchFilter from "../components/Property/PropertySearchFilter";
import PropertiesHero from "../components/Property/PropertiesHero";
import HeroSection from "../Common/Hero";
import { mockProperties, filterProperties } from "../Data/propertyData";

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (filters) => {
    setIsSearching(true);
    const results = filterProperties(mockProperties, filters);
    setFilteredProperties(results);
  };

  return (
    <div className="w-full bg-white">
      <HeroSection
        title="Find your next property with Berkley Estates"
        bgImage="/propertieshero.jpeg"
      />

      <PropertiesHero />

      <PropertySearchFilter onSearch={handleSearch} />

      <section className="w-full bg-white py-5">
        <div className="max-w-350 mx-auto">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 p-10 md:p-14">
              {filteredProperties.map((property) => (
                <Link
                  key={property.id}
                  to={`/property/${property.slug}`}
                  className="block bg-white overflow-hidden group"
                >
                  <div className="w-full aspect-3/2 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.fullTitle}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="bg-[#001C56] text-white text-center py-1 text-[14px] md:text-[16px] font-primary">
                    {property.status || "For Sale"}
                  </div>

                  <div className="pt-4 pb-1">
                    <div className="grid grid-cols-2 gap-4 items-start">
                      <div>
                        <p className="text-[14px] md:text-[15px] text-black font-primary font-medium transition-colors duration-300 group-hover:text-[#B62025]">
                          {property.title}
                        </p>
                        <p className="mt-1 text-[13px] text-[#5b6475] font-primary">
                          {property.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[14px] md:text-[15px] text-black font-primary">
                          {property.priceLabel}
                        </p>
                        <p className="text-[14px] text-black font-primary font-normal mt-1">
                          {property.beds} Bed{property.beds !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[16px] text-[#6b7280]">
                {isSearching
                  ? "No properties found matching your criteria."
                  : "No properties available right now."}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
