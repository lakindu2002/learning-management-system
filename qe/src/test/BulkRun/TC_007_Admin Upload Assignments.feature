#Test Case ID: TC_001
#Summary:As an institute owner or administrator, I want to be able to uploadAssignments

@TCIP-Automation
Feature: TC_007_Admin Upload Assignments

  Scenario:TC_007_Admin Upload Assignments

    Given user read data from excelsheet "TC_001"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page

    When I show the hidden tab "btn_AddAssignment"
    When user click on "btn_Assignments" in page
    When user click on "btn_AddAssignment" in page
    When user enter "txt_Assignment Title" into textfield
    When user click on "btn_Submission Date" in page
    When user enter "txt_Submission Date" into textfield
    When user enter "txt_weightage" into textfield
    When user enter "txt_Instructions" into textfield
    When user upload file "file_UploadAssignmentMeterial"
    When user click on "btn_CreateAssignment" in page

    Then close Browser

