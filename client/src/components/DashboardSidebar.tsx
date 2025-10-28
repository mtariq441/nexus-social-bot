import { useLocation } from "wouter";
import { MessageSquare, LayoutDashboard, Calendar, Inbox, BarChart3, Settings, Link2, LogOut, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import { CreditCard, Shield } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export const DashboardSidebar = () => {
  const { state } = useSidebar();
  const [location, setLocation] = useLocation();
  const collapsed = state === "collapsed";
  const { t } = useLanguage();

  const menuItems = [
    { title: t.nav.dashboard, url: "/dashboard", icon: LayoutDashboard, testId: "dashboard" },
    { title: t.nav.composer, url: "/dashboard/composer", icon: Calendar, testId: "composer" },
    { title: t.nav.inbox, url: "/dashboard/inbox", icon: Inbox, testId: "inbox" },
    { title: t.nav.analytics, url: "/dashboard/analytics", icon: BarChart3, testId: "analytics" },
    { title: t.nav.integrations, url: "/dashboard/integrations", icon: Link2, testId: "integrations" },
    { title: t.nav.team, url: "/dashboard/team", icon: Users, testId: "team" },
    { title: t.nav.subscription, url: "/dashboard/subscription", icon: CreditCard, testId: "subscription" },
    { title: t.nav.admin, url: "/dashboard/admin", icon: Shield, testId: "admin" },
    { title: t.nav.settings, url: "/dashboard/settings", icon: Settings, testId: "settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('sessionId');
    setLocation("/");
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center space-x-2 px-2">
            {!collapsed && (
              <>
                <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">Postify</span>
              </>
            )}
            {collapsed && (
              <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center mx-auto">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
            )}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.testId}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={location === item.url ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                      data-testid={`link-${item.testId}`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} data-testid="button-logout">
                  <LogOut className="h-4 w-4" />
                  {!collapsed && <span>{t.nav.logout}</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <div className="absolute bottom-4 left-2">
        <SidebarTrigger />
      </div>
    </Sidebar>
  );
};
