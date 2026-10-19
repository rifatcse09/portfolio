import { CLIENT_FAQ } from "@/data/clientFaq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { useState } from "react";

const ClientFAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? CLIENT_FAQ : CLIENT_FAQ.slice(0, 5);

  return (
    <section id="faq" className="relative py-24" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal className="mb-12 text-center">
            <p className="section-kicker">
              Before you hire
            </p>
            <h2 id="faq-heading" className="section-header section-title mb-6">
              Common <span className="gradient-text">questions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <Accordion type="single" collapsible className="rounded-2xl border border-border/70 bg-card/50 px-6 glass-panel">
              {items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          {!showAll && (
            <div className="mt-6 text-center">
              <Button type="button" variant="outline" onClick={() => setShowAll(true)}>
                More questions
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientFAQ;
