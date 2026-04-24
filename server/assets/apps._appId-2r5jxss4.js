import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./button-TjZkfKyC.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Application not found" }),
  /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "This entry doesn't exist in the gallery." }),
  /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-block", children: /* @__PURE__ */ jsx(Button, { children: "Back to gallery" }) })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
