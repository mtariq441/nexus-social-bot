import { Link } from "wouter";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-glow-sm">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">SocialSync</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.landing.footer.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t.landing.footer.product}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">{t.landing.navbar.features}</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">{t.landing.navbar.pricing}</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">{t.landing.navbar.testimonials}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t.landing.footer.company}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t.landing.footer.about}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.landing.footer.blog}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.landing.footer.careers}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t.landing.footer.legal}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t.landing.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.landing.footer.terms}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.landing.footer.contact}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{t.landing.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
