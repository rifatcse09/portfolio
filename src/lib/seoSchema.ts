import { CLIENT_FAQ } from "@/data/clientFaq";
import { SITE } from "@/data/site";

export const buildFaqPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CLIENT_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const buildHomeBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `https://${SITE.domain}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Client FAQ",
      item: `https://${SITE.domain}/#faq`,
    },
  ],
});

export const buildCaseStudyArticleSchema = (options: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: options.headline,
  description: options.description,
  url: options.url,
  datePublished: options.datePublished ?? "2024-01-01",
  author: {
    "@type": "Person",
    name: SITE.name,
    url: `https://${SITE.domain}/`,
  },
  publisher: {
    "@type": "Person",
    name: SITE.name,
    url: `https://${SITE.domain}/`,
  },
  mainEntityOfPage: options.url,
  keywords: options.keywords?.join(", "),
  image: `https://${SITE.domain}/og-image.png`,
});

export const buildServiceSchema = (options: { name: string; description: string; url: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: options.name,
  description: options.description,
  url: options.url,
  provider: { "@id": `https://${SITE.domain}/#person` },
  areaServed: "Worldwide",
  serviceType: options.name,
});

export const buildCaseStudyBreadcrumbSchema = (caseStudyName: string, caseStudyUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `https://${SITE.domain}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `https://${SITE.domain}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: caseStudyName,
      item: caseStudyUrl,
    },
  ],
});
