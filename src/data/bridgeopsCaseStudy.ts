export const BRIDGEOPS_VIDEOS = [
  {
    id: "how-it-works",
    title: "How BridgeOpsOne Works",
    url: "https://www.youtube.com/embed/videoseries?list=PLIsurhPgXcXsg29DqlBXaIMehnV6bPka4",
    watchUrl: "https://www.youtube.com/playlist?list=PLIsurhPgXcXsg29DqlBXaIMehnV6bPka4",
  },
] as const;

export const BRIDGEOPS_META = {
  title: "BridgeOpsOne",
  subtitle: "AI-powered incident communication platform for IT operations teams",
  oneLiner:
    "Led platform security assessment and delivery for a dual-product AI SaaS: Chrome extension for real-time incident updates, Academy with OpenAI-graded simulators, config-driven entitlements, and a subscription database ready for Stripe.",
  role: "Platform Security & Full-Stack Engineer",
  timeline: "June 2026, ongoing",
  stack: [
    "Chrome Extension (Plasmo)",
    "React 19",
    "Node.js",
    "Firebase",
    "Firestore",
    "OpenAI",
    "Render",
    "Stripe (planned)",
  ],
  team: "Solo contractor + client founder",
  liveUrl: "https://bridgeopsone-academy.web.app",
  marketingUrl: "https://bridgeopsone.com",
  chromeWebStoreUrl:
    "https://chromewebstore.google.com/detail/bridgeopsone/aioldhkomfbnaonfcobbfabpejammnoc",
  tags: ["AI SaaS", "Security Assessment", "Chrome Extension", "OpenAI", "Firebase", "Subscriptions"],
} as const;

export const BRIDGEOPS_PROBLEM = [
  "Two live products (Chrome extension + Academy website) with separate Firebase projects and auth systems. Same email did not mean same account.",
  "Critical security gaps before launch: client key in extension bundle, unauthenticated OpenAI grading endpoints, permissive CORS",
  "No server-driven plan schema. Free-tier limits were hardcoded and bypassable from the UI.",
  "AI cost exposure: anonymous users could trigger unlimited OpenAI calls on grading and generation routes",
  "Launch deadline (July 6, 2026) with Chrome Web Store review, pentest follow-ups, and a post-launch Stripe roadmap",
  "Business requirement: two optional subscriptions (AI Tool + Academy) on one account, not one bundled plan",
] as const;

export const BRIDGEOPS_CONTRIBUTIONS = [
  "M1 security assessment: 20 findings (3 Critical, 7 High), full architecture map, prioritized remediation through launch and post-launch phases",
  "Phase A: removed client key from extension; Google OAuth required on all AI routes; strict CORS; Firebase auth on Academy grading; OpenAI test endpoint removed; production smoke-tested on Render + Firebase Hosting",
  "Phase B: config-driven plan schema (`planConfig.js`), `GET /api/users/me` with usage/limits, email-based anti-rotation for free tier, Google token audience validation, OpenAI output token cap (1024)",
  "Phase C: Chrome Web Store launch UI with account header, Starter badge, usage counter, Visit Academy link, and prompt-injection hardening on backend",
  "Phase D: Firestore plan catalog (7 plans, 10 feature keys), dual-product entitlements (`aiPlan` + `academyPlan`), comparison matrix API for bridgeopsone.com pricing page, user migration scripts",
  "Documented post-launch roadmap (Phases E to I): Stripe checkout, extension billing UI (links only), Academy lab gates, Microsoft login, Firebase merge",
] as const;

