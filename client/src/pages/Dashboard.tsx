import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Inbox, BarChart3, TrendingUp, Users, MessageSquare, ArrowUpRight } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
import { Link } from "wouter";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const AnimatedNumber = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  useEffect(() => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (!isNaN(numericValue)) {
      const animation = animate(count, numericValue, { duration: 1.5 });
      return animation.stop;
    }
  }, [value, count]);

  const suffix = value.replace(/[0-9.]/g, '');
  
  return (
    <motion.span>
      {value.match(/[0-9.]/) ? <motion.span>{rounded}</motion.span> : null}
      {suffix}
    </motion.span>
  );
};

const platformIcons: Record<string, any> = {
  Instagram: SiInstagram,
  Facebook: SiFacebook,
  LinkedIn: SiLinkedin,
  Twitter: SiX,
  YouTube: SiYoutube,
};

const platformColors: Record<string, string> = {
  Instagram: "from-pink-500 to-purple-500",
  Facebook: "from-blue-600 to-blue-400",
  LinkedIn: "from-blue-700 to-blue-500",
  Twitter: "from-sky-500 to-blue-500",
  YouTube: "from-red-600 to-red-500",
};

const Dashboard = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      label: t.dashboard.scheduledPosts,
      value: "24",
      change: t.dashboard.changeFromLastWeek.replace('{value}', '3'),
      icon: Calendar,
      trend: "up",
    },
    {
      label: t.dashboard.pendingMessages,
      value: "12",
      change: t.dashboard.acrossPlatforms,
      icon: MessageSquare,
      trend: "neutral",
    },
    {
      label: t.dashboard.totalFollowers,
      value: "45.2K",
      change: t.dashboard.changeThisMonth.replace('{value}', '12'),
      icon: Users,
      trend: "up",
    },
    {
      label: t.dashboard.engagementRate,
      value: "8.3%",
      change: t.dashboard.changeFromLastWeek.replace('{value}', '2.1'),
      icon: TrendingUp,
      trend: "up",
    },
  ];

  const engagementData = [
    { day: "Mon", engagement: 45 },
    { day: "Tue", engagement: 52 },
    { day: "Wed", engagement: 48 },
    { day: "Thu", engagement: 65 },
    { day: "Fri", engagement: 58 },
    { day: "Sat", engagement: 70 },
    { day: "Sun", engagement: 62 },
  ];

  const recentActivity = [
    { action: t.dashboard.activityNewComment, time: t.dashboard.minutesAgo.replace('{value}', '2'), platform: "Instagram" },
    { action: t.dashboard.activityPostScheduled, time: t.dashboard.minutesAgo.replace('{value}', '15'), platform: "Facebook" },
    { action: t.dashboard.activityEngagementIncreased, time: t.dashboard.hourAgo, platform: "LinkedIn" },
    { action: t.dashboard.activityDmReceived, time: t.dashboard.hoursAgo.replace('{value}', '2'), platform: "Twitter" },
    { action: t.dashboard.activityVideoPublished, time: t.dashboard.hoursAgo.replace('{value}', '3'), platform: "YouTube" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-text" data-testid="text-dashboard-title">{t.dashboard.title}</h1>
          <p className="text-muted-foreground">{t.dashboard.welcome}</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <Card className="glass border-2 border-border/50 hover:border-primary/30 hover:shadow-glow-sm transition-all relative overflow-hidden group">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                    </motion.div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="text-3xl font-bold gradient-text" data-testid={`text-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      <AnimatedNumber value={stat.value} />
                    </div>
                    <p className={`text-xs flex items-center mt-2 ${
                      stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'
                    }`}>
                      {stat.trend === 'up' && <ArrowUpRight className="w-3 h-3 mr-1" />}
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Engagement Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass border-2 border-border/50 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle>{t.dashboard.weeklyEngagement}</CardTitle>
                <CardDescription>{t.dashboard.engagementTrendSubtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={engagementData}>
                    <defs>
                      <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(221 83% 53%)" stopOpacity={0.4}/>
                        <stop offset="50%" stopColor="hsl(262 83% 58%)" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="hsl(262 83% 58%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis 
                      dataKey="day" 
                      stroke="hsl(var(--muted-foreground))" 
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))" 
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'hsl(var(--glass-bg))', 
                        border: '1px solid hsl(var(--glass-border))',
                        borderRadius: '8px',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="hsl(221 83% 53%)" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorEngagement)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="glass border-2 border-border/50 hover:border-primary/30 transition-all">
              <CardHeader>
                <CardTitle>{t.dashboard.recentActivity}</CardTitle>
                <CardDescription>{t.dashboard.latestUpdatesSubtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const PlatformIcon = platformIcons[activity.platform];
                    const platformColor = platformColors[activity.platform];
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start justify-between p-3 rounded-lg glass hover:border-primary/20 border border-transparent transition-all group cursor-pointer"
                        data-testid={`activity-${index}`}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-start space-x-3 flex-1">
                          {/* Timeline Dot with Platform Icon */}
                          <div className="relative">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${platformColor} flex items-center justify-center shadow-glow-sm`}>
                              {PlatformIcon && <PlatformIcon className="w-4 h-4 text-white" />}
                            </div>
                            {index < recentActivity.length - 1 && (
                              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-border" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <Badge variant="secondary" className="mt-1 text-xs bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                              {activity.platform}
                            </Badge>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{activity.time}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Calendar,
              title: t.dashboard.composePost,
              description: t.dashboard.quickActionCreatePost,
              link: "/dashboard/composer",
              buttonText: t.dashboard.composePost,
              buttonVariant: "default",
              testId: "button-create-post"
            },
            {
              icon: Inbox,
              title: t.dashboard.manageInbox,
              description: t.dashboard.quickActionManageInbox,
              link: "/dashboard/inbox",
              buttonText: t.dashboard.manageInbox,
              buttonVariant: "outline",
              testId: "button-view-inbox"
            },
            {
              icon: BarChart3,
              title: t.dashboard.viewAnalytics,
              description: t.dashboard.quickActionViewAnalytics,
              link: "/dashboard/analytics",
              buttonText: t.dashboard.viewAnalytics,
              buttonVariant: "outline",
              testId: "button-view-analytics"
            }
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, rotateY: 2 }}
                className="perspective-1000"
              >
                <Card className="glass border-2 border-border/50 hover:border-primary/30 card-3d transition-all h-full group relative overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <span>{action.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-4">
                      {action.description}
                    </p>
                    <Link href={action.link}>
                      <Button 
                        className={`w-full ${action.buttonVariant === 'default' ? 'btn-premium bg-gradient-to-r from-primary to-accent text-white border-0' : 'hover:shadow-glow-sm'}`}
                        variant={action.buttonVariant as any}
                        data-testid={action.testId}
                      >
                        {action.buttonText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
