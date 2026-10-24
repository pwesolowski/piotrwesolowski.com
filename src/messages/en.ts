import type { Messages } from "./pl";

/** English copy. Must match the shape of pl.ts (enforced by the type). */
export const en: Messages = {
  meta: {
    title: "AI Product Engineer — an AI engineer who understands business | Piotr Wesołowski",
    description:
      "Piotr Wesołowski, AI Product Engineer. AI implementation from business problem to a working system: AI audit, agents and Claude Skills for document automation, MCP integration with your business system.",
    ogTagline: "I implement AI that genuinely takes work off your company's plate",
  },

  nav: {
    services: "Services",
    process: "How we work",
    work: "Case studies",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    menu: "Menu",
    home: "Home",
    switchLanguage: "Wersja polska",
    toggleTheme: "Toggle light/dark theme",
    skipToContent: "Skip to content",
  },

  cta: {
    book: "Book a 30-min call",
    bookShort: "Book a call",
    seeWork: "See case studies",
    newTab: "(opens in a new tab)",
  },

  hero: {
    role: "AI Product Engineer",
    h1: "AI Product Engineer — an AI engineer who understands business",
    lead: "I implement AI that genuinely takes work off your company's plate.",
    sub: "I'm a software engineer, not an AI marketer. I start with the business problem and finish with a working system that delivers a measurable result.",
    photoAlt: "Piotr Wesołowski",
  },

  trust: {
    label: "I work with companies in",
    clientsLabel: "Trusted by",
  },

  services: {
    eyebrow: "Services",
    title: "Three ways to put AI to work for you",
    description:
      "Start with an audit or go straight to a specific implementation. Every engagement ends with something that works, not a slide deck.",
    more: "Service details",
    items: {
      audit: {
        title: "AI audit",
        short: "I find where AI will pay off in your company — and where it isn't worth it.",
        tags: ["processes", "priorities", "roadmap"],
        intro:
          "An {keyword} is a sensible first step before you spend money on implementation. Together we go through your processes and decide where AI will genuinely relieve your people, and where you should stick with what already works.",
        forWhom: [
          "Companies that feel they \"should do something with AI\" but don't know where to start.",
          "Leadership teams who want to decide based on facts, not vendor demos.",
          "Teams that spend a lot of time on manual work with documents and data.",
        ],
        deliverables: [
          "A process map showing where AI makes sense and where it doesn't.",
          "A prioritized list: from quick wins to larger projects.",
          "Effort and risk estimates for the selected ideas.",
          "Tooling and architecture recommendations, with no vendor lock-in.",
        ],
        steps: [
          { title: "Intro call", text: "I learn about your company, goals and current tools." },
          { title: "Workshop and interviews", text: "I talk to the people who do the work every day." },
          { title: "Analysis", text: "I assess processes, data and integration options." },
          { title: "Report and review", text: "I present findings and a plan you can execute with me or without me." },
        ],
      },
      agents: {
        title: "AI agents and Claude Skills",
        short: "I automate document-heavy processes: delivery notes, invoices, e-invoicing (KSeF), orders. Less retyping, fewer errors.",
        tags: ["delivery notes", "invoices", "KSeF", "orders"],
        intro:
          "{Keyword} takes retyping data from delivery notes, invoices and orders off your team. I build agents and Claude Skills that read documents, check them and put the data where it belongs — people only approve the exceptions.",
        forWhom: [
          "Companies where someone retypes data from documents every day.",
          "Accounting and admin teams handling invoices, delivery notes and KSeF.",
          "Companies that want automation with a human in control of the result.",
        ],
        deliverables: [
          "A working agent or set of Claude Skills tailored to your documents.",
          "Integration with wherever the data needs to go (system, spreadsheet, database).",
          "Control mechanisms: validation and an exception queue for approval.",
          "Documentation and team training.",
        ],
        steps: [
          { title: "Pick a process", text: "We start with the one process that hurts the most." },
          { title: "Prototype on your documents", text: "I measure accuracy on real examples." },
          { title: "Rollout in your company", text: "Integration, validation, monitoring and error handling." },
          { title: "Support and growth", text: "Fixes after the first weeks, then the next processes." },
        ],
      },
      mcp: {
        title: "MCP integration with your system",
        short: "I connect Claude to your company data so you can talk to it in plain language.",
        tags: ["MCP", "Claude", "company data"],
        intro:
          "{Keyword} through the Model Context Protocol (MCP) lets you ask Claude about orders, balances or documents the way you'd ask a colleague. I build an MCP server that gives AI secure, controlled access to your system.",
        forWhom: [
          "Companies with their own system or database where answers are hard to get quickly.",
          "Software vendors who want to add AI to their product.",
          "Teams waiting on reports from the one \"spreadsheet person\".",
        ],
        deliverables: [
          "An MCP server for your system with clearly defined permissions.",
          "A set of tools (queries, actions) matched to your team's real questions.",
          "Claude configuration for your users.",
          "Technical documentation and access logging.",
        ],
        steps: [
          { title: "Data scope", text: "We agree what AI may access and what it may not." },
          { title: "Tool design", text: "I design operations that match the team's questions." },
          { title: "Build and test", text: "I build the MCP server and test it on real scenarios." },
          { title: "Launch", text: "Rollout, training and post-launch support." },
        ],
      },
    },
  },

  servicePage: {
    eyebrow: "Service",
    forWhom: "Who it's for",
    deliverables: "What you get",
    collaboration: "How we work together",
    price: "Price",
    ctaTitle: "Let's talk about your case",
    ctaText: "30 minutes, no strings attached. Tell me what hurts and I'll tell you honestly whether and how AI can help.",
    otherServices: "Other services",
    backToServices: "All services",
  },

  process: {
    eyebrow: "How we work",
    title: "The process",
    description: "A simple process where at every stage you know what you get and what it costs.",
    steps: [
      { title: "Call", text: "30 minutes to understand the problem and check whether I can help." },
      { title: "Audit", text: "Process and data analysis. We pick what will have the biggest impact." },
      { title: "Implementation", text: "I build and launch the solution in your environment." },
      { title: "Support", text: "Monitoring, fixes and improvements after launch." },
    ],
  },

  work: {
    eyebrow: "Case studies",
    title: "Problem → solution → result",
    description: "Selected implementations. I write up the technical details on pioter.ai.",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    readMore: "Read more on pioter.ai",
    draft: "Draft — visible locally only",
    moreOnBlog: "More case studies and content on pioter.ai",
  },

  about: {
    eyebrow: "About",
    title: "An engineer who implements, not just advises",
    paragraphs: [
      "I've worked in IT since 2010 as a software engineer, team lead and engineering manager. I build Java and Node.js backends, TypeScript, frontend and PWAs. I deploy on AWS and on EU-based servers (OVH). I know what makes a system succeed beyond the demo: performance, security, maintenance.",
      "I develop my own industry SaaS. What I offer clients, I test on my own product first.",
    ],
    stackLabel: "Technologies",
    stack: ["Java", "Node.js", "TypeScript", "AWS", "OVH", "Frontend / PWA", "Claude", "MCP"],
    more: "How I work",
    photoAlt: "Piotr Wesołowski",
  },

  aboutPage: {
    metaTitle: "About — AI Product Engineer",
    metaDescription:
      "What an AI Product Engineer is and how I work: from business problem, through implementation, to a measurable result. Piotr Wesołowski — an AI engineer who understands business.",
    eyebrow: "About",
    h1: "AI Product Engineer — an AI engineer who understands business",
    intro:
      "I'm Piotr Wesołowski. As an AI Product Engineer I combine three things that are usually split between different people: understanding the business problem, designing the product and building a system that genuinely works in the business.",
    sections: [
      {
        title: "What is an AI Product Engineer?",
        paragraphs: [
          "An engineer who doesn't start with the model, but with the question: what business problem are we solving and how will we measure success? AI is the tool, not the goal.",
          "In practice that means one person responsible for the whole chain: from talking to the people who do the work, through architecture and integrations, to rollout, monitoring and improvement.",
        ],
      },
      {
        title: "How I work: end to end",
        paragraphs: [
          "Business problem. I start with the process and the people, not the technology. We define what currently costs time or money and how we'll measure it.",
          "Implementation. I build the solution on your data and in your environment, with a human in the loop where it matters.",
          "Measurable result. After launch we check the outcome against what we agreed at the start and decide on next steps.",
        ],
      },
      {
        title: "Experience",
        paragraphs: [
          "I've worked in IT since 2010: as a software engineer, team lead and engineering manager. Technologies: Java, Node.js, TypeScript, frontend and PWAs; infrastructure: AWS and EU-based servers (OVH). I've led teams and designed systems where performance, code quality and scalability matter.",
          "I develop my own industry SaaS. I use the same solutions every day that I implement for clients.",
          // TODO: add industries and SaaS name (if you want to disclose them).
        ],
      },
      {
        title: "What to expect from me",
        paragraphs: [
          "Honesty: if AI doesn't make sense for a process, I'll say so on the first call.",
          "Substance: instead of a presentation you get a working system and documentation.",
          "Independence: I choose tools to fit the problem, and the solution stays yours.",
        ],
      },
    ],
    linksTitle: "Find me online",
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "What clients say",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    // TODO: review and adjust — these are drafts for you to edit.
    items: [
      {
        q: "Is my data safe? What about GDPR?",
        a: "We agree up front which data goes to the model and which doesn't. I use services that don't train models on customer data and keep system access to the necessary minimum. If required, the solution can run on servers in the European Union. Where needed, we sign a data processing agreement.",
      },
      {
        q: "How much do the AI models cost to run?",
        a: "Model costs depend on the number and size of documents or queries processed. During the audit or prototype I estimate them on your data before you decide to roll out.",
      },
      {
        q: "How long does implementation take?",
        a: "It depends on scope. We start with one process and a prototype on real data, and set the full timeline after the audit.",
      },
      {
        q: "Do I need an IT department?",
        a: "No. I take care of the technical side; from your side I need someone who knows the process and access to the systems we integrate with.",
      },
      {
        q: "Do you work remotely or on-site?",
        a: "Mostly remotely. Workshops and kick-off meetings can happen on-site.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's start with a 30-minute call",
    description:
      "Book a slot in my calendar or write a few sentences about your company and the problem. I'll reply personally.",
    orEmail: "Prefer email? Write to",
    form: {
      title: "Send a message",
      name: "Name",
      company: "Company",
      email: "Email",
      message: "Message",
      messagePlaceholder: "What does your company do and what would you like to improve?",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you! Your message has arrived. I'll get back to you as soon as I can.",
      invalid: "Please provide your name, a valid email and a message.",
      error: "The message couldn't be sent. Please try again or email me directly.",
      notConfigured: "The form isn't active yet. Please email me directly — I'll reply just as fast.",
      privacy: "By submitting the form you accept the",
      privacyLink: "privacy policy",
    },
  },

  footer: {
    tagline: "AI Product Engineer — AI implementations for businesses.",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    blog: "Blog and videos: pioter.ai",
  },

  privacy: {
    metaTitle: "Privacy policy",
    metaDescription: "Privacy policy of piotrwesolowski.com.",
    h1: "Privacy policy",
    sections: [
      { title: "Data controller", text: "The controller of personal data is Piotr Wesołowski. Contact: kontakt@piotrwesolowski.com." },
      { title: "What data I process", text: "Data provided in the contact form (name, company name, email address, message) and data from email correspondence." },
      { title: "Purpose and legal basis", text: "Responding to enquiries and preparing offers — Art. 6(1)(b) GDPR (steps prior to entering into a contract) and Art. 6(1)(f) GDPR (legitimate interest in handling correspondence)." },
      { title: "Recipients", text: "Data may be shared with service providers working for this site: the hosting provider (Vercel), the contact form provider and Calendly when you book a call." },
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
