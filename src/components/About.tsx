import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import myImage from "@/assets/my.png";

const About = () => {
  const skills = [
    "PHP", "Laravel", "JavaScript", "TypeScript", "Node.js", "Vue.js", "Vue 3",
    "Nest.js", "Express.js", "MySQL", "PostgreSQL", "Docker", "AWS", "Git",
    "Tailwind CSS", "Bootstrap", "REST API", "WebSocket", "Microservices", "CI/CD"
  ];

  const stats = [
    { number: "11+", label: "Years Experience" },
    { number: "Sr.", label: "Software Engineer" },
    { number: "Adventure Dhaka", label: "Current Company" },
    { number: "Multiple", label: "Domains Expertise" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As a polyglot developer, I excel in backend development, specializing in PHP and Laravel, 
              with proficiency in Node.js and JavaScript for frontend work. Passionate about Programming, Cloud and DevOps.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 11 years of experience in web development, I've specialized in PHP frameworks 
                and JavaScript technologies. Currently working as Sr. Software Engineer at Adventure Dhaka, 
                I've contributed to diverse projects across various domains and industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm particularly adept at system design, leveraging my skills to architect scalable solutions. 
                My expertise spans from monolithic to microservices architecture, with a keen interest in 
                exploring trendy technologies and implementing best practices in DevOps and cloud solutions.
              </p>
            </div>

            <div className="relative">
              <img 
                src={myImage} 
                alt="About Me" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-portfolio-primary hover:text-white transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;