import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation } from "@tanstack/react-router";
import { w as workingGroups } from "./working-groups-CaNvc9bo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-QXTfxIXD.js";
import { useState, useEffect } from "react";
import { ExternalLink, MessageSquare, Github, Mail, Globe } from "lucide-react";
import ReactMarkdown from "react-markdown";
import "js-yaml";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
function WorkingGroupsPage() {
  const [selectedId, setSelectedId] = useState(workingGroups[0]?.id || null);
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash ? location.hash.replace("#", "") : "";
    if (hash && workingGroups.some((wg) => wg.id === hash)) {
      setSelectedId(hash);
    }
  }, [location.hash]);
  const selectedWg = workingGroups.find((wg) => wg.id === selectedId);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-widest text-muted-foreground", children: "EUMETNET" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl", children: "Machine Learning Working Groups" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "Collaborative groups focusing on various aspects of AI/ML implementation, standardization, and application in weather and climate." })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-6xl px-6 py-10", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10", children: workingGroups.map((wg) => {
        const isSelected = selectedId === wg.id;
        return /* @__PURE__ */ jsx("button", { onClick: () => setSelectedId(wg.id), className: `flex flex-col items-start p-3 rounded-lg border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "bg-primary text-primary-foreground border-primary shadow-md" : "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"}`, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
          wg.emoji && /* @__PURE__ */ jsx("span", { className: "text-xl", children: wg.emoji }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold leading-tight line-clamp-2", children: wg.name })
        ] }) }, wg.id);
      }) }),
      selectedWg && /* @__PURE__ */ jsxs(Card, { className: "flex flex-col border-primary/20 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "bg-muted/30 border-b", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl leading-tight", children: selectedWg.name }),
          selectedWg.joint_programme && /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
            "Jointly with ",
            selectedWg.joint_programme
          ] }) }),
          selectedWg.description && /* @__PURE__ */ jsx("div", { className: "mt-6 prose prose-sm sm:prose-base dark:prose-invert prose-p:leading-relaxed prose-a:text-primary max-w-none text-foreground/90", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: selectedWg.description }) })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          selectedWg.resources && Object.keys(selectedWg.resources).length > 0 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3", children: "Resources" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: Object.entries(selectedWg.resources).map(([label, url]) => {
              if (!url) return null;
              let Icon = ExternalLink;
              let iconBg = "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400";
              let subLabel = "External resource";
              if (label.toLowerCase().includes("slack") || label.toLowerCase().includes("chat")) {
                Icon = MessageSquare;
                iconBg = "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
                subLabel = "Join the conversation";
              } else if (label.toLowerCase().includes("github")) {
                Icon = Github;
                iconBg = "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300";
                subLabel = "Source code & issues";
              } else if (label.toLowerCase().includes("mail")) {
                Icon = Mail;
                iconBg = "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400";
                subLabel = "Mailing List";
              } else if (label.toLowerCase().includes("website")) {
                Icon = Globe;
                iconBg = "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
              }
              return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "group flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: `p-1.5 rounded-md mt-0.5 ${iconBg}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium group-hover:text-primary transition-colors break-all", children: label.replace("mailto:", "") }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground line-clamp-1", children: subLabel })
                ] })
              ] }) }, label);
            }) })
          ] }),
          (selectedWg.facilitators || selectedWg.contacts) && /* @__PURE__ */ jsxs("div", { children: [
            selectedWg.facilitators && selectedWg.facilitators.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3", children: "Facilitators" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: selectedWg.facilitators.map((f, i) => /* @__PURE__ */ jsxs("a", { href: `mailto:${f.email}`, className: "text-base text-primary hover:underline", children: [
                f.name,
                " ",
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
                  "(",
                  f.email,
                  ")"
                ] })
              ] }, i)) })
            ] }),
            selectedWg.contacts && selectedWg.contacts.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3", children: "Contacts" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: selectedWg.contacts.map((c, i) => /* @__PURE__ */ jsxs("a", { href: `mailto:${c.email}`, className: "text-base text-primary hover:underline", children: [
                c.name,
                " ",
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
                  "(",
                  c.email,
                  ")"
                ] })
              ] }, i)) })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "mt-16 border-t bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground", children: [
      "Add new entries by editing",
      " ",
      /* @__PURE__ */ jsx("code", { className: "rounded bg-muted px-1.5 py-0.5 text-xs", children: "src/data/working-groups.yaml" }),
      "."
    ] }) })
  ] });
}
export {
  WorkingGroupsPage as component
};
