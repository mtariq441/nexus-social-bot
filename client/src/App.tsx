import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@lib/queryClient";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "@/components/ThemeProvider";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Composer from "./pages/Composer";
import Inbox from "./pages/Inbox";
import Analytics from "./pages/Analytics";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";
import Subscription from "./pages/Subscription";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/composer" component={Composer} />
          <Route path="/dashboard/inbox" component={Inbox} />
          <Route path="/dashboard/analytics" component={Analytics} />
          <Route path="/dashboard/integrations" component={Integrations} />
          <Route path="/dashboard/settings" component={Settings} />
          <Route path="/dashboard/subscription" component={Subscription} />
          <Route path="/dashboard/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
