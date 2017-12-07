package listutils;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import com.mendix.systemwideinterfaces.core.IMendixIdentifier;
import com.mendix.systemwideinterfaces.core.IMendixObjectMember;
import javax.xml.transform.*;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.Reader;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import org.apache.commons.lang.StringEscapeUtils;

public class ListUtils 
{
	
	public static java.lang.String SerializeList(IContext context, java.util.List<IMendixObject> myList) 
	{
		StringWriter outWriter = new StringWriter();
		outWriter.write("<root>\r\n");
		Object val;
		for (int i = 0; i < myList.size(); i++) {
			IMendixObject object = myList.get(i);
			outWriter.write("\t<record id=\"" + object.getId().toLong() + "\" type=\"" + object.getType() + "\"");
			Map<String, ? extends IMendixObjectMember<?>> members = object.getMembers(context);
  	                for(String key : members.keySet()) {
    		    		IMendixObjectMember<?> m = members.get(key);
				val = m.getValue(context);
				if (val != null) {
					outWriter.write(" " + m.getName() + "=\"" + StringEscapeUtils.escapeXml(val.toString()) + "\"");	
				}
			}
			outWriter.write("/>\r\n");
		}
		outWriter.write("</root>");
		return outWriter.toString();
	}

	public static String TransformSerializedList(String xmlStr, String xsltStr) 
	{
	  try{
		StringWriter writer = new StringWriter();
		TransformerFactory tFactory = new net.sf.saxon.TransformerFactoryImpl();

		Transformer transformer = tFactory.newTransformer(new StreamSource(new StringReader(xsltStr)));
	        transformer.transform(new StreamSource(new StringReader(xmlStr)),new javax.xml.transform.stream.StreamResult(writer));

	        return writer.toString();
	  } catch(Exception e){
        	return null;
   	  }
	  
	}
}
