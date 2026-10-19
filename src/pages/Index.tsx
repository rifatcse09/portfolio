import { useMemo } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProjectFit from "@/components/ProjectFit";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import ClientFAQ from "@/components/ClientFAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyHireBar from "@/components/StickyHireBar";
import { usePageMeta } from "@/hooks/usePageMeta";
import { buildFaqPageSchema, buildHomeBreadcrumbSchema } from "@/lib/seoSchema";
import { SITE } from "@/data/site";

const Index = () => {
  const homeJsonLd = useMemo(
    () => [buildFaqPageSchema(), buildHomeBreadcrumbSchema()],
    []
  );

  usePageMeta({
    title:
      "MD Rifatul Islam | AI Backends, SaaS Integrations, RAG & Production Architecture",
    description:
      "Hire MD Rifatul Islam for web, SaaS, ecommerce, mobile, automation, API, and AI products, from a raw brief or MVP through production. Top Rated on Upwork.",
    canonical: `https://${SITE.domain}/`,
    jsonLd: homeJsonLd,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StickyHireBar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <StatsBar />
        <ProjectFit />
        <Projects />
        <Process />
        <Testimonials />
        <ClientFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
