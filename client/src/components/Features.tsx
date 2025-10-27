import { Calendar, MessageSquare, BarChart3, Zap, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Calendar,
      title: t.landing.features.cards.scheduler.title,
      description: t.landing.features.cards.scheduler.description,
    },
    {
      icon: MessageSquare,
      title: t.landing.features.cards.inbox.title,
      description: t.landing.features.cards.inbox.description,
    },
    {
      icon: Zap,
      title: t.landing.features.cards.automation.title,
      description: t.landing.features.cards.automation.description,
    },
    {
      icon: BarChart3,
      title: t.landing.features.cards.analytics.title,
      description: t.landing.features.cards.analytics.description,
    },
    {
      icon: Shield,
      title: t.landing.features.cards.collaboration.title,
      description: t.landing.features.cards.collaboration.description,
    },
    {
      icon: Users,
      title: t.landing.features.cards.multiPlatform.title,
      description: t.landing.features.cards.multiPlatform.description,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            {t.landing.features.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.landing.features.subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="glass border-2 border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-sm h-full group">
                  <CardHeader>
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow-md transition-all"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
