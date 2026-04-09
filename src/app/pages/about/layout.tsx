import type { Metadata } from "next";
import { createMetadata } from "@varel-web/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn more about Varelandito Caesar Wahyu, a software engineer focused on product-minded development, scalable systems, and thoughtful user experiences.",
  path: "/pages/about",
});

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
