#Test Case ID: TC_001
#Summary: TC_003_Upload_Lessons

@TCIP-Automation
Feature: TC_003_Upload_Lessons

  Scenario: TC_003_Upload_Lessons

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
    When user click on "btn_UpdateLesson" in page


    Then close Browser


