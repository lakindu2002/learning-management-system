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

public class DropDown extends PageObjectFW {

	// selecting an option in drop down
	//public static void user_select_value_in_dropdown_in_page(String Key) throws Throwable {
	///try {
	//	String elementvalue = ExcelDataProvider.getMapData(Key);
	//	String optionvalue = ExcelDataProvider.getMapvalueData(Key);

	//	WebElement fielddd = (new WebDriverWait(driver, Duration.of(120, ChronoUnit.MILLIS)))
	//			.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementvalue)));
	///	fielddd.click();

	//	WebElement option = driver.findElement(By.xpath("//li[text()='" + optionvalue + "']"));
	//	option.click();
	//	Log.info("Drop Down value " + optionvalue + " selected ");
	//}

	public static void user_select_value_in_dropdown_in_page(String Key) throws Throwable {
		try {
			String elementvalue = ExcelDataProvider.getMapData(Key);
			String optionvalue = ExcelDataProvider.getMapvalueData(Key);

			WebDriverWait wait = new WebDriverWait(driver, Duration.of(1000, ChronoUnit.MILLIS));
			WebElement fielddd = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(elementvalue)));
			fielddd.click();
			Thread.sleep(1000);
			WebElement option = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//li[text()='" + optionvalue + "']")));
			option.click();

			Log.info("Drop Down value " + optionvalue + " selected ");
		} catch (Exception e) {
			}
	}
}
