Feature:
@janci
  Scenario: cakesbakes loggin page
    Given user is on the homepage
    When user click the login button
    Then the sign in window apper on the home page
    When user can enter the valid <emailid> and valid <password>
    Then user click on the signin button
    Then user should successfully loggedin
    And user should see on my Account button in homepage

#gfghjgdjfj