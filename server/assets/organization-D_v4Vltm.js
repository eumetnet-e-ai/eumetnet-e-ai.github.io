import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { g as getDiagramNode, o as organizationData } from "./router-pFy9gM0p.js";
import "lucide-react";
import "js-yaml";
function OrganizationPage() {
  const workflowsNode = getDiagramNode("workflows");
  const commsNode = getDiagramNode("communication");
  const trainingNode = getDiagramNode("training");
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-0", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16 mt-8 w-full", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl w-full mx-auto leading-tight", children: organizationData.header.title }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: organizationData.pillars.map((pillar) => /* @__PURE__ */ jsxs("div", { className: `${pillar.color} rounded-md border border-gray-300 p-4 shadow-sm flex flex-col`, children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center font-bold text-gray-800 mb-4 bg-white/50 py-2 rounded", children: pillar.title }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 flex-grow", children: pillar.items.map((item) => {
        const cardContent = /* @__PURE__ */ jsxs(Fragment, { children: [
          item.wgBadge && /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10", children: item.wgBadge.label }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-sm text-gray-900", children: item.title }),
          item.subtitle && /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-700 mt-2 font-medium", children: item.subtitle })
        ] });
        const cardClasses = `relative
                      ${item.className || "col-span-1 bg-[#b5d3a5]"}
                      rounded-md p-3 border border-[#9ebd8d] shadow-sm
                      flex flex-col items-center justify-center text-center
                      transition-transform hover:scale-105 cursor-pointer block w-full h-full
                    `;
        if (item.wgBadge) {
          return /* @__PURE__ */ jsx(Link, { to: "/working-groups", hash: item.wgBadge.id, className: cardClasses, title: `View ${item.wgBadge.label} details`, children: cardContent }, item.id);
        }
        return /* @__PURE__ */ jsx("div", { className: cardClasses, children: cardContent }, item.id);
      }) })
    ] }, pillar.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 rounded-md border border-slate-300 p-4 shadow-sm flex flex-col mt-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center font-bold text-gray-800 mb-4 bg-white/50 py-2 rounded", children: "d) Cross-cutting" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow", children: [
        workflowsNode?.wgBadge ? /* @__PURE__ */ jsxs(Link, { to: "/working-groups", hash: workflowsNode.wgBadge.id, className: "bg-white font-bold py-4 px-6 text-center rounded-md shadow-sm border border-slate-300 text-slate-800 text-lg transition-transform hover:scale-105 cursor-pointer relative", title: `View ${workflowsNode.wgBadge.label} details`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10", children: workflowsNode.wgBadge.label }),
          workflowsNode.title
        ] }) : /* @__PURE__ */ jsx("div", { className: "bg-white font-bold py-4 px-6 text-center rounded-md shadow-sm border border-slate-300 text-slate-800 text-lg transition-transform hover:scale-105 cursor-pointer", children: workflowsNode?.title || "Workflows" }),
        /* @__PURE__ */ jsx(Link, { to: "/communication", className: "bg-white font-bold py-4 px-6 text-center rounded-md shadow-sm border border-slate-300 text-slate-800 text-lg transition-transform hover:scale-105 cursor-pointer", title: "View Communication Channels", children: commsNode?.title || "Communication" }),
        /* @__PURE__ */ jsx(Link, { to: "/training", className: "bg-white font-bold py-4 px-6 text-center rounded-md shadow-sm border border-slate-300 text-slate-800 text-lg transition-transform hover:scale-105 cursor-pointer", title: "View Training & Workshops", children: trainingNode?.title || "Training" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white p-8 rounded-lg shadow-sm border border-gray-200 italic", children: /* @__PURE__ */ jsx("p", { children: "The E-AI programme is structured in three modules: a) Data Curation, b) Analysis, Modelling and Post-Processing, and c) Products and Services. By working together on overarching Workflows, AI/ML can be used effectively across the entire value chain while also addressing necessary technical, administrative, and structural requirements. Moreover, the programme offers Communication and Training opportunities to ensure an efficient flow of information on AI/ML developments within and beyond the E-AI programme." }) })
  ] }) });
}
export {
  OrganizationPage as component
};
