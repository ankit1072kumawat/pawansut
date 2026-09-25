import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import { business } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Contact Pawansut Builders in Jhotwara, Jaipur",
  description:
    "Talk to Pawansut Builders in Jhotwara, Jaipur about your construction plans, site requirements, budget, timelines, or material needs. Free site visits across Jaipur within 30 km.",
  keywords: [
    "contact builders in Jaipur",
    "construction company phone number Jaipur",
    "construction contractor near me Jaipur",
    "builders in Jhotwara Jaipur",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]),
        )}
      />
      <Breadcrumb
        pageName="Contact Us"
        description={`Planning a project in Jaipur? Call ${business.phone}, WhatsApp us, or send the form below — we arrange free site visits anywhere within about ${business.serviceRadiusKm} km of the city.`}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
