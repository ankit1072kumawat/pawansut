"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "../styles/index.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <head>
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
        <title>Pawansut Builders — Contractors & Building Materials</title>
        <meta
          name="description"
          content="Pawansut Builders provides contractor services and building materials for real estate projects."
        />
        <link rel="canonical" href="https://pawansutbuilders.com/" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pawansut Builders",
              url: "https://pawansutbuilders.com",
              logo: "https://pawansutbuilders.com/images/logo/logo.svg",
              image:
                "https://pawansutbuilders.com/_next/image?url=%2Fimages%2Fabout%2Fabout-us.jpg&w=640&q=75",
              description:
                "Pawansut Builders provides contractor services and building materials for real estate projects. Trusted solutions for construction, renovation, and supply.",
              telephone: "+91-9414322763",
              address: {
                "@type": "PostalAddress",
                streetAddress: "36B Laxmi Nagar, Niwaru raod",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302012",
                addressCountry: "IN",
              },
              openingHours: "Mo-Sa 09:00-18:00",
              priceRange: "₹₹",
              sameAs: [
                "https://www.instagram.com/pawansut_builders",
              ],
            }),
          }}
        />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

