import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@varel-web/components";
import * as React from "react";

const montserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Varel Personal Blog",
  description: "Developed by Varelandito Caesar Wahyu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={montserratFont.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
