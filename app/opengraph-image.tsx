import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Appziio — Software Development for Startups & Enterprises";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "-0.5px",
            }}
          >
            Appziio
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              marginLeft: "12px",
              fontFamily: "monospace",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "4px 12px",
              borderRadius: "999px",
            }}
          >
            Vellore, TN, India
          </span>
        </div>

        {/* Headline & Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Software Development for Startups & Enterprises
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            SaaS Platforms • E-Commerce • Android Apps • Modern Websites
          </p>
        </div>

        {/* Bottom bar badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            zIndex: 10,
          }}
        >
          {["Next.js", "Supabase", "Flutter", "TypeScript"].map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "16px",
                fontFamily: "monospace",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "8px 16px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
