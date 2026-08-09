import React from "react";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://www.appziio.com/#organization",
    name: "Appziio",
    legalName: "Appziio",
    alternateName: [
      "Appziio Software",
      "Appziio India",
      "Appziio Studio",
      "Appziio.com",
      "appziio",
    ],
    url: "https://www.appziio.com",
    logo: "https://www.appziio.com/apple-icon.png",
    image: "https://www.appziio.com/opengraph-image",
    description:
      "Appziio (spelled appziio with double 'i') is a software development company based in Vellore, Tamil Nadu, India. Founded by Farish Sharif and Maithreyan, Appziio builds SaaS platforms, custom e-commerce solutions, Flutter Android apps, and web applications.",
    disambiguatingDescription:
      "Appziio (spelled with double 'i', A-P-P-Z-I-I-O, appziio.com) is an Indian software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio is distinct from Appzio.",
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        name: "Farish Sharif",
        jobTitle: "Co-Founder",
      },
      {
        "@type": "Person",
        name: "Maithreyan",
        jobTitle: "Co-Founder",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vellore",
      addressRegion: "Tamil Nadu",
      postalCode: "632001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9165,
      longitude: 79.1325,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@appziio.com",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Tamil"],
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Development",
            description:
              "Multi-tenant platforms with auth, billing, dashboards, and APIs — production-ready from day one.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce Platforms",
            description:
              "Custom storefronts designed around your business model, from catalogs to checkout flows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Android App Development",
            description:
              "Native and cross-platform Android apps using Flutter — from UI to Play Store deployment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "Fast, responsive, SEO-optimized websites built with Next.js and Tailwind CSS.",
          },
        },
      ],
    },
    sameAs: [
      "https://www.appziio.com",
      "https://appziio.com",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.appziio.com/#website",
    url: "https://www.appziio.com",
    name: "Appziio",
    alternateName: "Appziio Software",
    description:
      "Software development company for startups and enterprises building SaaS, E-Commerce, Mobile Apps & Web Platforms.",
    publisher: {
      "@id": "https://www.appziio.com/#organization",
    },
    inLanguage: "en-US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Appziio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio (spelled with double 'i', appziio.com) is a software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio builds SaaS platforms, e-commerce applications, Android apps, and high-performance websites for startups and enterprises worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "How is Appziio spelled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio is spelled with double 'i' (A-P-P-Z-I-I-O). The official website is appziio.com.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Appziio offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio offers 4 core services: SaaS Development (multi-tenant web applications), E-Commerce Platforms (custom storefronts and checkout flows), Android App Development (using Flutter), and Website Development (SEO-optimized web applications using Next.js & TypeScript).",
        },
      },
      {
        "@type": "Question",
        name: "Where is Appziio based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio is based in Vellore, Tamil Nadu, India. Appziio is registered under Udyam (MSME, Ministry of Micro, Small and Medium Enterprises, Govt. of India) as a Micro Enterprise in Services.",
        },
      },
      {
        "@type": "Question",
        name: "Who are the founders of Appziio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio was co-founded by Farish Sharif and Maithreyan.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Appziio for a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Appziio by filling out the project inquiry form at https://www.appziio.com/contact or by sending an email directly to info@appziio.com. Appziio responds to all inquiries within 24 hours.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
