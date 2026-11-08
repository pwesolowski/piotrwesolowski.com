import type { Messages } from "./pl";

/** English copy. Must match the shape of pl.ts (enforced by the type). */
export const en: Messages = {
  meta: {
    title: "Piotr Wesołowski — AI Product Engineer",
    description:
      "Piotr Wesołowski, AI Product Engineer. Software engineer since 2010: Java, Node.js, TypeScript, AWS. I build AI products and systems — agents, Claude, MCP.",
  },

  nav: {
    switchLanguage: "Wersja polska",
    toggleTheme: "Toggle light/dark theme",
    skipToContent: "Skip to content",
  },

  card: {
    intro:
      "Programmer and software engineer since 2010. Today I combine software engineering with AI — from a business problem to a working product.",
    photoAlt: "Piotr Wesołowski",

    experienceTitle: "Experience",
    experience: [
      {
        when: "Now",
        title: "AI Product Engineer",
        text: "AI agents, Claude and MCP shipped in real companies. Building my own industry SaaS.",
      },
      {
        when: "",
        title: "Team lead · Engineering manager",
        text: "Led teams and designed systems where performance, code quality and scalability matter.",
      },
      {
        when: "Since 2010",
        title: "Software engineer · Programmer",
        text: "Backend in Java and Node.js, TypeScript, frontend and PWAs. AWS cloud and EU-based servers (OVH).",
      },
    ],

    stackLabel: "Tech",
    stack: ["Java", "Node.js", "TypeScript", "AWS", "OVH", "PWA", "Claude", "MCP"],

    contactTitle: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    book: "Book a 30-min call",
    saveContact: "Save contact",
    newTab: "(opens in a new tab)",
  },

  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy policy",
  },

  privacy: {
    metaTitle: "Privacy policy",
    metaDescription: "Privacy policy of piotrwesolowski.com.",
    h1: "Privacy policy",
    back: "Back to the card",
    sections: [
      { title: "Data controller", text: "The controller of personal data is Piotr Wesołowski. Contact: kontakt@piotrwesolowski.com." },
      { title: "What data I process", text: "Data you share by email, during a phone call or when booking a meeting (e.g. name, company name, email address, phone number, message)." },
      { title: "Purpose and legal basis", text: "Responding to enquiries and preparing offers — Art. 6(1)(b) GDPR (steps prior to entering into a contract) and Art. 6(1)(f) GDPR (legitimate interest in handling correspondence)." },
      { title: "Recipients", text: "Data may be shared with service providers working for this site: the hosting provider (Vercel) and Calendly when you book a call." },
      { title: "Analytics", text: "This site uses Vercel Web Analytics, which does not use cookies or identify users. Only aggregated, anonymous visit statistics are collected." },
      { title: "Retention", text: "I keep data for as long as needed to handle the correspondence and then for the limitation period of any potential claims." },
      { title: "Your rights", text: "You have the right to access, rectify and erase your data, to restrict processing, to data portability and to object. You may also lodge a complaint with the supervisory authority (in Poland: the President of the Personal Data Protection Office)." },
    ],
  },

  notFound: {
    title: "Page not found",
    text: "The page may have moved or the address contains a typo.",
    back: "Back to the home page",
  },
};
