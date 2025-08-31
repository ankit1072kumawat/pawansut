"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    title: "Home Construction",
    image: "/images/services/home-design.png",
  },
  {
    title: "Commercial Construction",
    image: "/images/services/commercial-design.jpg",
  },
  {
    title: "Farm house Construction",
    image: "/images/services/farmhouse-design.jpg",
  },
  {
    title: "Interior design Solutions",
    image: "/images/services/interior-design.jpg",
  },
  {
    title: "Front elevation construction",
    image: "/images/services/elevation-design.jpg",
  },
];

export default function ServicesSlider() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our services" paragraph="" center />

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 2500, // 2.5s delay
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // pauses on hover
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="group relative h-[420px] w-full overflow-hidden rounded-2xl bg-white shadow-md dark:bg-white/5">
                {/* Title */}
                <div className="p-5">
                  <h3 className="text-xl leading-snug font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="relative mx-4 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-4 rounded-md bg-black/60 px-3 py-1 text-base font-medium text-white cursor-pointer">
                    Such Projects →
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
