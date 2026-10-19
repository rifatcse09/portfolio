import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScreenshotModal } from "@/components/ScreenshotModal";
import { ExternalLink, Github, Images, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project1.png";
import reelflixHero from "@/assets/reelflix-main.png";
import reelflixDashboard from "@/assets/reelflix/dashboard.png";
import reelflixSubscriptions from "@/assets/reelflix/subscriptions.png";
import reelflixAnalytics from "@/assets/reelflix/analytics.png";
import unimartHero from "@/assets/unimart/hero.png";
import unimartCategories from "@/assets/unimart/categories.png";
import unimartRecommended from "@/assets/unimart/recommended.png";
import unimartClearance from "@/assets/unimart/clearance.png";
import flatBillLogin from "@/assets/flat-bill/login.png";
import flatBillDashboard from "@/assets/flat-bill/super_admin_dashboard.png";
import flatBillBuildings from "@/assets/flat-bill/super_admin_buildings.png";
import flatBillBills from "@/assets/flat-bill/bills.png";
import flatBillPayments from "@/assets/flat-bill/payments.png";
import flatBillAdjustments from "@/assets/flat-bill/adjustments.png";
import storeFlowDashboard from "@/assets/store-flow/dashboard.png";
import storeFlowTrigger from "@/assets/store-flow/trigger.png";
import storeFlowConnect from "@/assets/store-flow/connect-mailchimp.png";
import storeFlowWebhook from "@/assets/store-flow/custom-webhook.png";
import storeFlowMapping from "@/assets/store-flow/data-mapping.png";
import storeFlowCondition from "@/assets/store-flow/condition.png";
import kitchenflowMain from "@/assets/kitchenflow-main.png";
import docsRagMcpChat from "@/assets/docs-rag-mcp/chat-interface.png";
import smsDashboard from "@/assets/sms-platform/dashboard.png";
import smsCampaigns from "@/assets/sms-platform/campaigns.png";
import smsBrands from "@/assets/sms-platform/brands.png";
import smsAudienceTag from "@/assets/sms-platform/audience-tag.png";
import smsCreateCampaign from "@/assets/sms-platform/create-campaign.png";
import smsScheduleCampaign from "@/assets/sms-platform/schedule-campaign.png";
import smsAnalytics from "@/assets/sms-platform/analytics.png";
import smsCampaignDetail from "@/assets/sms-platform/campaign-detail.png";
import smsTwilioTotals from "@/assets/sms-platform/twilio-totals.png";
import smsSettings from "@/assets/sms-platform/settings.png";
import gomDashboard from "@/assets/gom/dashboard.png";
import gomLogin from "@/assets/gom/login.png";
import gomOrderList from "@/assets/gom/order-list.png";
import gomPurchaseSettle from "@/assets/gom/purchase-settle.png";
import gomBillingStatements from "@/assets/gom/billing-statements.png";
import gomFinancialLedger from "@/assets/gom/financial-ledger.png";
import gomCategoryList from "@/assets/gom/category-list.png";
import rewardsxBanking from "@/assets/rewardsx/banking-dashboard.png";
import bridgeopsAcademy from "@/assets/bridgeops/communications-simulator.png";
import BrowserFrame from "./BrowserFrame";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: { src: string; label: string }[];
  technologies: string[];
  features: string[];
  challenges: string;
  solution: string;
  liveUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  githubFrontendUrl?: string;
  category: "Full-Stack" | "Backend";
  track: "AI & Automation" | "Client Solutions" | "Products & Experiments" | "FinTech & Enterprise";
  role: string;
  caseStudyUrl?: string;
  chromeWebStoreUrl?: string;
};

