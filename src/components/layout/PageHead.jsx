import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMeta } from "@/seo/pages";
import { renderHead } from "@/seo/head";

export default function PageHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.head.querySelectorAll("[data-page-head]").forEach((el) => el.remove());
    document.head.insertAdjacentHTML("beforeend", renderHead(getPageMeta(pathname)));
  }, [pathname]);

  return null;
}
