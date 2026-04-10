

const propertyPoints = [
  {
    title: "Thorough Property Inspections:",
    text: "Routine assessments to keep your property in top shape",
  },
  {
    title: "Maintenance Oversight:",
    text: "Managing repairs and upkeep to ensure minimal tenant disruption",
  },
  {
    title: "Financial Oversight:",
    text: "Rent collection, deposit management, and transparent financial reporting.",
  },
  {
    title: "Tenant Screening and Placement:",
    text: "Ensuring quality tenants through a detailed vetting process.",
  },
  {
    title: "Legal Compliance:",
    text: "Preparation and management of all tenancy agreements and essential legal documents.",
  },
];

const PropertyExpertiseSection = () => {
  return (
    <section className="w-full bg-[#D8D6D0] px-5 py-16 md:px-56 lg:py-24">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        
        {/* LEFT CONTENT */}
        <div className="font-primary lg:pt-16">
          <h3 className="text-[18px] uppercase tracking-[0.02em] text-[#333333] md:text-[16px]">
            Handling your property with expertise and care
          </h3>

          <p className="mt-8 max-w-[760px] text-[18px] leading-[1.65] text-black md:text-[20px] md:leading-[1.55]">
            Choosing Berkley Estates means collaborating with a team that
            prioritises design, trust, and outstanding service. We’re committed
            to surpassing your expectations and maximising the value of your
            investment.
          </p>

          <ul className="mt-10 space-y-4 pl-7 text-[16px] leading-[1.7] text-black md:text-[18px]">
            {propertyPoints.map((item, index) => (
              <li key={index} className="list-disc">
                <span className="font-semibold">{item.title}</span>{" "}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/property-door.jpeg"
            alt="Property entrance"
            className="mx-auto h-full w-full max-w-[700px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyExpertiseSection;