import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, ExternalLink, Shield } from "lucide-react";
import bridgeopsAcademy from "@/assets/bridgeops/communications-simulator.png";
import BrowserFrame from "@/components/BrowserFrame";
import {
  BRIDGEOPS_CHALLENGES,
  BRIDGEOPS_CONTRIBUTIONS,
  BRIDGEOPS_ECOSYSTEM,
  BRIDGEOPS_FEATURES,
  BRIDGEOPS_IMPACT,
  BRIDGEOPS_META,
  BRIDGEOPS_PROBLEM,
  BRIDGEOPS_SECURITY_FINDINGS,
  BRIDGEOPS_VIDEOS,
} from "@/data/bridgeopsCaseStudy";
import { SITE } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { buildCaseStudyArticleSchema, buildCaseStudyBreadcrumbSchema } from "@/lib/seoSchema";

const CASE_STUDY_URL = `https://${SITE.domain}/projects/bridgeopsone`;

const BridgeOpsCaseStudy = () => {
  const pageMeta = useMemo(() => {
    const headline = `${BRIDGEOPS_META.title} AI SaaS Case Study | Security Assessment & Full-Stack Delivery`;
    const description = `${BRIDGEOPS_META.oneLiner} Hire MD Rifatul Islam for AI SaaS security reviews, Firebase/OpenAI integrations, and milestone-based delivery.`;
    return {
      title: headline,
      description,
      canonical: CASE_STUDY_URL,
      jsonLd: [
        buildCaseStudyArticleSchema({
          headline,
          description,
          url: CASE_STUDY_URL,
          datePublished: "2026-06-01",
          keywords: [...BRIDGEOPS_META.tags, "case study", "security assessment", "OpenAI", "Chrome extension"],
        }),
        buildCaseStudyBreadcrumbSchema(`${BRIDGEOPS_META.title} Case Study`, CASE_STUDY_URL),
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
            {BRIDGEOPS_META.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="border border-portfolio-primary/20 bg-portfolio-primary/10 text-portfolio-primary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="page-title">
            {BRIDGEOPS_META.title}{" "}
            <span className="gradient-text">Case Study</span>
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">{BRIDGEOPS_META.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">{BRIDGEOPS_META.oneLiner}</p>

          <dl className="mt-8 grid gap-4 rounded-2xl border border-border/70 bg-card p-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role</dt>
              <dd className="mt-1 font-medium">{BRIDGEOPS_META.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Timeline</dt>
              <dd className="mt-1 font-medium">{BRIDGEOPS_META.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stack</dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {BRIDGEOPS_META.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Team</dt>
              <dd className="mt-1 font-medium">{BRIDGEOPS_META.team}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="gradient" asChild>
              <a href={BRIDGEOPS_META.chromeWebStoreUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Chrome Web Store
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={BRIDGEOPS_META.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Academy
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={BRIDGEOPS_META.marketingUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                bridgeopsone.com
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-bold">The Problem</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            BridgeOpsOne helps IT operations teams communicate during incidents with an AI Chrome extension for
            real-time updates and an Academy of simulators graded by OpenAI. The platform was live but not launch-ready:
            security gaps exposed OpenAI costs, and the architecture split identity across two Firebase projects.
          </p>
          <ul className="space-y-2">
            {BRIDGEOPS_PROBLEM.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-bold">Platform Architecture</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Two products, two Render backends, two Firebase projects, unified at the business level through a
            subscription schema that treats AI Tool and Academy as separate optional plans on one account.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border/70 bg-muted/20 p-6 font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
            <pre className="whitespace-pre">{`┌─────────────────────────┬──────────────────────────────────────┐
│ CHROME EXTENSION        │ ACADEMY + SIMULATORS                 │
│ Plasmo + Google OAuth   │ React 19 + Firebase Auth             │
├─────────────────────────┼──────────────────────────────────────┤
│ bridgeopsone-backend    │ bridgeopsone-simulator-api           │
│ .onrender.com           │ .onrender.com                        │
│ OpenAI gpt-4.1-mini     │ OpenAI gpt-4o-mini (grading)         │
│ Firestore: bridgeopsone │ Firestore: bridgeopsone-academy      │
└─────────────────────────┴──────────────────────────────────────┘
                              │
                    bridgeopsone.com (pricing + Stripe Phase E)
                              │
              users/{uid}: aiPlan + academyPlan + usage`}</pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {BRIDGEOPS_ECOSYSTEM.map(({ system, role }) => (
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
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Shield className="h-6 w-6 text-portfolio-primary" />
            M1 Security Assessment
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Milestone 1 delivered a full platform review: repository audit, Firebase/Auth analysis, 20 prioritized
            security findings, launch readiness verdict, and a phased remediation plan through post-launch Stripe and
            identity merge.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {BRIDGEOPS_SECURITY_FINDINGS.map((row) => (
              <Card key={row.severity} className="glass-panel">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{row.severity}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-portfolio-primary">{row.count}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{row.examples}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">What I Built</h2>
          <ul className="space-y-3">
            {BRIDGEOPS_CONTRIBUTIONS.map((item) => (
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
            {BRIDGEOPS_FEATURES.map((feature, i) => (
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
          <h2 className="mb-6 text-2xl font-bold">Academy Screenshot</h2>
          <BrowserFrame
            src={bridgeopsAcademy}
            alt="BridgeOpsOne Academy Communications Simulator with progress dashboard"
            url={BRIDGEOPS_META.liveUrl}
            imageClassName="max-h-[520px] object-cover object-top"
          />
          <p className="mt-3 text-center text-sm text-muted-foreground">
            BridgeOpsOne Academy: timed communication simulators with AI grading, scenario selection, and a progress
            dashboard for NOC and data center training.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-2 text-2xl font-bold">Product Demo</h2>
          <p className="mb-6 text-muted-foreground">
            Official BridgeOpsOne walkthrough playlist. How the AI Chrome extension and Academy work together for IT
            operations teams.
          </p>
          <div className="grid gap-6">
            {BRIDGEOPS_VIDEOS.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-xl border border-border/70 bg-card">
                <div className="relative aspect-video w-full bg-black">
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
                {BRIDGEOPS_CHALLENGES.map((row) => (
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
            {BRIDGEOPS_IMPACT.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-portfolio-primary/20 bg-portfolio-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Need an AI SaaS security review or phased launch?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            I deliver assessment reports, remediation, OpenAI/Firebase integrations, and milestone-based roadmaps for
            founders and teams on Upwork or direct.
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

export default BridgeOpsCaseStudy;
