import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const testimonials = [
  {
    text: "Berkley Estates made the rental process so easy. The team was friendly, professional, and always quick to respond to any queries. Highly recommend them!",
    author: "Sarah Thompson",
  },
  {
    text: "I’ve been renting with Berkley Estates for over a year, and they’ve been great. Any maintenance issues are dealt with quickly, and communication is always clear. Would definitely use them again!",
    author: "James Patel",
  },
  {
    text: "Berkley Estates has managed my rental property for years, and I couldn’t be happier. They find great tenants, handle everything efficiently, and keep me updated. A truly stress-free experience!",
    author: "Mark Reynolds",
  },
  {
    text: "As a landlord, I value good communication and reliability—Berkley Estates delivers on both. They take great care of my properties and always go the extra mile. Highly recommend!",
    author: "Mark Reynolds",
  }
];

const TestimonialSlider = () => {
    return (
        <section className="bg-[#041C55] text-white py-20 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-[#FFFFFF] uppercase mb-8 ">
                    Hear From Our Clients
                </h3>

                <Swiper
                    modules={[Autoplay]}
                    speed={1000}
                    loop={true}
                    dir="rtl" // This forces the "Next" direction to move Left -> Right
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        reverseDirection: false, // Set to true if you want autoplay to go against the 'dir'
                    }}
                    className="w-full overflow-visible! 
                               [&_.swiper-slide-active_.content]:opacity-100 [&_.swiper-slide-active_.content]:translate-x-0 
                               [&_.swiper-slide-next_.content]:opacity-0 [&_.swiper-slide-next_.content]:-translate-x-12
                               [&_.swiper-slide-prev_.content]:opacity-0 [&_.swiper-slide-prev_.content]:translate-x-12"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center" dir="ltr"> 
                            <div className="content transition-all duration-1000 ease-out opacity-0 flex flex-col items-center">
                                <blockquote className="text-white text-2xl md:text-3xl font-normal leading-tight max-w-4xl">
                                    "{item.text}"
                                </blockquote>
                                <cite className="text-white text-lg mb-10  not-italic block mt-8">
                                    — {item.author}
                                </cite>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSlider;