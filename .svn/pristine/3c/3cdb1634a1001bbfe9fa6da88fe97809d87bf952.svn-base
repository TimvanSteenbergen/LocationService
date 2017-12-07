package flatfileinterface.shared;

import java.io.File;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import mxmodelreflection.proxies.MxObjectEnum;
import mxmodelreflection.proxies.MxObjectEnumValue;
import mxmodelreflection.proxies.MxObjectMember;
import mxmodelreflection.proxies.MxObjectType;

import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import com.mendix.systemwideinterfaces.core.IMendixObjectMember;

import flatfileinterface.proxies.ColumnDefinition;
import flatfileinterface.proxies.Log;
import flatfileinterface.proxies.LogMessage;
import flatfileinterface.proxies.LogMessageType;
import flatfileinterface.shared.LogMsg;

/* @author E.P. 't Hoen
 * @version 14 March 2014
 * 
 * This shared functions lib contains the functions for the FFI module
 * The functions include:
 * Renaming files by changing the file extension
 * Creating logmessage entries
 * Converting String to Integer
 * Converting String to Float
 * Converting String to Longs
 * Converting String to Boolean
 * Converting String to Date
 * Trim function for String left and right
 * Create entity from an array of strings 
 */

public class Shared {

	/**
	 * Funtion to rename the argument file by
	 * adding a date time stamp to the extension and
	 * changing the extension to the argument extension
	 * 
	 * @param file the file to be renamed
	 * @param extension the extension to be used in renaming
	 * @param logObject the log object for relating logmessages
	 * @param context the context to be used	  
	 */

	public static void changeFileExtension(File file, String extension, Log logObject, IContext context, boolean logToConsole)  {
		/* This class will rename the argument file by
		 * adding a date time stamp to the extension and
		 * changing the extension to the argument extension
		 */
		try {
			String df ="yyyyMMddHHmmss";
			Calendar cal = Calendar.getInstance();
			SimpleDateFormat sdf = new SimpleDateFormat(df);
			String dateExt =sdf.format(cal.getTime());
			File newfile = new File(String.format("%s.%s", file.getAbsolutePath().substring(0, file.getAbsolutePath().lastIndexOf(".")), dateExt+extension));
			if(!file.renameTo(newfile))  
				try {
					CreateLogMessage(LogMessageType.Error, "File could not be renamed", "",logObject,context, logToConsole);
				} catch (CoreException ec) {
					ec.printStackTrace();
				}
		} catch (Exception e) {
			try {
				CreateLogMessage(LogMessageType.Error, "General error in rename function", e.getMessage(),logObject, context, logToConsole);
			} catch (CoreException ec) {
				ec.printStackTrace();
			}
		}

	}

	/**
	 * Function to create log messages and associate these to a log object
	 * 
	 * @param status the message type
	 * @param message that will be written in the logmessage
	 * @param stackTrace the stack trace to be written in the logmessage
	 * @param log the log object for relating logmessages	 
	 * @param context the context to be used
	 */

	public static void CreateLogMessage(LogMessageType status, String message, String stackTrace, Log log, IContext context, boolean logToConsole) throws CoreException {
		try {
			LogMessage logMsg = new LogMessage(context);
			logMsg.setMessageType(status);
			logMsg.setMessage(message);
			logMsg.setStackTrace(stackTrace);
			logMsg.setLogMessage_Log(log);		
			if (logToConsole)
				logMsg.setLogToConsole(logToConsole);
			logMsg.commit(); 
		} catch (Exception e) {
			throw new CoreException(String.format("%s -> %s", e.getStackTrace(), e.getMessage()));
		}
	}

	public static void CreateLogMessage(LogMessageType status, String message, Log log, IContext context, boolean logToConsole) throws CoreException {
		try {
			LogMessage logMsg = new LogMessage(context);
			logMsg.setMessageType(status);
			logMsg.setMessage(message);
			logMsg.setLogMessage_Log(log);		
			if (logToConsole)
				logMsg.setLogToConsole(logToConsole);
			logMsg.commit(); 
		} catch (Exception e) {
			throw new CoreException(String.format("%s -> %s", e.getStackTrace(), e.getMessage()));
		}
	}

	/**
	 * Function to convert a string to an integer value 
	 * 
	 * @param inputStr the string to be converted
	 * @param lineNum the line number for the log message
	 * @param colNum the column number for the log message
	 * @param logObject the log object for relating logmessages	 
	 * @param lineNum the line number for the log message, use -1 if no line number needs to be added
	 * @param context the context to be used
	 * @return java.lang.Integer
	 */

