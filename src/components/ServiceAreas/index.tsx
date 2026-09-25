import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { business, allServiceAreas } from "@/lib/site";

// A trimmed, high-intent set for the home page; the full list lives on /service-areas.
const featuredAreas = [
  "Jhotwara",
  "Niwaru Road",
  "Kalwar Road",
  "Vidyadhar Nagar",
  "Vaishali Nagar",
  "Sikar Road",
  "Sirsi Road",
  "Mansarovar",
  "Malviya Nagar",
  "Gopalpura",
  "Tonk Road",
  "Jagatpura",
  "Ajmer Road",
  "Amer",
  "Kukas",
  "Chomu",
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="bg-white py-16 md:py-20 lg:py-24 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Construction Across Jaipur & 30 km Around"
          paragraph={`From our office in ${business.street}, ${business.locality}, we take on home, commercial, farmhouse, interior, and elevation projects across the city and its outskirts.`}
          center
        />

        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {featuredAreas.map((area) => (
            <li key={area}>
              <Link
                href="/service-areas"
                className="hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                {area}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-body-color mx-auto mt-8 max-w-2xl text-center text-base">
          Covering {allServiceAreas.length}+ localities including Jhotwara,
          Vaishali Nagar, Mansarovar, Sikar Road, and Kalwar Road.{" "}
          <Link
            href="/service-areas"
            className="text-primary font-semibold hover:underline"
          >
            See every area we cover →
          </Link>
        </p>
      </div>
    </section>
  );
}
