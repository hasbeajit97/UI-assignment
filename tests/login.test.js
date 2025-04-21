const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { saveData } = require('../utils/testDataManager');

test('Login and save user status', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

    // Save outcome
    saveData({ loginSuccess: true });
});
