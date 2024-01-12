/// <reference types ="Cypress" />

import { DownloadPage } from "../pages";

const downloadPage = new DownloadPage();

describe("Download File", () => {
  describe("Given the user is in the Download Site ", () => {
    beforeEach(() => {
      downloadPage.goToDownloadSite();
    });

    describe("When the user downloads a file by clicking on the Download button", () => {
      it("Then the file should be downloaded", () => { //pending to add visual testing
        downloadPage.downloadImage();
        downloadPage.getDownloadedFile().should("exist")
      });
    });
  });
});
