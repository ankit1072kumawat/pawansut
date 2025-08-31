"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import brandsData from "./brandsData";

export default function Brands() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-semibold text-gray-900">
          Brands that we trust
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0, // continuous flow
            disableOnInteraction: false,
          }}
          speed={3000} // smooth speed
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="flex items-center"
        >
          {brandsData.map((brand, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={80}
                className="object-contain grayscale transition hover:grayscale-0"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

