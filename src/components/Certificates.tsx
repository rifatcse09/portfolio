import certificate1 from "@/assets/es6.png";
import certificate2 from "@/assets/devops.png";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    { id: 1, src: certificate1, alt: "ES6 Certificate" },
    { id: 2, src: certificate2, alt: "DevOps Certificate" },
  ];

  return (
    <section id="certificates" className="section-noise relative overflow-hidden bg-gradient-to-b from-portfolio-cool/[0.04] to-portfolio-accent/[0.03] py-24 dark:from-portfolio-cool/10 dark:to-portfolio-accent/[0.06]">
      <div className="absolute top-0 right-0 w-80 h-80 bg-portfolio-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="section-kicker">
              Credentials
            </p>
            <h2 className="section-header section-title mb-6">
              Certifications & <span className="gradient-text">Proof</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications that back the skills listed above.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-xl ring-2 ring-portfolio-accent/20 glass-panel modern-surface hover-lift-soft animated-border"
                  whileHover={{ scale: 1.03, y: -6, rotate: 0.4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <img
                    src={certificate.src}
                    alt={certificate.alt}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
