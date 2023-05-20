package com.tpip.test.runner;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.cucumber.listener.Reporter;
import com.tpip.core.ConfigFileReader;
import com.tpip.core.Email;
import com.tpip.core.FileMover;
import com.tpip.core.FileReaderManager;
import com.tpip.page.OtherMethods;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(features = "src\\test\\BulkRun\\Admin Permissions", monochrome = true, glue = { "com.tpip.core",
		"com.tpip.impl" }, plugin = { "pretty", "html:test-output",
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
				"html:target/cucumber-reports/cucumber-pretty", "json:target/cucumber-reports/CucumberTestReport.json",
				"rerun:target/cucumber-reports/rerun.txt", })

public class TestNGRunner {

	private static TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() throws Exception {

		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());

		// Take folder location from property file
		ConfigFileReader configFileReader = new ConfigFileReader();
		File FailureScreenshotPath = new File(configFileReader.FailureScreenshotPath());
		File LogFilePath = new File("target\\logs");

		// Delete All files in ScreenshotFolder
		File directory = new File(FailureScreenshotPath + "\\");
		File logdirectory = new File(LogFilePath + "\\");

		File[] files = directory.listFiles();
		for (File file : files) {
			if (!file.delete()) {
				System.out.println("Failed to delete " + file);
			}

		}

		File[] logfiles = logdirectory.listFiles();
		for (File logfile : logfiles) {
			if (!logfile.delete()) {
				System.out.println("Failed to delete " + logfile);
			}
		}
	}

	@Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public static void writeExtentReport() throws Throwable {

		Reporter.loadXMLConfig(FileReaderManager.getInstance().getConfigFileReader().getReportConfigPath());
		Reporter.setSystemInfo("User name", System.getProperty("user.name"));
		Reporter.setSystemInfo("TimeZone", System.getProperty("user.timeZone"));
		Reporter.setSystemInfo("Machine", "Windows 10" + " " + "64 Bit");
		Reporter.setSystemInfo("Java Version", "1.8.0_144");
		Reporter.setSystemInfo("chrome", " 71.0.3578.98 ");
		testNGCucumberRunner.finish();
		OtherMethods.close_browser();
	}

	@AfterSuite
	public void flushReport() throws IOException {
		String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());

		FileMover.FileMoving(FileReaderManager.getInstance().getConfigFileReader().readProperty("sourceFilePath1"),
				FileReaderManager.getInstance().getConfigFileReader().readProperty("destinationPath1"),
				"Test_Summary_" + timeStamp + ".html");

		Email.sendFromEMail();
	}

}