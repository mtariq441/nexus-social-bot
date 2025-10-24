import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { apiRequest } from "@lib/queryClient";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      try {
        await apiRequest("/api/auth/session");
        setLoading(false);
      } catch (error) {
        setLocation("/auth");
      }
    };
    checkAuth();
  }, [setLocation]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto bg-background">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
