package com.tpip.core;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Logger {

//    static String pathname = SetConfigData.Windospathname;

    public final static String errorLogName = SetConfigData.Errorlogpath + "_" + DateTimeCreator.getDate() + "/" + "error_log_" + DateTimeCreator.getDate() + ".txt";

    private static void writeToLog(String className, String method, String error, String filePath) {

        File file = new File(SetConfigData.Errorlogpath);
        FileWriter fw = null;
        BufferedWriter bw = null;
        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                System.out.println("Unable To Generate Error Log File.");
            }
        }
        try {
            fw = new FileWriter(file, true);
            bw = new BufferedWriter(fw);
            bw.write(DateTimeCreator.getDateTime() + "  " + className + " >>>>> " + method + " >>>>> " + error);
            bw.newLine();
            bw.flush();
        } catch (IOException e) {
            System.out.println("Unable Write To Error Log");
            e.printStackTrace();
        } finally {
            if (fw != null) {
                try {
                    fw.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (bw != null) {
                try {
                    bw.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }

    public static void logError(String className, String method, String error) {

        writeToLog(className, method, error, errorLogName);

    }

}
