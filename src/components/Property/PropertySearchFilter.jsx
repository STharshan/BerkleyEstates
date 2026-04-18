import { useState } from "react";

const PropertySearchFilter = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    department: "residential-sales",
    property_type: "",
    availability: "",
    minimum_price: "",
    maximum_price: "",
    bedrooms: "",
    radius: "",
    address_keyword: "",
    on_sale_only: false,
    exclude_sold: false,
  });

  const [autocompleteResults, setAutocompleteResults] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, address_keyword: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(formData);
  };

  const selectClass =
    "w-full h-[46px] px-3 pr-7 text-[15px] font-medium font-primary bg-white border border-[#cccccc] rounded text-black appearance-none outline-none bg-no-repeat";
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundPosition: "right 8px center",
  };

  return (
    <div className="bg-[#EEEEEE] p-4 md:p-6">
      {/* Main Container: Vertically stacked on mobile, Horizontal on Large screens */}
      <div className="flex flex-col lg:flex-row gap-4">
        
        {/* LEFT SIDE: Inputs (Takes 100% on mobile, 75% on Desktop) */}
        <div className="w-full lg:w-[75%] space-y-3">
          
          {/* Row 1: 1 col on mobile, 6 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
            <select name="department" value={formData.department} onChange={handleChange} className={selectClass} style={selectStyle}>
              <option value="residential-sales">Residential Sales</option>
              <option value="residential-lettings">Residential Lettings</option>
              <option value="commercial">Commercial</option>
            </select>

            <select name="property_type" value={formData.property_type} onChange={handleChange} className={selectClass} style={selectStyle}>
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>

            <select name="availability" value={formData.availability} onChange={handleChange} className={selectClass} style={selectStyle}>
              <option value="">Availability</option>
              <option value="83">For Sale</option>
            </select>

            <select name="minimum_price" value={formData.minimum_price} onChange={handleChange} className={selectClass} style={selectStyle}>
              <option value="">Minimum Price</option>
            </select>

            <select name="maximum_price" value={formData.maximum_price} onChange={handleChange} className={selectClass} style={selectStyle}>
              <option value="">Maximum Price</option>
            </select>

            <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} className={selectClass} style={selectStyle}>
              <option value="">Bedrooms</option>
            </select>
          </div>

          {/* Row 2: Radius + Location (Stack on mobile, 50/50 on large) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 items-center">
            <select name="radius" value={formData.radius} onChange={handleChange} className={selectClass} style={selectStyle}>
              <option value="">Radius</option>
              <option value="5">Within 5 Miles</option>
            </select>

            <div className="relative">
              <input
                type="text"
                name="address_keyword"
                value={formData.address_keyword}
                onChange={handleLocationChange}
                placeholder="Type the location here"
                autoComplete="off"
                className="w-full h-[46px] pl-3 pr-10 text-[15px] font-medium border border-[#cccccc] rounded text-black outline-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 pointer-events-none">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Filters & Button (Stack on mobile, Side-by-side on large) */}
        <div className="w-full lg:w-[25%] flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 items-center justify-between">
          <div className="flex flex-row gap-6 lg:gap-4 items-center w-full justify-start md:justify-center lg:justify-start">
            <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <input type="checkbox" name="on_sale_only" checked={formData.on_sale_only} onChange={handleChange} className="w-4 h-4" />
              <span className="text-[14px] font-medium text-black">For Sale</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <input type="checkbox" name="exclude_sold" checked={formData.exclude_sold} onChange={handleChange} className="w-4 h-4" />
              <span className="text-[14px] font-medium text-black">Exclude Sold</span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full lg:w-auto bg-[#001C56] hover:bg-[#000f39] text-white mt-10 md:mt-0 h-[46px] px-8 text-[14px] font-medium rounded transition-all"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchFilter;