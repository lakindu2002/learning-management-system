package com.tpip.core;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelDataProvider extends ExcelUtils {

	private static Map<String, Map<String, String>> excelFileMap = new HashMap<String, Map<String, String>>();

	private static Map<String, String> dataMap = new HashMap<String, String>();

	private static Map<String, Map<String, String>> setMapData() throws IOException {

		String sFilePath = FileReaderManager.getInstance().getConfigFileReader().getMasterDataSheetPath();
		FileInputStream file = new FileInputStream(sFilePath);
		XSSFWorkbook workbook = new XSSFWorkbook(file);

		for (int i = 0; i < workbook.getNumberOfSheets(); i++) {
			String SheetName = workbook.getSheetName(i);
			String TestCaseName = sheetname;

			if (TestCaseName.equals(SheetName)) {

				XSSFSheet sheet = workbook.getSheetAt(i);

				int lastRow = sheet.getLastRowNum();

				// Looping over entire row
				for (int j = 0; j <= lastRow; j++) {

					XSSFRow row = sheet.getRow(j);

					// 1st Cell as Value
					XSSFCell valueCell = row.getCell(1);

					// 0th Cell as Key
					XSSFCell keyCell = row.getCell(0);

					String value = valueCell.getStringCellValue().trim();
					String key = keyCell.getStringCellValue().trim();

					// Putting key & value in dataMap
					dataMap.put(key, value);

					// Putting dataMap to excelFileMap
					excelFileMap.put("DataSheet", dataMap);
				}
			}
		}
		return excelFileMap;
	}


	private static Map<String, Map<String, String>> setMapValueData() throws IOException {

		String sFilePath = FileReaderManager.getInstance().getConfigFileReader().getMasterDataSheetPath();
		FileInputStream file = new FileInputStream(sFilePath);
		XSSFWorkbook workbook = new XSSFWorkbook(file);

		for (int i = 0; i < workbook.getNumberOfSheets(); i++) {
			String SheetName = workbook.getSheetName(i);
			String TestCaseName = sheetname;

			if (TestCaseName.equals(SheetName)) {

				XSSFSheet sheet = workbook.getSheetAt(i);

				int lastRow = sheet.getLastRowNum();

				// Looping over entire row
				for (int j = 0; j <= lastRow; j++) {

					XSSFRow row = sheet.getRow(j);

					// 2nd Cell as Value
					XSSFCell valueCell = row.getCell(2);

					// 0th Cell as Key
					XSSFCell keyCell = row.getCell(0);

					String value = (Objects.nonNull(valueCell) ? valueCell.getStringCellValue().trim()
							: "Cell doesnt have data");
					String key = (Objects.nonNull(keyCell) ? keyCell.getStringCellValue().trim()
							: "Cell doesnt have data");

					// Putting key & value in dataMap
					dataMap.put(key, value);

					// Putting dataMap to excelFileMap
					excelFileMap.put("DataSheet", dataMap);
				}
			}
		}
		return excelFileMap;
	}



	public static void SetCellData(String result, String Cellname) throws IOException {
		String sFilePath = FileReaderManager.getInstance().getConfigFileReader().getMasterDataSheetPath();
		FileInputStream file = new FileInputStream(sFilePath);
		XSSFWorkbook workbook = new XSSFWorkbook(file);

		for (int i = 0; i < workbook.getNumberOfSheets(); i++) {
			String SheetName = workbook.getSheetName(i);
			String TestCaseName = sheetname;

			if (TestCaseName.equals(SheetName)) {

				XSSFSheet sheet = workbook.getSheetAt(i);

				int lastRow = sheet.getLastRowNum();

				// Looping over entire row
				for (int j = 0; j <= lastRow; j++) {

					XSSFRow row = sheet.getRow(j);

					// 0th Cell as Key
					XSSFCell keyCell = row.getCell(0);

					String key = keyCell.getStringCellValue().trim();

					if (key.equals(Cellname)) {

						XSSFCell valueCell = row.getCell(1);
						valueCell.setCellValue(result);

						try {
							FileOutputStream out = new FileOutputStream(new File(sFilePath));
							workbook.write(out);
							out.close();
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
			}
		}
	}

	// Method to retrieve value
	public static String getMapData(String key) throws IOException {

		Map<String, String> m = setMapData().get("DataSheet");
		return m.get(key);

	}


	public static String getMapvalueData(String key) throws IOException {

		Map<String, String> m = setMapValueData().get("DataSheet");
		return m.get(key);

	}


}