	private static Integer convertToInt(String inputStr,  String lineNum, int colNum, LogObject logObj) {
		try {
			Integer i = Integer.parseInt(inputStr);
			return i;
		} catch (NumberFormatException nfe) {
			LogMsg logMsg = logObj.getMsgByID(3);
			logMsg.setPAirList(Integer.parseInt(lineNum), colNum);
			return (Integer) null;
		}
	}


	/**
	 * Function to convert a string to an long value
	 * 
	 * @param inputStr the string to be converted
	 * @param lineNum the line number for the log message
	 * @param colNum the column number for the log message
	 * @param logObject the log object for relating logmessages	 
	 * @param lineNum the line number for the log message, use -1 if no line number needs to be added
	 * @param context the context to be used
	 * @return java.lang.Long
	 */
	private static Long convertToLong(String inputStr, String lineNum, int colNum, LogObject logObj) {
		try {
			Long l = Long.parseLong(inputStr);
			return l;
		} catch (NumberFormatException nfe) {
			LogMsg logMsg = logObj.getMsgByID(2);
			logMsg.setPAirList(Integer.parseInt(lineNum), colNum);
			return (Long) null;
		}
	}

	/**
	 * Function to convert a string to an float value
	 * 
	 * @param inputStr the string to be converted
	 * @param lineNum the line number for the log message
	 * @param colNum the column number for the log message
	 * @param logObject the log object for relating logmessages	 
	 * @param lineNum the line number for the log message, use -1 if no line number needs to be added
	 * @param context the context to be used
	 * @return java.lang.Float
	 */

	private static Float convertToFloat(String inputStr, String lineNum, int colNum, LogObject logObj) {
		inputStr= inputStr.replace(",",".");
		try {
			Float f = Float.parseFloat(inputStr);
			return f;
		} catch (NumberFormatException nfe) {
			LogMsg logMsg = logObj.getMsgByID(4);
			logMsg.setPAirList(Integer.parseInt(lineNum), colNum);
			return (Float) null;
		}
	}

	/**
	 * Function to convert a string to an boolean value
	 * 
	 * @param inputStr the string to be converted
	 * @param lineNum the line number for the log message
	 * @param colNum the column number for the log message
	 * @param logObject the log object for relating logmessages	 
	 * @param lineNum the line number for the log message, use -1 if no line number needs to be added
	 * @param context the context to be used
	 * @return java.lang.Boolean
	 */

	private static Boolean convertToBoolean(String inputStr,  String lineNum, int colNum, LogObject logObj) {
		if (inputStr.toLowerCase().equals("true")
				|| inputStr.toLowerCase().equals("yes") || inputStr.equals("1")) {
			return true;
		} else if (inputStr.toLowerCase().equals("false")|| inputStr.toLowerCase().equals("no") || inputStr.equals("0")) {
			return false;
		} else {
			LogMsg logMsg = logObj.getMsgByID(5);
			logMsg.setPAirList(Integer.parseInt(lineNum), colNum);
		}
		return null;
	}

	/**
	 * Function to convert a string to an date value
	 * 
	 * @param sdf the simple date format to be used in the conversion
	 * @param date the string to be converted
	 * @param lineNum the line number for the log message
	 * @param colNum the column number for the log message
	 * @param logObject the log object for relating logmessages	 
	 * @param lineNum the line number for the log message, use -1 if no line number needs to be added
	 * @param context the context to be used
	 * @return java.util.Date
	 */

	private static Date convertDateStr(String sdf, String date,  String lineNum, int colNum, LogObject logObj) throws ParseException{
		try {
			SimpleDateFormat dateFormat = new SimpleDateFormat(sdf); 
			Date convertedDate = dateFormat.parse(date);
			return convertedDate;
		} catch (Exception e) {
			LogMsg logMsg = logObj.getMsgByID(6);
			logMsg.setPAirList(Integer.parseInt(lineNum), colNum);
			return null;
		} 
	}

	/**
	 * Function to convert a string to an bigdecimal value 
	 * 
	 * @param inputStr the string to be converted
	 * @param lineNum the line number for the log message
	 * @param colNum the column number for the log message
	 * @param logObject the log object for relating logmessages	 
	 * @param lineNum the line number for the log message, use -1 if no line number needs to be added
	 * @param context the context to be used
	 * @return java.lang.BigDecimal
	 */

