package com.tpip.core;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static java.nio.file.Files.exists;
import static java.nio.file.Paths.get;

public class DirectoryCreator {

    public static String screenshotDir;
    public static String testOutput;
    public static String rootDir;
    public static String TestReportPath;

    public static void setUpdir(String featureName) {
        rootDir = TestReportPath + "/" + featureName;
        screenshotDir = rootDir + "/" + "Screenshots";
        testOutput = rootDir + "/" + "test-output";
        createDirectory(screenshotDir);
        createDirectory(testOutput);
    }

    public static void createDirectory(String filepathname) {

        TestReportPath = filepathname;

        Path path = get(filepathname);
        if (!exists(path)) {
            try {
                Files.createDirectories(path);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

}
