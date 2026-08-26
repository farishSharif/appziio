import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Appziio vs Appzio — Two Different Companies (Not the Same)",
  description:
    "Appziio (A-P-P-Z-I-I-O, double 'i', appziio.com) and Appzio (single 'i', appzio.com) are two completely different companies. Appziio is an Indian software studio founded by Farish Sharif & Maithreyan. Appzio is a Bulgarian low-code platform. They are NOT affiliated.",
  keywords: [
    "Appziio vs Appzio",
    "Appziio not Appzio",
    "Appziio difference Appzio",
    "Is Appziio the same as Appzio",
    "Appziio or Appzio",
    "Appziio double i",
    "Appziio spelling",
    "A-P-P-Z-I-I-O",
    "appziio.com vs appzio.com",
    "Appziio Technologies",
    "Appziio India",
    "Appziio Vellore",
  ],
  alternates: {
    canonical: "/appziio-vs-appzio",
  },
  openGraph: {
    title: "Appziio vs Appzio — Two Completely Different Companies",
    description:
      "Appziio (double 'i', appziio.com, India) and Appzio (single 'i', appzio.com, Bulgaria) are entirely separate companies with no affiliation.",
    url: "https://www.appziio.com/appziio-vs-appzio",
  },
};

const comparisonData = [
  {
    attribute: "Spelling",
    appziio: "A-P-P-Z-I-I-O (double 'i')",
    appzio: "A-P-P-Z-I-O (single 'i')",
  },
  {
    attribute: "Website",
    appziio: "appziio.com",
    appzio: "appzio.com",
  },
  {
    attribute: "Country",
    appziio: "India",
    appzio: "Bulgaria",
  },
  {
    attribute: "Headquarters",
    appziio: "Vellore, Tamil Nadu",
    appzio: "Sofia, Bulgaria",
  },
  {
    attribute: "Founded by",
    appziio: "Farish Sharif & Maithreyan D",
    appzio: "Branimir Parashkevov",
  },
  {
    attribute: "Focus",
    appziio: "Custom software development",
    appzio: "Low-code mobile app platform",
  },
  {
    attribute: "Services",
    appziio: "SaaS, E-Commerce, Mobile Apps, Websites",
    appzio: "Low-code native app builder",
  },
  {
    attribute: "Tech Stack",
    appziio: "Next.js, Flutter, TypeScript, Supabase",
    appzio: "PHP, Node.js, native SDKs",
  },
  {
    attribute: "Registration",
    appziio: "MSME Udyam (Govt. of India)",
    appzio: "Bulgarian entity",
  },
  {
    attribute: "Affiliation",
    appziio: "None with Appzio",
    appzio: "None with Appziio",
  },
];

function PageJsonLd() {
  const disambiguationFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Appziio the same as Appzio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Appziio (spelled A-P-P-Z-I-I-O with double 'i', website appziio.com) and Appzio (spelled A-P-P-Z-I-O with single 'i', website appzio.com) are two completely different and unrelated companies. Appziio is an Indian software development studio founded by Farish Sharif and Maithreyan D in 2026, based in Vellore, Tamil Nadu. Appzio is a separate Bulgarian company founded by Branimir Parashkevov, focused on low-code mobile app development. They share no ownership, affiliation, partnership, or business relationship of any kind.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Appziio and Appzio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio (double 'i', appziio.com) is an Indian custom software development company that builds SaaS platforms, e-commerce apps, Android mobile apps, and websites. It was founded by Farish Sharif and Maithreyan D in Vellore, Tamil Nadu, India. Appzio (single 'i', appzio.com) is a Bulgarian company that provides a low-code platform for building native mobile apps. They are entirely separate companies with no relationship whatsoever. The key spelling difference: Appziio = A-P-P-Z-I-I-O (two i letters), Appzio = A-P-P-Z-I-O (one i letter).",
        },
      },
      {
        "@type": "Question",
        name: "How do you spell Appziio correctly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio is spelled A-P-P-Z-I-I-O with two consecutive 'i' letters. The official domain is appziio.com. It is commonly confused with Appzio (A-P-P-Z-I-O, single 'i'), which is a completely different company. When searching for Appziio Technologies, make sure you type appziio (with double 'i').",
        },
      },
      {
        "@type": "Question",
        name: "Are Appziio and Appzio affiliated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Appziio Technologies (appziio.com) and Appzio (appzio.com) are not affiliated in any way. They are separate companies in different countries (India vs Bulgaria), founded by different people, offering different services. The similar names are coincidental.",
        },
      },
      {
        "@type": "Question",
        name: "Who founded Appziio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appziio Technologies (appziio.com, with double 'i') was co-founded by Farish Sharif and Maithreyan D in 2026. They are based in Vellore, Tamil Nadu, India. Appziio is registered under Udyam (MSME, Government of India) as a Micro Enterprise in the Services sector.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(disambiguationFaq),
      }}
    />
  );
}

