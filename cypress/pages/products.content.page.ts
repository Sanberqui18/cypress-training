import { dataTestFormat } from "../support/utils";
class ProductsContentPage {
  private shoppingBtn: string;
  private containerItems: string;
  private titleItem: string;
  private priceItem: string;
  private productList: string;
  private productContainer: string;

  constructor() {
    this.shoppingBtn = ".shopping_cart_link";
    this.containerItems =
      ":nth-child(2) > :nth-child(1) > #inventory_container";
    this.titleItem = ".inventory_item_name";
    this.priceItem = ".inventory_item_price";
    this.productList = ".inventory_list > *";
    this.productContainer = ".inventory_item";
  }

  private findProductByName(
    productName: string,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.productList).contains(productName);
  }

  private getProductContainer(
    productName: string,
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.findProductByName(productName).parentsUntil(
      this.productContainer,
    );
  }

  displayContainer(): void {
    cy.get(this.containerItems).should("be.visible");
  }

  addItem(productNane: string): void {
    const dataTest = dataTestFormat(productNane);
    const selector = `[data-test="add-to-cart-${dataTest}"]`;
    cy.get(selector).click();
  }

  verifyTitle(productName: string, name: string): void {
    this.getProductContainer(productName)
      .find(this.titleItem)
      .should("have.text", name);
  }

  verifyPrice(productName: string, price: string): void {
    this.getProductContainer(productName)
      .find(this.priceItem)
      .should("have.text", price);
  }

  goToProductPage(productName: string): void {
    this.findProductByName(productName).click();
  }

  goToShoppingCart(): void {
    cy.get(this.shoppingBtn).click();
  }
}

export { ProductsContentPage };