const projects: Project[] = [
  {
    id: 11,
    title: "BridgeOpsOne AI Incident Platform",
    description:
      "Security assessment and delivery for an AI SaaS: Chrome extension for incident communication, Academy with OpenAI-graded simulators, config-driven entitlements, and dual-product subscription schema.",
    image: bridgeopsAcademy,
    images: [{ src: bridgeopsAcademy, label: "Academy Communications Simulator" }],
    technologies: [
      "Chrome Extension",
      "Plasmo",
      "React 19",
      "Node.js",
      "Firebase",
      "Firestore",
      "OpenAI",
      "Render",
      "Stripe (planned)",
    ],
    features: [
      "M1 assessment: 20 security findings, architecture map, phased remediation roadmap",
      "Phase A to D: auth hardening, plan schema, Chrome Web Store launch, Firestore subscription catalog",
      "AI Tool: incident updates via OpenAI with server-enforced Starter limits (20/mo)",
      "Academy: communication simulators with Firebase auth + OpenAI grading",
      "Dual subscriptions: separate AI Tool + Academy plans on one account",
      "Post-launch proposal: Stripe, billing UI, Microsoft login, Firebase merge (Phases E to I)",
    ],
    challenges:
      "Live AI platform with split Firebase identity, unauthenticated OpenAI endpoints, and a July 6 launch deadline. Needed security remediation without rebuilding the product.",
    solution:
      "Delivered milestone-based assessment through subscription database: removed client secrets, enforced auth on all AI routes, config-driven entitlements, Firestore plan catalog for bridgeopsone.com pricing, and scoped post-launch Stripe roadmap.",
    category: "Full-Stack",
    track: "AI & Automation",
    role: "Platform Security & Full-Stack Engineer",
    liveUrl: "https://bridgeopsone-academy.web.app",
    chromeWebStoreUrl:
      "https://chromewebstore.google.com/detail/bridgeopsone/aioldhkomfbnaonfcobbfabpejammnoc",
    caseStudyUrl: "/projects/bridgeopsone",
  },
  {
    id: 10,
    title: "RewardsX BRINE Internal Ops Platform",
    description:
      "Full-stack internal operations platform for a loyalty and rewards fintech. Manages banks, merchants, offers, RBAC, and a transaction ledger that powers consumer POS apps through secure APIs on GCP.",
    image: rewardsxBanking,
    images: [{ src: rewardsxBanking, label: "Banking and credit cards admin" }],
    technologies: [
      "Next.js 15",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Firebase",
      "GCP Pub/Sub",
      "Docker",
      "Terraform",
      "Mantine",
      "TypeScript",
    ],
    features: [
      "40+ REST domain modules: banks, merchants, ledger, RBAC, disputes, geocoding",
      "PBAC with Firebase auth, audit logs, and security anomaly dashboard",
      "Transaction ledger: earn, redeem, reverse with integrity hashing and Pub/Sub",
      "Next.js BFF with split GCP service accounts for read vs write paths",
      "Merchant geocoding via OSM, HERE, Yelp, Mapbox with SSRF-safe proxies",
      "CI/CD: GitHub Actions to Docker, GCP Artifact Registry, VM deploy",
    ],
    challenges:
      "Consumer loyalty apps needed a separate internal source of truth for banking, merchants, and ledger flows without exposing admin tooling or compromising financial-adjacent audit requirements.",
    solution:
      "Built BRINE as a two-repo ecosystem: Next.js admin + Express API on PostgreSQL, with PBAC, idempotent migrations, BFF JWT proxying, and Pub/Sub ledger events feeding Orbiter POS and downstream systems.",
    category: "Full-Stack",
    track: "FinTech & Enterprise",
    role: "Full-Stack Developer",
    liveUrl: "https://dev-brine.rewardsx.ca/signin",
    caseStudyUrl: "/projects/rewardsx",
  },
  {
    id: 1,
    title: "Multi-Vendor E-Commerce Platform",
    description: "A sophisticated multi-vendor e-commerce platform built with modern PHP architecture and advanced features for scalable online marketplace solutions.",
    image: project1,
    technologies: ["PHP", "Laravel", "Vue.js", "PostgreSQL", "Docker"],
    features: [
      "Multi-vendor marketplace functionality",
      "Advanced product management system",
      "Real-time order tracking",
      "Comprehensive admin dashboard"
    ],
    challenges: "Building a scalable multi-vendor system that can handle complex vendor relationships and inventory management.",
    solution: "Implemented microservices architecture with Laravel and optimized database queries for better performance.",
    liveUrl: "https://wibazaar.com/",
    githubUrl: "",
    category: "Full-Stack",
    track: "Client Solutions",
    role: "Fullstack engineer",
  },
  {
    id: 2,
    title: "Reelflix IPTV Subscription System",
    description: "IPTV subscription platform integrating WHMCS, Supabase (Lovable), and React.js to automate trial and premium IPTV subscriptions. Users can start a free trial or purchase paid plans directly from the React frontend.",
    image: reelflixHero,
    images: [
      { src: reelflixHero, label: "Homepage" },
      { src: reelflixDashboard, label: "Dashboard Overview" },
      { src: reelflixSubscriptions, label: "Subscriptions Management" },
      { src: reelflixAnalytics, label: "Analytics" },
    ],
    technologies: ["React.js", "Deno", "Supabase", "Edge Functions", "RLS", "WHMCS"],
    features: [
      "Free trial and premium plan signup from React frontend",
      "Supabase functions communicate with WHMCS APIs",
      "Automatic client, order, and IPTV service creation",
      "Real-time provisioning and seamless user experience"
    ],
    challenges: "Orchestrating multiple systems (WHMCS, Supabase) to create a fully automated IPTV billing flow.",
    solution: "Configured WHMCS APIs, Supabase edge functions, domain (billing.reelflix.vip), SSL, and deployment for end-to-end automation.",
    liveUrl: "https://reelflix.vip/",
    githubUrl: "https://github.com/rifatcse09/reel-flix-launchpad",
    category: "Full-Stack",
    track: "AI & Automation",
    role: "AI integrations engineer",
  },
  {
    id: 3,
    title: "Multi-Tenant Flat & Bill Management System",
    description: "SaaS B2B platform for property owners to manage buildings, flats, tenants, and billing. Replaces spreadsheets with automated bill generation, carry-forward, payments, and email notifications.",
    image: flatBillLogin,
    images: [
      { src: flatBillLogin, label: "Login" },
      { src: flatBillDashboard, label: "Dashboard" },
      { src: flatBillBuildings, label: "Buildings" },
      { src: flatBillBills, label: "Bills" },
      { src: flatBillPayments, label: "Payments" },
      { src: flatBillAdjustments, label: "Adjustments" },
    ],
    technologies: ["Laravel 12", "PHP", "MySQL", "TailwindCSS", "Blade", "Docker/Sail"],
    features: [
      "Multi-tenant SaaS with column-based tenant isolation",
      "Role-based access (Admin, Owner, Tenant)",
      "Property management: buildings, flats, tenant assignments",
      "Billing: categories, monthly bills, carry-forward, adjustments",
      "Payment tracking with email notifications",
      "Dashboard with live metrics"
    ],
    challenges: "Property owners needed a single system to manage buildings, flats, tenants, and billing instead of spreadsheets.",
    solution: "Multi-tenant SaaS with role-based access. Owners manage properties and billing; admins manage owners and tenants. Tenant-based isolation keeps data separate. Service layer for business logic, form validation, and audit-friendly data model.",
    liveUrl: "https://github.com/rifatcse09/multi-tenant-flat-bill",
    githubUrl: "https://github.com/rifatcse09/multi-tenant-flat-bill",
    category: "Full-Stack",
    track: "Client Solutions",
    role: "Lead developer",
  },
  {
    id: 4,
    title: "Unimart Fashion - E-Commerce Platform",
    description: "Full-stack fashion e-commerce application with complete REST API, JWT authentication, product catalog, cart, wishlist, orders, and reviews. Built with Next.js App Router and modern tooling.",
    image: unimartHero,
    images: [
      { src: unimartHero, label: "Hero & Collections" },
      { src: unimartCategories, label: "Categories" },
      { src: unimartRecommended, label: "Recommended Products" },
      { src: unimartClearance, label: "Clearance Sale" },
    ],
    technologies: ["Next.js 16", "TypeScript", "React 19", "Bootstrap 5", "Zustand", "Drizzle ORM", "SQLite", "JWT"],
    features: [
      "REST API with JWT auth (register, login, protected routes)",
      "Product catalog with search, filter, sort, pagination",
      "Cart, wishlist, and order management",
      "Product reviews and ratings",
      "Responsive Bootstrap 5 UI"
    ],
    challenges: "Building a complete e-commerce flow with auth, cart, orders, and a polished frontend in a modern stack.",
    solution: "Next.js 16 App Router with API routes, Drizzle ORM for SQLite, Zustand for state, JWT for auth, and Bootstrap 5 for responsive UI. Deployed on Vercel.",
    liveUrl: "https://nextjs-ecommerce-phi-ten.vercel.app/",
    githubUrl: "https://github.com/rifatcse09/nextjs-ecommerce",
    category: "Full-Stack",
    track: "Products & Experiments",
    role: "Product engineer",
  },
  {
    id: 5,
    title: "SaaS Webhook Orchestration Engine",
    description: "Simplifies automation by integrating your store with CRM, email marketing, and more. Integrate essential workflows like order management, customer data updates, export data, and inventory sync, reducing manual tasks and saving time. User-friendly interface, no code required.",
    image: storeFlowDashboard,
    images: [
      { src: storeFlowDashboard, label: "Dashboard" },
      { src: storeFlowTrigger, label: "Choose Trigger" },
      { src: storeFlowConnect, label: "Connect Mailchimp" },
      { src: storeFlowWebhook, label: "Custom Webhook" },
      { src: storeFlowMapping, label: "Data Mapping" },
      { src: storeFlowCondition, label: "Condition Builder" },
    ],
    technologies: ["Laravel", "React", "Redis", "Horizon", "OAuth2", "REST API"],
    features: [
      "Workflow automations: Build custom workflow automations without any code",
      "Integrations: Connect your store with CRM, email tools, Google Sheets, and more",
      "Automate order management, customer data syncing, and inventory updates",
      "Data export: Export data quickly for analysis, marketing, or reporting",
      "Data syncing: Sync data across tools, spreadsheets, databases and APIs",
      "Multi-tenant webhook engine with OAuth2, API Keys, HMAC; 1M+ events/month"
    ],
    challenges: "Building a scalable multi-tenant system to sync Shopify events with 200+ SaaS platforms while handling diverse auth methods and data formats.",
    solution: "Designed event-driven architecture with Redis queues, dynamic payload mapping, credential manager supporting OAuth2/API Keys/HMAC, and robust monitoring via Laravel Horizon.",
    liveUrl: "https://apps.shopify.com/store-flow-workflow-automation",
    githubUrl: "",
    githubBackendUrl: "https://github.com/rifatcse09/integration_app",
    githubFrontendUrl: "https://github.com/rifatcse09/bit-integrations-web",
    category: "Backend",
    track: "AI & Automation",
    role: "Automation platform architect",
  },
  {
    id: 6,
    title: "KitchenFlow Multi-Tenant Restaurant SaaS",
    description: "A multi-tenant restaurant ordering platform where customers scan QR codes to order from mobile menus, kitchens receive live ticket updates, and admins manage onboarding, subscriptions, and operations.",
    image: kitchenflowMain,
    technologies: ["NestJS", "React (Vite)", "PostgreSQL", "Prisma", "WebSockets", "Docker"],
    features: [
      "QR-based customer ordering flow by restaurant and table code",
      "Live kitchen display with status transitions (Pending → Cooking → Ready)",
      "Restaurant admin for menu, orders, onboarding, and subscription management",
      "Platform admin controls for tenant approval and SaaS operations",
      "Optional media confirmation flow (audio/video) for order dispute handling",
      "Monorepo structure with separate apps for web and API"
    ],
    challenges: "Designing a clean multi-tenant architecture that keeps each restaurant isolated while supporting real-time kitchen updates and role-based portals for customer, restaurant staff, and platform admin.",
    solution: "Implemented tenant-scoped NestJS modules with Prisma on PostgreSQL, role-aware flows across customer/restaurant/admin portals, and a Docker-first local setup for reproducible development and deployment.",
    liveUrl: "https://github.com/rifatcse09/kitchenflow-saas",
    githubUrl: "https://github.com/rifatcse09/kitchenflow-saas",
    category: "Full-Stack",
    track: "Client Solutions",
    role: "Multi-tenant SaaS engineer",
  },
  {
    id: 7,
    title: "Docs RAG MCP Platform",
    description:
      "Agentic RAG monorepo: NestJS + LangChain.js document Q&A with Ollama and Qdrant, Next.js upload and chat UI, and an MCP server layer so Cursor and Claude can call business tools alongside private doc search.",
    image: docsRagMcpChat,
    images: [{ src: docsRagMcpChat, label: "Invoice Q&A chat with PDF source attribution" }],
    technologies: ["NestJS", "Next.js 15", "LangChain.js", "Ollama", "Qdrant", "MCP SDK", "Docker"],
    features: [
      "PDF ingestion with chunking, Ollama embeddings, and Qdrant vector persistence",
      "RAG chat with source-attributed answers and context chunk count",
      "Next.js upload and chat UI for invoice and policy document Q&A",
      "MCP tools, resources, and prompts wrapping APIs and SQLite for AI clients",
      "Agent module scaffold for RAG + tool orchestration via LangGraph",
      "Docker Compose stack for Ollama, Qdrant, API, and frontend",
    ],
    challenges:
      "Teams need grounded answers from private PDFs while AI assistants in the IDE need a standard protocol to reach internal APIs without hallucinating or leaking data to external LLMs.",
    solution:
      "Built a NestJS + LangChain RAG pipeline with local Ollama models, Qdrant storage, source-backed chat UI, and an MCP server that exposes validated tools over stdio for Cursor integration.",
    liveUrl: "https://github.com/rifatcse09/agentic-rag-system-nestjs",
    githubUrl: "https://github.com/rifatcse09/agentic-rag-system-nestjs",
    category: "Full-Stack",
    track: "AI & Automation",
    role: "Agentic AI engineer",
    caseStudyUrl: "/projects/docs-rag-mcp",
  },
  {
    id: 8,
    title: "Multi-Brand SMS Automation Platform",
    description:
      "Built a full-stack SMS marketing platform for a wellness brand: React dashboard on Cloudflare Pages, Worker API with queues, ActiveCampaign tag audiences, and 10DLC-compliant Twilio routing. Fixed analytics drift so replies (33) and opt-outs (25) matched Twilio Insights on a 2,383-contact blast.",
    image: smsDashboard,
    images: [
      { src: smsDashboard, label: "Dashboard" },
      { src: smsBrands, label: "Brands" },
      { src: smsCampaignDetail, label: "Campaign detail and Sync with Twilio" },
      { src: smsTwilioTotals, label: "Twilio totals: replies and opt-outs" },
      { src: smsAudienceTag, label: "Audience tag" },
      { src: smsCampaigns, label: "Campaigns" },
      { src: smsCreateCampaign, label: "Create campaign" },
      { src: smsScheduleCampaign, label: "Schedule campaign" },
      { src: smsAnalytics, label: "Analytics" },
      { src: smsSettings, label: "Settings" },
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Workers",
      "KV",
      "Queues",
      "Twilio",
      "ActiveCampaign",
    ],
    features: [
      "Multi-brand admin with per-brand Twilio and ActiveCampaign config",
      "Queue-based Cloudflare Worker sends with delivery webhooks",
      "One-click Sync with Twilio for trusted reply and opt-out totals",
      "ActiveCampaign tag audiences; timezone-aware campaign scheduling",
      "Per-phone failure diagnostics with single or batch retry",
      "10DLC-compliant routing for production US SMS blasts",
    ],
    challenges:
      "Misleading post-blast metrics, 10DLC compliance risk, and no trusted way to reconcile dashboard numbers with Twilio after large sends.",
    solution:
      "Multi-brand React admin on Cloudflare Pages, Worker API with KV + Queues, Twilio webhooks, and Sync with Twilio so analytics match Twilio Insights. Replaced manual CSV reconciliation after every blast.",
    category: "Full-Stack",
    track: "AI & Automation",
    role: "Full-stack engineer",
    liveUrl: "https://spellsology-26f.pages.dev",
    caseStudyUrl: "/projects/sms-platform",
  },
  {
    id: 9,
    title: "Grocery Order Management System (GOM)",
    description:
      "Full-stack B2B order and billing platform for wholesale grocery and meat suppliers. Built for a Bangladesh-based grocer: customers place orders online; staff fulfill, price, invoice, and settle payments with full audit trails. Bilingual UI (English + Bangla) with print-ready invoices and challans. Multi-role access (customer, moderator, admin, master admin), dual invoicing (supplier cost vs customer sell price), statement cycles, financial ledger, and admin analytics. Ideal for wholesalers that run quantity-based orders on credit cycles.",
    image: gomDashboard,
    images: [
      { src: gomDashboard, label: "Admin dashboard" },
      { src: gomLogin, label: "Sign in" },
      { src: gomOrderList, label: "Order list" },
      { src: gomPurchaseSettle, label: "Purchase settlement" },
      { src: gomBillingStatements, label: "Billing statements" },
      { src: gomFinancialLedger, label: "Financial ledger" },
      { src: gomCategoryList, label: "Category & markup" },
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Recharts",
      "Laravel 13",
      "MySQL",
      "Docker",
    ],
    features: [
      "Order lifecycle: draft → submitted → processing → delivered → invoiced with status gates",
      "Dual invoicing: challan, purchase invoice (supplier cost), billing invoice (customer price + markup)",
      "Role-based permissions; 24-hour customer edit lock; staff orders on behalf of customers",
      "Billing & purchase statement cycles, payment allocation, outstanding bills",
      "Financial ledger with supplier vs customer books and running balance",
      "Category/item markup rules with history; Bangla numerals on print templates",
      "Admin dashboard: sales KPIs, delivery punctuality, revenue trends, product insights",
      "Catalog (EN + Bangla), notifications, document void/regenerate with ledger reversal",
    ],
    challenges:
      "Wholesale grocers often run orders on phone, paper, and spreadsheets. That leads to lost edits near delivery, separate cost vs customer price with no clear margin, staff stepping on each other's work, and no single view of supplier payables vs customer receivables.",
    solution:
      "Monorepo React SPA + Laravel API: customers build orders with delivery windows and bilingual catalog; moderators generate challans and purchase invoices from supplier costs; admins apply markup and issue billing invoices. Statements bucket cycles with carryover; payments allocate across orders; ledger records debits/credits per book. Enforced business rules in code (challan quantities, purchase pricing locks, billing-only for admins) with audit logs and soft-delete preservation.",
    category: "Full-Stack",
    track: "Client Solutions",
    role: "Lead developer",
  },
];

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const [imageSrc, setImageSrc] = useState(project.image);
  const topTech = project.technologies.slice(0, 4);

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:border-portfolio-primary/25 hover:shadow-md"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
    >
      <BrowserFrame
        src={imageSrc}
        alt={project.title}
        url={project.liveUrl}
        className="rounded-none"
        imageClassName="h-44 object-cover object-top sm:h-52"
        onError={() => setImageSrc("/placeholder.svg")}
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="secondary" className="border border-portfolio-primary/20 bg-portfolio-primary/10 text-xs text-portfolio-primary">
            {project.track}
          </Badge>
          <span className="text-xs text-muted-foreground">{project.role}</span>
        </div>

        <h3 className="text-lg font-semibold leading-snug text-foreground">{project.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {topTech.map((tech) => (
            <Badge key={tech} variant="outline" className="border-border/80 px-2 py-0 text-[11px] font-normal text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
          {project.caseStudyUrl && (
            <Button variant="gradient" size="sm" className="h-8 text-xs" asChild>
              <Link to={project.caseStudyUrl}>
                <FileText className="mr-1.5 h-3.5 w-3.5" />
                Case Study
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" size="sm" className="h-8 text-xs" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                {project.caseStudyUrl ? "Live Demo" : "View Project"}
              </a>
            </Button>
          )}
          {project.chromeWebStoreUrl && (
            <Button variant="outline" size="sm" className="h-8 text-xs" asChild>
              <a href={project.chromeWebStoreUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Chrome Store
              </a>
            </Button>
          )}
          {project.githubUrl && !project.caseStudyUrl && (
            <Button variant="outline" size="sm" className="h-8 text-xs" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-3.5 w-3.5" />
                Source
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(project.image);
  const hasGallery = Boolean(project.images && project.images.length > 1);
  const galleryImages = hasGallery ? project.images ?? [] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-border/70 bg-card/80 shadow-sm transition-all hover:border-portfolio-primary/20 hover:shadow-md">
        <div className={`grid gap-6 lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative overflow-hidden`}>
            <div className="relative">
              <BrowserFrame
                src={imageSrc}
                alt={project.title}
                url={project.liveUrl}
                imageClassName={hasGallery ? "h-64 object-cover object-top lg:h-72" : "h-56 object-cover object-top lg:h-64"}
                onError={() => setImageSrc("/placeholder.svg")}
              />
              {hasGallery && (
                <>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-3 right-3 z-10 gap-1 shadow-md"
                    onClick={() => setGalleryOpen(true)}
                  >
                    <Images className="h-4 w-4" />
                    Screenshots
                  </Button>
                  <ScreenshotModal
                    open={galleryOpen}
                    onOpenChange={setGalleryOpen}
                    images={galleryImages}
                    title={project.title}
                  />
                </>
              )}
            </div>
          </div>

          <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} flex flex-col justify-center p-6 lg:p-8`}>
            <CardHeader className="mb-4 p-0">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="border border-portfolio-primary/20 bg-portfolio-primary/10 text-xs text-portfolio-primary">
                  {project.track}
                </Badge>
                <Badge variant="outline" className="border-border/80 text-xs text-muted-foreground">
                  {project.role}
                </Badge>
              </div>
              <CardTitle className="mb-2 text-xl lg:text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed lg:text-base">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 p-0">
              <ul className="space-y-2">
                {project.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <div className="mr-2.5 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 6).map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="border-border/80 text-xs font-normal text-muted-foreground">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 6 && (
                  <Badge variant="outline" className="border-border/80 text-xs font-normal text-muted-foreground">
                    +{project.technologies.length - 6} more
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.caseStudyUrl && (
                  <Button variant="gradient" size="sm" asChild>
                    <Link to={project.caseStudyUrl}>
                      <FileText className="mr-2 h-4 w-4" />
                      Read Case Study
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="gradient" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                )}
                {project.chromeWebStoreUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.chromeWebStoreUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Chrome Store
                    </a>
                  </Button>
                )}
                {"githubBackendUrl" in project && project.githubBackendUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubBackendUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      API Backend
                    </a>
                  </Button>
                )}
                {"githubFrontendUrl" in project && project.githubFrontendUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubFrontendUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Frontend
                    </a>
                  </Button>
                )}
                {project.githubUrl && !("githubBackendUrl" in project) && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const tracks = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.track)))],
    []
  );
  const [activeTrack, setActiveTrack] = useState<(typeof tracks)[number]>("All");
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = activeTrack === "All" ? projects : projects.filter((project) => project.track === activeTrack);
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.caseStudyUrl),
    []
  );

  return (
    <section id="projects" className="section-noise relative overflow-hidden bg-background py-24">
      <div className="absolute top-20 left-0 w-72 h-72 bg-portfolio-cool/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-portfolio-primary/8 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="section-kicker">
              Case studies
            </p>
            <h2 className="section-header section-title mb-6">
              Selected <span className="gradient-text">work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four production systems, each with a write-up.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mb-14">
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </ScrollReveal>

          {showAll ? (
            <>
          <ScrollReveal className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tracks.map((track) => (
                <motion.button
                  key={track}
                  type="button"
                  onClick={() => setActiveTrack(track)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    activeTrack === track
                      ? "border-portfolio-primary/50 bg-portfolio-primary/10 text-portfolio-primary shadow-[0_0_24px_-12px_hsl(var(--portfolio-primary)/0.45)]"
                      : "border-border/80 bg-background/60 text-muted-foreground hover:border-portfolio-primary/30 hover:text-foreground"
                  }`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {track}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
            </>
          ) : (
            <div className="text-center">
              <Button type="button" variant="outline" size="lg" onClick={() => setShowAll(true)}>
                See more projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
