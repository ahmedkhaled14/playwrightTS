import test from "@playwright/test";
import { ProductsHomePage } from "../../pages/productsHomePage";
import { LoginPage } from "../../pages/loginPage";
import { CartPage } from "../../pages/cartPage";
import { InformationPage } from "../../pages/informationPage";
import loginPagetestData from "../../testData/loginPageTestData.json"
import productsPageTestData from "../../testData/productsPageTestData.json"
import cartPageTestData from "../../testData/cartPageTestData.json"
import informationPagetestData from "../../testData/informationPageTestData.json"
import completePageTestData from "../../testData/completePageTestData.json"
import overviewTestData from "../../testData/overviewPageTestData.json"
import { OverviewPage } from "../../pages/overviewPage";
import { CompletePage } from "../../pages/completePage";
import { Configuration } from "../../pages/configuration";

let allure = require("allure-js-commons");
let configuration: Configuration;
let loginPage: LoginPage;
let productsPage: ProductsHomePage;
let cartPage: CartPage;
let informationPage: InformationPage;
let overviewPage: OverviewPage;
let completePage: CompletePage;

test.beforeEach(async ({ page, baseURL }) => {
    configuration = new Configuration(page);
    loginPage = new LoginPage(page);
    productsPage = new ProductsHomePage(page);
    cartPage = new CartPage(page);
    informationPage = new InformationPage(page);
    overviewPage = new OverviewPage(page);
    completePage = new CompletePage(page);

    await test.step('When I navigate to Swag Labs Landing page', async () => {
        await configuration.navigateToBaseURL(baseURL);
    });

});

test.afterEach('close the browser', async () => {
    await configuration.closeBrowser();
});


test('Validate End to End scenario for buy products Feature', async () => {
    allure.feature('Buy products Feature');
    allure.description('When I navigate to Swag Labs login page, And login with valid "username" and valid "password" and click on login Button, And navigate to products page successfully and see products title & all products successfully, And click on Add to cart button for the first product, Then I should see "Remove Button" successfully, And I should see number 1 added to shopping Cart Badge successfully, When I click on shopping cart badge link, Then I should navigate To cart page successfully, When I click On checkout Button,And fill Checkout information, When I click on continue button, Then I should navigate To Checkout Overview page successfully,When I click on finish button, Then I should see Thank for your order Text successfully ');

    await test.step('And login with valid "username" and valid "password" and click on login Button', async () => {
        await loginPage.login(loginPagetestData.username, loginPagetestData.password);
    });

    await test.step('And navigate to products page successfully and see products title & all products successfully', async () => {
        await productsPage.expectedUserToNavigateToProductsPageSuccessfully(productsPageTestData.productsPageTitle);
    });

    await test.step('And click on Add to cart button for the first product', async () => {
        await productsPage.clickOnAddToCartButton();
    });

    await test.step('Then I should see "Remove Button" successfully', async () => {
        await productsPage.expectedButtonToHaveRemovetext(productsPageTestData.removeButtonText);
    });

    await test.step('And I should see number 1 added to shopping Cart Badge successfully', async () => {
        await productsPage.expectedShoppingCartBadgeToAddOneNum();
    });

    await test.step('When I click on shopping cart badge link', async () => {
        await productsPage.clickOnShoppingCartBadgeLink();
    });

    await test.step('Then I should navigate To cart page successfully', async () => {
        await cartPage.expcetedToNavigateToCartPageSuccessfully(cartPageTestData.cartPageTitle);
    });

    await test.step('When I click On checkout Button', async () => {
        await cartPage.clickOnCheckoutButton();
    });

    await test.step('And fill Checkout information', async () => {
        await informationPage.fillcheckoutInformation(informationPagetestData.firstName, informationPagetestData.lastName, informationPagetestData.postalCode);
    });

    await test.step('When I click on continue button', async () => {
        await informationPage.clickOnContinueButton();
    });

    await test.step('Then I should navigate To Checkout Overview page successfully', async () => {
        await overviewPage.expcetedToNavigateToOverviewPageSuccessfully(overviewTestData.overviewPageTitle);
    });

    await test.step('When I click on finish button', async () => {
        await overviewPage.clickOnFinishButton();
    });

    await test.step('Then I should see Thank for your order Text successfully', async () => {
        await completePage.expectedToSeeThankText(completePageTestData.thankText);
    });
});