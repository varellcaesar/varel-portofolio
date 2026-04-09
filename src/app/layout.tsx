import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@varel-web/components";
import * as React from "react";
import {
  createPersonJsonLd,
  createWebsiteJsonLd,
  getBaseUrl,
  seoConfig,
} from "@varel-web/lib/seo";

const montserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});
const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  referrer: "origin-when-cross-origin",
  keywords: [...seoConfig.keywords],
  authors: [{ name: "Varelandito Caesar Wahyu", url: baseUrl }],
  creator: "Varelandito Caesar Wahyu",
  publisher: "Varelandito Caesar Wahyu",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [
      {
        url: seoConfig.ogImage,
        width: 960,
        height: 1280,
        alt: "Portrait of Varelandito Caesar Wahyu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    creator: "@varell_caesar",
    images: [seoConfig.ogImage],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9fafb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = createPersonJsonLd();
  const websiteJsonLd = createWebsiteJsonLd();

  return (
    <html lang="en" className={montserratFont.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
