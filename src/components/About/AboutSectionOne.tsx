"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import SectionTitle from "../Common/SectionTitle";


const listContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 }, // delay between items
  },
};

function useTypingEffect(text: string, speed = 40, trigger: boolean) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!trigger) return;
    setDisplayed(""); 
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, trigger]);

  return displayed;
}

// ✅ Single List Item
const List = ({ text }: { text: string }) => {
  const [inView, setInView] = useState(false);
  const typedText = useTypingEffect(text, 40, inView);

  return (
    <motion.div
      className="text-body-color mb-5 flex items-center text-lg font-medium"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
      onViewportEnter={() => setInView(true)} // trigger typing when item is visible
      onViewportLeave={() => setInView(false)} // reset when leaving
      viewport={{ once: false, amount: 0.8 }} // replay every time
    >
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        ✅
      </span>
      <span>{typedText}</span>
    </motion.div>
  );
};

import type { Variants } from "framer-motion";

const tickVariant: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 10 },
  },
};

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Building Excellence"
                paragraph="Since 2010, we’ve been building budget-friendly homes with modern designs, uncompromised quality, and timely delivery."
              />

              <div className="mb-12 lg:mb-0" data-wow-delay=".15s">
                <motion.div
                  className="mx-[-12px] flex flex-wrap"
                  initial="hidden"
                  whileInView="visible"
                  variants={listContainer}
                  viewport={{ once: true }}
                >
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="High-Quality Materials" />
                    <List text="Experienced Civil Engineers" />
                    <List text="Modern Architectural Design" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Timely Project Delivery" />
                    <List text="End-to-End Construction Solutions" />
                    <List text="Customer Satisfaction Focused" />
                  </div>
                </motion.div>

                {/* Detailed mission for depth */}
                <p className="text-body-color/90 mt-4 text-base leading-relaxed">
                  Established in 2010, Pawansut Builders in Jaipur transforms
                  spaces into iconic landmarks through affordable, high-quality
                  residential and commercial building solutions. We specialize
                  in residential construction, commercial buildings, green
                  construction, and expert remodeling services, tailored for
                  homeowners, real estate developers, and commercial clients
                  across Jaipur. Our commitment to honest practices, timely
                  delivery, and client-centric service is backed by decades of
                  combined industry experience. Every project incorporates
                  modern architectural design, sustainable building techniques,
                  and strict safety and durability standards—crafted with
                  cutting-edge tools and eco-friendly materials.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
                  <Image
                    src="/images/about/about-us.jpg"
                    alt="About us"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                  />
                </div>
                {/* subtle glow */}
                <span className="bg-primary/20 pointer-events-none absolute -inset-4 -z-10 block rounded-[1.75rem] opacity-30 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
