export const SITE = {
  name: "MD Rifatul Islam",
  domain: "rifatul.site",
  title: "AI backend · SaaS integrations · RAG & agents",
  tagline:
    "Model APIs, SaaS integrations, RAG, and agents, built to run in production.",
  email: "rifatul.dev@gmail.com",
  location: "Dhaka, Bangladesh",
  timezone: "GMT+6",
  calendly: "https://calendly.com/rifatcse09/30min",
  cv: "/cv.pdf",
  availability: "Available for new projects",
  upworkBadge: "Top Rated on Upwork",
  links: {
    github: "https://github.com/rifatcse09",
    linkedin: "https://www.linkedin.com/in/rifatcse09/",
    medium: "https://medium.com/@rifatcse09",
    facebook: "https://www.facebook.com/",
    upwork: "https://www.upwork.com/freelancers/~019c2ac44b9c3c8ae5",
    fiverr: "https://www.fiverr.com/s/bdV1lNY",
  },
} as const;

export const STATS = [
  { value: "12+", label: "Years", detail: "Shipping since 2013" },
  { value: "100+", label: "Projects", detail: "Delivered for clients" },
  { value: "Top Rated", label: "Upwork", detail: "Verified freelancer" },
] as const;

export const PROJECT_DOMAINS = [
  { label: "AI Backends", detail: "Model APIs, workers, evals" },
  { label: "SaaS Integrations", detail: "Billing, CRM, messaging, webhooks" },
  { label: "RAG & Agents", detail: "Retrieval, MCP, document AI" },
  { label: "Production Architecture", detail: "Auth, queues, multi-tenant APIs" },
  { label: "SaaS Platforms", detail: "MVP through production scale" },
  { label: "FinTech Ops", detail: "Ledgers, RBAC, internal tools" },
  { label: "E-Commerce", detail: "Multi-vendor, Shopify apps" },
  { label: "ERP & CRM", detail: "Ops workflows and admin systems" },
  { label: "Data Platforms", detail: "ETL, scraping, normalization" },
  { label: "EdTech", detail: "Learning and admin portals" },
  { label: "Messaging", detail: "SMS, chat, support automation" },
  { label: "IoT & Smart Home", detail: "Device and building integrations" },
] as const;

export const HIRE_BENEFITS = [
  {
    title: "AI backends, not chat demos",
    description:
      "Model calls, retries, queues, and tool use live inside your API. The product keeps working when the model is slow or wrong.",
  },
  {
    title: "SaaS integrations that match the business",
    description:
      "Stripe, HubSpot, Salesforce, Twilio, and custom webhooks with auth, idempotency, and failure handling. Not a one-off Zap.",
  },
  {
    title: "RAG and agents on your data",
    description:
      "Retrieval, MCP, document pipelines, and agents that call your existing services. Grounded in what you already run.",
  },
  {
    title: "Architecture meant for production",
    description:
      "NestJS or Node, Postgres, GCP, AWS, or Cloudflare. Auth, tenancy, CI, and handoff so your team can own it.",
  },
] as const;

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    description: "30-min free call to understand your goals, scope, timeline, and budget.",
  },
  {
    step: "02",
    title: "Proposal & agreement",
    description: "Milestone plan via Upwork/Fiverr or direct contract. Fixed price or hourly.",
  },
  {
    step: "03",
    title: "Build & iterate",
    description: "Agile sprints with demos, code reviews, and staging previews you can test.",
  },
  {
    step: "04",
    title: "Launch & support",
    description: "Deployment, documentation, handoff, and optional ongoing maintenance.",
  },
] as const;
