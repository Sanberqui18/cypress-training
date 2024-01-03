class ConfirmationForm {
  private title: string;
  private table: string;
  private closeButton: string;

  constructor() {
    this.title = "#example-modal-sizes-title-lg";
    this.table = ".table-responsive";
    this.closeButton = "#closeLargeModal";
  }
  getTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.title);
  }

  getValueOf(filedName: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.table).contains(filedName).next();
  }

  closePopUp() {
    cy.get(this.closeButton).click({ force: true });
  }
}

export { ConfirmationForm };
