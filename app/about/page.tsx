import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Appziio, a software development company founded by Farish Sharif and Maithreyan in Vellore, Tamil Nadu, India. Registered MSME Micro Enterprise specializing in SaaS, e-commerce, Android apps, and websites.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Appziio — Software Studio in Vellore, India",
    description:
      "Founded by Farish Sharif & Maithreyan. Building high-performance SaaS platforms, mobile apps, and enterprise web solutions.",
    url: "https://appziio.com/about",
  },
};

const services = [
  {
    number: "01",
    title: "SaaS Development",
    description:
      "Multi-tenant platforms with auth, billing, dashboards, and APIs — production-ready from day one.",
  },
  {
    number: "02",
    title: "E-Commerce Platforms",
    description:
      "Custom storefronts designed around your business model, from catalogs to checkout flows.",
  },
  {
    number: "03",
    title: "Android App Development",
    description:
      "Native and cross-platform Android apps using Flutter — from UI to Play Store deployment.",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Fast, responsive, SEO-optimized websites built with Next.js and Tailwind CSS.",
  },
];

const stats = [
  { value: "2026", label: "Year founded" },
  { value: "2", label: "Co-founders" },
  { value: "4", label: "Core services" },
  { value: "1", label: "Client app in production" },
];

const techStack = [
  "Next.js",
  "Supabase",
  "Flutter",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
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
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            About us
          </span>

          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-12">
            <span className="block">We build the</span>
            <span className="block">
              software{" "}
              <span className="text-muted-foreground">you need.</span>
            </span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Appziio is a software development company founded by Farish and
              Maithreyan, based in Vellore, Tamil Nadu, India. Registered under
              Udyam (MSME, Govt. of India) as a Micro enterprise in the Services
              category.
            </p>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              We partner with startups and enterprises to design, build, and
              ship production-ready software — from SaaS platforms and
              e-commerce solutions to Android apps and modern websites.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 border-y border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl lg:text-6xl font-display mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What we do
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-16 lg:mb-24">
            Four services.
            <br />
            <span className="text-muted-foreground">One standard.</span>
          </h2>

          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col lg:flex-row gap-4 lg:gap-16 py-10 lg:py-16 border-b border-foreground/10 group"
              >
                <div className="shrink-0">
                  <span className="font-mono text-sm text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Tech Stack
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-16">
            Built on tools
            <br />
            <span className="text-background/50">we trust.</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 border border-background/20 text-lg font-mono text-background/80 hover:bg-background/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
            Let&apos;s build something
            <br />
            <span className="text-muted-foreground">together.</span>
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-base rounded-full hover:bg-foreground/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
