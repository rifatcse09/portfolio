import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, BadgeCheck } from "lucide-react";
import mazharAvatar from "@/assets/mazhar.jpeg";
import koji from "@/assets/koji.jpeg";
import elijahAvatar from "@/assets/elijah.jpeg";
import { RevealGroup, ScrollReveal, revealItem } from "./ScrollReveal";
import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  verified: boolean;
  text: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 3,
      name: "Elijah McIntyre",
      position: "Founder",
      company: "BridgeOpsOne",
      avatar: elijahAvatar,
      rating: 5,
      verified: true,
      text: "Rifat delivered exactly what we needed ahead of our launch. He ran a full security assessment on our AI platform, fixed critical issues across the Chrome extension and Academy, and shipped phased milestones on time with clear reports after each phase. He understands Firebase, OpenAI integrations, and subscription logic at a senior level. Communication was strong throughout, and we now have a secure foundation and a roadmap we trust. I would hire him again without hesitation.",
    },
    {
      id: 1,
      name: "Mazhar Ahmed",
      position: "CTO",
      company: "atB Jobs",
      avatar: mazharAvatar,
      rating: 5,
      verified: true,
      text: "We have worked together. Rifatul Islam is a hard working, problem solving team player. He took lead in many projects and solved crucial technical issues. He is always ready to dive into new technology / skills. He can complete his task in proper due time. He is responsible, attentive and always respectful to others. He communicates with his team to archive the outcome of the projects. I will look forward to work with him and pray for his bright future.",
    },
    {
      id: 2,
      name: "KJ (koji) Iinuma",
      position: "CEO",
      company: "TheBEATS (US) & KJ Commons (JP)",
      avatar: koji,
      rating: 5,
      verified: true,
      text: "He is very passionate to meet the requirements of schedule and quality always. I'm really happy to work with him.",
    },
  ];

  return (
    <section id="testimonials" className="section-noise relative overflow-hidden py-24">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--portfolio-secondary) / 0.04) 0%, hsl(var(--portfolio-primary) / 0.03) 50%, transparent 100%)",
        }}
      />
      <div className="absolute top-20 left-0 w-72 h-72 bg-portfolio-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-portfolio-warm/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16 text-center">
            <p className="section-kicker">
              Client proof
            </p>
            <h2 className="section-header section-title mb-6">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Short notes from people I have shipped with.
            </p>
          </ScrollReveal>

          <RevealGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={revealItem}
                whileHover={{ y: -6 }}
              >
                <Card className="group relative h-full overflow-hidden border-portfolio-secondary/10 p-6 glass-panel modern-surface animated-border">
                  <CardContent className="p-0">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-portfolio-primary/10 group-hover:text-portfolio-primary/20 transition-colors" />

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="gap-1 border border-portfolio-accent/30 bg-portfolio-accent/10 text-portfolio-accent text-xs">
                          <BadgeCheck className="h-3 w-3" />
                          Verified client
                        </Badge>
                      )}
                    </div>

                    <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10 text-sm md:text-base">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-portfolio-primary/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-portfolio-primary/10 text-portfolio-primary font-semibold">
                          {testimonial.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
