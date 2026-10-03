// Renders every route to static HTML in dist/ so pages are readable without JavaScript,
// and generates sitemap.xml and llms.txt from the same route list and data.
// Runs after the client build (dist/) and the SSR build (.ssr/); see "build" in package.json.
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const ssrDir = path.resolve(".ssr");

const { render, renderHead, renderLlmsTxt, getPageMeta, getAllPaths, siteConfig } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

async function writePage(url, file) {
  const head = renderHead(getPageMeta(url));
  const body = await render(url);
  const html = template
    .replace("<!--app-head-->", () => head)
    .replace("<!--app-html-->", () => body);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
}

const paths = getAllPaths();
for (const url of paths) {
  await writePage(url, path.join(dist, url, "index.html"));
}
await writePage("/404", path.join(dist, "404.html"));

const sitemapUrls = paths.map((url) => {
  const lastmod = getPageMeta(url).publishedTime;
  const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
  return `  <url><loc>${siteConfig.url}${url}</loc>${lastmodTag}</url>`;
});
await fs.writeFile(
  path.join(dist, "sitemap.xml"),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapUrls,
    "</urlset>",
    "",
  ].join("\n")
);
await fs.writeFile(path.join(dist, "llms.txt"), renderLlmsTxt());

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${paths.length} pages and 404.html; wrote sitemap.xml and llms.txt`);
