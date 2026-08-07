"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter Project",
    description: "For MVPs and early-stage ideas",
    price: "Contact us",
    features: [
      "Single-page or landing site",
      "Mobile-responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "2-week delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth Package",
    description: "For startups ready to scale",
    price: "Contact us",
    features: [
      "Full web or mobile app",
      "Supabase backend integration",
      "Auth & user management",
      "Admin dashboard",
      "Ongoing support",
    ],
    cta: "Get a Quote",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For complex, large-scale builds",
    price: "Contact us",
    features: [
      "Multi-platform development",
      "Custom architecture",
      "Priority support & SLA",
      "Dedicated project manager",
      "Flexible engagement model",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pricing
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Project packages built
            <br />
            <span className="text-stroke">for your stage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Whether you&apos;re launching an MVP or scaling an enterprise platform, we have a package for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <span className="font-display text-4xl text-foreground">{plan.price}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All projects include source code handoff, deployment assistance, and post-launch support.{" "}
          <a href="mailto:info@appziio.com" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Need something custom? Contact us
          </a>
        </p>
      </div>
    </section>
  );
}

