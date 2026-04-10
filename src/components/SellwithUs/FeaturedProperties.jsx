const properties = [
  {
    image: "/p1.jpg",
    title: "The Moor",
    price: "£1,400,000 Price Guide",
    beds: "6 Bedrooms",
  },
  {
    image: "/p2.jpg",
    title: "Cotes Road",
    price: "£1,300,000 Price Guide",
    beds: "6 Bedrooms",
  },
  {
    image: "/p3.jpg",
    title: "Workhouse Lane",
    price: "£900,000 Price Guide",
    beds: "5 Bedrooms",
  },
  {
    image: "/p4.jpg",
    title: "Manor View Close",
    price: "£895,000",
    beds: "4 Bedrooms",
  },
  {
    image: "/p5.jpg",
    title: "Iris Close",
    price: "£895,000",
    beds: "4 Bedrooms",
  },
  {
    image: "/p6.jpg",
    title: "Ticknall Road",
    price: "£875,000 Guide Price",
    beds: "4 Bedrooms",
  },
  {
    image: "/p7.jpg",
    title: "Mill Street",
    price: "£850,000 Price Guide",
    beds: "4 Bedrooms",
  },
  {
    image: "/p8.jpg",
    title: "Potter Street",
    price: "£680,000",
    beds: "5 Bedrooms",
  },
  {
    image: "/p9.jpg",
    title: "Hinckley Road",
    price: "£550,000",
    beds: "4 Bedrooms",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 lg:px-48">
      <div className="max-w-[1400px] mx-auto">
        <h3 className="text-[14px] tracking-[2px] uppercase mb-10 text-black font-primary">
          Featured Properties
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {properties.map((item, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <div className="w-full aspect-[3/2] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#001C56] text-white text-center py-2 text-[14px] md:text-[16px] font-primary">
                For Sale
              </div>

              <div className="pt-2 pb-1">
                <div className="grid grid-cols-2 gap-4 items-start">
                  <div>
                    <p className="text-[14px] md:text-[15px] text-black font-primary leading-[1.4]">
                      {item.title}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[14px] md:text-[15px] text-black font-primary leading-[1.4]">
                      {item.price}
                    </p>
                    <p className="text-[14px] md:text-[15px] text-black font-primary leading-[1.4] mt-1">
                      {item.beds}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="/sell"
            className="inline-flex items-center justify-center border border-black px-8 md:px-16 py-4 text-[14px] md:text-[16px] uppercase text-black font-primary tracking-[0.5px] transition duration-300  hover:bg-[#001C56] hover:text-white"
          >
            Thinking Of Selling Your Home?
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;