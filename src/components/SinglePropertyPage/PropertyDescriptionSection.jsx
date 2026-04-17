const PropertyDescription = ({ property }) => {
  return (
    <section className="bg-white px-6 py-14 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1160px] font-primary text-[#2b3344]">
        <div className="max-w-[950px] space-y-6 text-[15px] leading-8 md:text-[16px]">
          <h2 className="text-[28px] font-normal leading-none text-[#0A0A0A] md:text-[34px]">
            Property Summary
          </h2>

          {property.summaryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {property.detailSections.map((section) => (
          <div
            key={section.heading}
            className="mt-12 max-w-[950px] space-y-6 text-[15px] leading-8 md:text-[16px]"
          >
            <h3 className="text-[28px] font-normal leading-tight text-[#0A0A0A] md:text-[34px]">
              {section.heading}
            </h3>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}

        {property.keyFeatures?.length ? (
          <div className="mt-12 max-w-[950px]">
            <ul className="list-disc space-y-3 pl-6 text-[15px] leading-7 marker:text-[#0A0A0A] md:text-[16px]">
              {property.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PropertyDescription;
