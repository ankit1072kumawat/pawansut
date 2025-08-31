import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Accomplishments from "@/components/Accomplements";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ServicesSlider from "@/components/serviceSlider";
import ServicesSliderPage from "@/components/serviceSlider";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pawansut Construction Company",
  description: "Trusted Construction & Real Estate Solutions in Jaipur",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <ServicesSlider />
      {/* <Video /> */}
      <Accomplishments />
      <AboutSectionOne />
      <Brands />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
