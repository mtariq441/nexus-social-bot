import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">SocialSync</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link to="/auth">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth">
              <Button>Start Free Trial</Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="#features" className="block text-foreground/80 hover:text-foreground">
              Features
            </Link>
            <Link to="#pricing" className="block text-foreground/80 hover:text-foreground">
              Pricing
            </Link>
            <Link to="#testimonials" className="block text-foreground/80 hover:text-foreground">
              Testimonials
            </Link>
            <Link to="/auth">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
