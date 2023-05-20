package com.tpip.core;

import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Driver {

	public static WebDriver driver = null;

	public WebDriver getIEDriver(String path) {

		if (driver == null) {

			InternetExplorerOptions options = new InternetExplorerOptions().setPageLoadStrategy(PageLoadStrategy.NONE);
			options.ignoreZoomSettings();
			options.introduceFlakinessByIgnoringSecurityDomains();
			options.requireWindowFocus();
			
			System.setProperty("webdriver.ie.driver", path);
			driver = new InternetExplorerDriver(options);
		}
		return driver;

	}

	public WebDriver getChromeDriver(String path) {

		if (driver == null) {

			System.setProperty("webdriver.chrome.driver", path);
			ChromeOptions chromeOptions = new ChromeOptions();
			chromeOptions.addArguments("--remote-allow-origins=*");
			chromeOptions.addArguments("disable-infobars");
			chromeOptions.addArguments("start-maximized");
			chromeOptions.addArguments("disable-extensions");
			driver = new ChromeDriver(chromeOptions);

		}
		return driver;

	}

	public String getDriverPath(String driver) {

		String driver_path = FileReaderManager.getInstance().getConfigFileReader().getChromeDriverPath();
		//String driver_path = FileReaderManager.getInstance().getConfigFileReader().getIEDriverPath();
		return driver_path;

	}

	public String readPropertyFile(String KEY) {

		String key = KEY;
		Properties prop = new Properties();
		InputStream input = null;
		try {
			input = new FileInputStream("config.properties");
			prop.load(input);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return prop.getProperty(key);

	}

}
