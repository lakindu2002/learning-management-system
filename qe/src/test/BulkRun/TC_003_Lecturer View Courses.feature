#Test Case ID:
#Summary: As a teacher, I want to view all the courses that are assigned to me.

@TCIP-Automation
Feature: TC_003_Lecturer View Courses

  Scenario: TC_003_Lecturer View Courses

    Given user read data from excelsheet "Lecturer"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page

    Then verify value in "btn_tableCourse"

    Then close Browser



