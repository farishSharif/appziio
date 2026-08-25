import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Appziio (double i, not Appzio)",
  description:
    "Appziio (spelled A-P-P-Z-I-I-O with double 'i' — not Appzio) is a software development company founded by Farish Sharif and Maithreyan in Vellore, Tamil Nadu, India. Registered MSME Micro Enterprise. Official site: appziio.com.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Appziio (double i, not Appzio) — Software Studio in Vellore, India",
    description:
      "Appziio (A-P-P-Z-I-I-O, double 'i', not Appzio) is founded by Farish Sharif & Maithreyan. Building SaaS platforms, mobile apps, and web solutions from Vellore, India.",
    url: "https://www.appziio.com/about",
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
  { value: "2026", label: "Year founded", sub: "Est. in Vellore, India" },
  { value: "2", label: "Co-founders", sub: "Farish Sharif & Maithreyan" },
  { value: "4", label: "Core services", sub: "End-to-end engineering" },
  { value: "1", label: "Client app in production", sub: "Live on Play Store" },
];

const techStack = [
  "Next.js",
  "Supabase",
  "Flutter",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "PostgreSQL",
  "Docker",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

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
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              About Appziio Studio
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-12">
              <span className="block">We build the</span>
              <span className="block">
                software{" "}
                <span className="text-muted-foreground">you need.</span>
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 border-y border-foreground/10 bg-foreground/[0.01]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <StaggerContainer staggerDelay={120} className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl border border-foreground/5 hover:border-foreground/20 hover:bg-background transition-all duration-300 group shadow-2xs">
                <div className="text-4xl lg:text-6xl font-display mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              What we do
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-16 lg:mb-20">
              Four services.
              <br />
              <span className="text-muted-foreground">One standard.</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerDelay={100} className="space-y-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col lg:flex-row gap-4 lg:gap-16 p-8 lg:p-10 rounded-2xl border border-foreground/10 hover:border-foreground/30 bg-background/60 hover:bg-foreground/[0.02] transition-all duration-500 group shadow-2xs hover:translate-x-1"
              >
                <div className="shrink-0">
                  <span className="font-mono text-sm px-2.5 py-1 rounded bg-foreground/5 text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    {service.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-3">
                    <span>{service.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono text-muted-foreground">→</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
              <span className="w-8 h-px bg-background/30" />
              Tech Stack
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-16">
              Built on tools
              <br />
              <span className="text-background/50">we trust in production.</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerDelay={60} className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3.5 rounded-full border border-background/20 text-base lg:text-lg font-mono text-background/90 hover:bg-background hover:text-foreground hover:scale-105 transition-all duration-300 cursor-default shadow-xs"
              >
                {tech}
              </span>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal direction="up" distance={20}>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Let&apos;s build something
              <br />
              <span className="text-muted-foreground">together.</span>
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-9 py-4 text-base rounded-full hover:bg-foreground/90 transition-all button-shine shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
