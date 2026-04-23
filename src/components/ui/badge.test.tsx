import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge Component", () => {
  it("renders children correctly", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies the default variant classes", () => {
    render(<Badge data-testid="badge-default">Default Badge</Badge>);
    const badge = screen.getByTestId("badge-default");

    // Check for some default variant classes
    expect(badge).toHaveClass("bg-primary");
    expect(badge).toHaveClass("text-primary-foreground");
  });

  it("applies secondary variant classes when provided", () => {
    render(
      <Badge variant="secondary" data-testid="badge-secondary">
        Secondary Badge
      </Badge>,
    );
    const badge = screen.getByTestId("badge-secondary");

    expect(badge).toHaveClass("bg-secondary");
    expect(badge).toHaveClass("text-secondary-foreground");
  });

  it("accepts additional custom classNames", () => {
    render(
      <Badge className="custom-class" data-testid="badge-custom">
        Custom Badge
      </Badge>,
    );
    const badge = screen.getByTestId("badge-custom");

    expect(badge).toHaveClass("custom-class");
    // Still retains base classes
    expect(badge).toHaveClass("inline-flex");
  });
});
