import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pawansut Builders",
  description:
    "Meet Pawansut Builders, a Jaipur-based construction team known for practical planning, durable workmanship, and a straightforward approach to every project.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are committed to redefining the standards of construction and real estate across India. With a passion for quality and a vision for innovation, we specialize in delivering robust residential, commercial, and infrastructure projects that stand the test of time."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
