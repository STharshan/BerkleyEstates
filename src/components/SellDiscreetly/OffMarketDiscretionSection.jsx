import { Link } from "react-router-dom";

export default function OffMarketDiscretionSection() {
  return (
    <section className="w-full bg-[#041C55] px-6 py-20 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[32px] lg:leading-[1.2]">
          Off-market discretion to suit your needs
        </h2>

        <p className="mt-8 max-w-5xl text-base leading-8 text-white md:text-lg lg:text-[18px] lg:leading-[1.6]">
          From personal circumstances to those with high profiles, some of our
          clients prefer anonymity during their property dealings. Guided by the
          preferences of each individual, Berkley Estates offers a tailored and
          discreet selling or buying process.
        </p>

        <Link
          to="/contact"
          className="mt-12 inline-flex min-h-13 min-w-58 items-center justify-center rounded-sm border border-white px-6 py-2 text-base font-medium uppercase tracking-wide text-white transition duration-300 hover:bg-white hover:text-[#012169] md:min-w-[320px] md:text-[15px]"
        >
          Speak To Our Team
        </Link>
      </div>
    </section>
  );
}