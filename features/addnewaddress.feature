Feature: Validate add new address for user

  Scenario Outline: Validate user can add new address for logged in user
    Given I am on the home page
    When I login with <username> and <password>
    Then I should see my account page
    Then I enter user details as <Firstname> and <Lastname>
    Then I enter add details as <Street> and <HouseNum> and <Place>
    Then I enter phone details <PostCode> and <Phone>
    Then I save the address details and verify 
      
    Examples: 
      | username              | password | Firstname | Lastname | Street             | HouseNum | Place | PostCode | Phone        |
      | ramesh25790@gmail.com | Pvh@1234 | Ramesh    | Pandey   | Central Amsterdam  |  755 | Amsterdam |  1087 HJ | +31666666666 |
