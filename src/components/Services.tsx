import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import {
  Blocks,
  Bot,
  Database,
  Layers3,
  Network,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "MVP SaaS Development (Scratch to Production)",
    description:
      "I build MVP SaaS products fast and take them to production with clean architecture, CI/CD, and reliable deployment. Stack focus: Node.js, PHP/Laravel, React, and PostgreSQL.",
    Icon: Rocket,
  },
  {
    title: "Production AI Systems",
    description:
      "AI agents, AI chatbots, AI assistants, and AI automation workflows. Includes document processing, OCR, RAG pipelines, and voice agents for real production workloads.",
    Icon: Bot,
  },
  {
    title: "Data Platforms & Scraping",
    description:
      "Scraping at scale, ETL pipelines, normalization, dashboards, and APIs. 50+ production scrapers built for a single client. 100,000+ records processed per run.",
    Icon: Database,
  },
  {
    title: "Rapid Product Builds (Bolt/Lovable/Replit)",
    description:
      "Rapidly ship usable products and portals with Bolt, Lovable, and Replit, then harden and scale with custom backend architecture when needed.",
    Icon: Layers3,
  },
  {
    title: "API Development & Integration",
    description:
      "REST, GraphQL, webhooks, OAuth2. Integrated with HubSpot, Salesforce, Stripe, Twilio, and dozens of custom APIs across every project.",
    Icon: Network,
  },
  {
    title: "Automation Systems (n8n, Zapier, Make.com)",
    description:
      "End-to-end workflow automation for sales, ops, and support using n8n, Zapier, and Make.com. Includes webhooks, queueing, retries, and AI-assisted task flows.",
    Icon: Blocks,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-noise relative overflow-hidden bg-background py-24">
      <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-portfolio-secondary/8 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-portfolio-cool/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-16 text-center">
            <h2 className="section-header mb-6 text-4xl font-bold md:text-5xl">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Practical engineering services focused on replacing manual workflows, scaling products,
              and delivering reliable systems in production.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card className="h-full border-portfolio-primary/10 glass-panel modern-surface hover-lift-soft animated-border">
                  <CardHeader className="space-y-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-portfolio-primary/10">
                      <service.Icon className="h-5 w-5 text-portfolio-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
