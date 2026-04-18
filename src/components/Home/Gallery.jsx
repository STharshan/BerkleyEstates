import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  "s1.webp", "s2.webp", "s3.webp", "s4.webp", "s5.webp",
  "s6.webp", "s7.webp", "s8.webp", "s9.webp", "s10.webp",
  "s12.webp", "s13.webp"
];

const GallerySection = () => {
  return (
    <section className="w-full bg-[#D8D6D0] py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h4 className="text-2xl font-normal leading-[1.2] text-black">
            Unforgettable Abodes
          </h4>
          <p className="mx-auto mt-5 text-sm leading-[1.4] text-black">
            Curated selection of homes that have left a lasting impression. Each residence tells a story of thoughtful design, meticulous details, and timeless appeal. Sold, yet still shaping the vision for what’s to come.
          </p>
        </div>

        {/* Outer Wrapper */}
        <div className="relative mx-auto w-full group">
          
          {/* Navigation Arrows */}
          <button className="abodes-prev absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white/90 hover:text-white transition-all">
            <ChevronLeft className="h-8 w-8 md:h-12 md:w-12" strokeWidth={1.5} />
          </button>

          <button className="abodes-next absolute right-4 top-1/2 z-30 -translate-y-1/2 text-white/90 hover:text-white transition-all">
            <ChevronRight className="h-8 w-8 md:h-12 md:w-12" strokeWidth={1.5} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".abodes-prev",
              nextEl: ".abodes-next",
            }}
            pagination={{
              clickable: true,
              el: ".abodes-pagination",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            className="w-full h-100 overflow-hidden rounded-sm"
          >
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM PAGINATION - Placed at the bottom center of the image area */}
          <div className="abodes-pagination absolute bottom-4 left-0 right-0 z-40 flex justify-center items-center gap-1" />
        </div>
      </div>

      <style>{`
        .abodes-pagination {
          line-height: 0;
        }

        .abodes-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: #000000 !important;
          opacity: 1.6;
          margin: 0 4px !important;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .abodes-pagination .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background: #ffffff !important;
          transform: scale(1.2);
        }

        /* Ensure dots stay visible on top of images */
        .swiper-pagination-lock {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;