export const BRIDGEOPS_FEATURES = [
  {
    title: "AI incident communication (Chrome extension)",
    description:
      "Side-panel tool generates customer-safe incident updates, leadership summaries, and timeline entries via OpenAI on a secured Render backend with per-user rate limits.",
  },
  {
    title: "Academy simulators with AI grading",
    description:
      "Communication, audio, and root-cause simulators. OpenAI grades written responses against scenario rubrics; progress saved to Firestore after authenticated submit.",
  },
  {
    title: "Dual-product subscription model",
    description:
      "Separate AI Tool and Academy plans on one account. Guest gets 20 AI generations/month and 5 of 25 labs; paid tiers defined in Firestore for admin editing without redeploy.",
  },
  {
    title: "Server-enforced entitlements",
    description:
      "All limits enforced on backend only: plan config, usage counters, email anti-rotation, and 403 at limit with upgrade URL pointing to bridgeopsone.com (no payment in extension).",
  },
  {
    title: "Security-first launch hardening",
    description:
      "Fail-closed auth, strict Origin checks, deny-all Firestore rules (Admin SDK only), pentest remediations for identity rotation and token audience validation.",
  },
  {
    title: "Structured delivery with client reports",
    description:
      "Phased rollout with PDF work reports, smoke-test checklists, and sign-off from security assessment through subscription database.",
  },
] as const;

export const BRIDGEOPS_CHALLENGES = [
  {
    challenge: "Split identity (Extension OAuth vs Firebase UID)",
    approach: "Documented dual-system architecture; deferred merge to Phase I; enforced limits per product independently until unification",
  },
  {
    challenge: "OpenAI cost abuse via open endpoints",
    approach: "Require auth on grade/generate; remove test routes; per-user + IP rate limits; max output tokens; client key removed from bundle",
  },
  {
    challenge: "Free-tier bypass via new Google accounts",
    approach: "Email-based usage tracking in `emailUsage` collection; verified-email requirement; server-side monthly counters",
  },
  {
    challenge: "Two products, one account, two Stripe subs",
    approach: "Phase D schema: `aiPlan` + `academyPlan` + `stripeSubscriptionIds`; merged entitlements resolver; comparison matrix for pricing page",
  },
  {
    challenge: "Launch without breaking existing store users",
    approach: "Phased deploy: secure backend first, then store extension update; documented expected 401 for old builds until Phase C publish",
  },
] as const;

export const BRIDGEOPS_IMPACT = [
  "Platform secured for July 6 launch: anonymous AI abuse blocked, secrets removed from client bundle, production APIs smoke-tested",
  "Server-driven plans replace hardcoded limits. Extension and pricing page read from same Firestore catalog.",
  "Clear roadmap from assessment through subscription database; client has delivery reports for each phase",
  "Dual-product business model implemented in data layer before Stripe, ready for Phase E checkout on bridgeopsone.com",
  "Academy live with AI-graded training simulators; extension backend enforces Starter tier with upgrade path to paid plans",
  "Chrome extension published on Chrome Web Store for NOC, SOC, and data center operations teams",
] as const;

export const BRIDGEOPS_ECOSYSTEM = [
  { system: "Chrome Extension (AI Tool)", role: "Incident updates and timeline generation via OpenAI; Google OAuth; Chrome Web Store" },
  { system: "Academy (bridgeopsone-academy.web.app)", role: "AI-graded communication simulators, progress tracking, Firebase Auth" },
  { system: "Extension API (Render)", role: "Generate, usage, plans at bridgeopsone-backend.onrender.com" },
  { system: "Simulator API (Render)", role: "Grade, sync-profile, plans at bridgeopsone-simulator-api.onrender.com" },
  { system: "Pricing (bridgeopsone.com)", role: "Marketing and future Stripe checkout; Academy links here for upgrades" },
] as const;

export const BRIDGEOPS_SECURITY_FINDINGS = [
  { severity: "Critical", count: 3, examples: "Client key in extension, unauthenticated grading, public OpenAI test endpoint" },
  { severity: "High", count: 7, examples: "Loose CORS, auth bypass paths, profile sync URL, token in localStorage" },
  { severity: "Medium", count: 8, examples: "No plan enforcement, client-only limits, missing rules in git" },
  { severity: "Low", count: 2, examples: "Documentation drift, duplicate CORS entry" },
] as const;
