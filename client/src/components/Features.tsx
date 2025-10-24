import { Calendar, MessageSquare, BarChart3, Zap, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduler",
    description: "Schedule posts across all platforms with optimal timing recommendations powered by AI.",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description: "Manage DMs, comments, and reviews from all platforms in one central location.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate responses, generate captions, and handle routine tasks with AI.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance metrics, engagement rates, and growth across all channels.",
  },
  {
    icon: Shield,
    title: "Team Collaboration",
    description: "Work together with your team, assign tasks, and manage permissions easily.",
  },
  {
    icon: Users,
    title: "Multi-Platform Support",
    description: "Connect Instagram, Facebook, Twitter, LinkedIn, and Google My Business.",
  },
];

export const Features = () => {
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
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Everything You Need</span> to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your social media management workflow
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
