const { test, expect } = require('@playwright/test');
const HomePage = require('../pageobjects/HomePage');
const ProductPage = require('../pageobjects/ProductPage');
const CartPage = require('../pageobjects/CartPage');

test.describe('Demoblaze E2E tests', () => {
  test('should load home page and show categories', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();

    await expect(page.locator('#itemc')).toHaveCount(3);
    await expect(home.productCards.first()).toBeVisible();
  });

  test('should navigate to Laptops category and open a product', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();

    await home.selectCategory('Laptops');
    await expect(home.isProductVisible('Sony vaio i5')).toBeTruthy();

    await home.openProduct('Sony vaio i5');
    const product = new ProductPage(page);
    await expect(product.productTitle).toHaveText('Sony vaio i5');
  });

  test('should add product to cart and verify cart contents', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();

    await home.selectCategory('Laptops');
    await home.openProduct('Sony vaio i5');

    const product = new ProductPage(page);
    await product.addToCart();

    await product.openCart();
    const cart = new CartPage(page);
    await cart.gotoCart();

    await expect(cart.cartItems).toHaveCount(1);
    await expect(cart.cartItems.first().locator('td:nth-child(2)')).toHaveText('Sony vaio i5');
  });
});
