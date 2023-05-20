package com.tpip.page;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.tpip.core.ExcelDataProvider;
import com.tpip.core.Log;
import com.tpip.core.PageObjectFW;

import java.time.Duration;
import java.time.temporal.ChronoUnit;

public class TextFields extends PageObjectFW {

	static WebElement element = null;

	// entering value into text field
	public static void user_enter_text_in_to_textfield(String Key) throws Throwable {

		String elementvalue = ExcelDataProvider.getMapData(Key);
		String textvalue = ExcelDataProvider.getMapvalueData(Key);
		try {
			WebElement TextFiled = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS))
					.until(ExpectedConditions.elementToBeClickable(By.xpath(elementvalue))));
			TextFiled.sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
			TextFiled.clear();
			TextFiled.sendKeys("");
			TextFiled.sendKeys(textvalue);
			Log.info("User entered " + textvalue + " in to TextFiled");
		}

		catch (RuntimeException e) {
			Log.info("User unable to enter " + textvalue + " in to TextFiled");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

	// entering date value(taken from master data sheet) into text field
	public static void user_pick_date_from_date_picker(String key) throws Throwable {

		String elementvalue = ExcelDataProvider.getMapData(key);
		String AttributeVal = ExcelDataProvider.getMapvalueData(key);

		try {
			String replacedlement = elementvalue.replace("SelectDate", AttributeVal);
			System.out.println(replacedlement);
			WebElement button = (new WebDriverWait(driver, Duration.of(80, ChronoUnit.MILLIS))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(replacedlement))));
			Thread.sleep(1000);
			button.click();
			Log.info("User select " + AttributeVal + " date");
		}

		catch (RuntimeException e) {
			Log.info("User unable to select " + AttributeVal + " date");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

	// clear value in field
	public static void clear_value_in_filed(String Key) throws Throwable {

		String elementvalue = ExcelDataProvider.getMapData(Key);
		try {
			WebElement TextFiled = (new WebDriverWait(driver, Duration.of(60, ChronoUnit.MILLIS))
					.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementvalue))));
			TextFiled.sendKeys(Keys.chord(Keys.CONTROL, "a"));
			TextFiled.sendKeys(Keys.DELETE);
			Log.info("User cleared " + elementvalue + " in to TextFiled");
		}

		catch (RuntimeException e) {
			Log.info("User unable to clear " + elementvalue + " in Filed");
			System.out.println("Failed! Unable to locate element");
			throw new AssertionError(e.getMessage());
		}
	}

}
