import { propertyDetailsBySlug } from "../Data/propertyDetails";
import { propertyDataStore, propertyStore } from "../Data/sectionData";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE_PATH,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  MAIN_OFFICE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "./siteMetadata";

const fallbackPropertyItems = [
  ...(propertyDataStore.SellwithUs?.items || []),
  ...(propertyStore.Home?.items || []),
];

const fallbackPropertyMap = Object.fromEntries(
  fallbackPropertyItems
    .filter((property) => property?.slug)
    .map((property) => [property.slug, property]),
);

const allPropertyRecords = Array.from(
  new Map(
    [...Object.values(propertyDetailsBySlug), ...fallbackPropertyItems]
      .filter((property) => property?.slug)
      .map((property) => [property.slug, property]),
  ).values(),
);

const staticPageSeo = {
  "/": {
    title: DEFAULT_TITLE,
    description:
      "Discover Berkley Estates, the independent estate and letting agent covering Leicester, Kibworth and Barrow Upon Soar with expert sales, lettings and property services.",
    image: "/IMG_9026.jpeg",
    keywords: [
      "independent estate agents Leicester",
      "property services Leicestershire",
      "estate and letting agents Leicester",
    ],
    pageType: "WebPage",
    label: "Home",
  },
  "/homeowners": {
    title: "Homeowners | Berkley Estates",
    description:
      "Expert homeowner support from Berkley Estates, including valuations, selling guidance, rental potential advice and personalised property solutions across Leicestershire.",
    image: "/owner.webp",
    keywords: [
      "homeowners Leicester",
      "sell your home Leicestershire",
      "property advice Leicester",
    ],
    pageType: "WebPage",
    label: "Homeowners",
  },
  "/let": {
    title: "Let With Us | Berkley Estates",
    description:
      "Let your property with Berkley Estates using fully managed and tenant find services, landlord guidance and rental expertise across Leicester and Leicestershire.",
    image: "/let.jpg",
    keywords: [
      "letting agents Leicester",
      "landlord services Leicestershire",
      "tenant find service Leicester",
    ],
    pageType: "WebPage",
    label: "Let",
  },
  "/property-management": {
    title: "Property Management | Berkley Estates",
    description:
      "Premium property management from Berkley Estates, covering tenant care, maintenance oversight, compliance and tailored support for landlords across Leicestershire.",
    image: "/hero-property-management.webp",
    keywords: [
      "property management Leicester",
      "landlord management Leicestershire",
      "rental property management",
    ],
    pageType: "WebPage",
    label: "Property Management",
  },
  "/maintenance": {
    title: "Maintenance Support | Berkley Estates",
    description:
      "Report property maintenance issues with Berkley Estates and access responsive guidance, issue tracking and support for managed properties.",
    image: "/maintenance.webp",
    keywords: [
      "property maintenance Leicester",
      "tenant maintenance reporting",
      "managed property support",
    ],
    pageType: "WebPage",
    label: "Maintenance",
  },
  "/sell-berkley-estate": {
    title: "Sell With Us | Berkley Estates",
    description:
      "Sell your home with Berkley Estates using expert local knowledge, creative marketing and a full-service approach designed to achieve exceptional results.",
    image: "/sellwithuse.webp",
    keywords: [
      "sell house Leicester",
      "estate agents Leicestershire sales",
      "property marketing Leicester",
    ],
    pageType: "WebPage",
    label: "Sell With Us",
  },
  "/sell-discreetly": {
    title: "Sell Discreetly | Berkley Estates",
    description:
      "Discover Berkley Estates' tailored off-market approach for private, high-profile or sensitive property sales handled with complete discretion.",
    image: "/sell.webp",
    keywords: [
      "off market property sales",
      "sell discreetly Leicester",
      "private property sale Leicestershire",
    ],
    pageType: "WebPage",
    label: "Sell Discreetly",
  },
  "/about": {
    title: "About Berkley Estates",
    description:
      "Meet Berkley Estates, the independent Leicestershire estate and letting agency known for expert guidance, strong local knowledge and exceptional client care.",
    image: "/aboutbanner.jpeg",
    keywords: [
      "about Berkley Estates",
      "estate agents Leicestershire team",
      "independent estate agency Leicester",
    ],
    pageType: "AboutPage",
    label: "About",
  },
  "/contact": {
    title: "Contact Berkley Estates",
    description:
      "Contact Berkley Estates in Leicester, Kibworth or Barrow Upon Soar for property sales, lettings, valuations, management and maintenance support.",
    image: "/Leicester-berkley-office--1024x768.jpg",
    keywords: [
      "contact estate agents Leicester",
      "Berkley Estates offices",
      "property advice Leicestershire",
    ],
    pageType: "ContactPage",
    label: "Contact",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Berkley Estates",
    description:
      "Read the Berkley Estates privacy policy and cookie policy to understand how personal information is collected, stored and processed.",
    image: DEFAULT_IMAGE_PATH,
    keywords: [
      "privacy policy Berkley Estates",
      "cookie policy estate agents",
    ],
    pageType: "WebPage",
    label: "Privacy Policy",
  },
  "/complaints": {
    title: "Complaints Procedure | Berkley Estates",
    description:
      "Review the Berkley Estates in-house complaints procedure, response times and Property Ombudsman escalation details.",
    image: DEFAULT_IMAGE_PATH,
    keywords: [
      "complaints procedure Berkley Estates",
      "Property Ombudsman estate agents",
    ],
    pageType: "WebPage",
    label: "Complaints Procedure",
  },
  "/terms": {
    title: "Terms and Conditions | Berkley Estates",
    description:
      "Read Berkley Estates terms and conditions, copyright details and landlord fees information.",
    image: DEFAULT_IMAGE_PATH,
    keywords: [
      "terms and conditions Berkley Estates",
      "landlord fees Berkley Estates",
    ],
    pageType: "WebPage",
    label: "Terms and Conditions",
  },
  "/valuation": {
    title: "Book a Property Valuation | Berkley Estates",
    description:
      "Book a complimentary sales or lettings valuation with Berkley Estates and speak to a local expert about your property's value.",
    image: "/sellwithuse.webp",
    keywords: [
      "property valuation Leicester",
      "house valuation Leicestershire",
      "lettings valuation Leicester",
    ],
    pageType: "WebPage",
    label: "Valuation",
  },
  "/properties": {
    title: "Properties | Berkley Estates",
    description:
      "Browse Berkley Estates properties for sale across Leicester, Leicestershire and nearby areas, with detailed listing pages and viewing information.",
    image: "/propertieshero.jpeg",
    keywords: [
      "properties for sale Leicester",
      "homes for sale Leicestershire",
      "Berkley Estates listings",
    ],
    pageType: "CollectionPage",
    label: "Properties",
  },
};

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
};

