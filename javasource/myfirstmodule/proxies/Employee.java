// This file was generated by Mendix Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class Employee
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject employeeMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.Employee";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Name("Name"),
		email("email"),
		phone("phone"),
		birthday("birthday"),
		bio("bio"),
		address("address"),
		Level("Level"),
		CountryCode("CountryCode"),
		Zipcode("Zipcode"),
		Housenumber("Housenumber"),
		HousenumberExtension("HousenumberExtension"),
		Street("Street"),
		City("City"),
		Longitude("Longitude"),
		Latitude("Latitude");

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

	public Employee(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.Employee"));
	}

	protected Employee(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject employeeMendixObject)
	{
		if (employeeMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.Employee", employeeMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.Employee");

		this.employeeMendixObject = employeeMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Employee.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static myfirstmodule.proxies.Employee initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.Employee.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.Employee initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.Employee(context, mendixObject);
	}

	public static myfirstmodule.proxies.Employee load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.Employee.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.Employee> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<myfirstmodule.proxies.Employee> result = new java.util.ArrayList<myfirstmodule.proxies.Employee>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//MyFirstModule.Employee" + xpathConstraint))
			result.add(myfirstmodule.proxies.Employee.initialize(context, obj));
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
	 * @return value of email
	 */
	public final java.lang.String getemail()
	{
		return getemail(getContext());
	}

	/**
	 * @param context
	 * @return value of email
	 */
	public final java.lang.String getemail(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.email.toString());
	}

	/**
	 * Set value of email
	 * @param email
	 */
	public final void setemail(java.lang.String email)
	{
		setemail(getContext(), email);
	}

	/**
	 * Set value of email
	 * @param context
	 * @param email
	 */
	public final void setemail(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String email)
	{
		getMendixObject().setValue(context, MemberNames.email.toString(), email);
	}

	/**
	 * @return value of phone
	 */
	public final java.lang.String getphone()
	{
		return getphone(getContext());
	}

	/**
	 * @param context
	 * @return value of phone
	 */
	public final java.lang.String getphone(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.phone.toString());
	}

	/**
	 * Set value of phone
	 * @param phone
	 */
	public final void setphone(java.lang.String phone)
	{
		setphone(getContext(), phone);
	}

	/**
	 * Set value of phone
	 * @param context
	 * @param phone
	 */
	public final void setphone(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String phone)
	{
		getMendixObject().setValue(context, MemberNames.phone.toString(), phone);
	}

	/**
	 * @return value of birthday
	 */
	public final java.util.Date getbirthday()
	{
		return getbirthday(getContext());
	}

	/**
	 * @param context
	 * @return value of birthday
	 */
	public final java.util.Date getbirthday(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.birthday.toString());
	}

	/**
	 * Set value of birthday
	 * @param birthday
	 */
	public final void setbirthday(java.util.Date birthday)
	{
		setbirthday(getContext(), birthday);
	}

	/**
	 * Set value of birthday
	 * @param context
	 * @param birthday
	 */
	public final void setbirthday(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date birthday)
	{
		getMendixObject().setValue(context, MemberNames.birthday.toString(), birthday);
	}

	/**
	 * @return value of bio
	 */
	public final java.lang.String getbio()
	{
		return getbio(getContext());
	}

	/**
	 * @param context
	 * @return value of bio
	 */
	public final java.lang.String getbio(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.bio.toString());
	}

	/**
	 * Set value of bio
	 * @param bio
	 */
	public final void setbio(java.lang.String bio)
	{
		setbio(getContext(), bio);
	}

	/**
	 * Set value of bio
	 * @param context
	 * @param bio
	 */
	public final void setbio(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String bio)
	{
		getMendixObject().setValue(context, MemberNames.bio.toString(), bio);
	}

	/**
	 * @return value of address
	 */
	public final java.lang.String getaddress()
	{
		return getaddress(getContext());
	}

	/**
	 * @param context
	 * @return value of address
	 */
	public final java.lang.String getaddress(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.address.toString());
	}

	/**
	 * Set value of address
	 * @param address
	 */
	public final void setaddress(java.lang.String address)
	{
		setaddress(getContext(), address);
	}

	/**
	 * Set value of address
	 * @param context
	 * @param address
	 */
	public final void setaddress(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String address)
	{
		getMendixObject().setValue(context, MemberNames.address.toString(), address);
	}

	/**
	 * Set value of Level
	 * @param level
	 */
	public final myfirstmodule.proxies.EmployeeLevel getLevel()
	{
		return getLevel(getContext());
	}

	/**
	 * @param context
	 * @return value of Level
	 */
	public final myfirstmodule.proxies.EmployeeLevel getLevel(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.Level.toString());
		if (obj == null)
			return null;

		return myfirstmodule.proxies.EmployeeLevel.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of Level
	 * @param level
	 */
	public final void setLevel(myfirstmodule.proxies.EmployeeLevel level)
	{
		setLevel(getContext(), level);
	}

	/**
	 * Set value of Level
	 * @param context
	 * @param level
	 */
	public final void setLevel(com.mendix.systemwideinterfaces.core.IContext context, myfirstmodule.proxies.EmployeeLevel level)
	{
		if (level != null)
			getMendixObject().setValue(context, MemberNames.Level.toString(), level.toString());
		else
			getMendixObject().setValue(context, MemberNames.Level.toString(), null);
	}

	/**
	 * @return value of CountryCode
	 */
	public final java.lang.String getCountryCode()
	{
		return getCountryCode(getContext());
	}

	/**
	 * @param context
	 * @return value of CountryCode
	 */
	public final java.lang.String getCountryCode(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.CountryCode.toString());
	}

	/**
	 * Set value of CountryCode
	 * @param countrycode
	 */
	public final void setCountryCode(java.lang.String countrycode)
	{
		setCountryCode(getContext(), countrycode);
	}

	/**
	 * Set value of CountryCode
	 * @param context
	 * @param countrycode
	 */
	public final void setCountryCode(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String countrycode)
	{
		getMendixObject().setValue(context, MemberNames.CountryCode.toString(), countrycode);
	}

	/**
	 * @return value of Zipcode
	 */
	public final java.lang.String getZipcode()
	{
		return getZipcode(getContext());
	}

	/**
	 * @param context
	 * @return value of Zipcode
	 */
	public final java.lang.String getZipcode(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Zipcode.toString());
	}

	/**
	 * Set value of Zipcode
	 * @param zipcode
	 */
	public final void setZipcode(java.lang.String zipcode)
	{
		setZipcode(getContext(), zipcode);
	}

	/**
	 * Set value of Zipcode
	 * @param context
	 * @param zipcode
	 */
	public final void setZipcode(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String zipcode)
	{
		getMendixObject().setValue(context, MemberNames.Zipcode.toString(), zipcode);
	}

	/**
	 * @return value of Housenumber
	 */
	public final java.lang.Integer getHousenumber()
	{
		return getHousenumber(getContext());
	}

	/**
	 * @param context
	 * @return value of Housenumber
	 */
	public final java.lang.Integer getHousenumber(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Housenumber.toString());
	}

	/**
	 * Set value of Housenumber
	 * @param housenumber
	 */
	public final void setHousenumber(java.lang.Integer housenumber)
	{
		setHousenumber(getContext(), housenumber);
	}

	/**
	 * Set value of Housenumber
	 * @param context
	 * @param housenumber
	 */
	public final void setHousenumber(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer housenumber)
	{
		getMendixObject().setValue(context, MemberNames.Housenumber.toString(), housenumber);
	}

	/**
	 * @return value of HousenumberExtension
	 */
	public final java.lang.String getHousenumberExtension()
	{
		return getHousenumberExtension(getContext());
	}

	/**
	 * @param context
	 * @return value of HousenumberExtension
	 */
	public final java.lang.String getHousenumberExtension(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.HousenumberExtension.toString());
	}

	/**
	 * Set value of HousenumberExtension
	 * @param housenumberextension
	 */
	public final void setHousenumberExtension(java.lang.String housenumberextension)
	{
		setHousenumberExtension(getContext(), housenumberextension);
	}

	/**
	 * Set value of HousenumberExtension
	 * @param context
	 * @param housenumberextension
	 */
	public final void setHousenumberExtension(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String housenumberextension)
	{
		getMendixObject().setValue(context, MemberNames.HousenumberExtension.toString(), housenumberextension);
	}

	/**
	 * @return value of Street
	 */
	public final java.lang.String getStreet()
	{
		return getStreet(getContext());
	}

	/**
	 * @param context
	 * @return value of Street
	 */
	public final java.lang.String getStreet(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Street.toString());
	}

	/**
	 * Set value of Street
	 * @param street
	 */
	public final void setStreet(java.lang.String street)
	{
		setStreet(getContext(), street);
	}

	/**
	 * Set value of Street
	 * @param context
	 * @param street
	 */
	public final void setStreet(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String street)
	{
		getMendixObject().setValue(context, MemberNames.Street.toString(), street);
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
	 * @return value of Longitude
	 */
	public final java.math.BigDecimal getLongitude()
	{
		return getLongitude(getContext());
	}

	/**
	 * @param context
	 * @return value of Longitude
	 */
	public final java.math.BigDecimal getLongitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.math.BigDecimal) getMendixObject().getValue(context, MemberNames.Longitude.toString());
	}

	/**
	 * Set value of Longitude
	 * @param longitude
	 */
	public final void setLongitude(java.math.BigDecimal longitude)
	{
		setLongitude(getContext(), longitude);
	}

	/**
	 * Set value of Longitude
	 * @param context
	 * @param longitude
	 */
	public final void setLongitude(com.mendix.systemwideinterfaces.core.IContext context, java.math.BigDecimal longitude)
	{
		getMendixObject().setValue(context, MemberNames.Longitude.toString(), longitude);
	}

	/**
	 * @return value of Latitude
	 */
	public final java.math.BigDecimal getLatitude()
	{
		return getLatitude(getContext());
	}

	/**
	 * @param context
	 * @return value of Latitude
	 */
	public final java.math.BigDecimal getLatitude(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.math.BigDecimal) getMendixObject().getValue(context, MemberNames.Latitude.toString());
	}

	/**
	 * Set value of Latitude
	 * @param latitude
	 */
	public final void setLatitude(java.math.BigDecimal latitude)
	{
		setLatitude(getContext(), latitude);
	}

	/**
	 * Set value of Latitude
	 * @param context
	 * @param latitude
	 */
	public final void setLatitude(com.mendix.systemwideinterfaces.core.IContext context, java.math.BigDecimal latitude)
	{
		getMendixObject().setValue(context, MemberNames.Latitude.toString(), latitude);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return employeeMendixObject;
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
			final myfirstmodule.proxies.Employee that = (myfirstmodule.proxies.Employee) obj;
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
		return "MyFirstModule.Employee";
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