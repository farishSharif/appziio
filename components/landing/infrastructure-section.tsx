"use client";

import { useEffect, useState, useRef } from "react";

const techStack = [
  { name: "Next.js", category: "Frontend Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Backend & Database" },
  { name: "Flutter", category: "Mobile Development" },
  { name: "Vercel", category: "Deployment" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Tech Stack
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Modern tools.
              <br />
              Battle-tested stack.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We pick the right tools for the job — and we&apos;ve narrowed it down to a 
              stack we trust in production. Every project ships on this foundation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">Next.js</div>
                <div className="text-sm text-muted-foreground">React framework</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">Supabase</div>
                <div className="text-sm text-muted-foreground">Backend & Auth</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">Flutter</div>
                <div className="text-sm text-muted-foreground">Cross-platform mobile</div>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Tech Stack</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Production-ready
                </span>
              </div>

              {/* Locations */}
              <div>
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeTech === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeTech === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{tech.name}</div>
                        <div className="text-sm text-muted-foreground">{tech.category}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
