import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ContactForm } from "@/components/contact/contact-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Appziio. Based in Vellore, Tamil Nadu, India. Share your project requirements for SaaS, e-commerce, Android apps, or websites. We respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Appziio — Software Development Agency in Vellore, India",
    description:
      "Tell us about your project requirements for SaaS, e-commerce, Android mobile apps, or web development. Fast 24-hour response guarantee.",
    url: "https://appziio.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
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
              Contact Appziio Studio
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-8">
              <span className="block">Let&apos;s talk</span>
              <span className="block text-muted-foreground">about your project.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Have an idea? Need an engineering partner? Tell us what you&apos;re building and
              we&apos;ll get back to you with an honest breakdown within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Form */}
            <ScrollReveal direction="left" delay={150}>
              <div className="p-8 lg:p-10 rounded-3xl border border-foreground/10 bg-background/60 backdrop-blur-xs shadow-sm">
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right" delay={250}>
              <div className="space-y-8">
                <div>
                  <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                    <span className="w-8 h-px bg-foreground/30" />
                    Direct Contact
                  </span>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 rounded-2xl border border-foreground/10 hover:border-foreground/30 bg-background/50 hover:bg-foreground/[0.02] transition-all duration-300 group shadow-2xs">
                      <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border border-foreground/10 bg-foreground/5 group-hover:bg-foreground group-hover:text-background group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-mono uppercase text-muted-foreground mb-1">Email Inquiry</h3>
                        <a
                          href="mailto:info@appziio.com"
                          className="text-lg font-medium text-foreground hover:underline transition-colors"
                        >
                          info@appziio.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-2xl border border-foreground/10 hover:border-foreground/30 bg-background/50 hover:bg-foreground/[0.02] transition-all duration-300 group shadow-2xs">
                      <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border border-foreground/10 bg-foreground/5 group-hover:bg-foreground group-hover:text-background group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-mono uppercase text-muted-foreground mb-1">Studio Location</h3>
                        <p className="text-lg font-medium text-foreground">
                          Vellore, Tamil Nadu, India (632001)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response promise */}
                <div className="border border-foreground/15 rounded-3xl p-8 bg-foreground/[0.02] shadow-xs relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-emerald-600 animate-pulse" />
                    <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                      Guaranteed SLA
                    </span>
                  </div>
                  <p className="text-3xl font-display mb-3">Response within 24 hours</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We read every message personally. You will speak directly with founders Farish Sharif & Maithreyan about your timeline, scope, and technical strategy.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
