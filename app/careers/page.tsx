import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore engineering and software development careers at Appziio. Based in Vellore, India — we build SaaS, e-commerce, Android apps, and web applications.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at Appziio — Join Our Software Studio in Vellore, India",
    description:
      "Join the Appziio engineering team. Work on real software, SaaS platforms, and mobile apps alongside founders Farish Sharif and Maithreyan.",
    url: "https://appziio.com/careers",
  },
};

const values = [
  {
    number: "01",
    title: "Ship real things",
    description:
      "We care about putting working software into people's hands. Not decks, not mockups — real products.",
  },
  {
    number: "02",
    title: "Stay honest",
    description:
      "We don't overpromise. Every claim on our site, every estimate to a client — it's grounded in truth.",
  },
  {
    number: "03",
    title: "Learn fast",
    description:
      "We're early-stage and proud of it. Every project teaches us something, and we move fast because of it.",
  },
  {
    number: "04",
    title: "Own your craft",
    description:
      "Whether it's a pixel-perfect UI or a clean API, we take pride in the details.",
  },
];

export default function CareersPage() {
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
              Careers & Culture
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-12">
              <span className="block">Work with</span>
              <span className="block text-muted-foreground">people who ship.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              We&apos;re a small team right now — founders building real software for
              real clients. But we&apos;re always open to hearing from great people who share our drive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              How we work
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-16 lg:mb-20">
              Our principles.
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerDelay={100} className="space-y-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="flex flex-col lg:flex-row gap-4 lg:gap-16 p-8 lg:p-10 rounded-2xl border border-foreground/10 hover:border-foreground/30 bg-background/60 hover:bg-foreground/[0.02] transition-all duration-500 group shadow-2xs hover:translate-x-1"
              >
                <div className="shrink-0">
                  <span className="font-mono text-sm px-2.5 py-1 rounded bg-foreground/5 text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    {value.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {value.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions (Honest State) */}
      <section className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
              <span className="w-8 h-px bg-background/30" />
              Open positions
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              No open roles right now.
            </h2>
            <p className="text-xl text-background/65 leading-relaxed max-w-2xl mb-12">
              We&apos;re not actively hiring, but if you&apos;re a developer,
              designer, or someone who loves building great software — we&apos;d
              love to hear from you. Drop us a line and let&apos;s talk.
            </p>

            <a
              href="mailto:info@appziio.com"
              className="inline-flex items-center gap-2.5 bg-background text-foreground px-8 py-4 text-base rounded-full hover:bg-background/90 transition-all button-shine shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>Say hello — info@appziio.com</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
