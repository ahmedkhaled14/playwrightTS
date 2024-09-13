import { expect, Locator, Page } from "@playwright/test";

export class CartPage {

    readonly page: Page;
    readonly cartPageTitle: Locator;
    readonly checkoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartPageTitle = page.locator('span[data-test="title"]');
        this.checkoutBtn = page.locator('#checkout');
    }


    async expcetedToNavigateToCartPageSuccessfully(cartPageTitle: string) {
        await expect(this.cartPageTitle).toHaveText(cartPageTitle);
    }


    async clickOnCheckoutButton() {
        await this.checkoutBtn.click();
    }

}