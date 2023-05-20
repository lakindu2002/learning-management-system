package com.tpip.impl;

import com.tpip.page.FileTransers;

import cucumber.api.java.en.When;

public class FileTransafersDef {

	@When("^user upload file \"([^\"]*)\"$")
	public void user_enter_textfield(String filename) throws Throwable {

		FileTransers.user_upload_file_in_page(filename);
	}
}