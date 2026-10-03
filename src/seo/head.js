import { siteConfig } from "@/config/siteConfig";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const tag = (name, attrs) =>
  `<${name} data-page-head ${Object.entries(attrs)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(" ")}>`;

// Page-specific <head> tags. Used by the prerender script and, on client-side navigation, by PageHead.
export function renderHead(meta) {
  const url = meta.path && `${siteConfig.url}${meta.path}`;
  const image = meta.image || `${siteConfig.url}${siteConfig.logoUrl}`;

  return [
    `<title data-page-head>${escapeHtml(meta.title)}</title>`,
    tag("meta", { name: "description", content: meta.description }),
    meta.noindex && tag("meta", { name: "robots", content: "noindex" }),
    url && tag("link", { rel: "canonical", href: url }),
    tag("meta", { property: "og:type", content: meta.type || "website" }),
    tag("meta", { property: "og:site_name", content: siteConfig.name }),
    tag("meta", { property: "og:locale", content: "en_US" }),
    tag("meta", { property: "og:title", content: meta.title }),
    tag("meta", { property: "og:description", content: meta.description }),
    url && tag("meta", { property: "og:url", content: url }),
    tag("meta", { property: "og:image", content: image }),
    meta.publishedTime && tag("meta", { property: "article:published_time", content: meta.publishedTime }),
    tag("meta", { name: "twitter:card", content: meta.image ? "summary_large_image" : "summary" }),
    tag("meta", { name: "twitter:title", content: meta.title }),
    tag("meta", { name: "twitter:description", content: meta.description }),
    tag("meta", { name: "twitter:image", content: image }),
    ...(meta.jsonLd || []).map(
      (data) =>
        `<script data-page-head type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`
    ),
  ]
    .filter(Boolean)
    .join("\n    ");
}
