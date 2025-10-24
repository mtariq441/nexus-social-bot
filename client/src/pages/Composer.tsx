import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Image, Video, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Composer = () => {
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const platforms = [
    { name: "Instagram", checked: true },
    { name: "Facebook", checked: true },
    { name: "Twitter", checked: false },
    { name: "LinkedIn", checked: false },
  ];

  const handleSchedule = () => {
    toast({
      title: "Post Scheduled",
      description: "Your post has been scheduled successfully",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Post Composer</h1>
          <p className="text-muted-foreground">Create and schedule your social media posts</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Post</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="content">Post Content</Label>
                  <Textarea
                    id="content"
                    placeholder="What's on your mind?"
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="resize-none"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Image className="w-4 h-4 mr-2" />
                        Image
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4 mr-2" />
                        Video
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI Caption
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="schedule">Schedule Date & Time</Label>
                  <Input type="datetime-local" id="schedule" />
                </div>

                <div>
                  <Label>Select Platforms</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {platforms.map((platform) => (
                      <label
                        key={platform.name}
                        className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={platform.checked}
                          className="rounded"
                        />
                        <span>{platform.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={handleSchedule} className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Post
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 min-h-[200px]">
                  <p className="text-sm">{content || "Your post preview will appear here..."}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "Today, 2:00 PM", platforms: ["Instagram", "Facebook"] },
                    { date: "Tomorrow, 10:00 AM", platforms: ["Twitter", "LinkedIn"] },
                    { date: "Feb 15, 3:00 PM", platforms: ["Instagram"] },
                  ].map((post, index) => (
                    <div key={index} className="border-b pb-3 last:border-0">
                      <p className="text-sm font-medium">{post.date}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.platforms.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Composer;
