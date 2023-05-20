package com.tpip.core;

import org.testng.asserts.SoftAssert;

public class SoftAssertion {

	public static final SoftAssert softAssert = new SoftAssert();
	
	/**
	 * Get the {@link #softAssert()} object
	 * @return
	 */
	public static SoftAssert get() {
		return softAssert;
	}
	
	/**
	 * Assert all of skipped assertion end of the test cycle
	 */
	public static void assertAll() {
		softAssert.assertAll();
	}
}
