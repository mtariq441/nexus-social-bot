import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Archive, CheckCircle } from "lucide-react";

const Inbox = () => {
  const messages = [
    {
      id: 1,
      platform: "Instagram",
      user: "@sarah_designs",
      message: "Love your recent post! Can you share more about...",
      time: "2m ago",
      unread: true,
    },
    {
      id: 2,
      platform: "Facebook",
      user: "John Smith",
      message: "Hi! I'm interested in your services...",
      time: "15m ago",
      unread: true,
    },
    {
      id: 3,
      platform: "Twitter",
      user: "@techguru",
      message: "Great insights on the latest trends!",
      time: "1h ago",
      unread: false,
    },
    {
      id: 4,
      platform: "LinkedIn",
      user: "Emily Chen",
      message: "Would love to connect and discuss...",
      time: "3h ago",
      unread: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Unified Inbox</h1>
          <p className="text-muted-foreground">Manage all your social media messages in one place</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <Input placeholder="Search messages..." className="flex-1" />
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="unread">Unread</TabsTrigger>
                    <TabsTrigger value="archived">Archived</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-2">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`p-3 border rounded-lg cursor-pointer hover:bg-muted/50 ${
                            msg.unread ? "bg-muted/30" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between mb-1">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {msg.platform}
                              </Badge>
                              {msg.unread && (
                                <div className="w-2 h-2 bg-primary rounded-full" />
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="font-medium text-sm">{msg.user}</p>
                          <p className="text-xs text-muted-foreground truncate">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="unread" className="mt-4">
                    <div className="space-y-2">
                      {messages
                        .filter((msg) => msg.unread)
                        .map((msg) => (
                          <div
                            key={msg.id}
                            className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50 bg-muted/30"
                          >
                            <div className="flex items-start justify-between mb-1">
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-xs">
                                  {msg.platform}
                                </Badge>
                                <div className="w-2 h-2 bg-primary rounded-full" />
                              </div>
                              <span className="text-xs text-muted-foreground">{msg.time}</span>
                            </div>
                            <p className="font-medium text-sm">{msg.user}</p>
                            <p className="text-xs text-muted-foreground truncate">{msg.message}</p>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="archived" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      <Archive className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No archived messages</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>@sarah_designs</CardTitle>
                    <p className="text-sm text-muted-foreground">Instagram • 2m ago</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Archive className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/30">
                  <p className="text-sm">
                    Love your recent post! Can you share more about your creative process? I'd love
                    to learn from your approach.
                  </p>
                </div>

                <div>
                  <Input
                    placeholder="Type your reply..."
                    className="mb-2"
                  />
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      AI Suggest
                    </Button>
                    <Button size="sm">Send Reply</Button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 text-sm">Quick Actions</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      Thank You
                    </Button>
                    <Button variant="outline" size="sm">
                      More Info
                    </Button>
                    <Button variant="outline" size="sm">
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
