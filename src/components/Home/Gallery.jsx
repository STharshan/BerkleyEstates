import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
];

const GallerySection = () => {
  return (
    <section className="w-full bg-[#efede8] py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-[1300px] text-center">
          <h4 className="text-[28px] font-normal leading-[1.2] text-black md:text-[40px]">
            Unforgettable Abodes
          </h4>

          <p className="mx-auto mt-5 max-w-[1380px] text-[16px] leading-[1.7] text-black md:text-[20px]">
            Curated selection of homes that have left a lasting impression.
            Each residence tells a story of thoughtful design, meticulous
            details, and timeless appeal. Sold, yet still shaping the vision
            for what’s to come.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1520px]">
          <button className="abodes-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white md:left-6">
            <ChevronLeft className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2.5} />
          </button>

          <button className="abodes-next absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white md:right-6">
            <ChevronRight className="h-10 w-10 md:h-12 md:w-12" strokeWidth={2.5} />
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={500}
            className="abodes-swiper"
          >
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={`Abode ${index + 1}`}
                    className="block h-[320px] w-full object-cover md:h-[520px] lg:h-[650px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="abodes-pagination mt-6 flex items-center justify-center gap-2" />
        </div>
      </div>

      <style>{`
        .abodes-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #000;
          opacity: 1;
          margin: 0 6px !important;
        }

        .abodes-pagination .swiper-pagination-bullet-active {
          background: #d9d9d9;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;