import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Users, DollarSign, Activity, TrendingUp, Search, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

const Admin = () => {
  const stats = [
    { label: "Total Users", value: "12,345", change: "+12.5%", icon: Users, color: "text-blue-500" },
    { label: "Monthly Revenue", value: "$45,678", change: "+8.2%", icon: DollarSign, color: "text-green-500" },
    { label: "Active Subscriptions", value: "8,234", change: "+15.3%", icon: Activity, color: "text-purple-500" },
    { label: "Growth Rate", value: "23.4%", change: "+5.1%", icon: TrendingUp, color: "text-orange-500" },
  ];

  const revenueData = [
    { month: "Jan", revenue: 32000, users: 2800 },
    { month: "Feb", revenue: 35000, users: 3200 },
    { month: "Mar", revenue: 38000, users: 3600 },
    { month: "Apr", revenue: 41000, users: 4100 },
    { month: "May", revenue: 43000, users: 4500 },
    { month: "Jun", revenue: 45678, users: 4800 },
  ];

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      plan: "Professional",
      status: "active",
      joined: "2024-01-15",
      revenue: "$948",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@example.com",
      plan: "Enterprise",
      status: "active",
      joined: "2024-02-20",
      revenue: "$2,388",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@example.com",
      plan: "Starter",
      status: "active",
      joined: "2024-03-10",
      revenue: "$348",
    },
    {
      id: 4,
      name: "David Kim",
      email: "david@example.com",
      plan: "Professional",
      status: "trial",
      joined: "2024-06-01",
      revenue: "$0",
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa@example.com",
      plan: "Enterprise",
      status: "active",
      joined: "2024-01-05",
      revenue: "$2,388",
    },
  ];

  const activities = [
    { user: "Sarah Johnson", action: "Upgraded to Professional plan", time: "2 hours ago" },
    { user: "Michael Chen", action: "Created 15 scheduled posts", time: "3 hours ago" },
    { user: "Emily Rodriguez", action: "Connected Instagram account", time: "5 hours ago" },
    { user: "David Kim", action: "Started free trial", time: "1 day ago" },
    { user: "Lisa Wang", action: "Exported analytics report", time: "1 day ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-admin-title">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor platform performance and manage users</p>
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
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" data-testid={`text-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(221 83% 53%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>New users over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="hsl(262 83% 58%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* User Management Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage and monitor all platform users</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    className="pl-9 w-64"
                    data-testid="input-search-users"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} data-testid={`row-user-${user.id}`}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.plan}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joined}</TableCell>
                    <TableCell className="font-medium">{user.revenue}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-user-actions-${user.id}`}>
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Activity Log */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest user actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  data-testid={`activity-${index}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
