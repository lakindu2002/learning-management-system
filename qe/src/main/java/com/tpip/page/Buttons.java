package com.tpip.page;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.tpip.core.ExcelDataProvider;
import com.tpip.core.Log;
import com.tpip.core.PageObjectFW;

import java.time.Duration;
import java.time.temporal.ChronoUnit;

public class Buttons extends PageObjectFW {

	// click on any button/link/radio button in any of the pages
	public static void user_click_on_button_in_page(String Key) throws Throwable {
		try {
			String elementvalue = ExcelDataProvider.getMapData(Key);

			WebDriverWait wait = new WebDriverWait(driver, Duration.of(1000, ChronoUnit.MILLIS));
			WebElement button = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(elementvalue)));
			button.click();

			Log.info("User click on button " + Key + " in page");
			Thread.sleep(10000);
		} catch (RuntimeException e) {
			Log.info("User unable to click on button " + Key + " in page");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

	// click on element which the name is dynamically changing
	public static void user_click_dynamic_button_in_page(String Key) throws Throwable {
		try {
			String elementvalue = ExcelDataProvider.getMapData(Key);
			String AttributeVal = ExcelDataProvider.getMapvalueData(Key);
			String replacedlement = elementvalue.replace("attributeValue", AttributeVal);
			System.out.println(replacedlement);

			WebDriverWait wait = new WebDriverWait(driver, Duration.of(10000, ChronoUnit.MILLIS));
			WebElement button = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement)));
			button.click();

			Log.info("User click on " + Key + " dynamic button on page");
			Thread.sleep(20000);
		} catch (RuntimeException e) {
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

	// click on element which have 2 states (eg- Yes or No Option)

	public static void user_select_option_in_in_page(String Key) throws Throwable {
		String elementvalue = ExcelDataProvider.getMapData(Key);
		String AttributeVal = ExcelDataProvider.getMapvalueData(Key);

		try {
			String replacedlement = elementvalue.replace("AttributeValue", AttributeVal);
			System.out.println(replacedlement);

			WebDriverWait wait = new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS));
			WebElement option = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement)));
			option.click();

			Log.info("User Select option " + AttributeVal + " for " + Key + "");
		} catch (RuntimeException e) {
			Log.info("User unable to Select option " + AttributeVal + " for " + Key + "");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

	// mouse mover to specific element
	public static void user_perform_mouse_mover_to_element(String Key) throws Throwable {

		Actions actions = new Actions(driver);
		String elementvalue = ExcelDataProvider.getMapData(Key);
		try {

			WebElement element = driver.findElement(By.xpath(elementvalue));
			actions.moveToElement(element).perform();
			Log.info("perform mouse hover to " + Key);
		}

		catch (RuntimeException e) {
			Log.info("User unable perform mouse hover to " + Key);
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

	public static void user_click_on_datetime_picker_in_page(String Key) throws Throwable {

		try {
			String elementvalue = ExcelDataProvider.getMapData(Key);
			WebElement button = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementvalue))));
						button.click();
			Log.info("User click on datetime picker " + Key + " in page");
		}

		catch (RuntimeException e) {

		}
	}

	// click on any button/link/radio button in any of the pages
	public static void user_click_on_invisible_element_in_page(String Key) throws Throwable {

		try {

			Thread.sleep(1000);
			String elementvalue = ExcelDataProvider.getMapData(Key);
			WebElement button = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS))
					.until(ExpectedConditions.elementToBeClickable(By.xpath(elementvalue))));
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].click()", button);
			Log.info("User click invisible button " + Key + " in page");
		}

		catch (RuntimeException e) {
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}

	}

	public static void I_show_the_hidden_tab(String Key) throws Throwable {

		try {
			String elementvalue = ExcelDataProvider.getMapData(Key);
			WebElement button = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
					.until(ExpectedConditions.presenceOfElementLocated(By.xpath(elementvalue)));
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].style.display = 'block';", button);
			Log.info("User click invisible button " + Key + " in page");
		}

		catch (RuntimeException e) {
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}

	}
}

