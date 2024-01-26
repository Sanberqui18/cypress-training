class iFramePage {
  private url: string;
  private iframeLocation: string;
  private iframeTitle: string;
  private iframePages: string;

  constructor() {
    this.url = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframeLocation =
      '[style="width:100%;height:350px;overflow:hidden;"] > iframe';
    this.iframeTitle = "h1";
    this.iframePages = "#subtopnav";
  }

  private getIframeDocument(): Cypress.Chainable<JQuery<HTMLIFrameElement>> {
    return cy.get(this.iframeLocation).its("0.contentDocument").should("exist");
  }

  getIframe(): Cypress.Chainable<JQuery<HTMLIFrameElement>> {
    //@ts-ignore
    return this.getIframeDocument()
      .its("body")
      .should("not.be.undefined")
      .then(cy.wrap);
  }

  visit(): void {
    cy.visit(this.url);
  }

  getFrameTitle(): Cypress.Chainable<JQuery<HTMLHeadingElement>> {
    return this.getIframe().find(this.iframeTitle);
  }

  goToPage(page: string): void {
    this.getIframe().find(this.iframePages).contains(page).click();
  }
}

export { iFramePage };
