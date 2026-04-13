import { FaQuoteLeft } from "react-icons/fa";

export default function OffMarketTestimonialSection() {
    return (
        <section className="w-full bg-[#d8d5cf] px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-32">
            {/* UPDATED: We swap the column definition. The second column (text) now gets the large fixed width. */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_600px] lg:gap-6 ">

                {/* 1. Image Container - Now gets the flexible space but is capped */}
                <div className="w-full overflow-hidden flex lg:justify-end">
                    <img
                        src="/sell1.webp"
                        alt="sell-discreetly"
                        className="h-65 w-full object-cover sm:h-85 md:h-100 "
                    />
                </div>

                <div className="flex flex-col justify-start">
                    <span className="block text-[48px] leading-none font-black text-black mb-5">
                        <FaQuoteLeft />
                    </span>

                    <blockquote className="m-0 border-0 bg-transparent p-0 not-italic text-[#3f444b]">
                        {/* UPDATED: Removed max-w-[720px] so text flows into the wide grid space */}
                        <p className="m-0 px-0 pt-2 text-[17px] text-[#3F444B]">
                            Scott was fantastic from start to finish! He secured a
                            pre-qualified buyer off-market within a week, achieving over the
                            asking price, and guided the sale to completion in under four
                            weeks. Thank you, Scott, for making the entire process so
                            seamless!
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}