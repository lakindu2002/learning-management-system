package com.tpip.core;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileReader {

    private Properties properties;

    private final String SystemFilePath = System.getProperty("user.dir");
    private final String propertyFilePath = SystemFilePath + "\\src\\config\\Configuration.properties";

    public ConfigFileReader() {

        BufferedReader reader;
        try {
            reader = new BufferedReader(new FileReader(propertyFilePath));
            properties = new Properties();
            properties.load(reader);
            reader.close();
        }
        catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
        }

    }

    public String getReportConfigPath() {

        String reportConfigPath = SystemFilePath + "\\src\\config\\extentConfig.xml";
        return reportConfigPath;

    }

    public String getFileExportPath() {

        String fileExportPath = SystemFilePath + "\\src\\test\\TestData";
        return fileExportPath;

    }

    public String FailureScreenshotPath() {

        String FailureScreenshotPath = SystemFilePath + "\\src\\test\\ScreenShotFolder";
        return FailureScreenshotPath;

    }

    public String getBrandLogoPath() {

        String BrandLogoPath = SystemFilePath + "\\src\\test\\TestData\\BrandLogos";
        return BrandLogoPath;

    }
  
    //Read values from the Configuration file
    public String readProperty(String propertyName)
    {
        String Property = properties.getProperty(propertyName.trim());
              
        if (Property != null) {
            return Property;
        } else {
            throw new RuntimeException("Value not specified in the Configuration.properties file for the Key: "+propertyName);
        }
    }
    
    public String getChromeDriverPath() {


		String chromeDriverPath = SystemFilePath
				+ FileReaderManager.getInstance().getConfigFileReader().readProperty("chromeDriverPath");
    	return chromeDriverPath;

    }

    public String getIEDriverPath() {

		String IEDriverPath = SystemFilePath
				+ FileReaderManager.getInstance().getConfigFileReader().readProperty("IEDriverPath");
        return IEDriverPath;

    }

    public String getMasterDataSheetPath() {

        String MasterDataSheetPath = SystemFilePath + "\\src\\test\\TestData\\MasterDataSheet.xlsx";
        return MasterDataSheetPath;

    }

    public String getBulkrunFeatures() {

        String MasterDataSheetPath = SystemFilePath + "\\src\\test\\BulkRun";
        return MasterDataSheetPath;

    }

}
