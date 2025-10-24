import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Integrations = () => {
  const { toast } = useToast();

  const platforms = [
    { name: "Instagram", connected: true, followers: "18.5K" },
    { name: "Facebook", connected: true, followers: "15.3K" },
    { name: "Twitter", connected: false, followers: null },
    { name: "LinkedIn", connected: false, followers: null },
    { name: "Google My Business", connected: false, followers: null },
    { name: "TikTok", connected: false, followers: null },
  ];

  const handleConnect = (platform: string) => {
    toast({
      title: "Coming Soon",
      description: `${platform} integration will be available soon`,
    });
  };

  const handleDisconnect = (platform: string) => {
    toast({
      title: "Disconnected",
      description: `${platform} has been disconnected`,
      variant: "destructive",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Platform Integrations</h1>
          <p className="text-muted-foreground">Connect and manage your social media accounts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  {platform.connected ? (
                    <Badge className="bg-green-500">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  ) : (
                    <Badge variant="outline">
                      <XCircle className="w-3 h-3 mr-1" />
                      Not Connected
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {platform.connected && platform.followers && (
                  <div>
                    <p className="text-sm text-muted-foreground">Followers</p>
                    <p className="text-2xl font-bold">{platform.followers}</p>
                  </div>
                )}

                {platform.connected ? (
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Manage Settings
                    </Button>
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={() => handleDisconnect(platform.name)}
                    >
                      Disconnect
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => handleConnect(platform.name)}
                  >
                    Connect Account
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Integration Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {platforms
                .filter((p) => p.connected)
                .map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{platform.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Connected • {platform.followers} followers
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-muted-foreground">Active</span>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
