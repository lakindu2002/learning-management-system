#Test Case ID: TC_001
#Summary:As a student, Student Visibility after making the Submission

@TCIP-Automation
Feature: TC_018_Student Visibility after making the Submission

  Scenario: TC_018_Student Visibility after making the Submission

    Given user read data from excelsheet "Student"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page


    When user click on "btn_Assignments" in page
    Then verify value in "btn_ViewSubmission"

    When user click on "btn_Viewfile" in page
    Then user wait for "5" seconds
    Then user switch into second window
    Then close all tabs
    Then close Browser


