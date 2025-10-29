import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AuthLayout } from "@/components/AuthLayout";
import { Loader2, Chrome, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const Auth = () => {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || (!isLogin && !name)) {
      toast({
        title: t.common.error,
        description: t.auth.errorFillFields,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast({
        title: t.common.success,
        description: isLogin ? t.auth.successLogin : t.auth.successSignup,
      });
      
      setLocation("/dashboard");
      setLoading(false);
    }, 500);
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: t.auth.socialLoginTitle,
      description: `${provider} ${t.auth.socialLoginSoon}`,
    });
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="glass-strong border-2 border-border/50 hover:border-primary/20 transition-all shadow-glow-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold gradient-text">
              {isLogin ? t.auth.welcomeBack : t.auth.createAccount}
            </CardTitle>
            <CardDescription className="text-base">
              {isLogin
                ? t.auth.loginDescription
                : t.auth.signupDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin("Google")}
                  data-testid="button-google-login"
                  className="w-full glass hover:shadow-glow-sm transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Chrome className="w-4 h-4 mr-2" />
                  </motion.div>
                  Google
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin("GitHub")}
                  data-testid="button-github-login"
                  className="w-full glass hover:shadow-glow-sm transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                  </motion.div>
                  GitHub
                </Button>
              </motion.div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="glass px-3 py-1 text-muted-foreground rounded-full">{t.auth.continueWith}</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <Label htmlFor="name" className="text-sm font-medium">{t.auth.fullName}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.auth.fullNamePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    data-testid="input-name"
                    className="glass focus-ring-glow transition-all"
                  />
                </motion.div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">{t.auth.email}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.auth.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-email"
                  className="glass focus-ring-glow transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">{t.auth.password}</Label>
                  {isLogin && (
                    <a href="#" className="text-sm text-primary hover:underline hover:text-primary-glow transition-colors">
                      {t.auth.forgotPassword}
                    </a>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder={t.auth.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  data-testid="input-password"
                  className="glass focus-ring-glow transition-all"
                />
                {!isLogin && (
                  <p className="text-xs text-muted-foreground">
                    {t.auth.passwordRequirement}
                  </p>
                )}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full btn-premium bg-gradient-to-r from-primary to-accent text-white border-0 hover:shadow-glow-lg text-base h-11" 
                  disabled={loading}
                  data-testid="button-submit"
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isLogin ? t.auth.signIn : t.auth.createAccountButton}
                </Button>
              </motion.div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setName("");
                  setEmail("");
                  setPassword("");
                }}
                className="text-primary hover:text-primary-glow hover:underline transition-colors"
                data-testid="button-toggle-auth"
              >
                {isLogin
                  ? t.auth.noAccount
                  : t.auth.haveAccount}
              </button>
            </div>

            {!isLogin && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-xs text-center text-muted-foreground"
              >
                {t.auth.termsAgreement}{" "}
                <a href="#" className="text-primary hover:underline">{t.auth.termsOfService}</a>
                {" "}{t.auth.and}{" "}
                <a href="#" className="text-primary hover:underline">{t.auth.privacyPolicy}</a>
              </motion.p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AuthLayout>
  );
};

export default Auth;
