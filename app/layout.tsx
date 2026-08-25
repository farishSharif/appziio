import React from "react";
import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.appziio.com"),
  title: {
    default: "Appziio (double i) — Software Development Studio | appziio.com",
    template: "%s | Appziio",
  },
  description:
    "Appziio (spelled A-P-P-Z-I-I-O, with double 'i' — not Appzio) is a software development studio in Vellore, Tamil Nadu, India. Founded by Farish Sharif and Maithreyan. Official site: appziio.com. Builds SaaS platforms, e-commerce apps, Flutter Android apps, and Next.js websites.",
  keywords: [
    "Appziio",
    "appziio",
    "appziio.com",
    "Appziio double i",
    "Appziio not Appzio",
    "Appziio vs Appzio",
    "appziio appzio difference",
    "Appziio Software",
    "Appziio India",
    "Appziio Vellore",
    "Appziio Studio",
    "Appziio two i",
    "A-P-P-Z-I-I-O",
    "Software Development Company Vellore",
    "SaaS Development India",
    "E-Commerce Development",
    "Android App Development",
    "Flutter Developers Vellore",
    "Next.js Development Agency",
    "Software Agency Tamil Nadu",
    "Farish Sharif Appziio",
    "Maithreyan Appziio",
    "Web Application Development",
    "MSME Software Studio",
  ],
  authors: [
    { name: "Appziio", url: "https://www.appziio.com" },
    { name: "Farish Sharif" },
    { name: "Maithreyan" },
  ],
  creator: "Appziio",
  publisher: "Appziio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.appziio.com",
    siteName: "Appziio",
    title: "Appziio (double i, not Appzio) — Software Development Studio | appziio.com",
    description:
      "Appziio (spelled with double 'i' — A-P-P-Z-I-I-O, not to be confused with Appzio) builds SaaS platforms, e-commerce apps, Flutter Android apps, and websites. Based in Vellore, India.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Appziio — Software Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appziio (double i, not Appzio) — Software Development Studio | appziio.com",
    description:
      "Appziio (A-P-P-Z-I-I-O, double 'i', not Appzio) builds SaaS platforms, e-commerce solutions, Flutter Android apps, and websites. Vellore, India.",
    images: ["/opengraph-image"],
    creator: "@appziio",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Vellore",
    "geo.position": "12.9165;79.1325",
    ICBM: "12.9165, 79.1325",
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
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ScrollProgress />
        <JsonLd />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
