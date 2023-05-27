#Test Case ID: TC_001
#Summary: User_Login

@TCIP-Automation
Feature: TC_001_Create_Course

  Scenario: TC_001_Add_a_Course

    Given user read data from excelsheet "TC_001"

  ##Login to LGIM User
    Given browser is open and load url
    When user enter "txt_OwnerUserEmail" into textfield
    When user enter "txt_OwnerUserPassword" into textfield
    When user click on "btn_SignIn" in page

    When user click on "btn_Courses" in page
    When user click on "btn_CreateCourse" in page
    When user enter "txt_courseCode" into textfield
    When user enter "txt_coursetitle" into textfield
    When user select value in "drp_lecturer" dropdown in page
    When user click on "btn_Submit" in page

    Then close Browser



