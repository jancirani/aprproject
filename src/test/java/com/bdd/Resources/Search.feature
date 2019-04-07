Feature: Search Feature- cakesbakes
  As an user
  I Want to search a cake
  So that I can view that cake successully




  Scenario Outline: search cake with multiple values- valid data
    Given user is on the homepage
    When user search a <cake>
    Then user should view the cake successfully

    Examples:

      |  cakes|
      | Heartcakes      |
    |   Roundcakes              |
