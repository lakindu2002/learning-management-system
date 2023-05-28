#Test Case ID: TC_001
#Summary:As a student, I want to make a submission for an assessment in a course so that I can get graded.

@TCIP-Automation
Feature: TC_016_Student Submit Assignments

  Scenario: TC_016_Student Submit Assignments

    Given user read data from excelsheet "Student"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page


    When user click on "btn_Assignments" in page

    When user upload file "file_SubmitAssignmentMeterial"

    When user click on "btn_AssignmentSubmit" in page
    Then close Browser


