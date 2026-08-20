"use client";

import { useEffect, useState, useRef } from "react";

const techStack = [
  { name: "Next.js", category: "Frontend Framework", description: "Server components, fast routing, and edge rendering" },
  { name: "TypeScript", category: "Language", description: "Type-safe robust architecture across client and backend" },
  { name: "Tailwind CSS", category: "Styling", description: "Modern, maintainable, responsive UI utility system" },
  { name: "Supabase", category: "Backend & Database", description: "PostgreSQL, real-time sync, auth, and secure storage" },
  { name: "Flutter", category: "Mobile Development", description: "High-performance native Android & iOS mobile applications" },
  { name: "Vercel", category: "Deployment", description: "Global edge CDN and automated continuous deployment" },
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
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ease-out ${
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
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-foreground/10">
              <div className="p-4 rounded-xl hover:bg-foreground/[0.02] transition-colors">
                <div className="text-3xl lg:text-4xl font-display mb-1">Next.js</div>
                <div className="text-xs text-muted-foreground">React framework</div>
              </div>
              <div className="p-4 rounded-xl hover:bg-foreground/[0.02] transition-colors">
                <div className="text-3xl lg:text-4xl font-display mb-1">Supabase</div>
                <div className="text-xs text-muted-foreground">Backend & Auth</div>
              </div>
              <div className="p-4 rounded-xl hover:bg-foreground/[0.02] transition-colors">
                <div className="text-3xl lg:text-4xl font-display mb-1">Flutter</div>
                <div className="text-xs text-muted-foreground">Cross-platform mobile</div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Tech list */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/15 rounded-2xl overflow-hidden bg-background/50 shadow-sm backdrop-blur-xs">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between bg-foreground/[0.02]">
                <span className="text-sm font-mono text-muted-foreground">Stack & Tools</span>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Production-Ready
                </span>
              </div>

              {/* Items */}
              <div className="divide-y divide-foreground/5">
                {techStack.map((tech, index) => {
                  const isActive = activeTech === index;
                  return (
                    <button
                      key={tech.name}
                      type="button"
                      onClick={() => setActiveTech(index)}
                      className={`w-full text-left px-6 py-4 flex items-center justify-between transition-all duration-300 cursor-pointer ${
                        isActive ? "bg-foreground/[0.04] pl-8" : "hover:bg-foreground/[0.02]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive ? "bg-foreground scale-125 shadow-xs" : "bg-foreground/20"
                          }`}
                        />
                        <div>
                          <div className="font-medium text-foreground flex items-center gap-2">
                            <span>{tech.name}</span>
                            {isActive && (
                              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-foreground text-background">Active</span>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">{tech.description}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                        {tech.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
