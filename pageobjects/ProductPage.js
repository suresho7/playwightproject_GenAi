const BasePage = require('./BasePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.productTitle = page.locator('.name');
    this.productPrice = page.locator('.price-container');
    this.productDescription = page.locator('#more-information');
    this.addToCartButton = page.locator('a', { hasText: 'Add to cart' });
    this.cartLink = page.locator('#cartur');
  }

  async getTitle() {
    return this.productTitle.textContent();
  }

  async getPrice() {
    const priceText = await this.productPrice.textContent();
    return priceText.replace(/[^0-9]/g, '');
  }

  async addToCart() {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => dialog.accept()),
      this.addToCartButton.click(),
    ]);
    await this.page.waitForLoadState('networkidle');
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = ProductPage;
