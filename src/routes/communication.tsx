import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Github, Globe, Hash } from "lucide-react";
import { workingGroups } from "@/data/working-groups";

export const Route = createFileRoute("/communication")({
  head: () => ({
    meta: [
      { title: "EUMETNET ML Communication" },
      {
        name: "description",
        content: "Connect with the E-AI community via Rocket Chat, mailing lists, and WG channels.",
      },
    ],
  }),
  component: CommunicationPage,
});

function CommunicationPage() {
  const wgsWithComms = workingGroups.filter(wg => wg.communication && Object.keys(wg.communication).length > 0);

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

      <main className="mx-auto max-w-6xl px-6 py-10 space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">General E-AI Community</h2>
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
                  <CardTitle className="text-2xl text-primary">Programme Coordination</CardTitle>
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
        </section>

        {wgsWithComms.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Working Group Channels</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {wgsWithComms.map((wg) => (
                <Card key={wg.id} className="flex flex-col shadow-sm border-muted">
                  <CardHeader className="bg-muted/30 border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{wg.emoji}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {wg.id.replace("-", " ")}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{wg.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 flex-1">
                    <ul className="space-y-4">
                      {wg.communication?.messaging && (
                        <li>
                          <a 
                            href={wg.communication.messaging.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3"
                          >
                            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mt-0.5">
                              <MessageSquare className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                                {wg.communication.messaging.name}
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                Join the conversation
                              </div>
                            </div>
                          </a>
                        </li>
                      )}
                      {wg.communication?.github && (
                        <li>
                          <a 
                            href={wg.communication.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3"
                          >
                            <div className="p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-md text-neutral-700 dark:text-neutral-300 mt-0.5">
                              <Github className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                                GitHub Repository
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                Source code & issues
                              </div>
                            </div>
                          </a>
                        </li>
                      )}
                      {wg.communication?.mailingList && (
                        <li>
                          <a 
                            href={`mailto:${wg.communication.mailingList}`}
                            className="group flex items-start gap-3"
                          >
                            <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-md text-orange-600 dark:text-orange-400 mt-0.5">
                              <Mail className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                                Mailing List
                              </div>
                              <div className="text-xs text-muted-foreground break-all">
                                {wg.communication.mailingList.replace("@", "[at]")}
                              </div>
                            </div>
                          </a>
                        </li>
                      )}
                      {wg.communication?.website && (
                        <li>
                          <a 
                            href={wg.communication.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3"
                          >
                            <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-md text-green-600 dark:text-green-400 mt-0.5">
                              <Globe className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                                Website
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                External resources
                              </div>
                            </div>
                          </a>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
