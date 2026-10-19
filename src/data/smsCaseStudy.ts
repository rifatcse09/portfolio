export const SMS_META = {
  title: "Multi-Brand SMS Automation Platform",
  subtitle: "Production blasts with analytics that match Twilio",
  oneLiner:
    "Built a full-stack SMS marketing platform for a wellness brand: React dashboard on Cloudflare Pages, Worker API with queues, ActiveCampaign tag audiences, and 10DLC-compliant Twilio routing. Fixed analytics drift so replies and opt-outs matched Twilio Insights on a 2,383-contact blast.",
  role: "Full-Stack Engineer",
  timeline: "2025 to 2026",
  client: "Wellness brand (Spellsology deployment)",
  stack: ["React", "TypeScript", "Cloudflare Workers", "Twilio", "ActiveCampaign", "KV", "Queues"],
  liveUrl: "https://spellsology-26f.pages.dev",
  tags: [
    "SMS Marketing",
    "Twilio",
    "Cloudflare Workers",
    "React",
    "ActiveCampaign",
    "10DLC",
    "Marketing Automation",
  ],
} as const;

export const SMS_PROBLEM = [
  "Dashboard metrics did not match Twilio Insights after large sends, so teams could not trust reply and opt-out counts",
  "10DLC compliance and routing had to be correct per brand before scaling production blasts",
  "No reliable post-blast reconciliation: staff exported CSVs and compared Twilio manually after every campaign",
  "Multiple brands needed separate Twilio and ActiveCampaign configs without running separate admin tools",
  "Bulk SMS required queue-based sending, per-number status, and failure diagnostics, not one fire-and-forget API call",
] as const;

export const SMS_SOLUTION = [
  "Multi-brand admin: per-brand Twilio credentials, ActiveCampaign tags, and audience counts in one React dashboard",
  "Cloudflare Worker API with KV storage and Queue consumers for rate-safe, retry-friendly outbound SMS",
  "Twilio delivery webhooks plus inbound STOP handling to update per-phone status in near real time",
  "One-click Sync with Twilio to pull authoritative reply and opt-out totals after each blast",
  "Campaign detail views with failure diagnostics, retry for single numbers or full failed batch",
  "Timezone-aware scheduling, Gmail-style campaign list, and secure admin auth on all API routes",
] as const;

export const SMS_RESULTS = [
  "Reply count (33) and opt-out count (25) matched Twilio Insights exactly on a 2,383-contact production blast",
  "Roughly 80% delivery rate on the real campaign with clear visibility into failures and list hygiene",
  "Manual CSV reconciliation after every send replaced by one-click Twilio sync",
  "Marketing team runs multiple brands from one panel with 10DLC-compliant routing per brand",
  "Edge deployment on Cloudflare Pages + Workers for low-latency admin and scalable queue processing",
] as const;

export const SMS_BEFORE_AFTER = [
  {
    before: "Reply and opt-out counts drifted from Twilio after large blasts",
    after: "33 replies and 25 opt-outs matched Twilio Insights on a 2,383-contact send",
  },
  {
    before: "Post-blast reconciliation via manual CSV exports",
    after: "One-click Sync with Twilio on campaign detail",
  },
  {
    before: "Separate tools per brand for Twilio and ActiveCampaign",
    after: "Single multi-brand admin with per-brand config and tags",
  },
  {
    before: "Fire-and-forget bulk sends with weak failure visibility",
    after: "Queue-based sends with per-phone status, retries, and diagnostics",
  },
] as const;

export const SMS_FEATURES = [
  {
    title: "Multi-brand campaign admin",
    description:
      "Create, schedule, and filter campaigns per brand. Load audiences from ActiveCampaign tags without leaving the dashboard.",
  },
  {
    title: "Queue-based Twilio sending",
    description:
      "Cloudflare Queue workers dequeue each number, send via Twilio, and record delivery state in KV for live polling.",
  },
  {
    title: "Twilio sync and trusted analytics",
    description:
      "Sync with Twilio pulls authoritative reply and opt-out totals so dashboard numbers match Twilio Insights.",
  },
  {
    title: "Failure diagnostics and retry",
    description:
      "See why individual numbers failed, retry one contact or retry all failed in a batch after a blast.",
  },
  {
    title: "Inbound STOP and unsubscribe",
    description:
      "Webhook handlers process opt-outs and replies so lists stay compliant and analytics stay accurate.",
  },
  {
    title: "10DLC-ready brand setup",
    description:
      "Per-brand Twilio messaging configuration supports compliant US SMS routing for production marketing sends.",
  },
] as const;

export const SMS_TECH_HIGHLIGHTS = [
  "React 19 + TypeScript + Vite dashboard deployed on Cloudflare Pages",
  "Worker API: auth middleware, brand CRUD, campaign lifecycle, webhook endpoints",
  "ActiveCampaign REST integration for tag-based audience export before enqueue",
  "KV for campaign metadata and per-recipient status; Queues for outbound worker fan-out",
  "Twilio Programmable SMS with delivery status callbacks and inbound message routing",
  "Mock send mode for staging plus live mode for production blasts",
] as const;

export const SMS_WHY_HIRE = [
  "SMS at scale with queues, webhooks, and per-number traceability",
  "CRM integration (ActiveCampaign tags) wired into campaign creation",
  "Analytics clients trust because numbers reconcile with Twilio",
  "Edge deployment on Cloudflare without managing servers",
  "Full-stack delivery from React UI through Worker API to third-party SMS APIs",
] as const;

export const SMS_ARCHITECTURE = `Marketing admin (React on Cloudflare Pages)
              |
              v
    Cloudflare Worker API (auth, brands, campaigns)
              |
     +--------+---------+
     |                  |
     v                  v
ActiveCampaign      Cloudflare Queue
(tag audiences)          |
                         v
                   Twilio SMS API
                         |
              delivery + inbound webhooks
                         |
                         v
              KV status + dashboard analytics` as const;
