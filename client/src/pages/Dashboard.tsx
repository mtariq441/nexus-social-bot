import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Inbox, BarChart3, TrendingUp, Users, MessageSquare, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const Dashboard = () => {
  const stats = [
    {
      label: "Scheduled Posts",
      value: "24",
      change: "+3 from last week",
      icon: Calendar,
      trend: "up",
    },
    {
      label: "Pending Messages",
      value: "12",
      change: "Across all platforms",
      icon: MessageSquare,
      trend: "neutral",
    },
    {
      label: "Total Followers",
      value: "45.2K",
      change: "+12% this month",
      icon: Users,
      trend: "up",
    },
    {
      label: "Engagement Rate",
      value: "8.3%",
      change: "+2.1% from last week",
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
    { action: "New comment on Instagram", time: "2 minutes ago", platform: "Instagram" },
    { action: "Post scheduled for tomorrow", time: "15 minutes ago", platform: "Facebook" },
    { action: "LinkedIn engagement increased", time: "1 hour ago", platform: "LinkedIn" },
    { action: "Twitter DM received", time: "2 hours ago", platform: "Twitter" },
    { action: "YouTube video published", time: "3 hours ago", platform: "YouTube" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-dashboard-title">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>

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
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" data-testid={`text-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {stat.value}
                    </div>
                    <p className={`text-xs flex items-center mt-1 ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-muted-foreground'
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
            <Card>
              <CardHeader>
                <CardTitle>Weekly Engagement</CardTitle>
                <CardDescription>Your engagement trend over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={engagementData}>
                    <defs>
                      <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(221 83% 53%)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(221 83% 53%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="engagement" stroke="hsl(221 83% 53%)" fillOpacity={1} fill="url(#colorEngagement)" />
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
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      data-testid={`activity-${index}`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.platform}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Compose Post</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Create and schedule posts across all platforms
                </p>
                <Link href="/dashboard/composer">
                  <a>
                    <Button className="w-full" data-testid="button-create-post">Create Post</Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Inbox className="h-5 w-5" />
                  <span>Manage Inbox</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View and respond to all messages in one place
                </p>
                <Link href="/dashboard/inbox">
                  <a>
                    <Button className="w-full" variant="outline" data-testid="button-view-inbox">
                      View Inbox
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>View Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Track performance and insights
                </p>
                <Link href="/dashboard/analytics">
                  <a>
                    <Button className="w-full" variant="outline" data-testid="button-view-analytics">
                      View Analytics
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
