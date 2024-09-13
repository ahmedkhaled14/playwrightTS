import { test } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ProductsHomePage } from "../../pages/productsHomePage";
import loginPagetestData from "../../testData/loginPageTestData.json"
import productsPageTestData from "../../testData/productsPageTestData.json"
import { Configuration } from "../../pages/configuration";


let allure = require("allure-js-commons"); 
let configuration: Configuration; 
let loginPage: LoginPage;
let productsPage: ProductsHomePage;

test.beforeEach('open the browser', async ({ page, baseURL }) => {
    configuration = new Configuration(page);
    loginPage = new LoginPage(page);
    productsPage = new ProductsHomePage(page);
    await test.step('When I navigate to Swag Labs login page', async () => {
        await configuration.navigateToBaseURL(baseURL);
    })

});

test.afterEach('close the browser', async () => {
    await configuration.closeBrowser();
});


test.describe('Validate login functionality', async () => {

    test('login with valid username and valid password', async () => {
        allure.feature('Login Feature');
        allure.description('When I navigate to Swag Labs login page, And login with valid "username" and valid "password" and click on login Button, Then I should navigate to products page successfully and see products title & all products ');

        await test.step('And login with valid "username" and valid "password" and click on login Button', async () => {
            await loginPage.login(loginPagetestData.username, loginPagetestData.password);           
        });

        await test.step('Then I should navigate to products page successfully and see products title & all products', async () => {
            await productsPage.expectedUserToNavigateToProductsPageSuccessfully(productsPageTestData.productsPageTitle);
        });
    });


    test('Validate login with "invalid username" and "invalid password"', async () => {
        allure.feature('Login Feature');
        allure.description('When I navigate to Swag Labs login page, And login with invalid "username" and invalid "password" and click on login Button, Then I should see error message.');

        await test.step('And login with invalid and invalid "password" and click on login Button', async () => {
            await loginPage.login(loginPagetestData.invalidUserName, loginPagetestData.invalidpassword);
        });

        await test.step('Then I should see error message', async () => {
            await loginPage.expectloginTofail();
        });
    });

});