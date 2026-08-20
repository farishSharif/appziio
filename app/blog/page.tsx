import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering insights, SaaS building strategies, mobile app development stories, and technical articles from the Appziio team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Appziio Engineering Blog — Insights on SaaS, Flutter & Next.js",
    description:
      "Articles and lessons learned by Farish Sharif and Maithreyan on building production software for startups and enterprises.",
    url: "https://appziio.com/blog",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

const posts: BlogPost[] = [];

export default function BlogPage() {
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
              Appziio Engineering Notes
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-8">
              <span className="block">Thoughts &</span>
              <span className="block text-muted-foreground">updates.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Insights on software development, architecture decisions, and the tools
              we use to ship — straight from founders Farish Sharif & Maithreyan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts or Empty State */}
      <section className="py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {posts.length > 0 ? (
            <StaggerContainer staggerDelay={100} className="space-y-4">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 p-8 lg:p-10 rounded-2xl border border-foreground/10 hover:border-foreground/30 bg-background/60 hover:bg-foreground/[0.02] transition-all duration-500 group shadow-2xs hover:translate-x-1"
                >
                  <div className="shrink-0">
                    <span className="font-mono text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-display mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-sm font-mono text-muted-foreground">
                      {post.author}
                    </span>
                  </div>
                </a>
              ))}
            </StaggerContainer>
          ) : (
            /* Empty state */
            <ScrollReveal direction="scale" delay={150}>
              <div className="text-center py-20 lg:py-28 max-w-xl mx-auto rounded-3xl border border-foreground/10 bg-background/50 backdrop-blur-xs p-10 shadow-xs">
                <div className="w-16 h-16 mx-auto mb-8 rounded-2xl border border-foreground/15 flex items-center justify-center bg-foreground/5 shadow-2xs animate-float">
                  <span className="font-mono text-2xl text-foreground letter-spin">
                    ✦
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display mb-4">
                  We&apos;re just getting started.
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-8">
                  Check back soon for updates on what we&apos;re building,
                  lessons learned from live client apps, and the tech stack behind our projects.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline font-mono"
                >
                  <span>Have a question? Reach out</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
