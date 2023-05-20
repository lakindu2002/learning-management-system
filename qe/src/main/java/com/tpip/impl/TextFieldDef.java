package com.tpip.impl;

import com.tpip.page.TextFields;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TextFieldDef {

	@When("^user enter \"([^\"]*)\" into textfield$")
	public void user_enter_textfield(String Key) throws Throwable {
		TextFields.user_enter_text_in_to_textfield(Key);

	}

	@When("^user pick date \"([^\"]*)\" from date picker$")
	public void user_pick_date_from_date_picker(String Key) throws Throwable {
		TextFields.user_pick_date_from_date_picker(Key);

	}

	@Then("^clear \"([^\"]*)\" in filed$")
	public void clear_value_in_filed(String Key) throws Throwable {
		TextFields.clear_value_in_filed(Key);

	}

}
