import { MockTrendingEvents } from './mocks/HomePageMock';
import { test, expect } from '@playwright/test';
import { exec } from 'child_process';

let serverProcess: any; // To store the server process reference

test.describe("HomePage", () => {
  
  // Start the server before running the tests
  test.beforeAll(async () => {
    serverProcess = exec('npm run dev', { cwd: './' });

    // Wait for the server to be ready (for example, waiting for a log that indicates readiness)
    await new Promise((resolve, reject) => {
      serverProcess.stdout.on('data', (data: string) => {
        if (data.includes('ready')) {
          resolve(true); // Assuming 'ready' is part of the server startup log
        }
      });

      serverProcess.stderr.on('data', (data: string) => {
        console.error(`Server error: ${data}`);
        reject(new Error(data));
      });
    });
  });

  // Stop the server after all tests are done
  test.afterAll(async () => {
    if (serverProcess) {
      serverProcess.kill(); // Terminate the server process
    }
  });

  test("expect tech event to be visible", async ({ page }) => {
    await page.route("https://rendezvous-events.onrender.com/events/", (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(MockTrendingEvents)
      })
    );

    await page.goto('http://localhost:5173/');
    
    await expect(page.locator("h3:text('Tech Innovators Conference')")).toBeVisible();
  });
});
