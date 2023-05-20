package com.tpip.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

import com.tpip.core.ExcelDataProvider;
import com.tpip.core.FileReaderManager;
import com.tpip.core.GetFileFromDirectory;
import com.tpip.core.Log;
import com.tpip.core.PageObjectFW;
import com.tpip.core.SharedContextDataUtils;
import com.tpip.core.SoftAssertion;

import junit.framework.Assert;

import java.time.Duration;
import java.time.temporal.ChronoUnit;

public class Verifications extends PageObjectFW {

	static SoftAssert softAssert = new SoftAssert();
	private static String downloadPath = FileReaderManager.getInstance().getConfigFileReader()
			.readProperty("Downloads");

	// verify message pop up
	public static void verify_message(String Key) throws Throwable {

		try {

			String elementvalue = ExcelDataProvider.getMapData(Key);
			String textvalue = ExcelDataProvider.getMapvalueData(Key);

			WebElement msg = (new WebDriverWait(driver, Duration.of(40, ChronoUnit.MILLIS))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementvalue))));
			String textmessage = msg.getText();
			System.out.println(textmessage);
			if (msg.isEnabled() && textmessage.contains(textvalue)) {
				System.out.println("Scheme successfully created");
				Log.info("Scheme successfully created");
			} else {
				System.out.println("Scheme is not successfully created");
				Log.info("Scheme is not successfully created");
			}

		}

		catch (RuntimeException e) {
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}

	}

	// Verify any element is displayed or not (button/link etc.)
	public static void verify_item(String Key) throws Throwable {
		try {
			String elementvalue = ExcelDataProvider.getMapData(Key);
			boolean itemtext = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementvalue))).isDisplayed();
			Assert.assertEquals(itemtext, true);
			System.out.println(Key + " is Displayed");
			Log.info("User verify " + Key + " in page");
			Thread.sleep(4000);

		} catch (RuntimeException e) {
			Log.info("User verify  " + Key + " in page");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}

	}

	// verify expected value (by value attribute)
	public static void user_verify_value_in(String Key) throws Throwable {

		String elementValue = ExcelDataProvider.getMapData(Key);
		String ExpectedText = ExcelDataProvider.getMapvalueData(Key);
		try {
			WebElement textValue = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementValue)));
			String ActualText = textValue.getAttribute("value");

			softAssert.assertEquals(ActualText, ExpectedText);
			System.out.println("Test data value " + ExpectedText + " matches with actual value " + ActualText);
			Log.info("Test data value " + ExpectedText + " matches with actual value " + ActualText);
		}

		catch (RuntimeException e) {
			Log.info("Test data value " + ExpectedText + " not matches with actual value");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());

		}

	}

	// read first name and last name from personal details and store in variable
	public static void user_read_firstname_and_lastname_from(String firstnameKey, String lastnameKey) throws Throwable {

		try {
			Thread.sleep(5000);
			String elementValueFN = ExcelDataProvider.getMapData(firstnameKey);
			String elementValueLN = ExcelDataProvider.getMapData(lastnameKey);
			WebElement msgfn = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementValueFN)));
			String textFN = msgfn.getAttribute("value");
			// String textFN = msgfn.getText();
			WebElement msgln = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementValueLN)));
			String texLN = msgln.getAttribute("value");
			String userName = textFN + " " + texLN;
			SharedContextDataUtils.putDataIntoSharedContext(SharedContextDataUtils.USER_NAME_KEY, userName);
			System.out.println("User Name = " + userName);
			Log.info("User reads first and last name succesfully");
		}

		catch (RuntimeException e) {
			Log.info("User not reads first and last name succesfully");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

	// Verify audit trails messages
	public static void user_verify_audit_trail_message_as(String Key) throws Throwable {

		try {
			String elementValue = ExcelDataProvider.getMapData(Key);

			String replacedlement = elementValue.replace("CurrentUserName",
					SharedContextDataUtils.getDataFromSharedContextAsString(SharedContextDataUtils.USER_NAME_KEY));
			boolean itemtext = false;
			try {
				itemtext = (new WebDriverWait(driver, Duration.of(60, ChronoUnit.MILLIS)))
						.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement))).isDisplayed();
			} catch (Exception e) {

			}
			SoftAssertion.get().assertEquals(itemtext, true, "Audit Trail message " + Key + " not displayed");
			System.out.println(replacedlement);
			Log.info("User verify audit trail message succesfully");

		}

		catch (RuntimeException e) {
			Log.info("User failed to verify audit trail message");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}

	}

	// verify System notifications
	public static void user_verify_system_notification_for_scheme(String notificationtext, String schemaname)
			throws Throwable {

		String notificationtextvalue = ExcelDataProvider.getMapData(notificationtext);
		String schemenamevalue = ExcelDataProvider.getMapvalueData(schemaname);
		try {
			String replacedlement = notificationtextvalue.replace("SchemeName", schemenamevalue);
			boolean itemtext = false;
			try {
				itemtext = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS))
						.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement))).isDisplayed());
			} catch (Exception e) {

			}

			SoftAssertion.get().assertEquals(itemtext, true,
					"System Notification " + notificationtext + " not displayed");
			System.out.println(replacedlement);
			Log.info("Successfully verified system notification " + notificationtext + "");
		}

		catch (RuntimeException e) {
			Log.info("Unable to verified system notification " + notificationtext + "");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());

		}

	}

	// Verify Yes or No Option Value
	public static void user_verify_Option_Value(String Key) throws Throwable {

		String elementValue = ExcelDataProvider.getMapData(Key);
		String AttributeVal = ExcelDataProvider.getMapvalueData(Key);
		try {
			String replacedlement = elementValue.replace("AttributeValue", AttributeVal);
			boolean itemtext = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement))).isDisplayed();
			Assert.assertEquals(itemtext, true);
			Log.info("User verify option value " + AttributeVal + " successfully");
		}

		catch (RuntimeException e) {
			System.out.println("Failed! Unable to locate element");
			Log.info("User unable to verify option value " + AttributeVal + " successfully");
			throw new AssertionError(e.getMessage());
		}

	}

	// verify expected text (by text attribute)
	public static void user_verify_text_value_in(String Key) throws Throwable {

		try {
			String elementValue = ExcelDataProvider.getMapData(Key);
			String ExpectedText = ExcelDataProvider.getMapvalueData(Key);
			WebElement textValue = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementValue)));
			String ActualText = textValue.getText();

			Assert.assertEquals(ActualText, ExpectedText);
			System.out.println("Test data value " + ExpectedText + " matches with actual value " + ActualText);
		}

		catch (RuntimeException e) {
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}

	}

	// Verify a file downloaded or not
	public static void verify_file_is_downloaded(String Key) throws Throwable {
		try {
			String AttributeVal = ExcelDataProvider.getMapvalueData(Key);
			SoftAssertion.get().assertTrue(GetFileFromDirectory.isFileDownloaded(downloadPath, AttributeVal));

		} catch (RuntimeException e) {
			System.out.println("Failed! Unable Verify File");
			throw new AssertionError(e.getMessage());
		}

	}

	public static void verify_document_data_generation(String notificationtext, String schemaname) throws Throwable {

		String notificationtextvalue = ExcelDataProvider.getMapData(notificationtext);
		String schemenamevalue = ExcelDataProvider.getMapvalueData(schemaname);
		Thread.sleep(10000);
		String replacedlement = notificationtextvalue.replace("SchemeName", schemenamevalue);
		boolean itemtext = false;
		try {
			itemtext = checkDataGenerationNotification(replacedlement);
		} catch (Exception e) {

		} finally {
			System.out.println("notification status" + itemtext);
		}

		if (!itemtext)
			throw new AssertionError("Data is not presented");

		System.out.println("Data generation complete notofication Recieved");

	}

	private static boolean checkDataGenerationNotification(String replacedlement) throws InterruptedException {
		boolean notificationPresent = false;

		notificationPresent = driver.findElement(By.xpath(replacedlement)).isDisplayed();
		// notificationPresent = (new WebDriverWait(driver, 10))
		// .until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement))).isDisplayed();
		if (!notificationPresent) {
			Thread.sleep(180000);
			// notificationPresent = (new WebDriverWait(driver, 10))
			// .until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement))).isDisplayed();
			notificationPresent = driver.findElement(By.xpath(replacedlement)).isDisplayed();
		}

		return notificationPresent;
	}

	public static void wait_for_element_invisible(String key) throws Throwable {
		String elementValue = ExcelDataProvider.getMapData(key);
    try {


		new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)).until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(elementValue)));
		Log.info("User wait for " + key + " invisible");
    }
    
    catch (Exception e) {

		new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)).until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(elementValue)));
		Log.info("User wait for " + key + " invisible");
	}

}
}
