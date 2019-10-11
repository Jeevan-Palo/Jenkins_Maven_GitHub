$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactDetailSection.feature");
formatter.feature({
  "line": 2,
  "name": "Contact Detail Section",
  "description": "",
  "id": "contact-detail-section",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Contact_Detail"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify that user should able to view the subsection of the Main Contact Person",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-main-contact-person",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@CD_AC1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should verifies the following fields Name,Job Title,Contact No,Email,Alternate Contact Person\u0027s Email,Mailing Address are available in Contact Detail page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-main-contact-person;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 19,
      "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-main-contact-person;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 20,
      "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-main-contact-person;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 7881374301,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that user should able to view the subsection of the Main Contact Person",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-main-contact-person;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@CD_AC1"
    },
    {
      "line": 1,
      "name": "@Contact_Detail"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should verifies the following fields Name,Job Title,Contact No,Email,Alternate Contact Person\u0027s Email,Mailing Address are available in Contact Detail page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 10068914801,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11595110200,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2525363399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 3150047500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2181053001,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_should_verifies_the_following_fields_Name_Job_Title_Contact_No_Email_Alternate_Contact_Person_s_Email_Mailing_Address_are_available_in_Contact_Detail_page()"
});
formatter.result({
  "duration": 6302678700,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1893005000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13980348901,
  "status": "passed"
});
formatter.after({
  "duration": 282700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verify that user should able to validate the auto populate values Blk/Hse No and Street details",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-blk/hse-no-and-street-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@CD_AC2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user should able to enter the postal code \"460096\"in mailing address",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user verifies Blk/Hse No \"96\" and Street \"BEDOK NORTH AVENUE 4\" should autopopulate",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-blk/hse-no-and-street-details;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 35,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-blk/hse-no-and-street-details;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 36,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-blk/hse-no-and-street-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5388288700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify that user should able to validate the auto populate values Blk/Hse No and Street details",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-blk/hse-no-and-street-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Contact_Detail"
    },
    {
      "line": 23,
      "name": "@CD_AC2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user should able to enter the postal code \"460096\"in mailing address",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user verifies Blk/Hse No \"96\" and Street \"BEDOK NORTH AVENUE 4\" should autopopulate",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 8676105000,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11586708500,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 3287845300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2799946900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2143572800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "460096",
      "offset": 43
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_postal_code_in_mailing_address(String)"
});
formatter.result({
  "duration": 2466071499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "96",
      "offset": 26
    },
    {
      "val": "BEDOK NORTH AVENUE 4",
      "offset": 42
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_Blk_Hse_No_and_Street_should_autopopulate(String,String)"
});
formatter.result({
  "duration": 2135893300,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1201823000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13942247401,
  "status": "passed"
});
formatter.after({
  "duration": 94500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Verify that user should able to validate the auto populate values when click checkbox ‘Same as registered address in Company Profile’",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-‘same-as-registered-address-in-company-profile’",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@CD_AC3"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user validates the postal code \"453123\" , Level \"03\" , and Unit \"19\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "user verifies Blk/Hse No \"45\" and Street \"CHOA CHU KANG CENTRAL\" should autopopulate",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-‘same-as-registered-address-in-company-profile’;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 53,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-‘same-as-registered-address-in-company-profile’;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 54,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-‘same-as-registered-address-in-company-profile’;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 6032612799,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify that user should able to validate the auto populate values when click checkbox ‘Same as registered address in Company Profile’",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-‘same-as-registered-address-in-company-profile’;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Contact_Detail"
    },
    {
      "line": 39,
      "name": "@CD_AC3"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user validates the postal code \"453123\" , Level \"03\" , and Unit \"19\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "user verifies Blk/Hse No \"45\" and Street \"CHOA CHU KANG CENTRAL\" should autopopulate",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 8870353001,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11288004400,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2955623900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2826182800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2152527900,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile()"
});
formatter.result({
  "duration": 211506401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "453123",
      "offset": 32
    },
    {
      "val": "03",
      "offset": 49
    },
    {
      "val": "19",
      "offset": 65
    }
  ],
  "location": "ContactDetailsSteps.user_validates_the_postal_code_Level_and_Unit(String,String,String)"
});
formatter.result({
  "duration": 2258912501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 26
    },
    {
      "val": "CHOA CHU KANG CENTRAL",
      "offset": 42
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_Blk_Hse_No_and_Street_should_autopopulate(String,String)"
});
formatter.result({
  "duration": 2142407301,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1317171200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 14011123800,
  "status": "passed"
});
formatter.after({
  "duration": 85900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Verify that user should able to view the subsection of the Letter of Office Addressee",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-letter-of-office-addressee",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@CD_AC4"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user should verfies the following fields Name, Job Title, Email",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-letter-of-office-addressee;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 68,
      "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-letter-of-office-addressee;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 69,
      "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-letter-of-office-addressee;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 4917991400,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Verify that user should able to view the subsection of the Letter of Office Addressee",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-view-the-subsection-of-the-letter-of-office-addressee;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@CD_AC4"
    },
    {
      "line": 1,
      "name": "@Contact_Detail"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user should verfies the following fields Name, Job Title, Email",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9259054100,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11986643301,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2322934600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 3213658900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2173268000,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_should_verfies_the_following_fields_Name_Job_Title_Email()"
});
formatter.result({
  "duration": 3149115500,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 2607955400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13918547501,
  "status": "passed"
});
formatter.after({
  "duration": 67900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Verify that user should able to validate the auto populate values when click checkbox \u0027Same as main contact person\u0027",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-\u0027same-as-main-contact-person\u0027",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@CD_AC5"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user should able to enter the values in the field \"\u003cName\u003e\" \"\u003cJob_Title\u003e\" \"\u003cContact_NO\u003e\" \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "verifies the value populate in subsection of the Letter of office Addrssee \"\u003cName\u003e\" \"\u003cJob_Title\u003e\" \"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 86,
  "name": "",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-\u0027same-as-main-contact-person\u0027;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole",
        "Name",
        "Job_Title",
        "Contact_NO",
        "Email"
      ],
      "line": 87,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-\u0027same-as-main-contact-person\u0027;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor",
        "GovTech",
        "Software Developer",
        "65656565",
        "test@co.com"
      ],
      "line": 88,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-\u0027same-as-main-contact-person\u0027;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 7465948301,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Verify that user should able to validate the auto populate values when click checkbox \u0027Same as main contact person\u0027",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-auto-populate-values-when-click-checkbox-\u0027same-as-main-contact-person\u0027;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@CD_AC5"
    },
    {
      "line": 1,
      "name": "@Contact_Detail"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "verifies the value populate in subsection of the Letter of office Addrssee \"GovTech\" \"Software Developer\" \"test@co.com\"",
  "matchedColumns": [
    4,
    5,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 8633580300,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11108581000,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2945187900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2935999300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2168041700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 10841553200,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "duration": 231994199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 76
    },
    {
      "val": "Software Developer",
      "offset": 86
    },
    {
      "val": "test@co.com",
      "offset": 107
    }
  ],
  "location": "ContactDetailsSteps.verifies_the_value_populate_in_subsection_of_the_Letter_of_office_Addrssee(String,String,String)"
});
formatter.result({
  "duration": 2247502000,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1279739800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13924132800,
  "status": "passed"
});
formatter.after({
  "duration": 107199,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 92,
  "name": "Verify that user should able to validate the saved values after refresh the page",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 91,
      "name": "@CD_AC6"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "user should able to enter the values in the field \"\u003cName\u003e\" \"\u003cJob_Title\u003e\" \"\u003cContact_NO\u003e\" \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "verifies the value populate in subsection of the Letter of office Addrssee \"\u003cName\u003e\" \"\u003cJob_Title\u003e\" \"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "user refreshes the page",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "verifies the value populate in subsection of the Letter of office Addrssee \"\u003cName\u003e\" \"\u003cJob_Title\u003e\" \"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 107,
  "name": "",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole",
        "Name",
        "Job_Title",
        "Contact_NO",
        "Email"
      ],
      "line": 108,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor",
        "GovTech",
        "Software Developer",
        "65656565",
        "test@co.com"
      ],
      "line": 109,
      "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5578980999,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Verify that user should able to validate the saved values after refresh the page",
  "description": "",
  "id": "contact-detail-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 91,
      "name": "@CD_AC6"
    },
    {
      "line": 1,
      "name": "@Contact_Detail"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "verifies the value populate in subsection of the Letter of office Addrssee \"GovTech\" \"Software Developer\" \"test@co.com\"",
  "matchedColumns": [
    4,
    5,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "user refreshes the page",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "verifies the value populate in subsection of the Letter of office Addrssee \"GovTech\" \"Software Developer\" \"test@co.com\"",
  "matchedColumns": [
    4,
    5,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9009615901,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11218678100,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2277160200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 3040730900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2148468199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 10504601500,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "duration": 291711800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 76
    },
    {
      "val": "Software Developer",
      "offset": 86
    },
    {
      "val": "test@co.com",
      "offset": 107
    }
  ],
  "location": "ContactDetailsSteps.verifies_the_value_populate_in_subsection_of_the_Letter_of_office_Addrssee(String,String,String)"
});
formatter.result({
  "duration": 2267550700,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 239360399,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_refreshes_the_page()"
});
formatter.result({
  "duration": 5066797600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 76
    },
    {
      "val": "Software Developer",
      "offset": 86
    },
    {
      "val": "test@co.com",
      "offset": 107
    }
  ],
  "location": "ContactDetailsSteps.verifies_the_value_populate_in_subsection_of_the_Letter_of_office_Addrssee(String,String,String)"
});
formatter.result({
  "duration": 2136711000,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 2193557300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13949035201,
  "status": "passed"
});
formatter.after({
  "duration": 63300,
  "status": "passed"
});
formatter.uri("EligibilitySection.feature");
formatter.feature({
  "line": 2,
  "name": "Eligibility Section",
  "description": "",
  "id": "eligibility-section",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Eligibility"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify that user should able to access the Four questions in the Eligibility section",
  "description": "",
  "id": "eligibility-section;verify-that-user-should-able-to-access-the-four-questions-in-the-eligibility-section",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Testj"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Question \"1\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Is the applicant registered in Singapore?"
      ],
      "line": 14
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 15
    },
    {
      "cells": [
        "No"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Question \"2\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Is the applicant\u0027s group sales turnover less than or equal to S$100m or is the applicant\u0027s group employment size less than or equal to 200?"
      ],
      "line": 18
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 19
    },
    {
      "cells": [
        "No"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Question \"3\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Does the applicant have at least 30% local equity?"
      ],
      "line": 23
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 24
    },
    {
      "cells": [
        "No"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Question \"4\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Are all the following statements true for this project?"
      ],
      "line": 28
    },
    {
      "cells": [
        "The applicant has not started work on this project"
      ],
      "line": 29
    },
    {
      "cells": [
        "The applicant has not made any payment to any supplier, vendor, or third party prior to applying for this grant"
      ],
      "line": 30
    },
    {
      "cells": [
        "The applicant has not signed any contractual agreement with any supplier, vendor, or third party prior to applying for this grant"
      ],
      "line": 31
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 32
    },
    {
      "cells": [
        "No"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "eligibility-section;verify-that-user-should-able-to-access-the-four-questions-in-the-eligibility-section;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 37,
      "id": "eligibility-section;verify-that-user-should-able-to-access-the-four-questions-in-the-eligibility-section;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 38,
      "id": "eligibility-section;verify-that-user-should-able-to-access-the-four-questions-in-the-eligibility-section;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5366361499,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify that user should able to access the Four questions in the Eligibility section",
  "description": "",
  "id": "eligibility-section;verify-that-user-should-able-to-access-the-four-questions-in-the-eligibility-section;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Eligibility"
    },
    {
      "line": 8,
      "name": "@Testj"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Question \"1\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Is the applicant registered in Singapore?"
      ],
      "line": 14
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 15
    },
    {
      "cells": [
        "No"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Question \"2\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Is the applicant\u0027s group sales turnover less than or equal to S$100m or is the applicant\u0027s group employment size less than or equal to 200?"
      ],
      "line": 18
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 19
    },
    {
      "cells": [
        "No"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Question \"3\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Does the applicant have at least 30% local equity?"
      ],
      "line": 23
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 24
    },
    {
      "cells": [
        "No"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Question \"4\" is displayed as follows",
  "rows": [
    {
      "cells": [
        "Are all the following statements true for this project?"
      ],
      "line": 28
    },
    {
      "cells": [
        "The applicant has not started work on this project"
      ],
      "line": 29
    },
    {
      "cells": [
        "The applicant has not made any payment to any supplier, vendor, or third party prior to applying for this grant"
      ],
      "line": 30
    },
    {
      "cells": [
        "The applicant has not signed any contractual agreement with any supplier, vendor, or third party prior to applying for this grant"
      ],
      "line": 31
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 32
    },
    {
      "cells": [
        "No"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9837850500,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11507688800,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2310255900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.questionIsDisplayedAsFollows(int,String\u003e)"
});
formatter.result({
  "duration": 1103589499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.questionIsDisplayedAsFollows(int,String\u003e)"
});
formatter.result({
  "duration": 109826699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.questionIsDisplayedAsFollows(int,String\u003e)"
});
formatter.result({
  "duration": 68726199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.questionIsDisplayedAsFollows(int,String\u003e)"
});
formatter.result({
  "duration": 74995400,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 2171622700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 14044075400,
  "status": "passed"
});
formatter.after({
  "duration": 58400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "verifying the radio buttons Yes/No is displayed for each question and able to select Yes/No radio",
  "description": "",
  "id": "eligibility-section;verifying-the-radio-buttons-yes/no-is-displayed-for-each-question-and-able-to-select-yes/no-radio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@AC-2"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Question \"1\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 47
    },
    {
      "cells": [
        "No"
      ],
      "line": 48
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Question \"2\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 50
    },
    {
      "cells": [
        "No"
      ],
      "line": 51
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Question \"3\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 53
    },
    {
      "cells": [
        "No"
      ],
      "line": 54
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Question \"4\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 56
    },
    {
      "cells": [
        "No"
      ],
      "line": 57
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user selects the radio button as \"No\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "user selects the radio button as \"No\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user selects the radio button as \"No\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "user selects the radio button as \"No\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "eligibility-section;verifying-the-radio-buttons-yes/no-is-displayed-for-each-question-and-able-to-select-yes/no-radio;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 70,
      "id": "eligibility-section;verifying-the-radio-buttons-yes/no-is-displayed-for-each-question-and-able-to-select-yes/no-radio;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 71,
      "id": "eligibility-section;verifying-the-radio-buttons-yes/no-is-displayed-for-each-question-and-able-to-select-yes/no-radio;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5546388199,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "verifying the radio buttons Yes/No is displayed for each question and able to select Yes/No radio",
  "description": "",
  "id": "eligibility-section;verifying-the-radio-buttons-yes/no-is-displayed-for-each-question-and-able-to-select-yes/no-radio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@AC-2"
    },
    {
      "line": 1,
      "name": "@Eligibility"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Question \"1\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 47
    },
    {
      "cells": [
        "No"
      ],
      "line": 48
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Question \"2\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 50
    },
    {
      "cells": [
        "No"
      ],
      "line": 51
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Question \"3\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 53
    },
    {
      "cells": [
        "No"
      ],
      "line": 54
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Question \"4\" has following radio buttons",
  "rows": [
    {
      "cells": [
        "Yes"
      ],
      "line": 56
    },
    {
      "cells": [
        "No"
      ],
      "line": 57
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user selects the radio button as \"No\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "user selects the radio button as \"No\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user selects the radio button as \"No\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "user selects the radio button as \"No\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9842527000,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11752368800,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2234077999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.question_is_following_radio_buttons(int,String\u003e)"
});
formatter.result({
  "duration": 710041599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.question_is_following_radio_buttons(int,String\u003e)"
});
formatter.result({
  "duration": 196703301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.question_is_following_radio_buttons(int,String\u003e)"
});
formatter.result({
  "duration": 195260399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "EligibilitySectionSteps.question_is_following_radio_buttons(int,String\u003e)"
});
formatter.result({
  "duration": 100730800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2352399500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2326976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2280516700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2352081800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2358614200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2362530000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2266290900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2333913300,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1260092700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13963711400,
  "status": "passed"
});
formatter.after({
  "duration": 65900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "verifying the warning message on selecting \"No\" radio button for any of the question",
  "description": "",
  "id": "eligibility-section;verifying-the-warning-message-on-selecting-\"no\"-radio-button-for-any-of-the-question",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@AC-3"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "user selects the radio button as \"No\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "warning message \"\u003cWarningMessage\u003e\" is displayed for question 1",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user selects the radio button as \"No\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "warning message \"\u003cWarningMessage\u003e\" is displayed for question 2",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user selects the radio button as \"No\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "warning message \"\u003cWarningMessage\u003e\" is displayed for question 3",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "user selects the radio button as \"No\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "warning message \"\u003cWarningMessage\u003e\" is displayed for question 4",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "eligibility-section;verifying-the-warning-message-on-selecting-\"no\"-radio-button-for-any-of-the-question;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole",
        "WarningMessage"
      ],
      "line": 89,
      "id": "eligibility-section;verifying-the-warning-message-on-selecting-\"no\"-radio-button-for-any-of-the-question;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor",
        "Visit Smart Advisor on the SME Portal for more information on other government assistance."
      ],
      "line": 90,
      "id": "eligibility-section;verifying-the-warning-message-on-selecting-\"no\"-radio-button-for-any-of-the-question;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5808141101,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "verifying the warning message on selecting \"No\" radio button for any of the question",
  "description": "",
  "id": "eligibility-section;verifying-the-warning-message-on-selecting-\"no\"-radio-button-for-any-of-the-question;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Eligibility"
    },
    {
      "line": 73,
      "name": "@AC-3"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "user selects the radio button as \"No\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "warning message \"Visit Smart Advisor on the SME Portal for more information on other government assistance.\" is displayed for question 1",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user selects the radio button as \"No\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "warning message \"Visit Smart Advisor on the SME Portal for more information on other government assistance.\" is displayed for question 2",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user selects the radio button as \"No\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "warning message \"Visit Smart Advisor on the SME Portal for more information on other government assistance.\" is displayed for question 3",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "user selects the radio button as \"No\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "warning message \"Visit Smart Advisor on the SME Portal for more information on other government assistance.\" is displayed for question 4",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9202170001,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11813838100,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2493800501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2395017400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Visit Smart Advisor on the SME Portal for more information on other government assistance.",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 135
    }
  ],
  "location": "EligibilitySectionSteps.warning_message_is_displayed_for_question(String,int)"
});
formatter.result({
  "duration": 604409000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2372423201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Visit Smart Advisor on the SME Portal for more information on other government assistance.",
      "offset": 17
    },
    {
      "val": "2",
      "offset": 135
    }
  ],
  "location": "EligibilitySectionSteps.warning_message_is_displayed_for_question(String,int)"
});
formatter.result({
  "duration": 622527900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2273990100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Visit Smart Advisor on the SME Portal for more information on other government assistance.",
      "offset": 17
    },
    {
      "val": "3",
      "offset": 135
    }
  ],
  "location": "EligibilitySectionSteps.warning_message_is_displayed_for_question(String,int)"
});
formatter.result({
  "duration": 569915401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2329232800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Visit Smart Advisor on the SME Portal for more information on other government assistance.",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 135
    }
  ],
  "location": "EligibilitySectionSteps.warning_message_is_displayed_for_question(String,int)"
});
formatter.result({
  "duration": 633915900,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1302028900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13935711800,
  "status": "passed"
});
formatter.after({
  "duration": 123099,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 94,
  "name": "verifying the warning message link is open in new tab",
  "description": "",
  "id": "eligibility-section;verifying-the-warning-message-link-is-open-in-new-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 93,
      "name": "@AC-4"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "user selects the radio button as \"No\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user clicks on Smart Adviser Link",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "a website is launched in another window with url \"https://www.smeportal.sg/content/smeportal/en/moneymatters.html#saText\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 103,
  "name": "",
  "description": "",
  "id": "eligibility-section;verifying-the-warning-message-link-is-open-in-new-tab;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 104,
      "id": "eligibility-section;verifying-the-warning-message-link-is-open-in-new-tab;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 105,
      "id": "eligibility-section;verifying-the-warning-message-link-is-open-in-new-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5576374900,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "verifying the warning message link is open in new tab",
  "description": "",
  "id": "eligibility-section;verifying-the-warning-message-link-is-open-in-new-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Eligibility"
    },
    {
      "line": 93,
      "name": "@AC-4"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "user selects the radio button as \"No\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user clicks on Smart Adviser Link",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "a website is launched in another window with url \"https://www.smeportal.sg/content/smeportal/en/moneymatters.html#saText\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9519834200,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11115295299,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2898792300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2283568501,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.userClicksOnSmartAdviserLink()"
});
formatter.result({
  "duration": 158944300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.smeportal.sg/content/smeportal/en/moneymatters.html#saText",
      "offset": 50
    }
  ],
  "location": "EligibilitySectionSteps.websiteIsLaunchedInAnotherWindow(String)"
});
formatter.result({
  "duration": 5300035799,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1242595999,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13914753700,
  "status": "passed"
});
formatter.after({
  "duration": 71600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 110,
  "name": "Verify that user should able to validate the saved values after refresh the page",
  "description": "",
  "id": "eligibility-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 109,
      "name": "@AC-5"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "User login with own \"\u003cUserName\u003e\" \"\u003cUserFullName\u003e\" \"\u003cUserID\u003e\" \"\u003cUserRole\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "user selects the radio button as \"No\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user refreshes the page",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "\"Yes\" radio is selected for question \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "\"Yes\" radio is selected for question \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "\"Yes\" radio is selected for question \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "\"No\" radio is selected for question \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 126,
  "name": "",
  "description": "",
  "id": "eligibility-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole"
      ],
      "line": 127,
      "id": "eligibility-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor"
      ],
      "line": 128,
      "id": "eligibility-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5095658400,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Verify that user should able to validate the saved values after refresh the page",
  "description": "",
  "id": "eligibility-section;verify-that-user-should-able-to-validate-the-saved-values-after-refresh-the-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Eligibility"
    },
    {
      "line": 109,
      "name": "@AC-5"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "user selects the radio button as \"No\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user refreshes the page",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "\"Yes\" radio is selected for question \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "\"Yes\" radio is selected for question \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "\"Yes\" radio is selected for question \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "\"No\" radio is selected for question \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9022662301,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11688580000,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2616257599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2351691900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2279452500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2321675701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 68
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2322270801,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 156864801,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_refreshes_the_page()"
});
formatter.result({
  "duration": 5109359300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 1
    },
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "EligibilitySectionSteps.radio_is_selected_for_question(String,String)"
});
formatter.result({
  "duration": 71768700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 1
    },
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "EligibilitySectionSteps.radio_is_selected_for_question(String,String)"
});
formatter.result({
  "duration": 69230800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 1
    },
    {
      "val": "3",
      "offset": 38
    }
  ],
  "location": "EligibilitySectionSteps.radio_is_selected_for_question(String,String)"
});
formatter.result({
  "duration": 67743300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 1
    },
    {
      "val": "4",
      "offset": 37
    }
  ],
  "location": "EligibilitySectionSteps.radio_is_selected_for_question(String,String)"
});
formatter.result({
  "duration": 71243500,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 2115488500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13930787400,
  "status": "passed"
});
formatter.after({
  "duration": 53500,
  "status": "passed"
});
formatter.uri("FormSubmission.feature");
formatter.feature({
  "line": 2,
  "name": "Form Submission Section",
  "description": "",
  "id": "form-submission-section",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Form_Submission"
    }
  ]
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user verifies the text \"SUBMIT YOUR PROPOSAL\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter mandatory fields and click next in proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user verifies the text \"EXPLAIN THE BUSINESS IMPACT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enter mandatory fields and click next button in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user verifies the text \"PROVIDE DETAILS OF COSTS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enter mandatory fields and click next button in Cost screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "500"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verifies the text \"DECLARE \u0026 ACKNOWLEDGE TERMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5213537300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 8429743300,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 12001463200,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 1901887800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2398441400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2302286700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2362674800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2391752400,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 233982000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2907070399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2136420201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 10412625300,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile()"
});
formatter.result({
  "duration": 134906300,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "duration": 134029600,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 94178100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proposal",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 3136921901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUBMIT YOUR PROPOSAL",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2176903299,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next(String\u003e)"
});
formatter.result({
  "duration": 11802897899,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 130377101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Impact",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2854989100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EXPLAIN THE BUSINESS IMPACT",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2139367799,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Business_Impact_screen(String\u003e)"
});
formatter.result({
  "duration": 27769886899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE DETAILS OF COSTS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2144015499,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Cost_screen(String\u003e)"
});
formatter.result({
  "duration": 8506738900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DECLARE \u0026 ACKNOWLEDGE TERMS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2141059701,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify that user should able to enter all the mandatory fields and navigate to read only summary page",
  "description": "",
  "id": "form-submission-section;verify-that-user-should-able-to-enter-all-the-mandatory-fields-and-navigate-to-read-only-summary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@FS_AC1"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user enter mandatory fields and click review button in Declare and Acknowledge screen",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user should verifies the text \"Review Your Application\" in read only summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_review_button_in_Declare_and_Acknowledge_screen()"
});
formatter.result({
  "duration": 12202508600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Review Your Application",
      "offset": 31
    }
  ],
  "location": "FormSubmissionSteps.user_should_verifies_the_text_in_read_only_summary_page(String)"
});
formatter.result({
  "duration": 1168723700,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 2266700999,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13937384400,
  "status": "passed"
});
formatter.after({
  "duration": 55800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user verifies the text \"SUBMIT YOUR PROPOSAL\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter mandatory fields and click next in proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user verifies the text \"EXPLAIN THE BUSINESS IMPACT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enter mandatory fields and click next button in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user verifies the text \"PROVIDE DETAILS OF COSTS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enter mandatory fields and click next button in Cost screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "500"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verifies the text \"DECLARE \u0026 ACKNOWLEDGE TERMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5217690300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9080572100,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11534056700,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 1886380900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2183950800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2253323099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2340374899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2346932800,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 158261100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2963965300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2133535500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 10280584000,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile()"
});
formatter.result({
  "duration": 158940400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"checkbox\" id\u003d\"react-contact_info-correspondence_address-copied\" value\u003d\"on\"\u003e is not clickable at point (481, 751). Other element would receive the click: \u003clabel class\u003d\"control-label bgp-label\"\u003e...\u003c/label\u003e\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1SK9A0Q\u0027, ip: \u0027192.168.1.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Jeevan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53218}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: accept}\nSession ID: 72977efa36d383e8dcf17ae6f7074786\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.palo.techtest.StepLibrary.CommonLibrary.isElementPresentVerifyClick(CommonLibrary.java:227)\r\n\tat com.palo.techtest.StepLibrary.ContactDetailsLibrary.clickOnCheckBox(ContactDetailsLibrary.java:67)\r\n\tat com.palo.techtest.StepDefinition.ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile(ContactDetailsSteps.java:29)\r\n\tat ✽.When user clicks on checkbox for the field Same as registered address in Company Profile(FormSubmission.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Proposal",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SUBMIT YOUR PROPOSAL",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Impact",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EXPLAIN THE BUSINESS IMPACT",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Business_Impact_screen(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE DETAILS OF COSTS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Cost_screen(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DECLARE \u0026 ACKNOWLEDGE TERMS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 49,
  "name": "Verify that user should able to enter all the mandatory fields and navigate to read only summary page",
  "description": "",
  "id": "form-submission-section;verify-that-user-should-able-to-enter-all-the-mandatory-fields-and-navigate-to-read-only-summary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@FS_AC2"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user should verify the error message \"Select an option\" for the missing field",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Select an option",
      "offset": 38
    }
  ],
  "location": "FormSubmissionSteps.user_should_verify_the_error_message_for_the_missing_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2467029601,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "User should verifies read-only summary page should correctly contain all the details previously filled in each form section.",
  "description": "",
  "id": "form-submission-section;user-should-verifies-read-only-summary-page-should-correctly-contain-all-the-details-previously-filled-in-each-form-section.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@FS_AC3"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "user enter mandatory fields and click review button in Declare and Acknowledge screen",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user navigates to \"Eligibility\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user should verifies the submitted data in Eligibility section",
  "rows": [
    {
      "cells": [
        "Yes",
        "Yes",
        "Yes",
        "Yes"
      ],
      "line": 61
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user should verifies the submitted data in Contact Details section \"\u003cName\u003e\" \"\u003cJob_Title\u003e\" \"\u003cContact_NO\u003e\" \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "user should verifies the submitted data in Proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 66
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "user should verifies the submitted data in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 69
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user navigates to \"Cost\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user should verifies the submitted data in Costs screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "SGD 500.00"
      ],
      "line": 72
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "user navigates to \"Declare \u0026 Review\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "user should verifies the submitted data in Declare and review screen",
  "rows": [
    {
      "cells": [
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes"
      ],
      "line": 75
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "form-submission-section;user-should-verifies-read-only-summary-page-should-correctly-contain-all-the-details-previously-filled-in-each-form-section.;",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserFullName",
        "UserID",
        "UserRole",
        "Name",
        "Job_Title",
        "Contact_NO",
        "Email"
      ],
      "line": 81,
      "id": "form-submission-section;user-should-verifies-read-only-summary-page-should-correctly-contain-all-the-details-previously-filled-in-each-form-section.;;1"
    },
    {
      "cells": [
        "G3377467U",
        "Testing",
        "T12LL1368D",
        "Acceptor",
        "GovTech",
        "Software Developer",
        "65656565",
        "test@co.com"
      ],
      "line": 82,
      "id": "form-submission-section;user-should-verifies-read-only-summary-page-should-correctly-contain-all-the-details-previously-filled-in-each-form-section.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user verifies the text \"SUBMIT YOUR PROPOSAL\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter mandatory fields and click next in proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user verifies the text \"EXPLAIN THE BUSINESS IMPACT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enter mandatory fields and click next button in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user verifies the text \"PROVIDE DETAILS OF COSTS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enter mandatory fields and click next button in Cost screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "500"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verifies the text \"DECLARE \u0026 ACKNOWLEDGE TERMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5817724599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9531400201,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11721516799,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 2321616400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2279264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2223506000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2356867899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2359838699,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 76549300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2960912099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2125461800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 10214165601,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile()"
});
formatter.result({
  "duration": 253895301,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "duration": 201901499,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 169174600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proposal",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2998868000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUBMIT YOUR PROPOSAL",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2112645800,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next(String\u003e)"
});
formatter.result({
  "duration": 11467542400,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 147971800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Impact",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2836721399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EXPLAIN THE BUSINESS IMPACT",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2128754699,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Business_Impact_screen(String\u003e)"
});
formatter.result({
  "duration": 27892787701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE DETAILS OF COSTS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2162717299,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Cost_screen(String\u003e)"
});
formatter.result({
  "duration": 8059494400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DECLARE \u0026 ACKNOWLEDGE TERMS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2150987499,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "User should verifies read-only summary page should correctly contain all the details previously filled in each form section.",
  "description": "",
  "id": "form-submission-section;user-should-verifies-read-only-summary-page-should-correctly-contain-all-the-details-previously-filled-in-each-form-section.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 56,
      "name": "@FS_AC3"
    },
    {
      "line": 1,
      "name": "@Form_Submission"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "user enter mandatory fields and click review button in Declare and Acknowledge screen",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user navigates to \"Eligibility\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user should verifies the submitted data in Eligibility section",
  "rows": [
    {
      "cells": [
        "Yes",
        "Yes",
        "Yes",
        "Yes"
      ],
      "line": 61
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user should verifies the submitted data in Contact Details section \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "user should verifies the submitted data in Proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 66
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "user should verifies the submitted data in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 69
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user navigates to \"Cost\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user should verifies the submitted data in Costs screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "SGD 500.00"
      ],
      "line": 72
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "user navigates to \"Declare \u0026 Review\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "user should verifies the submitted data in Declare and review screen",
  "rows": [
    {
      "cells": [
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes"
      ],
      "line": 75
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_review_button_in_Declare_and_Acknowledge_screen()"
});
formatter.result({
  "duration": 11511285301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eligibility",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2836117301,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Eligibility_section(String\u003e)"
});
formatter.result({
  "duration": 176484899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2778208000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 68
    },
    {
      "val": "Software Developer",
      "offset": 78
    },
    {
      "val": "65656565",
      "offset": 99
    },
    {
      "val": "test@co.com",
      "offset": 110
    }
  ],
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Contact_Details_section(String,String,String,String)"
});
formatter.result({
  "duration": 447683501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proposal",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2874744900,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Proposal_screen(String\u003e)"
});
formatter.result({
  "duration": 401780201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Impact",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2874442000,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Business_Impact_screen(String\u003e)"
});
formatter.result({
  "duration": 739511600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cost",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2796041700,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Costs_screen(String\u003e)"
});
formatter.result({
  "duration": 388986901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Declare \u0026 Review",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2756885400,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Declare_and_review_screen(String\u003e)"
});
formatter.result({
  "duration": 1910157600,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 2579494401,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13938016100,
  "status": "passed"
});
formatter.after({
  "duration": 96000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user verifies the text \"SUBMIT YOUR PROPOSAL\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter mandatory fields and click next in proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user verifies the text \"EXPLAIN THE BUSINESS IMPACT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enter mandatory fields and click next button in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user verifies the text \"PROVIDE DETAILS OF COSTS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enter mandatory fields and click next button in Cost screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "500"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verifies the text \"DECLARE \u0026 ACKNOWLEDGE TERMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5341923800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9111318099,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 12053867999,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 3073937999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2297465500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2365730200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2372568000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2365693200,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 104811900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2895281400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2148900600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 10564647500,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile()"
});
formatter.result({
  "duration": 181063600,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "duration": 192442701,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 151185700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proposal",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 3001395300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUBMIT YOUR PROPOSAL",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2126684801,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next(String\u003e)"
});
formatter.result({
  "duration": 11841826999,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 171142201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Impact",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2703125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EXPLAIN THE BUSINESS IMPACT",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2126589100,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Business_Impact_screen(String\u003e)"
});
formatter.result({
  "duration": 28270919900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE DETAILS OF COSTS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2127995600,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Cost_screen(String\u003e)"
});
formatter.result({
  "duration": 8306346100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DECLARE \u0026 ACKNOWLEDGE TERMS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2191833600,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Verify that user should able to enter all the mandatory fields and navigate to read only summary page",
  "description": "",
  "id": "form-submission-section;verify-that-user-should-able-to-enter-all-the-mandatory-fields-and-navigate-to-read-only-summary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 85,
      "name": "@FS_AC4"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "user enter mandatory fields and click review button in Declare and Acknowledge screen",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "user navigates to \"Declare \u0026 Review\" screen",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user should verifies the submitted data in Declare and review screen",
  "rows": [
    {
      "cells": [
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes"
      ],
      "line": 90
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_review_button_in_Declare_and_Acknowledge_screen()"
});
formatter.result({
  "duration": 11944889100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Declare \u0026 Review",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2655455900,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Declare_and_review_screen(String\u003e)"
});
formatter.result({
  "duration": 2036710100,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 2191000700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13917514399,
  "status": "passed"
});
formatter.after({
  "duration": 57999,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user verifies the text \"SUBMIT YOUR PROPOSAL\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter mandatory fields and click next in proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user verifies the text \"EXPLAIN THE BUSINESS IMPACT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enter mandatory fields and click next button in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user verifies the text \"PROVIDE DETAILS OF COSTS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enter mandatory fields and click next button in Cost screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "500"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verifies the text \"DECLARE \u0026 ACKNOWLEDGE TERMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 4952519001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 9100485700,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 11485997400,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 1762429300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2373212501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2246224900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2354357699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2378839400,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 250946000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 3129679999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2139518601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 10242052800,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile()"
});
formatter.result({
  "duration": 200577500,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "duration": 200645000,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 176749001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proposal",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 3103561500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUBMIT YOUR PROPOSAL",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2078667600,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next(String\u003e)"
});
formatter.result({
  "duration": 11668704700,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 82465500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Impact",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2903369300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EXPLAIN THE BUSINESS IMPACT",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2121630500,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Business_Impact_screen(String\u003e)"
});
formatter.result({
  "duration": 27787629100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE DETAILS OF COSTS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2158141500,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Cost_screen(String\u003e)"
});
formatter.result({
  "duration": 8317018600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DECLARE \u0026 ACKNOWLEDGE TERMS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2122279100,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Verify that user should able to submit the application successfully",
  "description": "",
  "id": "form-submission-section;verify-that-user-should-able-to-submit-the-application-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 96,
      "name": "@FS_AC5"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "user enter mandatory fields and click review button in Declare and Acknowledge screen",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user navigates to \"Declare \u0026 Review\" screen",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "user should verifies the submitted data in Declare and review screen",
  "rows": [
    {
      "cells": [
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes"
      ],
      "line": 101
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "user should able to submit My Grant Application",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "user should verify the success message contain \"Ref ID:\" and \"Enterprise Singapore\"",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_review_button_in_Declare_and_Acknowledge_screen()"
});
formatter.result({
  "duration": 12146391401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Declare \u0026 Review",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2742244800,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Declare_and_review_screen(String\u003e)"
});
formatter.result({
  "duration": 100170763099,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-1SK9A0Q\u0027, ip: \u0027192.168.1.118\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Jeevan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54048}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: accept}\nSession ID: 0fd6f411239755a4880ed343c4a6c15f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\r\n\tat com.palo.techtest.StepLibrary.CommonLibrary.getElementText(CommonLibrary.java:105)\r\n\tat com.palo.techtest.StepLibrary.FormSubmissionLibrary.validDeclareAndReviewValues(FormSubmissionLibrary.java:154)\r\n\tat com.palo.techtest.StepDefinition.FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Declare_and_review_screen(FormSubmissionSteps.java:61)\r\n\tat ✽.Then user should verifies the submitted data in Declare and review screen(FormSubmission.feature:100)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_submit_My_Grant_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ref ID:",
      "offset": 48
    },
    {
      "val": "Enterprise Singapore",
      "offset": 62
    }
  ],
  "location": "FormSubmissionSteps.user_should_verify_the_success_message_contain_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1840456200,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#--------------------------------  Scenario Flow 1 --------------------------------------------------#"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login with own \"G3377467U\" \"Testing\" \"T12LL1368D\" \"Acceptor\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user creates a new Grant",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Proceed button in My Grant Actions screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects the radio button as \"Yes\" and verified for the question 1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user selects the radio button as \"Yes\" and verified for the question 2",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user selects the radio button as \"Yes\" and verified for the question 3",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects the radio button as \"Yes\" and verified for the question 4",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user navigates to \"Contact Details\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the text \"PROVIDE YOUR CONTACT DETAILS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to enter the values in the field \"GovTech\" \"Software Developer\" \"65656565\" \"test@co.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on checkbox for the field Same as registered address in Company Profile",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks for the field of same as main contact person",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user navigates to \"Proposal\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user verifies the text \"SUBMIT YOUR PROPOSAL\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter mandatory fields and click next in proposal screen",
  "rows": [
    {
      "cells": [
        "GovTech Auto Challenge",
        "09 Oct 2019",
        "10 Oct 2019",
        "GoveTech Project Description",
        "Market Entry",
        "Algeria"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user navigates to \"Business Impact\" screen",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user verifies the text \"EXPLAIN THE BUSINESS IMPACT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enter mandatory fields and click next button in Business Impact screen",
  "rows": [
    {
      "cells": [
        "09 Oct 2019",
        "50.00",
        "50.00",
        "GovTech Projections",
        "GovTech Non Tangible Benefits"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user verifies the text \"PROVIDE DETAILS OF COSTS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enter mandatory fields and click next button in Cost screen",
  "rows": [
    {
      "cells": [
        "GovTech Vendor",
        "Test.jpg",
        "500"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verifies the text \"DECLARE \u0026 ACKNOWLEDGE TERMS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.launching_the_browser()"
});
formatter.result({
  "duration": 5319545599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G3377467U",
      "offset": 21
    },
    {
      "val": "Testing",
      "offset": 33
    },
    {
      "val": "T12LL1368D",
      "offset": 43
    },
    {
      "val": "Acceptor",
      "offset": 56
    }
  ],
  "location": "EligibilitySectionSteps.User_login_with_own(String,String,String,String)"
});
formatter.result({
  "duration": 8488316600,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_creates_a_new_Grant()"
});
formatter.result({
  "duration": 10686343599,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_Proceed_button_in_My_Grant_Actions_screen()"
});
formatter.result({
  "duration": 1733647600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "1",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2154080599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2145657700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2149560600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 34
    },
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "EligibilitySectionSteps.user_selects_the_radio_button_as_and_verified_for_the_question(String,int)"
});
formatter.result({
  "duration": 2150032601,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 63425399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Details",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2463197701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE YOUR CONTACT DETAILS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2062676499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GovTech",
      "offset": 51
    },
    {
      "val": "Software Developer",
      "offset": 61
    },
    {
      "val": "65656565",
      "offset": 82
    },
    {
      "val": "test@co.com",
      "offset": 93
    }
  ],
  "location": "ContactDetailsSteps.user_should_able_to_enter_the_values_in_the_field(String,String,String,String)"
});
formatter.result({
  "duration": 9319328000,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile()"
});
formatter.result({
  "duration": 103693500,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsSteps.user_clicks_for_the_field_of_same_as_main_contact_person()"
});
formatter.result({
  "duration": 149233900,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 72437200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proposal",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2563594501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUBMIT YOUR PROPOSAL",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2060169700,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next(String\u003e)"
});
formatter.result({
  "duration": 10329386800,
  "status": "passed"
});
formatter.match({
  "location": "EligibilitySectionSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 77148400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Impact",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2445107800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EXPLAIN THE BUSINESS IMPACT",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2043498100,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Business_Impact_screen(String\u003e)"
});
formatter.result({
  "duration": 25021717100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROVIDE DETAILS OF COSTS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2068779000,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_next_button_in_Cost_screen(String\u003e)"
});
formatter.result({
  "duration": 7301856800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DECLARE \u0026 ACKNOWLEDGE TERMS",
      "offset": 24
    }
  ],
  "location": "ContactDetailsSteps.user_verifies_the_text(String)"
});
formatter.result({
  "duration": 2076301000,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Verify that user should able to see the submitted application is displayed under processing tab",
  "description": "",
  "id": "form-submission-section;verify-that-user-should-able-to-see-the-submitted-application-is-displayed-under-processing-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 110,
      "name": "@FS_AC6"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "user enter mandatory fields and click review button in Declare and Acknowledge screen",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user navigates to \"Declare \u0026 Review\" screen",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "user should verifies the submitted data in Declare and review screen",
  "rows": [
    {
      "cells": [
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes"
      ],
      "line": 115
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "user should able to submit My Grant Application",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "user should verify the success message contain \"Ref ID:\" and \"Enterprise Singapore\"",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "user clicks on \"My Grants\" in Main menu and verifies the submitted application is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user should able to logged out successfully",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FormSubmissionSteps.user_enter_mandatory_fields_and_click_review_button_in_Declare_and_Acknowledge_screen()"
});
formatter.result({
  "duration": 10898570301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Declare \u0026 Review",
      "offset": 19
    }
  ],
  "location": "ContactDetailsSteps.user_navigates_to_screen(String)"
});
formatter.result({
  "duration": 2364700400,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_verifies_the_submitted_data_in_Declare_and_review_screen(String\u003e)"
});
formatter.result({
  "duration": 1608137900,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_submit_My_Grant_Application()"
});
formatter.result({
  "duration": 121624000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ref ID:",
      "offset": 48
    },
    {
      "val": "Enterprise Singapore",
      "offset": 62
    }
  ],
  "location": "FormSubmissionSteps.user_should_verify_the_success_message_contain_and(String,String)"
});
formatter.result({
  "duration": 2148230100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Grants",
      "offset": 16
    }
  ],
  "location": "FormSubmissionSteps.user_clicks_on_in_Main_menu(String)"
});
formatter.result({
  "duration": 10907908000,
  "status": "passed"
});
formatter.match({
  "location": "FormSubmissionSteps.user_should_able_to_logged_out_successfully()"
});
formatter.result({
  "duration": 1772100000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.close_browser()"
});
formatter.result({
  "duration": 13824337100,
  "status": "passed"
});
formatter.after({
  "duration": 115000,
  "status": "passed"
});
});