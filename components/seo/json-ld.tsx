import React from "react";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://www.appziio.com/#organization",
    name: "Appziio Technologies",
    legalName: "Appziio",
    alternateName: [
      "Appziio",
      "Appziio Technologies",
      "Appziio Technologies Pvt Ltd",
      "Appziio Software",
      "Appziio India",
      "Appziio Vellore",
      "Appziio Studio",
      "appziio",
      "appziio.com",
      "appziio technologies",
    ],
    url: "https://www.appziio.com",
    logo: "https://www.appziio.com/apple-icon.png",
    image: "https://www.appziio.com/opengraph-image",
    description:
      "Appziio Technologies (appziio.com) is an Indian software development studio located in Vellore, Tamil Nadu. Founded by Farish Sharif and Maithreyan, Appziio builds SaaS platforms, custom e-commerce apps, Flutter Android apps, and high-performance websites.",
    disambiguatingDescription:
      "Appziio Technologies (spelled with double 'i', A-P-P-Z-I-I-O, appziio.com) is an Indian software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio is distinct from Appzio.",
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        name: "Farish Sharif",
        jobTitle: "Co-Founder & Director",
        url: "https://www.linkedin.com/company/appziio-technologies/",
      },
      {
        "@type": "Person",
        name: "Maithreyan D",
        jobTitle: "Co-Founder & Director",
        url: "https://www.linkedin.com/company/appziio-technologies/",
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
      "https://www.linkedin.com/company/appziio-technologies/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.appziio.com/#website",
    url: "https://www.appziio.com",
    name: "Appziio Technologies",
    alternateName: ["Appziio", "Appziio Software", "appziio.com"],
    description:
      "Software development company for startups and enterprises building SaaS, E-Commerce, Mobile Apps & Web Platforms.",
    publisher: {
      "@id": "https://www.appziio.com/#organization",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.appziio.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.appziio.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Appziio",
        item: "https://www.appziio.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact Us",
        item: "https://www.appziio.com/contact",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Careers",
        item: "https://www.appziio.com/careers",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Blog",
        item: "https://www.appziio.com/blog",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Appziio Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio Technologies (appziio.com, spelled with double 'i') is a software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio builds SaaS platforms, custom e-commerce applications, Flutter Android apps, and high-performance websites for startups and enterprises.",
        },
      },
      {
        "@type": "Question",
        name: "How is Appziio spelled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio is spelled with double 'i' (A-P-P-Z-I-I-O). Official domain: appziio.com.",
        },
      },
      {
        "@type": "Question",
        name: "Who founded Appziio Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio Technologies was co-founded by Farish Sharif and Maithreyan D.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Appziio located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio is headquartered in Vellore, Tamil Nadu, India. It is registered under Udyam (MSME, Ministry of Micro, Small and Medium Enterprises, Govt. of India) as a Micro Enterprise in Services.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Appziio offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio offers 4 core services: SaaS Platform Development, E-Commerce Development, Flutter Android App Development, and Modern Next.js Website Development.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Appziio for project inquiries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can submit your project details at https://www.appziio.com/contact or send an email to info@appziio.com. Appziio responds to inquiries within 24 hours.",
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
          __html: JSON.stringify(breadcrumbSchema),
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
