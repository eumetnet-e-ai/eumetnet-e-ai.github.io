import { test, expect } from "@playwright/test";

test("homepage has correct title and navigation, with no console errors", async ({ page }) => {
  const consoleMessages: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" || msg.type() === "warning") {
      consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
    }
  });

  const pageErrors: Error[] = [];
  page.on("pageerror", (err) => {
    pageErrors.push(err);
  });

  await page.goto("/");

  // Verify the page title
  await expect(page).toHaveTitle(/EUMETNET ML Applications Gallery/);

  // Verify the top navigation exists
  const nav = page.locator("nav");
  await expect(nav).toBeVisible();

  // Check that the showcase link is present
  const showcaseLink = page.getByRole("link", { name: "Showcase" });
  await expect(showcaseLink).toBeVisible();

  // Check that at least one application card is rendered
  // Note: the a tag is now inside the h2 instead of wrapping the card
  const cards = page.locator(".grid h2 > a");
  await expect(cards.first()).toBeVisible();

  // Give a small amount of time for any hydration errors to surface
  await page.waitForTimeout(500);

  // Fail if there are console errors or warnings
  expect(
    pageErrors.length,
    `Page errors found: ${pageErrors.map((e) => e.message).join("\n")}`,
  ).toBe(0);
  expect(consoleMessages.length, `Console messages found: ${consoleMessages.join("\n")}`).toBe(0);
});
