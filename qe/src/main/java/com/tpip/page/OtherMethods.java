package com.tpip.page;

import java.util.ArrayList;

import org.openqa.selenium.JavascriptExecutor;

import com.tpip.core.FileReaderManager;
import com.tpip.core.Log;
import com.tpip.core.PageObjectFW;
import com.tpip.core.SoftAssertion;

public class OtherMethods extends PageObjectFW {

	// set the driver
	public static void setDriver() {
		try {
			PageObjectFW pageObjectFW = new PageObjectFW();
			pageObjectFW.getname("CHROME");
			driver.manage().window().maximize();
			driver.get(FileReaderManager.getInstance().getConfigFileReader().readProperty("BaseUrl"));
			Log.info("New driver instantiated and browser is open");
		}

		catch (RuntimeException e) {
			System.out.println("Error! Browser not initialized");
			throw new AssertionError(e.getMessage());
		}

	}

	// close the browser
	public static void close_browser() throws Throwable {

		if (driver == null) {
			return;
		}
		driver.close();
		driver = null;
		Log.info("Browser is Closed");
	}

	// close all tabs
	public static void close_All_Tabs() throws Throwable {

		if (driver == null) {
			return;
		}
		driver.quit();
		driver = null;
		Log.info("close all tabs");
	}

	// Default wait
	public static void user_wait_for_seconds(int sec) throws Throwable {
		int sectomilisec = sec * 100;
		Thread.sleep(sectomilisec);
		Log.info("User wait for " + sec + " Seconds");
	}

	// Scroll down on web page
	public static void user_perform_scroll_down(int pixel) throws Throwable {
		driver.manage().window().maximize();
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,200)");
	}

	// Log into Gmail
	public static void Loadgmail() {
		try {
			PageObjectFW pageObjectFW = new PageObjectFW();
			pageObjectFW.getname("CHROME");
			driver.manage().window().maximize();
			driver.get(FileReaderManager.getInstance().getConfigFileReader().readProperty("gmailUrl"));
			Log.info("New driver instantiated and browser is open");
		}

		catch (RuntimeException e) {
			System.out.println("Error! Browser not initialized");
			throw new AssertionError(e.getMessage());
		}

	}

	// switch into second window (Giving control)
	public static void user_switch_into_Second_window() throws Throwable {

		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		// driver.switchTo().window(tabs2.get(0));
		// driver.close();
		driver.switchTo().window(tabs2.get(1));
		Log.info("Switch into second window");
	}

	// switch into First window
	public static void user_switch_into_First_window() throws Throwable {

		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs2.get(0));
		// driver.close();
		// driver.switchTo().window(tabs2.get(1));
		Log.info("Switch into first window");
	}

	// switch into First window
	public static void user_switch_into_Third_window() throws Throwable {

		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs2.get(2));
		// driver.close();
		// driver.switchTo().window(tabs2.get(1));
		Log.info("Switch into third window");
	}

	// Print all the assertion error at the end of the script
	public static void Then_end_of_the_test_Script() throws Throwable {
		SoftAssertion.assertAll();

	}

}
