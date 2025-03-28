import { test, expect } from "@playwright/test";

test("TS01_homepage_header", async({page}) => {
  await page.goto('https://test.rezervacekluziste.cz/')
    await expect(page.locator(".web-title-text"))
      .toContainText("Sportoviště Líbeznice");
    await expect(page.locator("#logo img"))
      .toBeVisible();
    await expect(page.locator('//a[contains(@href, "/provozni-rad")]'))
      .toBeVisible();
    
      const dropDownMenu = page.locator("#menu");
      await expect(dropDownMenu).toContainText("Kontakt");
      await expect(dropDownMenu).toContainText("Přihlásit");
      await expect(dropDownMenu).toContainText("Registrova")
})
test("TS_02_homepage_main", async({page}) =>{
  await page.goto("https://test.rezervacekluziste.cz/");
  const frame = await page.frameLocator("//iframe[@title='YouTube video player']");
  await frame.locator('//button[@class="ytp-large-play-button ytp-button ytp-large-play-button-red-bg"]').click()
});

test("TS_03_Footer", async({page}) =>{
  await page.goto("https://test.rezervacekluziste.cz/");
  await page.locator('//a[@class="link"][1]').click();
  });
