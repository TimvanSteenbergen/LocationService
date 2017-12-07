// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package listutils.actions;

import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import javax.xml.transform.*;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

public class TransformXSLT extends CustomJavaAction<java.lang.String>
{
	private java.lang.String xmlStr;
	private java.lang.String xsltStr;

	public TransformXSLT(IContext context, java.lang.String xmlStr, java.lang.String xsltStr)
	{
		super(context);
		this.xmlStr = xmlStr;
		this.xsltStr = xsltStr;
	}

	@Override
	public java.lang.String executeAction() throws Exception
	{
		// BEGIN USER CODE
		StringWriter writer = new StringWriter();

		//TransformerFactory tFactory = TransformerFactory.newInstance();
		TransformerFactory tFactory = new net.sf.saxon.TransformerFactoryImpl();

		Transformer transformer = tFactory.newTransformer(new StreamSource(new StringReader(this.xsltStr)));
	        transformer.transform(new StreamSource(new StringReader(this.xmlStr)),new javax.xml.transform.stream.StreamResult(writer));

	        return writer.toString();
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@Override
	public java.lang.String toString()
	{
		return "TransformXSLT";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
