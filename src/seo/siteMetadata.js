export const SITE_NAME = "Berkley Estates";
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://berkleyestates.co.uk").replace(/\/$/, "");
export const SITE_LANGUAGE = "en-GB";
export const SITE_LOCALE = "en_GB";
export const THEME_COLOR = "#001C56";

export const DEFAULT_TITLE = "Berkley Estates | Estate & Letting Agents in Leicester and Leicestershire";
export const DEFAULT_DESCRIPTION =
  "Berkley Estates is an independent estate and letting agent serving Leicester, Kibworth and Barrow Upon Soar with sales, lettings, valuations, property management and maintenance support.";
export const DEFAULT_IMAGE_PATH = "/IMG_9026.jpeg";

export const DEFAULT_KEYWORDS = [
  "Berkley Estates",
  "estate agents Leicester",
  "letting agents Leicestershire",
  "property valuation Leicester",
  "property management Leicestershire",
  "homes for sale Leicester",
];

export const SOCIAL_LINKS = [
  "https://www.facebook.com/berkleyestates",
  "https://www.linkedin.com/company/berkleyestates/",
  "https://www.instagram.com/berkleyestates/",
];

export const MAIN_OFFICE = {
  name: "Berkley Estates Leicester Office",
  phone: "0116 254 4755",
  address: {
    streetAddress: "75 Hinckley Road",
    addressLocality: "Leicester",
    addressRegion: "Leicestershire",
    postalCode: "LE3 0TD",
    addressCountry: "GB",
  },
};
