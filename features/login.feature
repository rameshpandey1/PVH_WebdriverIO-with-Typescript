 Feature: Validate login feature

  Scenario Outline: Validate user login functionality with valid/invalid username/email and invalid password
    Given I am on the home page
    When I login with <username> and <password>
    Then I should see a login error message saying '<message>'

    Examples: 
      | username              | password        | message                                                               |
      | ramesh25790@gmail.com | 1234            | Je wachtwoord moet tussen 5 en 20 tekens lang zijn                    |
      | ramesh@gmail          | Pvh@1234        | Sorry, dit is geen geldig e-mailadres                                 |
      | ramesh25790@gmail.com | abc@xyz!@+()^%  | Wacht een paar seconden voordat je je opnieuw probeert aan te melden. |
      

  Scenario Outline: Validate user can login successfully with valid user credentails
    Given I am on the home page
    When I login with <username> and <password>
    Then I should see my account page
    
    Examples: 
      | username              | password |
      | ramesh25790@gmail.com | Pvh@1234 |



