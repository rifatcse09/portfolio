import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import mazharAvatar from "@/assets/mazhar.jpeg";
import koji from "@/assets/koji.jpeg";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mazhar Ahmed",
      position: "CTO",
      company: "atB Jobs",
      avatar: mazharAvatar,
      rating: 5,
      text: "We have worked together. Rifatul Islam is a hard working, problem solving team player. He took lead in many projects and solved crucial technical issues. He is always ready to dive into new technology / skills. He can complete his task in proper due time. He is responsible, attentive and always respectful to others. He communicates with his team to archive the outcome of the projects. I will look forward to work with him and pray for his bright future."
    },
    {
      id: 2,
      name: "KJ(koji) iinuma",
      position: "CEO",
      company: "TheBEATS(US) & KJ Commons(JP)",
      avatar: koji,
      rating: 5,
      text: "He is very passionate to meet the requirements of schedule and quality always. I'm really happy to work with him."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Startup Founder",
      company: "CollabSpace",
      avatar: "",
      rating: 5,
      text: "Rifat delivered our project management tool ahead of schedule and within budget. The real-time collaboration features work flawlessly, and our team productivity has increased by 30% since implementation."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Marketing Director",
      company: "GrowthCorp",
      avatar: "",
      rating: 5,
      text: "Excellent communication throughout the project. Rifat took the time to understand our business needs and delivered a solution that perfectly aligned with our goals. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="section-noise py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(262 83% 58% / 0.03) 0%, hsl(221 83% 53% / 0.05) 50%, hsl(0 0% 100%) 100%)' }}>
      <div className="absolute top-20 left-0 w-72 h-72 bg-portfolio-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-portfolio-warm/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-header">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What clients say about working with me and the impact of our collaborations
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="card-hover p-6 relative overflow-hidden group h-full border-portfolio-secondary/10 glass-panel modern-surface hover-lift-soft animated-border"
                >
                  <CardContent className="p-0">
                    <motion.div whileHover={{ rotate: -8, scale: 1.05 }} transition={{ duration: 0.25 }}>
                      <Quote className="absolute top-4 right-4 w-12 h-12 text-portfolio-primary/10 group-hover:text-portfolio-primary/20 transition-colors" />
                    </motion.div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Avatar className="border-2 border-portfolio-primary/20 h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-portfolio-primary/10 text-portfolio-primary font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
