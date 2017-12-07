// This file was generated by Mendix Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package flatfileinterface.proxies;

public class ColumnDefinition
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject columnDefinitionMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "FlatFileInterface.ColumnDefinition";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		ColumnNumber("ColumnNumber"),
		StartPosition("StartPosition"),
		EndPosition("EndPosition"),
		MappedAttribute("MappedAttribute"),
		MappedType("MappedType"),
		DateTimeFormat("DateTimeFormat"),
		FixedLength("FixedLength"),
		Entity("Entity"),
		SkipColumn("SkipColumn"),
		Length("Length"),
		TempColumnDefinition_InterfaceDefinition("FlatFileInterface.TempColumnDefinition_InterfaceDefinition"),
		ColumnDefinition_MxObjectMember("FlatFileInterface.ColumnDefinition_MxObjectMember");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public ColumnDefinition(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "FlatFileInterface.ColumnDefinition"));
	}

	protected ColumnDefinition(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject columnDefinitionMendixObject)
	{
		if (columnDefinitionMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("FlatFileInterface.ColumnDefinition", columnDefinitionMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a FlatFileInterface.ColumnDefinition");

		this.columnDefinitionMendixObject = columnDefinitionMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'ColumnDefinition.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static flatfileinterface.proxies.ColumnDefinition initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return flatfileinterface.proxies.ColumnDefinition.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static flatfileinterface.proxies.ColumnDefinition initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new flatfileinterface.proxies.ColumnDefinition(context, mendixObject);
	}

	public static flatfileinterface.proxies.ColumnDefinition load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return flatfileinterface.proxies.ColumnDefinition.initialize(context, mendixObject);
	}

	public static java.util.List<flatfileinterface.proxies.ColumnDefinition> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<flatfileinterface.proxies.ColumnDefinition> result = new java.util.ArrayList<flatfileinterface.proxies.ColumnDefinition>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//FlatFileInterface.ColumnDefinition" + xpathConstraint))
			result.add(flatfileinterface.proxies.ColumnDefinition.initialize(context, obj));
		return result;
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of ColumnNumber
	 */
	public final java.lang.Integer getColumnNumber()
	{
		return getColumnNumber(getContext());
	}

	/**
	 * @param context
	 * @return value of ColumnNumber
	 */
	public final java.lang.Integer getColumnNumber(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.ColumnNumber.toString());
	}

	/**
	 * Set value of ColumnNumber
	 * @param columnnumber
	 */
	public final void setColumnNumber(java.lang.Integer columnnumber)
	{
		setColumnNumber(getContext(), columnnumber);
	}

	/**
	 * Set value of ColumnNumber
	 * @param context
	 * @param columnnumber
	 */
	public final void setColumnNumber(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer columnnumber)
	{
		getMendixObject().setValue(context, MemberNames.ColumnNumber.toString(), columnnumber);
	}

	/**
	 * @return value of StartPosition
	 */
	public final java.lang.Integer getStartPosition()
	{
		return getStartPosition(getContext());
	}

	/**
	 * @param context
	 * @return value of StartPosition
	 */
	public final java.lang.Integer getStartPosition(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.StartPosition.toString());
	}

	/**
	 * Set value of StartPosition
	 * @param startposition
	 */
	public final void setStartPosition(java.lang.Integer startposition)
	{
		setStartPosition(getContext(), startposition);
	}

	/**
	 * Set value of StartPosition
	 * @param context
	 * @param startposition
	 */
	public final void setStartPosition(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer startposition)
	{
		getMendixObject().setValue(context, MemberNames.StartPosition.toString(), startposition);
	}

	/**
	 * @return value of EndPosition
	 */
	public final java.lang.Integer getEndPosition()
	{
		return getEndPosition(getContext());
	}

	/**
	 * @param context
	 * @return value of EndPosition
	 */
	public final java.lang.Integer getEndPosition(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.EndPosition.toString());
	}

	/**
	 * Set value of EndPosition
	 * @param endposition
	 */
	public final void setEndPosition(java.lang.Integer endposition)
	{
		setEndPosition(getContext(), endposition);
	}

	/**
	 * Set value of EndPosition
	 * @param context
	 * @param endposition
	 */
	public final void setEndPosition(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer endposition)
	{
		getMendixObject().setValue(context, MemberNames.EndPosition.toString(), endposition);
	}

	/**
	 * @return value of MappedAttribute
	 */
	public final java.lang.String getMappedAttribute()
	{
		return getMappedAttribute(getContext());
	}

	/**
	 * @param context
	 * @return value of MappedAttribute
	 */
	public final java.lang.String getMappedAttribute(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.MappedAttribute.toString());
	}

	/**
	 * Set value of MappedAttribute
	 * @param mappedattribute
	 */
	public final void setMappedAttribute(java.lang.String mappedattribute)
	{
		setMappedAttribute(getContext(), mappedattribute);
	}

	/**
	 * Set value of MappedAttribute
	 * @param context
	 * @param mappedattribute
	 */
	public final void setMappedAttribute(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String mappedattribute)
	{
		getMendixObject().setValue(context, MemberNames.MappedAttribute.toString(), mappedattribute);
	}

	/**
	 * Set value of MappedType
	 * @param mappedtype
	 */
	public final mxmodelreflection.proxies.PrimitiveTypes getMappedType()
	{
		return getMappedType(getContext());
	}

	/**
	 * @param context
	 * @return value of MappedType
	 */
	public final mxmodelreflection.proxies.PrimitiveTypes getMappedType(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.MappedType.toString());
		if (obj == null)
			return null;

		return mxmodelreflection.proxies.PrimitiveTypes.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of MappedType
	 * @param mappedtype
	 */
	public final void setMappedType(mxmodelreflection.proxies.PrimitiveTypes mappedtype)
	{
		setMappedType(getContext(), mappedtype);
	}

	/**
	 * Set value of MappedType
	 * @param context
	 * @param mappedtype
	 */
	public final void setMappedType(com.mendix.systemwideinterfaces.core.IContext context, mxmodelreflection.proxies.PrimitiveTypes mappedtype)
	{
		if (mappedtype != null)
			getMendixObject().setValue(context, MemberNames.MappedType.toString(), mappedtype.toString());
		else
			getMendixObject().setValue(context, MemberNames.MappedType.toString(), null);
	}

	/**
	 * @return value of DateTimeFormat
	 */
	public final java.lang.String getDateTimeFormat()
	{
		return getDateTimeFormat(getContext());
	}

	/**
	 * @param context
	 * @return value of DateTimeFormat
	 */
	public final java.lang.String getDateTimeFormat(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.DateTimeFormat.toString());
	}

	/**
	 * Set value of DateTimeFormat
	 * @param datetimeformat
	 */
	public final void setDateTimeFormat(java.lang.String datetimeformat)
	{
		setDateTimeFormat(getContext(), datetimeformat);
	}

	/**
	 * Set value of DateTimeFormat
	 * @param context
	 * @param datetimeformat
	 */
	public final void setDateTimeFormat(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String datetimeformat)
	{
		getMendixObject().setValue(context, MemberNames.DateTimeFormat.toString(), datetimeformat);
	}

	/**
	 * @return value of FixedLength
	 */
	public final java.lang.Boolean getFixedLength()
	{
		return getFixedLength(getContext());
	}

	/**
	 * @param context
	 * @return value of FixedLength
	 */
	public final java.lang.Boolean getFixedLength(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.FixedLength.toString());
	}

	/**
	 * Set value of FixedLength
	 * @param fixedlength
	 */
	public final void setFixedLength(java.lang.Boolean fixedlength)
	{
		setFixedLength(getContext(), fixedlength);
	}

	/**
	 * Set value of FixedLength
	 * @param context
	 * @param fixedlength
	 */
	public final void setFixedLength(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean fixedlength)
	{
		getMendixObject().setValue(context, MemberNames.FixedLength.toString(), fixedlength);
	}

	/**
	 * @return value of Entity
	 */
	public final java.lang.String getEntity()
	{
		return getEntity(getContext());
	}

	/**
	 * @param context
	 * @return value of Entity
	 */
	public final java.lang.String getEntity(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Entity.toString());
	}

	/**
	 * Set value of Entity
	 * @param entity
	 */
	public final void setEntity(java.lang.String entity)
	{
		setEntity(getContext(), entity);
	}

	/**
	 * Set value of Entity
	 * @param context
	 * @param entity
	 */
	public final void setEntity(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String entity)
	{
		getMendixObject().setValue(context, MemberNames.Entity.toString(), entity);
	}

	/**
	 * @return value of SkipColumn
	 */
	public final java.lang.Boolean getSkipColumn()
	{
		return getSkipColumn(getContext());
	}

	/**
	 * @param context
	 * @return value of SkipColumn
	 */
	public final java.lang.Boolean getSkipColumn(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.SkipColumn.toString());
	}

	/**
	 * Set value of SkipColumn
	 * @param skipcolumn
	 */
	public final void setSkipColumn(java.lang.Boolean skipcolumn)
	{
		setSkipColumn(getContext(), skipcolumn);
	}

	/**
	 * Set value of SkipColumn
	 * @param context
	 * @param skipcolumn
	 */
	public final void setSkipColumn(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean skipcolumn)
	{
		getMendixObject().setValue(context, MemberNames.SkipColumn.toString(), skipcolumn);
	}

	/**
	 * @return value of Length
	 */
	public final java.lang.Integer getLength()
	{
		return getLength(getContext());
	}

	/**
	 * @param context
	 * @return value of Length
	 */
	public final java.lang.Integer getLength(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Length.toString());
	}

	/**
	 * Set value of Length
	 * @param length
	 */
	public final void setLength(java.lang.Integer length)
	{
		setLength(getContext(), length);
	}

	/**
	 * Set value of Length
	 * @param context
	 * @param length
	 */
	public final void setLength(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer length)
	{
		getMendixObject().setValue(context, MemberNames.Length.toString(), length);
	}

	/**
	 * @return value of TempColumnDefinition_InterfaceDefinition
	 */
	public final flatfileinterface.proxies.InterfaceDefinition getTempColumnDefinition_InterfaceDefinition() throws com.mendix.core.CoreException
	{
		return getTempColumnDefinition_InterfaceDefinition(getContext());
	}

	/**
	 * @param context
	 * @return value of TempColumnDefinition_InterfaceDefinition
	 */
	public final flatfileinterface.proxies.InterfaceDefinition getTempColumnDefinition_InterfaceDefinition(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		flatfileinterface.proxies.InterfaceDefinition result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.TempColumnDefinition_InterfaceDefinition.toString());
		if (identifier != null)
			result = flatfileinterface.proxies.InterfaceDefinition.load(context, identifier);
		return result;
	}

	/**
	 * Set value of TempColumnDefinition_InterfaceDefinition
	 * @param tempcolumndefinition_interfacedefinition
	 */
	public final void setTempColumnDefinition_InterfaceDefinition(flatfileinterface.proxies.InterfaceDefinition tempcolumndefinition_interfacedefinition)
	{
		setTempColumnDefinition_InterfaceDefinition(getContext(), tempcolumndefinition_interfacedefinition);
	}

	/**
	 * Set value of TempColumnDefinition_InterfaceDefinition
	 * @param context
	 * @param tempcolumndefinition_interfacedefinition
	 */
	public final void setTempColumnDefinition_InterfaceDefinition(com.mendix.systemwideinterfaces.core.IContext context, flatfileinterface.proxies.InterfaceDefinition tempcolumndefinition_interfacedefinition)
	{
		if (tempcolumndefinition_interfacedefinition == null)
			getMendixObject().setValue(context, MemberNames.TempColumnDefinition_InterfaceDefinition.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.TempColumnDefinition_InterfaceDefinition.toString(), tempcolumndefinition_interfacedefinition.getMendixObject().getId());
	}

	/**
	 * @return value of ColumnDefinition_MxObjectMember
	 */
	public final mxmodelreflection.proxies.MxObjectMember getColumnDefinition_MxObjectMember() throws com.mendix.core.CoreException
	{
		return getColumnDefinition_MxObjectMember(getContext());
	}

	/**
	 * @param context
	 * @return value of ColumnDefinition_MxObjectMember
	 */
	public final mxmodelreflection.proxies.MxObjectMember getColumnDefinition_MxObjectMember(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		mxmodelreflection.proxies.MxObjectMember result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.ColumnDefinition_MxObjectMember.toString());
		if (identifier != null)
			result = mxmodelreflection.proxies.MxObjectMember.load(context, identifier);
		return result;
	}

	/**
	 * Set value of ColumnDefinition_MxObjectMember
	 * @param columndefinition_mxobjectmember
	 */
	public final void setColumnDefinition_MxObjectMember(mxmodelreflection.proxies.MxObjectMember columndefinition_mxobjectmember)
	{
		setColumnDefinition_MxObjectMember(getContext(), columndefinition_mxobjectmember);
	}

	/**
	 * Set value of ColumnDefinition_MxObjectMember
	 * @param context
	 * @param columndefinition_mxobjectmember
	 */
	public final void setColumnDefinition_MxObjectMember(com.mendix.systemwideinterfaces.core.IContext context, mxmodelreflection.proxies.MxObjectMember columndefinition_mxobjectmember)
	{
		if (columndefinition_mxobjectmember == null)
			getMendixObject().setValue(context, MemberNames.ColumnDefinition_MxObjectMember.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.ColumnDefinition_MxObjectMember.toString(), columndefinition_mxobjectmember.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return columnDefinitionMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final flatfileinterface.proxies.ColumnDefinition that = (flatfileinterface.proxies.ColumnDefinition) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "FlatFileInterface.ColumnDefinition";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
