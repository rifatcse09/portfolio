import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const GA_MEASUREMENT_ID = "G-NSSGRLG2P8";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead(method: "form" | "email" | "booking" | "chat") {
  window.gtag?.("event", "generate_lead", { method });
}

const channelFromReferrer = (referrer: string) => {
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (/chatgpt\.com|openai\.com/.test(host)) return "ai_chatgpt";
    if (/claude\.ai|anthropic\.com/.test(host)) return "ai_claude";
    if (host === "x.com" || host === "t.co" || host === "twitter.com") return "x";
    if (/google\./.test(host) || host === "bing.com") return "organic_search";
    if (host.includes("linkedin.com")) return "linkedin";
    return host;
  } catch {
    return "direct";
  }
};

const AnalyticsPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const pagePath = location.pathname + location.search;
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: pagePath });

    if (!sessionStorage.getItem("traffic_channel_sent")) {
      sessionStorage.setItem("traffic_channel_sent", "1");
      window.gtag("event", "traffic_channel", {
        channel: channelFromReferrer(document.referrer),
        page_path: pagePath,
      });
    }
  }, [location]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("mailto:")) trackLead("email");
      if (href.includes("calendly.com")) trackLead("booking");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};

export default AnalyticsPageView;
