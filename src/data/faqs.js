import { siteConfig } from "@/config/siteConfig";
import { formatPrice, hourlyRate, packages } from "@/data/pricing";

const divorce = packages.find((p) => p.serviceId === "divorce-mediation");
const prenup = packages.find((p) => p.serviceId === "prenuptial-postnuptial-agreements");
const hourly = `${formatPrice(hourlyRate)}/hour`;

export const faqs = [
  {
    question: "How long does mediation typically take?",
    answer: "Most cases are resolved in 1-2 sessions of 3-4 hours, compared to 12-18 months for litigated cases. Complex cases may require additional sessions, but mediation is still significantly faster than litigation."
  },
  {
    question: "How much does divorce mediation cost in Florida?",
    answer: `For pro-se (self-represented) divorces, we offer a ${formatPrice(divorce.flatFee)} flat fee or ${hourly}. The flat fee covers up to 8 hours of mediation sessions, pre-session preparation and document review, and drafting of the Marital Settlement Agreement and Parenting Plan. Prenuptial and postnuptial agreements are a ${formatPrice(prenup.flatFee)} flat fee or ${hourly}, and post-decree modifications are ${hourly}. Fees are typically split between both parties. Court filing fees are not included and are paid separately, directly to the court.`
  },
  {
    question: "Can mediation be done online? What areas do you serve?",
    answer: "Yes. All of our mediation sessions are held virtually, so we work with families anywhere in Florida."
  },
  {
    question: "Are your mediators certified?",
    answer: "Yes. Shayna Cavanaugh, Esq. and Daphne Cavanaugh are both Florida Supreme Court Certified Family Mediators. Shayna brings over two decades of family law experience, and Daphne holds an MA in Conflict Resolution and Mediation and an MBA from Tel Aviv University."
  },
  {
    question: "Is what we discuss in mediation confidential?",
    answer: "Yes. Everything discussed in mediation is strictly confidential and cannot be used in court if mediation is unsuccessful. This allows both parties to speak openly."
  },
  {
    question: "Do I need an attorney for mediation?",
    answer: "Attorneys aren't required to participate in mediation, and many clients come without one. That said, you're welcome to bring your attorney if you'd like. Having any final agreement reviewed by legal counsel before signing is always a good idea."
  },
  {
    question: "What if I'm working with an attorney?",
    answer: "Our listed pricing applies to pro-se (self-represented) divorces. If you are working with an attorney, please contact us for rates and availability."
  },
  {
    question: "What if we can't reach an agreement?",
    answer: "While reaching a full agreement is always the goal, it isn't always possible. If some issues remain unresolved, you still have options. Many families use mediation to settle what they can in mediation and turn to the courts only for what they can't."
  },
  {
    question: "How much does mediation cost compared to litigation?",
    answer: "Mediation costs a fraction of traditional litigation. While fees vary based on the duration of mediation, most families save significantly in both time and money compared to going through the court system."
  },
  {
    question: "Can mediation work if my spouse and I aren't communicating well?",
    answer: "Absolutely. In fact, that's one of the primary reasons people choose mediation. Our mediators are trained to facilitate productive communication, even when emotions are running high. In sessions, we often will separate parties into different meeting rooms, allowing each person to communicate openly without the added tension of being face to face."
  },
  {
    question: "Do both parties need to agree to mediation?",
    answer: "Generally, yes. Mediation works best when both parties are willing to engage, though it can also be court-ordered. In either case, many reluctant participants find the process more comfortable and constructive than they anticipated."
  },
  {
    question: "Is the mediation agreement legally binding?",
    answer: "Once both parties sign the mediated agreement and it is submitted to and approved by the court, it becomes a legally binding court order. Both parties are welcome to have their agreement reviewed by independent attorneys before signing."
  },
  {
    question: "Do you file the divorce paperwork with the court?",
    answer: "As mediators, we are not able to file documents on your behalf, but you won't be left on your own. Once your agreement is finalized, we'll walk you through exactly what needs to be filed, where to file it, and how to do it, step by step."
  },
  {
    question: "What should I bring to divorce mediation?",
    answer: "Being prepared with financial documentation helps sessions run smoothly. This typically includes recent tax returns, bank and investment account statements, mortgage and debt information, pay stubs and income documentation, and a list of assets and their approximate values. We'll guide you on what's needed for your situation."
  },
  {
    question: "How do I get started?",
    answer: `${siteConfig.bookingEnabled ? "Book a mediation session online through our website, call" : "Call"} us at ${siteConfig.phone}, or send us a message through our contact page and we'll get back to you within 24 hours. We're available Monday through Saturday, 9:00 AM to 9:00 PM.`
  }
];
