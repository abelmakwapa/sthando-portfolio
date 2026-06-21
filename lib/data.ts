// Single source of truth for portfolio content.
// Edit this file to update copy without touching component logic.

export const profile = {
  name: "Sthando Abel Makwapa",
  shortName: "Abel Makwapa",
  tagline: "BSc Computing with Finance Student | Tech & Finance Innovator",
  location: "Gaborone, Botswana",
  phone: "+267 71 361 794",
  email: "202505288@ub.ac.bw",
  linkedin: "linkedin.com/in/Abel-Makwapa",
  linkedinUrl: "https://linkedin.com/in/Abel-Makwapa",
  heroMessage:
    "Motivated first-year Computing with Finance student passionate about building technology that solves real African challenges.",
  cvPath: "/cv/Sthando-Abel-Makwapa-CV.pdf",
};

export const objective = {
  title: "Objective",
  body: "A first-year Computing with Finance student at the University of Botswana, building a foundation across software engineering, financial analysis, and applied data work. Driven by the belief that technology built for African contexts — agriculture, trade, and access to capital — can move the needle for the people who need it most. Currently turning that conviction into HarvestFlow, a real agri-tech venture born from a hackathon win.",
  bio: "Outside the classroom, I'm building, pitching, and iterating on HarvestFlow with a small team, presenting to public stakeholders, and sharpening the quantitative and communication skills that sit between finance and code. I learn fastest by shipping — preferring a working prototype and a hard question from a minister over a polished slide deck.",
};

export const education = [
  {
    period: "2025 — Present",
    institution: "University of Botswana",
    credential: "BSc Computing with Finance",
    detail:
      "Coursework spanning programming, data structures, financial accounting, business mathematics, and applied data analysis — a deliberate cross-section of software and finance fundamentals.",
    status: "current" as const,
  },
];

export const harvestflow = {
  name: "HarvestFlow",
  tag: "Featured Project",
  award: "2nd Place — Drones for Africa Hackathon 2025–2026",
  oneLiner:
    "An agri-tech platform reducing post-harvest losses by connecting smallholder farmers to real-time pricing, buyers, and logistics.",
  description:
    "HarvestFlow tackles one of the most quietly expensive problems in African agriculture: the value lost between harvest and market. By pairing drone-informed yield insight with a farmer-facing marketplace, real-time price signals, and coordinated logistics, the platform shortens the gap between a harvested crop and a paid invoice — the gap where most post-harvest loss happens.",
  milestones: [
    {
      label: "Hackathon",
      value: "2nd Place, Drones for Africa Hackathon 2025–2026",
    },
    {
      label: "Recognition",
      value: "Presented to Honourable Minister Tiroyaone Ntsima",
    },
    {
      label: "Status",
      value: "In active development as a startup, beyond the hackathon",
    },
  ],
  pillars: [
    {
      title: "Marketplace",
      detail:
        "Direct channel connecting smallholder farmers to institutional and bulk buyers, cutting out layers of informal middlemen.",
    },
    {
      title: "Real-Time Pricing",
      detail:
        "Live market price signals so farmers can negotiate and time sales with actual data, not guesswork.",
    },
    {
      title: "Logistics Coordination",
      detail:
        "Coordinated transport and storage matching to shrink the window where harvested produce degrades in value.",
    },
  ],
  caseStudyHref: "/docs/harvestflow",
};

export const achievements = [
  {
    title: "2nd Place — Drones for Africa Hackathon 2025–2026",
    detail:
      "Recognized for HarvestFlow, an agri-tech solution applying drone-informed insight to post-harvest loss reduction.",
  },
  {
    title: "Ministerial Presentation",
    detail:
      "Presented HarvestFlow directly to Honourable Minister Tiroyaone Ntsima, translating a hackathon prototype into a policy-relevant pitch.",
  },
  {
    title: "Founder, HarvestFlow (in progress)",
    detail:
      "Actively building the hackathon concept into a functioning startup — marketplace, pricing, and logistics layers in development.",
  },
];

export const skills = [
  {
    category: "Technical",
    items: ["Python", "SQL", "Spreadsheet Modelling", "MS Office"],
  },
  {
    category: "Finance",
    items: [
      "Financial Accounting",
      "Principles of Finance",
      "Business Mathematics",
      "Data Analysis",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Public Speaking",
      "Leadership",
      "Critical Thinking",
      "Time Management",
    ],
  },
  {
    category: "Languages",
    items: ["English — Fluent", "Setswana — Native"],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "HarvestFlow", href: "#harvestflow" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
