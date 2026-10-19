import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, ExternalLink, Linkedin, Mail } from "lucide-react";
import smsDashboard from "@/assets/sms-platform/dashboard.png";
import smsBrands from "@/assets/sms-platform/brands.png";
import smsCampaignDetail from "@/assets/sms-platform/campaign-detail.png";
import smsTwilioTotals from "@/assets/sms-platform/twilio-totals.png";
import smsCreateCampaign from "@/assets/sms-platform/create-campaign.png";
import smsAnalytics from "@/assets/sms-platform/analytics.png";
import BrowserFrame from "@/components/BrowserFrame";
import {
  SMS_ARCHITECTURE,
  SMS_BEFORE_AFTER,
  SMS_FEATURES,
  SMS_META,
  SMS_PROBLEM,
  SMS_RESULTS,
  SMS_SOLUTION,
  SMS_TECH_HIGHLIGHTS,
  SMS_WHY_HIRE,
} from "@/data/smsCaseStudy";
import { SITE } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { buildCaseStudyArticleSchema, buildCaseStudyBreadcrumbSchema } from "@/lib/seoSchema";

const CASE_STUDY_URL = `https://${SITE.domain}/projects/sms-platform`;

const SmsCaseStudy = () => {
  const pageMeta = useMemo(() => {
    const headline = `${SMS_META.title} Case Study | Twilio SMS & Cloudflare Workers`;
    const description = `${SMS_META.oneLiner} Hire ${SITE.name} for SMS marketing platforms, Twilio integrations, and marketing automation.`;
    return {
      title: headline,
      description,
      canonical: CASE_STUDY_URL,
      jsonLd: [
        buildCaseStudyArticleSchema({
          headline,
          description,
          url: CASE_STUDY_URL,
          keywords: [...SMS_META.tags, "case study", "full-stack developer", "SMS automation"],
        }),
        buildCaseStudyBreadcrumbSchema(`${SMS_META.title} Case Study`, CASE_STUDY_URL),
      ],
    };
  }, []);

  usePageMeta(pageMeta);

  const screenshots = [
    { src: smsDashboard, label: "Admin dashboard and campaign overview" },
    { src: smsBrands, label: "Multi-brand Twilio and ActiveCampaign setup" },
    {
      src: smsCampaignDetail,
      label: "Production campaign detail: 2,383 contacts, Sync with Twilio, and failure breakdown",
    },
    {
      src: smsTwilioTotals,
      label: "Twilio totals card: 33 replies and 25 opt-outs matched Twilio Insights after sync",
    },
    { src: smsCreateCampaign, label: "Create campaign and ActiveCampaign audience tag selection" },
    { src: smsAnalytics, label: "Engagement metrics aligned with per-recipient phone results" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60 bg-muted/20">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
            <Button variant="gradient" size="sm" className="gap-2">
              <CalendarDays className="h-4 w-4" />
              Book a call
            </Button>
          </a>
        </div>
      </div>

      <article className="container mx-auto max-w-4xl px-6 py-12 md:py-16">
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {SMS_META.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="border border-portfolio-primary/20 bg-portfolio-primary/10 text-portfolio-primary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="page-title">
            {SMS_META.title}{" "}
            <span className="gradient-text">Case Study</span>
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">{SMS_META.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">{SMS_META.oneLiner}</p>

          <dl className="mt-8 grid gap-4 rounded-2xl border border-border/70 bg-card p-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role</dt>
              <dd className="mt-1 font-medium">{SMS_META.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Timeline</dt>
              <dd className="mt-1 font-medium">{SMS_META.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Client</dt>
              <dd className="mt-1 font-medium">{SMS_META.client}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stack</dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {SMS_META.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <Button variant="gradient" asChild>
              <a href={SMS_META.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View live dashboard
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-bold">The Problem</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            A wellness brand needed to run SMS blasts to thousands of contacts across multiple product lines.
            The first version worked for sending, but marketing could not trust the numbers after a blast finished.
          </p>
          <ul className="space-y-2">
            {SMS_PROBLEM.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-bold">The Solution</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            I built a multi-brand SMS admin on Cloudflare: React frontend, Worker API, queue-based Twilio sends,
            ActiveCampaign tag audiences, and webhook-driven status updates. The key fix was Twilio sync so
            dashboard analytics match Twilio Insights after every production blast.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border/70 bg-muted/20 p-6 font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
            <pre className="whitespace-pre">{SMS_ARCHITECTURE}</pre>
          </div>
          <ul className="mt-6 space-y-3">
            {SMS_SOLUTION.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Before and After</h2>
          <div className="overflow-hidden rounded-xl border border-border/70">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/70 bg-muted/30">
                  <th className="px-4 py-3 text-left font-semibold">Before</th>
                  <th className="px-4 py-3 text-left font-semibold">After</th>
                </tr>
              </thead>
              <tbody>
                {SMS_BEFORE_AFTER.map((row) => (
                  <tr key={row.before} className="border-b border-border/40 last:border-0">
                    <td className="px-4 py-3 text-muted-foreground align-top">{row.before}</td>
                    <td className="px-4 py-3 font-medium align-top">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Results</h2>
          <ul className="space-y-3">
            {SMS_RESULTS.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {SMS_FEATURES.map((feature, i) => (
              <Card key={feature.title} className="glass-panel hover-lift-soft">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    <span className="text-portfolio-primary">{i + 1}.</span> {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Screenshots</h2>
          <div className="grid gap-6">
            {screenshots.map(({ src, label }) => (
              <figure key={label}>
                <BrowserFrame src={src} alt={label} url={SMS_META.liveUrl} imageClassName="max-h-[520px] object-cover object-top" />
                <figcaption className="px-4 py-3 text-center text-sm text-muted-foreground">{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Technical Highlights</h2>
          <ul className="space-y-3">
            {SMS_TECH_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Privacy note: Twilio SIDs, auth tokens, and API secrets are stored in environment bindings only and are
            never published in this case study or client-facing docs.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Why Hire Me for SMS and Marketing Automation</h2>
          <ul className="space-y-3">
            {SMS_WHY_HIRE.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-portfolio-primary/20 bg-portfolio-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Need SMS, Twilio, or CRM integration work?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            I build production marketing tools with analytics clients trust. Available on Upwork, Fiverr, or direct.
          </p>
          <p className="mt-4 font-semibold">{SITE.name}</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-portfolio-primary">
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
            <a
              href={SITE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-portfolio-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="gradient" size="lg" asChild>
              <a href={SITE.links.upwork} target="_blank" rel="noopener noreferrer">
                Hire on Upwork
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/#contact">Contact me</Link>
            </Button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SmsCaseStudy;
