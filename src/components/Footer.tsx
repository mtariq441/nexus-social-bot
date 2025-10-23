import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">SocialSync</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The all-in-one platform for social media management.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#features">Features</Link></li>
              <li><Link to="#pricing">Pricing</Link></li>
              <li><Link to="#testimonials">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 SocialSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
