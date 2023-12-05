/// <reference types ="Cypress" />

import { LoginPage, ProductsContentPage} from "../pages/index";

const loginPage = new LoginPage();
const productPage = new ProductsContentPage();

describe("Buy a product workflow", () => {
  describe("Given the user logs in with a valid and active user", () => {
    beforeEach(() => {
      loginPage.visitLoginPage();
      loginPage.signIn("standard_user", "secret_sauce");
      productPage.displayContainer();
    });

    describe("When the user adds the Sauce Labs Backpack to the cart", () => {
      beforeEach( () => { 
          productPage.addItem();
      });
      
      it("Then the price and names for that product are correct", () => {
        productPage.verifyTitle("Sauce Labs Backpack");
        productPage.verifyPrice("$29.99");
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
              cy.get(".inventory_item_name").should("have.text", "Sauce Labs Backpack");
              cy.get(".inventory_item_price").should("have.text", "$29.99");
              cy.get(".summary_subtotal_label").should("contain.text", "$29.99");
              cy.get(".summary_tax_label").should("contain.text", "$2.40");
              cy.get(".summary_total_label").should("contain.text", "$32.39");
            });
            
            describe("And the user finishes the order", () => {
              beforeEach(() => {
                cy.get("#finish").click();
              });
              
              it("Then the user should get the completed order message", () => {
                cy.get(".complete-header").should("have.text", "Thank you for your order!");   
              });
            });
          });
        });
      });
    });
  });
}); 
