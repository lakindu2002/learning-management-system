package com.tpip.core;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtils {

	private static XSSFSheet ExcelWSheet;
	private static XSSFWorkbook ExcelWBook;
	private static XSSFCell Cell;
	private static XSSFRow Row;
	public static String sheetname;

//This method is to set the File path and to open the Excel file, Pass Excel Path and Sheetname as Arguments to this method

	public static void setExcelFile(String SheetName) throws Exception {

		try {

			// Open the Excel file
			String getMasterDataSheetPath = FileReaderManager.getInstance().getConfigFileReader()
					.getMasterDataSheetPath();
			FileInputStream ExcelFile = new FileInputStream(getMasterDataSheetPath);

			// Access the required test data sheet

			ExcelWBook = new XSSFWorkbook(ExcelFile);

			ExcelWSheet = ExcelWBook.getSheet(SheetName);

			sheetname = SheetName;

		} catch (Exception e) {

			throw (e);

		}

	}

//This method is to read the test data from the Excel cell, in this we are passing parameters as Row num and Col num

	public static String getCellData(int RowNum, int ColNum) throws Exception {

		try {

			Cell = ExcelWSheet.getRow(RowNum).getCell(ColNum);

			String CellData = Cell.getStringCellValue();

			return CellData;

		} catch (Exception e) {

			return "";

		}

	}

//This method is to write in the Excel cell, Row num and Col num are the parameters

	public static void setCellData(String Result, int RowNum, int ColNum) throws Exception {

		try {

			Row = ExcelWSheet.getRow(RowNum);

			// Cell = Row.getCell(ColNum, Row.g);
			Cell = Row.getCell(ColNum);

			if (Cell == null) {

				Cell = Row.createCell(ColNum);

				Cell.setCellValue(Result);

			} else {

				Cell.setCellValue(Result);

			}

// Constant variables Test Data path and Test Data file name

			FileOutputStream fileOut = new FileOutputStream(Constant.Path_TestData + Constant.File_TestData);

			ExcelWBook.write(fileOut);

			fileOut.flush();

			fileOut.close();

		} catch (Exception e) {

			throw (e);

		}

	}

// Delete specific excel file in given location

	public static void DeleteFiles() throws Exception {

		ConfigFileReader configFileReader = new ConfigFileReader();
		File file = new File(configFileReader.getFileExportPath());

		if (file.delete()) {
			System.out.println("Excel File with same name found & deleted");
		} else
			System.out.println("Excel File with same name doesn't exists in given location");

	}

	// Read Cell in excel file
	@SuppressWarnings("resource")
	public static String ReadExcelCell(int row, int cell) throws Exception {

		Thread.sleep(10000);

		ConfigFileReader configFileReader = new ConfigFileReader();
		// InputStream ExcelFileToRead = new
		// FileInputStream(configFileReader.getFileExportPath());
		InputStream ReadExcelFIle = new FileInputStream(configFileReader.getFileExportPath());
		@SuppressWarnings("resource")
		XSSFWorkbook WB = new XSSFWorkbook(ReadExcelFIle);
		@SuppressWarnings("unused")
		XSSFWorkbook Test = new XSSFWorkbook();
		// String Value = WB.getSheetAt(0).getRow(2).getCell(0).getStringCellValue();
		String Value = WB.getSheetAt(0).getRow(row).getCell(cell).getStringCellValue();
		return Value;

	}

}
