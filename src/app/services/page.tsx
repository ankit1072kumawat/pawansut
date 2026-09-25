import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";
import Faq from "@/components/Faq";

import { Metadata } from "next";
import { business, serviceItems, siteUrl } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  jsonLdScript,
  type Faq as FaqType,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Construction Services in Jaipur — Home, Commercial & Interiors",
  description:
    "Pawansut Builders offers turnkey home construction, commercial construction, farmhouse construction, interior design, front elevation work, and building material supply across Jaipur and within 30 km.",
  keywords: [
    "construction services Jaipur",
    "turnkey home construction Jaipur",
    "commercial construction Jaipur",
    "farmhouse construction Jaipur",
    "front elevation contractor Jaipur",
    "interior design Jaipur",
    "building material supplier Jaipur",
  ],
  alternates: {
    canonical: "/services",
  },
};

const servicesFaqs: FaqType[] = [
  {
    question: "Do you offer turnkey (labour + material) construction in Jaipur?",
    answer:
      "Yes. Our most common package is turnkey construction where we handle drawings, approvals, structure, and finishing on a single contract with a fixed rate per sq. ft. Labour-only (with material supplied by you) contracts are also available.",
  },
  {
    question: "Can you take over a half-finished or stalled project?",
    answer:
      "Yes. We inspect the existing structure, check the drawings and material quality, and give you a scope and estimate to complete the build safely.",
  },
  {
    question: "Do you supply building materials separately?",
    answer:
      "We supply cement, TMT steel, bricks and blocks, sand, and aggregates in bulk across Jaipur, with delivery to site — whether or not we are doing the construction.",
  },
  {
    question: "Which service areas around Jaipur do you cover?",
    answer:
      "All of Jaipur plus roughly 30 km around Jhotwara — including Kalwar Road, Vidyadhar Nagar, Vaishali Nagar, Sikar Road, Mansarovar, Tonk Road, Jagatpura, Amer, Kukas, and Chomu.",
  },
];

const servicesItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Construction Services by Pawansut Builders in Jaipur",
  itemListElement: serviceItems.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.short,
      serviceType: service.name,
      areaServed: `Jaipur, Rajasthan (within ${business.serviceRadiusKm} km)`,
      provider: { "@id": `${siteUrl}/#localbusiness` },
      url: `${siteUrl}/services`,
    },
  })),
};

const ServicePage = () => {
  return (
    <>
      <script
        {...jsonLdScript([
          breadcrumbJsonLd([{ name: "Services", path: "/services" }]),
          servicesItemListJsonLd,
          faqPageJsonLd(servicesFaqs),
        ])}
      />
      <Breadcrumb
        pageName="Construction Services in Jaipur"
        description="Home construction, commercial construction, farmhouse construction, interior design, front elevation work, and building material supply from one Jaipur team."
      />
      <Services />
      <Faq faqs={servicesFaqs} />
    </>
  );
};

export default ServicePage;
