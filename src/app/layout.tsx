import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { FONT_MONTSERRAT, FONT_POPPINS } from "@/constant/font";
import { env } from "@/env";

import "./globals.css";

export const metadata: Metadata = {
  title: "MSGDev — Web, App & AI Automation",
  description:
    "Godwin Abraham, Mashiruddin Mohammed & Mohammed Saihaan — a team of Web, App & AI Automation Developers based in UAE.",
  openGraph: {
    title: "MSGDev — Web, App & AI Automation",
    description:
      "Godwin Abraham, Mashiruddin Mohammed & Mohammed Saihaan — a team of Web, App & AI Automation Developers based in UAE.",
    url: env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "MSGDev Portfolio",
      },
    ],
  },
  twitter: {
    title: "MSGDev — Web, App & AI Automation",
    description:
      "Godwin Abraham, Mashiruddin Mohammed & Mohammed Saihaan — Web, App & AI Automation Developers based in UAE.",
    images: [`${env.NEXT_PUBLIC_APP_URL}/og-image.webp`],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FONT_MONTSERRAT.variable} ${FONT_POPPINS.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
