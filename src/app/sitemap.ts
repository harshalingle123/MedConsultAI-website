import type { MetadataRoute } from "next";

// Bump each date only when that page's actual content changes — do not
// replace with new Date(), which stamps every URL "modified today" on every build.
const lastModified = {
  home: new Date("2026-07-12"),
  privacy: new Date("2026-07-01"),
  terms: new Date("2026-07-01"),
  security: new Date("2026-07-01"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://medconverse.ai",
      lastModified: lastModified.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://medconverse.ai/privacy",
      lastModified: lastModified.privacy,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://medconverse.ai/terms",
      lastModified: lastModified.terms,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://medconverse.ai/security",
      lastModified: lastModified.security,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
