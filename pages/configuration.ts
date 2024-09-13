import { Page } from "@playwright/test";

export class Configuration {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }


    async navigateToBaseURL(url: string) {
        await this.page.goto(url);
    }


    async closeBrowser() {
        await this.page.close();
    }
}