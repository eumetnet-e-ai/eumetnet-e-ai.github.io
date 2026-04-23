import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { applications, getModuleLabel } from "@/data/applications";
import { categoriesData } from "@/data/organization";
import { workingGroups } from "@/data/working-groups";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EUMETNET ML Applications Gallery" },
      {
        name: "description",
        content:
          "A gallery of machine learning applications in weather and climate from across the EUMETNET community.",
      },
      { property: "og:title", content: "EUMETNET ML Applications Gallery" },
      {
        property: "og:description",
        content:
          "Browse machine learning applications in weather and climate from EUMETNET members.",
      },
    ],
  }),
  component: GalleryPage,
});

const MODULE_FILTERS: Array<{ value: string | "all"; label: string }> = [
  { value: "all", label: "All organization modules" },
  ...categoriesData.map(m => ({ value: m.id, label: m.title }))
];

function GalleryPage() {
  const [filter, setFilter] = useState<string | "all">("all");
  const [domain, setDomain] = useState<string | "all">("all");

  const allDomains = useMemo(() => {
    const s = new Set<string>();
    applications.forEach((a) => a.domains.forEach((d) => s.add(d)));
    return Array.from(s).sort();
  }, []);

  const filtered = applications.filter(
    (a) =>
      (filter === "all" || a.organization_modules?.includes(filter)) &&
      (domain === "all" || a.domains.includes(domain)),
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            EUMETNET
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Machine Learning in Weather &amp; Climate
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A curated gallery of machine learning applications developed and operated
            across the EUMETNET community — from observation quality control to
            forecast post-processing.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {MODULE_FILTERS.map((p) => (
              <Button
                key={p.value}
                size="sm"
                variant={filter === p.value ? "default" : "outline"}
                onClick={() => setFilter(p.value)}
              >
                {p.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="domain" className="text-sm text-muted-foreground">
              Domain:
            </label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
            >
              <option value="all">All</option>
              {allDomains.map((d) => (
                <option key={d} value={d}>
                  {d.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No applications match the current filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((app) => (
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
                  <div className="flex flex-1 flex-col p-5 relative">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h2 className="text-lg font-semibold leading-tight text-foreground">
                        {app.title}
                      </h2>
                      {app.working_groups && app.working_groups.length > 0 && (
                        <div className="flex gap-1 flex-wrap justify-end shrink-0">
                          {app.working_groups.map(wgId => {
                            const wg = workingGroups.find(w => w.id === wgId);
                            if (!wg) return null;
                            return (
                              <Link
                                key={wgId}
                                to="/working-groups"
                                hash={wgId}
                                className="z-10"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="text-[10px] bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer border-transparent shadow-sm px-1.5 py-0"
                                  title={wg.name}
                                >
                                  {wg.emoji && <span className="mr-1">{wg.emoji}</span>}
                                  {wgId.toUpperCase().replace('-', '')}
                                </Badge>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <p className="flex-1 text-sm text-muted-foreground">{app.short}</p>
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
          Add new entries by editing{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            src/data/applications.yaml
          </code>
          .
        </div>
      </footer>
    </div>
  );
}
