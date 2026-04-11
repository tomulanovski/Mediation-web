import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function useSEO({ title, description, canonical, type = "website", schema }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content) => {
      if (!content) return;
      const attr = name.startsWith("og:") || name.startsWith("twitter:") ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description);
      setMeta("twitter:description", description);
    }

    setMeta("og:title", title);
    setMeta("twitter:title", title);
    setMeta("og:type", type);

    if (canonical) {
      setMeta("og:url", `${siteConfig.url}${canonical}`);
      let link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute("href", `${siteConfig.url}${canonical}`);
    }

    let schemaEl;
    if (schema) {
      schemaEl = document.createElement("script");
      schemaEl.type = "application/ld+json";
      schemaEl.id = "page-schema";
      schemaEl.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaEl);
    }

    return () => {
      if (schemaEl) schemaEl.remove();
    };
  }, [title, description, canonical, type, schema]);
}
