class ProductsContentPage {
  private shoppingBtn: string;
  private containerItems: string;
  private addItemBackPack: string;
  private titleItem: string;
  private priceItem: string;

  constructor() {
    this.shoppingBtn = ".shopping_cart_link";
    this.containerItems =
      ":nth-child(2) > :nth-child(1) > #inventory_container";
    this.addItemBackPack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.titleItem = "#item_4_title_link > .inventory_item_name";
    this.priceItem =
      ":nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price";
  }

  public goToShoppingCart(): void {
    cy.get(this.shoppingBtn).click();
  }

  public addItem(): void {
    cy.get(this.addItemBackPack).click();
  }

  public verifyTitle(messages: string): void {
    cy.get(this.titleItem).should("have.text", messages);
  }

  public verifyPrice(messages: string): void {
    cy.get(this.priceItem).should("have.text", messages);
  }

  public displayContainer(): void {
    cy.get(this.containerItems).should("be.visible");
  }
}

export { ProductsContentPage };
