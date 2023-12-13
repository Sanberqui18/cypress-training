/// <reference types ="Cypress" />

import { LoginPage, ProductsContentPage } from "../pages/index";
import { Users } from "../support/types";

const loginPage = new LoginPage();
const productPage = new ProductsContentPage();

describe("Users login validation ", () => {
  describe("Given I go to the Sause Demo store", () => {
    beforeEach(() => {
      loginPage.visitLoginPage();
    });

    describe("And I log in using the Standard User", () => {
      it("Then I should be redirected to the main product page without errors", () => {
        cy.fixture("user.credentials").then((users: Users) => {
          loginPage.signIn(
            users.standard_user.username,
            users.standard_user.password,
          );
        });

        productPage.displayContainer();
      });

      describe("When I try to log in using wrong credentials", () => {
        it("Then I get an error message because the password is not correct", () => {
          cy.fixture("user.credentials").then((users: Users) => {
            loginPage.signIn(users.locked_out_user.username, "password");
          });

          loginPage
            .getErrorField()
            .should(
              "contain.text",
              "Username and password do not match any user in this service",
            );

          loginPage.closeErrorMessage();
          loginPage.getErrorField().should("not.exist");
        });
      });
    });

    describe("When I log in using the Locked out User", () => {
      it("Then I get an error message because the account is locked", () => {
        cy.fixture("user.credentials").then((users: Users) => {
          loginPage.signIn(
            users.locked_out_user.username,
            users.locked_out_user.password,
          );
        });

        loginPage
          .getErrorField()
          .should("contain.text", "Sorry, this user has been locked out.");

        loginPage.closeErrorMessage();
        loginPage.getErrorField().should("not.exist");
      });
    });

    describe("When I log in using the Problem User", () => {
      it("Then I should be redirected to the main product page without errors", () => {
        cy.fixture("user.credentials").then((users: Users) => {
          loginPage.signIn(
            users.problem_user.username,
            users.problem_user.password,
          );
        });

        productPage.displayContainer();
      });
    });

    describe("When I log in using the Performance Glitch User", () => {
      it("Then I should be redirected to the main product page without errors", () => {
        cy.fixture("user.credentials").then((users: Users) => {
          loginPage.signIn(
            users.performance_glitch_user.username,
            users.performance_glitch_user.password,
          );
        });

        productPage.displayContainer();
      });
    });

    describe("When I log in using the Error User", () => {
      it("Then I should be redirected to the main product page without errors", () => {
        cy.fixture("user.credentials").then((users: Users) => {
          loginPage.signIn(
            users.error_user.username,
            users.error_user.password,
          );
        });

        productPage.displayContainer();
      });
    });

    describe("When I log in using the Visual User", () => {
      it("Then I should be redirected to the main product page without errors", () => {
        cy.fixture("user.credentials").then((users: Users) => {
          loginPage.signIn(
            users.visual_user.username,
            users.visual_user.password,
          );
        });

        productPage.displayContainer();
      });
    });
  });
});
