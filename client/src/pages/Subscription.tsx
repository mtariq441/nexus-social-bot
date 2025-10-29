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
import { useLanguage } from "@/components/LanguageProvider";

const Subscription = () => {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const { toast } = useToast();
  const currentPlan = "professional"; // This would come from user context

  const plans = [
    {
      id: "starter",
      icon: Zap,
      monthlyPrice: 29,
      annualPrice: 24,
      limits: {
        posts: 30,
        accounts: 3,
        users: 1,
      },
    },
    {
      id: "professional",
      icon: Crown,
      monthlyPrice: 79,
      annualPrice: 65,
      popular: true,
      limits: {
        posts: -1,
        accounts: 10,
        users: 5,
      },
    },
    {
      id: "enterprise",
      icon: Building2,
      monthlyPrice: 199,
      annualPrice: 165,
      limits: {
        posts: -1,
        accounts: -1,
        users: -1,
      },
    },
  ];

  const handleUpgrade = (planId: string) => {
    toast({
      title: t.subscription.planUpdated,
      description: t.subscription.planUpdatedDescription,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-subscription-title">{t.subscription.title}</h1>
          <p className="text-muted-foreground">{t.subscription.subtitle}</p>
        </div>

        {/* Billing Toggle */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center space-x-4">
              <Label htmlFor="billing-toggle" className={billingCycle === "monthly" ? "font-semibold" : ""}>
                {t.subscription.monthly}
              </Label>
              <Switch
                id="billing-toggle"
                checked={billingCycle === "annual"}
                onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
                data-testid="switch-billing-cycle"
              />
              <Label htmlFor="billing-toggle" className={billingCycle === "annual" ? "font-semibold" : ""}>
                {t.subscription.annual}
                <Badge variant="secondary" className="ml-2">{t.subscription.savePercent}</Badge>
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
            const planData = t.subscription[plan.id as keyof typeof t.subscription] as { name: string; description: string; features: string[] };

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
                      <Badge className="bg-gradient-primary text-white">{t.subscription.mostPopular}</Badge>
                    </div>
                  )}
                  {isCurrentPlan && (
                    <div className="absolute -top-3 right-4">
                      <Badge variant="secondary">{t.subscription.currentPlan}</Badge>
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{planData.name}</CardTitle>
                    </div>
                    <CardDescription>{planData.description}</CardDescription>
                    <div className="pt-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">${price}</span>
                        <span className="text-muted-foreground ml-2">
                          /{billingCycle === "monthly" ? t.subscription.month : t.subscription.year}
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {t.subscription.billedAnnually} ${price * 12}
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {planData.features.map((feature, i) => (
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
                      {isCurrentPlan ? t.subscription.currentPlan : `${t.subscription.upgradeTo} ${planData.name}`}
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
            <CardTitle>{t.subscription.faqTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">{t.subscription.faqChangePlanTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {t.subscription.faqChangePlanAnswer}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t.subscription.faqPaymentTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {t.subscription.faqPaymentAnswer}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t.subscription.faqCancelTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {t.subscription.faqCancelAnswer}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Subscription;
