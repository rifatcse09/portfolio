import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, ExternalLink } from "lucide-react";
import bankingDashboard from "@/assets/rewardsx/banking-dashboard.png";
import BrowserFrame from "@/components/BrowserFrame";
import {
  REWARDSX_CHALLENGES,
  REWARDSX_CONTRIBUTIONS,
  REWARDSX_ECOSYSTEM,
  REWARDSX_FEATURES,
  REWARDSX_IMPACT,
  REWARDSX_META,
  REWARDSX_PROBLEM,
  REWARDSX_VIDEOS,
} from "@/data/rewardsxCaseStudy";
import { SITE } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { buildCaseStudyArticleSchema, buildCaseStudyBreadcrumbSchema } from "@/lib/seoSchema";

const CASE_STUDY_URL = `https://${SITE.domain}/projects/rewardsx`;

const RewardsXCaseStudy = () => {
  const pageMeta = useMemo(() => {
    const headline = `${REWARDSX_META.title} FinTech Case Study | Full-Stack Developer Portfolio`;
    const description = `${REWARDSX_META.oneLiner} Built with ${REWARDSX_META.stack.join(", ")}. Hire MD Rifatul Islam for SaaS, fintech, and internal ops platforms.`;
    return {
      title: headline,
      description,
      canonical: CASE_STUDY_URL,
      jsonLd: [
        buildCaseStudyArticleSchema({
          headline,
          description,
          url: CASE_STUDY_URL,
          keywords: [...REWARDSX_META.tags, "case study", "full-stack developer", "Next.js", "fintech"],
        }),
        buildCaseStudyBreadcrumbSchema(`${REWARDSX_META.title} Case Study`, CASE_STUDY_URL),
      ],
    };
  }, []);

  usePageMeta(pageMeta);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60 bg-muted/20">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
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
            {REWARDSX_META.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="border border-portfolio-primary/20 bg-portfolio-primary/10 text-portfolio-primary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="page-title">
            {REWARDSX_META.title}{" "}
            <span className="gradient-text">Case Study</span>
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">{REWARDSX_META.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">{REWARDSX_META.oneLiner}</p>

          <dl className="mt-8 grid gap-4 rounded-2xl border border-border/70 bg-card p-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role</dt>
              <dd className="mt-1 font-medium">{REWARDSX_META.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Timeline</dt>
              <dd className="mt-1 font-medium">{REWARDSX_META.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stack</dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {REWARDSX_META.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Team</dt>
              <dd className="mt-1 font-medium">{REWARDSX_META.team}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <Button variant="gradient" asChild>
              <a href={REWARDSX_META.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View live project (dev sign-in)
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-bold">The Problem</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            RewardsX runs consumer loyalty experiences (POS, QR rewards, personalized offers). Those apps need
            accurate, up-to-date data and controlled operational workflows, but that work cannot live in the
            consumer app itself.
          </p>
          <p className="mb-4 text-muted-foreground">The team needed a dedicated internal platform to:</p>
          <ul className="space-y-2">
            {REWARDSX_PROBLEM.map((item) => (
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
            BRINE (Internal-BRN) is an internal operations and data platform that acts as the source of truth for
            RewardsX loyalty ecosystem. Staff use a web admin to manage catalog data, permissions, and ledger
            operations. Consumer-facing systems read and write through controlled API boundaries.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border/70 bg-muted/20 p-6 font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
            <pre className="whitespace-pre">{`Internal staff → BRINE Admin (Next.js + Express)
                              ↓
                    PostgreSQL + GCP Pub/Sub
                              ↓
              Orbiter POS (Flutter) + downstream systems`}</pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {REWARDSX_ECOSYSTEM.map(({ system, role }) => (
              <Card key={system} className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{system}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">What I Built</h2>
          <ul className="space-y-3">
            {REWARDSX_CONTRIBUTIONS.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {REWARDSX_FEATURES.map((feature, i) => (
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
          <BrowserFrame
            src={bankingDashboard}
            alt="RewardsX BRINE admin banking and credit card management dashboard"
            url={REWARDSX_META.liveUrl}
            imageClassName="max-h-[520px] object-cover object-top"
          />
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Banking module: banks, credit cards, tags, and summary counts for internal staff.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-2 text-2xl font-bold">Product Demo</h2>
          <p className="mb-6 text-muted-foreground">
            Short walkthrough videos showing the admin platform in action. Internal tooling with sanitized demo data.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {REWARDSX_VIDEOS.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-xl border border-border/70 bg-card">
                <div className="relative aspect-[9/16] max-h-[520px] w-full bg-black md:aspect-video md:max-h-none">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <p className="text-sm font-medium">{video.title}</p>
                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-portfolio-primary hover:underline"
                  >
                    YouTube
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Challenges and Solutions</h2>
          <div className="overflow-hidden rounded-xl border border-border/70">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/70 bg-muted/30">
                  <th className="px-4 py-3 text-left font-semibold">Challenge</th>
                  <th className="px-4 py-3 text-left font-semibold">Approach</th>
                </tr>
              </thead>
              <tbody>
                {REWARDSX_CHALLENGES.map((row) => (
                  <tr key={row.challenge} className="border-b border-border/40 last:border-0">
                    <td className="px-4 py-3 font-medium align-top">{row.challenge}</td>
                    <td className="px-4 py-3 text-muted-foreground align-top">{row.approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Impact</h2>
          <ul className="space-y-3">
            {REWARDSX_IMPACT.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-portfolio-primary/20 bg-portfolio-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Need similar internal ops or fintech work?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            I build full-stack platforms with RBAC, ledgers, and GCP deployment. Available on Upwork, Fiverr, or direct.
          </p>
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

export default RewardsXCaseStudy;
