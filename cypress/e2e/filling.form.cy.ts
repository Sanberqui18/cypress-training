/// <reference types ="Cypress" />

import { FormPage, ConfirmationForm } from "../pages";
import { FormData } from "../support/types";

const personalInformation: FormData = {
  name: "Holmes",
  lastName: "Salazar",
  email: "test@email.com",
  gender: "Male",
  dateOfBirth: "27 Jul 2016",
  mobileNumber: "3656589156",
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
};

const formPage = new FormPage();
const confirmationForm = new ConfirmationForm();

describe("Filling Form", () => {
  describe("Given the user visits the Demo QA Practice form page", () => {
    beforeEach(() => {
      cy.visit("https://demoqa.com/automation-practice-form");
    });

    describe("When the user fills out all the form and clicks on the submit button", () => {
      beforeEach(() => {
        formPage.fillNames(
          personalInformation.name,
          personalInformation.lastName,
        );
        formPage.fillEmail(personalInformation.email);
        formPage.checkGender(personalInformation.gender);
        formPage.fillDOB(personalInformation.dateOfBirth);
        formPage.fillPhoneNumber(personalInformation.mobileNumber);
        formPage.checkHobbies(personalInformation.hobbies);
        formPage.fillAddress(personalInformation.currentAddress);
        formPage.submitForm();
      });

      it("Then the user should be redirected to the confirmation page and the displayed data should be correct", () => {
        confirmationForm.getPopUp().should("exist");
        confirmationForm
          .getTitle()
          .should("have.text", "Thanks for submitting the form");
        confirmationForm
          .getValueOf("Student Name")
          .should(
            "have.text",
            `${personalInformation.name} ${personalInformation.lastName}`,
          );
        confirmationForm
          .getValueOf("Student Email")
          .should("have.text", personalInformation.email);
        confirmationForm
          .getValueOf("Gender")
          .should("have.text", personalInformation.gender);
        confirmationForm.getValueOf("Subjects").should("be.empty");
        confirmationForm
          .getValueOf("Hobbies")
          .should(
            "contain.text",
            `${personalInformation.hobbies[0]}, ${personalInformation.hobbies[1]}`,
          );
        confirmationForm
          .getValueOf("Address")
          .should("have.text", personalInformation.currentAddress);
        confirmationForm.getValueOf("State and City").should("be.empty");

        confirmationForm.closePopUp();
        confirmationForm.getPopUp().should("not.exist");
      });
    });
  });
});
