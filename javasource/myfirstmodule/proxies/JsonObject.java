// This file was generated by Mendix Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class JsonObject
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject jsonObjectMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.JsonObject";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Place_name("Place_name"),
		Longitude("Longitude"),
		State("State"),
		State_abbreviation("State_abbreviation"),
		Latitude("Latitude"),
		JsonObject_Places("MyFirstModule.JsonObject_Places");

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

	public JsonObject(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.JsonObject"));
	}

	protected JsonObject(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject jsonObjectMendixObject)
	{
		if (jsonObjectMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.JsonObject", jsonObjectMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.JsonObject");

		this.jsonObjectMendixObject = jsonObjectMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'JsonObject.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static myfirstmodule.proxies.JsonObject initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.JsonObject.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.JsonObject initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.JsonObject(context, mendixObject);
	}

	public static myfirstmodule.proxies.JsonObject load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.JsonObject.initialize(context, mendixObject);
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
	 * @return value of Place_name
	 */
	public final java.lang.String getPlace_name()
	{
		return getPlace_name(getContext());
	}

	/**
	 * @param context
	 * @return value of Place_name
	 */
	public final java.lang.String getPlace_name(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Place_name.toString());
	}

	/**
	 * Set value of Place_name
	 * @param place_name
	 */
	public final void setPlace_name(java.lang.String place_name)
	{
		setPlace_name(getContext(), place_name);
	}

	/**
	 * Set value of Place_name
	 * @param context
	 * @param place_name
	 */
	public final void setPlace_name(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String place_name)
	{
		getMendixObject().setValue(context, MemberNames.Place_name.toString(), place_name);
	}

	/**
	 * @return value of Longitude
	 */
	public final java.lang.String getLongitude()
	{
		return getLongitude(getContext());
	}

	/**
	 * @param context
	 * @return value of Longitude
	 */
	public final java.lang.String getLongitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Longitude.toString());
	}

	/**
	 * Set value of Longitude
	 * @param longitude
	 */
	public final void setLongitude(java.lang.String longitude)
	{
		setLongitude(getContext(), longitude);
	}

	/**
	 * Set value of Longitude
	 * @param context
	 * @param longitude
	 */
	public final void setLongitude(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String longitude)
	{
		getMendixObject().setValue(context, MemberNames.Longitude.toString(), longitude);
	}

	/**
	 * @return value of State
	 */
	public final java.lang.String getState()
	{
		return getState(getContext());
	}

	/**
	 * @param context
	 * @return value of State
	 */
	public final java.lang.String getState(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.State.toString());
	}

	/**
	 * Set value of State
	 * @param state
	 */
	public final void setState(java.lang.String state)
	{
		setState(getContext(), state);
	}

	/**
	 * Set value of State
	 * @param context
	 * @param state
	 */
	public final void setState(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String state)
	{
		getMendixObject().setValue(context, MemberNames.State.toString(), state);
	}

	/**
	 * @return value of State_abbreviation
	 */
	public final java.lang.String getState_abbreviation()
	{
		return getState_abbreviation(getContext());
	}

	/**
	 * @param context
	 * @return value of State_abbreviation
	 */
	public final java.lang.String getState_abbreviation(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.State_abbreviation.toString());
	}

	/**
	 * Set value of State_abbreviation
	 * @param state_abbreviation
	 */
	public final void setState_abbreviation(java.lang.String state_abbreviation)
	{
		setState_abbreviation(getContext(), state_abbreviation);
	}

	/**
	 * Set value of State_abbreviation
	 * @param context
	 * @param state_abbreviation
	 */
	public final void setState_abbreviation(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String state_abbreviation)
	{
		getMendixObject().setValue(context, MemberNames.State_abbreviation.toString(), state_abbreviation);
	}

	/**
	 * @return value of Latitude
	 */
	public final java.lang.String getLatitude()
	{
		return getLatitude(getContext());
	}

	/**
	 * @param context
	 * @return value of Latitude
	 */
	public final java.lang.String getLatitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Latitude.toString());
	}

	/**
	 * Set value of Latitude
	 * @param latitude
	 */
	public final void setLatitude(java.lang.String latitude)
	{
		setLatitude(getContext(), latitude);
	}

	/**
	 * Set value of Latitude
	 * @param context
	 * @param latitude
	 */
	public final void setLatitude(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String latitude)
	{
		getMendixObject().setValue(context, MemberNames.Latitude.toString(), latitude);
	}

	/**
	 * @return value of JsonObject_Places
	 */
	public final myfirstmodule.proxies.Places getJsonObject_Places() throws com.mendix.core.CoreException
	{
		return getJsonObject_Places(getContext());
	}

	/**
	 * @param context
	 * @return value of JsonObject_Places
	 */
	public final myfirstmodule.proxies.Places getJsonObject_Places(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		myfirstmodule.proxies.Places result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.JsonObject_Places.toString());
		if (identifier != null)
			result = myfirstmodule.proxies.Places.load(context, identifier);
		return result;
	}

	/**
	 * Set value of JsonObject_Places
	 * @param jsonobject_places
	 */
	public final void setJsonObject_Places(myfirstmodule.proxies.Places jsonobject_places)
	{
		setJsonObject_Places(getContext(), jsonobject_places);
	}

	/**
	 * Set value of JsonObject_Places
	 * @param context
	 * @param jsonobject_places
	 */
	public final void setJsonObject_Places(com.mendix.systemwideinterfaces.core.IContext context, myfirstmodule.proxies.Places jsonobject_places)
	{
		if (jsonobject_places == null)
			getMendixObject().setValue(context, MemberNames.JsonObject_Places.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.JsonObject_Places.toString(), jsonobject_places.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return jsonObjectMendixObject;
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
			final myfirstmodule.proxies.JsonObject that = (myfirstmodule.proxies.JsonObject) obj;
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
		return "MyFirstModule.JsonObject";
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