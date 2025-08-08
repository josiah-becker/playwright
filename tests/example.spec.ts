import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Expect the title to be "Vite + React + TS"
  await expect(page).toHaveTitle('Vite + React + TS')
})

test('has header', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Expect the header to be "Vite + React"
  await expect(page.locator('h1')).toHaveText('Vite + React')
})

test('click count button', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Click the count button
  await page.locator('#countBtn').click()

  // Expect the count to be 1
  await expect(page.locator('#countBtn')).toHaveText('count is 1')
})
