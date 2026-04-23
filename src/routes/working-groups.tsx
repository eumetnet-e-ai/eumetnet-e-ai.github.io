import { createFileRoute, useLocation } from "@tanstack/react-router";
import { workingGroups } from "@/data/working-groups";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { MessageSquare, Mail, Github, Globe, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const Route = createFileRoute("/working-groups")({
  head: () => ({
    meta: [
      { title: "EUMETNET ML Working Groups" },
      {
        name: "description",
        content: "Working Groups focusing on machine learning within the EUMETNET community.",
      },
    ],
  }),
  component: WorkingGroupsPage,
});

function WorkingGroupsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(workingGroups[0]?.id || null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash ? location.hash.replace('#', '') : '';
    if (hash && workingGroups.some((wg) => wg.id === hash)) {
      setSelectedId(hash);
    }
  }, [location.hash]);

  const selectedWg = workingGroups.find((wg) => wg.id === selectedId);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            EUMETNET
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Machine Learning Working Groups
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Collaborative groups focusing on various aspects of AI/ML implementation,
            standardization, and application in weather and climate.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
          {workingGroups.map((wg) => {
            const isSelected = selectedId === wg.id;
            return (
              <button
                key={wg.id}
                onClick={() => setSelectedId(wg.id)}
                className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <div className="flex gap-2 items-center">
                  {wg.emoji && <span className="text-xl">{wg.emoji}</span>}
                  <span className="text-xs font-semibold leading-tight line-clamp-2">
                    {wg.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedWg && (
          <Card className="flex flex-col border-primary/20 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-2xl leading-tight">{selectedWg.name}</CardTitle>
              {selectedWg.joint_programme && (
                <div className="mt-3">
                  <Badge variant="secondary">Jointly with {selectedWg.joint_programme}</Badge>
                </div>
              )}
              {selectedWg.description && (
                <div className="mt-6 prose prose-sm sm:prose-base dark:prose-invert prose-p:leading-relaxed prose-a:text-primary max-w-none text-foreground/90">
                  <ReactMarkdown>{selectedWg.description}</ReactMarkdown>
                </div>
              )}
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedWg.resources && Object.keys(selectedWg.resources).length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Resources
                    </h4>
                    <ul className="space-y-4">
                      {Object.entries(selectedWg.resources).map(([label, url]) => {
                        if (!url) return null;
                        
                        let Icon = ExternalLink;
                        let iconBg = "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400";
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
                        } else if (label.toLowerCase().includes('website')) {
                          Icon = Globe;
                          iconBg = "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
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
                  </div>
                )}

                {(selectedWg.facilitators || selectedWg.contacts) && (
                  <div>
                    {selectedWg.facilitators && selectedWg.facilitators.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Facilitators
                        </h4>
                        <div className="flex flex-col gap-2">
                          {selectedWg.facilitators.map((f, i) => (
                            <a
                              key={i}
                              href={`mailto:${f.email}`}
                              className="text-base text-primary hover:underline"
                            >
                              {f.name} <span className="text-muted-foreground text-sm">({f.email})</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedWg.contacts && selectedWg.contacts.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Contacts
                        </h4>
                        <div className="flex flex-col gap-2">
                          {selectedWg.contacts.map((c, i) => (
                            <a
                              key={i}
                              href={`mailto:${c.email}`}
                              className="text-base text-primary hover:underline"
                            >
                              {c.name} <span className="text-muted-foreground text-sm">({c.email})</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      
      <footer className="mt-16 border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          Add new entries by editing{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            src/data/working-groups.yaml
          </code>
          .
        </div>
      </footer>
    </div>
  );
}
