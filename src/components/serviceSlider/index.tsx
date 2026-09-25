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
    desc: "Turnkey house construction in Jaipur from planning and structure to finishing.",
    image: "/images/services/home-design.png",
  },
  {
    title: "Commercial Construction",
    desc: "Durable commercial buildings, shops, showrooms, and office spaces.",
    image: "/images/services/commercial-design.jpg",
  },
  {
    title: "Farm House Construction",
    desc: "Custom farmhouse and weekend villa construction with outdoor planning.",
    image: "/images/services/farmhouse-design.jpg",
  },
  {
    title: "Interior Design Solutions",
    desc: "Practical interiors, modular kitchens, ceilings, lighting, and renovation work.",
    image: "/images/services/interior-design.jpg",
  },
  {
    title: "Front Elevation Construction",
    desc: "Modern exterior elevation, facade, balcony, stone, and texture work.",
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
              <div className="group relative h-[370px] w-full overflow-hidden rounded-2xl bg-white shadow-md sm:h-[420px] dark:bg-white/5">
                {/* Title */}
                <div className="p-5">
                  <h3 className="text-xl leading-snug font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {s.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="relative mx-4 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-4 cursor-pointer rounded-md bg-black/60 px-3 py-1 text-base font-medium text-white">
                    <a href="#projects">See Jaipur Projects →</a>
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
