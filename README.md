Readme

Description

Upon entering a country, postalcode, housenumber and optionally an extension, you will get in return:
Streetname,
Cityname
Geolocation (Longitude and Latitude). 

In NL and LU you will receive the most detailed data. And fully free of charge.
It is covered worldwide for a broad geolocation.

This module is set-up to use multiple webservice-suppliers. Mostly one or some for each country, or as fallback Zippomoto for worldwide basic data. It is also possible to have a local database for known addresses, reducing API-calls and improving speed (still to implement).

Each supplier has it's own module and is being maintained by it's owner. Interfacing is the same for every supplier, the inner workings is upto them.

Please Help us improve and extend

This AppStore module 'PostalscodeHousenumber' is ready for use. It as proven it's worth in NL and LU for retrieving streetname, Townshipname and finegraned geolocation. But improvement is always possible and Everybody is invited to help. Please help, please join if you have anything to add, a bug to report, a feature-request, another service-supplier to add. Here is how:
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

- Download from the AppStore;
- Also download the Apps 'AddressServiceForNlByBAG', 'AddressServiceForNlByPDOK', 'Unittesting' and 'ObjectHandling';
- Add the TestArea-, Configuration- and Country-snippets in folder /\_UseMe to pages in your application, as you see fit;
- Add the startup routine ASu_PostalcodeHousenumber to your project's startup routine;
- Assign project's user roles to the module roles 'administrator' and 'user' as you see fit.
- Optionally add Luxembourg to the countries:
-- Import App 'AddressServiceForLuByTieka'
-- Reïnstall exluded documents 'Snippet_DatasourceTieka_withDependencies' and 'ACT_LU_Tieka_Get_Address_withDependencies' over their original documents 'Snippet_DatasourceTieka' by copy and pasting their contents.
- Start the App and go to configuration page and set the parameters per country
- Retrieve API-keys from the Source you use, if a API-key is required. For instance send a mail to dataplatform@kadaster.nl to use PDOK or BAG.
- Optionally set the parameters for country LU.

Works out of the box. 

Known bugs

...

Frequently Asked Questions

Q: ...
A: ...
