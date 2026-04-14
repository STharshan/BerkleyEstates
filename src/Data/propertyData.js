// Mock property data
export const mockProperties = [
  {
    id: 1,
    title: "Modern Luxury Apartment",
    location: "Central London, SW1A 1AA",
    price: "£1,250,000",
    image: "https://images.unsplash.com/photo-1545496231-6e2eabda17e8?w=800&h=600&fit=crop",
    beds: 3,
    baths: 2,
    sqft: "1,850 sqft",
    department: "residential-sales",
    property_type: "apartment",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Charming Townhouse",
    location: "Kensington, London, W8 5AA",
    price: "£950,000",
    image: "https://images.unsplash.com/photo-1570129477492-45ac003cedd2?w=800&h=600&fit=crop",
    beds: 4,
    baths: 3,
    sqft: "2,500 sqft",
    department: "residential-sales",
    property_type: "townhouse",
    status: "For Sale",
  },
  {
    id: 3,
    title: "Elegant Victorian Flat",
    location: "Notting Hill, London, W11 2AQ",
    price: "£825,000",
    image: "https://images.unsplash.com/photo-1512917774080-9a485595a735?w=800&h=600&fit=crop",
    beds: 2,
    baths: 2,
    sqft: "1,200 sqft",
    department: "residential-sales",
    property_type: "flat",
    status: "For Sale",
  },
  {
    id: 4,
    title: "Contemporary Family Home",
    location: "Belgravia, London, SW1X 8QF",
    price: "£2,500,000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    beds: 5,
    baths: 4,
    sqft: "4,200 sqft",
    department: "residential-sales",
    property_type: "house",
    status: "For Sale",
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    location: "Mayfair, London, W1K 7AA",
    price: "£3,800,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    beds: 3,
    baths: 3,
    sqft: "2,800 sqft",
    department: "residential-sales",
    property_type: "apartment",
    status: "SSTC",
  },
  {
    id: 6,
    title: "Studio Apartment - Lettings",
    location: "Canary Wharf, London, E14 5AB",
    price: "£1,500 pcm",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    beds: 1,
    baths: 1,
    sqft: "600 sqft",
    department: "residential-lettings",
    property_type: "apartment",
    status: "To Let",
  },
];

// Filter properties based on search criteria
export const filterProperties = (properties, filters) => {
  return properties.filter((property) => {
    // Department filter
    if (filters.department && property.department !== filters.department) {
      return false;
    }

    // Property type filter
    if (filters.property_type && property.property_type !== filters.property_type) {
      return false;
    }

    // Bedrooms filter
    if (filters.bedrooms && property.beds !== parseInt(filters.bedrooms)) {
      return false;
    }

    // Price filter (basic - would need more complex logic for price ranges)
    if (filters.minimum_price && parseInt(filters.minimum_price) > 0) {
      const numericPrice = parseInt(property.price.replace(/[^0-9]/g, ""));
      if (numericPrice < parseInt(filters.minimum_price)) {
        return false;
      }
    }

    // Location/Keyword filter
    if (filters.address_keyword) {
      const keyword = filters.address_keyword.toLowerCase();
      if (
        !property.location.toLowerCase().includes(keyword) &&
        !property.title.toLowerCase().includes(keyword)
      ) {
        return false;
      }
    }

    return true;
  });
};
