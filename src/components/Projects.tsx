import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScreenshotModal } from "@/components/ScreenshotModal";
import { ExternalLink, Github, Images, Sparkles } from "lucide-react";
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
import agenticRagMain from "@/assets/agentic-rag-main.png";
import smsDashboard from "@/assets/sms-platform/dashboard.png";
import smsCampaigns from "@/assets/sms-platform/campaigns.png";
import smsBrands from "@/assets/sms-platform/brands.png";
import smsAudienceTag from "@/assets/sms-platform/audience-tag.png";
import smsCreateCampaign from "@/assets/sms-platform/create-campaign.png";
import smsScheduleCampaign from "@/assets/sms-platform/schedule-campaign.png";
import smsAnalytics from "@/assets/sms-platform/analytics.png";
import smsSettings from "@/assets/sms-platform/settings.png";
import gomDashboard from "@/assets/gom/dashboard.png";
import gomLogin from "@/assets/gom/login.png";
import gomOrderList from "@/assets/gom/order-list.png";
import gomPurchaseSettle from "@/assets/gom/purchase-settle.png";
import gomBillingStatements from "@/assets/gom/billing-statements.png";
import gomFinancialLedger from "@/assets/gom/financial-ledger.png";
import gomCategoryList from "@/assets/gom/category-list.png";
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
  track: "AI & Automation" | "Client Solutions" | "Products & Experiments";
  role: string;
};

