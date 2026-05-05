import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { trainingData } from "@/data/training";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Presentation, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "EUMETNET ML Training & Workshops" },
      {
        name: "description",
        content:
          "Discover training materials, tutorials, and workshops for machine learning across EUMETNET.",
      },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrainingData = trainingData.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
      course.type.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            EUMETNET
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Training & Workshops
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A collection of training materials, tutorials, and in-person workshops to advance
            machine learning integration in weather and climate.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search trainings, tags, or descriptions..."
            className="pl-9 bg-card"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredTrainingData.length === 0 ? (
          <div className="text-center text-muted-foreground py-12 border rounded-lg bg-card/50 border-dashed">
            {searchQuery
              ? "No matching training materials found."
              : "No training materials currently listed."}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredTrainingData.map((course) => (
              <Card
                key={course.id}
                className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md border-primary/20"
              >
                <CardHeader className="bg-muted/30 border-b pb-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {course.type}
                      </Badge>
                      <CardTitle className="text-xl leading-tight text-primary">
                        {course.title}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mt-1">
                    {course.date}
                  </div>
                </CardHeader>
                <CardContent className="pt-5 flex-1 flex flex-col">
                  {/* Render course.description as Markdown (supports bullet lists) */}
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // map elements to styled components
                      p: ({ node, ...props }) => (
                        <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-1" {...props} />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc ml-6 mb-4 text-sm text-foreground/80" {...props} />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol className="list-decimal ml-6 mb-4 text-sm text-foreground/80" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="mb-1" {...props} />
                      ),
                      a: ({ node, ...props }) => (
                        <a className="text-primary underline" {...props} />
                      ),
                    }}
                  >
                    {course.description}
                  </ReactMarkdown>

                  {course.tags && course.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {course.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-background text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t bg-muted/10 p-4 flex flex-wrap gap-3">
                  {course.githubLink && (
                    <Button variant="outline" size="sm" asChild className="h-8">
                      <a href={course.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {course.slidesLink && (
                    <Button variant="outline" size="sm" asChild className="h-8">
                      <a href={course.slidesLink} target="_blank" rel="noopener noreferrer">
                        <Presentation className="mr-2 h-4 w-4" />
                        Slides
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          Add new entries by editing{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">src/data/training.yaml</code>.
        </div>
      </footer>
    </div>
  );
}