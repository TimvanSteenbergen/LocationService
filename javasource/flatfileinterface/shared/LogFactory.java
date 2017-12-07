package flatfileinterface.shared;

import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;

import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.logging.ILogNode;
import com.mendix.systemwideinterfaces.core.IContext;

import flatfileinterface.proxies.Log;
import flatfileinterface.proxies.LogMessageType;

public class LogFactory {

	public LogObject InitLoggers(){
		LogObject logObj = new LogObject();
		new LogMsg("Number of columns does not match defined columns, the following rows are skipped: \n", 1, false,logObj);
		new LogMsg("Unable to convert column value to long value", 2, true, logObj);
		new LogMsg("Unable to convert column value to integer value", 3, true,logObj);
		new LogMsg("Unable to convert column value to float value", 4, true,logObj);
		new LogMsg("Boolean value could not be matched to true, false,yes, no, 0 or 1", 5, true,logObj);
		new LogMsg("Unable to convert date column with given format", 6, true,logObj);
		new LogMsg("Unable to convert date column datetime format is incorrect", 7, true,logObj);
		new LogMsg("Unable to convert column value to decimal value", 8, true,logObj);
		new LogMsg("Unable to convert enumeration column value to enumeration value", 9, true,logObj);
		new LogMsg("Defined fixed lengths do not match file content", 10, false,logObj);
		new LogMsg("Unable to create entity record", 11, false,logObj);
		return logObj;
	}

	public void WriteLogs(LogObject logObj, Log logObject, IContext context, boolean logToConsole, ILogNode logger) throws CoreException{
		ArrayList<LogMsg> messages =logObj.getMessages();
		for (LogMsg logMessage : messages) {
			if(logMessage.linesAvailable){
				if(!logMessage.usesColums){
					String msgTxt = logMessage.getMsg();
					ArrayList<Integer> lines =logMessage.getLines();
					StringBuilder sb = new StringBuilder();
					sb.append(msgTxt);
					for (Integer line : lines) {
						sb.append(line).append("\n");				
					}
					Shared.CreateLogMessage(LogMessageType.Error, sb.toString(), logObject, context,logToConsole);
					Core.getLogger("FFI Import").trace(sb.toString());
				}

				else{
					String msgTxt = logMessage.getMsg();
					StringBuilder sb = new StringBuilder();
					sb.append(msgTxt).append("<line>(<column>):\n");

					List<Entry<Integer, Integer>> pairs = logMessage.getPairList();
					for (Entry<Integer, Integer> entry : pairs) {
						sb.append(entry.getKey()).append("(").append(entry.getValue()).append(")\n");

					}
					Shared.CreateLogMessage(LogMessageType.Error, sb.toString(), logObject, context,logToConsole);
					logger.trace(sb.toString());
				}

			}
			else{
				logger.trace("no lines available for message: "+logMessage.msg);
			}
		}
	}
}
