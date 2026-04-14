import { useState } from "react";
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
      
      {/* Hero Section */}
      <PropertiesHero />

      {/* Property Search Section */}
      <PropertySearchFilter onSearch={handleSearch} />

      {/* Properties Grid Section */}
      <section className="w-full bg-white py-20 px-6 md:px-10 lg:px-48">
        <div className="max-w-[1400px] mx-auto">
          {/* Results Header */}
          <h3 className="text-[16px] tracking-[2px] uppercase mb-10 text-[#0A0A0A] font-primary leading-[16px]">
            {isSearching ? "Search Results" : "Featured Properties"}
          </h3>

          <p className="text-[14px] text-[#6b7280] mb-12">
            {filteredProperties.length === 0
              ? "No properties match your search criteria. Try adjusting your filters."
              : `Showing ${filteredProperties.length} result${
                  filteredProperties.length !== 1 ? "s" : ""
                }`}
          </p>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white overflow-hidden group">
                  <div className="w-full aspect-[3/2] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="bg-[#001C56] text-white text-center py-2 text-[14px] md:text-[16px] font-primary">
                    {property.status || "For Sale"}
                  </div>

                  <div className="pt-4 pb-1">
                    <div className="grid grid-cols-2 gap-4 items-start">
                      <p className="text-[14px] md:text-[15px] text-black font-primary font-medium hover:text-[#B62025] cursor-pointer">
                        {property.title}
                      </p>
                      <div className="text-right">
                        <p className="text-[14px] md:text-[15px] text-black font-primary">
                          {property.price}
                        </p>
                        <p className="text-[14px] text-black font-primary font-normal mt-1">
                          {property.beds} Bed{property.beds !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[16px] text-[#6b7280]">
                No properties found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
