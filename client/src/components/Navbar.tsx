import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Language } from "@/lib/translations";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group" data-testid="link-home">
            <motion.div 
              className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-glow-sm"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-bold text-xl gradient-text">SocialSync</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {t.landing.navbar.features}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#pricing"
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {t.landing.navbar.pricing}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#testimonials"
              className="text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {t.landing.navbar.testimonials}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover:shadow-glow-sm transition-all"
              data-testid="button-language"
            >
              <Languages className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <Link href="/auth">
              <Button variant="ghost" className="hover:shadow-glow-sm transition-all" data-testid="button-login">
                {t.landing.navbar.login}
              </Button>
            </Link>
            <Link href="/auth">
              <Button 
                className="btn-premium bg-gradient-to-r from-primary to-accent text-white border-0 hover:shadow-glow-md" 
                data-testid="button-signup"
              >
                {t.landing.navbar.signup}
              </Button>
            </Link>
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-border/50">
                <a
                  href="#features"
                  className="block text-foreground/80 hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.landing.navbar.features}
                </a>
                <a
                  href="#pricing"
                  className="block text-foreground/80 hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.landing.navbar.pricing}
                </a>
                <a
                  href="#testimonials"
                  className="block text-foreground/80 hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.landing.navbar.testimonials}
                </a>
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full justify-start"
                >
                  <Languages className="w-4 h-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
                <Link href="/auth">
                  <Button className="w-full btn-premium bg-gradient-to-r from-primary to-accent text-white border-0">
                    {t.landing.navbar.signup}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
