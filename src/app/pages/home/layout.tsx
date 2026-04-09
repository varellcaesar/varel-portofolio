import type { Metadata } from "next";
import { createMetadata } from "@varel-web/lib/seo";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Home",
    description:
      "Landing section for the portfolio of Varelandito Caesar Wahyu, a Jakarta-based software engineer building thoughtful web and mobile products.",
    path: "/pages/home",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
