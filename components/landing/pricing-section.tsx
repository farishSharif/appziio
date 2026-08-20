"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter Project",
    description: "For MVPs and early-stage ideas",
    price: "Custom",
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
    price: "Custom",
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
    price: "Custom",
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="relative py-28 lg:py-36 border-t border-foreground/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pricing & Packages
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Project packages built
            <br />
            <span className="text-stroke">for your stage.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Whether you&apos;re launching an MVP or scaling an enterprise platform, we have a tailored engagement for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-10 rounded-2xl transition-all duration-700 ease-out flex flex-col justify-between group ${
                plan.popular
                  ? "bg-foreground text-background shadow-2xl scale-[1.02] border-2 border-foreground hover:scale-[1.04]"
                  : "bg-background border border-foreground/15 hover:border-foreground/40 hover:shadow-xl hover:-translate-y-1.5"
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-background text-foreground text-xs font-mono uppercase tracking-wider font-semibold shadow-md flex items-center gap-1.5 border border-foreground/20">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </span>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <span className={`font-mono text-xs ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-3xl mt-1.5 ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-2 ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className={`mb-8 pb-6 border-b ${plan.popular ? "border-background/20" : "border-foreground/10"}`}>
                  <span className={`font-display text-4xl ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs block mt-1 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                    Tailored scope & milestone billing
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 transition-transform group-hover:scale-110 ${
                        plan.popular ? "text-background" : "text-foreground"
                      }`} />
                      <span className={plan.popular ? "text-background/85" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a href="/contact" className="w-full">
                <button
                  type="button"
                  className={`w-full py-4 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 button-shine cursor-pointer ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-foreground text-background hover:bg-foreground/90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-14 text-center text-sm text-muted-foreground">
          All projects include source code handoff, deployment assistance, and post-launch support.{" "}
          <a href="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors font-medium">
            Need something custom? Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
