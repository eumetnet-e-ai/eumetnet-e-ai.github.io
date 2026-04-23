import { createFileRoute, Link } from "@tanstack/react-router";
import { applications, getModuleLabel } from "@/data/applications";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "EUMETNET ML Training & Workshops" },
      {
        name: "description",
        content: "Discover training materials, tutorials, and workshops for machine learning across EUMETNET.",
      },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  const trainingApps = applications.filter((a) =>
    a.domains.includes("training")
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            EUMETNET
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Training & Workshops
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A collection of training materials, tutorials, and in-person workshops to 
            advance machine learning integration in weather and climate.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {trainingApps.length === 0 ? (
          <div className="text-center text-muted-foreground py-12 border rounded-lg bg-card/50 border-dashed">
            No training materials currently listed.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingApps.map((app) => (
              <Link
                key={app.id}
                to="/apps/$appId"
                params={{ appId: app.id }}
                className="group focus:outline-none"
              >
                <Card className="overflow-hidden transition-shadow hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={app.image}
                      alt={app.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 flex flex-col gap-1">
                      {app.organization_modules?.map(modId => (
                        <Badge key={modId} variant="secondary" className="backdrop-blur-sm bg-white/80">
                          {getModuleLabel(modId)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-lg font-semibold leading-tight text-foreground">
                      {app.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{app.short}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {app.domains.slice(0, 3).map((d) => (
                        <Badge key={d} variant="outline" className="text-xs">
                          {d.replace(/_/g, " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          More updates and materials coming soon.
        </div>
      </footer>
    </div>
  );
}
