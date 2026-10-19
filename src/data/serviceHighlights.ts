import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Puzzle,
  Workflow,
  Clock,
  ShieldCheck,
  BarChart3,
  Server,
  BrainCircuit,
  Layers,
  TrendingUp,
} from "lucide-react";
import apiIntegrationImg from "@/assets/services/api-integration.png";
import customApiImg from "@/assets/services/custom-api-development.png";
import workflowAutomationImg from "@/assets/services/workflow-automation.png";

export type ServiceHighlight = {
  id: string;
  title: string;
  titleAccent: string;
  tagline: string;
  image?: string;
  imageAlt: string;
  visual?: "custom-software";
  features: { Icon: LucideIcon; title: string; description: string }[];
};

export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    id: "ai-backends",
    title: "AI",
    titleAccent: "Backends",
    tagline: "Models inside the product, not beside it.",
    visual: "custom-software",
    imageAlt: "AI backend connecting model APIs, workers, SaaS tools, and production services",
    features: [
      {
        Icon: Server,
        title: "Model APIs that behave",
        description: "Workers, queues, retries, and limits so AI features fail the same way the rest of the API does.",
      },
      {
        Icon: BrainCircuit,
        title: "RAG and agents",
        description: "Retrieval, MCP, and tool-using agents grounded in your docs and services.",
      },
      {
        Icon: Layers,
        title: "Production architecture",
        description: "Auth, tenancy, observability, and a deploy your team can run after handoff.",
      },
    ],
  },
  {
    id: "api-integration",
    title: "SaaS",
    titleAccent: "Integrations",
    tagline: "The tools you already pay for, wired in.",
    image: apiIntegrationImg,
    imageAlt: "API Integration diagram connecting CRM, email, cloud storage, database, analytics, and e-commerce",
    features: [
      {
        Icon: Puzzle,
        title: "Billing, CRM, messaging",
        description: "Stripe, HubSpot, Salesforce, Twilio, and the webhooks between them.",
      },
      {
        Icon: Workflow,
        title: "Failure handling",
        description: "OAuth, idempotency, and retries so a flaky vendor does not take the product down.",
      },
      {
        Icon: Code2,
        title: "Inside your app",
        description: "Integrations live in your API and data model, not in a side spreadsheet.",
      },
    ],
  },
  {
    id: "custom-api",
    title: "Production",
    titleAccent: "Architecture",
    tagline: "Auth, data, and deploys you can own.",
    image: customApiImg,
    imageAlt: "Custom API development ecosystem with endpoints, webhooks, cloud services, databases, and OAuth",
    features: [
      {
        Icon: Code2,
        title: "APIs your team can extend",
        description: "REST and webhooks with auth, tenancy, and a shape the next feature can sit on.",
      },
      {
        Icon: Puzzle,
        title: "SaaS boundaries",
        description: "Vendor calls stay behind your services, with timeouts and a clear owner.",
      },
      {
        Icon: TrendingUp,
        title: "Ready to run",
        description: "CI, environments, and handoff so launch is not the first time it sees traffic.",
      },
    ],
  },
  {
    id: "workflow-automation",
    title: "Agents in",
    titleAccent: "Workflows",
    tagline: "Automation that hands off to a real backend.",
    image: workflowAutomationImg,
    imageAlt: "Workflow automation flow from orders through CRM, payments, email, to reports",
    features: [
      {
        Icon: Clock,
        title: "Save Time",
        description: "Automate repetitive tasks and get more done.",
      },
      {
        Icon: ShieldCheck,
        title: "Reduce Errors",
        description: "Minimize mistakes with consistent workflows.",
      },
      {
        Icon: BarChart3,
        title: "Boost Efficiency",
        description: "Streamline operations and scale with ease.",
      },
    ],
  },
];
