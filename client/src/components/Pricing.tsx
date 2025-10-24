import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small teams",
    features: [
      "3 social accounts",
      "30 scheduled posts/month",
      "Basic analytics",
      "Email support",
      "AI caption suggestions",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    description: "For growing businesses",
    features: [
      "10 social accounts",
      "Unlimited scheduled posts",
      "Advanced analytics",
      "Priority support",
      "AI automation",
      "Team collaboration (5 users)",
      "Custom reports",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Unlimited social accounts",
      "Unlimited scheduled posts",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Full AI automation suite",
      "Unlimited team members",
      "White-label options",
      "API access",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)', opacity: 0.3 }} />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: plan.popular ? 1.02 : 1.05, y: -8 }}
            >
              <Card
                className={`relative h-full flex flex-col overflow-hidden ${
                  plan.popular
                    ? "border-gradient shadow-glow-lg scale-105"
                    : "glass border-2 border-border/50 hover:border-primary/30 hover:shadow-glow-sm"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <motion.span 
                        className="bg-gradient-to-r from-primary to-accent text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-glow-md"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  </>
                )}
                
                <CardHeader className="text-center pb-8 relative z-10">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col relative z-10">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-glow-sm">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Link href="/auth">
                    <Button
                      className={`w-full ${
                        plan.popular 
                          ? "btn-premium bg-gradient-to-r from-primary to-accent hover:shadow-glow-lg text-white border-0" 
                          : "hover:shadow-glow-sm"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                      data-testid={`button-plan-${plan.name.toLowerCase()}`}
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
