import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import mazharAvatar from "@/assets/mazhar.jpeg";
import koji from "@/assets/koji.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mazhar Ahmed",
      position: "CTO",
      company: "atB Jobs",
      avatar: mazharAvatar,
      rating: 5,
      text: "We have worked together. Rifatul Islam is a hard working, problem solving team player. He took lead in many projects and solved crucial technical issues. He is always ready to dive into new technology / skills. He can complete his task in proper due time. He is responsible, attentive and always respectful to others. He communicates with his team to archive the outcome of the projects. I will look forward to work with him and pray for his bright future."
    },
    {
      id: 2,
      name: "KJ(koji) iinuma",
      position: "CEO",
      company: "TheBEATS(US) & KJ Commons(JP)",
      avatar: koji,
      rating: 5,
      text: "He is very passionate to meet the requirements of schedule and quality always. I'm really happy to work with him."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Startup Founder",
      company: "CollabSpace",
      avatar: "",
      rating: 5,
      text: "Rifat delivered our project management tool ahead of schedule and within budget. The real-time collaboration features work flawlessly, and our team productivity has increased by 30% since implementation."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Marketing Director",
      company: "GrowthCorp",
      avatar: "",
      rating: 5,
      text: "Excellent communication throughout the project. Rifat took the time to understand our business needs and delivered a solution that perfectly aligned with our goals. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What clients say about working with me and the impact of our collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="card-hover p-6 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="border-2 border-portfolio-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-portfolio-primary/10 text-portfolio-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <div className="text-6xl font-bold text-portfolio-primary">"</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;