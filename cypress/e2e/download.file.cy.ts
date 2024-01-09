/// <reference types ="Cypress" />

import { DownloadPage } from "../pages";

const downloadPage = new DownloadPage();

describe("Download File", () => {
  describe("Given the user is in teh Download Site ", () => {
    beforeEach(() => {
      downloadPage.goToDownloadSite();
    });

    describe("When the user downloads a file by clicking on the Download button", () => {
      it("Then the file should be downloaded and it is correct", () => {
        downloadPage.downloadImage();
        downloadPage.getDownloadedFile().should("exist");
      });
    });
  });
});
