export default class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async login(u_name, u_password) {
    await this.page.waitAndType("#user_login", u_name);
    await this.page.waitAndType("#user_password", u_password);
    await this.page.waitAndClick('input[name="submit"]');
  }
}
