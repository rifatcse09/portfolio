import { useEffect } from "react";

type PageMetaOptions = {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const upsertMeta = (selector: string, create: () => HTMLMetaElement, value: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

export const usePageMeta = ({ title, description, canonical, jsonLd }: PageMetaOptions) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.name = "description";
      return meta;
    }, description);

    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    }, title);

    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    }, description);

    if (canonical) {
      upsertLink("canonical", canonical);
      upsertMeta('meta[property="og:url"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        return meta;
      }, canonical);
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageMeta = "true";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = previousTitle;
      script?.remove();
    };
  }, [title, description, canonical, jsonLd ? JSON.stringify(jsonLd) : undefined]);
};
