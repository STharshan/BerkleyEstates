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
    // TODO: Replace with real autocomplete API call
    // e.g. fetch(`/api/autocomplete?q=${value}`).then(...)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Form Data:", formData);
    if (onSearch) onSearch(formData);
  };

  const selectClass =
    "w-full h-[46px] px-3 pr-7 text-[15px] font-medium font-primary bg-white border border-[#cccccc] rounded text-black appearance-none outline-none bg-no-repeat";
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundPosition: "right 8px center",
  };
  
  return (
    <div className="bg-[#EEEEEE] p-6">
      {/* Main Container: Horizontal Flexbox (Left 75% + Right 25%) */}
      <div className="flex flex-row gap-4">
        {/* LEFT SIDE: Input Grid (75% width) */}
        <div className="w-[75%] space-y-3">
          {/* Row 1: 6 Select Boxes (grid-cols-6) */}
          <div className="grid grid-cols-6 gap-4">
            {/* Department */}
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

            {/* Property Type */}
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

            {/* Availability */}
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

            {/* Minimum Price */}
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

            {/* Maximum Price */}
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

            {/* Bedrooms */}
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

          {/* Row 2: Radius + Location (Equal 50/50 Split) - grid-cols-2 */}
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Radius Box - 50% Width */}
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

            {/* Location Input - 50% Width */}
            <div className="relative">
              <input
                type="text"
                name="address_keyword"
                value={formData.address_keyword}
                onChange={handleLocationChange}
                placeholder="Type the location here"
                autoComplete="off"
                className="w-full h-[46px] pl-3 pr-10 text-[15px] font-medium font-primary bg-white border border-[#cccccc] rounded text-black placeholder:text-[#999] outline-none"
              />
              {/* Location Icon */}
              <img
                src="/current-location.png"
                alt="Location"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
              />

              {/* Autocomplete Dropdown */}
              {autocompleteResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-[#cccccc] border-t-0 rounded-b shadow-lg z-10">
                  <ul className="max-h-[200px] overflow-y-auto">
                    {autocompleteResults.map((result, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer text-[14px] font-medium font-primary text-black"
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
          </div>
        </div>

        {/* RIGHT SIDE: Filters & Search Button (25% width) - All on Same Line */}
        <div className="w-[25%] flex flex-row gap-3 items-center justify-center">
          {/* Checkboxes Group - Horizontal */}
          <div className="flex flex-row gap-4 items-center">
            {/* For Sale Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                name="on_sale_only"
                checked={formData.on_sale_only}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-[14px] font-medium font-primary text-black">For Sale</span>
            </label>

            {/* Exclude Sold Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                name="exclude_sold"
                checked={formData.exclude_sold}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-[14px] font-medium font-primary text-black">Exclude Sold</span>
            </label>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#001C56] hover:bg-[#000f39] text-white h-[46px] px-6 text-[14px] font-medium font-primary rounded transition-colors duration-200 whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchFilter;