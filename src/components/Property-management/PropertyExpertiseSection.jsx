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
    <section className="w-full bg-[#D8D6D0] py-16 px-6 md:px-10 lg:px-32 xl:px-56 lg:py-24">
      {/* items-start makes sure both columns start at the exact same top line */}
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 md:grid-cols-2 items-start gap-10 lg:gap-16">
        
        {/* LEFT CONTENT */}
        <div className="font-primary order-2 md:order-1">
          {/* leading-none and mt-0 ensure no ghost spacing at the top */}
          <h3 className="text-[16px] uppercase tracking-[0.05em] text-[#333333] font-medium leading-[16px] m-0">
            Handling your property with expertise and care
          </h3>

          <p className="mt-6 text-[18px] leading-[28px] text-black md:text-[19px] lg:text-[20px] font-normal">
            Choosing Berkley Estates means collaborating with a team that
            prioritises design, trust, and outstanding service. We’re committed
            to surpassing your expectations and maximising the value of your
            investment.
          </p>

          <ul className="mt-8 space-y-5 text-[14px] md:text-[16px] leading-relaxed text-black">
            {propertyPoints.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                <p>
                  <span className="font-bold text-black">{item.title}</span>{" "}
                  <span className="font-normal">{item.text}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full order-1 md:order-2">
          {/* block and m-0 ensure the image starts exactly where the container starts */}
          <img
            src="/property-door.jpeg"
            alt="Property entrance"
            className="w-full h-auto object-cover block m-0 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyExpertiseSection;