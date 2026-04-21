import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cn-software.co.uk";

  return [
    { url: `${base}/` },
    { url: `${base}/work/` },
    { url: `${base}/pricing/` },
    { url: `${base}/contact/` },
  ];
}
