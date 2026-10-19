import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import {
  SiAmazonapigateway,
  SiAmazoncloudwatch,
  SiAmazoncognito,
  SiAmazondynamodb,
  SiAmazonecs,
  SiAmazoneks,
  SiAmazoniam,
  SiAmazonrds,
  SiAmazons3,
  SiAmazonsqs,
  SiAmazonwebservices,
  SiAnthropic,
  SiApachekafka,
  SiAwslambda,
  SiCloudflare,
  SiCloudflarepages,
  SiCloudflareworkers,
  SiDocker,
  SiDigitalocean,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiGraphql,
  SiJenkins,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTerraform,
  SiTelegram,
  SiTypescript,
  SiWhatsapp,
  SiJsonwebtokens,
  SiAnsible,
  SiWeb3Dotjs,
} from "react-icons/si";
import { Boxes, Bot, BotMessageSquare, BrainCircuit, KeyRound, Layers, Network, Workflow } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

type SkillIcon = IconType | ComponentType<{ className?: string }>;

type SkillEntry = { label: string; Icon: SkillIcon };

type Accent = "primary" | "secondary" | "cool";

const skillGroups: { title: string; subtitle: string; accent: Accent; items: SkillEntry[] }[] = [
  {
    title: "AI & automation",
    subtitle: "Assistants, agents, RAG, and real integrations",
    accent: "secondary",
    items: [
      { label: "AI assistants", Icon: BotMessageSquare },
      { label: "AI agents", Icon: Bot },
      { label: "AI application development", Icon: Layers },
      { label: "RAG", Icon: BrainCircuit },
      { label: "MCP", Icon: Network },
      { label: "OpenAI API", Icon: SiOpenai },
      { label: "Claude / Anthropic API", Icon: SiAnthropic },
      { label: "Workflow automation", Icon: Workflow },
      { label: "Telegram bots", Icon: SiTelegram },
      { label: "WhatsApp bots", Icon: SiWhatsapp },
      { label: "Web3.js", Icon: SiWeb3Dotjs },
    ],
  },
  {
    title: "Backend & data",
    subtitle: "APIs, services, and persistence",
    accent: "primary",
    items: [
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "NestJS", Icon: SiNestjs },
      { label: "Laravel", Icon: SiLaravel },
      { label: "PHP", Icon: SiPhp },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "MySQL", Icon: SiMysql },
      { label: "REST & GraphQL", Icon: SiGraphql },
      { label: "Microservices", Icon: Boxes },
      { label: "Event-driven design", Icon: SiApachekafka },
      { label: "Kafka", Icon: SiApachekafka },
      { label: "RabbitMQ", Icon: SiRabbitmq },
      { label: "Redis", Icon: SiRedis },
    ],
  },
  {
    title: "Supabase & Cloudflare",
    subtitle: "Edge data, Workers, Queues, KV, and the wider CF stack",
    accent: "cool",
    items: [
      { label: "Supabase", Icon: SiSupabase },
      { label: "Cloudflare Workers", Icon: SiCloudflareworkers },
      { label: "Cloudflare Queues", Icon: SiCloudflare },
      { label: "Workers KV", Icon: SiCloudflare },
      { label: "Cloudflare Pages", Icon: SiCloudflarepages },
      { label: "Cloudflare R2 & CDN", Icon: SiCloudflare },
      { label: "Cloudflare ecosystem", Icon: SiCloudflare },
      { label: "DigitalOcean", Icon: SiDigitalocean },
      { label: "Google Cloud", Icon: SiGooglecloud },
    ],
  },
  {
    title: "AWS, DevOps & delivery",
    subtitle: "Core AWS primitives, infra automation, and production reliability",
    accent: "primary",
    items: [
      { label: "Amazon Web Services", Icon: SiAmazonwebservices },
      { label: "AWS Lambda", Icon: SiAwslambda },
      { label: "Amazon S3", Icon: SiAmazons3 },
      { label: "Amazon RDS", Icon: SiAmazonrds },
      { label: "DynamoDB", Icon: SiAmazondynamodb },
      { label: "Amazon SQS", Icon: SiAmazonsqs },
      { label: "API Gateway", Icon: SiAmazonapigateway },
      { label: "Amazon ECS", Icon: SiAmazonecs },
      { label: "Amazon EKS", Icon: SiAmazoneks },
      { label: "AWS IAM", Icon: SiAmazoniam },
      { label: "Amazon Cognito", Icon: SiAmazoncognito },
      { label: "CloudWatch", Icon: SiAmazoncloudwatch },
      { label: "Docker", Icon: SiDocker },
      { label: "Kubernetes", Icon: SiKubernetes },
      { label: "Terraform", Icon: SiTerraform },
      { label: "Ansible", Icon: SiAnsible },
      { label: "Linux", Icon: SiLinux },
      { label: "Nginx", Icon: SiNginx },
      { label: "GitHub Actions", Icon: SiGithubactions },
      { label: "GitLab CI", Icon: SiGitlab },
      { label: "Jenkins", Icon: SiJenkins },
      { label: "JWT", Icon: SiJsonwebtokens },
      { label: "OAuth2", Icon: KeyRound },
      { label: "React.js", Icon: SiReact },
      { label: "Next.js", Icon: SiNextdotjs },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.06 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 420, damping: 28 },
  },
};

