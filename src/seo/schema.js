import { siteConfig } from "@/config/siteConfig";
import { faqs } from "@/data/faqs";
import { mediators } from "@/data/mediators";
import { services } from "@/data/services";
import { formatPrice, hourlyRate, hourlyServices, packages } from "@/data/pricing";

const base = siteConfig.url;
const logo = `${base}${siteConfig.logoUrl}`;
const orgId = `${base}/#organization`;
const websiteId = `${base}/#website`;
const personId = (mediator) => `${base}/about#${mediator.id}`;
const serviceId = (id) => `${base}/services/${id}#service`;

const florida = { "@type": "State", name: "Florida", sameAs: "https://en.wikipedia.org/wiki/Florida" };
const virtualChannel = {
  "@type": "ServiceChannel",
  name: "Virtual mediation sessions",
  serviceUrl: siteConfig.bookingEnabled ? siteConfig.calendlyUrl : `${base}/contact`,
  servicePhone: { "@type": "ContactPoint", telephone: siteConfig.phone },
};
const proSe =
  "Pricing applies to pro-se (self-represented) cases; clients working with an attorney should contact us for rates and availability.";

function credential(name) {
  const isDegree = /^(J\.D\.|M\.A\.|M\.B\.A\.|B\.A\.)/.test(name);
  const isCertificate = /Certified|Certificate/.test(name);
  if (!isDegree && !isCertificate) return null;
  return {
    "@type": "EducationalOccupationalCredential",
    name,
    credentialCategory: isDegree ? "degree" : "certificate",
    ...(name.startsWith("Florida Supreme Court") && {
      recognizedBy: { "@type": "Organization", name: "Supreme Court of Florida" },
    }),
  };
}

const personNodes = mediators.map((mediator) => ({
  "@type": "Person",
  "@id": personId(mediator),
  name: mediator.name.replace(/, Esq\.$/, ""),
  ...(mediator.name.endsWith(", Esq.") && { honorificSuffix: "Esq." }),
  jobTitle: "Mediator, Founding Partner",
  description: mediator.bio[0],
  image: `${base}${mediator.image}`,
  url: personId(mediator),
  worksFor: { "@id": orgId },
  hasCredential: [...mediator.education, ...mediator.certifications].map(credential).filter(Boolean),
}));

const organizationNode = {
  "@type": ["LegalService", "ProfessionalService"],
  "@id": orgId,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: `${base}/`,
  logo: { "@type": "ImageObject", url: logo },
  image: logo,
  description:
    "Florida Supreme Court Certified family mediators offering divorce mediation, parenting plans, property division, and prenuptial agreements. Serving all of Florida virtually.",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" },
  areaServed: florida,
  founder: mediators.map((mediator) => ({ "@id": personId(mediator) })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
  },
  priceRange: `${formatPrice(hourlyRate)}/hr; flat fees from ${formatPrice(Math.min(...packages.map((p) => p.flatFee)))}`,
  knowsAbout: services.map((service) => service.title),
  sameAs: [siteConfig.social.facebook],
};

const websiteNode = {
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  url: `${base}/`,
  description: "Professional family mediation services serving all of Florida virtually.",
  publisher: { "@id": orgId },
};

const hourlyOffer = (name, billedNote = "") => ({
  "@type": "Offer",
  name: `${name} (hourly)`,
  priceCurrency: "USD",
  price: hourlyRate,
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price: hourlyRate,
    priceCurrency: "USD",
    unitCode: "HUR",
    unitText: "hour",
  },
  description: `${billedNote}${proSe}`,
  eligibleRegion: florida,
  url: `${base}/pricing`,
});

const flatFeeOffer = (pkg) => ({
  "@type": "Offer",
  name: `${pkg.name} flat-fee package`,
  priceCurrency: "USD",
  price: pkg.flatFee,
  description: `Includes: ${pkg.flatFeeItems.join("; ")}. ${proSe}`,
  eligibleRegion: florida,
  url: `${base}/pricing`,
});

function offersFor(id, name) {
  const pkg = packages.find((p) => p.serviceId === id);
  if (pkg) return [flatFeeOffer(pkg), hourlyOffer(name, "Billed in 30-minute increments. Document drafting not included. ")];
  if (hourlyServices.some((s) => s.serviceId === id)) return [hourlyOffer(name)];
  return undefined;
}

export function serviceNode(service) {
  const offers = offersFor(service.id, service.title);
  return {
    "@type": "Service",
    "@id": serviceId(service.id),
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: `${base}/services/${service.id}`,
    provider: { "@id": orgId },
    areaServed: florida,
    availableChannel: virtualChannel,
    ...(offers && { offers }),
  };
}

// Services priced on /pricing that have no page of their own (e.g. "Other Family Mediation").
const unlistedServiceNodes = hourlyServices
  .filter((s) => !s.serviceId)
  .map((s) => ({
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: { "@id": orgId },
    areaServed: florida,
    availableChannel: virtualChannel,
    offers: [hourlyOffer(s.name)],
  }));

export const pricedServiceNodes = [
  ...services.map(serviceNode).filter((node) => node.offers),
  ...unlistedServiceNodes,
];

export const allServiceNodes = services.map(serviceNode);

export const faqPageNode = {
  "@type": "FAQPage",
  "@id": `${base}/faq#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function articleNode(post) {
  const author = mediators.find((m) => m.name.startsWith(post.author));
  return {
    "@type": "Article",
    "@id": `${base}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    author: author ? { "@id": personId(author) } : { "@type": "Person", name: post.author },
    publisher: { "@id": orgId },
    datePublished: post.date,
    image: post.image,
    mainEntityOfPage: `${base}/blog/${post.slug}`,
  };
}

// crumbs: [{ name, path }] from the home page down to the current page.
export const breadcrumbNode = (crumbs) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${base}${crumb.path}`,
  })),
});

export const graph = (nodes) => ({
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode, ...personNodes, ...nodes],
});
