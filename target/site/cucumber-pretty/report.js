$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Create account with valid email",
  "description": "",
  "id": "account-management;create-account-with-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is on create account page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cFirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter \"\u003cLastname\u003e\" on create account page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter their \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "users enter \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"\u003cConfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click create account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "My account dashboard is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "account-management;create-account-with-valid-email;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Password",
        "Confirmpassword"
      ],
      "line": 18,
      "id": "account-management;create-account-with-valid-email;;1"
    },
    {
      "cells": [
        "Fred",
        "Juniper",
        "Fred.Juniper02@yahoo.com",
        "FJuniper123",
        "FJuniper123"
      ],
      "line": 19,
      "id": "account-management;create-account-with-valid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "luma application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountManagementStep.lumaApplicationIsLaunched()"
});
formatter.result({
  "duration": 11512106835,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create account with valid email",
  "description": "",
  "id": "account-management;create-account-with-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 7,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is on create account page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"Fred\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter \"Juniper\" on create account page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter their \"Fred.Juniper02@yahoo.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "users enter \"FJuniper123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"FJuniper123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click create account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "My account dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementStep.userIsOnCreateAccountPage()"
});
formatter.result({
  "duration": 940965404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fred",
      "offset": 12
    }
  ],
  "location": "AccountManagementStep.userEnter(String)"
});
formatter.result({
  "duration": 403052366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Juniper",
      "offset": 12
    }
  ],
  "location": "AccountManagementStep.userEnterOnCreateAccountPage(String)"
});
formatter.result({
  "duration": 119027163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fred.Juniper02@yahoo.com",
      "offset": 18
    }
  ],
  "location": "AccountManagementStep.userEnterTheir(String)"
});
formatter.result({
  "duration": 183558970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FJuniper123",
      "offset": 13
    }
  ],
  "location": "AccountManagementStep.usersEnter(String)"
});
formatter.result({
  "duration": 178023200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FJuniper123",
      "offset": 13
    }
  ],
  "location": "AccountManagementStep.userEnters(String)"
});
formatter.result({
  "duration": 159948010,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.userClickCreateAccount()"
});
formatter.result({
  "duration": 1373916577,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.myAccountDashboardIsDisplayed()"
});
formatter.result({
  "duration": 64281,
  "status": "passed"
});
});