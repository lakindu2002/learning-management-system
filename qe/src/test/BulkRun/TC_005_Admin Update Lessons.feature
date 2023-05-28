#Test Case ID: TC_001
#Summary: As an institute owner or administrator, I want to be able to Update Uploaded Lessons

@TCIP-Automation
Feature: TC_005_Admin Update Lessons

  Scenario: TC_005_Admin Update Lessons

    Given user read data from excelsheet "TC_001"

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

    Then close Browser





