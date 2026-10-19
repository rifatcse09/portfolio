export type ClientFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const CLIENT_FAQ: ClientFaqItem[] = [
  {
    id: "pricing-models",
    question: "What are your pricing models for custom software projects?",
    answer:
      "I offer fixed-price milestones for well-defined scope (MVP features, integrations, admin modules) and hourly contracts for ongoing or evolving work. Small tasks often start from $500 to $2,000. SaaS MVPs and custom platforms typically range from $5,000 to $25,000+ depending on scope. Enterprise ERP, fintech, or multi-module systems are quoted after a discovery call. All contracts can run through Upwork or Fiverr escrow, or direct invoice for repeat clients.",
  },
  {
    id: "hourly-rate",
    question: "What is your hourly rate?",
    answer:
      "Hourly rates vary by project complexity, timeline, and engagement length. Long-term or retainer work is priced lower than short urgent sprints. I share exact rates on Upwork and in proposals after understanding your stack, scope, and deadline. Book a free 30-minute call to get a tailored estimate.",
  },
  {
    id: "project-timeline",
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. API integrations or single modules: 1 to 3 weeks. SaaS MVP with auth, dashboard, and core workflows: 6 to 12 weeks. ERP, CRM, or fintech internal platforms: 3 to 6+ months. I break work into 1 to 2 week milestones with staging demos so you see progress early and can adjust scope without surprises.",
  },
  {
    id: "development-process",
    question: "What is your development process from hire to launch?",
    answer:
      "Discovery call, written proposal with milestones, agreement via Upwork/Fiverr or direct contract, then agile sprints with code reviews and staging previews. You get regular updates (daily or weekly), demo calls at each milestone, and full handoff with documentation, deployment support, and optional maintenance.",
  },
  {
    id: "how-to-start",
    question: "How do I start a project with you?",
    answer:
      "Choose any path: hire on Upwork, order a Fiverr gig, book a free Calendly call, or email rifatul.dev@gmail.com with your brief. Share goals, existing codebase (if any), deadline, and budget range. I reply within 24 hours with next steps or clarifying questions.",
  },
  {
    id: "marketplace-hire",
    question: "Can I hire you through Upwork or Fiverr?",
    answer:
      "Yes. I am Top Rated on Upwork with 100+ completed projects and also active on Fiverr. Marketplace hire gives you escrow protection, reviews, and a familiar workflow. Your project gets the same delivery standard whether you hire via marketplace or direct contract.",
  },
  {
    id: "project-types",
    question: "What types of projects do you build?",
    answer:
      "I take web and SaaS products, ecommerce, mobile apps, workflow automation, and API integrations, from a raw brief or an MVP through production. AI work covers model APIs, RAG, agents, and industry workflows inside the product. I also join an existing codebase for the next release. Case studies cover a document RAG/MCP system, an AI SaaS launch, a fintech ops platform, and an SMS product with Twilio and CRM integrations.",
  },
  {
    id: "tech-stack",
    question: "Which technologies do you use?",
    answer:
      "AI and product backends: Node.js, NestJS, TypeScript, PostgreSQL, Redis, queues, and OpenAI or Anthropic APIs. Retrieval and agents sit on that same stack, often with MCP. Integrations use REST, webhooks, and OAuth. Production runs on Google Cloud, AWS, Cloudflare Workers, Docker, and CI. Laravel and Next.js show up when the existing product already uses them.",
  },
  {
    id: "communication",
    question: "How do you communicate and what timezone are you in?",
    answer:
      "Based in Dhaka, Bangladesh (GMT+6), available for worldwide remote work. I work async-friendly with Slack, email, Upwork messages, or video calls. Overlap with US and EU hours is possible for standups and demos. English is my primary client language.",
  },
  {
    id: "post-launch",
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes deployment handoff and documentation. Optional post-launch support covers bug fixes, monitoring, feature iterations, and DevOps. Many clients continue on hourly retainers or milestone-based enhancement sprints.",
  },
  {
    id: "existing-code",
    question: "Can you work with an existing codebase or team?",
    answer:
      "Absolutely. I regularly join existing Laravel, Node.js, or Next.js codebases, fix technical debt, add features, and integrate with in-house or offshore teams. I follow your Git workflow, code standards, and CI/CD pipeline.",
  },
  {
    id: "nda-ip",
    question: "Will you sign an NDA and who owns the code?",
    answer:
      "NDAs are standard for client work. Upon full payment, you own the custom code and deliverables we build for your project. Third-party libraries remain under their respective licenses. Marketplace and direct contracts both support IP assignment terms.",
  },
];
