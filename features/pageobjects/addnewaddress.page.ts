import { ChainablePromiseElement } from "webdriverio";

class AddNewAddress {
  get lnk_Directory() {
    return $(".overview__item-title=Adresboek");
  }

  get btn_AddAddress() {
    return $('//*[@data-testid="address-add-button"]');
  }

  get rdo_DeliveryBillingAddress() {
    return $('//*[@id="deliveryBillingAddress_new"]');
  }

  get input_FirstName() {
    return $('//*[@id="firstName"]');
  }

  get input_LastName() {
    return $('//*[@id="lastName"]');
  }

  get input_Street() {
    return $('//*[@id="address1"]');
  }

  get input_HouseNum() {
    return $('//*[@id="address2"]');
  }

  get input_Place() {
    return $('//*[@id="city"]');
  }

  get input_ZipCode() {
    return $('//*[@id="zipCode"]');
  }

  get input_Phone() {
    return $('//*[@id="phone1"]');
  }

  get drpdwn_Country() {
    return $('//*[@id="country"]');
  }
  get btn_save() {
    return $('.//*[@data-testid="address-save-button"]');
  }

  get btn_deleteAddress() {
    return $('//*[@data-testid="address-delete-button"]');
  }

  async moveToAddressBook() {
    await this.lnk_Directory.waitForExist({ timeout: 3000});
    await (await this.lnk_Directory).click();
    await this.btn_AddAddress.waitForDisplayed();
    await (await this.btn_AddAddress).click();
  }

  async enterUserDetails(Firstname: string, LastName: string) {
    this.moveToAddressBook();
    await this.input_FirstName.setValue(Firstname);
    await this.input_FirstName.setValue(LastName);
  }
  async enterUserAddress(Street: string, HouseNum: string, Place: string) {
    await this.input_Street.setValue(Street);
    await this.input_HouseNum.setValue(HouseNum);
    await this.input_Place.setValue(Place);
  }
  async enterPhoneDetails(PostCode: string, Phone: string) {
    await this.input_ZipCode.setValue(PostCode);
    await this.input_Phone.setValue(Phone);
  }

  async saveFormDetails() {
    await this.btn_save.click();
  }

  async verifyAddress() {
    await this.btn_deleteAddress.waitForExist({timeout: 5000 });
    await this.btn_deleteAddress.waitForDisplayed();
  }
}
export default new AddNewAddress();
