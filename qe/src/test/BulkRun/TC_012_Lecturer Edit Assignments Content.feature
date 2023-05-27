#Test Case ID: TC_001
#Summary: #As a lecturer, I want to be able to edit the assignment instructions

@TCIP-Automation
Feature: TC_012_Lecturer Edit Assignments Content

  Scenario:TC_012_Lecturer Edit Assignments Content

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
    When user click on "btn_Edit" in page

    When user enter "txt_UpdateAssignment Title" into textfield
    When user enter "txt_Updateweightage" into textfield
    When user enter "txt_UpdateInstructions" into textfield
    When user upload file "file_UpdateUploadAssignmentMeterial"
    When user click on "btn_UpdateAssignment" in page

    Then close Browser

