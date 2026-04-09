import type { Metadata } from "next";
import { createMetadata } from "@varel-web/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Explore the professional experience of Varelandito Caesar Wahyu across freelance, product engineering, web platforms, and mobile application development.",
  path: "/pages/experience",
});

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
