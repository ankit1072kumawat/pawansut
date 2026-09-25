import {
  business,
  fullAddress,
  serviceItems,
  siteUrl,
  allServiceAreas,
} from "./site";

const businessId = `${siteUrl}/#localbusiness`;
const websiteId = `${siteUrl}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.street,
  addressLocality: business.locality,
  addressRegion: business.region,
  postalCode: business.postalCode,
  addressCountry: business.country,
};

const geoCoordinates = {
  "@type": "GeoCoordinates",
  latitude: business.geo.latitude,
  longitude: business.geo.longitude,
};

/** GeneralContractor is a LocalBusiness subtype Google understands well. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": businessId,
  name: business.name,
  alternateName: business.alternateName,
  legalName: business.legalName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo/logo.svg`,
  image: [
    `${siteUrl}/images/about/about-us.jpg`,
    `${siteUrl}/images/services/home-design.png`,
    `${siteUrl}/images/services/commercial-design.jpg`,
  ],
  description:
    "Pawansut Builders is a Jaipur-based construction company handling home construction, commercial buildings, farmhouses, interiors, front elevation work, and building material supply within roughly 30 km of Jhotwara.",
  slogan: "From blueprint to key handover in Jaipur.",
  foundingDate: business.foundingDate,
  telephone: business.phoneSchema,
  email: business.email,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer, Cheque",
  address: postalAddress,
  geo: geoCoordinates,
  hasMap: business.mapsUrl,
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: geoCoordinates,
      geoRadius: String(business.serviceRadiusKm * 1000),
    },
    ...allServiceAreas.map((name) => ({
      "@type": "City",
      name: `${name}, Jaipur, Rajasthan`,
    })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...business.openDays],
      opens: business.opens,
      closes: business.closes,
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: business.phoneSchema,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  knowsAbout: [
    "Residential construction",
    "Turnkey home construction",
    "Commercial construction",
    "Farmhouse construction",
    "Interior design",
    "Front elevation design",
    "RCC structural work",
    "Building renovation",
    "Building material supply",
  ],
  sameAs: [business.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services in Jaipur",
    itemListElement: serviceItems.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.short,
        areaServed: `Jaipur, Rajasthan (within ${business.serviceRadiusKm} km)`,
        provider: { "@id": businessId },
      },
    })),
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: business.name,
  url: siteUrl,
  inLanguage: "en-IN",
  publisher: { "@id": businessId },
};

/** Per-page breadcrumb trail. Pass [{ name, path }]; home is prepended. */
export function breadcrumbJsonLd(
  trail: { name: string; path: string }[],
): Record<string, unknown> {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export type Faq = { question: string; answer: string };

export function faqPageJsonLd(faqs: Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Small helper component data — renders <script type="application/ld+json">. */
export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}

export { fullAddress };
