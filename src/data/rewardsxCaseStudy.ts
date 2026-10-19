export const REWARDSX_VIDEOS = [
  {
    id: "demo-1",
    title: "Platform walkthrough",
    url: "https://www.youtube.com/embed/FbhBBl6fLmQ",
    watchUrl: "https://youtube.com/shorts/FbhBBl6fLmQ",
  },
  {
    id: "demo-2",
    title: "Admin workflows demo",
    url: "https://www.youtube.com/embed/_YIFZeLi114",
    watchUrl: "https://youtube.com/shorts/_YIFZeLi114?feature=share",
  },
] as const;

export const REWARDSX_META = {
  title: "RewardsX",
  subtitle: "Internal operations platform for a loyalty and rewards fintech",
  oneLiner:
    "Built and maintained the internal backbone that curates banking, merchant, and rewards data and runs earn/redeem ledger flows for a next-gen loyalty platform used by staff and consumer apps.",
  role: "Full-Stack Developer",
  timeline: "2024–2026",
  stack: ["Next.js", "Node.js", "PostgreSQL", "Firebase", "GCP", "Flutter"],
  team: "Engineering / product",
  liveUrl: "https://dev-brine.rewardsx.ca/signin",
  tags: ["FinTech", "Internal Tools", "RBAC", "Ledger", "GCP"],
} as const;

export const REWARDSX_PROBLEM = [
  "Manage banks, credit cards, merchants, offers, and rewards rules at scale",
  "Run approval workflows and role-based access for admins, data entry, and support",
  "Maintain a transaction ledger (earn, redeem, reverse) with integrity checks and downstream events",
  "Handle post-transaction ops (disputes, chargebacks)",
  "Integrate multiple geocoding providers for merchant location workflows",
  "Feed consumer apps (e.g. Orbiter POS) via secure APIs without exposing internal tooling",
] as const;

export const REWARDSX_CONTRIBUTIONS = [
  "Modular REST API with 40+ domain modules (banks, merchants, credit cards, ledger, RBAC, disputes, geocoding proxies)",
  "Admin dashboard on Next.js App Router for banking, merchants, transactions, RBAC, and security monitoring",
  "Permission-based access control (PBAC): Firebase auth, DB-driven roles/permissions, audit logs, anomaly detection",
  "Transaction ledger: earn/redeem/reverse flows, integrity hashing, merchant cashback pools, Pub/Sub events",
  "BFF layer: Next.js route handlers proxy to Express with JWT; split GCP service accounts for read vs write",
  "Database lifecycle: PostgreSQL with Sequelize, schema bootstrap, idempotent SQL migrations on startup",
  "CI/CD: GitHub Actions build, test, Docker to GCP Artifact Registry, deploy to GCP VM on push to dev",
  "Integrations: Firebase Admin, multi-geocoder proxies (OSM, HERE, Yelp, Mapbox), email, Sharp image processing",
] as const;

export const REWARDSX_FEATURES = [
  {
    title: "Banking and rewards catalog",
    description:
      "Manage banks, payment processors, card categories, reward rules, and third-party programs with approval workflows and imagery pipelines.",
  },
  {
    title: "Merchant and location intelligence",
    description:
      "Merchant records, offers, ads, MCC codes, and multi-provider geocoding with batch flows and map UI (Leaflet).",
  },
  {
    title: "Transaction ledger",
    description:
      "Earn, redeem, reverse, withdraw semantics with integrity checks, merchant pools, and event publishing.",
  },
  {
    title: "Enterprise-grade RBAC",
    description: "Role/permission slugs, user invitations, audit trails, and security dashboard for denial anomalies.",
  },
  {
    title: "Post-transaction operations",
    description: "Disputes and chargebacks tracking with dedicated APIs and admin views.",
  },
  {
    title: "Secure cross-system integration",
    description: "Orbiter and other services use shared API keys; staff use Firebase JWT with granular permissions.",
  },
] as const;

export const REWARDSX_CHALLENGES = [
  { challenge: "Complex RBAC", approach: "DB-driven permissions, middleware on every route, audit logs, anomaly monitoring" },
  { challenge: "Ledger correctness", approach: "Dedicated service layer, integrity hashing, Jest coverage, idempotent operations" },
  { challenge: "Many geocoding providers", approach: "API allocator pattern and proxy modules with SSRF allowlists" },
  { challenge: "Schema evolution in prod", approach: "Idempotent migrations in schema_migrations, run on startup" },
  { challenge: "Large admin surface area", approach: "Vertical slice modules (routes, controller, service, model) mirrored in frontend" },
] as const;

export const REWARDSX_IMPACT = [
  "Single source of truth for banking, merchant, and rewards data across internal and consumer systems",
  "Operational efficiency: support and data teams manage catalog and disputes in one place",
  "Security posture: granular PBAC, audit trails, and least-privilege GCP IAM for ledger operations",
  "Reliability: automated migrations, CI validation, and containerized deploys to GCP",
  "Scale-ready foundation: modular API and event-driven ledger for downstream consumers",
] as const;

export const REWARDSX_ECOSYSTEM = [
  { system: "Internal-BRN (BRINE)", role: "Internal ops: banking, merchants, ledger, RBAC, disputes" },
  { system: "Orbiter", role: "Consumer POS: QR scans, rewards calculation, mobile UX (Flutter + MongoDB)" },
] as const;
