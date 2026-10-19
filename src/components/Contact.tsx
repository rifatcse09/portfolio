import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays } from "lucide-react";
import ProfileLinks from "./ProfileLinks";
import { ScrollReveal } from "./ScrollReveal";
import { SITE } from "@/data/site";
import { trackLead } from "./AnalyticsPageView";

const Contact = () => {
  const started = useRef(Date.now());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
          started: started.current,
          page: window.location.href,
        }),
      });
      let data: { ok?: boolean; error?: string } = {};
      try {
        data = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        throw new Error("The note did not send.");
      }
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "The note did not send.");
      }
      trackLead("form");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "The note did not send.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-xl">
          <ScrollReveal>
            <h2 className="section-header section-title mb-6 text-center">
              Tell me what you <span className="gradient-text">need</span>
            </h2>
            <p className="mx-auto mb-4 max-w-lg text-center text-lg text-muted-foreground">
              A short note is enough: the goal, the timeline, and a budget range. I reply within 24 hours.
            </p>
            <p className="mb-8 text-center">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex rounded-full bg-portfolio-primary/15 px-4 py-2 text-lg font-bold text-portfolio-primary underline decoration-2 underline-offset-4"
              >
                {SITE.email}
              </a>
            </p>

            {status === "sent" ? (
              <p className="rounded-2xl border border-border/70 bg-card/50 px-6 py-8 text-center text-foreground">
                Received. I will reply to your email within 24 hours.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 text-left">
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={120}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Project note</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={4000}
                    rows={5}
                    placeholder="Goal, timeline, and a budget range"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-destructive" role="alert">
                    {error} You can also email {SITE.email}.
                  </p>
                )}
                <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send the note"}
                </Button>
              </form>
            )}

            <div className="mt-6 flex justify-center">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="h-5 w-5" />
                  Book a free call
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <ProfileLinks />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">{SITE.timezone} · remote</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
