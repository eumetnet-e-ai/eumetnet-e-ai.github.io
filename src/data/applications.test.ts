import { describe, it, expect } from "vitest";
import { applications, getApplication } from "./applications";

describe("Applications Data Logic", () => {
  it("should parse the applications yaml into a list of applications", () => {
    expect(Array.isArray(applications)).toBe(true);
    expect(applications.length).toBeGreaterThan(0);

    const firstApp = applications[0];
    expect(firstApp).toHaveProperty("id");
    expect(firstApp).toHaveProperty("title");
    expect(firstApp).toHaveProperty("description");
    expect(firstApp).toHaveProperty("organization_modules");
  });

  it("should get a specific application by id", () => {
    // Look up an ID that actually exists by just grabbing the first one
    const firstApp = applications[0];
    const foundApp = getApplication(firstApp.id);

    expect(foundApp).toBeDefined();
    expect(foundApp?.id).toEqual(firstApp.id);
    expect(foundApp?.title).toEqual(firstApp.title);
  });

  it("should return undefined for a non-existent application", () => {
    const notFound = getApplication("this-id-does-not-exist");
    expect(notFound).toBeUndefined();
  });

  it("should have fallbacks or resolved URLs for images", () => {
    applications.forEach((app) => {
      expect(app.image).toBeDefined();
      expect(typeof app.image).toBe("string");
      expect(app.image.length).toBeGreaterThan(0);
    });
  });
});
