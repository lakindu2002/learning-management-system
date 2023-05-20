package com.tpip.core;

import java.io.File;
import java.io.IOException;


public class GetFileFromDirectory {

	public static File getLatestFilefromDir(String dirPath) throws IOException {
		File dir = new File(dirPath);
		System.out.println("dirPath = " +dirPath);
	    File[] files = dir.listFiles();
	    if (files == null || files.length == 0) {
	        return null;
	    }
	
	    File lastModifiedFile = files[0];
	    for (int i = 1; i < files.length; i++) {
	       if (lastModifiedFile.lastModified() < files[i].lastModified()) {
	           lastModifiedFile = files[i];
	       }
	    }
	    return lastModifiedFile;
	}
	
	public static boolean isFileDownloaded(String downloadPath, String fileName) throws IOException {
		boolean flag = false;
	    File dir = new File(downloadPath);
	    System.out.println("dirPath = " +downloadPath);
	    File[] dir_contents = dir.listFiles();
	  	    
		for (int i = 0; i < dir_contents.length; i++) {
			if (dir_contents[i].getName().equals(fileName))
				flag = true;
		}

	    return flag;
	}
	
}
