package com.tpip.core;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class FileMover {

	public static void FileMoving(String sourceFilePath, String destinationPath, String fileName) throws IOException {
		
	    File destinationPathObject = new File(destinationPath);
	    File sourceFilePathObject = new File(sourceFilePath);
	    
	    if ((destinationPathObject.isDirectory()) && (sourceFilePathObject.isFile()))
	    //both source and destination paths are available 
	    {
	        //creating object for File class
	        File statusFileNameObject = new File(destinationPath + "/" + fileName);
	        if (statusFileNameObject.isFile())
	        //Already file is exists in Destination path
	        {
	            //deleted File
	            statusFileNameObject.delete();
	            //paste file from source to Destination path with fileName as value of fileName argument
	            FileUtils.copyFile(sourceFilePathObject, statusFileNameObject);
	        }
	        //File is not exists in Destination path.
	        {
	            //paste file from source to Destination path with fileName as value of fileName argument
	            FileUtils.copyFile(sourceFilePathObject, statusFileNameObject);
	        }
	    }
	}	
}
