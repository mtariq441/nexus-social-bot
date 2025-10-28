import { MessageSquare, Check } from "lucide-react";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const features = [
  "Schedule posts across all platforms",
  "AI-powered caption generation",
  "Unified inbox for all messages",
];

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Branding */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent p-12 text-white"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }} />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-2xl rotate-45 animate-float-slow" />
        
        <div className="max-w-md space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <motion.div 
              className="w-14 h-14 bg-white/95 rounded-xl flex items-center justify-center shadow-glow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare className="w-8 h-8 text-primary" />
            </motion.div>
            <span className="font-bold text-4xl">Postify</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl font-bold leading-tight"
          >
            Manage all your social media in one powerful platform
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/90 leading-relaxed"
          >
            Join thousands of businesses streamlining their social media management with AI-powered tools.
          </motion.p>
          
          <div className="space-y-5 pt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-4 group"
              >
                <motion.div 
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-glow-sm group-hover:bg-white/30 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <Check className="w-6 h-6" />
                  </motion.div>
                </motion.div>
                <span className="text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center p-8 bg-background dark:bg-background relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-mesh)' }} />
        
        <div className="w-full max-w-md relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
