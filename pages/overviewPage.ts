import { expect, Locator, Page } from "@playwright/test";


export class OverviewPage {

    readonly page: Page;
    readonly overviewPageTitleTxt: Locator;
    readonly finishBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.overviewPageTitleTxt = page.locator('span[data-test="title"]');
        this.finishBtn = page.locator('#finish');
    }

    async expcetedToNavigateToOverviewPageSuccessfully(overviewPageTitle: string) {
        await expect(this.overviewPageTitleTxt).toHaveText(overviewPageTitle);
    }

    async clickOnFinishButton() {
        await this.finishBtn.click();
    }
    
}