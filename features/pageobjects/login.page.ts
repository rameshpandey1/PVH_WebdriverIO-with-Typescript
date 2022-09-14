import { ChainablePromiseElement } from "webdriverio";

import Page from "../pageobjects/page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#signin-email");
  }

  get inputPassword() {
    return $("#signin-password");
  }

  get btnSubmit() {
    return $('.//*[@data-testid="Button-primary"]');
    //return $('.//button[text()="Aanmelden"]');
  }

  get lnkMyAccount() {
    return $(".header-my-account-wrapper_2KeJf");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username: string, password: string) {
    
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginPage();