const accentRing: Record<Accent, string> = {
  primary: "from-portfolio-primary/50 via-portfolio-primary/20 to-transparent",
  secondary: "from-portfolio-secondary/50 via-portfolio-secondary/20 to-transparent",
  cool: "from-portfolio-cool/50 via-portfolio-cool/20 to-transparent",
};

const accentGlow: Record<Accent, string> = {
  primary: "group-hover:shadow-[0_0_28px_-8px_hsl(var(--portfolio-primary)/0.45)]",
  secondary: "group-hover:shadow-[0_0_28px_-8px_hsl(var(--portfolio-secondary)/0.45)]",
  cool: "group-hover:shadow-[0_0_28px_-8px_hsl(var(--portfolio-cool)/0.45)]",
};

const About = () => {
  return (
    <section id="about" className="section-noise relative overflow-hidden bg-background py-24">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-portfolio-primary/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-portfolio-secondary/8 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-portfolio-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-16 text-center">
            <p className="section-kicker">
              Technical depth
            </p>
            <h2 className="section-header section-title mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              The stack behind the niche: model APIs, retrieval, SaaS integrations, and the production systems they run on.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative mx-auto max-w-5xl">
              <motion.div
                className="relative border border-border/70 bg-background/60 p-6 shadow-2xl shadow-black/[0.06] backdrop-blur-xl md:p-10 dark:shadow-black/20 glass-panel modern-surface hover-lift-soft animated-border"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--portfolio-primary)/0.06),transparent_40%,hsl(var(--portfolio-secondary)/0.05))]" />

                <div className="relative">
                  <div className="mb-10 text-center md:text-left">
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                      Technologies <span className="gradient-text">&amp; Skills</span>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">
                      AI backends first, then the data, edge, and cloud pieces that keep them in production.
                    </p>
                  </div>

                  <div className="flex flex-col gap-12">
                    {skillGroups.map((group) => (
                      <div key={group.title}>
                        <div className="mb-4 flex flex-col gap-1 border-l-2 border-portfolio-primary/40 pl-4 md:flex-row md:items-end md:justify-between md:border-l-0 md:border-b md:border-border/60 md:pb-3 md:pl-0">
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                              {group.title}
                            </h4>
                            <p className="text-xs text-muted-foreground/90 md:text-sm">{group.subtitle}</p>
                          </div>
                          <div
                            className={`hidden h-px flex-1 bg-gradient-to-r md:ml-8 md:block ${accentRing[group.accent]}`}
                            aria-hidden
                          />
                        </div>

                        <motion.ul
                          className="flex flex-wrap gap-2.5 md:gap-3"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.1 }}
                        >
                          {group.items.map(({ label, Icon }) => (
                            <motion.li key={label} variants={chipVariants} className="group">
                              <span
                                className={`
                                  relative inline-flex items-center gap-2 border border-border/80 bg-muted/25 px-3 py-2 text-xs font-medium leading-none text-foreground/95
                                  transition-[transform,box-shadow,border-color] duration-300 ease-out
                                  hover:-translate-y-0.5 hover:border-portfolio-primary/35
                                  md:px-3.5 md:py-2.5 md:text-[0.8125rem]
                                  ${accentGlow[group.accent]}
                                  [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]
                                `}
                              >
                                <span
                                  className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${accentRing[group.accent]}`}
                                  aria-hidden
                                />
                                <Icon
                                  className="relative z-10 size-[1.05rem] shrink-0 opacity-90 group-hover:opacity-100 md:size-[1.125rem]"
                                  aria-hidden
                                />
                                <span className="relative z-10">{label}</span>
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
