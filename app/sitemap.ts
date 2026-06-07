import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://df-os.com";

  const routes = [
    "",
    "/platform/df-os",
    "/platform/x-konnect",
    "/platform/vish-ai",
    "/industries",
    "/about",
    "/contact",
    "/resources",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
