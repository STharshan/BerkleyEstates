import React from "react";

const imagesTop = [
  "/image00002-scaled-r5g2kjpj9kwe3xnexl0mg75ndfukxe3rhxqon459mo.jpeg",
  "/image00004-scaled-qz34a6pis0cu7hfo47l55jwskglklzwcylu567ck5c.jpeg",
];

const largeImage =
  "/image00009-scaled-qz3445l2a33m7e7wh6ehasg9jj110gtzd8v5t36104.jpeg";

const imagesBottom = [
  "/image00007-scaled-7hqv5oxovf7apfivv9dzzhjlc65ukp7m6blyafkfpbg.jpeg",
  "/image00001-scaled-7jigpmo1dh0wvapnwtli3kdqviigk190bllglsnvzsc.jpeg",
  "/image00005-scaled-7jigpjsn4l8zbtlu3lct4y3u664m6ijlujdp7085ass.jpeg",
];

export default function BerkleyEstatesSection() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      {/* ❌ Removed lg:grid-cols */}
      <div className="mx-auto max-w-[900px] grid grid-cols-1 gap-10 px-4">

        {/* IMAGES */}
        <div className="space-y-[5px]">

          {/* Top */}
          <div className="grid grid-cols-2 gap-[5px]">
            {imagesTop.map((src, index) => (
              <div key={index} className="group relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="h-[200px] md:h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40"></div>
              </div>
            ))}
          </div>

          {/* Middle */}
          <div className="group relative overflow-hidden">
            <img
              src={largeImage}
              alt=""
              className="h-[260px] md:h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40"></div>
          </div>

          {/* Bottom */}
          <div className="grid grid-cols-3 gap-[5px]">
            {imagesBottom.map((src, index) => (
              <div key={index} className="group relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="h-[140px] md:h-[200px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40"></div>
              </div>
            ))}
          </div>

        </div>

        {/* TEXT */}
        <div className="text-left md:text-left lg:text-left ">
          <div className="mx-auto ">

            <p className="text-[15px] md:text-[16px] leading-[26px] text-black">
              Berkley Estates is a leading estate agency with comprehensive coverage across Leicestershire, offering expert sales and lettings services. Our top-performing sales agents are at the peak of their profession, consistently achieving outstanding results for our clients, while our highly efficient lettings team expertly manages a vast portfolio to an exceptional standard. With an extensive office network and hundreds of years of combined experience, we bring unrivalled knowledge, empathy, and dedication to every transaction. At Berkley Estates, we are driven by a passion for delivering results the right way—with integrity, compassion, and a commitment to exceeding expectations.
            </p>

            {/* CTA */}
            <a
              href="/contact"
              className="mt-8 md:mt-10 inline-flex items-center justify-center gap-3 text-[16px] md:text-[18px] font-medium uppercase tracking-wide text-black transition hover:opacity-70"
            >
              <span className="text-[22px] md:text-[26px]">›</span>
              VISIT US
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}