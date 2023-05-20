package com.tpip.impl;

import com.tpip.page.Verifications;

import cucumber.api.java.en.Then;

public class VerificationsDef {

	@Then("^verify message \"([^\"]*)\"$")
	public void verify_message(String Key) throws Throwable {
		Verifications.verify_message(Key);

	}

	@Then("^user verify \"([^\"]*)\" header in page$")
	public void user_verify_header_in_page(String Key) throws Throwable {
		Verifications.verify_item(Key);
	}

	@Then("^verify value in \"([^\"]*)\"$")
	public void verify_value_in(String Key) throws Throwable {
		Verifications.user_verify_value_in(Key);
	}

	@Then("^user read firstname and lastname from \"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_read_firstname_and_lastname_from(String KeyFN, String keyLN) throws Throwable {
		Verifications.user_read_firstname_and_lastname_from(KeyFN, keyLN);
	}

	@Then("^user verify audit trail message as \"([^\"]*)\"$")
	public static void user_verify_audit_trail_message_as(String key) throws Throwable {
		Verifications.user_verify_audit_trail_message_as(key);
	}

	@Then("^user verify system notification \"([^\"]*)\" for \"([^\"]*)\" scheme$")
	public void user_verify_system_notification_for_scheme(String notificationtext, String schemaname)
			throws Throwable {
		Verifications.user_verify_system_notification_for_scheme(notificationtext, schemaname);
	}

	@Then("^verify option value in \"([^\"]*)\"$")
	public static void user_verify_Option_Value(String Key) throws Throwable {
		Verifications.user_verify_Option_Value(Key);
	}

	@Then("^verify text value in \"([^\"]*)\"$")
	public static void user_verify_text_value_in(String Key) throws Throwable {
		Verifications.user_verify_text_value_in(Key);
	}

	@Then("^verify item \"([^\"]*)\"$")
	public void verify_item(String Key) throws Throwable {
		Verifications.verify_item(Key);

	}

	@Then("^Verify file \"([^\"]*)\" is downloaded$")
	public void verify_file_is_downloaded(String key) throws Throwable {

		Verifications.verify_file_is_downloaded(key);
	}

	@Then("^user verify data generation notification \"([^\"]*)\" for \"([^\"]*)\" scheme$")
	public void user_verify_data_generation_notification_for_scheme(String notificationtext, String schemaname)
			throws Throwable {
		Verifications.verify_document_data_generation(notificationtext, schemaname);
	}

	@Then("^Wait for element \"([^\"]*)\" invisible$")
	public void wait_for_element_invisible(String key) throws Throwable {
		Verifications.wait_for_element_invisible(key);
	}

}
