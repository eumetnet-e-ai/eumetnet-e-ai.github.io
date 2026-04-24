import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import yaml from "js-yaml";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from "./card-QXTfxIXD.js";
import { Search, Github, Presentation } from "lucide-react";
import { c as cn } from "./utils-H80jjgLf.js";
import { B as Button } from "./button-TjZkfKyC.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
const yamlSource = 'training:\n  - id: e-ai-ml2\n    title: "E-AI Intensive Course on AI/ML"\n    date: "January 2026"\n    description: >\n      A structured, hands-on introduction to modern AI/ML methods with a strong focus on weather and climate applications. Includes operational perspectives, reproducibility, and best practices for building reliable ML workflows. Covers Python, PyTorch, LLMs, Diffusion, Agents, MLOps, Anemoi, and AIFS/AICON.\n    githubLink: "https://github.com/eumetnet-e-ai/e-ai_ml2"\n    slidesLink: "https://raw.githubusercontent.com/eumetnet-e-ai/e-ai_ml2/main/course/e-ai_ml2.pdf"\n    type: "Course"\n    tags: ["ML", "Deep Learning", "LLMs", "MLOps", "Anemoi"]\n\n  - id: eai-zarr-workshop\n    title: "Introduction to Zarr Workshop"\n    date: "Spring 2026"\n    description: >\n      Materials for the E-AI Spring Workshop 2026 Zarr Hands-On Session. Includes practical Jupyter notebooks and environment setup guides for working efficiently with cloud-optimized Zarr data formats in Python.\n    githubLink: "https://github.com/annaerdmann/eai-zarr-workshop"\n    type: "Workshop"\n    tags: ["Zarr", "Data Formats", "Python", "Cloud"]\n';
const parsed = yaml.load(yamlSource);
const trainingData = parsed.training;
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
function TrainingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTrainingData = trainingData.filter((course) => {
    const query = searchQuery.toLowerCase();
    return course.title.toLowerCase().includes(query) || course.description.toLowerCase().includes(query) || course.tags?.some((tag) => tag.toLowerCase().includes(query)) || course.type.toLowerCase().includes(query);
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-widest text-muted-foreground", children: "EUMETNET" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl", children: "Training & Workshops" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "A collection of training materials, tutorials, and in-person workshops to advance machine learning integration in weather and climate." })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-6xl px-6 py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 relative max-w-md", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Input, { type: "search", placeholder: "Search trainings, tags, or descriptions...", className: "pl-9 bg-card", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) })
      ] }),
      filteredTrainingData.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center text-muted-foreground py-12 border rounded-lg bg-card/50 border-dashed", children: searchQuery ? "No matching training materials found." : "No training materials currently listed." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: filteredTrainingData.map((course) => /* @__PURE__ */ jsxs(Card, { className: "h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md border-primary/20", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "bg-muted/30 border-b pb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mb-2", children: course.type }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl leading-tight text-primary", children: course.title })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-muted-foreground mt-1", children: course.date })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "pt-5 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 leading-relaxed mb-6 flex-1", children: course.description }),
          course.tags && course.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: course.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-background text-xs font-normal", children: tag }, tag)) })
        ] }),
        /* @__PURE__ */ jsxs(CardFooter, { className: "border-t bg-muted/10 p-4 flex flex-wrap gap-3", children: [
          course.githubLink && /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", asChild: true, className: "h-8", children: /* @__PURE__ */ jsxs("a", { href: course.githubLink, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(Github, { className: "mr-2 h-4 w-4" }),
            "GitHub"
          ] }) }),
          course.slidesLink && /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", asChild: true, className: "h-8", children: /* @__PURE__ */ jsxs("a", { href: course.slidesLink, target: "_blank", rel: "noopener noreferrer", children: [
            /* @__PURE__ */ jsx(Presentation, { className: "mr-2 h-4 w-4" }),
            "Slides"
          ] }) })
        ] })
      ] }, course.id)) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "mt-16 border-t bg-card", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground", children: [
      "Add new entries by editing",
      " ",
      /* @__PURE__ */ jsx("code", { className: "rounded bg-muted px-1.5 py-0.5 text-xs", children: "src/data/training.yaml" }),
      "."
    ] }) })
  ] });
}
export {
  TrainingPage as component
};
