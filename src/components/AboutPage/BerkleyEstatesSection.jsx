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

function AngleRightIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 256 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
    </svg>
  );
}

export default function BerkleyEstatesSection() {
  return (
    <section className="w-full bg-white py-8 md:py-14">
      <div className="mx-auto grid max-w-[1150px] grid-cols-1 gap-6 2xl:gap-12 px-4 lg:grid-cols-[1.35fr_0.95fr]">
        <div className="space-y-[5px]">
          <div className="grid grid-cols-2 gap-[5px]">
            {imagesTop.map((src, index) => (
              <div key={index} className="group relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="h-[140px] sm:h-[180px] md:h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />
              </div>
            ))}
          </div>
          <div className="group relative overflow-hidden">
            <img
              src={largeImage}
              alt=""
              className="h-[220px] sm:h-[300px] md:h-[500px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />
          </div>
          <div className="grid grid-cols-3 gap-[5px]">
            {imagesBottom.map((src, index) => (
              <div key={index} className="group relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="h-[100px] sm:h-[150px] md:h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-full max-w-full pt-0 lg:pt-20">
            <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[26px] text-black mb-6 md:mb-10 pr-0 2xl:pr-16 font-normal">
              Berkley Estates is a leading estate agency with comprehensive
              coverage across Leicestershire, offering expert sales and lettings
              services. Our top-performing sales agents are at the peak of their
              profession, consistently achieving outstanding results for our
              clients, while our highly efficient lettings team expertly manages
              a vast portfolio to an exceptional standard. With an extensive
              office network and hundreds of years of combined experience, we
              bring unrivalled knowledge, empathy, and dedication to every
              transaction. At Berkley Estates, we are driven by a passion for
              delivering results the right way—with integrity, compassion, and a
              commitment to exceeding expectations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-[15px] md:text-[18px] font-medium uppercase tracking-wide text-black transition hover:opacity-70"
            >
              <AngleRightIcon className="w-4 h-4 fill-current" />
              VISIT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}