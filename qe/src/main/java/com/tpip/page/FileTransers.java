package com.tpip.page;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.time.Duration;
import java.time.temporal.ChronoUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.tpip.core.ExcelDataProvider;
import com.tpip.core.FileReaderManager;
import com.tpip.core.Log;
import com.tpip.core.PageObjectFW;

public class FileTransers extends PageObjectFW {

	// uploading file (csv/pdf etc.) from local machine
	public static void user_upload_file_in_page(String key) throws Throwable {

		try {
			String elementvalue = ExcelDataProvider.getMapData(key);
			String filename = ExcelDataProvider.getMapvalueData(key);

			String sFilePath = FileReaderManager.getInstance().getConfigFileReader().getMasterDataSheetPath();
			String replaceString = sFilePath.replace("MasterDataSheet.xlsx", filename);
			System.out.println(replaceString);
			WebElement elem = (new WebDriverWait(driver, Duration.of(200, ChronoUnit.MILLIS))
					.until(ExpectedConditions.elementToBeClickable(By.xpath(elementvalue))));
			elem.click();
			Thread.sleep(5000);
			StringSelection filepath = new StringSelection(replaceString);
			Toolkit.getDefaultToolkit().getSystemClipboard().setContents(filepath, null);
			// native key strokes for CTRL, V and ENTER keys
			Robot robot = new Robot();

			robot.keyPress(KeyEvent.VK_CONTROL);
			robot.keyPress(KeyEvent.VK_V);
			robot.keyRelease(KeyEvent.VK_V);
			robot.keyRelease(KeyEvent.VK_CONTROL);
			robot.keyPress(KeyEvent.VK_ENTER);
			robot.keyRelease(KeyEvent.VK_ENTER);
			Log.info("File Uploaded Successfully");
			Thread.sleep(12000);

		} catch (RuntimeException e) {
			Log.info("File not Uploaded Successfully");
			System.out.println("Failed! file upload error occured");
			throw new AssertionError(e.getMessage());
		}

	}

}
