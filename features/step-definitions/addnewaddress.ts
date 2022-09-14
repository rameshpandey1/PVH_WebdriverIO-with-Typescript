import { Given, When, Then} from "@wdio/cucumber-framework";
import Address from "../pageobjects/addnewaddress.page";
import Page from "../pageobjects/page"


Then(/^I enter user details as (.+) and (.+)$/, async (Firstname, Lastname) => {
    await Address.enterUserDetails(Firstname, Lastname);
  });


  Then(/^I enter add details as (.+) and (.+) and (.+)$/, async (Street, HouseNum, Place) => {
    await Address.enterUserAddress(Street, HouseNum, Place);
  });

  Then(/^I enter phone details (.+) and (.+)$/, async (PostCode, Phone) => {
    await Address.enterPhoneDetails(PostCode, Phone);
  });

  Then(/^I save the address details and verify$/, async () => {
    await Address.saveFormDetails();
    await Address.verifyAddress();
  });