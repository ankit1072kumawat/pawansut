"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import brandsData from "./brandsData";

export default function Brands() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          Brands that we trust
        </motion.h2>

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

