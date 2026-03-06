import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const servicePages = [
  "/services/house-cleaning-boise-idaho",
  "/services/office-cleaning-boise-idaho",
  "/services/commercial-cleaning-caldwell-nampa",
  "/services/deep-cleaning-meridian-idaho",
  "/services/move-in-move-out-cleaning-boise",
];

const cityPages = [
  "/boise-cleaning-services",
  "/nampa-cleaning-services",
  "/caldwell-cleaning-services",
  "/meridian-cleaning-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  const services: MetadataRoute.Sitemap = servicePages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cities: MetadataRoute.Sitemap = cityPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...home, ...services, ...cities];
}