const toAbsoluteUrl = (pathOrUrl) => {
  if (!pathOrUrl) {
    return `${SITE_URL}${DEFAULT_IMAGE_PATH}`;
  }

  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
};

const cleanText = (value) => (value ? value.replace(/\s+/g, " ").trim() : "");

const trimDescription = (value, maxLength = 160) => {
  const text = cleanText(value);

  if (!text || text.length <= maxLength) {
    return text || DEFAULT_DESCRIPTION;
  }

  const shortened = text.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");

  return `${shortened.slice(0, lastSpace > 80 ? lastSpace : shortened.length).trim()}...`;
};

const dedupeKeywords = (...collections) =>
  Array.from(
    new Set(collections.flat().map((item) => cleanText(item)).filter(Boolean)),
  );

const parsePriceValue = (price) => {
  const numericValue = Number.parseInt((price || "").replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(numericValue) ? numericValue : null;
};

const buildFallbackProperty = (item) => {
  if (!item) {
    return null;
  }

  const priceMatch = item.price?.match(/^\u00a3[\d,]+/u);
  const price = priceMatch ? priceMatch[0] : item.price;
  const priceQualifier = priceMatch ? item.price.replace(priceMatch[0], "").trim() : "";
  const beds = Number.parseInt(item.beds, 10) || 0;

  return {
    id: item.slug,
    slug: item.slug,
    title: item.title,
    fullTitle: item.title,
    location: "Leicestershire",
    price,
    priceQualifier,
    status: item.status || "For Sale",
    beds,
    baths: null,
    image: item.image,
    floorPlanImage: null,
    mapUrl: null,
    summaryParagraphs: [
      `${item.title} is one of Berkley Estates' featured properties. Contact the team to arrange a viewing and receive the full brochure, floorplan and local area details.`,
    ],
    detailSections: [],
    keyFeatures: [
      item.price,
      item.beds,
      "Featured property marketed by Berkley Estates.",
    ],
    gallery: [item.image],
  };
};

const getPropertyRecord = (slug) =>
  propertyDetailsBySlug[slug] || buildFallbackProperty(fallbackPropertyMap[slug]);

const getPropertyDescription = (property) => {
  const summary = property.summaryParagraphs?.[0];

  if (summary) {
    return trimDescription(summary, 170);
  }

  const keyFeatures = property.keyFeatures?.slice(0, 3).join(" ");

  return trimDescription(
    `${property.fullTitle} is marketed by Berkley Estates in ${property.location}. ${keyFeatures || ""}`,
    170,
  );
};

const getPropertyKeywords = (property) =>
  dedupeKeywords(DEFAULT_KEYWORDS, [
    property.fullTitle,
    property.location,
    property.propertyType ? `${property.propertyType} for sale` : null,
    property.beds ? `${property.beds} bedroom property` : null,
    property.status,
    `${SITE_NAME} property`,
  ]);

const createBreadcrumbs = (pathname, currentLabel) => {
  if (pathname === "/") {
    return [{ name: "Home", path: "/" }];
  }

  if (pathname.startsWith("/property/")) {
    return [
      { name: "Home", path: "/" },
      { name: "Properties", path: "/properties" },
      { name: currentLabel, path: pathname },
    ];
  }

  return [
    { name: "Home", path: "/" },
    { name: currentLabel, path: pathname },
  ];
};

const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

const createWebPageSchema = (seo) => ({
  "@context": "https://schema.org",
  "@type": seo.pageType || "WebPage",
  "@id": `${seo.canonical}#webpage`,
  url: seo.canonical,
  name: seo.title,
  description: seo.description,
  inLanguage: "en-GB",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#organization`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: seo.image,
  },
});

