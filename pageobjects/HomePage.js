const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.categoryLinks = page.locator('#itemc');
    this.productCards = page.locator('.card-block');
    this.nextButton = page.locator('#next2');
    this.previousButton = page.locator('#prev2');
    this.cartLink = page.locator('#cartur');
    this.homeLink = page.locator('.navbar-brand');
  }

  async open() {
    await this.goto('https://www.demoblaze.com');
  }

  async selectCategory(categoryName) {
    await this.categoryLinks.filter({ hasText: categoryName }).click();
  }

  async openProduct(productName) {
    await this.productCards.filter({ hasText: productName }).locator('a').first().click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async isProductVisible(productName) {
    return await this.productCards.filter({ hasText: productName }).first().isVisible();
  }

  async gotoNextPage() {
    await this.nextButton.click();
  }

  async gotoPreviousPage() {
    await this.previousButton.click();
  }
}

module.exports = HomePage;
