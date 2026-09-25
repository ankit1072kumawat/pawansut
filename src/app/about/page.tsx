import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "About Pawansut Builders — Construction Company in Jaipur",
  description:
    "Pawansut Builders has been building homes and commercial spaces in Jaipur since 2010, with an in-house team of engineers and supervisors and a straightforward, on-time approach.",
  keywords: [
    "about Pawansut Builders",
    "construction company in Jaipur since 2010",
    "trusted builders Jaipur",
    "civil contractor Jaipur",
  ],
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <script
        {...jsonLdScript(breadcrumbJsonLd([{ name: "About", path: "/about" }]))}
      />
      <Breadcrumb
        pageName="About Us"
        description="Since 2010, Pawansut Builders has delivered budget-friendly, modern homes and commercial projects across Jaipur — with an in-house team, quality materials, and on-time handovers."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
