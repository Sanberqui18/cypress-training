class LoginPage {
  private loginURL: string;
  private userNameField: string;
  private passwordField: string;
  private loginButton: string;
  private errorField: string;
  private errorButton: string;

  constructor() {
    this.loginURL = "http://saucedemo.com/";
    this.userNameField = "#user-name";
    this.passwordField = "#password";
    this.loginButton = "#login-button";
    this.errorField = '[data-test="error"]';
    this.errorButton = ".error-button";
  }

  getErrorField(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.errorField);
  }

  closeErrorMessage(): void {
    this.getErrorField().find(this.errorButton).click();
  }

  visitLoginPage(): void {
    cy.visit(this.loginURL);
  }

  signIn(userName: string, password: string): void {
    cy.get(this.userNameField).type(userName);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }
}

export { LoginPage };
