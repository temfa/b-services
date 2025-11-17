import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider";
import Head from "next/head";

const inter = Raleway({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Montserrat({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "B Supplies Ventures",
  description: "B Supplies Ventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Head>
          <title>B Supplies Ventures</title>
          <meta name="description" content="B Supplies Ventures" />
          <meta name="keywords" content="Shipping, Logistics, Car Accessories" />
          <meta name="author" content="B Supplies Ventures" />
          <meta property="og:title" content="B Supplies Ventures" />
          <meta property="og:description" content="Shipping, Logistics" />
          <meta property="og:url" content="https://bsuppliesventure.com/" />
          <meta property="og:image" content="https://bsuppliesventure.com/images/logo.png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "B Suplies",
                url: "https://bsuppliesventure.com/",
                logo: "https://bsuppliesventure.com/images/logo.png",
                description: "B Supplies Ventures",
                sameAs: ["https://www.instagram.com/logisticsby_bsupplies/"],
              }),
            }}
          />
        </Head>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
