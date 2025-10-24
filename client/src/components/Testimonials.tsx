import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Social Media Manager",
    company: "TechCorp",
    content: "SocialSync has transformed how we manage our social media. The AI features save us hours every week!",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthHub",
    content: "The unified inbox is a game-changer. We never miss a message or comment across any platform.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "CreativeStudio",
    content: "Best investment for our agency. The analytics and scheduling features are incredibly powerful.",
    rating: 5,
    initials: "ER",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Loved by Teams</span> Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who trust SocialSync
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass border-2 border-border/50 hover:border-primary/30 hover:shadow-glow-sm transition-all h-full relative overflow-hidden group">
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                <CardContent className="pt-6 relative z-10">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 border-2 border-primary/20 shadow-glow-sm">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
