#Test Case ID: TC_001
#Summary:TC_006_Delete_Course

@TCIP-Automation
Feature: TC_006_Delete_Course

  Scenario:TC_006_Delete_Course

    Given user read data from excelsheet "TC_001"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page
    When user click on "btn_CourseDelete" in page

    Then close Browser

