import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { easeOut } from "@/lib/motion";

const services = [
  {
    title: "AI Backends",
    description: "Model APIs, workers, and queues so AI features behave like the rest of the product.",
    href: "/services/ai-backends",
  },
  {
    title: "SaaS Integrations",
    description: "Stripe, CRM, Twilio, and webhooks, with auth and retries inside your app.",
    href: "/services/saas-integrations",
  },
  {
    title: "RAG & Agents",
    description: "Retrieval and tool-using agents grounded in your docs and services.",
    href: "/services/rag-and-agents",
  },
  {
    title: "Production Architecture",
    description: "Auth, tenancy, Postgres, and deploys on GCP, AWS, or Cloudflare.",
    href: "/services/ai-backends#production",
  },
];

const Services = () => {
  return (
    <div id="services" className="relative mt-16 lg:mt-20">
      <div className="grid md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Link key={service.title} to={service.href} className="group relative block h-full px-1 py-6 md:px-5">
            <motion.span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px origin-left bg-portfolio-primary/80"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: easeOut }}
            />
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.12 + index * 0.1, ease: easeOut }}
              whileHover={{ y: -4 }}
            >
              <span className="font-display text-sm text-portfolio-primary transition-transform duration-300 group-hover:inline-block">
                0{index + 1}
              </span>
              <h2 className="mt-3 font-display text-xl text-foreground transition-colors duration-300 group-hover:text-portfolio-primary">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
