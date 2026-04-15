const locations = [
  {
    image: "/Kibworth-1024x768.jpg",
    title: "Kibworth Office",
    address: ["44 High Street", "Kibworth", "Leicester", "LE8 0HQ"],
    phone: "0116 279 6161",
  },
  {
    image: "/Leicester-berkley-office--1024x768.jpg",
    title: "Leicester Office",
    address: ["75 Hinckley Road", "West End", "Leicester", "LE3 0TD"],
    phone: "0116 254 4755",
  },
  {
    image: "/Untitled-design-4-1024x768.png",
    title: "Barrow Upon Soar Office",
    address: ["4 High Street", "Barrow Upon Soar", "Leicestershire", "LE12 8PY"],
    phone: "01509 414787",
  },
];

const DiscoverLocations = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-20 px-4 md:px-8 lg:px-32">
      <div className="max-w-[1520px] mx-auto">
        <div className=" mb-10">
          <h2 className="text-[25px] md:text-[25px] font-primary text-[#0A0A0A] mb-4 text-center font-medium">
            Discover our locations
          </h2>
          <p className="max-w-[1350px] text-left mx-auto text-[15px] md:text-[16px] leading-[1.8] text-black font-primary">
            Each Berkley Estates office serves as a hub for real estate innovation.
            We’re at our happiest when building authentic relationships with clients;
            if you’d like to chat with our dedicated team of experts, do drop by and
            say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12">
          {locations.map((office, index) => (
            <div key={index}>
              <div className="w-full overflow-hidden">
                <img
                  src={office.image}
                  alt={office.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <div className="pt-5 text-black font-primary">
                <h3 className="text-[14px] md:text-[14px] mb-4">{office.title}</h3>

                <div className="space-y-1 text-[14px] md:text-[14px] leading-[1.55]">
                  {office.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <p className="mt-5 text-[14px] md:text-[14px]">
                  <span className="font-bold">T: </span>
                  {office.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverLocations;