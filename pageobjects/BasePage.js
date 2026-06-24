class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path, { waitUntil: 'load', timeout: 60000 });
  }
}

module.exports = BasePage;
