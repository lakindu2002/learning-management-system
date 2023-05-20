package com.tpip.impl;

import com.tpip.core.ExcelUtils;
import com.tpip.page.DropDown;
import com.tpip.page.OtherMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DropDownDef {

	@When("^user select value in \"([^\"]*)\" dropdown in page$")
	public void user_select_value_in_dropdown_in_page(String Key) throws Throwable {
		DropDown.user_select_value_in_dropdown_in_page(Key);

	}

}
