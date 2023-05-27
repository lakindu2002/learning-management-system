#Test Case ID: TC_001
#Summary:  As a student, I should be able to view the grading and feedback by the lecturer given for my submission

@TCIP-Automation
Feature: TC_021_Student Successful View  Grading and Feedback

  Scenario: TC_021_Student Successful View  Grading and Feedback

    Given user read data from excelsheet "Student"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page

    When user click on "btn_Assignments" in page

    Then verify value in "lbl_FinalMarks"
    Then verify value in "lbl_Feedback"

    Then close Browser


