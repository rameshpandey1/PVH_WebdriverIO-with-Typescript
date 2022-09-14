import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import Page from "../pageobjects/page"

Given(/^I am on the (\w+) page$/, async (page) => {
  await HomePage.acceptAllCookies();
  await HomePage.clickSignUpbtn();

});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
  await (await LoginPage.btnSubmit).waitForClickable();
  await LoginPage.btnSubmit.waitForExist({timeout:50000});
  await (await LoginPage.btnSubmit).click();
});

Then(/^I should see a login error message saying (.*)$/, async (message) => {
  const msg = $('//p[text()= '+ message +']');
  await expect(msg).toBePresent();
  await expect(msg).toBeDisplayed();
});



Then(/^I should see my account page$/, async () => {
  await LoginPage.lnkMyAccount.waitForDisplayed();
  await expect(LoginPage.lnkMyAccount).toBePresent();
  await (await LoginPage.lnkMyAccount).click();
});
