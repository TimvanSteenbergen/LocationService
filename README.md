Description

Upon entering a country, postalcode, housenumber and optionally an extension, you will get in return: Streetname, Cityname Geolocation (Longitude and Latitude).

In NL and LU you will receive the most detailed data. And fully free of charge. It is covered worldwide for a broad geolocation.

This module is set-up to use multiple webservice-suppliers. Mostly one or some for each country, or as fallback Zippomoto for worldwide basic data. It is also possible to have a local database for known addresses, reducing API-calls and improving speed (still to implement).

Each supplier has it's own module and is being maintained by it's owner. Interfacing is the same for every supplier, the inner workings is upto them.
Typical usage scenario

    Webshops. Reduce the customer's address-typos which can result in returned deliveries.
    Any Customer address registration.
    Tracking information

Features and limitations

    Multiple webservice-providers available
    Building your own local database
    Free services where available
    So far only limited number of suppliers implemented: NL

Dependencies

    Module CommunityCommons; https://marketplace.mendix.com/link/component/170
    Module Unittesting; only for running the tests. Unittesting is not needed for production.
    Module ServiceAtMendixCloud;  https://marketplace.mendix.com/link/component/117606
    Module SystemManagement; https://marketplace.mendix.com/link/component/109748/Tieka/EnvironmentVariables

Installation

    Download from the AppStore;
    Install the dependencies;
    Get a consumer on service.mendixcloud.com

Using it from your Project Pass values for country, postalcode, housenumber and you will get the addressinformation containing street, city and geolocation in return.