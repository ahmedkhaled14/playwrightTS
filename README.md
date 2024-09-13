<div align="center">
 <img  src="https://github.com/user-attachments/assets/ab5d50ff-1ffc-4cde-a11c-982edb2387ea" alt="playwright" width="1000" height="250" />

 
# ✨ Microsoft Playwright ✨
</div>

 ###  🌐 **[saucedemo website](https://www.saucedemo.com/)**


 ### 📝 Framework & language:

 * Microsoft Playwright
 
 * Type Script
 
 ### 🎨 Project Design:

 *  Page Object Model design pattern (POM)
 
 *  read all test data from external json files

 *  integrated with allure report

 *  CI/CD pipeline using github actions (create workflows that build and test every pull request)
 
 
#### 🔊 this project included:

#### 📦️ folder for github workflows

#### 📦️ folder for all pages

#### 📦️ folder for all tests

#### 📦️ folder for all test data

 
#### ⚗️ playwright config file
* **[Test configuration file](https://playwright.dev/docs/test-configuration)**

 
 ### 🗃️ Documentation
* **[Microsoft Playwright](https://playwright.dev/docs/intro)**
 
 ### 🚧 Requirements

* **[install Node JS](https://nodejs.org/en/download/package-manager)**
* **[install VS code](https://code.visualstudio.com/download)**
* **[install playwright](https://playwright.dev/docs/getting-started-vscode)**


 ### 🚀 Running Tests 
1. first of all clone the project
2. open a terminal on the project root path
3. Run all tests:
`npx playwright test` for more command line refer to **[playwright Run Command line](https://playwright.dev/docs/test-cli)**

 ### 📈 Generate reports
1. HTML report will open after execute the test cases or run this command `npx playwright show-report`
2. list Report
3. Json Report

![html report](https://github.com/user-attachments/assets/9f90c484-19a0-4762-957e-a49f271581d4)

### 📄 Allure Report:
1. `npm i -D allure-playwright`
2. `allure generate ./allure-results -o ./allure-report --clean`
3. `allure open ./allure-report`

![allure Report](https://github.com/user-attachments/assets/adf51a14-c6b8-4afd-a19a-fb4586bf5116)


