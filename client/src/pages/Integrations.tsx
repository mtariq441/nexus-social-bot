import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/components/LanguageProvider";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, Clock, Users } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin, SiTiktok, SiYoutube, SiSnapchat, SiThreads } from "react-icons/si";
import { MdBusiness } from "react-icons/md";

interface Platform {
  id: string;
  name: string;
  connected: boolean;
  icon: React.ReactNode;
  brandColor: string;
  accountsConnected?: number;
  lastSync?: string;
  descriptionKey: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'youtube' | 'snapchat' | 'threads' | 'gmb';
  featuresKey: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'youtube' | 'snapchat' | 'threads' | 'gmb';
}

const Integrations = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      id: 'facebook',
      name: 'Facebook',
      connected: true,
      icon: <SiFacebook className="w-10 h-10" />,
      brandColor: '#1877F2',
      accountsConnected: 2,
      lastSync: 'Il y a 5 min',
      descriptionKey: 'facebook',
      featuresKey: 'facebook',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      connected: true,
      icon: <SiInstagram className="w-10 h-10" />,
      brandColor: '#E4405F',
      accountsConnected: 3,
      lastSync: 'Il y a 12 min',
      descriptionKey: 'instagram',
      featuresKey: 'instagram',
    },
    {
      id: 'twitter',
      name: 'Twitter / X',
      connected: false,
      icon: <SiX className="w-10 h-10" />,
      brandColor: '#000000',
      descriptionKey: 'twitter',
      featuresKey: 'twitter',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      connected: false,
      icon: <SiLinkedin className="w-10 h-10" />,
      brandColor: '#0A66C2',
      descriptionKey: 'linkedin',
      featuresKey: 'linkedin',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      connected: false,
      icon: <SiTiktok className="w-10 h-10" />,
      brandColor: '#000000',
      descriptionKey: 'tiktok',
      featuresKey: 'tiktok',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      connected: false,
      icon: <SiYoutube className="w-10 h-10" />,
      brandColor: '#FF0000',
      descriptionKey: 'youtube',
      featuresKey: 'youtube',
    },
    {
      id: 'snapchat',
      name: 'Snapchat',
      connected: false,
      icon: <SiSnapchat className="w-10 h-10" />,
      brandColor: '#FFFC00',
      descriptionKey: 'snapchat',
      featuresKey: 'snapchat',
    },
    {
      id: 'threads',
      name: 'Threads',
      connected: false,
      icon: <SiThreads className="w-10 h-10" />,
      brandColor: '#000000',
      descriptionKey: 'threads',
      featuresKey: 'threads',
    },
    {
      id: 'gmb',
      name: 'Google My Business',
      connected: false,
      icon: <MdBusiness className="w-10 h-10" />,
      brandColor: '#4285F4',
      descriptionKey: 'gmb',
      featuresKey: 'gmb',
    },
  ]);

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [dialogType, setDialogType] = useState<'connect' | 'disconnect' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpenDialog = (platform: Platform, type: 'connect' | 'disconnect') => {
    setSelectedPlatform(platform);
    setDialogType(type);
  };

  const handleCloseDialog = () => {
    setSelectedPlatform(null);
    setDialogType(null);
  };

  const handleConnect = async () => {
    if (!selectedPlatform) return;

    setLoading(true);
    
    // Simulate OAuth flow with delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setPlatforms(platforms.map(p => 
      p.id === selectedPlatform.id 
        ? { 
            ...p, 
            connected: true, 
            accountsConnected: 1, 
            lastSync: 'À l\'instant' 
          }
        : p
    ));

    setLoading(false);
    handleCloseDialog();
    
    toast({
      title: t.integrations.connectionSuccess,
      description: `${selectedPlatform.name} ${t.integrations.connectionSuccess.toLowerCase()}`,
    });
  };

  const handleDisconnect = async () => {
    if (!selectedPlatform) return;

    setLoading(true);
    
    // Simulate disconnection with delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setPlatforms(platforms.map(p => 
      p.id === selectedPlatform.id 
        ? { 
            ...p, 
            connected: false, 
            accountsConnected: undefined, 
            lastSync: undefined 
          }
        : p
    ));

    setLoading(false);
    handleCloseDialog();
    
    toast({
      title: t.integrations.disconnectionSuccess,
      description: `${selectedPlatform.name} a été déconnecté`,
      variant: "destructive",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-integrations-title">
            {t.integrations.title}
          </h1>
          <p className="text-muted-foreground" data-testid="text-integrations-subtitle">
            {t.integrations.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card 
              key={platform.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-card/95 border-border/50 overflow-hidden relative"
              data-testid={`card-platform-${platform.id}`}
            >
              {/* Brand color accent bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: platform.brandColor }}
              />
              
              <CardHeader className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div 
                    className="p-3 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${platform.brandColor}15`,
                      color: platform.brandColor 
                    }}
                    data-testid={`icon-platform-${platform.id}`}
                  >
                    {platform.icon}
                  </div>
                  {platform.connected ? (
                    <Badge 
                      className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg"
                      data-testid={`badge-connected-${platform.id}`}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {t.integrations.connected}
                    </Badge>
                  ) : (
                    <Badge 
                      variant="outline" 
                      className="border-muted-foreground/30"
                      data-testid={`badge-not-connected-${platform.id}`}
                    >
                      <XCircle className="w-3 h-3 mr-1" />
                      {t.integrations.notConnected}
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-xl" data-testid={`text-platform-name-${platform.id}`}>
                  {platform.name}
                </CardTitle>
                <CardDescription data-testid={`text-platform-description-${platform.id}`}>
                  {t.integrations.platformDescriptions[platform.descriptionKey]}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Connection details for connected platforms */}
                {platform.connected && (
                  <div className="space-y-2 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground" data-testid={`text-accounts-connected-${platform.id}`}>
                        <Users className="w-4 h-4" />
                        {platform.accountsConnected} {t.integrations.accountsConnected}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground" data-testid={`text-last-sync-${platform.id}`}>
                        <Clock className="w-4 h-4" />
                        {t.integrations.lastSync}: {platform.lastSync}
                      </span>
                      <div 
                        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        data-testid={`indicator-active-${platform.id}`}
                      />
                    </div>
                  </div>
                )}

                {/* Features list */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2" data-testid={`text-features-header-${platform.id}`}>
                    {t.integrations.features}
                  </h4>
                  <ul className="space-y-1.5">
                    {t.integrations.platformFeatures[platform.featuresKey].map((feature, index) => (
                      <li 
                        key={index} 
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        data-testid={`text-feature-${platform.id}-${index}`}
                      >
                        <CheckCircle 
                          className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" 
                          style={{ color: platform.brandColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="pt-2 space-y-2">
                  {platform.connected ? (
                    <Button
                      variant="destructive"
                      className="w-full transition-all duration-300 hover:scale-[1.02]"
                      onClick={() => handleOpenDialog(platform, 'disconnect')}
                      data-testid={`button-disconnect-${platform.id}`}
                    >
                      {t.integrations.disconnect}
                    </Button>
                  ) : (
                    <Button
                      className="w-full transition-all duration-300 hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: platform.brandColor,
                        color: platform.brandColor === '#000000' ? 'white' : 'white'
                      }}
                      onClick={() => handleOpenDialog(platform, 'connect')}
                      data-testid={`button-connect-${platform.id}`}
                    >
                      {t.integrations.connect}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Connection/Disconnection Dialog */}
      <Dialog open={!!dialogType} onOpenChange={handleCloseDialog}>
        <DialogContent data-testid="dialog-platform-action">
          <DialogHeader>
            <DialogTitle data-testid="text-dialog-title">
              {dialogType === 'connect' 
                ? t.integrations.confirmConnect 
                : t.integrations.confirmDisconnect}
            </DialogTitle>
            <DialogDescription data-testid="text-dialog-description">
              {dialogType === 'connect'
                ? t.integrations.confirmConnectMessage
                : t.integrations.confirmDisconnectMessage}
            </DialogDescription>
          </DialogHeader>
          
          {selectedPlatform && (
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50">
              <div 
                className="p-3 rounded-lg"
                style={{ 
                  backgroundColor: `${selectedPlatform.brandColor}15`,
                  color: selectedPlatform.brandColor 
                }}
                data-testid="icon-dialog-platform"
              >
                {selectedPlatform.icon}
              </div>
              <div>
                <p className="font-semibold" data-testid="text-dialog-platform-name">
                  {selectedPlatform.name}
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-dialog-platform-description">
                  {t.integrations.platformDescriptions[selectedPlatform.descriptionKey]}
                </p>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={handleCloseDialog}
              disabled={loading}
              data-testid="button-dialog-cancel"
            >
              {t.common.cancel}
            </Button>
            <Button 
              onClick={dialogType === 'connect' ? handleConnect : handleDisconnect}
              disabled={loading}
              variant={dialogType === 'disconnect' ? 'destructive' : 'default'}
              data-testid="button-dialog-confirm"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                  {dialogType === 'connect' 
                    ? t.integrations.connecting 
                    : t.integrations.disconnecting}
                </>
              ) : (
                <>
                  {dialogType === 'connect' 
                    ? t.integrations.connect 
                    : t.integrations.disconnect}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Integrations;
