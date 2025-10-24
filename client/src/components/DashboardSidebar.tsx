import { useLocation } from "wouter";
import { MessageSquare, LayoutDashboard, Calendar, Inbox, BarChart3, Settings, Link2, LogOut } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@lib/queryClient";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Composer", url: "/dashboard/composer", icon: Calendar },
  { title: "Inbox", url: "/dashboard/inbox", icon: Inbox },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Integrations", url: "/dashboard/integrations", icon: Link2 },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export const DashboardSidebar = () => {
  const { state } = useSidebar();
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const collapsed = state === "collapsed";

  const handleLogout = async () => {
    try {
      await apiRequest("/api/auth/logout", { method: "POST" });
      localStorage.removeItem('sessionId');
      setLocation("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
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
                <span className="font-bold">SocialSync</span>
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
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={location === item.url ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                      data-testid={`link-${item.title.toLowerCase()}`}
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
                  {!collapsed && <span>Logout</span>}
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
