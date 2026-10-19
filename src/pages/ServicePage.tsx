import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { SERVICE_PAGES, servicePath } from "@/data/servicePages";
import { SITE } from "@/data/site";
import { usePageMeta } from "@/hooks/usePageMeta";
import { buildServiceSchema } from "@/lib/seoSchema";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams();
  const page = SERVICE_PAGES.find((item) => item.slug === slug);

  const pageMeta = useMemo(() => {
    if (!page) return null;
    const url = `https://${SITE.domain}${servicePath(page.slug)}`;
    const description = `${page.lede} Email ${SITE.email}.`;
    return {
      title: `${page.nav} | ${SITE.name}`,
      description,
      canonical: url,
      jsonLd: buildServiceSchema({
        name: page.nav,
        description: page.lede,
        url,
      }),
    };
  }, [page]);

  usePageMeta(
    pageMeta ?? {
      title: SITE.name,
      description: SITE.tagline,
    }
  );

  if (!page) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60 bg-muted/20">
        <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full bg-portfolio-primary/15 px-3 py-1.5 text-sm font-bold text-portfolio-primary underline decoration-2 underline-offset-2"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <article className="container mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="section-kicker mb-3">{page.nav}</p>
        <h1 className="page-title">{page.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/90">{page.lede}</p>
        <p className="mt-4 text-muted-foreground">{page.forWhom}</p>

        <h2 className="mt-12 text-2xl font-semibold">What the work includes</h2>
        <ul className="mt-4 space-y-3 text-foreground/90">
          {page.includes.map((item) => (
            <li key={item} className="border-l-2 border-portfolio-primary/40 pl-4">
              {item}
            </li>
          ))}
        </ul>

        {page.productionNote && (
          <section id="production" className="mt-12">
            <h2 className="text-2xl font-semibold">Production architecture</h2>
            <p className="mt-4 leading-relaxed text-foreground/90">{page.productionNote}</p>
          </section>
        )}

        <h2 className="mt-12 text-2xl font-semibold">Proof</h2>
        <ul className="mt-4 space-y-4">
          {page.proof.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className="font-semibold text-portfolio-primary underline decoration-2 underline-offset-2">
                {item.label}
              </Link>
              <p className="mt-1 text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-border/70 px-6 py-8 text-center">
          <p className="text-lg">Send the goal, the timeline, and a budget range.</p>
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(page.nav + " inquiry")}`}
            className="mt-4 inline-flex rounded-full bg-portfolio-primary/15 px-4 py-2 text-lg font-bold text-portfolio-primary underline decoration-2 underline-offset-4"
          >
            {SITE.email}
          </a>
          <div className="mt-4">
            <Button variant="outline" asChild>
              <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="mr-2 h-4 w-4" />
                Book a free call
              </a>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ServicePage;
