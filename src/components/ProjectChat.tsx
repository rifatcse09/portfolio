import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE } from "@/data/site";
import { trackLead } from "./AnalyticsPageView";

type Role = "bot" | "client";
type Step = "browse" | "need" | "name" | "email" | "done";

type ChatMessage = { id: number; role: Role; text: string };

const SERVICES =
  "I take web and SaaS products, ecommerce, mobile apps, automation, and API integrations, from a raw brief or MVP through production. AI work is model APIs, RAG, and agents inside the product. Case studies are on this site.";
const PRICING =
  "Small tasks often start from $500. A SaaS MVP is often $5,000 to $25,000. The exact number comes after a short brief.";
const TIMELINE =
  "An integration is often 1 to 3 weeks. A SaaS MVP is often 6 to 12 weeks. I reply within 24 hours.";
const START = `Leave your name, email, and what you need. It goes to ${SITE.email}. I reply within 24 hours.`;

const QUICK = [
  { label: "What do you build?", text: SERVICES },
  { label: "Pricing", text: PRICING },
  { label: "Timeline", text: TIMELINE },
] as const;

const answerFor = (text: string) => {
  const q = text.toLowerCase();
  if (/price|cost|rate|budget|hourly|\$/.test(q)) return PRICING;
  if (/how long|timeline|week|month|deadline|when/.test(q)) return TIMELINE;
  if (/service|what do you|build|backend|rag|agent|integrat|saas|automat|mvp|e-?commerce|shopify|\bstore\b|mobile|\bapps?\b|\bweb\b|\bapi\b|production/.test(q)) return SERVICES;
  if (/upwork|fiverr|hire|start|contact|email|call/.test(q)) return START;
  return "I can answer what I build, pricing, or timeline. Send a project note if you want a reply on your own job.";
};

const ProjectChat = () => {
  const started = useRef(Date.now());
  const nextId = useRef(1);
  const listRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("browse");
  const [draft, setDraft] = useState("");
  const [need, setNeed] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: "bot",
      text: "Ask about the work, the price, or the timeline. If you want a reply, I can take your name and email.",
    },
  ]);

  const push = (role: Role, text: string) => {
    const id = nextId.current++;
    setMessages((current) => [...current, { id, role, text }]);
  };

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, open]);

  const askLead = () => {
    setStep("need");
    push("bot", "What do you need built? One or two sentences is enough.");
  };

  const onQuick = (text: string) => {
    push("client", QUICK.find((item) => item.text === text)?.label ?? "Question");
    push("bot", text);
  };

  const submitLead = async (email: string) => {
    setSending(true);
    setError("");
    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: `Sent from the website chat on https://${SITE.domain}\n\n${need}`,
          company: "",
          started: started.current,
          page: window.location.href,
        }),
      });
      let data: { ok?: boolean; error?: string } = {};
      try {
        data = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        throw new Error(`The note did not send. Email ${SITE.email}.`);
      }
      if (!response.ok || !data.ok) throw new Error(data.error || "The note did not send.");
      trackLead("chat");
      setStep("done");
      push("bot", `Received. I will reply at ${email} within 24 hours.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "The note did not send.");
    } finally {
      setSending(false);
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text || sending) return;
    setDraft("");
    setError("");

    if (step === "browse") {
      push("client", text);
      push("bot", answerFor(text));
      return;
    }

    if (step === "need") {
      if (text.length < 10) {
        push("bot", "Add a little more about the goal, timeline, or budget.");
        return;
      }
      setNeed(text);
      push("client", text);
      setStep("name");
      push("bot", "Your name?");
      return;
    }

    if (step === "name") {
      if (text.length < 2) {
        push("bot", "Add your name so I know who to reply to.");
        return;
      }
      setName(text);
      push("client", text);
      setStep("email");
      push("bot", "Your email?");
      return;
    }

    if (step === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        push("bot", "That email does not look complete. Try again.");
        return;
      }
      push("client", text);
      void submitLead(text);
    }
  };

  const placeholder =
    step === "need" ? "The project, in a sentence" : step === "name" ? "Your name" : step === "email" ? "you@company.com" : "Ask a question";

  return (
    <div className="fixed bottom-24 right-4 z-[60] md:bottom-6 md:right-6">
      {open && (
        <div className="mb-3 flex h-[min(32rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
          <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
            <div>
              <p className="font-semibold">Project questions</p>
              <p className="text-xs text-muted-foreground">Answers now. A personal reply within 24 hours.</p>
            </div>
            <button type="button" aria-label="Close chat" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <p
                key={message.id}
                className={
                  message.role === "bot"
                    ? "max-w-[90%] rounded-2xl bg-muted px-3 py-2 text-sm leading-relaxed"
                    : "ml-auto max-w-[90%] rounded-2xl bg-portfolio-primary px-3 py-2 text-sm leading-relaxed text-white"
                }
              >
                {message.text}
              </p>
            ))}
          </div>
          {step === "browse" && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {QUICK.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium hover:border-portfolio-primary/40"
                  onClick={() => onQuick(item.text)}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                className="rounded-full bg-portfolio-primary/15 px-3 py-1 text-xs font-bold text-portfolio-primary"
                onClick={askLead}
              >
                Send a project note
              </button>
            </div>
          )}
          {error && <p className="px-4 pb-1 text-xs text-destructive">{error}</p>}
          {step !== "done" && (
            <form onSubmit={onSubmit} className="flex gap-2 border-t border-border p-3">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={placeholder}
                aria-label={placeholder}
                className="min-w-0 flex-1 rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button
                type="submit"
                disabled={sending || !draft.trim()}
                className="rounded-xl bg-portfolio-primary px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                {sending ? "…" : "Send"}
              </button>
            </form>
          )}
        </div>
      )}
      <button
        type="button"
        className="ml-auto flex items-center gap-2 rounded-full bg-portfolio-primary px-4 py-3 text-sm font-semibold text-white shadow-lg"
        onClick={() => setOpen((value) => !value)}
      >
        <MessageCircle className="h-4 w-4" />
        {open ? "Close" : "Ask"}
      </button>
    </div>
  );
};

export default ProjectChat;
