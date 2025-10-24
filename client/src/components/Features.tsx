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
    <section id="features" className="py-20 px-4 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your social media management workflow
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
