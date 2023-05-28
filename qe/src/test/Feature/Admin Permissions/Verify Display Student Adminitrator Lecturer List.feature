#Test Case ID:
#Summary: As an institute owner or administrator, I want to view the users inside the institute so that I can perform an administrative action.

@TCIP-Automation
Feature: Verify Display Student_Adminitrator_Lecturer List

  Scenario: Verify Display Student_Adminitrator_Lecturer List

    Given user read data from excelsheet "Owner"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Users" in page

    When user click on "btn_Administrator" in page
    Then verify value in "btn_Administratorlist"

    When user click on "btn_Student" in page
    Then verify value in "btn_Studentlist"

    When user click on "btn_Lecturer" in page
    Then verify value in "btn_Lecturerlist"

    Then close Browser



