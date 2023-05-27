#Test Case ID:
#Summary: As an institute owner or administrator, I want to view the users inside the institute so that I can perform an administrative action.

@TCIP-Automation
Feature: Verify Display Student_Adminitrator_Lecturer List

  Scenario: Verify Display Student_Adminitrator_Lecturer List

    Given user read data from excelsheet "Lecturer"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page

    Then verify value in "btn_tableCourse"

    Then close Browser



