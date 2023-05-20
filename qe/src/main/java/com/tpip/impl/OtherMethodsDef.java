package com.tpip.impl;

import com.tpip.core.ExcelUtils;
import com.tpip.page.OtherMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class OtherMethodsDef {

	@Given("^user read data from excelsheet \"([^\"]*)\"$")
	public void user_read_data_from_excelsheet(String tc1) throws Throwable {
		ExcelUtils.setExcelFile(tc1);
	}

	@Given("^browser is open and load url$")
	public void browser_is_open_and_load_url() throws Throwable {
		OtherMethods.setDriver();
	}

	@Then("^close Browser$")
	public void close_Browser() throws Throwable {
		OtherMethods.close_browser();
	}

	@Then("^close all tabs$")
	public void close_All_Tabs() throws Throwable {
		OtherMethods.close_All_Tabs();
	}

	@Then("^user wait for \"([^\"]*)\" seconds$")
	public void user_wait_for_seconds(int sec) throws Throwable {
		OtherMethods.user_wait_for_seconds(sec);
	}

	@Then("^user scroll down \"([^\"]*)\" pixels$")
	public void user_perform_scroll_down(int pixel) throws Throwable {
		OtherMethods.user_perform_scroll_down(pixel);
	}

	@Given("^browser is open and load gmail$")
	public void browser_is_open_and_load_gmail() throws Throwable {
		OtherMethods.Loadgmail();
	}

	@Then("^user switch into second window$")
	public void user_switch_into_second_window() throws Throwable {
		OtherMethods.user_switch_into_Second_window();
	}

	@Then("^user switch into first window$")
	public void user_switch_into_first_window() throws Throwable {
		OtherMethods.user_switch_into_First_window();
	}

	@Then("^user switch into third window$")
	public void user_switch_into_third_window() throws Throwable {
		OtherMethods.user_switch_into_Third_window();
	}

	@Then("^end of the test Script$")
	public void end_of_the_test_Script() throws Throwable {

		OtherMethods.Then_end_of_the_test_Script();
	}
}