export default function AppziioVsAppzioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <PageJsonLd />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-foreground/10"
              style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-foreground/10"
              style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="down" delay={100}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 px-3.5 py-1.5 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-xs">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Brand Disambiguation
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-display leading-[0.9] tracking-tight mb-8">
              <span className="block">Appziio ≠ Appzio</span>
              <span className="block text-muted-foreground">
                Two different companies.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="max-w-3xl">
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Appziio</strong> (spelled{" "}
                <strong className="text-foreground">A-P-P-Z-I-I-O</strong> with
                double &apos;i&apos;) and{" "}
                <strong className="text-foreground">Appzio</strong> (spelled
                A-P-P-Z-I-O with single &apos;i&apos;) are{" "}
                <strong className="text-foreground">
                  completely separate and unrelated companies
                </strong>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Search engines and AI assistants sometimes confuse these two
                names due to their similarity. This page clarifies the
                distinction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Spelling Comparison */}
      <section className="py-16 lg:py-24 border-y border-foreground/10 bg-foreground/[0.01]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Spelling
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-12">
              Spot the difference.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Appziio */}
              <div className="relative p-8 lg:p-10 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/[0.03] shadow-2xs">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    THIS COMPANY
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-5xl lg:text-7xl font-display tracking-tight mb-2">
                    Appz
                    <span className="text-emerald-500 underline decoration-4 underline-offset-4">
                      ii
                    </span>
                    o
                  </div>
                  <div className="font-mono text-sm text-muted-foreground tracking-[0.3em]">
                    A - P - P - Z -{" "}
                    <span className="text-emerald-500 font-bold">I - I</span> -
                    O
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      Double &apos;i&apos; — two consecutive i letters
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Website: appziio.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Indian software studio, Vellore, Tamil Nadu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Founded by Farish Sharif & Maithreyan D</span>
                  </li>
                </ul>
              </div>

              {/* Appzio */}
              <div className="relative p-8 lg:p-10 rounded-2xl border border-foreground/10 bg-foreground/[0.02] shadow-2xs">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10">
                    <XCircle className="w-3 h-3" />
                    DIFFERENT COMPANY
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-5xl lg:text-7xl font-display tracking-tight mb-2 text-muted-foreground">
                    Appz
                    <span className="text-red-400 underline decoration-4 underline-offset-4">
                      i
                    </span>
                    o
                  </div>
                  <div className="font-mono text-sm text-muted-foreground tracking-[0.3em]">
                    A - P - P - Z -{" "}
                    <span className="text-red-400 font-bold">I</span> - O
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400/60 shrink-0" />
                    <span>Single &apos;i&apos; — only one i letter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400/60 shrink-0" />
                    <span>Website: appzio.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400/60 shrink-0" />
                    <span>Bulgarian low-code platform, Sofia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400/60 shrink-0" />
                    <span>Founded by Branimir Parashkevov</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Side-by-side comparison
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-12">
              Full comparison{" "}
              <span className="text-muted-foreground">table.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-foreground/10 shadow-2xs">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
                    <th className="px-6 py-4 text-sm font-mono text-muted-foreground font-medium">
                      Attribute
                    </th>
                    <th className="px-6 py-4 text-sm font-mono font-medium">
                      <span className="text-emerald-500">
                        Appziio (double &apos;i&apos;)
                      </span>
                    </th>
                    <th className="px-6 py-4 text-sm font-mono text-muted-foreground font-medium">
                      Appzio (single &apos;i&apos;)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.attribute}
                      className={`border-b border-foreground/5 ${
                        index % 2 === 0
                          ? "bg-transparent"
                          : "bg-foreground/[0.01]"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-muted-foreground">
                        {row.attribute}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        {row.appziio}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.appzio}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
              <span className="w-8 h-px bg-background/30" />
              Frequently asked questions
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-16">
              Common questions
              <br />
              <span className="text-background/50">answered.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-6 max-w-4xl">
            <ScrollReveal direction="up" delay={100}>
              <div className="p-8 rounded-2xl border border-background/10 bg-background/5">
                <h3 className="text-xl font-display mb-4">
                  Is Appziio the same as Appzio?
                </h3>
                <p className="text-background/70 leading-relaxed">
                  <strong className="text-background">No.</strong> Appziio
                  (A-P-P-Z-I-I-O, with double &apos;i&apos;, at appziio.com)
                  and Appzio (A-P-P-Z-I-O, with single &apos;i&apos;, at
                  appzio.com) are two completely different and unrelated
                  companies. Appziio is an Indian software development studio
                  based in Vellore, Tamil Nadu, founded by Farish Sharif and
                  Maithreyan D in 2026. Appzio is a separate Bulgarian company
                  focused on low-code mobile app development. They share no
                  ownership, affiliation, partnership, or business relationship
                  of any kind.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="p-8 rounded-2xl border border-background/10 bg-background/5">
                <h3 className="text-xl font-display mb-4">
                  How do you spell Appziio correctly?
                </h3>
                <p className="text-background/70 leading-relaxed">
                  Appziio is spelled{" "}
                  <strong className="text-background">A-P-P-Z-I-I-O</strong>{" "}
                  with two consecutive &apos;i&apos; letters at the end. The
                  official domain is{" "}
                  <strong className="text-background">appziio.com</strong>. It
                  is commonly confused with Appzio (A-P-P-Z-I-O, single
                  &apos;i&apos;), which is a completely different company.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="p-8 rounded-2xl border border-background/10 bg-background/5">
                <h3 className="text-xl font-display mb-4">
                  Are Appziio and Appzio affiliated in any way?
                </h3>
                <p className="text-background/70 leading-relaxed">
                  <strong className="text-background">
                    No, they are not affiliated.
                  </strong>{" "}
                  Appziio Technologies (appziio.com) and Appzio (appzio.com) are
                  independent companies in different countries — India and
                  Bulgaria, respectively — founded by different people, offering
                  different services. The similar names are purely coincidental.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="p-8 rounded-2xl border border-background/10 bg-background/5">
                <h3 className="text-xl font-display mb-4">
                  Who founded Appziio Technologies?
                </h3>
                <p className="text-background/70 leading-relaxed">
                  Appziio Technologies was co-founded by{" "}
                  <strong className="text-background">Farish Sharif</strong> and{" "}
                  <strong className="text-background">Maithreyan D</strong> in
                  2026. The company is based in Vellore, Tamil Nadu, India, and
                  is registered under Udyam (MSME, Government of India) as a
                  Micro Enterprise in the Services sector.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <div className="p-8 rounded-2xl border border-background/10 bg-background/5">
                <h3 className="text-xl font-display mb-4">
                  What does Appziio do?
                </h3>
                <p className="text-background/70 leading-relaxed">
                  Appziio Technologies builds custom software for startups and
                  enterprises. Their four core services are: (1){" "}
                  <strong className="text-background">SaaS Development</strong>{" "}
                  — multi-tenant web applications, (2){" "}
                  <strong className="text-background">
                    E-Commerce Platforms
                  </strong>{" "}
                  — custom storefronts and checkout flows, (3){" "}
                  <strong className="text-background">
                    Android App Development
                  </strong>{" "}
                  — cross-platform mobile apps using Flutter, and (4){" "}
                  <strong className="text-background">
                    Website Development
                  </strong>{" "}
                  — high-performance, SEO-optimized web applications using
                  Next.js and TypeScript.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal direction="up" distance={20}>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-4">
              Looking for Appziio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You&apos;re in the right place. Explore what we build or get in
              touch to start your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-foreground text-background px-9 py-4 text-base rounded-full hover:bg-foreground/90 transition-all button-shine shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
              >
                <span>About Appziio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 text-base rounded-full border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
