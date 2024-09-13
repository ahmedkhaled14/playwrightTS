import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {

    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;
    readonly loginError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.loginError = page.locator('h3[data-test="error"]');
    }


    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async expectloginTofail() {
        await expect(this.loginError).toContainText('Epic sadface: Username and password do not match any user in this service');
    }

}