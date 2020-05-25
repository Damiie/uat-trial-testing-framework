@accountManagement
Feature: Account Management

  Background:
    Given luma application is launched

  @createAccount
  Scenario Outline: Create account with valid email
    And user is on create account page
    When user enter "<Firstname>"
    And user enter "<Lastname>" on create account page
    And user enter their "<Email>"
    And users enter "<Password>"
    And user enters "<Confirmpassword>"
    And user click create account
    Then My account dashboard is displayed
    Examples:
      | Firstname | Lastname | Email                  | Password    | Confirmpassword |
      | Fred      | Juniper  | Fred.Juniper03@yahoo.com | FJuniper123 | FJuniper123     |