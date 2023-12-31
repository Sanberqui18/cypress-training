/// <reference types ="Cypress" />

import { LoginPage, ProductsContentPage } from "../pages/index";

const productName = "Sauce Labs Backpack";
const price = "$29.99";

const loginPage = new LoginPage();
const productPage = new ProductsContentPage();

describe("Buy a product workflow", () => {
  describe("Given the user logs in with a valid and active user", () => {
    beforeEach(() => {
      loginPage.visitLoginPage();
      loginPage.signIn("standard_user", "secret_sauce");
    });

    describe("When the user is in the Product screen", () => {
      it("Then the product list loads correctly", () => {
        productPage.displayContainer();
      });

      describe("And the user adds the Sauce Labs Backpack to the cart", () => {
        beforeEach(() => {
          productPage.addItem(productName);
        });

        it("Then the price and names for that product are correct", () => {
          productPage.verifyTitle(productName, "Sauce Labs Backpack");
          productPage.verifyPrice(productName, price);
        });

        describe("And the user clicks on the shopping cart icon", () => {
          beforeEach(() => {
            productPage.goToShoppingCart();
          });

          describe("And the user goes to the checkout page and fills out the required information and continues", () => {
            beforeEach(() => {
              cy.get("#checkout").click();
              cy.get("#first-name").type("Cypress");
              cy.get("#last-name").type("Workshop");
              cy.get("#postal-code").type("00000");
              cy.get("#continue").click();
            });

            describe("And the user checks the summary and finish the order", () => {
              it("Then the data summary should be displayed", () => {
                cy.get(".cart_quantity").should("have.text", 1);
                cy.get(".inventory_item_name").should("have.text", productName);
                cy.get(".inventory_item_price").should("have.text", price);
                cy.get(".summary_subtotal_label").should("contain.text", price);
                cy.get(".summary_tax_label").should("contain.text", "$2.40");
                cy.get(".summary_total_label").should("contain.text", "$32.39");
              });

              describe("And the user finishes the order", () => {
                beforeEach(() => {
                  cy.get("#finish").click();
                });

                it("Then the user should get the completed order message", () => {
                  cy.get(".complete-header").should(
                    "have.text",
                    "Thank you for your order!",
                  );
                });
              });
            });
          });
        });
      });
    });
  });
});
