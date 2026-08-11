import React from "react";
import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/json-ld";
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
    default: "Appziio Technologies — Software Development Studio (appziio.com)",
    template: "%s | Appziio Technologies",
  },
  description:
    "Appziio Technologies (appziio.com) is an Indian software development studio based in Vellore, Tamil Nadu. Founded by Farish Sharif and Maithreyan D, Appziio builds SaaS platforms, custom e-commerce apps, Flutter Android apps, and high-performance Next.js websites.",
  keywords: [
    "Appziio",
    "Appziio Technologies",
    "Appziio Technologies Pvt Ltd",
    "appziio",
    "appziio.com",
    "appziio technologies",
    "Appziio Software",
    "Appziio India",
    "Appziio Vellore",
    "Appziio Studio",
    "Software Development Company Vellore",
    "Software Agency Tamil Nadu",
    "SaaS Development India",
    "E-Commerce Platform Development",
    "Android App Development",
    "Flutter Developers Vellore",
    "Next.js Development Agency",
    "Farish Sharif",
    "Farish Sharif Appziio",
    "Maithreyan",
    "Maithreyan Appziio",
    "Maithreyan D",
    "Web Application Studio",
    "MSME Software Studio",
  ],
  authors: [
    { name: "Appziio Technologies", url: "https://www.appziio.com" },
    { name: "Farish Sharif" },
    { name: "Maithreyan D" },
  ],
  creator: "Appziio Technologies",
  publisher: "Appziio Technologies",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.appziio.com",
    siteName: "Appziio Technologies",
    title: "Appziio Technologies — Software Development Studio (appziio.com)",
    description:
      "Appziio Technologies builds SaaS platforms, custom e-commerce apps, Flutter Android applications, and modern web software. Founded by Farish Sharif & Maithreyan. Based in Vellore, India.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Appziio Technologies — Software Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appziio Technologies — Software Development Studio (appziio.com)",
    description:
      "Building SaaS platforms, e-commerce solutions, Flutter Android apps, and high-performance websites. Based in Vellore, Tamil Nadu, India.",
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
        <JsonLd />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
