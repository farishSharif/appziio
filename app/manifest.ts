import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Appziio Technologies — Software Development Studio",
    short_name: "Appziio",
    description:
      "Appziio (appziio.com) is a software development company founded by Farish Sharif and Maithreyan in Vellore, Tamil Nadu. Building SaaS platforms, custom e-commerce apps, Flutter Android apps, and high-performance websites.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
