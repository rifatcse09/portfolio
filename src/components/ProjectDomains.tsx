import { PROJECT_DOMAINS, SITE } from "@/data/site";
import { RevealGroup, ScrollReveal, revealItem } from "./ScrollReveal";
import { motion } from "framer-motion";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const marketplaceLinks = [
  {
    href: SITE.links.upwork,
    Icon: SiUpwork,
    title: SITE.upworkBadge,
    subtitle: "View profile on Upwork",
    border: "border-[#14a800]/30",
    bg: "bg-[#14a800]/8 hover:bg-[#14a800]/12",
    iconColor: "text-[#14a800]",
  },
  {
    href: SITE.links.fiverr,
    Icon: SiFiverr,
    title: "Available on Fiverr",
    subtitle: "Order a gig or custom offer",
    border: "border-[#1dbf73]/30",
    bg: "bg-[#1dbf73]/8 hover:bg-[#1dbf73]/12",
    iconColor: "text-[#1dbf73]",
  },
] as const;

const ProjectDomains = () => {
  return (
    <section id="domains" className="section-noise relative overflow-hidden bg-background py-20">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-portfolio-secondary/8 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-10 text-center">
            <p className="section-kicker">
              The niche, applied
            </p>
            <h2 className="section-header section-title mb-5">
              Same focus, <span className="gradient-text">different products</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              AI backends, SaaS integrations, RAG, and production architecture show up in fintech, messaging, commerce, and internal tools. The industries change. The engineering does not.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mx-auto mb-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
              {marketplaceLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center gap-3 rounded-2xl border px-5 py-3 transition-colors ${link.border} ${link.bg}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.Icon className={`h-7 w-7 shrink-0 ${link.iconColor}`} />
                  <div className="min-w-0 text-left">
                    <div className="text-sm font-bold text-foreground">{link.title}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {link.subtitle}
                      <ExternalLink className="h-3 w-3 shrink-0" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" staggerDelay={0.045}>
            {PROJECT_DOMAINS.map((domain) => (
              <motion.div
                key={domain.label}
                variants={revealItem}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border/70 bg-background/60 px-4 py-3.5 glass-panel"
              >
                <div className="text-sm font-semibold text-foreground">{domain.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{domain.detail}</div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default ProjectDomains;
