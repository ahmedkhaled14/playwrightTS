import { expect, Locator, Page } from "@playwright/test";

export class CompletePage {
    readonly page: Page;
    readonly thankTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.thankTxt = page.locator('.complete-header');
    }

    async expectedToSeeThankText(thankText: string) {
        await expect(this.thankTxt).toHaveText(thankText);
    }

}