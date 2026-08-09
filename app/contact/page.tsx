import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, MapPin } from "lucide-react";

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
            Contact
          </span>

          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-8">
            <span className="block">Let&apos;s talk</span>
            <span className="block text-muted-foreground">about your project.</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Have an idea? Need a dev team? Tell us what you&apos;re building and
            we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Contact info
              </span>

              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-4 p-6 border border-foreground/10 hover:border-foreground/20 transition-colors group">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a
                      href="mailto:info@appziio.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@appziio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border border-foreground/10 hover:border-foreground/20 transition-colors group">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Vellore, Tamil Nadu, India (632001)
                    </p>
                  </div>
                </div>
              </div>

              {/* Response promise */}
              <div className="border border-foreground/10 p-8">
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                  Response time
                </span>
                <p className="text-3xl font-display mb-4">Within 24 hours</p>
                <p className="text-muted-foreground leading-relaxed">
                  We read every message personally. Tell us what you&apos;re building
                  and we&apos;ll respond with an honest assessment of how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
