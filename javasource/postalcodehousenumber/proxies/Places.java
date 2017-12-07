// This file was generated by Mendix Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package postalcodehousenumber.proxies;

public class Places
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject placesMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "PostalcodeHousenumber.Places";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Places_Root("PostalcodeHousenumber.Places_Root");

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

	public Places(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "PostalcodeHousenumber.Places"));
	}

	protected Places(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject placesMendixObject)
	{
		if (placesMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("PostalcodeHousenumber.Places", placesMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a PostalcodeHousenumber.Places");

		this.placesMendixObject = placesMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Places.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static postalcodehousenumber.proxies.Places initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return postalcodehousenumber.proxies.Places.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static postalcodehousenumber.proxies.Places initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new postalcodehousenumber.proxies.Places(context, mendixObject);
	}

	public static postalcodehousenumber.proxies.Places load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return postalcodehousenumber.proxies.Places.initialize(context, mendixObject);
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
	 * @return value of Places_Root
	 */
	public final postalcodehousenumber.proxies.Root getPlaces_Root() throws com.mendix.core.CoreException
	{
		return getPlaces_Root(getContext());
	}

	/**
	 * @param context
	 * @return value of Places_Root
	 */
	public final postalcodehousenumber.proxies.Root getPlaces_Root(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		postalcodehousenumber.proxies.Root result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Places_Root.toString());
		if (identifier != null)
			result = postalcodehousenumber.proxies.Root.load(context, identifier);
		return result;
	}

	/**
	 * Set value of Places_Root
	 * @param places_root
	 */
	public final void setPlaces_Root(postalcodehousenumber.proxies.Root places_root)
	{
		setPlaces_Root(getContext(), places_root);
	}

	/**
	 * Set value of Places_Root
	 * @param context
	 * @param places_root
	 */
	public final void setPlaces_Root(com.mendix.systemwideinterfaces.core.IContext context, postalcodehousenumber.proxies.Root places_root)
	{
		if (places_root == null)
			getMendixObject().setValue(context, MemberNames.Places_Root.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.Places_Root.toString(), places_root.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return placesMendixObject;
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
			final postalcodehousenumber.proxies.Places that = (postalcodehousenumber.proxies.Places) obj;
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
		return "PostalcodeHousenumber.Places";
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