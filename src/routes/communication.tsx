import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";

export const Route = createFileRoute("/communication")({
  head: () => ({
    meta: [
      { title: "EUMETNET ML Communication" },
      {
        name: "description",
        content: "Connect with the E-AI community via Rocket Chat and mailing lists.",
      },
    ],
  }),
  component: CommunicationPage,
});

function CommunicationPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            EUMETNET
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Communication
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Connect with the E-AI community, join discussions, and stay informed about upcoming meetings and training courses.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Rocket Chat */}
          <Card className="flex flex-col border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-muted/30 border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-primary">Rocket Chat</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <p className="text-foreground/80 leading-relaxed mb-8 flex-1 text-lg">
                Join our dedicated Rocket Chat workspace to participate in real-time discussions, ask questions, and collaborate with other members of the E-AI community.
              </p>
              <Button size="lg" className="w-full sm:w-auto self-start" asChild>
                <a href="https://chat.eumetnet.eu" target="_blank" rel="noopener noreferrer">
                  Open Rocket Chat
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Email / Mailing List */}
          <Card className="flex flex-col border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-muted/30 border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-primary">Email & Mailing List</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-1 flex flex-col">
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                To be informed about upcoming meetings, training courses, and general announcements, please contact the E-AI Programme Coordination.
              </p>
              
              <div className="bg-muted p-4 rounded-md mb-8">
                <div className="font-medium text-foreground mb-1">Marek Jacob (DWD)</div>
                <div className="text-sm text-muted-foreground mb-2">E-AI Programme Coordination</div>
                <a 
                  href="mailto:marek.jacob@eumetnet.eu" 
                  className="text-primary hover:underline font-medium break-all"
                >
                  marek.jacob[at]eumetnet.eu
                </a>
              </div>

              <Button variant="outline" size="lg" className="w-full sm:w-auto self-start" asChild>
                <a href="mailto:marek.jacob@eumetnet.eu?subject=E-AI%20Mailing%20List%20Subscription">
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
