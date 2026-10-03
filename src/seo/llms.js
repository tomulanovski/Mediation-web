import { siteConfig } from "@/config/siteConfig";
import { mediators } from "@/data/mediators";
import { services } from "@/data/services";
import { formatPrice, hourlyRate, hourlyServices, packages } from "@/data/pricing";

const link = (label, path) => `[${label}](${siteConfig.url}${path})`;

// Markdown summary served at /llms.txt (https://llmstxt.org).
export function renderLlmsTxt() {
  const hourly = `${formatPrice(hourlyRate)}/hour`;

  return `# ${siteConfig.name}

> Florida Supreme Court Certified family mediators offering divorce mediation, parenting plans (time-sharing), property division, prenuptial and postnuptial agreements, family business matters, and post-decree modifications. Serving all of Florida virtually.

## At a glance

- Business: ${siteConfig.name} (family mediation firm)
- Service area: all of Florida, with mediation sessions held virtually
- Mediators: ${mediators.map((m) => m.name).join(" and ")}, both Florida Supreme Court Certified Family Mediators
- Phone: ${siteConfig.phone}
- Email: ${siteConfig.email}
- Hours: Monday to Saturday, 9:00 AM to 9:00 PM
- Book a mediation: ${siteConfig.calendlyUrl}

## Services

${services.map((s) => `- ${link(s.title, `/services/${s.id}`)}: ${s.description}`).join("\n")}

## Pricing

All prices below apply to pro-se (self-represented) cases. Clients working with an attorney should contact us for rates and availability. Court filing fees are not included and are paid separately, directly to the court.

${packages
  .map(
    (p) => `### ${p.name}

- Flat-fee package: ${formatPrice(p.flatFee)} total (${formatPrice(p.flatFee / 2)} per person when split between parties). Includes:
${p.flatFeeItems.map((item) => `  - ${item}`).join("\n")}
- Hourly: ${hourly}, billed in 30-minute increments (document drafting not included)`
  )
  .join("\n\n")}

### Other services

${hourlyServices.map((s) => `- ${s.name} (${s.description.replace(/\.$/, "")}): ${hourly}`).join("\n")}

Full details: ${link("Pricing", "/pricing")}

## Mediators

${mediators
  .map(
    (m) => `### ${m.name}

${m.shortBio}

${[...m.education, ...m.certifications].map((item) => `- ${item}`).join("\n")}`
  )
  .join("\n\n")}

## Key pages

- ${link("Home", "/")}
- ${link("About Us", "/about")}
- ${link("Services", "/services")}
- ${link("Pricing", "/pricing")}
- ${link("FAQ", "/faq")}: costs, confidentiality, process, and what to expect
- ${link("Blog", "/blog")}
- ${link("Contact Us", "/contact")}
`;
}
