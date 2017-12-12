Readme

Description

You give this module a country, postalcode and optionally a housenumber and extension and in return you get the Streetname, Cityname and the Geolocation (Longitude and Latitude). Worldwide and in NL free of charge.

This module is set-up to use multiple webservice-suppliers. Mostly one or some for each country, or as fallback Zippomoto for worldwide basic data. It is also possible to have a local database for known addresses, reducing API-calls and improving speed (still to implement).

Each supplier has it's own folder in 'AddressInformationSupplier\Country_XY\Supplier' with every supplier-specific element needed.

Help

This AppStore module 'PostalscodeHousenumber' is ready for use and is developing. Everybody is invited to help. Please help, please join if you have anything to add, a bug to report, a feature-request, another service-supplier to add. Here is how:
- Prefered way: mail me your email-address and I will add you to the project. You will have direct insight and can add and work on stories and feature requests.
- Send your suggestion, ideas and bugreports using the feedback-button.
- or via Github: request to be added to https://github.com/TimvanSteenbergen/postalcodehousenumber, make your change to the .mkp-file and create a pull-request.
- or via Github: fork https://github.com/TimvanSteenbergen/postalcodehousenumber, make your change to the .mkp-file and create a pull-request.

Typical usage scenario

- Webshops. Reduce the customer's address-typos which can result in returned deliveries.

- Any Customer address registration. 

- Tracking information

Features and limitations

- Multiple webservice-providers available

- Building your own local database

- Free services where available

- So far only limited number of suppliers implemented: NL

Dependencies

Module Unittesting, only for running the tests. Unittesting is not needed for production.
Module Objecthandling, which is required by module Unittesting. Without it, errors will prevent running.

Installation

- Download from the AppStore. 
- Also download the Apps 'Unittesting' and 'objecthandling'.
- Assign module roles 'User' and 'Testrunner' to 'User' and module role 'Administrator' and 'Testrunner' to 'Administrator' 
- Link to your Navigation the page /Demopage/Home
- Link to your Navigation the page /Administrator/Dashboard
- Check the Administrators page for further actions.

Works out of the box. 
After setting up country an postalcodeFormat information: added functionality

Known bugs

...

Frequently Asked Questions

Q: ...
A: ...