import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <a className="flex items-center space-x-2" data-testid="link-home">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">SocialSync</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </a>
            <Link href="/auth">
              <a>
                <Button variant="ghost" data-testid="button-login">Login</Button>
              </a>
            </Link>
            <Link href="/auth">
              <a>
                <Button data-testid="button-signup">Start Free Trial</Button>
              </a>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-foreground/80 hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="block text-foreground/80 hover:text-foreground">
              Pricing
            </a>
            <a href="#testimonials" className="block text-foreground/80 hover:text-foreground">
              Testimonials
            </a>
            <Link href="/auth">
              <a>
                <Button className="w-full">Get Started</Button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
