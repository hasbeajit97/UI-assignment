exports.InventoryPage = class InventoryPage {
    constructor(page) {
        this.page = page;
        this.itemName = page.locator('.inventory_item_name');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
};
