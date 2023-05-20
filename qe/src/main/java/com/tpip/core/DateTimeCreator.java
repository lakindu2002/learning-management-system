package com.tpip.core;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class DateTimeCreator {

    public static String getDate() {

        DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar cal = Calendar.getInstance();
        return sdf.format(cal.getTime());

    }

    public static String getDateTime() {

        DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Calendar cal = Calendar.getInstance();
        return sdf.format(cal.getTime());

    }

    public static String getTime() {

        DateFormat sdf = new SimpleDateFormat("HH_mm_ss");
        Calendar cal = Calendar.getInstance();
        return sdf.format(cal.getTime());
    }

    public static String getCurrentDate(int days) {

        DateFormat sdf = new SimpleDateFormat("dd");
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, days);
        return Integer.toString(cal.get(Calendar.DATE));

    }

}
