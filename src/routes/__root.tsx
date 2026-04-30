import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Github } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <nav className="border-b bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex h-14 items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pr-4">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap"
            >
              Showcase
            </Link>
            <Link
              to="/working-groups"
              className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap"
            >
              Working Groups
            </Link>
            <Link
              to="/organization"
              className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap"
            >
              Organization
            </Link>
            <Link
              to="/training"
              className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap"
            >
              Training
            </Link>
            <Link
              to="/communication"
              className="text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap"
            >
              Communication
            </Link>
          </div>
          <div className="flex items-center pl-2 sm:pl-4 border-l">
            <a
              href="https://github.com/eumetnet-e-ai/eumetnet-e-ai.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium whitespace-nowrap"
              title="View source on GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline-block">Contribute</span>
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
