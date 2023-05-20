package com.tpip.core;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.reflect.FieldUtils;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.ScenarioImpl;

import gherkin.formatter.model.Result;

public class Hooks extends Driver {

    private static final Boolean False = null;

    private Scenario scenario;

    // Take folder location from property file
    ConfigFileReader configFileReader = new ConfigFileReader();
    File FailureScreenshotPath = new File(configFileReader.FailureScreenshotPath());

    @Before
    public void beforeScenario(Scenario scenario) {

        Log.info("**** Starting Browser ****");
        this.scenario = scenario;
        Log.startTestCase(ScenarioName());

    }

    @After
    public void takeScreenShot() throws Exception {

        if (scenario.isFailed()) {

            logError(scenario);

            // if any alert is present, Accept it
            if (isAlertPresent() == true) {
                driver.switchTo().alert().accept();
            }


            // Take screen shot of failure and record in specified location
            File srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            File Path = new File(FailureScreenshotPath + "\\" + ScenarioName() + "_" + timestamp() + ".png");
            FileUtils.copyFile(srcFile, Path);

            try {

				if (driver != null) {
					driver.quit();
					driver = null;
				}

                Log.error("Test Case Failed");
                Log.endTestCase(ScenarioName());
                Reporter.addScreenCaptureFromPath(Path.toString());

            } catch (IOException e) {
                e.printStackTrace();
            }
        } else
            Log.info("Test Case Passed");
        Log.endTestCase(ScenarioName());
    }

    // Get current time
    private String timestamp() {
        return new SimpleDateFormat("yyyy-MM-dd HH-mm-ss").format(new Date());
    }

    // Get Scenario name
    private String ScenarioName() {
        return scenario.getName();
    }

    // If any Alert pops up,
    private boolean isAlertPresent() {
        try {
            driver.switchTo().alert();
            return true;
        } catch (NoAlertPresentException Ex) {
            return false;
        }
    }

    // To get the exception after a cucumber test failure
    private static void logError(Scenario scenario) {

        Field field = FieldUtils.getField(((ScenarioImpl) scenario).getClass(), "stepResults", true);
        field.setAccessible(true);
        try {
            ArrayList<Result> results = (ArrayList<Result>) field.get(scenario);
            for (Result result : results) {
                if (result.getError() != null)
                    Log.error("Exception thrown :" + (result.getError()).toString());

            }
        } catch (Exception e) {
            Log.error("Error while logging error");
        }

    }

}
