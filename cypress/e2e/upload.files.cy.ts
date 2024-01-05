/// <reference types ="Cypress" />

import { UploadPage } from "../pages";

const uploadPage = new UploadPage();

describe("Upload File ", () => {
  describe("Given the user goes to the Upload File page ", () => {
    beforeEach(() => {
      uploadPage.goToUploadSite();
    });

    describe("When the user uploads a file by using click to upload option and submits the file", () => {
      it("Then the file should be uploaded correctly", () => {
        uploadPage.uploadFile("user.credentials.json");
        uploadPage.submitFiles();
        uploadPage
          .getConfirmationMessage()
          .should("contain.text", "user.credentials.json");
      });
    });

    //Test fail due To internal Server Error 500
    describe.skip("When the user uploads a file by using the drag and drop option", () => {
      it("Then the file should be uploaded correctly and shown in the drag and drop field", () => {
        uploadPage.dragAndDropFiles("user.credentials.json");
        uploadPage
          .getDragAndDropList()
          .then(($fileNames) => Cypress._.map($fileNames, "innerText"))
          .then(([list]) => {
            expect(list).to.contain("user.credentials.json");
          });
        uploadPage.submitFiles();
        uploadPage
          .getConfirmationMessage()
          .should("contain.text", "user.credentials.json");
      });
    });
  });
});
