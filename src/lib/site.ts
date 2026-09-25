/**
 * Single source of truth for business / local-SEO data.
 *
 * NAP (Name, Address, Phone) MUST match the Google Business Profile exactly.
 * If the client updates the GBP listing, update the values here too.
 */

export const siteUrl = "https://pawansutbuilders.in";

export const business = {
  name: "Pawansut Builders",
  legalName: "Pawansut Builders",
  alternateName: "Pawansut Builders Jaipur",
  foundingDate: "2010",
  // NAP — keep identical to Google Business Profile
  phone: "+91 7976300874",
  phoneE164: "+917976300874",
  phoneSchema: "+91-7976300874",
  email: "pawansutconstructioncompany@gmail.com",
  street: "36B Laxmi Nagar, Niwaru Road, Jhotwara",
  locality: "Jaipur",
  region: "Rajasthan",
  regionCode: "IN-RJ",
  postalCode: "302012",
  country: "IN",
  /**
   * Business-pin coordinates. Replace with the EXACT latitude/longitude from
   * the Google Business Profile ("Share > Embed a map" or right-click the pin
   * in Google Maps). These are an approximation for the Jhotwara / Niwaru Road
   * area and should be verified before launch.
   */
  geo: { latitude: 26.9515, longitude: 75.7385 },
  serviceRadiusKm: 30,
  // Mon–Sat 9:00 AM – 8:00 PM
  openDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "09:00",
  closes: "20:00",
  instagram: "https://www.instagram.com/pawansut_c_c",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pawansut+Builders+Niwaru+Road+Jhotwara+Jaipur",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Pawansut%20Builders%20Niwaru%20Road%20Jhotwara%20Jaipur&output=embed",
} as const;

export const fullAddress = `${business.street}, ${business.locality}, ${business.region} ${business.postalCode}`;

/** Primary keyword themes used across page metadata. */
export const primaryKeywords = [
  "construction company in Jaipur",
  "home construction Jaipur",
  "builders in Jhotwara",
  "house construction contractor Jaipur",
  "turnkey home construction Jaipur",
  "commercial construction Jaipur",
  "farmhouse construction Jaipur",
  "front elevation design Jaipur",
  "interior designers in Jaipur",
  "building material supplier Jaipur",
];

/**
 * Localities within ~30 km of the Jhotwara / Niwaru Road office.
 * Grouped so the /service-areas page can give each cluster unique copy
 * instead of a thin keyword list.
 */
export const serviceAreaGroups: {
  zone: string;
  blurb: string;
  areas: string[];
}[] = [
  {
    zone: "Jhotwara & North-West Jaipur",
    blurb:
      "Our home base. We run most residential and elevation projects here with same-day site visits.",
    areas: [
      "Jhotwara",
      "Niwaru Road",
      "Kalwar Road",
      "Vidyadhar Nagar",
      "Murlipura",
      "Jhotwara Industrial Area",
      "Road No. 14",
      "Kardhani",
    ],
  },
  {
    zone: "West Jaipur",
    blurb:
      "Independent houses, duplex villas, and turnkey builds along the Sikar Road and Ajmer Road belt.",
    areas: [
      "Sikar Road",
      "Sirsi Road",
      "Vaishali Nagar",
      "Nirman Nagar",
      "Bindayaka",
      "Bhankrota",
      "Ajmer Road",
      "Queens Road",
    ],
  },
  {
    zone: "Central Jaipur",
    blurb:
      "Renovations, commercial fit-outs, and space-tight plots in the older, denser parts of the city.",
    areas: [
      "Bani Park",
      "Civil Lines",
      "C-Scheme",
      "Shastri Nagar",
      "Adarsh Nagar",
      "Raja Park",
    ],
  },
  {
    zone: "South Jaipur",
    blurb:
      "Villas, showrooms, and interior projects across the Mansarovar–Tonk Road corridor.",
    areas: [
      "Mansarovar",
      "Gopalpura",
      "Malviya Nagar",
      "Pratap Nagar",
      "Tonk Road",
      "Sanganer",
      "Jagatpura",
      "Vatika",
    ],
  },
  {
    zone: "Outer Jaipur (within 30 km)",
    blurb:
      "Farmhouses and weekend villas on the outskirts, plus bulk building-material delivery.",
    areas: [
      "Amer",
      "Kukas",
      "Chandwaji",
      "Achrol",
      "Chomu",
      "Bagru",
      "Bassi",
      "Jamwa Ramgarh",
    ],
  },
];

export const allServiceAreas: string[] = serviceAreaGroups.flatMap((g) => g.areas);

export type ServiceItem = {
  slug: string;
  name: string;
  short: string;
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "home-construction",
    name: "Home Construction",
    short:
      "Turnkey house construction in Jaipur — planning, RCC structure, and finishing under one contract.",
  },
  {
    slug: "commercial-construction",
    name: "Commercial Construction",
    short:
      "Shops, showrooms, offices, and warehouses built to code across Jaipur.",
  },
  {
    slug: "farmhouse-construction",
    name: "Farm House Construction",
    short:
      "Weekend villas and farmhouses with outdoor planning on the Jaipur outskirts.",
  },
  {
    slug: "interior-design",
    name: "Interior Design Solutions",
    short:
      "Modular kitchens, false ceilings, lighting, and full renovations for Jaipur homes.",
  },
  {
    slug: "front-elevation",
    name: "Front Elevation Construction",
    short:
      "Modern facades, stone and texture work, and balcony styling for Jaipur properties.",
  },
  {
    slug: "building-material-supply",
    name: "Building Material Supply",
    short:
      "Cement, TMT steel, bricks, sand, and aggregates delivered in bulk around Jaipur.",
  },
];
