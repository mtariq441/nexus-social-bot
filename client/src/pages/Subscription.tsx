import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const { toast } = useToast();
  const currentPlan = "professional"; // This would come from user context

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: Zap,
      monthlyPrice: 29,
      annualPrice: 24,
      description: "Perfect for individuals and small teams",
      features: [
        "3 social accounts",
        "30 scheduled posts/month",
        "Basic analytics",
        "Email support",
        "AI caption suggestions",
        "1 team member",
      ],
      limits: {
        posts: 30,
        accounts: 3,
        users: 1,
      },
    },
    {
      id: "professional",
      name: "Professional",
      icon: Crown,
      monthlyPrice: 79,
      annualPrice: 65,
      description: "For growing businesses",
      popular: true,
      features: [
        "10 social accounts",
        "Unlimited scheduled posts",
        "Advanced analytics",
        "Priority support",
        "AI automation",
        "Team collaboration (5 users)",
        "Custom reports",
        "Hashtag recommendations",
      ],
      limits: {
        posts: -1,
        accounts: 10,
        users: 5,
      },
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Building2,
      monthlyPrice: 199,
      annualPrice: 165,
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
        "Custom integrations",
        "SLA guarantee",
      ],
      limits: {
        posts: -1,
        accounts: -1,
        users: -1,
      },
    },
  ];

  const handleUpgrade = (planId: string) => {
    toast({
      title: "Plan Updated",
      description: `Successfully upgraded to ${planId} plan`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-subscription-title">Subscription Plans</h1>
          <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>

        {/* Billing Toggle */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center space-x-4">
              <Label htmlFor="billing-toggle" className={billingCycle === "monthly" ? "font-semibold" : ""}>
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={billingCycle === "annual"}
                onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
                data-testid="switch-billing-cycle"
              />
              <Label htmlFor="billing-toggle" className={billingCycle === "annual" ? "font-semibold" : ""}>
                Annual
                <Badge variant="secondary" className="ml-2">Save 20%</Badge>
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            const isCurrentPlan = currentPlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full flex flex-col ${
                    plan.popular
                      ? "border-2 border-primary shadow-glow"
                      : "border-2 hover:border-primary/50 transition-colors"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-primary text-white">Most Popular</Badge>
                    </div>
                  )}
                  {isCurrentPlan && (
                    <div className="absolute -top-3 right-4">
                      <Badge variant="secondary">Current Plan</Badge>
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">${price}</span>
                        <span className="text-muted-foreground ml-2">
                          /{billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Billed ${price * 12} annually
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handleUpgrade(plan.id)}
                      disabled={isCurrentPlan}
                      data-testid={`button-select-${plan.id}`}
                    >
                      {isCurrentPlan ? "Current Plan" : `Upgrade to ${plan.name}`}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Can I change my plan anytime?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! All plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
