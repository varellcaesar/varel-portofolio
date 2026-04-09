import type { Metadata } from "next";
import { createMetadata } from "@varel-web/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Varelandito Caesar Wahyu for web and mobile product collaborations, freelance software engineering work, or project discussions.",
  path: "/pages/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
