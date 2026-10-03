export const hourlyRate = 350;

export const packages = [
  {
    serviceId: "divorce-mediation",
    name: "Divorce Mediation",
    flatFee: 2500,
    flatFeeItems: [
      "Up to 8 hours of mediation sessions",
      "Pre-session preparation and document review",
      "Drafting of the Marital Settlement Agreement and Parenting Plan",
      "Walkthrough of how to file documents",
      "No extra charges at any stage",
    ],
    hourlyFit: [
      "A straightforward, quick resolution",
      "Fewer than 4 to 5 hours of sessions",
      "Minimal document preparation needed",
    ],
  },
  {
    serviceId: "prenuptial-postnuptial-agreements",
    name: "Prenuptial & Postnuptial Agreements",
    flatFee: 1100,
    flatFeeItems: [
      "Up to 3 hours of mediation sessions",
      "Pre-session preparation and document review",
      "Drafting of the final agreement",
      "No extra charges at any stage",
    ],
    hourlyFit: [
      "A focused, efficient session",
      "Fewer than 2 hours of discussion",
      "A largely agreed-upon starting point",
    ],
  },
];

export const hourlyServices = [
  {
    serviceId: "post-decree-modifications",
    name: "Post-Decree Modifications",
    description: "Parenting disputes, support adjustments, and more.",
  },
  {
    name: "Other Family Mediation",
    description: "Elder care, inheritance, and other family matters.",
  },
];

export const formatPrice = (amount) => `$${amount.toLocaleString("en-US")}`;
