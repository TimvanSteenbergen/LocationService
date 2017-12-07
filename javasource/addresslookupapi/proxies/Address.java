// This file was generated by Mendix Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package addresslookupapi.proxies;

public class Address
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject addressMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "AddressLookupAPI.Address";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		HouseNo("HouseNo"),
		AddressLine1("AddressLine1"),
		AddressLine2("AddressLine2"),
		AddressLine3("AddressLine3"),
		AddressLine4("AddressLine4"),
		AddressLine5("AddressLine5"),
		City("City"),
		County("County"),
		Postcode("Postcode"),
		Country("Country"),
		Address_PCAPredictRequest("AddressLookupAPI.Address_PCAPredictRequest");

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

	public Address(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "AddressLookupAPI.Address"));
	}

	protected Address(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject addressMendixObject)
	{
		if (addressMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("AddressLookupAPI.Address", addressMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a AddressLookupAPI.Address");

		this.addressMendixObject = addressMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Address.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static addresslookupapi.proxies.Address initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return addresslookupapi.proxies.Address.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static addresslookupapi.proxies.Address initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new addresslookupapi.proxies.Address(context, mendixObject);
	}

	public static addresslookupapi.proxies.Address load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return addresslookupapi.proxies.Address.initialize(context, mendixObject);
	}

	public static java.util.List<addresslookupapi.proxies.Address> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<addresslookupapi.proxies.Address> result = new java.util.ArrayList<addresslookupapi.proxies.Address>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//AddressLookupAPI.Address" + xpathConstraint))
			result.add(addresslookupapi.proxies.Address.initialize(context, obj));
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
	 * @return value of HouseNo
	 */
	public final java.lang.String getHouseNo()
	{
		return getHouseNo(getContext());
	}

	/**
	 * @param context
	 * @return value of HouseNo
	 */
	public final java.lang.String getHouseNo(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.HouseNo.toString());
	}

	/**
	 * Set value of HouseNo
	 * @param houseno
	 */
	public final void setHouseNo(java.lang.String houseno)
	{
		setHouseNo(getContext(), houseno);
	}

	/**
	 * Set value of HouseNo
	 * @param context
	 * @param houseno
	 */
	public final void setHouseNo(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String houseno)
	{
		getMendixObject().setValue(context, MemberNames.HouseNo.toString(), houseno);
	}

	/**
	 * @return value of AddressLine1
	 */
	public final java.lang.String getAddressLine1()
	{
		return getAddressLine1(getContext());
	}

	/**
	 * @param context
	 * @return value of AddressLine1
	 */
	public final java.lang.String getAddressLine1(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.AddressLine1.toString());
	}

	/**
	 * Set value of AddressLine1
	 * @param addressline1
	 */
	public final void setAddressLine1(java.lang.String addressline1)
	{
		setAddressLine1(getContext(), addressline1);
	}

	/**
	 * Set value of AddressLine1
	 * @param context
	 * @param addressline1
	 */
	public final void setAddressLine1(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String addressline1)
	{
		getMendixObject().setValue(context, MemberNames.AddressLine1.toString(), addressline1);
	}

	/**
	 * @return value of AddressLine2
	 */
	public final java.lang.String getAddressLine2()
	{
		return getAddressLine2(getContext());
	}

	/**
	 * @param context
	 * @return value of AddressLine2
	 */
	public final java.lang.String getAddressLine2(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.AddressLine2.toString());
	}

	/**
	 * Set value of AddressLine2
	 * @param addressline2
	 */
	public final void setAddressLine2(java.lang.String addressline2)
	{
		setAddressLine2(getContext(), addressline2);
	}

	/**
	 * Set value of AddressLine2
	 * @param context
	 * @param addressline2
	 */
	public final void setAddressLine2(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String addressline2)
	{
		getMendixObject().setValue(context, MemberNames.AddressLine2.toString(), addressline2);
	}

	/**
	 * @return value of AddressLine3
	 */
	public final java.lang.String getAddressLine3()
	{
		return getAddressLine3(getContext());
	}

	/**
	 * @param context
	 * @return value of AddressLine3
	 */
	public final java.lang.String getAddressLine3(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.AddressLine3.toString());
	}

	/**
	 * Set value of AddressLine3
	 * @param addressline3
	 */
	public final void setAddressLine3(java.lang.String addressline3)
	{
		setAddressLine3(getContext(), addressline3);
	}

	/**
	 * Set value of AddressLine3
	 * @param context
	 * @param addressline3
	 */
	public final void setAddressLine3(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String addressline3)
	{
		getMendixObject().setValue(context, MemberNames.AddressLine3.toString(), addressline3);
	}

	/**
	 * @return value of AddressLine4
	 */
	public final java.lang.String getAddressLine4()
	{
		return getAddressLine4(getContext());
	}

	/**
	 * @param context
	 * @return value of AddressLine4
	 */
	public final java.lang.String getAddressLine4(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.AddressLine4.toString());
	}

	/**
	 * Set value of AddressLine4
	 * @param addressline4
	 */
	public final void setAddressLine4(java.lang.String addressline4)
	{
		setAddressLine4(getContext(), addressline4);
	}

	/**
	 * Set value of AddressLine4
	 * @param context
	 * @param addressline4
	 */
	public final void setAddressLine4(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String addressline4)
	{
		getMendixObject().setValue(context, MemberNames.AddressLine4.toString(), addressline4);
	}

	/**
	 * @return value of AddressLine5
	 */
	public final java.lang.String getAddressLine5()
	{
		return getAddressLine5(getContext());
	}

	/**
	 * @param context
	 * @return value of AddressLine5
	 */
	public final java.lang.String getAddressLine5(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.AddressLine5.toString());
	}

	/**
	 * Set value of AddressLine5
	 * @param addressline5
	 */
	public final void setAddressLine5(java.lang.String addressline5)
	{
		setAddressLine5(getContext(), addressline5);
	}

	/**
	 * Set value of AddressLine5
	 * @param context
	 * @param addressline5
	 */
	public final void setAddressLine5(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String addressline5)
	{
		getMendixObject().setValue(context, MemberNames.AddressLine5.toString(), addressline5);
	}

	/**
	 * @return value of City
	 */
	public final java.lang.String getCity()
	{
		return getCity(getContext());
	}

	/**
	 * @param context
	 * @return value of City
	 */
	public final java.lang.String getCity(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.City.toString());
	}

	/**
	 * Set value of City
	 * @param city
	 */
	public final void setCity(java.lang.String city)
	{
		setCity(getContext(), city);
	}

	/**
	 * Set value of City
	 * @param context
	 * @param city
	 */
	public final void setCity(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String city)
	{
		getMendixObject().setValue(context, MemberNames.City.toString(), city);
	}

	/**
	 * @return value of County
	 */
	public final java.lang.String getCounty()
	{
		return getCounty(getContext());
	}

	/**
	 * @param context
	 * @return value of County
	 */
	public final java.lang.String getCounty(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.County.toString());
	}

	/**
	 * Set value of County
	 * @param county
	 */
	public final void setCounty(java.lang.String county)
	{
		setCounty(getContext(), county);
	}

	/**
	 * Set value of County
	 * @param context
	 * @param county
	 */
	public final void setCounty(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String county)
	{
		getMendixObject().setValue(context, MemberNames.County.toString(), county);
	}

	/**
	 * @return value of Postcode
	 */
	public final java.lang.String getPostcode()
	{
		return getPostcode(getContext());
	}

	/**
	 * @param context
	 * @return value of Postcode
	 */
	public final java.lang.String getPostcode(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Postcode.toString());
	}

	/**
	 * Set value of Postcode
	 * @param postcode
	 */
	public final void setPostcode(java.lang.String postcode)
	{
		setPostcode(getContext(), postcode);
	}

	/**
	 * Set value of Postcode
	 * @param context
	 * @param postcode
	 */
	public final void setPostcode(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String postcode)
	{
		getMendixObject().setValue(context, MemberNames.Postcode.toString(), postcode);
	}

	/**
	 * @return value of Country
	 */
	public final java.lang.String getCountry()
	{
		return getCountry(getContext());
	}

	/**
	 * @param context
	 * @return value of Country
	 */
	public final java.lang.String getCountry(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Country.toString());
	}

	/**
	 * Set value of Country
	 * @param country
	 */
	public final void setCountry(java.lang.String country)
	{
		setCountry(getContext(), country);
	}

	/**
	 * Set value of Country
	 * @param context
	 * @param country
	 */
	public final void setCountry(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String country)
	{
		getMendixObject().setValue(context, MemberNames.Country.toString(), country);
	}

	/**
	 * @return value of Address_PCAPredictRequest
	 */
	public final addresslookupapi.proxies.PCAPredictRequest getAddress_PCAPredictRequest() throws com.mendix.core.CoreException
	{
		return getAddress_PCAPredictRequest(getContext());
	}

	/**
	 * @param context
	 * @return value of Address_PCAPredictRequest
	 */
	public final addresslookupapi.proxies.PCAPredictRequest getAddress_PCAPredictRequest(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		addresslookupapi.proxies.PCAPredictRequest result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Address_PCAPredictRequest.toString());
		if (identifier != null)
			result = addresslookupapi.proxies.PCAPredictRequest.load(context, identifier);
		return result;
	}

	/**
	 * Set value of Address_PCAPredictRequest
	 * @param address_pcapredictrequest
	 */
	public final void setAddress_PCAPredictRequest(addresslookupapi.proxies.PCAPredictRequest address_pcapredictrequest)
	{
		setAddress_PCAPredictRequest(getContext(), address_pcapredictrequest);
	}

	/**
	 * Set value of Address_PCAPredictRequest
	 * @param context
	 * @param address_pcapredictrequest
	 */
	public final void setAddress_PCAPredictRequest(com.mendix.systemwideinterfaces.core.IContext context, addresslookupapi.proxies.PCAPredictRequest address_pcapredictrequest)
	{
		if (address_pcapredictrequest == null)
			getMendixObject().setValue(context, MemberNames.Address_PCAPredictRequest.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.Address_PCAPredictRequest.toString(), address_pcapredictrequest.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return addressMendixObject;
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
			final addresslookupapi.proxies.Address that = (addresslookupapi.proxies.Address) obj;
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
		return "AddressLookupAPI.Address";
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
