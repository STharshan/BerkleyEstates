import { Link } from "react-router-dom";

const PropertyCTA = () => {
  return (
    <section className="mb-20 mt-10 bg-[#001449] px-6 py-16 sm:px-12 md:px-20 lg:px-32">
      <div className="mx-auto max-w-[1280px] font-primary">
        <div className="flex flex-col space-y-8">
          <h2 className="text-[34px] font-normal tracking-tight text-white sm:text-[40px]">
            Like this property?
          </h2>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-12">
            <Link
              to="/contact"
              className="inline-flex min-w-[230px] items-center justify-center bg-white px-10 py-3.5 text-[15px] uppercase tracking-[0.18em] text-[#001449] transition-colors duration-200 hover:bg-slate-100"
            >
              Arrange a viewing
            </Link>

            <Link
              to="/properties"
              className="inline-flex min-w-[230px] items-center justify-center border border-white px-10 py-3.5 text-[15px] uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-white/10"
            >
              View similar properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCTA;
