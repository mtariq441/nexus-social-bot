import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: t.landing.testimonials.items.sarah.name,
      role: t.landing.testimonials.items.sarah.role,
      company: t.landing.testimonials.items.sarah.company,
      content: t.landing.testimonials.items.sarah.content,
      rating: 5,
      initials: "SJ",
    },
    {
      name: t.landing.testimonials.items.michael.name,
      role: t.landing.testimonials.items.michael.role,
      company: t.landing.testimonials.items.michael.company,
      content: t.landing.testimonials.items.michael.content,
      rating: 5,
      initials: "MC",
    },
    {
      name: t.landing.testimonials.items.emily.name,
      role: t.landing.testimonials.items.emily.role,
      company: t.landing.testimonials.items.emily.company,
      content: t.landing.testimonials.items.emily.content,
      rating: 5,
      initials: "ER",
    },
  ];

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
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            {t.landing.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.landing.testimonials.subtitle}
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
                        {testimonial.role} - {testimonial.company}
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
