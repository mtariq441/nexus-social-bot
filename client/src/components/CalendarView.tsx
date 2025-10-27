import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin, SiX, SiTiktok } from "react-icons/si";
import { useLanguage } from "@/components/LanguageProvider";

type ViewMode = "day" | "week" | "month";

interface ScheduledPost {
  id: string;
  content: string;
  time: string;
  platforms: string[];
  date: Date;
}

const platformIcons: Record<string, any> = {
  Instagram: SiInstagram,
  Facebook: SiFacebook,
  LinkedIn: SiLinkedin,
  Twitter: SiX,
  TikTok: SiTiktok,
};

const platformColors: Record<string, string> = {
  Instagram: "from-pink-500 to-purple-500",
  Facebook: "from-blue-600 to-blue-400",
  LinkedIn: "from-blue-700 to-blue-500",
  Twitter: "from-sky-500 to-blue-500",
  TikTok: "from-black to-gray-800",
};

const CalendarView = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<ViewMode>("week");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [draggedPost, setDraggedPost] = useState<string | null>(null);

  const mockPosts: ScheduledPost[] = [
    {
      id: "1",
      content: "Nouveau produit lancé !",
      time: "14:00",
      platforms: ["Instagram", "Facebook"],
      date: new Date(2025, 9, 27, 14, 0),
    },
    {
      id: "2",
      content: "Conseils marketing",
      time: "10:00",
      platforms: ["LinkedIn", "Twitter"],
      date: new Date(2025, 9, 28, 10, 0),
    },
    {
      id: "3",
      content: "Tutoriel vidéo",
      time: "16:00",
      platforms: ["TikTok", "Instagram"],
      date: new Date(2025, 9, 29, 16, 0),
    },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const getWeekDays = (date: Date) => {
    const curr = new Date(date);
    const first = curr.getDate() - curr.getDay();
    const days: Date[] = [];

    for (let i = 0; i < 7; i++) {
      days.push(new Date(curr.setDate(first + i)));
    }

    return days;
  };

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    
    if (viewMode === "day") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
    } else if (viewMode === "week") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
    }
    
    setCurrentDate(newDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'short', 
      day: 'numeric',
      month: 'long'
    });
  };

  const getPostsForDate = (date: Date | null) => {
    if (!date) return [];
    return mockPosts.filter(post => 
      post.date.toDateString() === date.toDateString()
    );
  };

  const handleDragStart = (postId: string) => {
    setDraggedPost(postId);
  };

  const handleDragEnd = () => {
    setDraggedPost(null);
  };

  const handleDrop = (date: Date | null) => {
    if (draggedPost && date) {
      console.log(`Post ${draggedPost} dropped on ${date.toDateString()}`);
    }
    setDraggedPost(null);
  };

  const renderDayView = () => {
    const posts = getPostsForDate(currentDate);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-4"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold gradient-text">{formatDate(currentDate)}</h3>
        </div>
        
        <div className="space-y-3">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Aucune publication programmée</p>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                draggable
                onDragStart={() => handleDragStart(post.id)}
                onDragEnd={handleDragEnd}
                className="p-4 rounded-lg glass border-2 border-border/50 hover:border-primary/30 cursor-move transition-all"
                data-testid={`post-${post.id}`}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-semibold text-primary">{post.time}</span>
                  <div className="flex gap-1">
                    {post.platforms.map((platform) => {
                      const Icon = platformIcons[platform];
                      const colorClass = platformColors[platform];
                      return (
                        <div
                          key={platform}
                          className={`w-6 h-6 rounded-md bg-gradient-to-br ${colorClass} flex items-center justify-center`}
                          title={platform}
                        >
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-sm">{post.content}</p>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    );
  };

  const renderWeekView = () => {
    const weekDays = getWeekDays(currentDate);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="grid grid-cols-7 gap-2"
      >
        {weekDays.map((day, index) => {
          const posts = getPostsForDate(day);
          const isToday = day.toDateString() === new Date().toDateString();
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(day)}
              className={`p-3 rounded-lg glass border-2 min-h-[120px] ${
                isToday ? 'border-primary/50 bg-primary/5' : 'border-border/50'
              } ${draggedPost ? 'hover:border-primary/50 hover:bg-primary/5' : ''} transition-all`}
              data-testid={`day-${day.getDate()}`}
            >
              <div className="text-center mb-2">
                <p className="text-xs text-muted-foreground">
                  {day.toLocaleDateString('fr-FR', { weekday: 'short' })}
                </p>
                <p className={`text-lg font-bold ${isToday ? 'text-primary' : ''}`}>
                  {day.getDate()}
                </p>
              </div>
              
              <div className="space-y-1">
                {posts.slice(0, 2).map((post) => (
                  <motion.div
                    key={post.id}
                    draggable
                    onDragStart={() => handleDragStart(post.id)}
                    onDragEnd={handleDragEnd}
                    className="p-1.5 rounded bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 cursor-move"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`post-${post.id}`}
                  >
                    <p className="text-xs truncate">{post.content}</p>
                    <div className="flex gap-0.5 mt-1">
                      {post.platforms.slice(0, 3).map((platform) => {
                        const Icon = platformIcons[platform];
                        return <Icon key={platform} className="w-3 h-3 text-primary" />;
                      })}
                    </div>
                  </motion.div>
                ))}
                {posts.length > 2 && (
                  <p className="text-xs text-center text-muted-foreground">+{posts.length - 2}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  const renderMonthView = () => {
    const days = getDaysInMonth(currentDate);
    const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-2"
      >
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-sm font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }
            
            const posts = getPostsForDate(day);
            const isToday = day.toDateString() === new Date().toDateString();
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.01 }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(day)}
                className={`aspect-square p-2 rounded-lg glass border-2 ${
                  isToday ? 'border-primary/50 bg-primary/5' : 'border-border/50'
                } ${draggedPost ? 'hover:border-primary/50 hover:bg-primary/5' : ''} transition-all cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                data-testid={`day-${day.getDate()}`}
              >
                <div className="text-center">
                  <p className={`text-sm font-semibold ${isToday ? 'text-primary' : ''}`}>
                    {day.getDate()}
                  </p>
                  {posts.length > 0 && (
                    <div className="mt-1 flex justify-center gap-0.5 flex-wrap">
                      {posts.slice(0, 3).map((post, pIndex) => (
                        <div
                          key={pIndex}
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <Card className="glass border-2 border-border/50 hover:border-primary/30 transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            Calendrier de publication
          </CardTitle>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateDate("prev")}
              data-testid="button-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-1 border rounded-lg p-1">
              {(['day', 'week', 'month'] as ViewMode[]).map((mode) => (
                <Button
                  key={mode}
                  variant={viewMode === mode ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode(mode)}
                  className={viewMode === mode ? "bg-gradient-to-r from-primary to-accent text-white" : ""}
                  data-testid={`button-view-${mode}`}
                >
                  {mode === 'day' && 'Jour'}
                  {mode === 'week' && 'Semaine'}
                  {mode === 'month' && 'Mois'}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateDate("next")}
              data-testid="button-next"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <AnimatePresence mode="wait">
          {viewMode === "day" && renderDayView()}
          {viewMode === "week" && renderWeekView()}
          {viewMode === "month" && renderMonthView()}
        </AnimatePresence>
        
        {draggedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20 text-center"
          >
            <p className="text-sm text-primary">
              Glissez la publication vers une nouvelle date
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default CalendarView;
