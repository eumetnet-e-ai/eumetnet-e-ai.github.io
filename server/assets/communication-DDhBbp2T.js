import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-QXTfxIXD.js";
import { B as Button } from "./button-TjZkfKyC.js";
import { Mail, Globe, MessageSquare, Github } from "lucide-react";
import { w as workingGroups } from "./working-groups-CaNvc9bo.js";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "js-yaml";
function CommunicationPage() {
  const wgsWithComms = workingGroups.filter((wg) => wg.resources && Object.keys(wg.resources).length > 0);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-widest text-muted-foreground", children: "EUMETNET" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl", children: "Communication" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "Connect with the E-AI community, join discussions, and stay informed about upcoming meetings and training courses." })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-6xl px-6 py-10 space-y-12", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight mb-6", children: "General E-AI Community" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 max-w-3xl", children: /* @__PURE__ */ jsxs(Card, { className: "border-primary/20 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "bg-muted/30 border-b py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-primary/10 rounded-md text-primary", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl text-primary", children: "Programme Coordination" })
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "py-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 mb-5", children: "Contact the E-AI Programme Coordination to be informed about upcoming meetings, training courses, and general announcements." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between bg-muted/40 p-4 rounded-md gap-4 border border-muted", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: "Marek Jacob (DWD)" }),
                /* @__PURE__ */ jsx("a", { href: "mailto:marek.jacob@eumetnet.eu", className: "text-sm text-primary hover:underline", children: "marek.jacob[at]eumetnet.eu" })
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "outline", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "mailto:marek.jacob@eumetnet.eu?subject=E-AI%20Mailing%20List%20Subscription", children: [
                /* @__PURE__ */ jsx(Mail, { className: "mr-2 h-4 w-4" }),
                "Send Email"
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      wgsWithComms.length > 0 && /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight mb-6", children: "Working Group Channels" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: wgsWithComms.map((wg) => /* @__PURE__ */ jsxs(Card, { className: "flex flex-col shadow-sm border-muted", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "bg-muted/30 border-b p-0", children: /* @__PURE__ */ jsxs(Link, { to: "/working-groups", hash: wg.id, className: "block p-6 pb-4 hover:bg-muted/50 transition-colors group", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: wg.emoji }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary/80 transition-colors", children: wg.id.replace("-", " ") })
            ] }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-lg leading-tight group-hover:text-primary transition-colors", children: wg.name })
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "pt-4 flex-1", children: /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: wg.resources && Object.entries(wg.resources).map(([label, url]) => {
            if (!url) return null;
            let Icon = Globe;
            let iconBg = "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";
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
            }
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "group flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: `p-1.5 rounded-md mt-0.5 ${iconBg}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium group-hover:text-primary transition-colors break-all", children: label.replace("mailto:", "") }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground line-clamp-1", children: subLabel })
              ] })
            ] }) }, label);
          }) }) })
        ] }, wg.id)) })
      ] })
    ] })
  ] });
}
export {
  CommunicationPage as component
};
