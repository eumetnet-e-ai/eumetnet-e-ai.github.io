import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { getApplication, getModuleLabel, type Application } from "@/data/applications";
import { workingGroups } from "@/data/working-groups";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/apps/$appId")({
  loader: ({ params }): { app: Application } => {
    const app = getApplication(params.appId);
    if (!app) throw notFound();
    return { app };
  },
  head: ({ loaderData }) => {
    const app = loaderData?.app;
    if (!app) return { meta: [{ title: "Application not found" }] };
    return {
      meta: [
        { title: `${app.title} — EUMETNET ML Gallery` },
        { name: "description", content: app.short },
        { property: "og:title", content: app.title },
        { property: "og:description", content: app.short },
        { property: "og:image", content: app.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: app.image },
      ],
    };
  },
  component: AppDetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold">Application not found</h1>
        <p className="mt-2 text-muted-foreground">This entry doesn't exist in the gallery.</p>
        <Link to="/" className="mt-6 inline-block">
          <Button>Back to gallery</Button>
        </Link>
      </div>
    </div>
  ),
});

function AppDetailPage() {
  const { app } = Route.useLoaderData() as { app: Application };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-72 w-full overflow-hidden bg-muted sm:h-96">
        <img src={app.image} alt={app.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 p-6">
          <Link to="/">
            <Button variant="secondary" size="sm" className="backdrop-blur-sm">
              <ArrowLeft className="mr-1" />
              Gallery
            </Button>
          </Link>
        </div>
      </div>

      <main className="mx-auto -mt-20 max-w-4xl px-6 pb-16">
        <div className="rounded-xl border bg-card p-6 shadow-lg sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {app.organization_modules?.map((modId) => (
              <Badge key={modId}>{getModuleLabel(modId)}</Badge>
            ))}
            {app.eumetnet_member && (
              <Badge variant="secondary" className="gap-1">
                <Star className="h-3 w-3" />
                EUMETNET member
              </Badge>
            )}
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {app.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{app.organization}</p>
          <p className="mt-6 text-base leading-relaxed text-foreground whitespace-pre-wrap">
            {app.description}
          </p>

          {app.working_groups && app.working_groups.length > 0 && (
            <section className="mt-8 bg-muted/40 p-4 rounded-lg border border-border">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                E-AI Working Groups
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {app.working_groups.map((wgId) => {
                  const wg = workingGroups.find((w) => w.id === wgId);
                  if (!wg) return null;
                  return (
                    <Link key={wgId} to="/working-groups" hash={wgId} className="group">
                      <Badge
                        variant="secondary"
                        className="bg-slate-800 text-white hover:bg-slate-700 transition-colors py-1 px-2.5 text-sm shadow-sm cursor-pointer border-transparent"
                      >
                        {wg.emoji && <span className="mr-1.5">{wg.emoji}</span>}
                        <span className="font-bold mr-1">
                          {wgId.toUpperCase().replace("-", "")}
                        </span>
                        <span className="font-normal opacity-90">
                          {wg.name.replace(/^WG \d+ |^ATS /, "")}
                        </span>
                      </Badge>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          <section className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Application domains
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {app.domains.map((d) => (
                <Badge key={d} variant="outline">
                  {d.replace(/_/g, " ")}
                </Badge>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Built on
            </h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {app.packages.map((pkg) => {
                const inner = (
                  <Card
                    className={`flex items-center justify-between gap-2 p-3 transition-colors ${
                      pkg.maintained_by_eumetnet
                        ? "border-primary/40 bg-primary/5"
                        : "hover:bg-accent"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-sm font-medium text-foreground">
                        {pkg.name}
                      </code>
                      {pkg.maintained_by_eumetnet && (
                        <Badge className="gap-1" variant="default">
                          <Star className="h-3 w-3" />
                          EUMETNET
                        </Badge>
                      )}
                    </div>
                    {pkg.url && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                  </Card>
                );
                return pkg.url ? (
                  <a
                    key={pkg.name}
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={pkg.name}>{inner}</div>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Packages highlighted with the EUMETNET badge are maintained by an EUMETNET member
              organization.
            </p>
          </section>

          {app.links && app.links.length > 0 && (
            <section className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Links
              </h2>
              <ul className="mt-3 space-y-1.5">
                {app.links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      {l.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
