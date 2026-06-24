const BasePage = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = page.locator('tr.success');
    this.placeOrderButton = page.locator('button', { hasText: 'Place Order' });
    this.totalAmount = page.locator('#totalp');
  }

  async gotoCart() {
    await this.goto('https://www.demoblaze.com/cart.html');
  }

  async getCartItemNames() {
    return this.cartItems.locator('td:nth-child(2)').allTextContents();
  }

  async getCartTotal() {
    return this.totalAmount.textContent();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}

module.exports = CartPage;
