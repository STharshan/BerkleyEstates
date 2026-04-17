import { Link } from "react-router-dom";
import { ArrowLeft, Bath, BedDouble, FileText, MapPin, Share2 } from "lucide-react";

const SinglePropertyHeroSection = ({
  property,
  onBack,
  onOpenFloorPlan,
  onShare,
  shareLabel,
}) => {
  return (
    <section className="bg-white px-6 pb-10 pt-28 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px] font-primary">
        <button
          type="button"
          onClick={onBack}
          className="mb-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[#6e7380] transition hover:text-[#001C56]"
        >
          <ArrowLeft size={16} />
          Back to Home Page
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-6 lg:pt-10">
            <p className="text-[30px] leading-none text-[#4f5664] md:text-[38px]">
              {property.title}
            </p>

            <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-end md:gap-5">
              <h1 className="text-[46px] leading-none text-[#0A0A0A] md:text-[70px]">
                {property.price}
              </h1>
              {property.priceQualifier ? (
                <p className="pb-[6px] text-[20px] text-[#384152] md:text-[30px]">
                  {property.priceQualifier}
                </p>
              ) : null}
            </div>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-4 text-[#0A0A0A]">
                <BedDouble size={28} strokeWidth={1.6} />
                <span className="text-[22px] md:text-[24px]">
                  {property.beds} Bedroom{property.beds !== 1 ? "s" : ""}
                </span>
              </div>

              {property.baths ? (
                <div className="flex items-center gap-4 text-[#0A0A0A]">
                  <Bath size={28} strokeWidth={1.6} />
                  <span className="text-[22px] md:text-[24px]">
                    {property.baths} Bathroom{property.baths !== 1 ? "s" : ""}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 text-[18px] text-[#4a5367]">
              {property.floorPlanImage ? (
                <button
                  type="button"
                  onClick={onOpenFloorPlan}
                  className="inline-flex items-center gap-3 transition hover:text-[#001C56]"
                >
                  <FileText size={18} />
                  Floor Plan
                </button>
              ) : null}

              {property.mapUrl ? (
                <a
                  href={property.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition hover:text-[#001C56]"
                >
                  <MapPin size={18} />
                  View Map
                </a>
              ) : null}
            </div>

            <div className="pt-14">
              <p className="text-[32px] leading-tight text-[#0A0A0A] md:text-[40px]">
                Like what you see?
              </p>

              <div className="mt-7 flex flex-wrap gap-5">
                <Link
                  to="/contact"
                  className="inline-flex min-w-[230px] items-center justify-center bg-[#001C56] px-8 py-[15px] text-[13px] uppercase tracking-[0.22em] text-white transition hover:bg-[#0d286d]"
                >
                  Arrange a viewing
                </Link>

                <button
                  type="button"
                  onClick={onShare}
                  className="inline-flex min-w-[190px] items-center justify-center gap-3 border border-[#cfd5e2] px-8 py-[15px] text-[13px] uppercase tracking-[0.22em] text-[#0A0A0A] transition hover:border-[#001C56] hover:text-[#001C56]"
                >
                  <Share2 size={18} />
                  {shareLabel}
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 self-start lg:order-2 lg:col-span-6">
            <div className="relative overflow-hidden border border-[#edf0f4] bg-[#eff2f6]">
              <div className="absolute left-0 top-0 z-10 bg-[#001C56] px-6 py-2.5 text-[11px] uppercase tracking-[0.24em] text-white">
                {property.status}
              </div>

              <img
                src={property.image}
                alt={property.fullTitle}
                className="aspect-[5/4] w-full object-cover lg:aspect-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePropertyHeroSection;
