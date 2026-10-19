export type ServicePage = {
  slug: string;
  nav: string;
  title: string;
  lede: string;
  forWhom: string;
  includes: string[];
  proof: { href: string; label: string; detail: string }[];
  productionNote?: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "ai-backends",
    nav: "AI Backends",
    title: "AI backends for products that have to stay up",
    lede: "Model calls, workers, and queues live inside your API. The feature keeps working when the model is slow, wrong, or rate-limited.",
    forWhom: "SaaS teams adding AI to an existing product, not a chat demo.",
    includes: [
      "Model APIs with timeouts, retries, and usage limits",
      "Background workers and queues so the request path stays fast",
      "Auth and tenancy so one customer's data never leaks into another's",
      "Deploys on GCP, AWS, or Cloudflare, with a handoff your team can run",
    ],
    proof: [
      {
        href: "/projects/bridgeopsone",
        label: "BridgeOpsOne",
        detail: "OpenAI-graded training simulators, entitlements, and a security pass before launch.",
      },
    ],
    productionNote:
      "Production architecture is part of this work: Postgres, auth, multi-tenant APIs, and a deploy your team can own after handoff.",
  },
  {
    slug: "saas-integrations",
    nav: "SaaS Integrations",
    title: "SaaS integrations that match the business",
    lede: "Stripe, CRM, Twilio, and webhooks, with auth, idempotency, and retries inside your app. Not a one-off Zap that breaks on the second failure.",
    forWhom: "Product teams connecting billing, messaging, or a CRM to the system they already run.",
    includes: [
      "Webhook receivers that ignore duplicates and record failures",
      "OAuth and API keys stored and rotated with the rest of the app",
      "Billing, CRM, and messaging flows that share one customer record",
      "A staging path so you can test the vendor before production traffic",
    ],
    proof: [
      {
        href: "/projects/sms-platform",
        label: "Multi-brand SMS platform",
        detail: "Twilio routing and CRM tag audiences, with analytics reconciled to Twilio Insights.",
      },
      {
        href: "/projects/rewardsx",
        label: "RewardsX",
        detail: "Internal fintech operations: roles, ledgers, and the admin tools around them.",
      },
    ],
  },
  {
    slug: "rag-and-agents",
    nav: "RAG & Agents",
    title: "RAG and agents grounded in your systems",
    lede: "Retrieval and tool-using agents that answer from your documents and call your existing APIs. The model does not invent the source of truth.",
    forWhom: "Teams that want document answers or an agent, and already have docs, a database, or an API.",
    includes: [
      "Ingestion and retrieval over the documents you already keep",
      "Answers that cite the source instead of a free-form guess",
      "MCP or tool calls into your current services",
      "The same production limits as any other backend: auth, logs, and a way to turn it off",
    ],
    proof: [
      {
        href: "/projects/docs-rag-mcp",
        label: "Docs RAG MCP",
        detail: "A document RAG system with an MCP server so an agent can use the same retrieval.",
      },
    ],
  },
];

export const servicePath = (slug: string) => `/services/${slug}`;
