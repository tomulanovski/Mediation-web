import React from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export { getPageMeta, getAllPaths } from "@/seo/pages";
export { renderHead } from "@/seo/head";
export { renderLlmsTxt } from "@/seo/llms";
export { siteConfig } from "@/config/siteConfig";

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return html;
}
