package com.tpip.core;

import java.util.HashMap;
import java.util.Map;

/**
 * 
 * {link #SharedContextDataUtils} is used to share data among test cases
 *
 */
public class SharedContextDataUtils {

	public static final String USER_NAME_KEY = "user_name";
	private final static Map<String, Object> SHARED_DATA_CONTEXT_MAP = new HashMap<String, Object>();

	/**
	 * Add data into shared context for later use
	 * 
	 * @param key
	 * @param value
	 */
	public static void putDataIntoSharedContext(String key, String value) {
		SHARED_DATA_CONTEXT_MAP.put(key, value);
	}

	/**
	 * Get data from shared context as a string
	 * 
	 * @param key
	 * @return
	 */
	public static String getDataFromSharedContextAsString(String key) {

		if (SHARED_DATA_CONTEXT_MAP.containsKey(key))
			return (String) SHARED_DATA_CONTEXT_MAP.get(key);

		return "";
	}

	/**
	 * Get data from shared context as a integer
	 * 
	 * @param key
	 * @return
	 */
	public static Integer getDataFromSharedContextAsInt(String key) {

		if (SHARED_DATA_CONTEXT_MAP.containsKey(key))
			return (Integer) SHARED_DATA_CONTEXT_MAP.get(key);

		return 0;
	}
}
