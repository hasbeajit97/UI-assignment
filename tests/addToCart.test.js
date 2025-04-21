const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { loadData } = require('../utils/testDataManager');

test('Add item to cart if login was successful', async ({ page }) => {
    const data = loadData();
    if (!data.loginSuccess) {
        test.skip('Skipping test as login was not successful');
    }

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await inventory.addItemToCart();

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
});
