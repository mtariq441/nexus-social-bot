import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/LanguageProvider";
import { Search, Star, StarOff, CheckCircle, Send, Sparkles, Clock } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin, SiTiktok } from "react-icons/si";

interface Message {
  id: number;
  platform: "Facebook" | "Instagram" | "Twitter" | "LinkedIn" | "TikTok";
  user: string;
  message: string;
  time: string;
  timestamp: Date;
  unread: boolean;
  important: boolean;
  replied: boolean;
  thread: {
    user: string;
    message: string;
    time: string;
    isSelf?: boolean;
  }[];
}

const Inbox = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock conversation data with French content
  const mockMessages: Message[] = [
    {
      id: 1,
      platform: "Instagram",
      user: "@marie_dubois",
      message: "Bonjour ! J'adore votre dernier post sur les tendances 2025. Pouvez-vous partager plus de détails ?",
      time: "Il y a 2 min",
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      unread: true,
      important: true,
      replied: false,
      thread: [
        {
          user: "@marie_dubois",
          message: "Bonjour ! J'adore votre dernier post sur les tendances 2025. Pouvez-vous partager plus de détails ?",
          time: "Il y a 2 min"
        }
      ]
    },
    {
      id: 2,
      platform: "Facebook",
      user: "Jean Martin",
      message: "Excellent contenu ! Je suis très intéressé par vos services de marketing digital.",
      time: "Il y a 15 min",
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      unread: true,
      important: false,
      replied: false,
      thread: [
        {
          user: "Jean Martin",
          message: "Excellent contenu ! Je suis très intéressé par vos services de marketing digital.",
          time: "Il y a 15 min"
        }
      ]
    },
    {
      id: 3,
      platform: "Twitter",
      user: "@tech_innovateur",
      message: "Superbes insights sur l'IA ! Pourrions-nous collaborer sur un projet ?",
      time: "Il y a 1 h",
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      unread: false,
      important: true,
      replied: true,
      thread: [
        {
          user: "@tech_innovateur",
          message: "Superbes insights sur l'IA ! Pourrions-nous collaborer sur un projet ?",
          time: "Il y a 2 h"
        },
        {
          user: "Vous",
          message: "Merci beaucoup ! Je serais ravi d'en discuter. Envoyez-moi un DM avec plus de détails.",
          time: "Il y a 1 h",
          isSelf: true
        }
      ]
    },
    {
      id: 4,
      platform: "LinkedIn",
      user: "Sophie Laurent",
      message: "J'aimerais discuter d'une opportunité de collaboration pour notre entreprise.",
      time: "Il y a 3 h",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      unread: false,
      important: true,
      replied: false,
      thread: [
        {
          user: "Sophie Laurent",
          message: "J'aimerais discuter d'une opportunité de collaboration pour notre entreprise.",
          time: "Il y a 3 h"
        }
      ]
    },
    {
      id: 5,
      platform: "TikTok",
      user: "@createur_content",
      message: "Votre dernière vidéo est incroyable ! Quels outils utilisez-vous pour l'édition ?",
      time: "Il y a 5 h",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: true,
      thread: [
        {
          user: "@createur_content",
          message: "Votre dernière vidéo est incroyable ! Quels outils utilisez-vous pour l'édition ?",
          time: "Il y a 6 h"
        },
        {
          user: "Vous",
          message: "Merci ! J'utilise principalement Adobe Premiere Pro et DaVinci Resolve.",
          time: "Il y a 5 h",
          isSelf: true
        }
      ]
    },
    {
      id: 6,
      platform: "Instagram",
      user: "@influenceur_mode",
      message: "Collaboration potentielle ? J'adore votre style et votre contenu !",
      time: "Il y a 8 h",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      unread: true,
      important: true,
      replied: false,
      thread: [
        {
          user: "@influenceur_mode",
          message: "Collaboration potentielle ? J'adore votre style et votre contenu !",
          time: "Il y a 8 h"
        }
      ]
    },
    {
      id: 7,
      platform: "Facebook",
      user: "Pierre Durand",
      message: "Pouvez-vous me donner plus d'informations sur vos tarifs ?",
      time: "Il y a 12 h",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: false,
      thread: [
        {
          user: "Pierre Durand",
          message: "Pouvez-vous me donner plus d'informations sur vos tarifs ?",
          time: "Il y a 12 h"
        }
      ]
    },
    {
      id: 8,
      platform: "LinkedIn",
      user: "Claire Moreau",
      message: "Félicitations pour votre récente promotion ! Restons en contact.",
      time: "Il y a 1 j",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: true,
      thread: [
        {
          user: "Claire Moreau",
          message: "Félicitations pour votre récente promotion ! Restons en contact.",
          time: "Il y a 1 j 2 h"
        },
        {
          user: "Vous",
          message: "Merci beaucoup Claire ! Certainement, n'hésite pas à me contacter.",
          time: "Il y a 1 j",
          isSelf: true
        }
      ]
    },
    {
      id: 9,
      platform: "Twitter",
      user: "@entrepreneur_fr",
      message: "Votre thread sur le marketing était très instructif. Merci pour le partage !",
      time: "Il y a 1 j",
      timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: false,
      thread: [
        {
          user: "@entrepreneur_fr",
          message: "Votre thread sur le marketing était très instructif. Merci pour le partage !",
          time: "Il y a 1 j"
        }
      ]
    },
    {
      id: 10,
      platform: "Instagram",
      user: "@photographe_pro",
      message: "Magnifique photo ! Quelle caméra et quels réglages avez-vous utilisés ?",
      time: "Il y a 2 j",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: true,
      thread: [
        {
          user: "@photographe_pro",
          message: "Magnifique photo ! Quelle caméra et quels réglages avez-vous utilisés ?",
          time: "Il y a 2 j 3 h"
        },
        {
          user: "Vous",
          message: "Merci ! J'ai utilisé un Sony A7III avec une ouverture f/2.8, ISO 400.",
          time: "Il y a 2 j",
          isSelf: true
        }
      ]
    },
    {
      id: 11,
      platform: "TikTok",
      user: "@danseur_talent",
      message: "Incroyable chorégraphie ! Tu donnes des cours ?",
      time: "Il y a 2 j",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      unread: true,
      important: false,
      replied: false,
      thread: [
        {
          user: "@danseur_talent",
          message: "Incroyable chorégraphie ! Tu donnes des cours ?",
          time: "Il y a 2 j"
        }
      ]
    },
    {
      id: 12,
      platform: "Facebook",
      user: "Amélie Petit",
      message: "J'ai partagé votre article avec mon équipe. Vraiment utile !",
      time: "Il y a 3 j",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: false,
      thread: [
        {
          user: "Amélie Petit",
          message: "J'ai partagé votre article avec mon équipe. Vraiment utile !",
          time: "Il y a 3 j"
        }
      ]
    },
    {
      id: 13,
      platform: "LinkedIn",
      user: "Thomas Bernard",
      message: "Seriez-vous disponible pour une interview podcast sur les réseaux sociaux ?",
      time: "Il y a 3 j",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      unread: false,
      important: true,
      replied: false,
      thread: [
        {
          user: "Thomas Bernard",
          message: "Seriez-vous disponible pour une interview podcast sur les réseaux sociaux ?",
          time: "Il y a 3 j"
        }
      ]
    },
    {
      id: 14,
      platform: "Twitter",
      user: "@blogueuse_tech",
      message: "Excellente analyse ! Puis-je citer votre tweet dans mon prochain article ?",
      time: "Il y a 4 j",
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: true,
      thread: [
        {
          user: "@blogueuse_tech",
          message: "Excellente analyse ! Puis-je citer votre tweet dans mon prochain article ?",
          time: "Il y a 4 j 5 h"
        },
        {
          user: "Vous",
          message: "Bien sûr ! Avec plaisir. N'oubliez pas de me taguer.",
          time: "Il y a 4 j",
          isSelf: true
        }
      ]
    },
    {
      id: 15,
      platform: "Instagram",
      user: "@artiste_digital",
      message: "Votre feed est une source d'inspiration constante ! Continuez comme ça !",
      time: "Il y a 5 j",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      unread: false,
      important: false,
      replied: false,
      thread: [
        {
          user: "@artiste_digital",
          message: "Votre feed est une source d'inspiration constante ! Continuez comme ça !",
          time: "Il y a 5 j"
        }
      ]
    }
  ];

  const getPlatformIcon = (platform: string) => {
    const iconClass = "w-4 h-4";
    switch (platform) {
      case "Facebook":
        return <SiFacebook className={iconClass} style={{ color: "#1877F2" }} />;
      case "Instagram":
        return <SiInstagram className={iconClass} style={{ color: "#E4405F" }} />;
      case "Twitter":
        return <SiX className={iconClass} style={{ color: "#000000" }} />;
      case "LinkedIn":
        return <SiLinkedin className={iconClass} style={{ color: "#0A66C2" }} />;
      case "TikTok":
        return <SiTiktok className={iconClass} style={{ color: "#000000" }} />;
      default:
        return null;
    }
  };

  const filterMessages = (messages: Message[], filter: string) => {
    let filtered = messages;

    switch (filter) {
      case "unread":
        filtered = filtered.filter((msg) => msg.unread);
        break;
      case "important":
        filtered = filtered.filter((msg) => msg.important);
        break;
      case "replied":
        filtered = filtered.filter((msg) => msg.replied);
        break;
      default:
        break;
    }

    if (platformFilter !== "all") {
      filtered = filtered.filter((msg) => msg.platform === platformFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (msg) =>
          msg.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
          msg.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const toggleImportant = (messageId: number) => {
    const message = mockMessages.find((msg) => msg.id === messageId);
    if (message) {
      message.important = !message.important;
      if (selectedMessage?.id === messageId) {
        setSelectedMessage({ ...message });
      }
    }
  };

  const markAsRead = (messageId: number) => {
    const message = mockMessages.find((msg) => msg.id === messageId);
    if (message) {
      message.unread = false;
      if (selectedMessage?.id === messageId) {
        setSelectedMessage({ ...message });
      }
    }
  };

  const handleSendReply = () => {
    if (replyText.trim() && selectedMessage) {
      selectedMessage.thread.push({
        user: "Vous",
        message: replyText,
        time: "À l'instant",
        isSelf: true
      });
      selectedMessage.replied = true;
      setReplyText("");
    }
  };

  const aiSuggestions = [
    "Merci beaucoup ! Je suis ravi que cela vous plaise.",
    "Je vous remercie pour votre intérêt. Voulez-vous en discuter davantage ?",
    "C'est un plaisir ! N'hésitez pas si vous avez des questions."
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-inbox-title">
            {t.inbox.title}
          </h1>
          <p className="text-muted-foreground" data-testid="text-inbox-subtitle">
            Gérez tous vos messages sur les réseaux sociaux en un seul endroit
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="backdrop-blur-sm bg-card/95 border-border/50">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder={t.inbox.searchMessages}
                    className="flex-1"
                    data-testid="input-search-messages"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={platformFilter} onValueChange={setPlatformFilter}>
                  <SelectTrigger data-testid="select-platform-filter">
                    <SelectValue placeholder={t.inbox.filterByPlatform} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les plateformes</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="Twitter">Twitter/X</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="TikTok">TikTok</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4" data-testid="tabs-message-filter">
                    <TabsTrigger value="all" data-testid="tab-all-messages">
                      Tous
                    </TabsTrigger>
                    <TabsTrigger value="unread" data-testid="tab-unread-messages">
                      Non lus
                    </TabsTrigger>
                    <TabsTrigger value="important" data-testid="tab-important-messages">
                      Importants
                    </TabsTrigger>
                    <TabsTrigger value="replied" data-testid="tab-replied-messages">
                      Répondus
                    </TabsTrigger>
                  </TabsList>

                  {["all", "unread", "important", "replied"].map((filter) => (
                    <TabsContent key={filter} value={filter} className="mt-4">
                      {loading ? (
                        <div className="space-y-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-3 border rounded-lg space-y-2">
                              <Skeleton className="h-4 w-3/4" />
                              <Skeleton className="h-3 w-1/2" />
                              <Skeleton className="h-3 w-full" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {filterMessages(mockMessages, filter).length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                              <p data-testid="text-no-messages">Aucun message</p>
                            </div>
                          ) : (
                            filterMessages(mockMessages, filter).map((msg) => (
                              <div
                                key={msg.id}
                                data-testid={`message-item-${msg.id}`}
                                className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
                                  msg.unread
                                    ? "bg-primary/5 border-primary/20"
                                    : "hover:bg-muted/50"
                                } ${
                                  selectedMessage?.id === msg.id
                                    ? "ring-2 ring-primary"
                                    : ""
                                }`}
                                onClick={() => {
                                  setSelectedMessage(msg);
                                  if (msg.unread) {
                                    markAsRead(msg.id);
                                  }
                                }}
                              >
                                <div className="flex items-start justify-between mb-1">
                                  <div className="flex items-center space-x-2">
                                    <Badge
                                      variant="outline"
                                      className="text-xs flex items-center gap-1"
                                      data-testid={`badge-platform-${msg.id}`}
                                    >
                                      {getPlatformIcon(msg.platform)}
                                      {msg.platform}
                                    </Badge>
                                    {msg.unread && (
                                      <div
                                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                                        data-testid={`indicator-unread-${msg.id}`}
                                      />
                                    )}
                                    {msg.important && (
                                      <Star
                                        className="w-3 h-3 fill-yellow-500 text-yellow-500"
                                        data-testid={`icon-important-${msg.id}`}
                                      />
                                    )}
                                  </div>
                                  <span
                                    className="text-xs text-muted-foreground flex items-center gap-1"
                                    data-testid={`text-time-${msg.id}`}
                                  >
                                    <Clock className="w-3 h-3" />
                                    {msg.time}
                                  </span>
                                </div>
                                <p className="font-medium text-sm" data-testid={`text-user-${msg.id}`}>
                                  {msg.user}
                                </p>
                                <p
                                  className="text-xs text-muted-foreground truncate"
                                  data-testid={`text-message-${msg.id}`}
                                >
                                  {msg.message}
                                </p>
                                {msg.replied && (
                                  <Badge
                                    variant="secondary"
                                    className="mt-1 text-xs"
                                    data-testid={`badge-replied-${msg.id}`}
                                  >
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Répondu
                                  </Badge>
                                )}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selectedMessage ? (
              <Card className="h-full backdrop-blur-sm bg-card/95 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2" data-testid="text-selected-user">
                        {selectedMessage.user}
                        {selectedMessage.important && (
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        )}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1" data-testid="text-selected-platform">
                        {getPlatformIcon(selectedMessage.platform)}
                        {selectedMessage.platform} • {selectedMessage.time}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        data-testid="button-mark-as-important"
                        onClick={() => toggleImportant(selectedMessage.id)}
                      >
                        {selectedMessage.important ? (
                          <>
                            <StarOff className="w-4 h-4 mr-1" />
                            Retirer
                          </>
                        ) : (
                          <>
                            <Star className="w-4 h-4 mr-1" />
                            {t.inbox.markAsImportant}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4 bg-muted/30 max-h-96 overflow-y-auto space-y-3" data-testid="container-message-thread">
                    {selectedMessage.thread.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg ${
                          msg.isSelf
                            ? "bg-primary/10 ml-8 border-l-2 border-primary"
                            : "bg-background/50 mr-8 border-l-2 border-muted"
                        }`}
                        data-testid={`thread-message-${idx}`}
                      >
                        <p className="font-semibold text-xs mb-1">{msg.user}</p>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      {t.inbox.quickReply}
                    </h4>
                    <Textarea
                      placeholder="Réponse rapide..."
                      className="min-h-24"
                      data-testid="textarea-quick-reply"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {aiSuggestions.map((suggestion, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            data-testid={`button-ai-suggestion-${idx}`}
                            onClick={() => setReplyText(suggestion)}
                          >
                            <Sparkles className="w-3 h-3 mr-1" />
                            IA {idx + 1}
                          </Button>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        data-testid="button-send-reply"
                        onClick={handleSendReply}
                        disabled={!replyText.trim()}
                      >
                        <Send className="w-4 h-4 mr-1" />
                        Envoyer
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 text-sm">Actions rapides</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        data-testid="button-quick-action-thanks"
                        onClick={() =>
                          setReplyText("Merci beaucoup pour votre message !")
                        }
                      >
                        Merci
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        data-testid="button-quick-action-more-info"
                        onClick={() =>
                          setReplyText("Je serais ravi de vous donner plus d'informations.")
                        }
                      >
                        Plus d'infos
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        data-testid="button-quick-action-schedule"
                        onClick={() =>
                          setReplyText("Voulez-vous planifier un appel pour en discuter ?")
                        }
                      >
                        Planifier un appel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full backdrop-blur-sm bg-card/95 border-border/50 flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <div className="text-muted-foreground space-y-2">
                    <Search className="w-16 h-16 mx-auto opacity-20" />
                    <p className="text-lg font-medium" data-testid="text-no-message-selected">
                      Sélectionnez un message
                    </p>
                    <p className="text-sm">
                      Choisissez une conversation pour voir les détails et répondre
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
