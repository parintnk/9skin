import { test, expect } from "@playwright/test";

test.describe("S12 – LINE Customer Reviews", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/example1");
    await page.waitForLoadState("networkidle");
  });

  test("heading and subtitle are visible", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "官方line 顧客好評分享" });
    await expect(heading).toBeVisible();

    const subtitle = page.getByText("Official Line Customer Review Sharing");
    await expect(subtitle).toBeVisible();
  });

  test("all 16 review images are present", async ({ page }) => {
    // 12 in mobile layout + 12 in desktop layout = 24 total in DOM
    const imgs = page.locator('img[alt^="顧客好評"]');
    await expect(imgs).toHaveCount(24);

    // Desktop container has exactly 12 absolute-positioned cards
    await page.setViewportSize({ width: 1280, height: 900 });
    const section = page.locator("section").filter({ hasText: "官方line 顧客好評分享" });
    const desktopImgs = section.locator(".hidden.sm\\:block img");
    await expect(desktopImgs).toHaveCount(12);
  });

  test("desktop: cards are scattered (absolute positioned) across the section", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });

    // Scroll section into view
    const section = page.locator("section").filter({ hasText: "官方line 顧客好評分享" });
    await section.scrollIntoViewIfNeeded();

    // Verify container has relative positioning and fixed height
    const container = section.locator(".hidden.sm\\:block");
    await expect(container).toBeVisible();

    // Verify at least the first 4 cards are absolutely positioned with different top values
    const cards = container.locator(".absolute");
    await expect(cards).toHaveCount(12);

    // Check that cards have varied top offsets (scattered layout)
    const tops = await cards.evaluateAll((els) =>
      els.map((el) => parseInt((el as HTMLElement).style.top || "0"))
    );

    const uniqueTops = new Set(tops);
    // At least 4 distinct top values (4 rows)
    expect(uniqueTops.size).toBeGreaterThanOrEqual(4);
  });

  test("clicking a card opens the lightbox", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    const section = page.locator("section").filter({ hasText: "官方line 顧客好評分享" });
    await section.scrollIntoViewIfNeeded();

    const firstCard = section.locator(".absolute").first();
    await firstCard.click();

    // Lightbox overlay should appear
    const lightbox = page.locator(".fixed.inset-0.z-50");
    await expect(lightbox).toBeVisible();

    // Close lightbox
    await lightbox.click();
    await expect(lightbox).toBeHidden();
  });

  test("visual snapshot of S12 section", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    const section = page.locator("section").filter({ hasText: "官方line 顧客好評分享" });
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600); // let images settle

    await expect(section).toHaveScreenshot("s12-section.png", {
      maxDiffPixelRatio: 0.05,
    });
  });
});
