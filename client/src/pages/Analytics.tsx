import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/components/LanguageProvider";
import {
  TrendingUp,
  Users,
  Heart,
  MousePointerClick,
  Download,
  Sparkles,
  TrendingDown,
  Clock,
  Video,
  Image as ImageIcon,
  FileText,
  BarChart3,
} from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTiktok,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const Analytics = () => {
  const { t } = useLanguage();
  const [timePeriod, setTimePeriod] = useState<"7" | "30" | "90">("30");
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for follower growth
  const followerGrowthData = timePeriod === "7" ? [
    { date: "Lun", followers: 42000 },
    { date: "Mar", followers: 42800 },
    { date: "Mer", followers: 43200 },
    { date: "Jeu", followers: 43800 },
    { date: "Ven", followers: 44200 },
    { date: "Sam", followers: 44800 },
    { date: "Dim", followers: 45200 },
  ] : timePeriod === "30" ? [
    { date: "Sem 1", followers: 38000 },
    { date: "Sem 2", followers: 40000 },
    { date: "Sem 3", followers: 42500 },
    { date: "Sem 4", followers: 45200 },
  ] : [
    { date: "Mois 1", followers: 30000 },
    { date: "Mois 2", followers: 36000 },
    { date: "Mois 3", followers: 45200 },
  ];

  // Mock data for engagement by platform
  const engagementByPlatform = [
    { name: "Instagram", value: 35, color: "#E4405F" },
    { name: "Facebook", value: 28, color: "#1877F2" },
    { name: "X (Twitter)", value: 18, color: "#000000" },
    { name: "LinkedIn", value: 12, color: "#0A66C2" },
    { name: "TikTok", value: 7, color: "#000000" },
  ];

  // Mock data for content performance by format
  const contentPerformanceData = [
    { format: "Vidéos", engagement: 8500, reach: 45000, color: "#8b5cf6" },
    { format: "Images", engagement: 5800, reach: 32000, color: "#3b82f6" },
    { format: "Carrousels", engagement: 6200, reach: 28000, color: "#06b6d4" },
    { format: "Texte", engagement: 3200, reach: 18000, color: "#10b981" },
    { format: "Stories", engagement: 4100, reach: 22000, color: "#f59e0b" },
  ];

  // Mock data for best posting time heatmap
  const heatmapData = [
    { day: "Lun", "6h": 20, "9h": 45, "12h": 68, "15h": 82, "18h": 95, "21h": 72 },
    { day: "Mar", "6h": 25, "9h": 52, "12h": 75, "15h": 88, "18h": 92, "21h": 68 },
    { day: "Mer", "6h": 30, "9h": 58, "12h": 82, "15h": 95, "18h": 98, "21h": 75 },
    { day: "Jeu", "6h": 28, "9h": 55, "12h": 78, "15h": 90, "18h": 96, "21h": 70 },
    { day: "Ven", "6h": 32, "9h": 60, "12h": 72, "15h": 85, "18h": 90, "21h": 82 },
    { day: "Sam", "6h": 18, "9h": 38, "12h": 55, "15h": 68, "18h": 75, "21h": 65 },
    { day: "Dim", "6h": 15, "9h": 35, "12h": 52, "15h": 65, "18h": 72, "21h": 60 },
  ];

  // Mock data for top performing posts
  const topPosts = [
    {
      id: 1,
      platform: "Instagram",
      icon: <SiInstagram className="h-5 w-5" />,
      content: "Nouveau produit lancé ! 🚀 Découvrez notre dernière innovation...",
      engagement: 12500,
      reach: 85000,
      likes: 9800,
      comments: 1200,
      shares: 1500,
      image: "📱",
    },
    {
      id: 2,
      platform: "LinkedIn",
      icon: <SiLinkedin className="h-5 w-5" />,
      content: "Les 5 tendances du marketing digital en 2025...",
      engagement: 8200,
      reach: 52000,
      likes: 6500,
      comments: 980,
      shares: 720,
      image: "📊",
    },
    {
      id: 3,
      platform: "Facebook",
      icon: <SiFacebook className="h-5 w-5" />,
      content: "Webinaire gratuit : Comment optimiser votre stratégie sociale...",
      engagement: 7800,
      reach: 48000,
      likes: 5200,
      comments: 1500,
      shares: 1100,
      image: "🎯",
    },
    {
      id: 4,
      platform: "TikTok",
      icon: <SiTiktok className="h-5 w-5" />,
      content: "Tutoriel rapide : Créer du contenu viral en 60 secondes",
      engagement: 15200,
      reach: 125000,
      likes: 12000,
      comments: 2100,
      shares: 1100,
      image: "🎬",
    },
  ];

  // AI Insights data
  const aiInsights = [
    {
      id: 1,
      type: "engagement",
      badge: "Engagement",
      badgeColor: "bg-purple-500",
      text: "Vos publications du mercredi génèrent 20% plus d'engagement que les autres jours",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: 2,
      type: "content",
      badge: "Contenu",
      badgeColor: "bg-blue-500",
      text: "Les vidéos obtiennent 45% plus de vues que les images statiques",
      icon: <Video className="h-5 w-5" />,
    },
    {
      id: 3,
      type: "timing",
      badge: "Timing",
      badgeColor: "bg-green-500",
      text: "Meilleur moment pour publier : 18h-20h pour un engagement optimal",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      id: 4,
      type: "growth",
      badge: "Croissance",
      badgeColor: "bg-orange-500",
      text: "Votre taux de croissance est 32% supérieur à la moyenne de votre secteur",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  const handleExportData = () => {
    console.log("Exporting analytics data...");
  };

  const handleTimePeriodChange = (period: "7" | "30" | "90") => {
    setIsLoading(true);
    setTimePeriod(period);
    setTimeout(() => setIsLoading(false), 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-analytics-title">
              {t.analytics.title}
            </h1>
            <p className="text-muted-foreground" data-testid="text-analytics-subtitle">
              Suivez vos performances sur les réseaux sociaux
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-1 bg-muted rounded-lg p-1">
              <Button
                variant={timePeriod === "7" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleTimePeriodChange("7")}
                data-testid="button-period-7days"
              >
                7 jours
              </Button>
              <Button
                variant={timePeriod === "30" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleTimePeriodChange("30")}
                data-testid="button-period-30days"
              >
                30 jours
              </Button>
              <Button
                variant={timePeriod === "90" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleTimePeriodChange("90")}
                data-testid="button-period-90days"
              >
                90 jours
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportData}
              data-testid="button-export-data"
            >
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList data-testid="tabs-analytics-navigation">
            <TabsTrigger value="overview" data-testid="tab-overview">
              {t.analytics.overview}
            </TabsTrigger>
            <TabsTrigger value="engagement" data-testid="tab-engagement">
              {t.analytics.engagement}
            </TabsTrigger>
            <TabsTrigger value="growth" data-testid="tab-growth">
              Croissance
            </TabsTrigger>
            <TabsTrigger value="posts" data-testid="tab-posts">
              {t.analytics.topPerformingPosts}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              >
                <Card data-testid="card-total-engagement">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t.analytics.engagement} Total
                    </CardTitle>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-8 w-24" />
                    ) : (
                      <>
                        <div className="text-2xl font-bold" data-testid="text-total-engagement">
                          45,3K
                        </div>
                        <p className="text-xs text-green-600 flex items-center gap-1" data-testid="text-engagement-growth">
                          <TrendingUp className="h-3 w-3" />
                          +18% ce mois-ci
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card data-testid="card-total-reach">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t.analytics.reach} Totale
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-8 w-24" />
                    ) : (
                      <>
                        <div className="text-2xl font-bold" data-testid="text-total-reach">
                          325,4K
                        </div>
                        <p className="text-xs text-green-600 flex items-center gap-1" data-testid="text-reach-growth">
                          <TrendingUp className="h-3 w-3" />
                          +15% ce mois-ci
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card data-testid="card-total-clicks">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t.analytics.clicks} Totaux
                    </CardTitle>
                    <MousePointerClick className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-8 w-24" />
                    ) : (
                      <>
                        <div className="text-2xl font-bold" data-testid="text-total-clicks">
                          12,8K
                        </div>
                        <p className="text-xs text-green-600 flex items-center gap-1" data-testid="text-clicks-growth">
                          <TrendingUp className="h-3 w-3" />
                          +22% ce mois-ci
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card data-testid="card-follower-growth">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Croissance {t.analytics.followers}
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-8 w-24" />
                    ) : (
                      <>
                        <div className="text-2xl font-bold" data-testid="text-follower-growth-percentage">
                          +12%
                        </div>
                        <p className="text-xs text-muted-foreground" data-testid="text-follower-growth-count">
                          +5,200 nouveaux abonnés
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card data-testid="card-ai-insights">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-500" />
                      <CardTitle>Insights IA</CardTitle>
                    </div>
                    <CardDescription>
                      Recommandations personnalisées basées sur vos données
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {aiInsights.map((insight) => (
                        <motion.div
                          key={insight.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow"
                          data-testid={`insight-${insight.type}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${insight.badgeColor} text-white`}>
                              {insight.icon}
                            </div>
                            <div className="flex-1">
                              <Badge variant="secondary" className="mb-2" data-testid={`badge-${insight.type}`}>
                                {insight.badge}
                              </Badge>
                              <p className="text-sm" data-testid={`text-insight-${insight.type}`}>
                                {insight.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <Card data-testid="card-engagement-by-platform">
                  <CardHeader>
                    <CardTitle>{t.analytics.engagementByPlatform}</CardTitle>
                    <CardDescription>Répartition de l'engagement par plateforme</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-[300px] w-full" />
                    ) : (
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={engagementByPlatform}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {engagementByPlatform.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                  </CardContent>
                </Card>

                <Card data-testid="card-follower-growth-chart">
                  <CardHeader>
                    <CardTitle>{t.analytics.followerGrowth}</CardTitle>
                    <CardDescription>Évolution du nombre d'abonnés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-[300px] w-full" />
                    ) : (
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={followerGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="followers"
                            stroke="#8b5cf6"
                            strokeWidth={2}
                            name="Abonnés"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card data-testid="card-content-performance">
                  <CardHeader>
                    <CardTitle>{t.analytics.contentPerformance} par Format</CardTitle>
                    <CardDescription>
                      Comparaison des performances selon le type de contenu
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-[400px] w-full" />
                    ) : (
                      <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={contentPerformanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="format" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="engagement" fill="#8b5cf6" name="Engagement" />
                          <Bar dataKey="reach" fill="#3b82f6" name="Portée" />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card data-testid="card-posting-time-heatmap">
                  <CardHeader>
                    <CardTitle>{t.analytics.bestPostingTime}</CardTitle>
                    <CardDescription>
                      Taux d'engagement par jour et heure (plus foncé = meilleur)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <Skeleton className="h-[400px] w-full" />
                    ) : (
                      <div className="space-y-2">
                        {heatmapData.map((day) => (
                          <div key={day.day} className="flex gap-2 items-center">
                            <div className="w-12 text-sm font-medium" data-testid={`text-day-${day.day}`}>
                              {day.day}
                            </div>
                            <div className="flex-1 grid grid-cols-6 gap-2">
                              {Object.entries(day)
                                .filter(([key]) => key !== "day")
                                .map(([time, value]) => {
                                  const numValue = Number(value);
                                  return (
                                    <div
                                      key={time}
                                      className="relative group"
                                      data-testid={`heatmap-cell-${day.day}-${time}`}
                                    >
                                      <div
                                        className="h-12 rounded flex items-center justify-center text-xs font-medium cursor-pointer transition-transform hover:scale-105"
                                        style={{
                                          backgroundColor: `rgba(139, 92, 246, ${numValue / 100})`,
                                          color: numValue > 50 ? "white" : "black",
                                        }}
                                      >
                                        {time}
                                      </div>
                                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {numValue}% engagement
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card data-testid="card-engagement-details">
                  <CardHeader>
                    <CardTitle>Détails de l'Engagement</CardTitle>
                    <CardDescription>
                      Analyse approfondie de vos interactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          platform: "Instagram",
                          icon: <SiInstagram className="h-5 w-5 text-pink-500" />,
                          likes: "18.5K",
                          comments: "2.3K",
                          shares: "1.2K",
                          engagement: "4.2%",
                        },
                        {
                          platform: "Facebook",
                          icon: <SiFacebook className="h-5 w-5 text-blue-600" />,
                          likes: "15.3K",
                          comments: "1.8K",
                          shares: "980",
                          engagement: "3.8%",
                        },
                        {
                          platform: "X (Twitter)",
                          icon: <FaXTwitter className="h-5 w-5" />,
                          likes: "8.2K",
                          comments: "1.2K",
                          shares: "650",
                          engagement: "2.9%",
                        },
                        {
                          platform: "LinkedIn",
                          icon: <SiLinkedin className="h-5 w-5 text-blue-700" />,
                          likes: "3.2K",
                          comments: "580",
                          shares: "420",
                          engagement: "5.1%",
                        },
                      ].map((platform, index) => (
                        <div
                          key={platform.platform}
                          className="flex items-center justify-between p-4 border rounded-lg"
                          data-testid={`engagement-platform-${index}`}
                        >
                          <div className="flex items-center gap-3">
                            {platform.icon}
                            <span className="font-medium">{platform.platform}</span>
                          </div>
                          <div className="flex gap-6 text-sm text-muted-foreground">
                            <div>
                              <div className="text-xs">J'aime</div>
                              <div className="font-medium text-foreground" data-testid={`text-likes-${index}`}>
                                {platform.likes}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs">Commentaires</div>
                              <div className="font-medium text-foreground" data-testid={`text-comments-${index}`}>
                                {platform.comments}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs">Partages</div>
                              <div className="font-medium text-foreground" data-testid={`text-shares-${index}`}>
                                {platform.shares}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs">Taux</div>
                              <div className="font-medium text-green-600" data-testid={`text-rate-${index}`}>
                                {platform.engagement}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="growth" className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card data-testid="card-growth-metrics">
                  <CardHeader>
                    <CardTitle>Métriques de Croissance</CardTitle>
                    <CardDescription>Suivi de la croissance de votre audience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={followerGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="followers"
                          stroke="#10b981"
                          strokeWidth={3}
                          name="Abonnés totaux"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card data-testid="card-top-posts">
                  <CardHeader>
                    <CardTitle>{t.analytics.topPerformingPosts}</CardTitle>
                    <CardDescription>
                      Vos publications les plus performantes ce mois-ci
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {topPosts.map((post, index) => (
                        <motion.div
                          key={post.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 border rounded-lg space-y-3 hover:shadow-lg transition-shadow"
                          data-testid={`post-card-${index}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {post.icon}
                              <span className="text-sm font-medium">{post.platform}</span>
                            </div>
                            <Badge variant="secondary" data-testid={`badge-post-${index}`}>
                              Top {index + 1}
                            </Badge>
                          </div>
                          <div className="text-4xl">{post.image}</div>
                          <p className="text-sm line-clamp-2" data-testid={`text-post-content-${index}`}>
                            {post.content}
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <div className="text-xs text-muted-foreground">Engagement</div>
                              <div className="font-medium" data-testid={`text-post-engagement-${index}`}>
                                {post.engagement.toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Portée</div>
                              <div className="font-medium" data-testid={`text-post-reach-${index}`}>
                                {post.reach.toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">J'aime</div>
                              <div className="font-medium" data-testid={`text-post-likes-${index}`}>
                                {post.likes.toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Commentaires</div>
                              <div className="font-medium" data-testid={`text-post-comments-${index}`}>
                                {post.comments.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
