import type { Metadata } from "next";

const SITE_NAME = "Varel Portfolio";
const DEFAULT_TITLE = "Varelandito Caesar Wahyu | Software Engineer";
const DEFAULT_DESCRIPTION =
  "Portfolio of Varelandito Caesar Wahyu, a software engineer in Jakarta building thoughtful web and mobile products with strong product sense, system thinking, and clean execution.";
const DEFAULT_OG_IMAGE = "/assets/images/varel.jpg";

const SOCIAL_LINKS = {
  twitter: process.env.LINK_TWITTER ?? "https://x.com/varell_caesar",
  instagram:
    process.env.LINK_INSTAGRAM ?? "https://www.instagram.com/varellcaesar",
  discord:
    process.env.LINK_DISCORD ??
    "https://discordapp.com/users/528409195230396416",
  linkedin:
    process.env.LINK_LINKEDIN ??
    "https://www.linkedin.com/in/varelandito-caesar-wahyu-5a125017b/",
};

export const seoConfig = {
  siteName: SITE_NAME,
  defaultTitle: DEFAULT_TITLE,
  defaultDescription: DEFAULT_DESCRIPTION,
  ogImage: DEFAULT_OG_IMAGE,
  socialLinks: SOCIAL_LINKS,
  email: "hello@varel.dev",
  location: "Jakarta, Indonesia",
  keywords: [
    "Varelandito Caesar Wahyu",
    "Varelandito",
    "Varel",
    "software engineer",
    "frontend engineer",
    "web developer",
    "react developer",
    "next.js portfolio",
    "jakarta software engineer",
    "mobile app developer",
    "portfolio website",
    "varel",
  ],
} as const;

export function getBaseUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!envUrl) {
    return "http://localhost:3000";
  }

  return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const baseUrl = getBaseUrl();
  const resolvedTitle = title ?? seoConfig.defaultTitle;
  const resolvedDescription = description ?? seoConfig.defaultDescription;
  const canonicalUrl = new URL(path, baseUrl).toString();
  const ogImageUrl = new URL(seoConfig.ogImage, baseUrl).toString();

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: [...seoConfig.keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: ogImageUrl,
          width: 960,
          height: 1280,
          alt: "Portrait of Varelandito Caesar Wahyu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      creator: "@varell_caesar",
      images: [ogImageUrl],
    },
  };
}

export function createPersonJsonLd() {
  const baseUrl = getBaseUrl();
  const imageUrl = new URL(seoConfig.ogImage, baseUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Varelandito Caesar Wahyu",
    alternateName: "Varel",
    jobTitle: "Software Engineer",
    description: seoConfig.defaultDescription,
    url: baseUrl,
    image: imageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    sameAs: Object.values(seoConfig.socialLinks),
    knowsAbout: [
      "Frontend Engineering",
      "Web Development",
      "Mobile App Development",
      "React",
      "Next.js",
      "TypeScript",
      "System Design",
    ],
  };
}

export function createWebsiteJsonLd() {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: baseUrl,
    description: seoConfig.defaultDescription,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Varelandito Caesar Wahyu",
    },
  };
}
