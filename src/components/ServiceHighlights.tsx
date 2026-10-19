import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ScrollReveal } from "./ScrollReveal";
import { SERVICE_HIGHLIGHTS } from "@/data/serviceHighlights";
import CustomSoftwareVisual from "./CustomSoftwareVisual";
import BrowserFrame from "./BrowserFrame";
import { cn } from "@/lib/utils";

const ServiceHighlights = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 7000);
    return () => clearInterval(timer);
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <ScrollReveal className="mb-16">
      <div className="mb-8 text-center">
        <p className="section-kicker">
          The niche
        </p>
        <h3 className="font-display text-[1.7rem] font-medium leading-tight tracking-tight md:text-[2.05rem]">
          AI backend, integrations, <span className="gradient-text">RAG, architecture</span>
        </h3>
      </div>

      <div className="relative px-4 sm:px-12 md:px-14">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {SERVICE_HIGHLIGHTS.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0">
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-background via-background to-portfolio-primary/[0.04] shadow-xl shadow-portfolio-primary/5">
                  <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:gap-10 md:p-10 lg:p-12">
                    {/* Copy */}
                    <div className="order-2 md:order-1">
                      <h4 className="font-display text-[1.85rem] font-medium leading-[1.15] tracking-tight text-foreground md:text-[2.35rem]">
                        {slide.title}{" "}
                        <span className="gradient-text">{slide.titleAccent}</span>
                      </h4>
                      <p className="mt-2 text-lg font-medium text-portfolio-cool md:text-xl">
                        {slide.tagline}
                      </p>

                      <ul className="mt-8 space-y-5">
                        {slide.features.map(({ Icon, title, description }) => (
                          <li key={title} className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-portfolio-primary/20 bg-portfolio-primary/10">
                              <Icon className="h-5 w-5 text-portfolio-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{title}</p>
                              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                                {description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className="order-1 md:order-2">
                      <div>
                        {slide.visual === "custom-software" ? (
                          <div className="relative overflow-hidden rounded-xl border border-border/40 bg-card p-4 shadow-md dark:bg-muted/20">
                            <CustomSoftwareVisual />
                          </div>
                        ) : slide.image ? (
                          <BrowserFrame
                            src={slide.image}
                            alt={slide.imageAlt}
                            imageClassName="h-auto max-h-[420px] object-contain"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 top-1/2 h-10 w-10 -translate-y-1/2 border-portfolio-primary/25 bg-background/90 shadow-md hover:bg-portfolio-primary/10 disabled:opacity-30 md:-left-2" />
          <CarouselNext className="right-0 top-1/2 h-10 w-10 -translate-y-1/2 border-portfolio-primary/25 bg-background/90 shadow-md hover:bg-portfolio-primary/10 disabled:opacity-30 md:-right-2" />
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {SERVICE_HIGHLIGHTS.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to ${slide.title} ${slide.titleAccent}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-portfolio-primary"
                  : "w-2 bg-portfolio-primary/25 hover:bg-portfolio-primary/40"
              )}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ServiceHighlights;
