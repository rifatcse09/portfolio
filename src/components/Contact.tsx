import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, FileDown, BookOpen, CalendarDays, Linkedin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const Contact = () => {
  const CV_URL = "/cv.pdf";
  const CALENDLY_URL = "https://calendly.com/rifatcse09/30min";
  const contactInfo = [
    {
      icon: CalendarDays,
      title: "Book a Meeting",
      description: "30-min Calendly session",
      action: CALENDLY_URL
    },
    {
      icon: Mail,
      title: "Email",
      description: "rifatcse09@gmail.com",
      action: "mailto:rifatcse09@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "in/rifatcse09",
      action: "https://www.linkedin.com/in/rifatcse09/"
    },
    {
      icon: BookOpen,
      title: "Medium",
      description: "@rifatcse09",
      action: "https://medium.com/@rifatcse09"
    },
    {
      icon: FileDown,
      title: "CV / Resume",
      description: "Download PDF",
      action: CV_URL
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Dhaka, Bangladesh",
      action: "#"
    },
  ];

  return (
    <section id="contact" className="section-noise py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(25 95% 53% / 0.04) 100%)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(221_83%_53%_/_0.06)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-portfolio-warm/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-header">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project
              and create something amazing together.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Currently Sr. Full-Stack Engineer at RainbowIT. I design modular backend architecture,
                  distributed data pipelines, and scalable systems. Feel free to connect for collaboration
                  or technical discussions.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  info.action !== "#" ? (
                    <motion.a
                      key={index}
                      href={info.action}
                      target={info.action.startsWith("http") || info.action.endsWith(".pdf") ? "_blank" : undefined}
                      rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      download={info.action.endsWith(".pdf") ? "MD-Rifatul-Islam-CV.pdf" : undefined}
                      className="flex items-center gap-4 rounded-xl p-4 transition-colors group hover:bg-muted/50 glass-panel hover-lift-soft"
                      whileHover={{ x: 5, y: -2 }}
                    >
                      <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center group-hover:bg-portfolio-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-portfolio-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{info.title}</div>
                        <span className="text-muted-foreground group-hover:text-portfolio-primary transition-colors">
                          {info.description}
                        </span>
                      </div>
                    </motion.a>
                  ) : (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 rounded-xl p-4 glass-panel hover-lift-soft"
                      whileHover={{ x: 5, y: -2 }}
                    >
                      <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-portfolio-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{info.title}</div>
                        <span className="text-muted-foreground">{info.description}</span>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold mb-4">What I Bring to the Table:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "9+ years building scalable backend systems",
                    "Node.js, NestJS, Laravel & PostgreSQL expertise",
                    "Microservices & event-driven architecture",
                    "AWS, Docker, CI/CD & distributed systems",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="card-hover overflow-hidden border-portfolio-primary/10 glass-panel modern-surface hover-lift-soft animated-border">
                <CardHeader>
                  <CardTitle>Book a Discovery Call</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Choose a time that works for you and book a direct 30-minute call with me.
                    We can discuss your project scope, timeline, and best technical approach.
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                      30-minute session
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                      Google Calendar invite + reminders
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                      Fast project discovery and next steps
                    </div>
                  </div>
                  <motion.a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Button variant="gradient" className="w-full">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      Schedule on Calendly
                    </Button>
                  </motion.a>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
