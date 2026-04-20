import { Button } from "@/components/ui/button";
import { ArrowDown, CalendarDays, Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import heroTexture from "@/assets/hero-bg.jpg";
import heroPortrait from "@/assets/hero-portrait.png";
import { motion } from "framer-motion";
import { TypeWriter } from "./TypeWriter";

const CV_URL = "/cv.pdf";
const CALENDLY_URL = "https://calendly.com/rifatcse09/30min";

const Hero = () => {
  const roles = [
    "Node.js & NestJS",
    "Laravel & PHP at scale",
    "APIs & microservices",
    "AWS, Docker & CI/CD",
    "PostgreSQL & event-driven design",
  ];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Transparent dark-glass tint (no white wash) */}
      <div className="pointer-events-none absolute inset-0 bg-black/18 backdrop-blur-[6px]" />

      {/* Soft photo texture (same asset family as before, toned down) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-[center_20%] opacity-[0.08] mix-blend-multiply"
        style={{ backgroundImage: `url(${heroTexture})` }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/[0.03] via-transparent to-portfolio-secondary/[0.04]" />

      {/* Subtle grid + glow orbs */}
      <div
        className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:72px_72px]"
        style={{
          maskImage: "radial-gradient(ellipse 85% 65% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 65% at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-portfolio-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-portfolio-cool/7 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy — Austin Reed–style left column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.p
              className="mb-6 mx-auto inline-block rounded-2xl border border-white/20 bg-black/20 px-5 py-3.5 text-center text-base font-semibold text-foreground shadow-lg shadow-black/20 ring-1 ring-white/10 backdrop-blur-xl md:px-6 md:py-4 md:text-lg lg:mx-0 lg:text-left"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Backend-focused Full Stack Engineer
            </motion.p>

            <motion.h1
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-[3.5rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">MD Rifatul Islam</span>
              <span className="text-muted-foreground">.</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              I build reliable APIs, distributed systems, and cloud-ready backends — focused on clarity,
              performance, and shipping work that holds up in production.
            </motion.p>

            <motion.div
              className="mx-auto mt-6 min-h-[2.75rem] max-w-xl text-lg font-semibold text-foreground lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              <TypeWriter words={roles} className="text-portfolio-primary" speed={95} pauseDuration={2400} />
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
            >
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Button variant="hero" size="lg" className="group gradient-bg-hero shadow-lg shadow-portfolio-primary/25">
                    View My Work
                    <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  </Button>
                </motion.a>
                <motion.a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" size="lg" className="group border-white/25 bg-black/20 text-foreground backdrop-blur-md hover:bg-black/30 hover:border-portfolio-primary/45">
                    Book a Call
                    <CalendarDays className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </motion.a>
              </div>

              <div className="flex gap-3">
                {[
                  { href: "https://github.com/rifatcse09", Icon: Github },
                  { href: "https://www.linkedin.com/in/rifatcse09/", Icon: Linkedin },
                  { href: "https://medium.com/@rifatcse09", Icon: BookOpen },
                  { href: CV_URL, Icon: FileText },
                  { href: "#contact", Icon: Mail },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.includes(".pdf") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={
                      link.href === "#contact"
                        ? (e) => {
                            e.preventDefault();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }
                        : undefined
                    }
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 + i * 0.06 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 bg-black/20 text-foreground shadow-sm backdrop-blur-md hover:border-portfolio-primary/45 hover:bg-black/30"
                    >
                      <link.Icon className="h-5 w-5" />
                    </Button>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Portrait — right column, rounded “backdrop” shape */}
          <motion.div
            className="relative mx-auto flex w-full max-w-[340px] justify-center lg:col-span-5 lg:mx-0 lg:max-w-none lg:justify-end"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[min(100%,380px)]">
              {/* Outer soft blob */}
              <div
                className="absolute -inset-3 rounded-[2.75rem] bg-gradient-to-br from-portfolio-primary/25 via-portfolio-cool/20 to-portfolio-secondary/25 opacity-90 blur-2xl"
                aria-hidden
              />
              {/* Ring “backdrop” shape */}
              <div
                className="absolute -inset-1 rounded-[2.35rem] bg-gradient-to-br from-portfolio-primary/30 via-portfolio-cool/20 to-portfolio-secondary/25 p-[2px] shadow-[0_25px_60px_-15px_hsl(var(--portfolio-primary)/0.28)] backdrop-blur-xl"
                aria-hidden
              >
                <div className="h-full w-full rounded-[2.3rem] bg-black/20 backdrop-blur-md" />
              </div>
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/20 bg-black/25 shadow-xl ring-1 ring-white/10 backdrop-blur-xl">
                <img
                  src={heroPortrait}
                  alt="MD Rifatul Islam"
                  className="aspect-[3/4] w-full object-cover object-[center_15%]"
                  width={760}
                  height={1013}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-16 w-10 justify-center rounded-full border-2 border-foreground/20 pt-2">
          <motion.div
            className="h-3 w-1.5 rounded-full bg-foreground/40"
            animate={{ y: [0, 12], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
