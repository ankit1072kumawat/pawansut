"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  Hammer,
  Home,
  Factory,
  Ruler,
  Building2,
  Fence,
  PanelTop,
  PackageSearch,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ---- Data ----
const SERVICES = [
  {
    id: "interior",
    title: "Interior Design\n& Construction",
    icon: <Ruler className="h-5 w-5" />,
    image: "/images/services/interior.jpg",
    cta: "Such projects",
  },
  {
    id: "home-design",
    title: "Home design &\nconstruction",
    icon: <Home className="h-5 w-5" />,
    image: "/images/services/home-construction.jpg",
    cta: "Such projects",
  },
  {
    id: "management",
    title: "Construction &\nManagement",
    icon: <Building2 className="h-5 w-5" />,
    image: "/images/services/management.jpg",
    cta: "Such projects",
  },
  {
    id: "commercial",
    title: "Commercial\nDesign",
    icon: <Factory className="h-5 w-5" />,
    image: "/images/services/commercial.jpg",
    cta: "Such projects",
  },
  {
    id: "railings",
    title: "Custom Steel\n& Railings",
    icon: <Fence className="h-5 w-5" />,
    image: "/images/services/railings.jpg",
    cta: "Such projects",
  },
  {
    id: "glass",
    title: "In‑House Glass\nSolutions",
    icon: <PanelTop className="h-5 w-5" />,
    image: "/images/services/glass.jpg",
    cta: "Such projects",
  },
  {
    id: "materials",
    title: "Building Material\nSupply",
    icon: <PackageSearch className="h-5 w-5" />,
    image: "/images/services/materials.jpg",
    cta: "Such projects",
  },
  {
    id: "farmhouse",
    title: "Farmhouse\nConstruction",
    icon: <Hammer className="h-5 w-5" />,
    image: "/images/services/farmhouse.jpg",
    cta: "Such projects",
  },
];

// ---- Card ----
function ServiceCard({ title, image, icon, cta }: any) {
  return (
    <article className="group relative flex h-full min-h-[420px] w-[300px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 transition-shadow hover:shadow-xl dark:bg-white/5 dark:ring-white/10">
      <div className="p-5">
        <div className="mb-3 inline-flex items-center gap-2 text-gray-600 dark:text-gray-300">
          {icon}
        </div>
        <h3 className="text-2xl leading-tight font-semibold whitespace-pre-line text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="relative mx-4 mb-14 aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <button className="absolute bottom-3 left-4 inline-flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white backdrop-blur transition group-hover:bg-black dark:bg-white/10 dark:text-white">
        {cta} <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

// ---- Slider ----
export default function ServicesSliderPage() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(360, el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <main className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          We’re a leading construction company in Rajasthan
        </h1>
        <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
          Our offerings include:
        </p>
      </header>

      <section className="relative">
        {/* gradient edge masks */}
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent dark:from-gray-950" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent dark:from-gray-950" />

        {/* controls */}
        <div className="absolute -top-14 right-0 flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 ring-1 ring-black/10 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 ring-1 ring-black/10 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* track */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pb-4 [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* hide scrollbar on Chrome */}
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </section>
    </main>
  );
}
