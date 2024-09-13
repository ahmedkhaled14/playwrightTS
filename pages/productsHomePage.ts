import { expect, Locator, Page } from "@playwright/test";

export class ProductsHomePage {

    readonly page: Page;
    readonly productsTitleTxt: Locator;
    readonly addToCartBtn: Locator;
    readonly removeBtn: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartBadgeLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productsTitleTxt = page.locator('span[data-test="title"]');
        this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.removeBtn = page.locator('#remove-sauce-labs-bike-light');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.shoppingCartBadgeLink = page.locator('.shopping_cart_link');
    }

    async expectedUserToNavigateToProductsPageSuccessfully(productsPageTitle: string) {
        await expect(this.productsTitleTxt).toContainText(productsPageTitle);
    }


    async clickOnAddToCartButton() {
        await this.addToCartBtn.click();
    }

    async expectedButtonToHaveRemovetext(removeButtonText: string) {
        await expect(this.removeBtn).toHaveText(removeButtonText);
    }

    async expectedShoppingCartBadgeToAddOneNum() {
        await expect(this.shoppingCartBadge).toContainText('1');
    }

    async clickOnShoppingCartBadgeLink() {
        await this.shoppingCartBadgeLink.click();
    }

}