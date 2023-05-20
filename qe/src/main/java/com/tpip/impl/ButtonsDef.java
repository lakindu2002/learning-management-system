package com.tpip.impl;

import com.tpip.page.Buttons;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.tpip.core.Driver.driver;

public class ButtonsDef {

	@When("^user click on \"([^\"]*)\" in page$")
	public void user_click_on_page(String element) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Buttons.user_click_on_button_in_page(element);
	}

	@When("^user click \"([^\"]*)\" dynamic button in page$")
	public void user_click_dynamic_button_in_page(String Key) throws Throwable {
		Buttons.user_click_dynamic_button_in_page(Key);
	}

	@When("^user select option in \"([^\"]*)\" in page$")
	public void user_select_option_in_in_page(String key) throws Throwable {
		Buttons.user_select_option_in_in_page(key);
	}

	@Then("^perform mouse hover to \"([^\"]*)\" in page$")
	public void user_perform_mouse_mover_to_element(String key) throws Throwable {
		Buttons.user_perform_mouse_mover_to_element(key);
	}

	@When("^user click on \"([^\"]*)\" datetime picker in page$")
	public void user_click_on_datetime_picker_in_page(String element) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Buttons.user_click_on_datetime_picker_in_page(element);
	}

	@When("^user click on invisible element \"([^\"]*)\" in page$")
	public void user_click_on_invisible_element_in_page(String element) throws Throwable {
		Buttons.user_click_on_invisible_element_in_page(element);

	}

	@When("^I show the hidden tab \"([^\"]*)\"$")
	public void I_show_the_hidden_tab(String element) throws Throwable {
		Buttons.I_show_the_hidden_tab(element);
	}

		@Then("the tab should be visible")
		public void verifyTabVisibility() {
			WebElement tab = driver.findElement(By.xpath("//*[@class=\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium  css-8mst5\"]\n"));
			Assert.assertTrue(tab.isDisplayed());
}
}
