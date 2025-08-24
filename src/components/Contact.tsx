import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Contact via GitHub",
      action: "https://github.com/rifatcse09"
    },
    {
      icon: Phone,
      title: "LinkedIn",
      description: "in/rifatcse09",
      action: "https://www.linkedin.com/in/rifatcse09/"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Dhaka, Bangladesh",
      action: "#"
    }
  ];

  const handleSendEmail = () => {
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:rifatcse09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project 
              and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Currently working as Sr. Software Engineer at JoulesLabs. I'm passionate about 
                  building scalable web applications and exploring new technologies. Feel free to 
                  connect with me for collaboration opportunities or technical discussions.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-portfolio-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <a 
                        href={info.action}
                        className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                      >
                        {info.description}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold mb-4">What I Bring to the Table:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                    11+ years of professional experience
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                    Expertise in system design and architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                    Polyglot developer (PHP, Laravel, Vue.js, Node.js)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                    DevOps and cloud technologies expertise
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Project Discussion" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-32 resize-none"
                  />
                </div>
                
                <Button variant="gradient" className="w-full" onClick={handleSendEmail}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;