package flatfileinterface.shared;

import java.util.ArrayList;

import flatfileinterface.shared.LogMsg;;

public class LogObject {

	ArrayList<LogMsg> messages;

	public LogObject() {
		super();
		messages = new ArrayList<>();
	}

	public void addMessage(LogMsg msg){
		this.messages.add(msg);
	}

	public ArrayList<LogMsg> getMessages() {
		return messages;
	}

	public LogMsg getMsgByID(int id){
		ArrayList<LogMsg> msgList = this.getMessages();
		for (LogMsg msg : msgList) {
			if (msg.getMsgID() == id) {
				return msg; //gotcha!
			}
		}
		return null;

	}

}
