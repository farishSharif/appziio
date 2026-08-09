import { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

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
            Blog
          </span>

          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-8">
            <span className="block">Thoughts &</span>
            <span className="block text-muted-foreground">updates.</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Insights on software development, product building, and the tools
            we use to ship — straight from the Appziio team.
          </p>
        </div>
      </section>

      {/* Posts or Empty State */}
      <section className="py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {posts.length > 0 ? (
            <div className="space-y-0">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 py-10 lg:py-14 border-b border-foreground/10 group"
                >
                  <div className="shrink-0">
                    <span className="font-mono text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-display mb-2 group-hover:translate-x-2 transition-transform duration-500">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-sm text-muted-foreground">
                      {post.author}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-24 lg:py-32">
              <div className="w-16 h-16 mx-auto mb-8 border border-foreground/10 flex items-center justify-center">
                <span className="font-mono text-2xl text-foreground/20">
                  ✦
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display mb-6">
                We&apos;re just getting started.
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Check back soon for updates on what we&apos;re building,
                lessons learned, and the tech behind our projects.
              </p>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
