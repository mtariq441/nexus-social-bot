import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Image, Video, Sparkles, Hash, Wand2, CheckCircle2, Clock } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin, SiX, SiTiktok } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import CalendarView from "@/components/CalendarView";

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

const Composer = () => {
  const { t } = useLanguage();
  const [content, setContent] = useState("");
  const [aiLoading, setAiLoading] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const { toast } = useToast();

  const platforms = [
    { name: "Instagram", checked: true },
    { name: "Facebook", checked: true },
    { name: "Twitter", checked: false },
    { name: "LinkedIn", checked: false },
    { name: "TikTok", checked: false },
  ];

  const handleSchedule = () => {
    toast({
      title: "Publication programmée",
      description: "Votre publication a été programmée avec succès",
    });
  };

  const handleAiAction = (action: string) => {
    setAiLoading(action);
    
    setTimeout(() => {
      let result = "";
      
      switch (action) {
        case "caption":
          result = "🌟 Découvrez notre nouveau produit innovant qui va révolutionner votre quotidien ! Une expérience unique vous attend. #Innovation #Nouveauté";
          break;
        case "hashtags":
          result = content + "\n\n#Marketing #SocialMedia #Digital #Engagement #ContentCreator #Business #Growth #Success";
          break;
        case "optimize":
          result = "✨ Votre publication est maintenant optimisée !\n\n" + 
                   (content || "Contenu optimisé avec emojis 🚀, hashtags stratégiques #Success, et appel à l'action engageant. Prêt à maximiser votre portée ! 💫");
          break;
      }
      
      setContent(result);
      setAiLoading(null);
      
      toast({
        title: "✨ IA activée",
        description: action === "caption" ? "Légende générée avec succès" : 
                     action === "hashtags" ? "Hashtags suggérés" : 
                     "Publication optimisée",
      });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-text" data-testid="text-composer-title">
            {t.composer.title}
          </h1>
          <p className="text-muted-foreground">{t.composer.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Composer Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="glass border-2 border-border/50 hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle>{t.composer.createPost}</CardTitle>
                  <CardDescription>{t.composer.postContent}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="content">{t.composer.postContent}</Label>
                    <Textarea
                      id="content"
                      placeholder={t.composer.placeholderPost}
                      rows={8}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="resize-none mt-2 glass"
                      data-testid="input-post-content"
                    />
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" data-testid="button-add-image">
                          <Image className="w-4 h-4 mr-2" />
                          Image
                        </Button>
                        <Button variant="outline" size="sm" data-testid="button-add-video">
                          <Video className="w-4 h-4 mr-2" />
                          Vidéo
                        </Button>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {content.length} caractères
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="schedule">Date et heure de publication</Label>
                    <Input 
                      type="datetime-local" 
                      id="schedule" 
                      className="mt-2 glass"
                      data-testid="input-schedule-datetime"
                    />
                  </div>

                  <div>
                    <Label>{t.composer.selectPlatforms}</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                      {platforms.map((platform) => {
                        const Icon = platformIcons[platform.name];
                        const colorClass = platformColors[platform.name];
                        
                        return (
                          <motion.label
                            key={platform.name}
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="flex items-center space-x-2 p-3 border-2 border-border/50 rounded-lg cursor-pointer hover:border-primary/30 transition-all glass"
                            data-testid={`checkbox-platform-${platform.name.toLowerCase()}`}
                          >
                            <input
                              type="checkbox"
                              defaultChecked={platform.checked}
                              className="rounded"
                            />
                            <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm">{platform.name}</span>
                          </motion.label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button 
                      onClick={handleSchedule} 
                      className="flex-1 btn-premium bg-gradient-to-r from-primary to-accent text-white border-0"
                      data-testid="button-schedule-post"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {t.composer.schedulePost}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      data-testid="button-save-draft"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {t.composer.saveDraft}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Assistant Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass border-2 border-border/50 hover:border-primary/30 transition-all relative overflow-hidden group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-purple-500" />
                    </motion.div>
                    {t.composer.aiAssistant}
                  </CardTitle>
                  <CardDescription>
                    Laissez l'IA vous aider à créer du contenu engageant
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 relative z-10">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full justify-start glass hover:border-purple-500/50 hover:bg-purple-500/10"
                      onClick={() => handleAiAction("caption")}
                      disabled={aiLoading !== null}
                      data-testid="button-ai-caption"
                    >
                      {aiLoading === "caption" ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          <Wand2 className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <Wand2 className="w-4 h-4 mr-2" />
                      )}
                      {t.composer.generateCaption}
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full justify-start glass hover:border-blue-500/50 hover:bg-blue-500/10"
                      onClick={() => handleAiAction("hashtags")}
                      disabled={aiLoading !== null}
                      data-testid="button-ai-hashtags"
                    >
                      {aiLoading === "hashtags" ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          <Hash className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <Hash className="w-4 h-4 mr-2" />
                      )}
                      {t.composer.suggestHashtags}
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full justify-start glass hover:border-green-500/50 hover:bg-green-500/10"
                      onClick={() => handleAiAction("optimize")}
                      disabled={aiLoading !== null}
                      data-testid="button-ai-optimize"
                    >
                      {aiLoading === "optimize" ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <Sparkles className="w-4 h-4 mr-2" />
                      )}
                      {t.composer.optimizePost}
                    </Button>
                  </motion.div>

                  <AnimatePresence>
                    {aiLoading && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                      >
                        <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <Sparkles className="w-4 h-4" />
                          </motion.div>
                          IA en cours de génération...
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* Calendar View Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant="outline"
                className="w-full glass"
                onClick={() => setShowCalendar(!showCalendar)}
                data-testid="button-toggle-calendar"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {showCalendar ? "Masquer le calendrier" : "Afficher le calendrier"}
              </Button>
            </motion.div>

            {/* Calendar View */}
            <AnimatePresence>
              {showCalendar && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CalendarView />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="glass border-2 border-border/50 hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle>Aperçu</CardTitle>
                  <CardDescription>Prévisualisation de votre publication</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-border/50 rounded-lg p-4 min-h-[200px] glass">
                    {content ? (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm whitespace-pre-wrap"
                        data-testid="text-preview"
                      >
                        {content}
                      </motion.p>
                    ) : (
                      <p className="text-sm text-muted-foreground italic">
                        Votre aperçu apparaîtra ici...
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Scheduled Posts Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass border-2 border-border/50 hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Publications programmées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { date: "Aujourd'hui, 14:00", platforms: ["Instagram", "Facebook"], content: "Nouveau produit" },
                      { date: "Demain, 10:00", platforms: ["Twitter", "LinkedIn"], content: "Conseils marketing" },
                      { date: "29 Oct, 16:00", platforms: ["TikTok"], content: "Tutoriel vidéo" },
                    ].map((post, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-border/50 pb-3 last:border-0 glass p-3 rounded-lg hover:border-primary/20 border border-transparent transition-all"
                        whileHover={{ x: 4 }}
                        data-testid={`scheduled-post-${index}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-sm font-medium">{post.date}</p>
                            <p className="text-xs text-muted-foreground mt-1">{post.content}</p>
                          </div>
                        </div>
                        <div className="flex gap-1 mt-2">
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
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Composer;
