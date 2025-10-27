import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  User, 
  CreditCard, 
  Bell, 
  Globe, 
  Shield, 
  Trash2, 
  Download, 
  Upload,
  CheckCircle2,
  XCircle,
  Laptop,
  Smartphone
} from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  const { language, setLanguage, t } = useLanguage();
  const [isSaving, setIsSaving] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    weeklyReports: true,
  });

  const handleSaveProfile = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: t.settings.settingsSaved,
        description: t.settings.settingsSavedDescription,
      });
    }, 1000);
  };

  const handleUpdatePassword = () => {
    setIsUpdatingPassword(true);
    setTimeout(() => {
      setIsUpdatingPassword(false);
      toast({
        title: t.settings.passwordUpdated,
        description: t.settings.passwordUpdatedDescription,
      });
    }, 1000);
  };

  const handleSaveNotifications = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: t.settings.settingsSaved,
        description: t.settings.settingsSavedDescription,
      });
    }, 1000);
  };

  const handleDeleteAccount = () => {
    toast({
      title: t.settings.deleteAccount,
      description: t.settings.deleteAccountDescription,
      variant: "destructive",
    });
  };

  const handleExportData = () => {
    toast({
      title: t.settings.exportData,
      description: t.settings.exportDataDescription,
    });
  };

  const billingHistory = [
    { id: 1, date: `1 ${t.settings.march} 2025`, amount: "79€", status: t.settings.paid },
    { id: 2, date: `1 ${t.settings.february} 2025`, amount: "79€", status: t.settings.paid },
    { id: 3, date: `1 ${t.settings.january} 2025`, amount: "79€", status: t.settings.paid },
  ];

  const activeSessions = [
    { 
      id: 1, 
      device: "Windows PC", 
      location: "Paris, France", 
      lastActive: t.dashboard.minutesAgo.replace('{value}', '2'),
      current: true,
      icon: Laptop
    },
    { 
      id: 2, 
      device: "iPhone 15", 
      location: "Lyon, France", 
      lastActive: t.dashboard.daysAgo.replace('{value}', '2'),
      current: false,
      icon: Smartphone
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-settings-title">{t.settings.title}</h1>
          <p className="text-muted-foreground" data-testid="text-settings-subtitle">{t.settings.subtitle}</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto" data-testid="tabs-settings-navigation">
            <TabsTrigger value="profile" className="flex items-center gap-2" data-testid="tab-profile">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{t.settings.profile}</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2" data-testid="tab-billing">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">{t.settings.billing}</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2" data-testid="tab-notifications">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">{t.settings.notifications}</span>
            </TabsTrigger>
            <TabsTrigger value="language" className="flex items-center gap-2" data-testid="tab-language">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{t.settings.language}</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2" data-testid="tab-security">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">{t.settings.security}</span>
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2" data-testid="tab-account">
              <Trash2 className="h-4 w-4" />
              <span className="hidden sm:inline">{t.settings.account}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card data-testid="card-profile-info">
              <CardHeader>
                <CardTitle>{t.settings.profileInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24" data-testid="avatar-profile">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Label htmlFor="photo">{t.settings.profilePicture}</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" data-testid="button-upload-photo">
                        <Upload className="h-4 w-4 mr-2" />
                        {t.settings.uploadPhoto}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t.settings.firstName}</Label>
                    <Input 
                      id="firstName" 
                      defaultValue="Jean" 
                      data-testid="input-firstname"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t.settings.lastName}</Label>
                    <Input 
                      id="lastName" 
                      defaultValue="Dupont" 
                      data-testid="input-lastname"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">{t.settings.email}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="jean.dupont@example.com" 
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="bio">{t.settings.bio}</Label>
                  <Textarea 
                    id="bio" 
                    placeholder={t.settings.bioPlaceholder}
                    rows={4}
                    defaultValue="Social media manager passionné par le marketing digital et l'innovation."
                    data-testid="textarea-bio"
                  />
                </div>

                <div>
                  <Label htmlFor="timezone">{t.settings.timezone}</Label>
                  <Select defaultValue="paris" data-testid="select-timezone">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">Europe/Paris (GMT+1)</SelectItem>
                      <SelectItem value="london">Europe/London (GMT+0)</SelectItem>
                      <SelectItem value="newyork">America/New York (GMT-5)</SelectItem>
                      <SelectItem value="tokyo">Asia/Tokyo (GMT+9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleSaveProfile} 
                  disabled={isSaving}
                  data-testid="button-save-profile"
                >
                  {isSaving ? t.common.loading : t.settings.saveChanges}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6 mt-6">
            <Card data-testid="card-current-plan">
              <CardHeader>
                <CardTitle>{t.settings.currentPlan}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-lg" data-testid="text-plan-name">
                        {t.settings.professionalPlan}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid="text-plan-price">
                        79€{t.settings.perMonth}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" data-testid="button-change-plan">
                        {t.settings.changePlan}
                      </Button>
                      <Button data-testid="button-upgrade-plan">
                        {t.settings.upgrade}
                      </Button>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground" data-testid="text-next-billing">
                      {t.settings.nextBillingDate}: 1 {t.settings.march} 2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-payment-method">
              <CardHeader>
                <CardTitle>{t.settings.paymentMethod}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium" data-testid="text-card-number">
                        {t.settings.cardEnding} •••• 4242
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid="text-card-expiry">
                        {t.settings.expiresDate} 12/25
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" data-testid="button-update-payment">
                    {t.settings.updatePayment}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-billing-history">
              <CardHeader>
                <CardTitle>{t.settings.billingHistory}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t.settings.invoiceDate}</TableHead>
                      <TableHead>{t.settings.invoiceAmount}</TableHead>
                      <TableHead>{t.settings.invoiceStatus}</TableHead>
                      <TableHead className="text-right">{t.settings.downloadInvoice}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billingHistory.map((invoice) => (
                      <TableRow key={invoice.id} data-testid={`row-invoice-${invoice.id}`}>
                        <TableCell data-testid={`text-invoice-date-${invoice.id}`}>
                          {invoice.date}
                        </TableCell>
                        <TableCell data-testid={`text-invoice-amount-${invoice.id}`}>
                          {invoice.amount}
                        </TableCell>
                        <TableCell>
                          <span 
                            className="inline-flex items-center gap-1 text-sm"
                            data-testid={`text-invoice-status-${invoice.id}`}
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            {invoice.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            data-testid={`button-download-invoice-${invoice.id}`}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6 mt-6">
            <Card data-testid="card-notification-preferences">
              <CardHeader>
                <CardTitle>{t.settings.notificationPreferences}</CardTitle>
                <CardDescription>
                  {t.settings.notificationPreferences}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotifications" className="text-base">
                        {t.settings.emailNotifications}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {t.settings.newMessages}
                      </p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, emailNotifications: checked })
                      }
                      data-testid="switch-email-notifications"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="pushNotifications" className="text-base">
                        {t.settings.pushNotifications}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {t.settings.scheduledPosts}
                      </p>
                    </div>
                    <Switch
                      id="pushNotifications"
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, pushNotifications: checked })
                      }
                      data-testid="switch-push-notifications"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketingEmails" className="text-base">
                        {t.settings.marketingEmails}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {t.settings.platformAlerts}
                      </p>
                    </div>
                    <Switch
                      id="marketingEmails"
                      checked={notifications.marketingEmails}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, marketingEmails: checked })
                      }
                      data-testid="switch-marketing-emails"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weeklyReports" className="text-base">
                        {t.settings.weeklyReports}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {t.settings.analyticsReports}
                      </p>
                    </div>
                    <Switch
                      id="weeklyReports"
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, weeklyReports: checked })
                      }
                      data-testid="switch-weekly-reports"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleSaveNotifications} 
                  disabled={isSaving}
                  data-testid="button-save-notifications"
                >
                  {isSaving ? t.common.loading : t.settings.saveChanges}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="language" className="space-y-6 mt-6">
            <Card data-testid="card-language-selection">
              <CardHeader>
                <CardTitle>{t.settings.selectLanguage}</CardTitle>
                <CardDescription>{t.settings.languageDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={language}
                  onValueChange={(value) => setLanguage(value as 'en' | 'fr')}
                  className="space-y-3"
                  data-testid="radiogroup-language"
                >
                  <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                    <RadioGroupItem value="fr" id="fr" data-testid="radio-french" />
                    <Label htmlFor="fr" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🇫🇷</span>
                        <div>
                          <p className="font-medium">{t.settings.french}</p>
                          <p className="text-sm text-muted-foreground">Français</p>
                        </div>
                      </div>
                    </Label>
                    {language === 'fr' && <CheckCircle2 className="h-5 w-5 text-primary" />}
                  </div>

                  <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent">
                    <RadioGroupItem value="en" id="en" data-testid="radio-english" />
                    <Label htmlFor="en" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🇬🇧</span>
                        <div>
                          <p className="font-medium">{t.settings.english}</p>
                          <p className="text-sm text-muted-foreground">English</p>
                        </div>
                      </div>
                    </Label>
                    {language === 'en' && <CheckCircle2 className="h-5 w-5 text-primary" />}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6 mt-6">
            <Card data-testid="card-change-password">
              <CardHeader>
                <CardTitle>{t.settings.changePassword}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">{t.settings.currentPassword}</Label>
                  <Input 
                    id="currentPassword" 
                    type="password" 
                    data-testid="input-current-password"
                  />
                </div>
                <div>
                  <Label htmlFor="newPassword">{t.settings.newPassword}</Label>
                  <Input 
                    id="newPassword" 
                    type="password" 
                    data-testid="input-new-password"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">{t.settings.confirmPassword}</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    data-testid="input-confirm-password"
                  />
                </div>
                <Button 
                  onClick={handleUpdatePassword} 
                  disabled={isUpdatingPassword}
                  data-testid="button-update-password"
                >
                  {isUpdatingPassword ? t.common.loading : t.settings.updatePassword}
                </Button>
              </CardContent>
            </Card>

            <Card data-testid="card-two-factor">
              <CardHeader>
                <CardTitle>{t.settings.twoFactorAuth}</CardTitle>
                <CardDescription>{t.settings.twoFactorDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="2fa" className="text-base">
                      {twoFactorEnabled ? t.settings.disable2FA : t.settings.enable2FA}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {t.settings.twoFactorDescription}
                    </p>
                  </div>
                  <Switch
                    id="2fa"
                    checked={twoFactorEnabled}
                    onCheckedChange={setTwoFactorEnabled}
                    data-testid="switch-2fa"
                  />
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-active-sessions">
              <CardHeader>
                <CardTitle>{t.settings.activeSessions}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeSessions.map((session) => {
                    const Icon = session.icon;
                    return (
                      <div 
                        key={session.id} 
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        data-testid={`session-${session.id}`}
                      >
                        <div className="flex items-center gap-4">
                          <Icon className="h-8 w-8 text-muted-foreground" />
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium" data-testid={`text-session-device-${session.id}`}>
                                {session.device}
                              </p>
                              {session.current && (
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                  {t.settings.currentSession}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {session.location}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {t.settings.lastActive}: {session.lastActive}
                            </p>
                          </div>
                        </div>
                        {!session.current && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            data-testid={`button-revoke-session-${session.id}`}
                          >
                            {t.settings.revokeSession}
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6 mt-6">
            <Card data-testid="card-export-data">
              <CardHeader>
                <CardTitle>{t.settings.exportData}</CardTitle>
                <CardDescription>{t.settings.exportDataDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  onClick={handleExportData}
                  data-testid="button-export-data"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t.settings.exportData}
                </Button>
              </CardContent>
            </Card>

            <Card data-testid="card-deactivate-account">
              <CardHeader>
                <CardTitle>{t.settings.deactivateAccount}</CardTitle>
                <CardDescription>{t.settings.deactivateAccountDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline"
                  data-testid="button-deactivate-account"
                >
                  {t.settings.deactivateAccount}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-destructive" data-testid="card-danger-zone">
              <CardHeader>
                <CardTitle className="text-destructive">{t.settings.dangerZone}</CardTitle>
                <CardDescription>{t.settings.deleteAccountDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button 
                      variant="destructive"
                      data-testid="button-delete-account"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      {t.settings.deleteAccount}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent data-testid="dialog-delete-account">
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t.settings.deleteAccount}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t.settings.deleteAccountDescription}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel data-testid="button-cancel-delete">
                        {t.common.cancel}
                      </AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={handleDeleteAccount}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        data-testid="button-confirm-delete"
                      >
                        {t.settings.deleteAccountConfirm}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
