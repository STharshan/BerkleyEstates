import { propertyDetailsBySlug, propertyDetails } from "../Data/propertyDetails";
import { propertyDataStore, propertyStore } from "../Data/sectionData";

const fallbackPropertyItems = [
  ...(propertyDataStore.SellwithUs?.items || []),
  ...(propertyStore.Home?.items || []),
];

const uniquePropertyRoutes = Array.from(
  new Map(
    [...propertyDetails, ...fallbackPropertyItems]
      .filter((property) => property?.slug)
      .map((property) => [
        `/property/${property.slug}`,
        {
          path: `/property/${property.slug}`,
          label: property.fullTitle || property.title || property.slug,
        },
      ]),
  ).values(),
);

const propertyTitleLookup = Object.fromEntries(
  uniquePropertyRoutes.map((route) => [
    route.path.replace("/property/", ""),
    route.label,
  ]),
);

export const staticRouteEntries = [
  { path: "/", label: "Home" },
  { path: "/homeowners", label: "Homeowners" },
  { path: "/let", label: "Let" },
  { path: "/property-management", label: "Property Management" },
  { path: "/maintenance", label: "Maintenance" },
  { path: "/sell-berkley-estate", label: "Sell With Us" },
  { path: "/about", label: "About Berkley Estates" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/complaints", label: "Complaints Procedure" },
  { path: "/sell-discreetly", label: "Sell Discreetly" },
  { path: "/terms", label: "Terms" },
  { path: "/valuation", label: "Valuation" },
  { path: "/properties", label: "Properties" },
];

export const crawlableRouteEntries = [
  ...staticRouteEntries,
  ...uniquePropertyRoutes,
];

export const crawlableRoutes = crawlableRouteEntries.map(({ path }) => path);

const routeTitleMap = {
  "/": "Berkley Estates | Property Experts in Leicestershire",
  "/homeowners": "Homeowners | Berkley Estates",
  "/let": "Let | Berkley Estates",
  "/property-management": "Property Management | Berkley Estates",
  "/maintenance": "Maintenance | Berkley Estates",
  "/sell-berkley-estate": "Sell With Us | Berkley Estates",
  "/about": "About Berkley Estates",
  "/contact": "Contact Berkley Estates",
  "/privacy-policy": "Privacy Policy | Berkley Estates",
  "/complaints": "Complaints Procedure | Berkley Estates",
  "/sell-discreetly": "Sell Discreetly | Berkley Estates",
  "/terms": "Terms | Berkley Estates",
  "/valuation": "Property Valuation | Berkley Estates",
  "/properties": "Properties | Berkley Estates",
};

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
};

export const getRouteTitle = (pathname) => {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath.startsWith("/property/")) {
    const slug = normalizedPath.replace("/property/", "");
    const property = propertyDetailsBySlug[slug];

    if (property) {
      return `${property.fullTitle} | Berkley Estates`;
    }

    if (propertyTitleLookup[slug]) {
      return `${propertyTitleLookup[slug]} | Berkley Estates`;
    }

    return "Property Not Found | Berkley Estates";
  }

  return routeTitleMap[normalizedPath] || "404 - Page Not Found | Berkley Estates";
};
