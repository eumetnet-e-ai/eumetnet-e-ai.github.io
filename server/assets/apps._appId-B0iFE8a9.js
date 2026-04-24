import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Star, ExternalLink } from "lucide-react";
import { R as Route, b as getModuleLabel } from "./router-pFy9gM0p.js";
import { w as workingGroups } from "./working-groups-CaNvc9bo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { C as Card } from "./card-QXTfxIXD.js";
import { B as Button } from "./button-TjZkfKyC.js";
import "js-yaml";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
function AppDetailPage() {
  const {
    app
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-72 w-full overflow-hidden bg-muted sm:h-96", children: [
      /* @__PURE__ */ jsx("img", { src: app.image, alt: app.title, className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 p-6", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", className: "backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-1" }),
        "Gallery"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "mx-auto -mt-20 max-w-4xl px-6 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border bg-card p-6 shadow-lg sm:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        app.organization_modules?.map((modId) => /* @__PURE__ */ jsx(Badge, { children: getModuleLabel(modId) }, modId)),
        app.eumetnet_member && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-3 w-3" }),
          "EUMETNET member"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl", children: app.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: app.organization }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-foreground whitespace-pre-wrap", children: app.description }),
      app.working_groups && app.working_groups.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-8 bg-muted/40 p-4 rounded-lg border border-border", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "E-AI Working Groups" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: app.working_groups.map((wgId) => {
          const wg = workingGroups.find((w) => w.id === wgId);
          if (!wg) return null;
          return /* @__PURE__ */ jsx(Link, { to: "/working-groups", hash: wgId, className: "group", children: /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-slate-800 text-white hover:bg-slate-700 transition-colors py-1 px-2.5 text-sm shadow-sm cursor-pointer border-transparent", children: [
            wg.emoji && /* @__PURE__ */ jsx("span", { className: "mr-1.5", children: wg.emoji }),
            /* @__PURE__ */ jsx("span", { className: "font-bold mr-1", children: wgId.toUpperCase().replace("-", "") }),
            /* @__PURE__ */ jsx("span", { className: "font-normal opacity-90", children: wg.name.replace(/^WG \d+ |^ATS /, "") })
          ] }) }, wgId);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Application domains" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: app.domains.map((d) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: d.replace(/_/g, " ") }, d)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Built on" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 grid gap-2 sm:grid-cols-2", children: app.packages.map((pkg) => {
          const inner = /* @__PURE__ */ jsxs(Card, { className: `flex items-center justify-between gap-2 p-3 transition-colors ${pkg.maintained_by_eumetnet ? "border-primary/40 bg-primary/5" : "hover:bg-accent"}`, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("code", { className: "font-mono text-sm font-medium text-foreground", children: pkg.name }),
              pkg.maintained_by_eumetnet && /* @__PURE__ */ jsxs(Badge, { className: "gap-1", variant: "default", children: [
                /* @__PURE__ */ jsx(Star, { className: "h-3 w-3" }),
                "EUMETNET"
              ] })
            ] }),
            pkg.url && /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 text-muted-foreground" })
          ] });
          return pkg.url ? /* @__PURE__ */ jsx("a", { href: pkg.url, target: "_blank", rel: "noopener noreferrer", className: "block", children: inner }, pkg.name) : /* @__PURE__ */ jsx("div", { children: inner }, pkg.name);
        }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Packages highlighted with the EUMETNET badge are maintained by an EUMETNET member organization." })
      ] }),
      app.links && app.links.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: "Links" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-1.5", children: app.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: l.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-sm text-primary hover:underline", children: [
          l.label,
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })
        ] }) }, l.url)) })
      ] })
    ] }) })
  ] });
}
export {
  AppDetailPage as component
};