const projects: Project[] = [
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
    description: "Simplifies automation by integrating your store with CRM, email marketing, and more. Integrate essential workflows like order management, customer data updates, export data, and inventory sync—reducing manual tasks and saving time. User-friendly interface, no code required.",
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
    title: "Agentic RAG System (NestJS + Next.js)",
    description: "A production-oriented Agentic RAG platform for document-grounded Q&A, source-attributed responses, and tool-ready business automation workflows.",
    image: agenticRagMain,
    technologies: ["NestJS", "Next.js 15", "LangChain.js", "Ollama", "Qdrant", "Docker", "PostgreSQL"],
    features: [
      "Document ingestion pipeline for PDF/text with chunking and embeddings",
      "RAG chat endpoint returning answers with source attribution and context count",
      "Vector layer with Qdrant persistence plus in-memory fallback for local development",
      "Agent endpoint architecture for orchestrating tools and RAG together",
      "Monorepo setup with NestJS backend and Next.js frontend workspace",
      "Docker-based local stack for Ollama, Qdrant, API, and optional infra services"
    ],
    challenges: "Building a reliable knowledge assistant that can stay grounded on private documents, reduce hallucinations, and evolve from simple Q&A into action-oriented AI workflows.",
    solution: "Implemented a NestJS + LangChain architecture with retrieval guardrails, local Ollama models, source-backed responses, and an extensible agent layer designed for tool integrations and future production scaling.",
    liveUrl: "https://github.com/rifatcse09/agentic-rag-system-nestjs",
    githubUrl: "https://github.com/rifatcse09/agentic-rag-system-nestjs",
    category: "Full-Stack",
    track: "AI & Automation",
    role: "Agentic AI engineer",
  },
  {
    id: 8,
    title: "Multi-Brand SMS Automation Platform",
    description:
      "Production-ready, multi-brand SMS automation for businesses that run campaigns across several brands or clients from one place. A modern React dashboard to manage brands, launch SMS blasts from ActiveCampaign audiences (by tag), track delivery in real time, retry failed numbers, and view subscriber growth analytics — backed by a Cloudflare Worker API with queue-based sending, Twilio delivery webhooks, and secure admin login. Ideal for marketing agencies, e-commerce brands, and SaaS teams that need reliable bulk SMS without juggling separate tools per brand.",
    image: smsDashboard,
    images: [
      { src: smsDashboard, label: "Dashboard" },
      { src: smsBrands, label: "Brands" },
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
      "Multi-brand admin: per-brand Twilio + ActiveCampaign config and audience tags",
      "Tag-based audiences from ActiveCampaign; dashboard subscriber counts per brand",
      "Campaign create/send, timezone-aware scheduling, Gmail-style list with filters",
      "Queue-based sending (Cloudflare Queue); mock or live Twilio mode",
      "Per-phone delivery status, failure diagnostics, retry single or all failed",
      "Inbound STOP/unsubscribe handling; sent vs failed analytics and growth metrics",
      "Secure login, password reset/change, and protected API routes",
    ],
    challenges:
      "Managing SMS for multiple brands in separate Twilio/CRM setups is slow and error-prone. Bulk sends need queues, per-number status, and failure diagnostics — not a single fire-and-forget API call. Teams need subscriber counts, delivery vs failure, and opt-out tracking in one view.",
    solution:
      "One admin panel per deployment: React dashboard → Cloudflare Worker API → KV + Queue → ActiveCampaign audiences and Twilio SMS. User selects brand, AC tag, and message (optional schedule); the worker loads phones from ActiveCampaign, stores the campaign in KV, and enqueues each number. Queue consumers send via Twilio; webhooks update delivered/failed/replies/unsubs; the dashboard polls live campaign and analytics data.",
    category: "Full-Stack",
    track: "AI & Automation",
    role: "Full-stack engineer",
  },
  {
    id: 9,
    title: "Grocery Order Management System (GOM)",
    description:
      "Full-stack B2B order and billing platform for wholesale grocery and meat suppliers. Built for a Bangladesh-based grocer: customers place orders online; staff fulfill, price, invoice, and settle payments with full audit trails. Bilingual UI (English + Bangla) with print-ready invoices and challans. Multi-role access (customer, moderator, admin, master admin), dual invoicing (supplier cost vs customer sell price), statement cycles, financial ledger, and admin analytics — ideal for wholesalers that run quantity-based orders on credit cycles.",
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
      "Wholesale grocers often run orders on phone, paper, and spreadsheets — lost edits near delivery, separate cost vs customer price with no clear margin, staff stepping on each other’s work, and no single view of supplier payables vs customer receivables.",
    solution:
      "Monorepo React SPA + Laravel API: customers build orders with delivery windows and bilingual catalog; moderators generate challans and purchase invoices from supplier costs; admins apply markup and issue billing invoices. Statements bucket cycles with carryover; payments allocate across orders; ledger records debits/credits per book. Enforced business rules in code (challan quantities, purchase pricing locks, billing-only for admins) with audit logs and soft-delete preservation.",
    category: "Full-Stack",
    track: "Client Solutions",
    role: "Lead developer",
  },
];

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
      <Card className="group overflow-hidden border-portfolio-primary/10 glass-panel modern-surface hover-lift-soft animated-border">
        <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative overflow-hidden`}>
            <motion.div className="relative" whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.35 }}>
              <img
                src={imageSrc}
                alt={project.title}
                className={`w-full rounded-lg object-cover object-top ${hasGallery ? "h-[28rem]" : "h-80"}`}
                loading="lazy"
                onError={() => setImageSrc("/placeholder.svg")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {hasGallery && (
                <>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 gap-1 opacity-90 hover:opacity-100"
                    onClick={() => setGalleryOpen(true)}
                  >
                    <Images className="h-4 w-4" />
                    View screenshots
                  </Button>
                  <ScreenshotModal
                    open={galleryOpen}
                    onOpenChange={setGalleryOpen}
                    images={galleryImages}
                    title={project.title}
                  />
                </>
              )}
            </motion.div>
          </div>

          <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} p-8`}>
            <CardHeader className="mb-6 p-0">
              <div className="mb-2 flex flex-wrap items-center gap-2.5">
                <Badge variant="secondary" className="gap-1 border border-portfolio-secondary/30 bg-portfolio-secondary/10 text-xs font-semibold text-portfolio-secondary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {project.track}
                </Badge>
                <Badge variant="outline" className="border-border/80 text-xs font-medium text-muted-foreground">
                  {project.role}
                </Badge>
                <Badge variant="outline" className="border-portfolio-primary/40 font-semibold text-portfolio-primary">
                  {project.category}
                </Badge>
              </div>
              <CardTitle className="mb-3 text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 p-0">
              <div>
                <h4 className="mb-3 font-semibold">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <div className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Challenge</h4>
                <p className="mb-3 text-sm text-muted-foreground">{project.challenges}</p>
                <h4 className="mb-2 font-semibold">Solution</h4>
                <p className="text-sm text-muted-foreground">{project.solution}</p>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Technologies Used</h4>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="border border-portfolio-primary/20 bg-portfolio-primary/5 text-xs text-portfolio-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button variant="gradient" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
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
  const visibleProjects = activeTrack === "All" ? projects : projects.filter((project) => project.track === activeTrack);

  return (
    <section id="projects" className="section-noise relative overflow-hidden bg-background py-24">
      <div className="absolute top-20 left-0 w-72 h-72 bg-portfolio-cool/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-portfolio-primary/8 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-header">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Selected work that highlights AI automation, client solutions, and product-focused
              builds with real production outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
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

          <div className="space-y-20">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
