import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {
  business,
  serviceAreaGroups,
  allServiceAreas,
  serviceItems,
  siteUrl,
} from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: `Areas We Serve in Jaipur (within ${business.serviceRadiusKm} km)`,
  description:
    "Pawansut Builders takes on home construction, commercial, farmhouse, interior, and elevation projects across Jhotwara, Vaishali Nagar, Mansarovar, Sikar Road, Kalwar Road, and other areas within about 30 km of Jaipur.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: `Construction Service Areas Around Jaipur | Pawansut Builders`,
    description:
      "See the Jaipur localities Pawansut Builders covers for home and commercial construction, interiors, and building material supply.",
    url: `${siteUrl}/service-areas`,
  },
};

const areasCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Construction Service Areas Around Jaipur",
  url: `${siteUrl}/service-areas`,
  about: { "@id": `${siteUrl}/#localbusiness` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: allServiceAreas.map((area, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${area}, Jaipur`,
    })),
  },
};

const ServiceAreasPage = () => {
  return (
    <>
      <script
        {...jsonLdScript([
          breadcrumbJsonLd([{ name: "Service Areas", path: "/service-areas" }]),
          areasCollectionJsonLd,
        ])}
      />

      <Breadcrumb
        pageName="Areas We Serve in Jaipur"
        description={`We build across Jaipur and roughly ${business.serviceRadiusKm} km around our Jhotwara office — from Vidyadhar Nagar and Kalwar Road in the north-west to Mansarovar and Tonk Road in the south.`}
      />

      <section className="pt-10 pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading mb-4 text-2xl font-bold text-black sm:text-3xl dark:text-white">
              Where Pawansut Builders works
            </h2>
            <p className="text-body-color mb-4 text-base leading-relaxed">
              Our site office is at {business.street}, {business.locality}. From
              there we regularly run projects across the whole of Jaipur and the
              surrounding belt within about {business.serviceRadiusKm}{" "}
              kilometres. If your plot is in one of the areas below, we can
              usually get an engineer to the site within a day for measurement
              and a rough estimate.
            </p>
            <p className="text-body-color mb-4 text-base leading-relaxed">
              Not listed but still near Jaipur? Call us on{" "}
              <a
                href={`tel:${business.phoneE164}`}
                className="text-primary font-medium hover:underline"
              >
                {business.phone}
              </a>{" "}
              — for farmhouses and larger builds we travel further out.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {serviceAreaGroups.map((group) => (
              <div
                key={group.zone}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/40"
              >
                <h3 className="font-heading mb-2 text-lg font-semibold text-black dark:text-white">
                  {group.zone}
                </h3>
                <p className="text-body-color mb-4 text-sm leading-relaxed">
                  {group.blurb}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="font-heading mb-4 text-2xl font-bold text-black sm:text-3xl dark:text-white">
              What we can build in your area
            </h2>
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {serviceItems.map((service) => (
                <li
                  key={service.slug}
                  className="text-body-color flex items-start gap-3 text-base"
                >
                  <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
                  <span>
                    <span className="text-black dark:text-white">
                      {service.name}
                    </span>{" "}
                    — {service.short}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 rounded-xl px-6 py-3 text-base font-semibold text-white transition"
              >
                Get a free site visit
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-black transition hover:border-primary hover:text-primary dark:border-gray-600 dark:text-white"
              >
                See all services
              </Link>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
            <iframe
              title={`Map to ${business.name}, Jhotwara, Jaipur`}
              src={business.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreasPage;
