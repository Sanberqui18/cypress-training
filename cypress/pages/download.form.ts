class DownloadPage {
  private site: string;
  private downloadBttn: string;

  constructor() {
    this.site = "https://demoqa.com/upload-download";
    this.downloadBttn = "#downloadButton";
  }

  goToDownloadSite(): void {
    cy.visit(this.site);
  }

  downloadImage(): void {
    cy.get(this.downloadBttn).click();
  }

  getDownloadedFile(): Cypress.Chainable<any> {
    return cy.readFile("cypress/downloads/sampleFile.jpeg");
  }
}

export { DownloadPage };
