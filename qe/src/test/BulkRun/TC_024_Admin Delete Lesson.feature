#Test Case ID: TC_001
#Summary:As an institute owner or administrator, I want to be able to edit or delete a  Lesson

@TCIP-Automation
Feature: TC_024_Admin Delete Lesson

  Scenario:TC_024_Admin Delete Lesson

    Given user read data from excelsheet "Owner"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page

    When user click on "btn_Options" in page
    When user click on "btn_Delete" in page
    Then close Browser

