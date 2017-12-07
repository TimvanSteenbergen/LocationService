// This file was generated by Mendix Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package postalcodehousenumber.proxies;

public class township
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject townshipMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "PostalcodeHousenumber.township";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Name("Name"),
		Inhabitants("Inhabitants"),
		Squaremeters("Squaremeters"),
		Website("Website"),
		Politiccolor("Politiccolor"),
		Zipcodefrom("Zipcodefrom"),
		Zipcodeupto("Zipcodeupto"),
		Areaphonenumber("Areaphonenumber"),
		Island("Island"),
		Ruralarea("Ruralarea"),
		Township_Province("PostalcodeHousenumber.Township_Province");

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

	public township(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "PostalcodeHousenumber.township"));
	}

	protected township(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject townshipMendixObject)
	{
		if (townshipMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("PostalcodeHousenumber.township", townshipMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a PostalcodeHousenumber.township");

		this.townshipMendixObject = townshipMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'township.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static postalcodehousenumber.proxies.township initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return postalcodehousenumber.proxies.township.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static postalcodehousenumber.proxies.township initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new postalcodehousenumber.proxies.township(context, mendixObject);
	}

	public static postalcodehousenumber.proxies.township load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return postalcodehousenumber.proxies.township.initialize(context, mendixObject);
	}

	public static java.util.List<postalcodehousenumber.proxies.township> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<postalcodehousenumber.proxies.township> result = new java.util.ArrayList<postalcodehousenumber.proxies.township>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//PostalcodeHousenumber.township" + xpathConstraint))
			result.add(postalcodehousenumber.proxies.township.initialize(context, obj));
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
	 * @return value of Name
	 */
	public final java.lang.String getName()
	{
		return getName(getContext());
	}

	/**
	 * @param context
	 * @return value of Name
	 */
	public final java.lang.String getName(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Name.toString());
	}

	/**
	 * Set value of Name
	 * @param name
	 */
	public final void setName(java.lang.String name)
	{
		setName(getContext(), name);
	}

	/**
	 * Set value of Name
	 * @param context
	 * @param name
	 */
	public final void setName(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String name)
	{
		getMendixObject().setValue(context, MemberNames.Name.toString(), name);
	}

	/**
	 * @return value of Inhabitants
	 */
	public final java.lang.Integer getInhabitants()
	{
		return getInhabitants(getContext());
	}

	/**
	 * @param context
	 * @return value of Inhabitants
	 */
	public final java.lang.Integer getInhabitants(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Inhabitants.toString());
	}

	/**
	 * Set value of Inhabitants
	 * @param inhabitants
	 */
	public final void setInhabitants(java.lang.Integer inhabitants)
	{
		setInhabitants(getContext(), inhabitants);
	}

	/**
	 * Set value of Inhabitants
	 * @param context
	 * @param inhabitants
	 */
	public final void setInhabitants(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer inhabitants)
	{
		getMendixObject().setValue(context, MemberNames.Inhabitants.toString(), inhabitants);
	}

	/**
	 * @return value of Squaremeters
	 */
	public final java.lang.Integer getSquaremeters()
	{
		return getSquaremeters(getContext());
	}

	/**
	 * @param context
	 * @return value of Squaremeters
	 */
	public final java.lang.Integer getSquaremeters(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Squaremeters.toString());
	}

	/**
	 * Set value of Squaremeters
	 * @param squaremeters
	 */
	public final void setSquaremeters(java.lang.Integer squaremeters)
	{
		setSquaremeters(getContext(), squaremeters);
	}

	/**
	 * Set value of Squaremeters
	 * @param context
	 * @param squaremeters
	 */
	public final void setSquaremeters(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer squaremeters)
	{
		getMendixObject().setValue(context, MemberNames.Squaremeters.toString(), squaremeters);
	}

	/**
	 * @return value of Website
	 */
	public final java.lang.String getWebsite()
	{
		return getWebsite(getContext());
	}

	/**
	 * @param context
	 * @return value of Website
	 */
	public final java.lang.String getWebsite(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Website.toString());
	}

	/**
	 * Set value of Website
	 * @param website
	 */
	public final void setWebsite(java.lang.String website)
	{
		setWebsite(getContext(), website);
	}

	/**
	 * Set value of Website
	 * @param context
	 * @param website
	 */
	public final void setWebsite(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String website)
	{
		getMendixObject().setValue(context, MemberNames.Website.toString(), website);
	}

	/**
	 * @return value of Politiccolor
	 */
	public final java.lang.String getPoliticcolor()
	{
		return getPoliticcolor(getContext());
	}

	/**
	 * @param context
	 * @return value of Politiccolor
	 */
	public final java.lang.String getPoliticcolor(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Politiccolor.toString());
	}

	/**
	 * Set value of Politiccolor
	 * @param politiccolor
	 */
	public final void setPoliticcolor(java.lang.String politiccolor)
	{
		setPoliticcolor(getContext(), politiccolor);
	}

	/**
	 * Set value of Politiccolor
	 * @param context
	 * @param politiccolor
	 */
	public final void setPoliticcolor(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String politiccolor)
	{
		getMendixObject().setValue(context, MemberNames.Politiccolor.toString(), politiccolor);
	}

	/**
	 * @return value of Zipcodefrom
	 */
	public final java.lang.Integer getZipcodefrom()
	{
		return getZipcodefrom(getContext());
	}

	/**
	 * @param context
	 * @return value of Zipcodefrom
	 */
	public final java.lang.Integer getZipcodefrom(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Zipcodefrom.toString());
	}

	/**
	 * Set value of Zipcodefrom
	 * @param zipcodefrom
	 */
	public final void setZipcodefrom(java.lang.Integer zipcodefrom)
	{
		setZipcodefrom(getContext(), zipcodefrom);
	}

	/**
	 * Set value of Zipcodefrom
	 * @param context
	 * @param zipcodefrom
	 */
	public final void setZipcodefrom(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer zipcodefrom)
	{
		getMendixObject().setValue(context, MemberNames.Zipcodefrom.toString(), zipcodefrom);
	}

	/**
	 * @return value of Zipcodeupto
	 */
	public final java.lang.Integer getZipcodeupto()
	{
		return getZipcodeupto(getContext());
	}

	/**
	 * @param context
	 * @return value of Zipcodeupto
	 */
	public final java.lang.Integer getZipcodeupto(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Zipcodeupto.toString());
	}

	/**
	 * Set value of Zipcodeupto
	 * @param zipcodeupto
	 */
	public final void setZipcodeupto(java.lang.Integer zipcodeupto)
	{
		setZipcodeupto(getContext(), zipcodeupto);
	}

	/**
	 * Set value of Zipcodeupto
	 * @param context
	 * @param zipcodeupto
	 */
	public final void setZipcodeupto(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer zipcodeupto)
	{
		getMendixObject().setValue(context, MemberNames.Zipcodeupto.toString(), zipcodeupto);
	}

	/**
	 * @return value of Areaphonenumber
	 */
	public final java.lang.Integer getAreaphonenumber()
	{
		return getAreaphonenumber(getContext());
	}

	/**
	 * @param context
	 * @return value of Areaphonenumber
	 */
	public final java.lang.Integer getAreaphonenumber(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Areaphonenumber.toString());
	}

	/**
	 * Set value of Areaphonenumber
	 * @param areaphonenumber
	 */
	public final void setAreaphonenumber(java.lang.Integer areaphonenumber)
	{
		setAreaphonenumber(getContext(), areaphonenumber);
	}

	/**
	 * Set value of Areaphonenumber
	 * @param context
	 * @param areaphonenumber
	 */
	public final void setAreaphonenumber(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer areaphonenumber)
	{
		getMendixObject().setValue(context, MemberNames.Areaphonenumber.toString(), areaphonenumber);
	}

	/**
	 * @return value of Island
	 */
	public final java.lang.Boolean getIsland()
	{
		return getIsland(getContext());
	}

	/**
	 * @param context
	 * @return value of Island
	 */
	public final java.lang.Boolean getIsland(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.Island.toString());
	}

	/**
	 * Set value of Island
	 * @param island
	 */
	public final void setIsland(java.lang.Boolean island)
	{
		setIsland(getContext(), island);
	}

	/**
	 * Set value of Island
	 * @param context
	 * @param island
	 */
	public final void setIsland(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean island)
	{
		getMendixObject().setValue(context, MemberNames.Island.toString(), island);
	}

	/**
	 * @return value of Ruralarea
	 */
	public final java.lang.Boolean getRuralarea()
	{
		return getRuralarea(getContext());
	}

	/**
	 * @param context
	 * @return value of Ruralarea
	 */
	public final java.lang.Boolean getRuralarea(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.Ruralarea.toString());
	}

	/**
	 * Set value of Ruralarea
	 * @param ruralarea
	 */
	public final void setRuralarea(java.lang.Boolean ruralarea)
	{
		setRuralarea(getContext(), ruralarea);
	}

	/**
	 * Set value of Ruralarea
	 * @param context
	 * @param ruralarea
	 */
	public final void setRuralarea(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean ruralarea)
	{
		getMendixObject().setValue(context, MemberNames.Ruralarea.toString(), ruralarea);
	}

	/**
	 * @return value of Township_Province
	 */
	public final postalcodehousenumber.proxies.province getTownship_Province() throws com.mendix.core.CoreException
	{
		return getTownship_Province(getContext());
	}

	/**
	 * @param context
	 * @return value of Township_Province
	 */
	public final postalcodehousenumber.proxies.province getTownship_Province(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		postalcodehousenumber.proxies.province result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Township_Province.toString());
		if (identifier != null)
			result = postalcodehousenumber.proxies.province.load(context, identifier);
		return result;
	}

	/**
	 * Set value of Township_Province
	 * @param township_province
	 */
	public final void setTownship_Province(postalcodehousenumber.proxies.province township_province)
	{
		setTownship_Province(getContext(), township_province);
	}

	/**
	 * Set value of Township_Province
	 * @param context
	 * @param township_province
	 */
	public final void setTownship_Province(com.mendix.systemwideinterfaces.core.IContext context, postalcodehousenumber.proxies.province township_province)
	{
		if (township_province == null)
			getMendixObject().setValue(context, MemberNames.Township_Province.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.Township_Province.toString(), township_province.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return townshipMendixObject;
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
			final postalcodehousenumber.proxies.township that = (postalcodehousenumber.proxies.township) obj;
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
		return "PostalcodeHousenumber.township";
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
