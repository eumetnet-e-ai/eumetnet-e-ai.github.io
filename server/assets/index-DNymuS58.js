import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { a as applications, b as getModuleLabel, c as categoriesData } from "./router-pFy9gM0p.js";
import { w as workingGroups } from "./working-groups-CaNvc9bo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { C as Card } from "./card-QXTfxIXD.js";
import { B as Button } from "./button-TjZkfKyC.js";
import "lucide-react";
import "js-yaml";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
const MODULE_FILTERS = [{
  value: "all",
  label: "All organization modules"
}, ...categoriesData.map((m) => ({
  value: m.id,
  label: m.title
}))];
function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [domain, setDomain] = useState("all");
  const allDomains = useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    applications.forEach((a) => a.domains.forEach((d) => s.add(d)));
    return Array.from(s).sort();
  }, []);
  const filtered = applications.filter((a) => (filter === "all" || a.organization_modules?.includes(filter)) && (domain === "all" || a.domains.includes(domain)));
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-widest text-muted-foreground", children: "EUMETNET" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl", children: "Machine Learning in Weather & Climate" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "A curated gallery of machine learning applications developed and operated across the EUMETNET community — from observation quality control to forecast post-processing." })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-6xl px-6 py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: MODULE_FILTERS.map((p) => /* @__PURE__ */ jsx(Button, { size: "sm", variant: filter === p.value ? "default" : "outline", onClick: () => setFilter(p.value), children: p.label }, p.value)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "domain", className: "text-sm text-muted-foreground", children: "Domain:" }),
          /* @__PURE__ */ jsxs("select", { id: "domain", value: domain, onChange: (e) => setDomain(e.target.value), className: "rounded-md border border-input bg-background px-3 py-1.5 text-sm", children: [
            /* @__PURE__ */ jsx("option", { value: "all", children: "All" }),
            allDomains.map((d) => /* @__PURE__ */ jsx("option", { value: d, children: d.replace(/_/g, " ") }, d))
          ] })
        ] })
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsx("p", { className: "py-20 text-center text-muted-foreground", children: "No applications match the current filters." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((app) => /* @__PURE__ */ jsx("div", { className: "group relative h-full", children: /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden transition-shadow hover:shadow-lg focus-within:ring-2 focus-within:ring-ring h-full flex flex-col relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsx("img", { src: app.image, alt: app.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" }),
          /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-3 flex flex-col gap-1 z-10", children: app.organization_modules?.map((modId) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "backdrop-blur-sm bg-white/80", children: getModuleLabel(modId) }, modId)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-5 relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-2 mb-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold leading-tight text-foreground", children: /* @__PURE__ */ jsx(Link, { to: "/apps/$appId", params: {
              appId: app.id
            }, className: "focus:outline-none before:absolute before:inset-0 before:z-0", children: app.title }) }),
            app.working_groups && app.working_groups.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex gap-1 flex-wrap justify-end shrink-0 relative z-10", children: app.working_groups.map((wgId) => {
              const wg = workingGroups.find((w) => w.id === wgId);
              if (!wg) return null;
              return /* @__PURE__ */ jsx(Link, { to: "/working-groups", hash: wgId, className: "block", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-[10px] bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer border-transparent shadow-sm px-1.5 py-0", title: wg.name, children: [
                wg.emoji && /* @__PURE__ */ jsx("span", { className: "mr-1", children: wg.emoji }),
                wgId.toUpperCase().replace("-", "")
              ] }) }, wgId);
            }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "flex-1 text-sm text-muted-foreground relative z-10", children: app.short }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-1.5 relative z-10", children: app.domains.slice(0, 3).map((d) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: d.replace(/_/g, " ") }, d)) })
        ] })
      ] }) }, app.id)) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "mt-16 border-t bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground", children: [
      "Add new entries by editing",
      " ",
      /* @__PURE__ */ jsx("code", { className: "rounded bg-muted px-1.5 py-0.5 text-xs", children: "src/data/applications.yaml" }),
      "."
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
