import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";

const BedIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 503.607 503.607"
    className="h-[20px] w-[20px] shrink-0"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M503.178,276.984c-4.381-67.97-61.054-125.902-125.474-125.902H226.623v125.902H75.541V58.754H0v386.098h75.541v-92.328h352.525v92.328h75.541V293.77v-8.393v-8.393H503.178z M243.41,276.984V167.869h134.295c55.514,0,104.515,50.084,108.813,109.115H243.41z" />
    <path d="M151.082,260.197c32.399,0,58.754-26.364,58.754-58.754c0-32.39-26.355-58.754-58.754-58.754s-58.754,26.364-58.754,58.754C92.328,233.833,118.683,260.197,151.082,260.197z" />
  </svg>
);

const BathIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 512 512"
    className="h-[20px] w-[20px] shrink-0"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M33.391,333.913v27.826c0,46.529,27.337,86.791,66.79,105.581c0,0.053-0.008,0.105-0.008,0.158v27.826c0,9.223,7.473,16.696,16.696,16.696c9.223,0,16.696-7.473,16.696-16.696v-17.893c5.455,0.784,11.027,1.198,16.696,1.198h211.478c5.669,0,11.241-0.414,16.696-1.198v17.893c0,9.223,7.473,16.696,16.696,16.696s16.696-7.473,16.696-16.696v-27.826c0-0.053-0.008-0.105-0.008-0.158c39.453-18.79,66.79-59.052,66.79-105.581v-27.826H33.391z" />
    <path d="M478.609,233.739V83.478C478.609,37.446,441.163,0,395.13,0c-40.815,0-74.857,29.447-82.054,68.207c-38.761,7.197-68.207,41.238-68.207,82.054c0,9.223,7.473,16.696,16.696,16.696H395.13c9.223,0,16.696-7.473,16.696-16.696c0-39.549-27.649-72.735-64.628-81.306c6.24-20.558,25.362-35.564,47.932-35.564c27.619,0,50.087,22.468,50.087,50.087v150.261H33.391C14.949,233.739,0,248.688,0,267.13s14.949,33.391,33.391,33.391h445.217c18.442,0,33.391-14.949,33.391-33.391S497.051,233.739,478.609,233.739z" />
  </svg>
);

const SinglePropertyHeroSection = ({
  property,
  onBack,
  onOpenFloorPlan,
  onShare,
  shareLabel,
}) => {
  return (
    <section className="bg-white px-6 pb-10 pt-[108px] md:px-10 lg:px-12">
      <div className="mx-auto max-w-[1140px] font-primary text-[#000000]">
        <button
          type="button"
          onClick={onBack}
          className="mb-10 inline-flex items-center gap-3 text-[15px] leading-none text-[#000000] transition hover:text-[#001C56]"
        >
          <ArrowLeft size={17} strokeWidth={1.9} />
          Back to Home Page
        </button>

        <div className="grid grid-cols-1 gap-y-10 md:gap-y-12 lg:grid-cols-[37.5%_1fr] lg:gap-x-[15px]">
          <div className="order-2 lg:order-1">
            <div className="space-y-4 lg:pt-4">
              <p className="text-left text-[30px] leading-[1.04] text-[#000000] md:text-[34px]">
                {property.title}
              </p>

              <div className="flex flex-wrap items-end gap-2.5 text-left md:gap-3">
                <h1 className="text-[40px] leading-none text-[#0A0A0A] md:text-[58px]">
                  {property.price}
                </h1>
                {property.priceQualifier ? (
                  <p className="pb-[3px] text-[18px] leading-none text-[#0A0A0A] md:pb-[5px] md:text-[24px]">
                    {property.priceQualifier}
                  </p>
                ) : null}
              </div>

              <div className="pt-2 space-y-5">
                <div className="flex items-center gap-3 text-[#0A0A0A]">
                  <BedIcon />
                  <span className="text-[18px] md:text-[20px]">
                    {property.beds} Bedroom{property.beds !== 1 ? "s" : ""}
                  </span>
                </div>

                {property.baths ? (
                  <div className="flex items-center gap-3 text-[#0A0A0A]">
                    <BathIcon />
                    <span className="text-[18px] md:text-[20px]">
                      {property.baths} Bathroom{property.baths !== 1 ? "s" : ""}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col items-start gap-6 pt-4 text-left">
                {property.floorPlanImage ? (
                  <button
                    type="button"
                    onClick={onOpenFloorPlan}
                    className="p-0 text-[15px] text-[#000000] underline underline-offset-[3px] transition hover:text-[#001C56]"
                  >
                    Floor Plan
                  </button>
                ) : null}

                {property.mapUrl ? (
                  <a
                  href={property.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15px] text-[#000000] underline underline-offset-[3px] transition hover:text-[#001C56]"
                >
                  View Map
                </a>
                ) : null}
              </div>

              <div className="pt-5">
                <p className="text-[26px] font-medium leading-none text-[#0A0A0A] md:text-[30px]">
                  Like what you see?
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex min-w-[184px] items-center justify-center bg-[#001C56] px-7 py-[12px] text-[15px] font-normal text-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] transition hover:bg-[#0d286d]"
                  >
                    Arrange a viewing
                  </Link>

                  <button
                    type="button"
                    onClick={onShare}
                    className="inline-flex min-w-[136px] items-center justify-center gap-2.5 border border-[#000000] px-7 py-[12px] text-[15px] font-normal text-[#0A0A0A] transition hover:border-[#001C56] hover:text-[#001C56]"
                  >
                    <span>{shareLabel}</span>
                    <Send size={15} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 self-start lg:order-2">
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 z-10 bg-[#001C56] px-5 py-[7px] text-[13px] uppercase text-white">
                {property.status}
              </div>

              <img
                src={property.image}
                alt={property.fullTitle}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePropertyHeroSection;
