// This file was generated by Mendix Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package flatfileinterface.proxies;

public class SkipColumnHelper
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject skipColumnHelperMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "FlatFileInterface.SkipColumnHelper";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		StartColumn("StartColumn"),
		EndColumn("EndColumn"),
		SkipColumnHelper_InterfaceDefinition("FlatFileInterface.SkipColumnHelper_InterfaceDefinition");

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

	public SkipColumnHelper(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "FlatFileInterface.SkipColumnHelper"));
	}

	protected SkipColumnHelper(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject skipColumnHelperMendixObject)
	{
		if (skipColumnHelperMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("FlatFileInterface.SkipColumnHelper", skipColumnHelperMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a FlatFileInterface.SkipColumnHelper");

		this.skipColumnHelperMendixObject = skipColumnHelperMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'SkipColumnHelper.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static flatfileinterface.proxies.SkipColumnHelper initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return flatfileinterface.proxies.SkipColumnHelper.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static flatfileinterface.proxies.SkipColumnHelper initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new flatfileinterface.proxies.SkipColumnHelper(context, mendixObject);
	}

	public static flatfileinterface.proxies.SkipColumnHelper load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return flatfileinterface.proxies.SkipColumnHelper.initialize(context, mendixObject);
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
	 * @return value of StartColumn
	 */
	public final java.lang.Integer getStartColumn()
	{
		return getStartColumn(getContext());
	}

	/**
	 * @param context
	 * @return value of StartColumn
	 */
	public final java.lang.Integer getStartColumn(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.StartColumn.toString());
	}

	/**
	 * Set value of StartColumn
	 * @param startcolumn
	 */
	public final void setStartColumn(java.lang.Integer startcolumn)
	{
		setStartColumn(getContext(), startcolumn);
	}

	/**
	 * Set value of StartColumn
	 * @param context
	 * @param startcolumn
	 */
	public final void setStartColumn(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer startcolumn)
	{
		getMendixObject().setValue(context, MemberNames.StartColumn.toString(), startcolumn);
	}

	/**
	 * @return value of EndColumn
	 */
	public final java.lang.Integer getEndColumn()
	{
		return getEndColumn(getContext());
	}

	/**
	 * @param context
	 * @return value of EndColumn
	 */
	public final java.lang.Integer getEndColumn(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.EndColumn.toString());
	}

	/**
	 * Set value of EndColumn
	 * @param endcolumn
	 */
	public final void setEndColumn(java.lang.Integer endcolumn)
	{
		setEndColumn(getContext(), endcolumn);
	}

	/**
	 * Set value of EndColumn
	 * @param context
	 * @param endcolumn
	 */
	public final void setEndColumn(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer endcolumn)
	{
		getMendixObject().setValue(context, MemberNames.EndColumn.toString(), endcolumn);
	}

	/**
	 * @return value of SkipColumnHelper_InterfaceDefinition
	 */
	public final flatfileinterface.proxies.InterfaceDefinition getSkipColumnHelper_InterfaceDefinition() throws com.mendix.core.CoreException
	{
		return getSkipColumnHelper_InterfaceDefinition(getContext());
	}

	/**
	 * @param context
	 * @return value of SkipColumnHelper_InterfaceDefinition
	 */
	public final flatfileinterface.proxies.InterfaceDefinition getSkipColumnHelper_InterfaceDefinition(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		flatfileinterface.proxies.InterfaceDefinition result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.SkipColumnHelper_InterfaceDefinition.toString());
		if (identifier != null)
			result = flatfileinterface.proxies.InterfaceDefinition.load(context, identifier);
		return result;
	}

	/**
	 * Set value of SkipColumnHelper_InterfaceDefinition
	 * @param skipcolumnhelper_interfacedefinition
	 */
	public final void setSkipColumnHelper_InterfaceDefinition(flatfileinterface.proxies.InterfaceDefinition skipcolumnhelper_interfacedefinition)
	{
		setSkipColumnHelper_InterfaceDefinition(getContext(), skipcolumnhelper_interfacedefinition);
	}

	/**
	 * Set value of SkipColumnHelper_InterfaceDefinition
	 * @param context
	 * @param skipcolumnhelper_interfacedefinition
	 */
	public final void setSkipColumnHelper_InterfaceDefinition(com.mendix.systemwideinterfaces.core.IContext context, flatfileinterface.proxies.InterfaceDefinition skipcolumnhelper_interfacedefinition)
	{
		if (skipcolumnhelper_interfacedefinition == null)
			getMendixObject().setValue(context, MemberNames.SkipColumnHelper_InterfaceDefinition.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.SkipColumnHelper_InterfaceDefinition.toString(), skipcolumnhelper_interfacedefinition.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return skipColumnHelperMendixObject;
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
			final flatfileinterface.proxies.SkipColumnHelper that = (flatfileinterface.proxies.SkipColumnHelper) obj;
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
		return "FlatFileInterface.SkipColumnHelper";
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
