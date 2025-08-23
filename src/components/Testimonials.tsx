import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechStart Inc.",
      avatar: "",
      rating: 5,
      text: "Working with Alex was exceptional. The e-commerce platform exceeded our expectations with its performance and user experience. The attention to detail and technical expertise really showed in the final product."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "DataFlow Solutions",
      avatar: "",
      rating: 5,
      text: "The analytics dashboard Alex built transformed how we visualize our data. The real-time processing capabilities and intuitive interface have significantly improved our decision-making process."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Startup Founder",
      company: "CollabSpace",
      avatar: "",
      rating: 5,
      text: "Alex delivered our project management tool ahead of schedule and within budget. The real-time collaboration features work flawlessly, and our team productivity has increased by 30% since implementation."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Marketing Director",
      company: "GrowthCorp",
      avatar: "",
      rating: 5,
      text: "Excellent communication throughout the project. Alex took the time to understand our business needs and delivered a solution that perfectly aligned with our goals. Highly recommended!"
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