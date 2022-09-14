
import Page from "../pageobjects/page";
import { ChainablePromiseElement } from "webdriverio";

class HomePage {
  /**
   * define selectors using getter methods
   */
  get acceptAllbtn() {
    return $("button=ACCEPTEER ALLES");
  }

  get signUpbtn() {
    return $("button=Aanmelden / Registreren");
  }

  async acceptAllCookies() {
    await browser.maximizeWindow();
    browser.pause(3000);
    if (await this.acceptAllbtn.isDisplayed()) {
      await this.acceptAllbtn.click();
    }
  }

  async clickSignUpbtn() {
    await this.signUpbtn.waitForDisplayed();
    await this.signUpbtn.waitForExist({timeout:30000});
    await this.signUpbtn.click();
  }
}

export default new HomePage();
