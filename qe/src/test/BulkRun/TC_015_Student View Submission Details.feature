#Test Case ID: TC_001
#Summary:As a Student, I want to be able view student submissions for the assignments

@TCIP-Automation
Feature: TC_015_Student View Submission Details

  Scenario: TTC_015_Student View Submission Details

    Given user read data from excelsheet "Student"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page


    When user click on "btn_Assignments" in page

    Then verify value in "lbl_Assignment Weight"
    Then verify value in "lbl_Date"

    Then close Browser


