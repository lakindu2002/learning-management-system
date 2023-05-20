package com.tpip.core;

import org.openqa.selenium.WebDriver;

public class PageObjectFW extends Driver {

	// private static String currentScenario = CucumberHook.currentRunningScenario;
	public void getname(String path) {

		Driver driver_d = new Driver();
		String driverPath = driver_d.getDriverPath(path);
		WebDriver chromeDriver = driver_d.getChromeDriver(driverPath);
		WebDriver ieDriver = driver_d.getIEDriver(driverPath);

	}

}
