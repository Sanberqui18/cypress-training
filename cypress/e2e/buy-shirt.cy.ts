/// <reference types ="Cypress" />

import { LoginPage } from "../pages/index";

const loginPage = new LoginPage();

describe("Buy a product workflow", () => {
  describe("Given the user logs in with a valid and active user", () => {
    beforeEach(() => {
      loginPage.visitLoginPage();
      loginPage.signIn("standard_user", "secret_sauce");
    });

    describe("When the user adds the Bolt T-Shirt to the cart ", () => {
      beforeEach( () => { 
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        cy.get(".shopping_cart_link").click(); 
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
            cy.get(".inventory_item_name").should("have.text", "Sauce Labs Bolt T-Shirt");
            cy.get(".inventory_item_price").should("have.text", "$15.99");
            cy.get(".summary_subtotal_label").should("contain.text", "15.99");
            cy.get(".summary_tax_label").should("contain.text", "1.28");
            cy.get(".summary_total_label").should("contain.text", "17.27");
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
