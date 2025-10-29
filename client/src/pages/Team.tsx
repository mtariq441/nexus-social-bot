import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Mail, MoreVertical, Clock, Activity } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Team = () => {
  const { t } = useLanguage();
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("editor");

  const teamMembers = [
    {
      id: 1,
      name: "Sophie Laurent",
      email: "sophie@example.com",
      role: "admin",
      avatar: "/placeholder.svg",
      lastActive: "En ligne",
      initials: "SL",
    },
    {
      id: 2,
      name: "Marc Dubois",
      email: "marc@example.com",
      role: "editor",
      avatar: "/placeholder.svg",
      lastActive: "Il y a 5 min",
      initials: "MD",
    },
    {
      id: 3,
      name: "Julie Martin",
      email: "julie@example.com",
      role: "analyst",
      avatar: "/placeholder.svg",
      lastActive: "Il y a 2 heures",
      initials: "JM",
    },
    {
      id: 4,
      name: "Pierre Rousseau",
      email: "pierre@example.com",
      role: "viewer",
      avatar: "/placeholder.svg",
      lastActive: "Il y a 1 jour",
      initials: "PR",
    },
    {
      id: 5,
      name: "Emma Leroy",
      email: "emma@example.com",
      role: "editor",
      avatar: "/placeholder.svg",
      lastActive: "Il y a 3 heures",
      initials: "EL",
    },
  ];

  const activityLog = [
    {
      id: 1,
      user: "Sophie Laurent",
      action: "a invité un nouveau membre",
      target: "Marc Dubois",
      time: "Il y a 2 heures",
    },
    {
      id: 2,
      user: "Marc Dubois",
      action: "a modifié les permissions de",
      target: "Julie Martin",
      time: "Il y a 5 heures",
    },
    {
      id: 3,
      user: "Julie Martin",
      action: "s'est connecté",
      target: null,
      time: "Il y a 1 jour",
    },
    {
      id: 4,
      user: "Sophie Laurent",
      action: "a retiré",
      target: "Ancien Membre",
      time: "Il y a 2 jours",
    },
    {
      id: 5,
      user: "Emma Leroy",
      action: "a rejoint l'équipe",
      target: null,
      time: "Il y a 3 jours",
    },
  ];

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "admin":
        return "default";
      case "editor":
        return "secondary";
      case "analyst":
        return "outline";
      case "viewer":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0";
      case "editor":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
      case "analyst":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
      case "viewer":
        return "bg-gradient-to-r from-gray-400 to-gray-500 text-white border-0";
      default:
        return "";
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "admin":
        return t.team.admin;
      case "editor":
        return t.team.editor;
      case "analyst":
        return t.team.analyst;
      case "viewer":
        return t.team.viewer;
      default:
        return role;
    }
  };

  const handleInvite = () => {
    console.log("Inviting:", inviteEmail, "as", inviteRole);
    setInviteModalOpen(false);
    setInviteEmail("");
    setInviteRole("editor");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold gradient-text" data-testid="text-team-title">
              {t.team.title}
            </h1>
            <p className="text-muted-foreground">{t.team.members}</p>
          </div>

          <Dialog open={inviteModalOpen} onOpenChange={setInviteModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary shadow-glow-sm" data-testid="button-invite-member">
                <UserPlus className="w-4 h-4 mr-2" />
                {t.team.inviteMember}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]" data-testid="modal-invite-member">
              <DialogHeader>
                <DialogTitle>{t.team.inviteMember}</DialogTitle>
                <DialogDescription>
                  {t.team.inviteMemberDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      className="pl-10"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      data-testid="input-invite-email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">{t.team.role}</Label>
                  <Select value={inviteRole} onValueChange={setInviteRole}>
                    <SelectTrigger id="role" data-testid="select-invite-role">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">{t.team.admin}</SelectItem>
                      <SelectItem value="editor">{t.team.editor}</SelectItem>
                      <SelectItem value="analyst">{t.team.analyst}</SelectItem>
                      <SelectItem value="viewer">{t.team.viewer}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setInviteModalOpen(false)} data-testid="button-cancel-invite">
                  {t.common.cancel}
                </Button>
                <Button onClick={handleInvite} className="bg-gradient-primary" data-testid="button-confirm-invite">
                  {t.team.sendInvite}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Team Members List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="glass border-2 border-border/50">
              <CardHeader>
                <CardTitle>{t.team.members}</CardTitle>
                <CardDescription>{teamMembers.length} membres actifs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg glass hover:border-primary/20 border border-transparent transition-all group"
                      data-testid={`member-${member.id}`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <p className="font-semibold text-sm" data-testid={`text-member-name-${member.id}`}>
                              {member.name}
                            </p>
                            <Badge className={getRoleBadgeColor(member.role)} data-testid={`badge-member-role-${member.id}`}>
                              {getRoleLabel(member.role)}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground truncate" data-testid={`text-member-email-${member.id}`}>
                            {member.email}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            <span data-testid={`text-member-last-active-${member.id}`}>{member.lastActive}</span>
                          </div>
                        </div>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" data-testid={`button-member-actions-${member.id}`}>
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem data-testid={`menu-edit-member-${member.id}`}>
                            {t.common.edit} {t.team.role}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive" data-testid={`menu-remove-member-${member.id}`}>
                            {t.team.remove}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Log */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass border-2 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Activité récente
                </CardTitle>
                <CardDescription>Actions de l'équipe</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activityLog.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                      data-testid={`activity-${activity.id}`}
                    >
                      <div className="relative mt-1">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary shadow-glow-sm" />
                        {index < activityLog.length - 1 && (
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-border/50" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-semibold" data-testid={`text-activity-user-${activity.id}`}>
                            {activity.user}
                          </span>{" "}
                          <span className="text-muted-foreground">{activity.action}</span>
                          {activity.target && (
                            <>
                              {" "}
                              <span className="font-semibold" data-testid={`text-activity-target-${activity.id}`}>
                                {activity.target}
                              </span>
                            </>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1" data-testid={`text-activity-time-${activity.id}`}>
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Team;