	private static BigDecimal convertToBigDecimal(String inputStr,  String lineNum, int colNum, LogObject logObj) {
		inputStr= inputStr.replace(",",".");
		try {
			return new BigDecimal(inputStr);
		} catch (NumberFormatException nfe) {
			LogMsg logMsg = logObj.getMsgByID(8);
			logMsg.setPAirList(Integer.parseInt(lineNum), colNum);
			return null;
		}
	}

	/**
	 * Function to trim defined characters from the right side of a string
	 * 
	 * @param string the string to be trimmed
	 * @param trimChar the character to be used for trimming
	 * @return java.lang.String
	 */

	public static String trimLeft(final String string, final char trimChar) {
		final int stringLength = string.length();
		int i;
		for (i = 0; i < stringLength && string.charAt(i) == trimChar; i++) {
			/*
			 * increment i until it is at the location of the first char that
			 * does not match the trimChar given.
			 */
		}
		if (i == 0) {
			return string;
		} else {
			return string.substring(i);
		}
	}

	/**
	 * Function to trim defined characters from the right side of a string
	 * 
	 * @param string the string to be trimmed
	 * @param trimChar the character to be used for trimming
	 * @return java.lang.String
	 */

	public static String trimRight(final String string, final char trimChar) {
		final int lastChar = string.length() - 1;
		int i;
		for (i = lastChar; i >= 0 && string.charAt(i) == trimChar; i--) {
			/*
			 * Decrement i until it is equal to the first char that does not
			 * match the trimChar given.
			 */
		}
		if (i < lastChar) {
			// the +1 is so we include the char at i
			return string.substring(0, i + 1);
		} else {
			return string;
		}
	}

	private static final char DEFAULT_TRIM = ' ';

	/**
	 * Function to create the object defined in the import configuration
	 * 
	 * @param fullEntityName the full name of the entity that needs to be created (modulename.entityname)
	 * @param triggerEvents for triggering events on the created entity record
	 * @param splitarray the array containing the strings for the attributes of the entity
	 * @param columnList the definitions of the attributes for the entity
	 * @param lineNum the line number for the log message
	 * @param context the context to be used
	 * @param logObject the log object for relating logmessages
	 */

