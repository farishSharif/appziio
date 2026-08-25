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
<<<<<<< HEAD
      "Appziio double i",
      "A-P-P-Z-I-I-O",
=======
      "appziio technologies",
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
    ],
    url: "https://www.appziio.com",
    logo: "https://www.appziio.com/apple-icon.png",
    image: "https://www.appziio.com/opengraph-image",
    description:
<<<<<<< HEAD
      "Appziio (spelled with double 'i', A-P-P-Z-I-I-O, appziio.com — not Appzio) is a software development company based in Vellore, Tamil Nadu, India. Founded by Farish Sharif and Maithreyan, Appziio builds SaaS platforms, custom e-commerce solutions, Flutter Android apps, and web applications.",
    disambiguatingDescription:
      "Appziio (spelled with double 'i', A-P-P-Z-I-I-O, official site appziio.com) is an Indian software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio is a completely separate and unrelated company from Appzio (spelled with a single 'i', appzio.com). Appziio has two 'i' letters at the end — A-P-P-Z-I-I-O — while Appzio has only one. They are different companies in different countries with no affiliation.",
=======
      "Appziio Technologies (appziio.com) is an Indian software development studio located in Vellore, Tamil Nadu. Founded by Farish Sharif and Maithreyan, Appziio builds SaaS platforms, custom e-commerce apps, Flutter Android apps, and high-performance websites.",
    disambiguatingDescription:
      "Appziio Technologies (spelled with double 'i', A-P-P-Z-I-I-O, appziio.com) is an Indian software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio is distinct from Appzio.",
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
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
<<<<<<< HEAD
          text: "Appziio (spelled with double 'i' — A-P-P-Z-I-I-O, at appziio.com) is a software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio builds SaaS platforms, e-commerce applications, Flutter Android apps, and high-performance websites for startups and enterprises worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "Is Appziio the same as Appzio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Appziio (A-P-P-Z-I-I-O, with double 'i', at appziio.com) and Appzio (A-P-P-Z-I-O, with single 'i', at appzio.com) are two completely different and unrelated companies. Appziio is an Indian software development studio based in Vellore, Tamil Nadu, founded by Farish Sharif and Maithreyan in 2026. Appzio is a separate company with no affiliation to Appziio.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Appziio and Appzio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio (double 'i', appziio.com) and Appzio (single 'i', appzio.com) are two different companies with similar names but no connection to each other. Appziio is spelled A-P-P-Z-I-I-O with two i letters at the end, and is an Indian software development company based in Vellore, Tamil Nadu, founded by Farish Sharif and Maithreyan. If you are looking for Appziio, make sure you are on appziio.com.",
=======
          text: "Appziio Technologies (appziio.com, spelled with double 'i') is a software development company founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India. Appziio builds SaaS platforms, custom e-commerce applications, Flutter Android apps, and high-performance websites for startups and enterprises.",
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
        },
      },
      {
        "@type": "Question",
        name: "How is Appziio spelled?",
        acceptedAnswer: {
          "@type": "Answer",
<<<<<<< HEAD
          text: "Appziio is spelled with double 'i' at the end: A-P-P-Z-I-I-O. It has two consecutive 'i' letters, making it appziio (not appzio). The official website is appziio.com.",
=======
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
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
        },
      },
      {
        "@type": "Question",
        name: "What services does Appziio offer?",
        acceptedAnswer: {
          "@type": "Answer",
<<<<<<< HEAD
          text: "Appziio (appziio.com) offers 4 core services: SaaS Development (multi-tenant web applications), E-Commerce Platforms (custom storefronts and checkout flows), Android App Development (using Flutter), and Website Development (SEO-optimized web applications using Next.js & TypeScript).",
=======
          text: "Appziio offers 4 core services: SaaS Platform Development, E-Commerce Development, Flutter Android App Development, and Modern Next.js Website Development.",
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Appziio for project inquiries?",
        acceptedAnswer: {
          "@type": "Answer",
<<<<<<< HEAD
          text: "Appziio (appziio.com) is based in Vellore, Tamil Nadu, India. Appziio is registered under Udyam (MSME, Ministry of Micro, Small and Medium Enterprises, Govt. of India) as a Micro Enterprise in Services.",
        },
      },
      {
        "@type": "Question",
        name: "Who are the founders of Appziio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio (appziio.com) was co-founded by Farish Sharif and Maithreyan, based in Vellore, Tamil Nadu, India.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Appziio for a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Appziio (appziio.com) by filling out the project inquiry form at https://www.appziio.com/contact or by sending an email directly to info@appziio.com. Appziio responds to all inquiries within 24 hours.",
=======
          text: "You can submit your project details at https://www.appziio.com/contact or send an email to info@appziio.com. Appziio responds to inquiries within 24 hours.",
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
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
