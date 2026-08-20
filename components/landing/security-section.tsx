"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Secure authentication",
    description: "Every app ships with industry-standard auth — encrypted passwords, secure sessions, and role-based access via Supabase Auth.",
  },
  {
    icon: Lock,
    title: "HTTPS & encrypted data",
    description: "All data in transit is encrypted via TLS. Deployments on Vercel and Supabase enforce HTTPS by default.",
  },
  {
    icon: Eye,
    title: "Environment isolation",
    description: "Development, staging, and production environments are fully separated. API keys and secrets never touch your codebase.",
  },
  {
    icon: FileCheck,
    title: "Code reviews & testing",
    description: "Every pull request is reviewed before merge. We test critical paths to catch issues before they reach your users.",
  },
];

const practices = ["HTTPS everywhere", "Auth best practices", "Environment isolation", "Secure APIs", "Code reviews"];

export function SecuritySection() {
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
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Security
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Trust is
              <br />
              non-negotiable.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We follow secure development practices at every stage — from 
              authentication to deployment. Your data and your users&apos; data stay protected.
            </p>

            {/* Certifications / Badges */}
            <div className="flex flex-wrap gap-2.5">
              {practices.map((practice, index) => (
                <span
                  key={practice}
                  className={`px-4 py-2 rounded-full border border-foreground/10 text-xs font-mono bg-background/50 hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 shadow-2xs ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 60 + 200}ms` }}
                >
                  ✓ {practice}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 rounded-2xl border border-foreground/10 hover:border-foreground/25 bg-background/60 backdrop-blur-xs transition-all duration-500 group shadow-2xs hover:shadow-md hover:translate-x-1 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border border-foreground/10 bg-foreground/5 group-hover:bg-foreground group-hover:text-background group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 transition-transform group-hover:rotate-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
