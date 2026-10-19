import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, ExternalLink, Github } from "lucide-react";
import chatInterface from "@/assets/docs-rag-mcp/chat-interface.png";
import BrowserFrame from "@/components/BrowserFrame";
import {
  DOCS_RAG_MCP_ARCHITECTURE,
  DOCS_RAG_MCP_BEFORE_AFTER,
  DOCS_RAG_MCP_FEATURES,
  DOCS_RAG_MCP_META,
  DOCS_RAG_MCP_PROBLEM,
  DOCS_RAG_MCP_RESULTS,
  DOCS_RAG_MCP_SOLUTION,
  DOCS_RAG_MCP_TECH_HIGHLIGHTS,
  DOCS_RAG_MCP_WHY_HIRE,
} from "@/data/docsRagMcpCaseStudy";
import { SITE } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { buildCaseStudyArticleSchema, buildCaseStudyBreadcrumbSchema } from "@/lib/seoSchema";

const CASE_STUDY_URL = `https://${SITE.domain}/projects/docs-rag-mcp`;

const DocsRagMcpCaseStudy = () => {
  const pageMeta = useMemo(() => {
    const headline = `${DOCS_RAG_MCP_META.title} Case Study | RAG, LangChain & MCP`;
    const description = `${DOCS_RAG_MCP_META.oneLiner} Hire ${SITE.name} for document AI, RAG pipelines, and MCP server development.`;
    return {
      title: headline,
      description,
      canonical: CASE_STUDY_URL,
      jsonLd: [
        buildCaseStudyArticleSchema({
          headline,
          description,
          url: CASE_STUDY_URL,
          keywords: [...DOCS_RAG_MCP_META.tags, "case study", "full-stack developer", "document AI"],
        }),
        buildCaseStudyBreadcrumbSchema(`${DOCS_RAG_MCP_META.title} Case Study`, CASE_STUDY_URL),
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
            {DOCS_RAG_MCP_META.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="border border-portfolio-primary/20 bg-portfolio-primary/10 text-portfolio-primary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="page-title">
            {DOCS_RAG_MCP_META.title}{" "}
            <span className="gradient-text">Case Study</span>
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">{DOCS_RAG_MCP_META.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">{DOCS_RAG_MCP_META.oneLiner}</p>

          <dl className="mt-8 grid gap-4 rounded-2xl border border-border/70 bg-card p-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role</dt>
              <dd className="mt-1 font-medium">{DOCS_RAG_MCP_META.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Timeline</dt>
              <dd className="mt-1 font-medium">{DOCS_RAG_MCP_META.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Team</dt>
              <dd className="mt-1 font-medium">{DOCS_RAG_MCP_META.team}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stack</dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {DOCS_RAG_MCP_META.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <Button variant="gradient" asChild>
              <a href={DOCS_RAG_MCP_META.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-bold">The Problem</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Businesses need AI that answers from their own documents, not the public internet. At the same time,
            developers using Cursor and Claude want a standard protocol to let assistants call internal APIs and
            databases safely. Keyword search and generic chatbots fail on both fronts.
          </p>
          <ul className="space-y-2">
            {DOCS_RAG_MCP_PROBLEM.map((item) => (
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
            I built Docs RAG MCP as a monorepo combining document-grounded Q&A with an MCP server layer. The NestJS
            backend handles PDF ingestion, Ollama embeddings, and Qdrant vector search. The Next.js frontend provides
            upload and chat. MCP tools wrap APIs and databases so AI clients can act, not just read.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border/70 bg-muted/20 p-6 font-mono text-xs leading-relaxed text-muted-foreground md:text-sm">
            <pre className="whitespace-pre">{DOCS_RAG_MCP_ARCHITECTURE}</pre>
          </div>
          <ul className="mt-6 space-y-3">
            {DOCS_RAG_MCP_SOLUTION.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Screenshot</h2>
          <figure>
            <BrowserFrame
              src={chatInterface}
              alt="Docs RAG MCP chat interface showing invoice Q&A with PDF source attribution"
              url={DOCS_RAG_MCP_META.githubUrl}
              imageClassName="max-h-[520px] object-cover object-top"
            />
            <figcaption className="px-4 py-3 text-center text-sm text-muted-foreground">
              Chat UI: ask questions about uploaded invoice PDFs. Answers include structured data and cited source files
              (INV-36259, Microsoft Corporation, and related documents).
            </figcaption>
          </figure>
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
                {DOCS_RAG_MCP_BEFORE_AFTER.map((row) => (
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
            {DOCS_RAG_MCP_RESULTS.map((item) => (
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
            {DOCS_RAG_MCP_FEATURES.map((feature, i) => (
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
          <h2 className="mb-6 text-2xl font-bold">Technical Highlights</h2>
          <ul className="space-y-3">
            {DOCS_RAG_MCP_TECH_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Why Hire Me for RAG and MCP Work</h2>
          <ul className="space-y-3">
            {DOCS_RAG_MCP_WHY_HIRE.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-portfolio-primary/20 bg-portfolio-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Need document AI, RAG, or MCP integration?</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            I build grounded knowledge assistants and MCP servers that connect AI tools to your APIs and databases.
            Available on Upwork, Fiverr, or direct.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="gradient" size="lg" asChild>
              <a href={DOCS_RAG_MCP_META.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub repo
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
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

export default DocsRagMcpCaseStudy;
