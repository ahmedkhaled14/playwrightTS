import { defineConfig, devices } from '@playwright/test';

const browserName = process.env.BROWSER || 'chromium';

export default defineConfig({
  testDir: 'tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 2,

  workers: process.env.CI ? 4 : 4,

  reporter: process.env.CI
    ? [['dot'], ['list'], ['html']]
    : [
        ['list'],
        ['json', { outputFile: 'results.json' }],
        ['html', { open: 'always', outputFolder: 'my-report' }],
        ['allure-playwright', { outputFolder: 'allure-results' }],
      ],

  use: {
    launchOptions: {
      args: ['--start-maximized'],
    },
    baseURL: 'https://www.saucedemo.com/',
    trace: 'retain-on-failure',
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: true,
  },

  projects: [
    ...(browserName === 'chromium'
      ? [
          {
            name: 'chromium',
            use: {
              ...devices['Desktop Chrome'],
              viewport: null,
            },
          },
        ]
      : []),
    ...(browserName === 'firefox'
      ? [
          {
            name: 'firefox',
            use: {
              ...devices['Desktop Firefox'],
            },
          },
        ]
      : []),
    ...(browserName === 'webkit'
      ? [
          {
            name: 'webkit',
            use: {
              ...devices['Desktop Safari'],
            },
          },
        ]
      : []),
  ],
});
