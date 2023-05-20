$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC_001__Master_Work_Flow.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Test Case ID: TC_001"
    },
    {
      "line": 2,
      "value": "#Summary: Master_Work_Flow"
    },
    {
      "line": 3,
      "value": "#Author: naduni.warnakulasooriya@1billiontech.com"
    }
  ],
  "line": 6,
  "name": "TC_001_Master_Work_Flow",
  "description": "",
  "id": "tc-001-master-work-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@TCIP-Automation"
    }
  ]
});
formatter.before({
  "duration": 4847600,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "TC_001_Master_Work_Flow",
  "description": "",
  "id": "tc-001-master-work-flow;tc-001-master-work-flow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user read data from excelsheet \"MW_001\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "##Login to LGIM User"
    }
  ],
  "line": 12,
  "name": "browser is open and load url",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on \"btn_LoginButton\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"txt_LGIMUserEmail\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter \"txt_LGIMUserPassword\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user click on \"btn_SignIn\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "##Go to Schemes"
    }
  ],
  "line": 20,
  "name": "user click on \"btn_SchemsMenuItem\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "##Create a new Scheme"
    }
  ],
  "line": 24,
  "name": "user click on \"btn_CreateScheme\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enter \"txt_SchemeName\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user select value in \"drp_SelectRole\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user click on \"btn_Create\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "##Navigate to created scheme"
    }
  ],
  "line": 31,
  "name": "user enter \"txt_CreatedSchemeName\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click \"btn_CreatedSchemeName\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "##Master Workflow"
    }
  ],
  "line": 36,
  "name": "user click on \"lnk_MasterWorkflow\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user select value in \"drp_SchemClassification\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user click on \"btn_RequestSchemClassification\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user click on \"btn_ActivatechemClassification\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "##Check audit trail information"
    },
    {
      "line": 45,
      "value": "# When user click on \"tab_Information\" in page"
    },
    {
      "line": 46,
      "value": "# When user click on \"btn_Activity Log\" in page"
    },
    {
      "line": 47,
      "value": "# When user click on \"btn_Audit trail information\" in page"
    },
    {
      "line": 48,
      "value": "# Then user wait for \"10\" seconds"
    },
    {
      "line": 49,
      "value": "# Then user verify audit trail message as \"msg_master workflow active\""
    }
  ],
  "line": 50,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MW_001",
      "offset": 32
    }
  ],
  "location": "OtherMethodsDef.user_read_data_from_excelsheet(String)"
});
formatter.result({
  "duration": 1412271500,
  "status": "passed"
});
formatter.match({
  "location": "OtherMethodsDef.browser_is_open_and_load_url()"
});
formatter.result({
  "duration": 11262539900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LoginButton",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1531599200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserEmail",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 1067881800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserPassword",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 1005351500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SignIn",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1289571900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15010692000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SchemsMenuItem",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1384252500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15014076300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_CreateScheme",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1454652200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_SchemeName",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 624302000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_SelectRole",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1484664400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Create",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1406634800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15005639100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 3394103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5320094300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15008512000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_MasterWorkflow",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1300941500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10001578400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_SchemClassification",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1462361500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_RequestSchemClassification",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1252026500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10013791800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_ActivatechemClassification",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1250867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10012717800,
  "status": "passed"
});
formatter.match({
  "location": "OtherMethodsDef.close_Browser()"
});
formatter.result({
  "duration": 210916200,
  "status": "passed"
});
formatter.after({
  "duration": 717900,
  "status": "passed"
});
formatter.uri("TC_002_Registration_Work_Flow.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Test Case ID: TC_002"
    },
    {
      "line": 2,
      "value": "#Summary: Registration_Work_Flow"
    },
    {
      "line": 3,
      "value": "#Author: naduni.warnakulasooriya@1billiontech.com"
    }
  ],
  "line": 6,
  "name": "TC_002_Registration_Work_Flow",
  "description": "",
  "id": "tc-002-registration-work-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@TCIP-Automation"
    }
  ]
});
formatter.before({
  "duration": 1158100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "TC_002_Registration_Work_Flow",
  "description": "",
  "id": "tc-002-registration-work-flow;tc-002-registration-work-flow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user read data from excelsheet \"MW_002\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "##Login to LGIM User"
    }
  ],
  "line": 12,
  "name": "browser is open and load url",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user click on \"btn_LoginButton\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"txt_LGIMUserEmail\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter \"txt_LGIMUserPassword\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user click on \"btn_SignIn\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "##Go to Schemes"
    }
  ],
  "line": 20,
  "name": "user click on \"btn_SchemsMenuItem\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "##Navigate to created scheme"
    }
  ],
  "line": 24,
  "name": "user enter \"txt_CreatedSchemeName\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user click \"btn_CreatedSchemeName\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "##navigate to user management"
    }
  ],
  "line": 29,
  "name": "user click on \"lnk_User management\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on \"btn_add new users\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enter \"txt_e_mail Address\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enter \"txt_First Name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enter \"txt_Last Name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user select value in \"drp_Select scheme groups\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enter \"txt_Phone number\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user click on \"btn_add user\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "##Navigate to registration workflow"
    }
  ],
  "line": 44,
  "name": "user click on \"lnk_Updates\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user click on \"lnk_Regrestration\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "##Request a formal proposal from us##"
    },
    {
      "line": 50,
      "value": "##Fill Values in Asset tab"
    }
  ],
  "line": 51,
  "name": "user verify \"header_Request a formal proposal from us\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "user enter \"txt_Asset Value\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "perform mouse hover to \"txt_Asset Value Date Picker\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user click on \"btn_Asset date corner button\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user click on \"txt_Asset Value Date Picker\" datetime picker in page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user click on \"lnk_Choose Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "user click on \"lnk_Last Decade\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user click on \"btn_Select Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user click on \"lnk_Choose Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "user click on \"lnk_Select Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user pick date \"btn_Asset Value Date\" from date picker",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user select option in \"btn_Does the scheme hold assets with managers other than LGIM?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "user select option in \"btn_Do you know your target investment return above gilts?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "user enter \"txt_Target return above gilts (net of fees)\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "user select option in \"btn_Do you know your current asset allocation?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "user select option in \"btn_How do you want to enter your current asset allocation?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "user enter \"txt_UK Equity\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "user enter \"txt_Diversified Growth\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "user enter \"txt_Global Equity\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user enter \"txt_Corporate Bonds\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "user enter \"txt_Emerging Market Equity\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "user enter \"txt_Overseas Sovereign Bonds\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "user enter \"txt_High Yield Bonds\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "user enter \"txt_Nominal Gilts\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "user enter \"txt_Emerging Market Debt\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "user enter \"txt_Index-linked Gilts\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "user enter \"txt_Property\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "user enter \"txt_LDI\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "user enter \"txt_Infrastructure\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "user enter \"txt_Cash\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "user select option in \"btn_Do you know your liability hedge ratio?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "user enter \"txt_Interest rate hedge ratio (as a % of assets)\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "user enter \"txt_Inflation hedge ratio (as a % of assets)\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "user select option in \"btn_Do you know the impact of your current asset management and investment consulting fees?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "user enter \"txt_Asset management and investment advisory fees (as a % of assets)\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "user select option in \"btn_Do you want to avoid holding less liquid assets, such as property?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "user select option in \"btn_Do you want to fully integrate Environmental, Social and Governance (ESG) themes within your portfolio allocation?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 91,
      "value": "##Fill Values in Liabilities tab"
    }
  ],
  "line": 92,
  "name": "user select option in \"btn_Do you have a set of liability cashflows to upload?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "user select value in \"drp_Choose and download a template to upload your cashflows\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "user wait for \"10\" seconds",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "user click on \"btn_Download\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "user wait for \"10\" seconds",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "user upload file \"file_Upload the filled in overall cashflow\"",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "perform mouse hover to \"txt_Effective Start Date Picker\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "user click on \"btn_effective start date corner button\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "user click on \"txt_Effective Start Date Picker\" datetime picker in page",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "user click on \"lnk_Choose Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "user click on \"lnk_Last Decade\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "user click on \"btn_Select Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "user click on \"lnk_Choose Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "user click on \"lnk_Select Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "user pick date \"btn_Effective Start Date\" from date picker",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "user enter \"txt_Proportion of liabilities linked to inflation\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "user select option in \"btn_Do you have a liability value and details of the valuation basis?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "user enter \"txt_Liability value\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "user enter \"txt_What is the average margin between the liability discount rate and an appropriate reference gilt yield?\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "user wait for \"10\" seconds",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "user scroll down \"200\" pixels",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "perform mouse hover to \"txt_Value Provided Date Picker\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "user click on \"btn_Value Provided Date corner button\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "user click on \"txt_Value Provided Date Picker\" datetime picker in page",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "user click on \"lnk_Choose Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "user click on \"lnk_Last Decade\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "user click on \"btn_Select Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user click on \"lnk_Choose Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "user click on \"lnk_Select Month Liability\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "user pick date \"btn_Value Provided Date\" from date picker",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "user select value in \"drp_What sort of liability valuation basis does this value represent?\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "user wait for \"10\" seconds",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 126,
      "value": "##Fill Values in Funding tab"
    }
  ],
  "line": 127,
  "name": "user select option in \"btn_Would you like to see a projection of your funding position?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "user select option in \"btn_Do you want us to model any deficit contributions?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "user select value in \"drp_Do you want to upload a file of deficit contributions or enter them on screen?\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "user upload file \"file_Upload deficit contribution file\"",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "user select option in \"btn_Is the scheme open to future accrual of new benefits?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "user enter \"txt_What is the current annual cost of new benefit accrual?\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "user enter \"txt_What are the combined sponsor and member contributions in respect of future accrual of new benefits?\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "user select option in \"btn_Do you have a target buy-out price?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "user enter \"txt_Target buy-out price\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "perform mouse hover to \"txt_Buy out price Date Picker\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "user click on \"btn_Buy out price Date corner button\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "user click on \"txt_Buy out price Date Picker\" datetime picker in page",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "user click on \"lnk_Choose Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user click on \"lnk_Last Decade\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "user click on \"btn_Select Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "user click on \"lnk_Choose Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "user click on \"lnk_Select Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "user pick date \"btn_Buy out price Date\" from date picker",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "user select option in \"btn_Would you like to include funding level triggers?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 148,
      "value": "##Select approvers"
    }
  ],
  "line": 149,
  "name": "user wait for \"10\" seconds",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "user click \"btn_Select Approvers\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "user wait for \"10\" seconds",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 153,
      "value": "##Request formal proposal"
    }
  ],
  "line": 154,
  "name": "user click on \"btn_Request Proposal\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 157,
      "value": "##review formal proposal information"
    }
  ],
  "line": 158,
  "name": "user verify \"header_Review formal proposal information\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "user click on \"btn_Continue\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 160,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 162,
      "value": "##Publish formal proposal (LGIM)##"
    }
  ],
  "line": 163,
  "name": "user verify \"header_Publish formal proposal\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "user upload file \"file_Upload Proposal\"",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "user wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "verify option value in \"lnk_Upload Proposal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "user click on \"btn_Publish\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "user wait for \"30\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 170,
      "value": "##Review our proposal##"
    }
  ],
  "line": 171,
  "name": "user verify \"header_Review our proposal\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "verify text value in \"lbl_Pending Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 173,
  "name": "verify text value in \"lbl_Approve Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 174,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 175,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "user wait for \"30\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 179,
      "value": "##Provide scheme regulatory information##"
    }
  ],
  "line": 180,
  "name": "user verify \"header_Provide scheme regulatory information\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "user upload file \"file_Please upload the HMRC registration confirmation\"",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "verify option value in \"lnk_HMRC registration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 183,
  "name": "user upload file \"file_Please upload the latest scheme accounts\"",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "verify option value in \"lnk_latestScheme Accounts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "user upload file \"file_Upload any supporting documents requested\"",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "verify option value in \"lnk_supporting documents requested\"",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "user enter \"txt_Approximate number of members in the scheme\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "user upload file \"file_Upload latest deed of trustee appointment and removal\"",
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "verify option value in \"lnk_Trustee Appointment Document\"",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "user click on \"txt_Trust deed Date Picker\" datetime picker in page",
  "keyword": "When "
});
formatter.step({
  "line": 192,
  "name": "user click on \"lnk_Choose Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "user click on \"lnk_Last Decade\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "user click on \"btn_Select Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "user click on \"lnk_Choose Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "user click on \"lnk_Select Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 197,
  "name": "user pick date \"btn_Trust deed Date\" from date picker",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "user enter \"txt_Number of individual trustees\" into textfield",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 200,
      "value": "##Individual trustee details"
    }
  ],
  "line": 201,
  "name": "user click on \"btn_Add Individual Trustee\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 202,
  "name": "user wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 203,
  "name": "user enter \"txt_Trustee first name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "user enter \"txt_Trustee last name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 205,
  "name": "user enter \"txt_Trustee contact e-mail\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "user enter \"txt_Trustee contact number\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "user select option in \"btn_Do you want to be able to sign documents digitally?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 208,
  "name": "user click on \"btn_add primary trustee\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 211,
      "value": "##Address of trustees for correspondence"
    }
  ],
  "line": 212,
  "name": "user enter \"txt_Trustee Address\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 213,
  "name": "user enter \"txt_Trustee City\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "user enter \"txt_Trustee PostalCode\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "user click on \"btn_request\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 217,
  "name": "user wait for \"30\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 219,
      "value": "##Approve trustees, KYC, AML"
    }
  ],
  "line": 220,
  "name": "user verify \"header_Approve trustees, KYC, AML\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 221,
  "name": "verify text value in \"lbl_Pending Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "verify text value in \"lbl_Approve Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 225,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 226,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 228,
      "value": "##Generate IAA and manager letters"
    }
  ],
  "line": 229,
  "name": "user verify \"header_Generate IAA and manager letters\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 231,
  "name": "user click \"btn_Select Acceptance\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 232,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 233,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "user click \"btn_Select Signatories\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 235,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "user upload file \"file_Upload IAA documents\"",
  "keyword": "When "
});
formatter.step({
  "line": 237,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 238,
  "name": "user click on \"btn_IAA Continue\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 241,
      "value": "##Approve IAA"
    }
  ],
  "line": 242,
  "name": "user verify \"header_Approve IAA\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "verify text value in \"lbl_Pending Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 244,
  "name": "verify text value in \"lbl_Approve Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 245,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 250,
      "value": "##Publish IAA and manager letters ##"
    }
  ],
  "line": 251,
  "name": "user verify \"header_Publish IAA and manager letters\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 253,
  "name": "user click on \"Chk_Select All\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 254,
  "name": "user click on \"btn_Publish\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 257,
      "value": "##Log out from LGIM account"
    }
  ],
  "line": 258,
  "name": "perform mouse hover to \"btn_header UserName\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 259,
  "name": "user click on \"btn_signOut\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 260,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 262,
      "value": "##Login as a client user"
    }
  ],
  "line": 263,
  "name": "user click on \"btn_LoginButton\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 264,
  "name": "user enter \"txt_ClientUserEmail\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 265,
  "name": "user enter \"txt_ClientUserPassword\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 266,
  "name": "user click on \"btn_SignIn\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 267,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 269,
      "value": "##Go to Schemes"
    }
  ],
  "line": 270,
  "name": "user click on \"btn_SchemsMenuItem\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 271,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 273,
      "value": "##Navigate to created scheme"
    }
  ],
  "line": 274,
  "name": "user enter \"txt_CreatedSchemeName\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "user click \"btn_CreatedSchemeName\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 276,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 278,
      "value": "##Navigate to registration workflow"
    }
  ],
  "line": 279,
  "name": "user click on \"lnk_Updates\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 281,
  "name": "user click on \"lnk_Regrestration\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 282,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 284,
      "value": "##Review IAA and send for signing"
    }
  ],
  "line": 285,
  "name": "user verify \"header_Review IAA and send for signing\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 286,
  "name": "verify text value in \"lbl_Pending Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 287,
  "name": "verify text value in \"lbl_Approve Tile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 289,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 290,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 291,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 293,
      "value": "##Log out from Client account"
    }
  ],
  "line": 294,
  "name": "perform mouse hover to \"btn_header UserName\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 295,
  "name": "user click on \"btn_signOut\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 296,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 298,
      "value": "##Login to LGIM User"
    }
  ],
  "line": 299,
  "name": "browser is open and load url",
  "keyword": "Given "
});
formatter.step({
  "line": 300,
  "name": "user click on \"btn_LoginButton\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 301,
  "name": "user enter \"txt_LGIMUserEmail\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 302,
  "name": "user enter \"txt_LGIMUserPassword\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 303,
  "name": "user click on \"btn_SignIn\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 304,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 306,
      "value": "##Go to Schemes"
    }
  ],
  "line": 307,
  "name": "user click on \"btn_SchemsMenuItem\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 310,
      "value": "##Navigate to created scheme"
    }
  ],
  "line": 311,
  "name": "user enter \"txt_CreatedSchemeName\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 312,
  "name": "user click \"btn_CreatedSchemeName\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 313,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 315,
      "value": "##Navigate to registration workflow"
    }
  ],
  "line": 316,
  "name": "user click on \"lnk_Updates\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 317,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
  "name": "user click on \"lnk_Regrestration\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 319,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 321,
      "value": "##Sign Investment Advisory Agreement"
    }
  ],
  "line": 322,
  "name": "user verify \"header_Sign Investment Advisory Agreement\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 323,
  "name": "user scroll down \"100\" pixels",
  "keyword": "Then "
});
formatter.step({
  "line": 324,
  "name": "perform mouse hover to \"drp_Client Manual Status Change\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 325,
  "name": "user click on \"drp_Client Manual Status Change\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 326,
  "name": "perform mouse hover to \"btn_Client Manual Sign\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 327,
  "name": "user click on \"btn_Client Manual Sign\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 328,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 329,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "user click on \"lnk_Sign Investment Advisory Agreement\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 332,
  "name": "perform mouse hover to \"drp_LGIM Manual Status Change\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 333,
  "name": "user click on \"drp_LGIM Manual Status Change\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 334,
  "name": "perform mouse hover to \"btn_LGIM Manual Sign\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 335,
  "name": "user click on \"btn_LGIM Manual Sign\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 336,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 337,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "user click on \"lnk_Sign Investment Advisory Agreement\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 340,
  "name": "perform mouse hover to \"drp_director Manual Status Change\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 341,
  "name": "user click on \"drp_director Manual Status Change\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "perform mouse hover to \"btn_director Manual Sign\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 343,
  "name": "user click on \"btn_director Manual Sign\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 344,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "user wait for \"60\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 346,
  "name": "user click on \"btn_Continue\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 347,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 349,
      "value": "##Provide data for investment advice"
    }
  ],
  "line": 350,
  "name": "user verify \"header_Provide data for investment advice\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 352,
  "name": "user select value in \"drp_Fee payment method\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 353,
  "name": "user enter \"txt_Trustee bank account name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 354,
  "name": "user enter \"txt_Trustee bank account number\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 355,
  "name": "user enter \"txt_Trustee bank account sort code\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 356,
  "name": "user enter \"txt_Trustee bank name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 357,
  "name": "user select value in \"drp_End month for annual report\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 358,
  "name": "user select value in \"drp_End date for annual report\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 359,
  "name": "user select option in \"btn_Does the scheme have AVCs?\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 360,
  "name": "user enter \"txt_Name of AVC provider\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 361,
  "name": "user enter \"txt_Describe the type of AVC funds held\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 362,
  "name": "user enter \"txt_Scheme actuary firm name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 363,
  "name": "user enter \"txt_Scheme actuary individual name\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 364,
  "name": "user enter \"txt_Scheme actuary email\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 365,
  "name": "user enter \"txt_Scheme actuary contact number\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 366,
  "name": "user click on \"btn_Request Advice\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 367,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 369,
      "value": "##Approve data for investment advice##"
    }
  ],
  "line": 370,
  "name": "user verify \"header_Approve data for investment advice\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 371,
  "name": "user click on \"tab_IM Fee\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 372,
  "name": "user select option in \"btn_Override standard fees?\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 373,
  "name": "user enter \"txt_Investment management fee for scheme (£ element)\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 374,
  "name": "user enter \"txt_Investment management fee for scheme (% element)\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 375,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 376,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 377,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 378,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 379,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 381,
      "value": "##Generate advice and PMC legal docs"
    }
  ],
  "line": 382,
  "name": "user verify \"header_Generate advice and PMC legal docs\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 383,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 384,
  "name": "user click \"btn_Select Acceptance\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 385,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 386,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 387,
  "name": "user click \"btn_Select Signatories\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 388,
  "name": "user click on \"btn_Next\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 389,
  "name": "user upload file \"file_Upload Advisory Report\"",
  "keyword": "When "
});
formatter.step({
  "line": 390,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 391,
  "name": "user upload file \"file_Upload IMA\"",
  "keyword": "When "
});
formatter.step({
  "line": 392,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 393,
  "name": "user upload file \"file_Upload PMC Proposal\"",
  "keyword": "When "
});
formatter.step({
  "line": 394,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 395,
  "name": "user upload file \"file_Upload Sponsor consultation letter\"",
  "keyword": "When "
});
formatter.step({
  "line": 396,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 397,
  "name": "user upload file \"file_Upload Letter to actuary\"",
  "keyword": "When "
});
formatter.step({
  "line": 398,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 399,
  "name": "user click on \"btn_IAA Continue\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 400,
  "name": "user wait for \"30\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 402,
      "value": "#Approve Advisory Report"
    }
  ],
  "line": 403,
  "name": "user click on \"lnk_Approve advisory report (LGIM)\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 404,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 405,
  "name": "user verify \"header_Approve Advisory Report\" header in page",
  "keyword": "When "
});
formatter.step({
  "line": 406,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 407,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 408,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 409,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 410,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 412,
      "value": "#Approve IMA"
    }
  ],
  "line": 413,
  "name": "user click on \"lnk_Approve IMA (LGIM)\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 414,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 415,
  "name": "user verify \"header_Approve IMA\" header in page",
  "keyword": "When "
});
formatter.step({
  "line": 416,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 417,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 418,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 419,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 420,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 422,
      "value": "#Approve PMC Policy"
    }
  ],
  "line": 423,
  "name": "user click on \"lnk_Approve PMC Policy (LGIM)\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 424,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 425,
  "name": "user verify \"header_Approve PMC Policy\" header in page",
  "keyword": "When "
});
formatter.step({
  "line": 426,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 427,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 428,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 429,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 430,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 432,
      "value": "##Publish advice and PMC legal docs (LGIM)"
    }
  ],
  "line": 433,
  "name": "user click on \"lnk_Publish advice and PMC legal docs (LGIM)\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 434,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 435,
  "name": "user verify \"header_Publish advice and PMC legal docs\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 436,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 437,
  "name": "user click on \"Chk_Select All\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 438,
  "name": "user click on \"btn_Publish\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 439,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 441,
      "value": "##Log out from LGIM account"
    }
  ],
  "line": 442,
  "name": "perform mouse hover to \"btn_header UserName\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 443,
  "name": "user click on \"btn_signOut\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 444,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 446,
      "value": "##Login as a client user"
    }
  ],
  "line": 447,
  "name": "user click on \"btn_LoginButton\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 448,
  "name": "user enter \"txt_ClientUserEmail\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 449,
  "name": "user enter \"txt_ClientUserPassword\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 450,
  "name": "user click on \"btn_SignIn\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 451,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 453,
      "value": "##Go to Schemes"
    }
  ],
  "line": 454,
  "name": "user click on \"btn_SchemsMenuItem\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 455,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 457,
      "value": "##Navigate to created scheme"
    }
  ],
  "line": 458,
  "name": "user enter \"txt_CreatedSchemeName\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 459,
  "name": "user click \"btn_CreatedSchemeName\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 460,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 462,
      "value": "##Navigate to registration workflow"
    }
  ],
  "line": 463,
  "name": "user click on \"lnk_Updates\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 465,
  "name": "user click on \"lnk_Regrestration\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 466,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 468,
      "value": "#Review investment advice"
    }
  ],
  "line": 469,
  "name": "user click on \"lnk_Review investment advice\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 470,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 471,
  "name": "user verify \"header_Review investment advice\" header in page",
  "keyword": "When "
});
formatter.step({
  "line": 472,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 473,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 474,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 475,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 476,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 478,
      "value": "#Review Investment Management Agreement"
    }
  ],
  "line": 479,
  "name": "user click on \"lnk_Review Investment Management Agreement\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 480,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 481,
  "name": "user verify \"header_Review IMA and send for signing\" header in page",
  "keyword": "When "
});
formatter.step({
  "line": 482,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 483,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 484,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 485,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 486,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 488,
      "value": "#Review Policy Terms"
    }
  ],
  "line": 489,
  "name": "user click on \"lnk_Review Policy Terms\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 490,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 491,
  "name": "user verify \"header_Review Policy Terms and send for signing\" header in page",
  "keyword": "When "
});
formatter.step({
  "line": 492,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 493,
  "name": "user click on \"btn_Approve\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 494,
  "name": "user enter \"txt_Approve Comment\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 495,
  "name": "user click on \"btn_Submit Approval\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 496,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 498,
      "value": "##Download draft consultation letters##"
    }
  ],
  "line": 499,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 500,
  "name": "user verify \"header_Sponsor consultation letter \u0026 letter to actuary\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 501,
  "name": "user click on \"lnk_Sponsor consultation letter\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 502,
  "name": "user click on \"lnk_Letter to actuary\" in page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 504,
      "value": "##Log out from Client account"
    }
  ],
  "line": 505,
  "name": "perform mouse hover to \"btn_header UserName\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 506,
  "name": "user click on \"btn_signOut\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 507,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 509,
      "value": "##Login to LGIM User"
    }
  ],
  "line": 510,
  "name": "browser is open and load url",
  "keyword": "Given "
});
formatter.step({
  "line": 511,
  "name": "user click on \"btn_LoginButton\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 512,
  "name": "user enter \"txt_LGIMUserEmail\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 513,
  "name": "user enter \"txt_LGIMUserPassword\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 514,
  "name": "user click on \"btn_SignIn\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 515,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 517,
      "value": "##Go to Schemes"
    }
  ],
  "line": 518,
  "name": "user click on \"btn_SchemsMenuItem\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 519,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 521,
      "value": "##Navigate to created scheme"
    }
  ],
  "line": 522,
  "name": "user enter \"txt_CreatedSchemeName\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 523,
  "name": "user click \"btn_CreatedSchemeName\" dynamic button in page",
  "keyword": "When "
});
formatter.step({
  "line": 524,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 526,
      "value": "##Navigate to registration workflow"
    }
  ],
  "line": 527,
  "name": "user click on \"lnk_Updates\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 528,
  "name": "user wait for \"20\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 529,
  "name": "user click on \"lnk_Regrestration\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 530,
  "name": "user wait for \"15\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 532,
      "value": "##Sign Investment Management Agreement"
    }
  ],
  "line": 533,
  "name": "user click on \"lnk_Sign Investment Management Agreement\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 534,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 535,
  "name": "user verify \"header_Investment Management Agreement and Policy Terms: Execution status\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 536,
  "name": "user scroll down \"100\" pixels",
  "keyword": "Then "
});
formatter.step({
  "line": 537,
  "name": "user select value in \"drp_Client (Investment Management Agreement) Manual Status Change\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 538,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 539,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 540,
  "name": "user click on \"lnk_Sign Investment Management Agreement\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 541,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 542,
  "name": "user select value in \"drp_Accepted by LGIM (Investment Management Agreement) Manual Status Change\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 543,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 544,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 545,
  "name": "user click on \"lnk_Sign Investment Management Agreement\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 546,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 547,
  "name": "user select value in \"drp_Directors Manual Status Change\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 548,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 549,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 550,
  "name": "user click on \"lnk_Sign Investment Management Agreement\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 551,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 552,
  "name": "user select value in \"drp_Client (Policy Terms) Manual Status Change\" dropdown in page",
  "keyword": "When "
});
formatter.step({
  "line": 553,
  "name": "Wait for element \"layer_loading\" invisible",
  "keyword": "Then "
});
formatter.step({
  "line": 554,
  "name": "user wait for \"60\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 555,
  "name": "user click on \"btn_Continue\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 556,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 558,
      "value": "##Activate client account (LGIM)##"
    }
  ],
  "line": 559,
  "name": "user verify \"header_Activate client account\" header in page",
  "keyword": "Then "
});
formatter.step({
  "line": 560,
  "name": "user wait for \"5\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 561,
  "name": "user enter \"txt_PMC policy number\" into textfield",
  "keyword": "When "
});
formatter.step({
  "line": 562,
  "name": "user click on \"btn_Inception date corner button\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 563,
  "name": "user click on \"txt_Inception date Picker\" datetime picker in page",
  "keyword": "When "
});
formatter.step({
  "line": 564,
  "name": "user click on \"lnk_Choose Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 565,
  "name": "user click on \"lnk_Last Decade\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 566,
  "name": "user click on \"btn_Select Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 567,
  "name": "user click on \"lnk_Choose Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 568,
  "name": "user click on \"lnk_Select Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 569,
  "name": "user pick date \"btn_Inception date\" from date picker",
  "keyword": "When "
});
formatter.step({
  "line": 570,
  "name": "user wait for \"5\" seconds",
  "keyword": "When "
});
formatter.step({
  "line": 571,
  "name": "user upload file \"file_upload PMC policy document\"",
  "keyword": "When "
});
formatter.step({
  "line": 572,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 573,
  "name": "user click on \"btn_Proxy adoption date corner button\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 574,
  "name": "user click on \"txt_Proxy adoption date Picker\" datetime picker in page",
  "keyword": "When "
});
formatter.step({
  "line": 575,
  "name": "user click on \"lnk_Choose Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 576,
  "name": "user click on \"lnk_Last Decade\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 577,
  "name": "user click on \"btn_Select Year\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 578,
  "name": "user click on \"lnk_Choose Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 579,
  "name": "user click on \"lnk_Select Month\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 580,
  "name": "user pick date \"btn_Proxy adoption date\" from date picker",
  "keyword": "When "
});
formatter.step({
  "line": 581,
  "name": "user wait for \"5\" seconds",
  "keyword": "When "
});
formatter.step({
  "line": 582,
  "name": "user click on \"btn_Activate\" in page",
  "keyword": "When "
});
formatter.step({
  "line": 583,
  "name": "user wait for \"10\" seconds",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MW_002",
      "offset": 32
    }
  ],
  "location": "OtherMethodsDef.user_read_data_from_excelsheet(String)"
});
formatter.result({
  "duration": 147594600,
  "status": "passed"
});
formatter.match({
  "location": "OtherMethodsDef.browser_is_open_and_load_url()"
});
formatter.result({
  "duration": 9373647100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LoginButton",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1277154300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserEmail",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 946751400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserPassword",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 469141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SignIn",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1249964400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15011761400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SchemsMenuItem",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1370996300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10012825400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 1109103400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5295011900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15010549000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_User management",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1305643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10015591400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_add new users",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1332070500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5008173100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_e_mail Address",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 736777000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_First Name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 492446700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Last Name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 387425900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Select scheme groups",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1411822700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Phone number",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 566057000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10009471800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_add user",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1271038000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10002229900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Updates",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1243657700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20011526100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Regrestration",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1279648300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15003425400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Request a formal proposal from us",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4192069600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5015365100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Asset Value",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 700403900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Asset Value Date Picker",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 220055600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Asset date corner button",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1255101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Asset Value Date Picker",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_datetime_picker_in_page(String)"
});
formatter.result({
  "duration": 2357887500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1229384000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Last Decade",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1211627700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1226516900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1242474100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Select Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1240335100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Asset Value Date",
      "offset": 16
    }
  ],
  "location": "TextFieldDef.user_pick_date_from_date_picker(String)"
});
formatter.result({
  "duration": 1305820700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Does the scheme hold assets with managers other than LGIM?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2308409500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you know your target investment return above gilts?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2379213600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Target return above gilts (net of fees)",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 386544300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you know your current asset allocation?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2335284500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_How do you want to enter your current asset allocation?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2414002000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_UK Equity",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 433986700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Diversified Growth",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 420238200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Global Equity",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 462190000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Corporate Bonds",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 396603600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Emerging Market Equity",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 425797800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Overseas Sovereign Bonds",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 407770700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_High Yield Bonds",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 385811500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Nominal Gilts",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 402140900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Emerging Market Debt",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 433322700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Index-linked Gilts",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 440242600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Property",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 349505800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LDI",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 483188300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Infrastructure",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 402224800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Cash",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 492498100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you know your liability hedge ratio?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2273087600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Interest rate hedge ratio (as a % of assets)",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 473051000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Inflation hedge ratio (as a % of assets)",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 407248200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you know the impact of your current asset management and investment consulting fees?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2342759000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Asset management and investment advisory fees (as a % of assets)",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 498766800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you want to avoid holding less liquid assets, such as property?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2418323300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you want to fully integrate Environmental, Social and Governance (ESG) themes within your portfolio allocation?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2249833400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1241572600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you have a set of liability cashflows to upload?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2409787200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Choose and download a template to upload your cashflows",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1542122500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10013826400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Download",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1241510900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10009197200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload the filled in overall cashflow",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17376129700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Effective Start Date Picker",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 282012300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_effective start date corner button",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1236703300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Effective Start Date Picker",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_datetime_picker_in_page(String)"
});
formatter.result({
  "duration": 2287574300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1244510000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Last Decade",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1210186800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1223451900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1211767000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Select Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1221963300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Effective Start Date",
      "offset": 16
    }
  ],
  "location": "TextFieldDef.user_pick_date_from_date_picker(String)"
});
formatter.result({
  "duration": 1372240200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Proportion of liabilities linked to inflation",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 491882700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you have a liability value and details of the valuation basis?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2420806200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Liability value",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 871520100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_What is the average margin between the liability discount rate and an appropriate reference gilt yield?",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 393355600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10014819000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "OtherMethodsDef.user_perform_scroll_down(int)"
});
formatter.result({
  "duration": 61037100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Value Provided Date Picker",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 216914900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Value Provided Date corner button",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1230032900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Value Provided Date Picker",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_datetime_picker_in_page(String)"
});
formatter.result({
  "duration": 2208129700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1199727700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Last Decade",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1200421700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1194221200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1190280800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Select Month Liability",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1233057600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Value Provided Date",
      "offset": 16
    }
  ],
  "location": "TextFieldDef.user_pick_date_from_date_picker(String)"
});
formatter.result({
  "duration": 1359109700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_What sort of liability valuation basis does this value represent?",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1420800800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1283541800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10009168600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Would you like to see a projection of your funding position?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2452762900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you want us to model any deficit contributions?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2377073800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Do you want to upload a file of deficit contributions or enter them on screen?",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1509850200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload deficit contribution file",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17245332800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Is the scheme open to future accrual of new benefits?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2449915800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_What is the current annual cost of new benefit accrual?",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 671030200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_What are the combined sponsor and member contributions in respect of future accrual of new benefits?",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 616079700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you have a target buy-out price?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2397376800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Target buy-out price",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 971991600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Buy out price Date Picker",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 216939700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Buy out price Date corner button",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1226735200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Buy out price Date Picker",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_datetime_picker_in_page(String)"
});
formatter.result({
  "duration": 2265138900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1223552900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Last Decade",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1174281600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1213458600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1246859300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Select Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1236887200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Buy out price Date",
      "offset": 16
    }
  ],
  "location": "TextFieldDef.user_pick_date_from_date_picker(String)"
});
formatter.result({
  "duration": 1370100400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Would you like to include funding level triggers?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2400801000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1244880900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10004331900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Approvers",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5364480000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10013249900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Request Proposal",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1373275300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20008163100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Review formal proposal information",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4249008100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Continue",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1406380100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20013223100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Publish formal proposal",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4163789400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload Proposal",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17267929900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5005237700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Upload Proposal",
      "offset": 24
    }
  ],
  "location": "VerificationsDef.user_verify_Option_Value(String)"
});
formatter.result({
  "duration": 213847000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Publish",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1302679700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 30012294100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Review our proposal",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4197260000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Pending Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 193163200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Approve Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 139950700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1252415400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 409480700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1342677700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 30012317400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Provide scheme regulatory information",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4204025700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Please upload the HMRC registration confirmation",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17244578100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_HMRC registration",
      "offset": 24
    }
  ],
  "location": "VerificationsDef.user_verify_Option_Value(String)"
});
formatter.result({
  "duration": 180010300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Please upload the latest scheme accounts",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17241183900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_latestScheme Accounts",
      "offset": 24
    }
  ],
  "location": "VerificationsDef.user_verify_Option_Value(String)"
});
formatter.result({
  "duration": 212192800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload any supporting documents requested",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17239875900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_supporting documents requested",
      "offset": 24
    }
  ],
  "location": "VerificationsDef.user_verify_Option_Value(String)"
});
formatter.result({
  "duration": 227764800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approximate number of members in the scheme",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 460147500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload latest deed of trustee appointment and removal",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17219529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10014365300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Trustee Appointment Document",
      "offset": 24
    }
  ],
  "location": "VerificationsDef.user_verify_Option_Value(String)"
});
formatter.result({
  "duration": 190568700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trust deed Date Picker",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_datetime_picker_in_page(String)"
});
formatter.result({
  "duration": 1298963000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1196564100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Last Decade",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1202953500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1235990200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1208087000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Select Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1218552000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Trust deed Date",
      "offset": 16
    }
  ],
  "location": "TextFieldDef.user_pick_date_from_date_picker(String)"
});
formatter.result({
  "duration": 1388269000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Number of individual trustees",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 402025100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Add Individual Trustee",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1261145100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5014470000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee first name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 462832700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee last name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 498677400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee contact e-mail",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 552606500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee contact number",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 516094300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Do you want to be able to sign documents digitally?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2270046100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_add primary trustee",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1312313100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 9999924700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee Address",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 562528100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee City",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 693868900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee PostalCode",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 536354000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_request",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1287936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 30014998500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Approve trustees, KYC, AML",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4184726300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Pending Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 186318000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Approve Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 147439400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1217779600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 421219300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1296211100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20015136300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Generate IAA and manager letters",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4169964400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10004991800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Acceptance",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5308188200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1219202700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10007834700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Signatories",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5268957100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1185069800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload IAA documents",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17825532100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10009008400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_IAA Continue",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1267332800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10014638900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Approve IAA",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4190905800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Pending Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 196134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Approve Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 180224100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1214139800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 401055900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1274280700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20011450400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Publish IAA and manager letters",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4164111500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10001981000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chk_Select All",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1264494900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Publish",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1244611300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20009034900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_header UserName",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 265868800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_signOut",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1221358600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10007233000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LoginButton",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1274941900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_ClientUserEmail",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 530677600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_ClientUserPassword",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 537095800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SignIn",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1214405900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15014959000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SchemsMenuItem",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1281613400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10004642600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 803398200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5310116000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15013782600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Updates",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1223316400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20010627000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Regrestration",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1239480000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15009664800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Review IAA and send for signing",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4168655400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Pending Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 192926400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lbl_Approve Tile",
      "offset": 22
    }
  ],
  "location": "VerificationsDef.user_verify_text_value_in(String)"
});
formatter.result({
  "duration": 147772700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1244117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 403874200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1242194100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20010981900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_header UserName",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 234454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_signOut",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1222166500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10007877700,
  "status": "passed"
});
formatter.match({
  "location": "OtherMethodsDef.browser_is_open_and_load_url()"
});
formatter.result({
  "duration": 1392390100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LoginButton",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1245159000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserEmail",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 653359200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserPassword",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 384464500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SignIn",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1184274700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15010208900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SchemsMenuItem",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1352049000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10012977300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 962526100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5288316800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10013976100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Updates",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1270699000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10015674700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Regrestration",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1278187800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10014543400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Sign Investment Advisory Agreement",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4153950500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 18
    }
  ],
  "location": "OtherMethodsDef.user_perform_scroll_down(int)"
});
formatter.result({
  "duration": 71462000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Client Manual Status Change",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 268524400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Client Manual Status Change",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1221412100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Client Manual Sign",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 226318000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Client Manual Sign",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1241353300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 79685000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10005696700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Sign Investment Advisory Agreement",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1286041900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10001929300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_LGIM Manual Status Change",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 249013200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_LGIM Manual Status Change",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1210541300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LGIM Manual Sign",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 223243400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LGIM Manual Sign",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1257808200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 74949100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10016593100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Sign Investment Advisory Agreement",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1283540900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10009405400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_director Manual Status Change",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 214489200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_director Manual Status Change",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1169298300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_director Manual Sign",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 236734800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_director Manual Sign",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1195085500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 72163000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 60003117400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Continue",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1273188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10016225700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Provide data for investment advice",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4236836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1296575700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Fee payment method",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 2148189500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee bank account name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 1454992700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee bank account number",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 1570223400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee bank account sort code",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 967759300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Trustee bank name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 922176600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_End month for annual report",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1346443900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_End date for annual report",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1495223900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Does the scheme have AVCs?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2441864000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Name of AVC provider",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 950741000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Describe the type of AVC funds held",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 819443100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Scheme actuary firm name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 965225100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Scheme actuary individual name",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 827452400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Scheme actuary email",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 1735678100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Scheme actuary contact number",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 901441500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Request Advice",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1366789100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20015570800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Approve data for investment advice",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4270887300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tab_IM Fee",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1329175600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Override standard fees?",
      "offset": 23
    }
  ],
  "location": "ButtonsDef.user_select_option_in_in_page(String)"
});
formatter.result({
  "duration": 2351100700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Investment management fee for scheme (£ element)",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 686259300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Investment management fee for scheme (% element)",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 566649100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10001019700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1335026000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 413208100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1317621400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15005224400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Generate advice and PMC legal docs",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4160098100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10010408600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Acceptance",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5296711100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1223302000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10002930100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Signatories",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5313219800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Next",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1205785400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload Advisory Report",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17866689000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10011481900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload IMA",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17292119100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10011132800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload PMC Proposal",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17271440700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10004308200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload Sponsor consultation letter",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17248451700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10008238800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_Upload Letter to actuary",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17235033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10002554900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_IAA Continue",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1262596300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 30016418900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Approve advisory report (LGIM)",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1290151100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10010872600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Approve Advisory Report",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4161171200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10014006400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1246166700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 412379500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1274747200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15010414700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Approve IMA (LGIM)",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1298593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10003158500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Approve IMA",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4173009600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10005206800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1231395200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 402694500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1283446500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15010860400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Approve PMC Policy (LGIM)",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1266704600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10007898800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Approve PMC Policy",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4186583900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10007748700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1216027400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 413835100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1221102500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15001612900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Publish advice and PMC legal docs (LGIM)",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1296323500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10003056700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Publish advice and PMC legal docs",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4163037600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10009873300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chk_Select All",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1308535700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Publish",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1247331100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20011519400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_header UserName",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 281516400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_signOut",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1229975600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10004298400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LoginButton",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1321435000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_ClientUserEmail",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 503679700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_ClientUserPassword",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 451668500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SignIn",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1219566700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15012946700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SchemsMenuItem",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1298085600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10015961000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 815941100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5265388300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15002292000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Updates",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1255446100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20013458700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Regrestration",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1272794100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15015131000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Review investment advice",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1267618000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10004127500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Review investment advice",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4186508700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10012961400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1223445200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 411847800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1258515100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15010936200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Review Investment Management Agreement",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1240593800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10008153700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Review IMA and send for signing",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4193863800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10006461900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1205871101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 405311499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1203873500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15002281100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Review Policy Terms",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1302095600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10013272400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Review Policy Terms and send for signing",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4151250899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10014013601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Approve",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1218505900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Approve Comment",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 390888400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Submit Approval",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1245613600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15012221099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 126598399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Sponsor consultation letter \u0026 letter to actuary",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4102245199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Sponsor consultation letter",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1231029500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Letter to actuary",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1223836201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_header UserName",
      "offset": 24
    }
  ],
  "location": "ButtonsDef.user_perform_mouse_mover_to_element(String)"
});
formatter.result({
  "duration": 241816401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_signOut",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1200234500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10011031201,
  "status": "passed"
});
formatter.match({
  "location": "OtherMethodsDef.browser_is_open_and_load_url()"
});
formatter.result({
  "duration": 1839179800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_LoginButton",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1252634300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserEmail",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 771343601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_LGIMUserPassword",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 408811500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SignIn",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1224840300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15015635000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_SchemsMenuItem",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1312172700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10011406999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 940422900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_CreatedSchemeName",
      "offset": 12
    }
  ],
  "location": "ButtonsDef.user_click_dynamic_button_in_page(String)"
});
formatter.result({
  "duration": 5293558800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15004123600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Updates",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1266734800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 20009914300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Regrestration",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1273968099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 15001777399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Sign Investment Management Agreement",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1270821200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10006018000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Investment Management Agreement and Policy Terms: Execution status",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4162204500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 18
    }
  ],
  "location": "OtherMethodsDef.user_perform_scroll_down(int)"
});
formatter.result({
  "duration": 53490001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Client (Investment Management Agreement) Manual Status Change",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1442971900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 86923800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10006686000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Sign Investment Management Agreement",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1242031699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10009878300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Accepted by LGIM (Investment Management Agreement) Manual Status Change",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1409107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 92817701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10002253799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Sign Investment Management Agreement",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1235032300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10002269801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Directors Manual Status Change",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1438529100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 90166101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10011030200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Sign Investment Management Agreement",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1235891199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10012340000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drp_Client (Policy Terms) Manual Status Change",
      "offset": 22
    }
  ],
  "location": "DropDownDef.user_select_value_in_dropdown_in_page(String)"
});
formatter.result({
  "duration": 1453156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "layer_loading",
      "offset": 18
    }
  ],
  "location": "VerificationsDef.wait_for_element_invisible(String)"
});
formatter.result({
  "duration": 83673100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 60011452600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Continue",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1263243800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10003912700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header_Activate client account",
      "offset": 13
    }
  ],
  "location": "VerificationsDef.user_verify_header_in_page(String)"
});
formatter.result({
  "duration": 4145865100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5007074700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_PMC policy number",
      "offset": 12
    }
  ],
  "location": "TextFieldDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 460563800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Inception date corner button",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1229251701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Inception date Picker",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_datetime_picker_in_page(String)"
});
formatter.result({
  "duration": 2244369400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1237777299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Last Decade",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1203207200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1216131699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1229159100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Select Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1244661900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Inception date",
      "offset": 16
    }
  ],
  "location": "TextFieldDef.user_pick_date_from_date_picker(String)"
});
formatter.result({
  "duration": 1299311600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5005187099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file_upload PMC policy document",
      "offset": 18
    }
  ],
  "location": "FileTransafersDef.user_enter_textfield(String)"
});
formatter.result({
  "duration": 17335029901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 10010689900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Proxy adoption date corner button",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 1207778000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "txt_Proxy adoption date Picker",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_datetime_picker_in_page(String)"
});
formatter.result({
  "duration": 1279109300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "duration": 111108662801,
  "error_message": "java.lang.AssertionError: chrome not reachable\n  (Session info: chrome\u003d99.0.4844.84)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NADUNI-PC\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.84, chrome: {chromedriverVersion: 98.0.4758.80 (7f0488e8ba0d8..., userDataDir: C:\\Users\\NADUNI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61197}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 69145be61e6c783c684f13f14c28d33e\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027Choose a year\u0027]}\r\n\tat com.tpip.page.Buttons.user_click_on_button_in_page(Buttons.java:32)\r\n\tat com.tpip.impl.ButtonsDef.user_click_on_page(ButtonsDef.java:13)\r\n\tat ✽.When user click on \"lnk_Choose Year\" in page(TC_002_Registration_Work_Flow.feature:575)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Last Decade",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Select Year",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Choose Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "lnk_Select Month",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Proxy adoption date",
      "offset": 16
    }
  ],
  "location": "TextFieldDef.user_pick_date_from_date_picker(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_Activate",
      "offset": 15
    }
  ],
  "location": "ButtonsDef.user_click_on_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    }
  ],
  "location": "OtherMethodsDef.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12208193600,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d99.0.4844.84)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NADUNI-PC\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.84, chrome: {chromedriverVersion: 98.0.4758.80 (7f0488e8ba0d8..., userDataDir: C:\\Users\\NADUNI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61197}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 69145be61e6c783c684f13f14c28d33e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\r\n\tat com.tpip.core.Hooks.isAlertPresent(Hooks.java:94)\r\n\tat com.tpip.core.Hooks.takeScreenShot(Hooks.java:52)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat com.tpip.test.runner.TestNGRunner.feature(TestNGRunner.java:66)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1259)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
});