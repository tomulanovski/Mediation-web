import { blogPosts } from "@/data/blogPosts";
import { services } from "@/data/services";
import {
  allServiceNodes,
  articleNode,
  breadcrumbNode,
  faqPageNode,
  graph,
  pricedServiceNodes,
  serviceNode,
} from "@/seo/schema";

const home = { name: "Home", path: "/" };

const staticPages = {
  "/": {
    name: "Home",
    title: "Cavanaugh Mediation, PLLC | Family Mediation in All of Florida",
    description:
      "Florida Supreme Court Certified family mediators offering divorce mediation, parenting plans, and property division. Serving all of Florida virtually.",
  },
  "/about": {
    name: "About Us",
    title: "About Us | Cavanaugh Mediation, PLLC",
    description:
      "Meet Shayna and Daphne Cavanaugh — Florida Supreme Court Certified family mediators with decades of combined experience in family law and conflict resolution.",
  },
  "/services": {
    name: "Services",
    title: "Family Mediation Services | Cavanaugh Mediation, PLLC",
    description:
      "Divorce mediation, parenting plans, property division, prenuptial agreements, and post-decree modifications. Affordable family mediation throughout Florida.",
    nodes: allServiceNodes,
  },
  "/pricing": {
    name: "Pricing",
    title: "Pricing | Cavanaugh Mediation, PLLC",
    description:
      "Simple, transparent mediation pricing. Flat-fee divorce mediation for $2,500 or $350/hr. Prenuptial agreements from $1,100. No hidden fees.",
    nodes: pricedServiceNodes,
  },
  "/faq": {
    name: "FAQ",
    title: "FAQ | Cavanaugh Mediation, PLLC",
    description:
      "Answers to common questions about family mediation in Florida — costs, confidentiality, process, and what to expect.",
    nodes: [faqPageNode],
  },
  "/blog": {
    name: "Blog",
    title: "Family Mediation Blog | Cavanaugh Mediation, PLLC",
    description:
      "Expert insights on divorce mediation, co-parenting, property division, and family law in Florida from certified mediators.",
  },
  "/contact": {
    name: "Contact Us",
    title: "Contact Us | Cavanaugh Mediation, PLLC",
    description:
      "Schedule a family mediation session with Cavanaugh Mediation. Call (239) 212-1599 or send us a message. Serving all of Florida virtually.",
  },
  "/privacy": {
    name: "Privacy Policy",
    title: "Privacy Policy | Cavanaugh Mediation, PLLC",
    description:
      "Privacy policy for Cavanaugh Mediation, PLLC. Learn how we collect, use, and protect your personal information.",
  },
};

export const notFoundMeta = {
  title: "Page Not Found | Cavanaugh Mediation, PLLC",
  description: "The page you're looking for doesn't exist or has been moved.",
  noindex: true,
};

export const publishedPosts = blogPosts.filter((post) => !post.hidden);

function getStaticMeta(path) {
  const page = staticPages[path];
  if (!page) return null;
  const crumbs = path === "/" ? [] : [breadcrumbNode([home, { name: page.name, path }])];
  return { ...page, nodes: [...crumbs, ...(page.nodes || [])] };
}

function getServiceMeta(id) {
  const service = services.find((s) => s.id === id);
  if (!service) return null;
  const path = `/services/${id}`;
  return {
    title: `${service.title} | Cavanaugh Mediation, PLLC`,
    description: service.description,
    nodes: [
      breadcrumbNode([home, { name: "Services", path: "/services" }, { name: service.title, path }]),
      serviceNode(service),
    ],
  };
}

function getPostMeta(slug) {
  const post = publishedPosts.find((p) => p.slug === slug);
  if (!post) return null;
  const path = `/blog/${slug}`;
  return {
    title: `${post.title} | Cavanaugh Mediation`,
    description: post.excerpt,
    type: "article",
    image: post.image,
    publishedTime: post.date,
    nodes: [
      breadcrumbNode([home, { name: "Blog", path: "/blog" }, { name: post.title, path }]),
      articleNode(post),
    ],
  };
}

// Returns the head metadata for a path, or notFoundMeta when no page exists there.
export function getPageMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const [, section, slug, extra] = path.split("/");
  const page =
    slug && !extra && section === "services" ? getServiceMeta(slug)
    : slug && !extra && section === "blog" ? getPostMeta(slug)
    : getStaticMeta(path);
  if (!page) return notFoundMeta;
  const { nodes, ...meta } = page;
  return { ...meta, path, jsonLd: [graph(nodes)] };
}

export function getAllPaths() {
  return [
    ...Object.keys(staticPages),
    ...services.map((service) => `/services/${service.id}`),
    ...publishedPosts.map((post) => `/blog/${post.slug}`),
  ];
}
