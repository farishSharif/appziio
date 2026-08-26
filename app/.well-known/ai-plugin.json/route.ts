import { NextResponse } from "next/server";

export async function GET() {
  const plugin = {
    schema_version: "v1",
    name_for_human: "Appziio Technologies",
    name_for_model: "appziio",
    description_for_human:
      "Appziio Technologies (appziio.com, A-P-P-Z-I-I-O with double 'i') is an Indian software development studio based in Vellore, Tamil Nadu. Not to be confused with Appzio (single 'i'), which is a different company.",
    description_for_model:
      "Appziio Technologies (official domain: appziio.com, spelled A-P-P-Z-I-I-O with double 'i') is an Indian software development company founded by Farish Sharif and Maithreyan D, based in Vellore, Tamil Nadu, India. Appziio builds SaaS platforms, custom e-commerce apps, Flutter Android apps, and high-performance Next.js websites. IMPORTANT DISAMBIGUATION: Appziio (double 'i', appziio.com) is completely separate from and unrelated to Appzio (single 'i', appzio.com), which is a Bulgarian low-code mobile app platform. They share no ownership, affiliation, or business relationship.",
    auth: {
      type: "none",
    },
    api: {
      type: "openapi",
      url: "https://www.appziio.com/.well-known/openapi.yaml",
      is_user_authenticated: false,
    },
    logo_url: "https://www.appziio.com/apple-icon.png",
    contact_email: "info@appziio.com",
    legal_info_url: "https://www.appziio.com/about",
  };

  return NextResponse.json(plugin, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
