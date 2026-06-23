import{test,expect} from '@playwright/test';

test('newtc', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
})