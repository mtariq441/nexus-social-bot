import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

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
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-2 border-primary shadow-glow"
                  : "border-2 hover:border-primary/50 transition-colors"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/auth">
                  <a>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      data-testid={`button-plan-${plan.name.toLowerCase()}`}
                    >
                      Start Free Trial
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
