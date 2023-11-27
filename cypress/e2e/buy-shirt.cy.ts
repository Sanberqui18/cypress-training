/// <reference types ="Cypress" />

import { LoginPage } from "../pages/index";

const loginPage = new LoginPage();

describe("Buy a black t-shirt", () => {
  it("Then the t-shirt should be bought", () => {

    loginPage.visitLoginPage();

    loginPage.signIn("standard_user", "secret_sauce");

    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();

    cy.get(".shopping_cart_link").click();

    cy.get("#checkout").click();

    cy.get("#first-name").type("Cypress");
    cy.get("#last-name").type("Workshop");
    cy.get("#postal-code").type("00000");

    cy.get("#continue").click();

    cy.get(".cart_quantity").should("have.text", 1);
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Bolt T-Shirt");
    cy.get(".inventory_item_price").should("have.text", "$15.99");

    cy.get(".summary_subtotal_label").should("contain.text", "15.99");
    cy.get(".summary_tax_label").should("contain.text", "1.28");
    cy.get(".summary_total_label").should("contain.text", "17.27");

    cy.get("#finish").click();

    cy.get(".complete-header").should("have.text", "Thank you for your order!");
  });
});
