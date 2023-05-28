#Test Case ID: TC_001
#Summary:
#As a lecturer, I want to be able to toggle the visibility of the assignments I have created

@TCIP-Automation
Feature: TC_013_Lecturer Edit Assignments (Make Visible)

  Scenario: TC_013_Lecturer Edit Assignments (Make Visible)

    Given user read data from excelsheet "TC_002"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page

    When user click on "btn_Assignments" in page

    When user click on "btn_Options" in page
    When user click on "btn_Make" in page

    Then close Browser

