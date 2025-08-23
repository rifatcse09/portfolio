import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MultiMesh",
      description: "A sophisticated multi-vendor e-commerce platform built with modern PHP architecture and advanced features for scalable online marketplace solutions.",
      image: project1,
      technologies: ["PHP", "Laravel", "Vue.js", "PostgreSQL", "Docker"],
      features: [
        "Multi-vendor marketplace functionality",
        "Advanced product management system",
        "Real-time order tracking",
        "Comprehensive admin dashboard"
      ],
      challenges: "Building a scalable multi-vendor system that can handle complex vendor relationships and inventory management.",
      solution: "Implemented microservices architecture with Laravel and optimized database queries for better performance.",
      liveUrl: "https://github.com/rifatcse09/MultiMesh",
      githubUrl: "https://github.com/rifatcse09/MultiMesh",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Lead Management System",
      description: "Comprehensive CRM solution for managing leads, customer interactions, and sales pipeline with Vue.js frontend and robust backend API.",
      image: project2,
      technologies: ["Vue.js", "PHP", "Laravel", "MySQL", "REST API"],
      features: [
        "Advanced lead tracking and scoring",
        "Customer interaction history",
        "Sales pipeline visualization",
        "Automated follow-up reminders"
      ],
      challenges: "Creating an intuitive user interface while managing complex lead data relationships and workflows.",
      solution: "Developed modular Vue.js components with efficient state management and optimized API endpoints.",
      liveUrl: "https://github.com/rifatcse09/lead_management",
      githubUrl: "https://github.com/rifatcse09/lead_management",
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Custom eCommerce Platform",
      description: "Tailored e-commerce solution with modern web technologies, focusing on performance optimization and user experience.",
      image: project3,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Custom shopping cart functionality",
        "Payment gateway integration",
        "Inventory management system",
        "Responsive design implementation"
      ],
      challenges: "Building a custom e-commerce platform from scratch while ensuring security and performance standards.",
      solution: "Implemented clean code architecture with proper security measures and performance optimization techniques.",
      liveUrl: "https://github.com/rifatcse09/custom-eCommerce",
      githubUrl: "https://github.com/rifatcse09/custom-eCommerce",
      category: "Full-Stack"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects from my GitHub repository showcasing my expertise in 
              full-stack development, system architecture, and modern web technologies.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden card-hover">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.challenges}
                        </p>
                        <h4 className="font-semibold mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="gradient" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;