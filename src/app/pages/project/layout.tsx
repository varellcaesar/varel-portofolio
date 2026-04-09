import type { Metadata } from "next";
import { createMetadata } from "@varel-web/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Selected web and mobile projects by Varelandito Caesar Wahyu, featuring product-focused builds, internal tools, and production applications.",
  path: "/pages/project",
});

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
