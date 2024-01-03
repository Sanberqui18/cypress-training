class ConfirmationForm {
  private popUpModal: string;
  private title: string;
  private table: string;
  private closeButton: string;

  constructor() {
    this.popUpModal = ".modal-content";
    this.title = "#example-modal-sizes-title-lg";
    this.table = ".table-responsive";
    this.closeButton = "#closeLargeModal";
  }

  getPopUp(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.popUpModal);
  }

  getTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.title);
  }

  getValueOf(filedName: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.table).contains(filedName).next();
  }

  closePopUp(): void {
    cy.get(this.closeButton).click({ force: true });
  }
}

export { ConfirmationForm };
