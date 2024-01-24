/// <reference types ="Cypress" />

import { iFramePage } from "../pages";

const iframePage = new iFramePage();

describe("Iframe Page", () => {
  describe("Given the user is in the iframe demo site", () => {
    beforeEach(() => {
      iframePage.visit();
    });

    describe("When the user access the Iframe nad changes pages", () => {
      it("Then the landing page should be HTML Tutorial and changing pages should show new names", () => {
        iframePage.getIframe();
        iframePage.getFrameTitle().should("contain", "HTML");
        iframePage.goToPage("CSS");
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        iframePage.getFrameTitle().should("contain", "CSS");
      });
    });
  });
});
