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
    // TODO: Add autocomplete logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Form Data:", formData);
    if (onSearch) onSearch(formData);
  };

  const selectClass =
    "w-full h-[46px] px-3 pr-7 text-[15px] bg-white border border-[#cccccc] rounded text-[#333333] appearance-none outline-none bg-no-repeat";
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundPosition: "right 8px center",
  };

  return (
    <div className="bg-[#e8e8e8] p-4 rounded py-16">
      {/* Row 1: 6 dropdowns */}
      <div className="flex gap-2 mb-2">
        {/* Department */}
        <div className="flex-[1.2] min-w-0">
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={selectClass}
            style={selectStyle}
          >
            <option value="residential-sales">Residential Sales</option>
            <option value="residential-lettings">Residential Lettings</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Property Type */}
        <div className="flex-1 min-w-0">
          <select
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
            className={selectClass}
            style={selectStyle}
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="bungalow">Bungalow</option>
            <option value="cottage">Cottage</option>
            <option value="detached">Detached</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
            <option value="maisonette">Maisonette</option>
            <option value="terraced">Terraced House</option>
            <option value="townhouse">Townhouse</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        {/* Availability */}
        <div className="flex-1 min-w-0">
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className={selectClass}
            style={selectStyle}
          >
            <option value="">Availability</option>
            <option value="83">For Sale</option>
            <option value="129">For Sale By Auction</option>
            <option value="138">Guide Price</option>
            <option value="132">Just on Market</option>
            <option value="134">Keen to Sell</option>
            <option value="131">New Instruction</option>
            <option value="135">No Chain</option>
            <option value="137">Offers in the region of</option>
            <option value="133">Price Reduction</option>
            <option value="130">Reserved</option>
            <option value="86">Sold</option>
            <option value="85">Sold STC</option>
            <option value="128">SSTC</option>
            <option value="84">Under Offer</option>
          </select>
        </div>

        {/* Minimum Price */}
        <div className="flex-1 min-w-0">
          <select
            name="minimum_price"
            value={formData.minimum_price}
            onChange={handleChange}
            className={selectClass}
            style={selectStyle}
          >
            <option value="">Minimum Price</option>
            <option value="100000">£100,000</option>
            <option value="150000">£150,000</option>
            <option value="200000">£200,000</option>
            <option value="250000">£250,000</option>
            <option value="300000">£300,000</option>
            <option value="500000">£500,000</option>
            <option value="750000">£750,000</option>
            <option value="1000000">£1,000,000</option>
          </select>
        </div>

        {/* Maximum Price */}
        <div className="flex-1 min-w-0">
          <select
            name="maximum_price"
            value={formData.maximum_price}
            onChange={handleChange}
            className={selectClass}
            style={selectStyle}
          >
            <option value="">Maximum Price</option>
            <option value="100000">£100,000</option>
            <option value="150000">£150,000</option>
            <option value="200000">£200,000</option>
            <option value="250000">£250,000</option>
            <option value="300000">£300,000</option>
            <option value="500000">£500,000</option>
            <option value="750000">£750,000</option>
            <option value="1000000">£1,000,000</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className="flex-1 min-w-0">
          <select
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className={selectClass}
            style={selectStyle}
          >
            <option value="">Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>

      {/* Row 2: Radius + Location + Checkboxes + Search */}
      <div className="flex gap-2 items-center">
        {/* Radius */}
        <div className="flex-[1.2] min-w-0">
          <select
            name="radius"
            value={formData.radius}
            onChange={handleChange}
            className={selectClass}
            style={selectStyle}
          >
            <option value="">Radius</option>
            <option value="1">Within 1 Mile</option>
            <option value="2">Within 2 Miles</option>
            <option value="3">Within 3 Miles</option>
            <option value="5">Within 5 Miles</option>
            <option value="10">Within 10 Miles</option>
            <option value="15">Within 15 Miles</option>
            <option value="20">Within 20 Miles</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex-[2] min-w-0 relative">
          <input
            type="text"
            name="address_keyword"
            value={formData.address_keyword}
            onChange={handleLocationChange}
            placeholder="Type the location here"
            autoComplete="off"
            className="w-full h-[46px] pl-3 pr-9 text-[15px] bg-white border border-[#cccccc] rounded text-[#333333] placeholder:text-[#999] outline-none"
          />
          {/* Plus/target icon on the right */}
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          {autocompleteResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-[#cccccc] border-t-0 rounded-b shadow-lg z-10">
              <ul className="max-h-[200px] overflow-y-auto">
                {autocompleteResults.map((result, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-[#f3f4f6] cursor-pointer text-[13px]"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, address_keyword: result }));
                      setAutocompleteResults([]);
                    }}
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Checkboxes */}
        <label className="flex items-center gap-1.5 cursor-pointer whitespace-nowrap flex-shrink-0">
          <input
            type="checkbox"
            name="on_sale_only"
            checked={formData.on_sale_only}
            onChange={handleChange}
            className="w-[14px] h-[14px]"
          />
          <span className="text-[15px] text-[#333]">For Sale</span>
        </label>

        <label className="flex items-center gap-1.5 cursor-pointer whitespace-nowrap flex-shrink-0">
          <input
            type="checkbox"
            name="exclude_sold"
            checked={formData.exclude_sold}
            onChange={handleChange}
            className="w-[15px] h-[15px]"
          />
          <span className="text-[15px] text-[#333]">Exclude Sold</span>
        </label>

        {/* Search Button */}
        <button
          onClick={handleSubmit}
          className="flex-shrink-0 bg-[#1a2e6c] hover:bg-[#142358] text-white h-[46px] px-8 text-[15px] font-semibold rounded transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearchFilter;