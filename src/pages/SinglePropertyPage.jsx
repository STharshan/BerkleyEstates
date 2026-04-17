import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SinglePropertyHeroSection from "../components/SinglePropertyPage/SinglePropertyHeroSection";
import PropertyDescription from "../components/SinglePropertyPage/PropertyDescriptionSection";
import PropertyGallery from "../components/SinglePropertyPage/PropertyGallery";
import PropertyCTA from "../components/SinglePropertyPage/PropertyCTA";
import PropertyLightbox from "../components/SinglePropertyPage/PropertyLightbox";
import { propertyDetailsBySlug } from "../Data/propertyDetails";
import { propertyDataStore } from "../Data/sectionData";

const buildFallbackProperty = (item) => {
  if (!item) {
    return null;
  }

  const priceMatch = item.price.match(/^\u00a3[\d,]+/u);
  const price = priceMatch ? priceMatch[0] : item.price;
  const priceQualifier = priceMatch
    ? item.price.replace(priceMatch[0], "").trim()
    : "";
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
      `This preview page has been generated from the featured properties section so that the card click takes you into a dedicated property view.`,
    ],
    detailSections: [
      {
        heading: "Property Highlights",
        paragraphs: [
          `Guide price: ${item.price}.`,
          beds
            ? `Accommodation includes ${beds} bedroom${beds !== 1 ? "s" : ""} and a curated presentation by Berkley Estates.`
            : "Berkley Estates can share the full accommodation details on request.",
        ],
      },
    ],
    keyFeatures: [
      item.price,
      item.beds,
      "Featured property marketed by Berkley Estates.",
      "Contact the team for the full specification and viewing availability.",
    ],
    gallery: [item.image],
  };
};

const SinglePropertyPageContent = ({ slug }) => {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null);
  const [shareLabel, setShareLabel] = useState("Share");

  const featuredPropertyFallback = propertyDataStore.SellwithUs?.items.find(
    (item) => item.slug === slug,
  );
  const property = slug
    ? propertyDetailsBySlug[slug] || buildFallbackProperty(featuredPropertyFallback)
    : null;

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  const handleOpenGallery = (startIndex = 0) => {
    if (!property) {
      return;
    }

    setLightbox({
      images: property.gallery,
      initialIndex: startIndex,
      title: property.fullTitle,
    });
  };

  const handleOpenFloorPlan = () => {
    if (!property?.floorPlanImage) {
      return;
    }

    setLightbox({
      images: [property.floorPlanImage],
      initialIndex: 0,
      title: `${property.title} floor plan`,
    });
  };

  const handleShare = async () => {
    if (!property) {
      return;
    }

    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: property.fullTitle,
          text: property.fullTitle,
          url,
        });
        return;
      } catch {
        // Fall back to clipboard copy.
      }
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      setShareLabel("Link copied");
      window.setTimeout(() => setShareLabel("Share"), 2000);
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-white px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto max-w-[720px] border border-[#e4e8f0] bg-white p-10 text-center font-primary shadow-[0_20px_60px_-35px_rgba(0,0,0,0.25)]">
          <p className="text-[13px] uppercase tracking-[0.28em] text-[#6d7385]">
            Property not found
          </p>
          <h1 className="mt-4 text-[32px] text-[#0A0A0A] md:text-[42px]">
            We couldn't find that property page.
          </h1>
          <p className="mt-4 text-[16px] leading-7 text-[#4c566d]">
            The route may be outdated or the property data has not been added yet.
          </p>
          <Link
            to="/properties"
            className="mt-8 inline-flex items-center justify-center bg-[#001C56] px-8 py-4 text-[14px] uppercase tracking-[0.2em] text-white transition hover:bg-[#0d286d]"
          >
            Browse properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SinglePropertyHeroSection
        property={property}
        onBack={handleBack}
        onOpenFloorPlan={handleOpenFloorPlan}
        onShare={handleShare}
        shareLabel={shareLabel}
      />
      <PropertyDescription property={property} />
      <PropertyGallery property={property} onOpenGallery={handleOpenGallery} />
      <PropertyCTA />
      {lightbox ? (
        <PropertyLightbox
          images={lightbox.images}
          initialIndex={lightbox.initialIndex}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </div>
  );
};

const SinglePropertyPage = () => {
  const { slug = "" } = useParams();

  return <SinglePropertyPageContent key={slug} slug={slug} />;
};

export default SinglePropertyPage;
