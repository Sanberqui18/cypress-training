import { HoobbieList } from "../support/types";

class FormPage {
  private nameField: string;
  private lastNameField: string;
  private email: string;
  private gender: string;
  private dateOfBirthInput: string;
  private mobile: string;
  private hobbies: string;
  private address: string;
  private submitButton: string;

  constructor() {
    this.nameField = "#firstName";
    this.lastNameField = "#lastName";
    this.email = "#userEmail";
    this.gender = "#genterWrapper";
    this.dateOfBirthInput = "#dateOfBirthInput";
    this.mobile = "#userNumber";
    this.hobbies = "#hobbiesWrapper";
    this.address = "#currentAddress";
    this.submitButton = "#submit";
  }

  fillNames(name: string, lastName: string): void {
    cy.get(this.nameField).type(name);
    cy.get(this.lastNameField).type(lastName);
  }

  fillEmail(email: string): void {
    cy.get(this.email).type(email);
  }

  fillPhoneNumber(phone: string): void {
    cy.get(this.mobile).type(phone);
  }

  checkGender(gender: string): void {
    cy.get(this.gender)
      .contains(gender)
      .parent()
      .find('[type="radio"]')
      .click({ force: true });
  }

  fillDOB(DOB: string): void {
    cy.get(this.dateOfBirthInput).type(DOB);
  }

  checkHobbies(hobbies: HoobbieList): void {
    for (let hobby of hobbies) {
      cy.get(this.hobbies)
        //@ts-ignore
        .contains(hobby)
        .parent()
        .find('[type="checkbox"]')
        .check({ force: true });
    }
  }

  fillAddress(address: string): void {
    cy.get(this.address).type(address);
  }

  submitForm(): void {
    cy.get(this.submitButton).click({ force: true });
  }
}

export { FormPage };