const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  image: toAbsoluteUrl(DEFAULT_IMAGE_PATH),
  logo: {
    "@type": "ImageObject",
    url: toAbsoluteUrl("/logo.png"),
  },
  telephone: MAIN_OFFICE.phone,
  address: {
    "@type": "PostalAddress",
    ...MAIN_OFFICE.address,
  },
  sameAs: SOCIAL_LINKS,
  areaServed: [
    "Leicester",
    "Leicestershire",
    "Kibworth",
    "Barrow Upon Soar",
    "South Derbyshire",
  ],
});

const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-GB",
});

const createPropertySchema = (property, seo) => {
  const priceValue = parsePriceValue(property.price);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    "@id": `${seo.canonical}#property`,
    name: property.fullTitle,
    description: seo.description,
    url: seo.canonical,
    image: (property.gallery?.length ? property.gallery : [property.image])
      .filter(Boolean)
      .slice(0, 8)
      .map((image) => toAbsoluteUrl(image)),
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressCountry: "GB",
    },
  };

  if (property.beds) {
    schema.numberOfRooms = property.beds;
  }

  if (property.baths) {
    schema.numberOfBathroomsTotal = property.baths;
  }

  if (priceValue) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: priceValue,
      url: seo.canonical,
      availability:
        property.status?.toLowerCase() === "for sale"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
    };
  }

  return schema;
};

const createPropertyItemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: allPropertyRecords.map((property, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: toAbsoluteUrl(`/property/${property.slug}`),
    name: property.fullTitle || property.title,
  })),
});

const createSeoPayload = (meta, pathname, overrides = {}) => {
  const canonical = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;
  const title = cleanText(overrides.title || meta.title || DEFAULT_TITLE);
  const description = trimDescription(overrides.description || meta.description || DEFAULT_DESCRIPTION, 170);
  const image = toAbsoluteUrl(overrides.image || meta.image || DEFAULT_IMAGE_PATH);
  const keywords = dedupeKeywords(DEFAULT_KEYWORDS, meta.keywords || [], overrides.keywords || []);
  const label = overrides.label || meta.label || "Page";
  const noindex = Boolean(overrides.noindex || meta.noindex);
  const breadcrumbs = createBreadcrumbs(pathname, label);
  const schema = [
    createOrganizationSchema(),
    createWebsiteSchema(),
    createWebPageSchema({
      canonical,
      title,
      description,
      image,
      pageType: overrides.pageType || meta.pageType,
    }),
  ];

  if (breadcrumbs.length > 1) {
    schema.push(createBreadcrumbSchema(breadcrumbs));
  }

  if (overrides.property) {
    schema.push(createPropertySchema(overrides.property, { canonical, description }));
  }

  if (pathname === "/properties") {
    schema.push(createPropertyItemListSchema());
  }

  return {
    title,
    description,
    canonical,
    image,
    keywords,
    label,
    noindex,
    pageType: overrides.pageType || meta.pageType || "WebPage",
    schema,
  };
};

export const getSeoForPath = (pathname) => {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath.startsWith("/property/")) {
    const slug = normalizedPath.replace("/property/", "");
    const property = getPropertyRecord(slug);

    if (!property) {
      return createSeoPayload(
        {
          title: "404 - Property Not Found | Berkley Estates",
          description:
            "The property page you requested could not be found. Browse current Berkley Estates listings to discover available homes.",
          image: DEFAULT_IMAGE_PATH,
          pageType: "WebPage",
          label: "Property Not Found",
          noindex: true,
        },
        normalizedPath,
      );
    }

    return createSeoPayload(
      {
        title: `${property.fullTitle} | Berkley Estates`,
        description: getPropertyDescription(property),
        image: property.image || property.gallery?.[0] || DEFAULT_IMAGE_PATH,
        pageType: "WebPage",
        label: property.fullTitle,
        keywords: getPropertyKeywords(property),
      },
      normalizedPath,
      {
        property,
      },
    );
  }

  if (staticPageSeo[normalizedPath]) {
    return createSeoPayload(staticPageSeo[normalizedPath], normalizedPath);
  }

  return createSeoPayload(
    {
      title: "404 - Page Not Found | Berkley Estates",
      description:
        "The page you requested could not be found. Return to Berkley Estates to browse properties and services.",
      image: DEFAULT_IMAGE_PATH,
      pageType: "WebPage",
      label: "404",
      noindex: true,
    },
    normalizedPath,
  );
};
