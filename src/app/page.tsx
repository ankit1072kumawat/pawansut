import { Metadata } from "next";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Projects from "@/components/Projects";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ServicesSlider from "@/components/serviceSlider";
import Accomplishments from "@/components/Accomplements";
import Qualities from "@/components/Qualities";
import ServiceAreas from "@/components/ServiceAreas";
import Faq, { homeFaqs } from "@/components/Faq";
import { faqPageJsonLd, jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Construction Company in Jaipur | Home & Commercial Builders",
  description:
    "Pawansut Builders is a Jaipur construction company for home construction, commercial buildings, farmhouses, interiors, and elevation work — serving Jhotwara, Vaishali Nagar, Mansarovar, Sikar Road, and areas within 30 km.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script {...jsonLdScript(faqPageJsonLd(homeFaqs))} />
      <ScrollUp />
      <Hero />
      <Features />
      <ServicesSlider />
      <Accomplishments />
      <Qualities />
      <AboutSectionOne />
      <ServiceAreas />
      <Brands />
      <Projects />
      <Faq />
      <Contact />
    </>
  );
}
