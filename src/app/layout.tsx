import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Montserrat, Poppins } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import { siteUrl, business, primaryKeywords } from "@/lib/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonLd";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Pawansut Builders | Construction Company in Jaipur (Jhotwara)",
    template: "%s | Pawansut Builders Jaipur",
  },
  description:
    "Pawansut Builders is a construction company in Jhotwara, Jaipur handling home construction, commercial buildings, farmhouses, interiors, and elevation work within about 30 km of the city.",
  applicationName: "Pawansut Builders",
  authors: [{ name: "Pawansut Builders" }],
  creator: "Pawansut Builders",
  publisher: "Pawansut Builders",
  keywords: primaryKeywords,
  category: "Construction",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  other: {
    "geo.region": business.regionCode,
    "geo.placename": `${business.locality}, ${business.region}`,
    "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
    ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Pawansut Builders",
    title: "Pawansut Builders | Home Construction Company in Jaipur",
    description:
      "Plan and build your residential or commercial project in Jaipur with a construction team that keeps design, materials, timelines, and finishing under one roof.",
    images: [
      {
        url: "/images/about/about-us.jpg",
        width: 1200,
        height: 630,
        alt: "Pawansut Builders construction work in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawansut Builders | Home Construction Company in Jaipur",
    description:
      "Pawansut Builders helps Jaipur homeowners and businesses move from planning to handover with clear execution and durable construction.",
    images: ["/images/about/about-us.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en-IN"
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessJsonLd, websiteJsonLd]),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TXH8CYYRTN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TXH8CYYRTN');
          `}
        </Script>
      </head>
      <body className="bg-[#FCFCFC] dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <FloatingWhatsApp />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
