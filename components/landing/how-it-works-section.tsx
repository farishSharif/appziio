"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    title: "Discovery & Scoping",
    tag: "Planning",
    description: "We start by understanding your business, users, and goals. Together we define the scope, tech stack, and timeline — no guesswork, just clarity.",
    code: `// Step 1: Discovery & Architecture

const project = {
  client: 'Your Business',
  goals: ['MVP', 'Scale', 'Launch'],
  stack: ['Next.js', 'Supabase', 'Flutter'],
  timeline: '2-4 weeks to first release'
};

export default project;`,
  },
  {
    number: "II",
    title: "Design & Development",
    tag: "Execution",
    description: "Our team designs, builds, and iterates in focused sprints. You get regular demos, transparent progress, and direct access to your developers.",
    code: `// Step 2: Sprint & Build Cycle

const sprint = {
  week: 1,
  deliverables: [
    'Pixel-perfect responsive UI',
    'Secure database & auth rules',
    'Real-time API integration'
  ],
  status: 'active-build'
};`,
  },
  {
    number: "III",
    title: "Launch & Support",
    tag: "Production",
    description: "We handle deployment, store submissions, and go-live. Post-launch, we provide ongoing support, monitoring, and feature updates.",
    code: `// Step 3: Production Deployment

await deploy({
  platform: 'production',
  store: 'Play Store & Web',
  monitoring: true,
  slaSupport: '24/7 coverage'
});

// ✅ Successfully shipped to production`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Three steps.
            <br />
            <span className="text-background/50">Your product, launched.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Steps */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 lg:p-8 rounded-2xl border transition-all duration-500 group cursor-pointer ${
                    isActive 
                      ? "bg-background/10 border-background/25 shadow-lg" 
                      : "bg-transparent border-background/5 opacity-50 hover:opacity-85 hover:bg-background/5 hover:border-background/15"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className={`font-display text-3xl transition-colors duration-300 ${isActive ? "text-background" : "text-background/40"}`}>
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl lg:text-3xl font-display group-hover:translate-x-1 transition-transform duration-300">
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-full border border-background/20 text-background/60">
                          {step.tag}
                        </span>
                      </div>
                      <p className="text-background/70 leading-relaxed text-base">
                        {step.description}
                      </p>
                      
                      {/* Progress indicator */}
                      {isActive && (
                        <div className="mt-5 h-1 bg-background/15 rounded-full overflow-hidden">
                          <div 
                            key={activeStep}
                            className="h-full bg-background rounded-full origin-left"
                            style={{
                              animation: 'progress 5.5s linear forwards'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Code display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/20 rounded-2xl overflow-hidden bg-background/5 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-background/30">
              {/* Window header */}
              <div className="px-6 py-4 border-b border-background/15 flex items-center justify-between bg-background/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs font-mono text-background/60">appziio-process.ts</span>
                <span className="text-xs font-mono text-background/40">Step {activeStep + 1}/3</span>
              </div>

              {/* Code content */}
              <div className="p-8 font-mono text-sm min-h-[300px] transition-all">
                <pre className="text-background/80 overflow-x-auto leading-relaxed">
                  {steps[activeStep].code.split('\n').map((line, lineIndex) => (
                    <div 
                      key={`${activeStep}-${lineIndex}`} 
                      className="leading-loose code-line-reveal flex"
                      style={{ 
                        animationDelay: `${lineIndex * 60}ms`,
                      }}
                    >
                      <span className="text-background/30 select-none w-8 shrink-0 text-right pr-4">{lineIndex + 1}</span>
                      <span className="inline-flex flex-wrap">
                        {line.split('').map((char, charIndex) => (
                          <span
                            key={`${activeStep}-${lineIndex}-${charIndex}`}
                            className="code-char-reveal"
                            style={{
                              animationDelay: `${lineIndex * 60 + charIndex * 12}ms`,
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>

              {/* Status */}
              <div className="px-6 py-4 border-t border-background/15 flex items-center justify-between bg-background/5">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-background/70">Sprint Active & Ready</span>
                </div>
                <span className="text-xs font-mono text-background/40">Appziio Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .code-line-reveal {
          opacity: 0;
          transform: translateX(-6px);
          animation: lineReveal 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .code-char-reveal {
          opacity: 0;
          filter: blur(6px);
          animation: charReveal 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes charReveal {
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
