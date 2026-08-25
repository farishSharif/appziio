"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "SaaS Development", href: "/#features" },
    { name: "E-Commerce Platforms", href: "/#features" },
    { name: "Android App Development", href: "/#features" },
    { name: "Website Development", href: "/#features" },
  ],
  Company: [
    { name: "About Appziio", href: "/about" },
    { name: "Engineering Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Studio", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
<<<<<<< HEAD
  { name: "Twitter / X", href: "https://twitter.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
=======
  { name: "Twitter", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/appziio-technologies/" },
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
];

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-foreground/10 overflow-hidden bg-background">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-72 opacity-25 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6 group">
                <span className="text-2xl font-display group-hover:tracking-wider transition-all duration-300">Appziio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs text-sm">
                Software development for startups and enterprises. Based in Vellore, Tamil Nadu, India. Registered under Udyam (MSME).
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
<<<<<<< HEAD
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group py-1"
=======
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-mono uppercase tracking-wider text-foreground mb-6 font-semibold">{title}</h3>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © 2026 Appziio Software Studio. All rights reserved.
          </p>

<<<<<<< HEAD
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Vellore, Tamil Nadu, India</span>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="w-8 h-8 rounded-full border border-foreground/10 hover:border-foreground/40 hover:bg-foreground/5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 group cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
=======
          <p className="text-sm text-muted-foreground font-mono">
            Founded by{" "}
            <span className="text-foreground font-medium">Farish Sharif</span>
            {" & "}
            <span className="text-foreground font-medium">Maithreyan D</span>
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Vellore, Tamil Nadu, India
            </span>
>>>>>>> ab35f5c686f4c8521337e37b7766c392b129de3f
          </div>
        </div>
      </div>
    </footer>
  );
}
