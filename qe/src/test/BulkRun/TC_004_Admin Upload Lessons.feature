#Test Case ID: TC_001
#Summary: As an institute owner or administrator, I want to be able to upload Lessons

@TCIP-Automation
Feature: TC_004_Admin Upload Lessons

  Scenario: TC_004_Admin Upload Lessons

    Given user read data from excelsheet "TC_001"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CourseAdd" in page
    When user click on "btn_AddLesson" in page
    When user enter "txt_lessonTitle" into textfield
    When user enter "txt_Content" into textfield
    When user upload file "file_UploadMeterial"
    When user click on "btn_CreateLesson" in page

    Then close Browser


