"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Home Construction",
    desc: "Complete house construction services in Jaipur including planning, structural execution, and premium finishing with strict quality control.",
    points: [
      "Turnkey Construction",
      "RCC & Structural Work",
      "Premium Finishing",
      "On-Time Delivery",
    ],
    image: "/images/services/home-design.png",
  },
  {
    title: "Commercial Construction",
    desc: "Modern commercial buildings and office spaces built with compliance, durability, and efficient planning.",
    points: [
      "Office Buildings",
      "Retail Shops",
      "Showrooms",
      "Warehouses",
    ],
    image: "/images/services/commercial-design.jpg",
  },
  {
    title: "Farm House Construction",
    desc: "Luxury farmhouse construction in Jaipur with modern layouts and elegant outdoor planning.",
    points: [
      "Weekend Villas",
      "Landscape Design",
      "Luxury Finishing",
      "Custom Architecture",
    ],
    image: "/images/services/farmhouse-design.jpg",
  },
  {
    title: "Interior Design Solutions",
    desc: "Elegant and functional interiors tailored to your lifestyle and property type.",
    points: [
      "Modular Kitchen",
      "False Ceiling",
      "Lighting Design",
      "Complete Renovation",
    ],
    image: "/images/services/interior-design.jpg",
  },
  {
    title: "Front Elevation Construction",
    desc: "Create a powerful first impression with modern elevation and façade construction.",
    points: [
      "Modern Elevation",
      "Stone & Texture Finish",
      "Balcony Styling",
      "Custom Exterior Work",
    ],
    image: "/images/services/elevation-design.jpg",
  },
  {
    title: "Building Material Supply",
    desc: "Reliable supply of high-quality construction materials across Jaipur at competitive prices with assured quality standards.",
    points: [
      "Cement Supply",
      "TMT Steel",
      "Bricks & Blocks",
      "Sand & Aggregates",
      "Bulk Material Delivery",
    ],
    image: "/images/services/building-material.jpg",
    isMaterial: true, // 👈 special flag
  },
];

export default function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* HERO */}
      <section className="py-15 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Construction Services in Jaipur
        </h1>
        <p className="text-lg text-muted-foreground">
          Pawansut Builders delivers high-quality residential and commercial
          construction services across Jaipur with craftsmanship, transparency,
          and precision.
        </p>
      </section>

      {/* SERVICES */}
      <section className="space-y-36 pb-28 px-6">
        <div className="max-w-7xl mx-auto">

          {services.map((service, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-2 gap-12 md:gap-20 items-center fade-up opacity-0 translate-y-12 transition-all duration-1000  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Big Background Number */}
              <div className="absolute text-[120px] md:text-[180px] font-bold opacity-5 -z-10">
                {`0${index + 1}`}
              </div>

              {/* IMAGE */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-3xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="mb-12 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  {service.title}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 bg-primary rounded-full"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-xl border hover:bg-primary hover:text-white transition"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        {/* Background Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a]"></div>
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full top-[-150px] left-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Planning to Build in Jaipur?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Let’s turn your vision into reality with expert construction,
            quality craftsmanship, and transparent pricing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            {/* Primary Button */}
            <a
              href="/contact"
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919414322763?text=Hi%20Pawansut%20Builders,%20I%20want%20to%20start%20my%20construction%20project%20in%20Jaipur."
              target="_blank"
              className="px-10 py-4 rounded-2xl border border-green-500 text-green-400 font-semibold hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}