import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import resumePDF from "@/assets/Rifatul_fullstack_10+exp.pdf";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/20 via-transparent to-portfolio-secondary/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi 👋 I'm</span>
            <br />
            <span className="gradient-text">MD Rifatul Islam</span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Senior Software Engineer | PHP • Laravel • Vue.js  • Node.js | Cloud & DevOps Enthusiast
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/rifatcse09" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="glow" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/rifatcse09/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="glow" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href={resumePDF} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="glow" size="icon" className="rounded-full">
                  <FileText className="h-5 w-5" />
                </Button>
              </a>
              <Button variant="glow" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-2 h-2 bg-portfolio-primary rounded-full opacity-60" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-3 h-3 bg-portfolio-secondary rounded-full opacity-40" />
          </div>
          <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-1 h-1 bg-white rounded-full opacity-50" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;