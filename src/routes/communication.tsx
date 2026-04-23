import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, Globe } from "lucide-react";
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
  const wgsWithComms = workingGroups.filter(wg => wg.resources && Object.keys(wg.resources).length > 0);

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
          <div className="grid grid-cols-1 gap-8 max-w-3xl">
            {/* Email / Mailing List */}
            <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-muted/30 border-b py-4">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-primary/10 rounded-md text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-primary">Programme Coordination</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="py-5">
                <p className="text-sm text-foreground/80 mb-5">
                  Contact the E-AI Programme Coordination to be informed about upcoming meetings, training courses, and general announcements.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-muted/40 p-4 rounded-md gap-4 border border-muted">
                  <div>
                    <div className="font-semibold text-foreground">Marek Jacob (DWD)</div>
                    <a 
                      href="mailto:marek.jacob@eumetnet.eu" 
                      className="text-sm text-primary hover:underline"
                    >
                      marek.jacob[at]eumetnet.eu
                    </a>
                  </div>

                  <Button variant="outline" asChild>
                    <a href="mailto:marek.jacob@eumetnet.eu?subject=E-AI%20Mailing%20List%20Subscription">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
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
                  <CardHeader className="bg-muted/30 border-b p-0">
                    <Link
                      to="/working-groups"
                      hash={wg.id}
                      className="block p-6 pb-4 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{wg.emoji}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary/80 transition-colors">
                          {wg.id.replace("-", " ")}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {wg.name}
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent className="pt-4 flex-1">
                    <ul className="space-y-4">
                      {wg.resources && Object.entries(wg.resources).map(([label, url]) => {
                        if (!url) return null;
                        
                        let Icon = Globe;
                        let iconBg = "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
                        let subLabel = "External resource";
                        
                        if (label.toLowerCase().includes('slack') || label.toLowerCase().includes('chat')) {
                          Icon = MessageSquare;
                          iconBg = "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
                          subLabel = "Join the conversation";
                        } else if (label.toLowerCase().includes('github')) {
                          Icon = Github;
                          iconBg = "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300";
                          subLabel = "Source code & issues";
                        } else if (label.toLowerCase().includes('mail')) {
                          Icon = Mail;
                          iconBg = "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400";
                          subLabel = "Mailing List";
                        }

                        return (
                          <li key={label}>
                            <a 
                              href={url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="group flex items-start gap-3"
                            >
                              <div className={`p-1.5 rounded-md mt-0.5 ${iconBg}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="text-sm font-medium group-hover:text-primary transition-colors break-all">
                                  {label.replace('mailto:', '')}
                                </div>
                                <div className="text-xs text-muted-foreground line-clamp-1">
                                  {subLabel}
                                </div>
                              </div>
                            </a>
                          </li>
                        );
                      })}
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
