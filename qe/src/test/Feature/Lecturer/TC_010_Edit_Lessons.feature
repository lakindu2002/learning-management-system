#Test Case ID: TC_001
#Summary: TC_010_Edit_Lessons

@TCIP-Automation
Feature: TC_010_Edit_Lessons

  Scenario: TC_010_Edit_Lessons

    Given user read data from excelsheet "TC_002"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page

    When user click on "btn_Options" in page
    When user click on "btn_Make" in page

    When user click on "btn_Options" in page
    When user click on "btn_Edit" in page
    When user enter "txt_UpdatelessonTitle" into textfield
    When user enter "txt_UpdateContent" into textfield
    When user click on "btn_CloseIcon" in page
    When user upload file "file_UpdateUploadMeterial"
    When user click on "btn_UpdateLesson" in page

    When user click on "btn_Options" in page
    When user click on "btn_Delete" in page

    Then close Browser



