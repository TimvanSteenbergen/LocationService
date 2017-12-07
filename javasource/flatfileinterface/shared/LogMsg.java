package flatfileinterface.shared;

import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class LogMsg {

	public String msg;
	public ArrayList<Integer> lines;
	public int msgID;
	public boolean linesAvailable;
	public boolean usesColums;
	public List<Map.Entry<Integer,Integer>> linesColumns;


	public LogMsg(String msg, int msgID, boolean useCols, LogObject logObj) {
		super();
		this.msg = msg;
		this.msgID = msgID;
		if(useCols){
			linesColumns = new ArrayList<>();
		}
		else{
			lines = new ArrayList<>();
		}
		linesAvailable = false;
		usesColums = useCols;
		logObj.addMessage(this);


	}

	public String getMsg() {
		return msg;
	}
	public int getMsgID() {
		return msgID;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public ArrayList<Integer> getLines() {
		return lines;
	}
	public List<Entry<Integer, Integer>> getPairList() {
		return linesColumns;
	}

	public void setLines(Integer line) {
		lines.add(line);
		if (linesAvailable == false)
			linesAvailable = true;
	}
	public void setPAirList(Integer line, Integer column) {
		Map.Entry<Integer,Integer> pair1=new AbstractMap.SimpleEntry<>(line,column);
		linesColumns.add(pair1);
		if (linesAvailable == false)
			linesAvailable = true;
	}

}