	public static void CreateEntity(String fullEntityName,  Boolean triggerEvents,String splitarray[], List<flatfileinterface.proxies.ColumnDefinition> columnList, String lineNum, IContext context,Log logObject, List<IMendixObject> importedObjects, boolean logToConsole, LogObject logObj){
		/*
		 * v4.0.00
		 * Added transaction management
		 * v4.1.01
		 * Incorporated create entity function into the read function
		 */
		//		List<IMendixObject> ImportedObjects = new ArrayList<IMendixObject>();
		//		IContext newContext =context.getSession().createContext();
		//		newContext.startTransaction();

		boolean tryCommit = true;
		try {
			IMendixObject newEntity = Core.instantiate(context,fullEntityName);
			for (int j = 0, n = splitarray.length; j < n; j++) {
				ColumnDefinition columnDef = columnList.get(j);

				if (!splitarray[j].equals(null) && !columnDef.getSkipColumn()) {
					/* 
					 * trim left then right with value for trim character
					 */
					String trimmedColumnValue = trimLeft(splitarray[j], DEFAULT_TRIM);
					trimmedColumnValue = trimRight(trimmedColumnValue, DEFAULT_TRIM);
					switch (columnDef.getMappedType()) {
					case StringType:
						newEntity.setValue(context,columnDef.getMappedAttribute(),trimmedColumnValue);
						break;
					case IntegerType:
						if(trimmedColumnValue.length() != 0){
							Integer convInt = convertToInt(trimmedColumnValue, lineNum,j+1, logObj);
							if (convInt != null) {
								newEntity.setValue(context,columnDef.getMappedAttribute(),(int) convInt);
							}
							else 
								tryCommit = false;
						}
						break;
					case LongType:
						if(trimmedColumnValue.length() != 0){
							Long convLong = convertToLong(trimmedColumnValue,lineNum,j+1, logObj);
							if (convLong != null) {
								newEntity.setValue(context,columnDef.getMappedAttribute(),(long) convLong);
							}
							else 
								tryCommit = false;
						}
						break;
					case FloatType:
						if(trimmedColumnValue.length() != 0){
							Float convFloat = convertToFloat(trimmedColumnValue,lineNum,j+1, logObj);
							if (convFloat != null) {
								newEntity.setValue(context,columnDef.getMappedAttribute(),(float) convFloat);
							}
							else 
								tryCommit = false;
						}
						break;
					case DateTime:
						String dtf = columnDef.getDateTimeFormat();

						if (trimmedColumnValue.length() !=0){
							if (trimmedColumnValue.length() == dtf.length()){
								Date date = convertDateStr(dtf,trimmedColumnValue, lineNum,j+1, logObj);
								if(date != null){
									newEntity.setValue(context,columnDef.getMappedAttribute(),date);
								}
								else{
									tryCommit = false;
								}
							}
							else{
								tryCommit = false;
								LogMsg logMsg = logObj.getMsgByID(7);
								logMsg.setPAirList(Integer.parseInt(lineNum), j+1);

							}
						}
						break;
					case BooleanType:
						if(trimmedColumnValue.length() != 0){
							Boolean convBoolean = convertToBoolean(trimmedColumnValue,lineNum,j+1, logObj);
							if (convBoolean != null) {
								newEntity.setValue(context,columnDef.getMappedAttribute(),(boolean) convBoolean);
							}
							else 
								tryCommit = false;
						}
						break;
					case EnumType:
						if(trimmedColumnValue.length() != 0){
							String enumAttr = columnDef.getMappedAttribute();

							String xpathEnum = String.format("//%s[%s = '%s'][%s/%s/%s = '%s']",
									MxObjectEnum.entityName,
									MxObjectMember.MemberNames.AttributeName,
									enumAttr,
									MxObjectMember.MemberNames.MxObjectMember_MxObjectType,
									MxObjectType.entityName,
									MxObjectType.MemberNames.CompleteName,
									fullEntityName);

							List<IMendixObject> mxObjList = Core.retrieveXPathQuery(context, xpathEnum);
							IMendixObject mxObj = mxObjList.get(0);

							long mxObjId = mxObj.getId().toLong();

							String xpathEnumValues = String.format("//%s[%s = %s]",
									MxObjectEnumValue.entityName,
									MxObjectEnum.MemberNames.Values, mxObjId);

							List<IMendixObject> mxObjValueList = Core.retrieveXPathQuery(context, xpathEnumValues);
							boolean enumConverted= false;

							for (int x = 0; mxObjValueList.size() > x; x++) {
								IMendixObjectMember<?> text = mxObjValueList.get(x).getMember(context, "Name");
								if (trimmedColumnValue.equals(text.getValue(context))) {

									newEntity.setValue(context,columnDef.getMappedAttribute(),trimmedColumnValue);
									enumConverted = true;

									break;
								}
								if(!enumConverted){
									LogMsg logMsg = logObj.getMsgByID(9);
									logMsg.setPAirList(Integer.parseInt(lineNum), j+1);
									tryCommit = false;
								}
							}
						}
						break;

					case Currency:
						if(trimmedColumnValue.length() != 0){
							Float convCurrency = convertToFloat(trimmedColumnValue,lineNum,j+1, logObj);
							if (convCurrency != null) {
								newEntity.setValue(context,columnDef.getMappedAttribute(),(float) convCurrency);
							}
							else 
								tryCommit = false;
						}
						break;	

					case Decimal:
						if(trimmedColumnValue.length() != 0){
							BigDecimal convDecimal = convertToBigDecimal(trimmedColumnValue, lineNum, j+1, logObj);
							if (convDecimal != null) {
								newEntity.setValue(context,columnDef.getMappedAttribute(), convDecimal);
							}
						}
						else 
							tryCommit = false;
					default:
						break;

					}
				}

			}
			if(tryCommit==true){
				/*
				 * Add new entity to commit list
				 */			
				importedObjects.add(newEntity);
			}
		} catch (Exception e) {
			LogMsg logMsg = logObj.getMsgByID(11);
			logMsg.setLines(Integer.parseInt(lineNum));
		}

	}
	public static void commitAndClearList(List<IMendixObject> ImportedObjects, boolean triggerEvents, IContext newContext) {
		if(triggerEvents){
			Core.getLogger("FFI Import").trace("Commiting objects with events");
			Core.commit(newContext, ImportedObjects);
			ImportedObjects.clear();
			newContext.endTransaction();
		}
		else{
			Core.getLogger("FFI Import").trace("Commiting objects without events");
			Core.commitWithoutEvents(newContext, ImportedObjects);
			ImportedObjects.clear();
			newContext.endTransaction();
		}
	}
}
