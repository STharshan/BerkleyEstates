import { propertyDetails } from "./propertyDetails";

export const mockProperties = propertyDetails.map((property) => ({
  id: property.id,
  slug: property.slug,
  title: property.title,
  fullTitle: property.fullTitle,
  location: property.location,
  price: property.price,
  priceLabel: property.priceQualifier
    ? `${property.price} ${property.priceQualifier}`
    : property.price,
  priceValue: Number.parseInt(`${property.price}`.replace(/[^0-9]/g, ""), 10),
  image: property.image,
  beds: property.beds,
  baths: property.baths,
  department: property.department,
  property_type: property.propertyType,
  status: property.status,
}));

const availabilityMap = {
  83: "For Sale",
  84: "Under Offer",
  85: "SSTC",
  86: "Sold",
  128: "SSTC",
  130: "Reserved",
};

export const filterProperties = (properties, filters) => {
  return properties.filter((property) => {
    if (filters.department && property.department !== filters.department) {
      return false;
    }

    if (filters.property_type && property.property_type !== filters.property_type) {
      return false;
    }

    if (filters.availability) {
      const selectedAvailability = availabilityMap[filters.availability];

      if (selectedAvailability && property.status !== selectedAvailability) {
        return false;
      }
    }

    if (filters.bedrooms) {
      const bedroomCount = Number.parseInt(filters.bedrooms, 10);

      if (bedroomCount >= 5) {
        if (property.beds < bedroomCount) {
          return false;
        }
      } else if (property.beds !== bedroomCount) {
        return false;
      }
    }

    if (filters.minimum_price && Number.parseInt(filters.minimum_price, 10) > 0) {
      if (property.priceValue < Number.parseInt(filters.minimum_price, 10)) {
        return false;
      }
    }

    if (filters.maximum_price && Number.parseInt(filters.maximum_price, 10) > 0) {
      if (property.priceValue > Number.parseInt(filters.maximum_price, 10)) {
        return false;
      }
    }

    if (filters.address_keyword) {
      const keyword = filters.address_keyword.toLowerCase();
      if (
        !property.location.toLowerCase().includes(keyword) &&
        !property.fullTitle.toLowerCase().includes(keyword) &&
        !property.title.toLowerCase().includes(keyword)
      ) {
        return false;
      }
    }

    if (filters.on_sale_only && property.status !== "For Sale") {
      return false;
    }

    if (filters.exclude_sold) {
      const hiddenStatuses = ["sold", "sstc", "sold stc", "reserved", "under offer"];
      if (hiddenStatuses.includes(property.status.toLowerCase())) {
        return false;
      }
    }

    return true;
  });
};
