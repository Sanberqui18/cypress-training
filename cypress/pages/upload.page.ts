class UploadPage {
  private site: string;
  private fileUploadButton: string;
  private uploadButton: string;
  private dragAndDrop: string;
  private dragAndDropOptions: string;
  private confirmatonMessage: string;

  constructor() {
    this.site = "https://the-internet.herokuapp.com/upload";
    this.fileUploadButton = "#file-upload";
    this.uploadButton = "#file-submit";
    this.dragAndDrop = "#drag-drop-upload";
    this.dragAndDropOptions = "#drag-drop-upload > *";
    this.confirmatonMessage = "#uploaded-files";
  }

  goToUploadSite(): void {
    cy.visit(this.site);
  }

  uploadFile(fileName: Cypress.FixtureData): void {
    cy.get(this.fileUploadButton).attachFile(fileName);
  }

  dragAndDropFiles(...fileNames: Cypress.FixtureData[]): void {
    cy.get(this.dragAndDrop).attachFile([...fileNames], {
      subjectType: "drag-n-drop",
    });
  }

  submitFiles(): void {
    cy.get(this.uploadButton).click();
  }

  getConfirmationMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.confirmatonMessage);
  }

  getDragAndDropList(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.dragAndDropOptions);
  }
}

export { UploadPage };
