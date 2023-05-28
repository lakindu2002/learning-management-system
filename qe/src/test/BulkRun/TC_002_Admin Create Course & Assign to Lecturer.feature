#Test Case ID: TC_001
#Summary: As an institute owner or administrator, I want to create a course so that lecturer and students can get access to the course.

@TCIP-Automation
Feature: TC_002_Admin Create Course & Assign to Lecturer

  Scenario: TC_002_Admin Create Course & Assign to Lecturer

    Given user read data from excelsheet "TC_001"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CreateCourse" in page
    When user enter "txt_courseCode" into textfield
    When user enter "txt_coursetitle" into textfield
    When user select value in "drp_lecturer" dropdown in page
    When user click on "btn_Submit" in page

    Then close Browser



