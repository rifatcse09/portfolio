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
      title: "E-Commerce Platform",
      description: "Modern full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard with analytics",
        "Mobile-responsive design"
      ],
      challenges: "Handling high concurrent users during flash sales while maintaining data consistency.",
      solution: "Implemented Redis caching and database optimization techniques, resulting in 40% faster load times.",
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced filtering capabilities.",
      image: project2,
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "AWS"],
      features: [
        "Real-time collaboration",
        "Advanced task filtering",
        "Team chat integration",
        "File sharing capabilities"
      ],
      challenges: "Ensuring real-time synchronization across multiple users without conflicts.",
      solution: "Built custom conflict resolution system using operational transformation principles.",
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts, custom reports, and real-time data processing.",
      image: project3,
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      features: [
        "Interactive data visualizations",
        "Custom report generation",
        "Real-time data processing",
        "Export capabilities"
      ],
      challenges: "Processing and visualizing large datasets without performance degradation.",
      solution: "Implemented data pagination and lazy loading with efficient database indexing.",
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
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
              Detailed case studies showcasing my approach to problem-solving, 
              technical implementation, and the impact of each solution.
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
                        <Button variant="gradient" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
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