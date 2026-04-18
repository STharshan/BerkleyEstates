const PropertyDescription = ({ property }) => {
  return (
    <section className="bg-white px-6">
      <div className="mx-auto max-w-[1160px] font-primary text-black">
        <div className="max-w-[950px] text-[15px] md:text-[16px]">

          {property.summaryParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {property.detailSections.map((section) => (
          <div
            key={section.heading}
            className="mt-5 max-w-[950px] space-y-6 text-[15px] md:text-[16px]"
          >

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}

        {property.keyFeatures?.length ? (
          <div className="mt-12 max-w-[950px]">
            <ul className="list-disc space-y-1 pl-10 text-[15px] leading-7 marker:text-[#0A0A0A] md:text-[16px]">
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
