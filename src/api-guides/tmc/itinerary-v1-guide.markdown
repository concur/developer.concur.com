---
title: Guide to the Itinerary v1 API, TMC Edition
layout: reference
---

### Last Revised: October 20 , 2020

* About this Guide
-   2: Purpose of Document
-   3: Itinerary API v1.1 Overview
-   4: Target Audience
-   5: Professional and Standard Editions
-   6: Prerequisites................................................................................................
-   7: Objectives
-   8: Development Environment
-   9: Travel Access Control Service
-   10: Application Request Procedure
-   11: Migrating to an Access Controlled Application
-   12: Company Level Authentication
-   13: Obtain Company Level Refresh Token
   - Descriptions
-   14: Obtain Company Level Access Token
   - Descriptions
-   15: Application Scopes
-   16: Geolocations
-   17: User Profile Web Service
-   18: Itinerary Web Service..............................................................................
      - Create a basic itinerary
      - Update an itinerary
      - Cancel an itinerary
      - Retrieve a list of trip summaries by date
      - Retrieve a list of trip summaries by traveler
      - Retrieve trip details
-   19: Travel Search Events Service
-   20: FAQ
-   21: Error Handling
   - Development Support
-   22: Support SAP Concur correlationID...........................................................

## Itinerary v1.1 API Overview

This endpoint provides detailed travel itinerary information for a specified traveler or traveler’s trip ID. It compliments internal versions of travel itinerary data synchronizations to Travel Reporting tools, agency tools, or travel supplier queues. The Travel Itinerary API is publicly exposed and allows RESTful developed applications to retrieve the most recent information about a traveler’s trip regardless of booking source. Trip details include destination, departure and arrival
dates, flight details, lodging, transportation and company custom information. This version of the API was originally released in late 2012.

Be aware of the following:

* **Infinite variables:** Certain scenarios have an infinite number of variables or extremely unusual circumstances, like rare cancellation or refund situations. So, not all scenarios can be presented in this guide. Also, certain processes may be influenced by third- or fourth-party providers. In some cases, you must contact the provider directly.
* **User interface, fees, rates, schedules:** When other providers change their user interface (for example, web site) or their fees/rates/schedules, they are under no obligation to make us aware of those changes. If a screen sample in this guide is outdated because of a change made by a provider, we will update that screen sample when we become aware of the change and at our earliest convenience.
* **Permissions:** A company's admin may or may not have the correct permissions to manage the feature described in this guide. If an admin needs to manage this feature and does not have the proper permissions, they should contact the company's SAP Concur administrator.

Also, the admin should be aware that some of the tasks described in this guide cannot be completed by the company. In this case, the client must contact their TMC (if a TMC provides their support) or their SAP Concur administrator.

### Target Audience

**Primary audience** - TMC Partners who plan to develop a SAP Concur platform certified application to support the Travel Itinerary API v1. 0

**Secondary audience** - Customers and third party developers who wish to develop an internal-only application or vendor application to support SAP Concur platform’s Itinerary v1 API. Internally developed applications do not require application certification, however, most the specifications in this document should be considered best practices application development and support. Third party developed applications, branded for usage by agencies, must be certified.

### Professional and Standard Editions

This guide discusses both Professional and Standard Travel. In those cases where a feature applies to one but not the other, that difference is noted. For the Itinerary API, there is no difference.

### Prerequisites

You should have some background with core SAP Concur applications and services such as Concur Travel and Concur Travel Administration. The following list of technical knowledge and skills will aid in the development and certification of your application.

* Business travel industry experience
* Concur Travel and Expense experience
* Concur Travel System Administration, Agency Configuration Administration, Expense Administration, User Administration experience
* Concur traveler profile / GDS Profiles / Concur XML Profile Sync
* RESTful API / XML development, OAuth 2.0, data structures
* Browse https://developer.concur.com, for information on authentication and relevant APIs.

### Objectives

After reviewing this document, you will have a better understanding of how to:

* Develop integrations (applications) using the SAP Concur platform.
* Support structures and elements of our Itinerary API v1.
* Obtain a company level OAuth refresh token.
* Obtain a company level OAuth access token.
* Generate general receipt type data (JSON) at point of sale.
* Capture or manage the traveler’s UUID during transaction process.
* POST the eReceipt using UUID as matching fact.
* View the receipt data and rendered image in Concur Expense.
* Record the correlation_ID.
* Support Itinerary API v1 error conditions.
* Prepare for application certification.
* Prepare for application enablement & deployment.

### Development Environment

The following is a general list of items we provide that are necessary for application development and testing:

* A Professional edition instance of SAP Concur Travel or SAP Concur Travel & Expense.
* A second instance of SAP Concur Travel hosted in a data center hosted in a second data center.
* Default travel configuration.
* Default agency configuration with SAP Concur-Sabre PCC.
* Sandboxes may not have SAP Concur Travel booking capabilities. It is available upon request.
* To access corporate discounts the application must be registered in our Travel Supplier system.
* A default “development” app with a unique Client ID, Client Secret, and applicable scopes. Log a case to request additional applications or scopes.
* Sandbox Admin credentials with demo / dev user credentials. Log a case to request additional permissions or users.
* Access developer.concur.com for the latest information on the following:
    * [Itinerary API v1](https://developer.concur.com/api-reference/travel/itinerary/itinerary.html)
    * [Authentication](https://developer.concur.com/api-reference/authentication/company-auth.html)
* Access to RESTful development tool such as POSTMAN or SOAPUI to send JSON/XML requests and receive XML responses.

> **NOTE**: To retrieve a traveler’s itinerary and profile with program loyalty information and form of payment information, your application must be registered in our travel supplier system. This is a managed procedure and must be requested.

> **NOTE**: To retrieve a traveler’s itinerary, profile, and form of payment within a specific agency and agency configuration, you must register your agency Company UUID with your Application ID. This is a managed procedure and will be required before proceeding with development.

## Travel Access Control Service

A new travel access control service has been built into the Travel Profile and Travel Itinerary API. This service, managed internally by us, can be used when specified by settings defined in agency applications. Agency applications that are deployed to enterprises that are serviced by multiple agencies are required to integrate with this service.

App Center partners, Triplink suppliers, and  clients can use the Travel Profile and Itinerary APIs as is. Their applications will not be affected, and their endpoint destinations remain the same. Partner applications will be allowed to use their user-level tokens to retrieve profiles for an individual or company-level tokens to retrieve profiles from an entire enterprise organization regardless of agency service affiliation or number of agency configurations.

For TMCs using the Itinerary API and Travel Profile API, the access control service has been built into the Itinerary and Profile web service. Data returned by the API is now controlled by a system that monitors all active Agency IDs and their associative active Travel Configuration IDs. Itinerary data associated with a different agency ID will NOT be returned. To use this security feature, an agency UUID must be specified in the properties (profile) of the agency’s application ID (Client_ID).

## Application Request Procedure

Please use the following checklist when submitting an application request:

* NEW application: A Super Site ID must be provided upon application request. The site ID / super site ID is commonly referred to as CliqID. The Super Site ID is the CliqID of the managing TMC site.
* Please provide a list of active companies (CliqIDs) and active travel configuration IDs if possible. Your Platform Enablement PM will be able to help provide this information if needed.
* Please provide a list of active companies from affiliate and/or wholly owned subsidiary agencies.
* Please provide site IDs of any additional super-sites.
* Please provide a list of active companies that are hosted in our EMEA data center.
* Our application management team will create your application, along with the necessary application scopes, grant types and permissions. Your site ID, in UUID format, will be incorporated into that application’s profile. This is a managed request process, internal to us.
* Your Travel Solutions / Platform Partner Enablement representative will securely provide an Application ID (commonly known as client_id) and Secret (client_secret). We will provide at least one development app ID (DEV) and reserve a production app ID (PROD) upon completion of application certification.
* If necessary, we can create and reserve applications for migration purposes – as companies transition from Agency A to Agency B, we will allow specific agency applications permissions to access all company data until the migration is complete.
* Agencies may continue to work with Travel Solutions / Platform Partner.
* Agencies certified to use access-controlled applications may now use the designated application’s deep link to connect companies to agency applications. This connection process has not changed – access controls are managed at the application level, not at the OAuth token or connection level.

##  Migrating to an Access Controlled Application

* Until further notice, the process for supporting access controls is the same as the previous list of steps. We will require the creation of NEW applications as opposed to updating existing applications.
* Until further notice, we require a phased transition of your existing customers to the new applications as opposed to a complete cutover.
* Please provide a list of connected customers to your existing application including both company name as it appears in Concur Travel & Expense and site ID.
* For verification purposes, we will compare that data to our internal API as well as data stored in our Travel system.
* A Super Site ID must be provided upon application request. The site ID / super site ID is commonly referred to as CliqID. The Super Site ID is the CliqID of the managing TMC site.
* Please provide a list of active companies (CliqIDs) and active travel configuration IDs if possible. Your Platform Enablement PM will be able to help provide this information if needed.
* We will work with you to identify no more than 10 companies to pilot test your new application. We ask that you closely monitor, if possible, average response times for obtaining a list of created or changed itineraries and average response times for individual itineraries.
* Escalate any response time deltas beyond your service level agreements or scheduled job windows.
* Please escalate any issues or response error codes to us immediately.

## Company Level Authentication

Your application will obtain and store one company-level OAuth refresh token for each company that opts to use your application. You will obtain that authenticated refresh token via an authorized 24-hour single-use request token. Your 24-hour request token allows you to obtain a six month refresh token that is keyed off a unique application identifier, application secret, and the company’s UUID. The refresh token will be used repeatedly to obtain 60-minute access (bearer) tokens that your application will use to conduct transaction API calls to and from the SAP Concur platform. If you plan to deploy your application across specific agencies or travel configurations within a single company, we can provide that capability via the Travel Access Control Service.

The following is a summary of steps necessary to obtain a company-level refresh token:

* Obtain company name and company ID (also known as CliqID).
* Authorized SAP Concur representatives will generate 24-hour request tokens and issue the tokens using secured and encrypted communication methods.
* Use the 24-hour request token to generate a refresh token. The request token can only be used up five times.
* Store and reuse the refresh_token – a UUID4 identifier that allows your application to obtain fresh access_tokens.
* Use the 60 minute access_tokens to make transaction API calls.
* Develop a process that updates refresh_tokens before their 6 month expiration period.
* Develop a process that obtains access tokens before the 60 minute expiration period.
* Avoid generating new access tokens for repeated transactions within a 60 minute time period.


### Obtain Company Level Refresh Token


REQUEST

```
POST https://us.api.Concursolutions.com/oauth2/v0/token
```
HEADER

```
Content-Type:application/x-www-form-urlencoded
```

BODY

```
client_id:c14f2547##############e94f235c
client_secret:1bfb####-#####################245ce
grant_type:password
username:3b#####################ecd
password:fd44###################5d
credtype:authtoken
```

RESPONSE

```
{
    "expires_in": 3600,
    "scope": "openid TRVPRF PASSV COMPD EMERG TSAI TMCSP MEDIC UNUTX USER COMPANY NOTIF FOP user_read user.read company.read",
    "token_type": "Bearer",
    "access_token": "BYxVfClZpo-zw…",
    "refresh_token":"a95caa0f-249a…",
    "refresh_expires_in": 1517039403,
    "id_token": "4n7i2-e9zP9qrpc4B…",
    "geolocation": "https://us.api.Concursolutions.com"
}
```

### Descriptions

* The **expires_in** value is returned in seconds. Your access_token is valid for sixty minutes.
* The **scopes** returned in the response are what your application has been registered to work with. Scopes are selectively enabled based on the functionality required. The values returned in the response should never change. If new scopes are added, your application will require re-certification.
* The **token_type** – We return the value of “Bearer,, an industry standard. The value of “Bearer” can be interpreted as “allow access to the bearer of this token.”
* The **access_token**, a JWT, informs us that the bearer of the returned token has been authorized to access our API and perform specific actions as specified by the scopes that have been granted. The access_token is valid for sixty minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The **refresh_token**, also a JWT, is the unique token that contains the information required to obtain a new access_token or id_token. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different refresh_token value.
* The value in **refresh_expires_in** is returned in epoch time. Use a library that provides conversion capability. For a UI version, navigate to https://www.epochconverter.com.
* The **id_token**, also a JWT, is returned. For company-level or enterprise-level applications, there is little need to retrieve details of the company-level authenticated user unless it is for auditing purposes. The information stored in the ID token JWT is necessary for user-level mobile-based based applications such as Uber or Triplink supplier applications like Avis or Marriott.
* The value for **geolocation** should be stored as your application’s base URI. Since we have multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives **error code 16, “invalid request”,** **user lives elsewhere** , your application must be able to submit a second request to “us.api.concursolutions.com” or “emea.api.concursolutions.com” and store that geolocation. The geolocation also identifies geographically where the user is stored.
* Store the refresh token, access tokens, expiration date and instance URL (geolocation) along with your internal information about the company’s profile.

> **IMPORTANT**: Do not append application keys and values to the request URL. Requests containing confidential keys and values will be rejected. Ensure your web servers are not configured with TLS V1.1. https://assets.concur.com/concurtraining/cte/en-us/FAQ_TLS_1.1_End_of_Support.pdf

> **NOTE**: Remove `charset=utf-8` from content-type header in your request. Our implementation of OAuth2, according to the IETF standards https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-B, requires allclients to remove the `charset=utf-8` from the Content-Type header.

### Obtain Company Level Access Token

REQUEST

```
POST https://us.api.Concursolutions.com/oauth2/v0/token
```

HEADER

```
Content-Type:application/x-www-form-urlencoded
```

BODY

```
client_id:c14f2547##############e94f235c
client_secret:1bfb####-#####################245ce
grant_type:refresh_token
refresh_token: {refresh_token}
```

RESPONSE

```
{
    "expires_in": 3600,
    "scope": "openid TRVPRF PASSV COMPD EMERG TSAI TMCSP MEDIC UNUTX USER COMPANY NOTIF FOP user_read user.read company.read",
    "token_type": "Bearer",
    "access_token": "BYxVfClZpo-zw…",
    "refresh_token":"a95caa0f-249a…",
    "refresh_expires_in": 1517039403,
    "id_token": "4n7i2-e9zP9qrpc4B…",
    "geolocation": "https://us.api.Concursolutions.com"
}
```

#### Descriptions

* The **expires_in** value is returned in seconds. Your access_token is valid for sixty minutes.
* The **scopes** returned in the response are what your application has been registered to work with. Scopes are selectively enabled based on the functionality required. The values returned in the response should never change. If new scopes are added, your application will require re-certification.
* The **token_type** – We return the value of “Bearer", an industry standard. The value of “Bearer” can be interpreted as “allow access to the bearer of this token.”
* The **access_token**, a JWT, informs us that the bearer of the returned token has been authorized to access our API and perform specific actions as specified by the scopes that have been granted. The access_token is valid for sixty minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The **refresh_token**, also a JWT, is the unique token that contains the information required to obtain a new access_token or id_token. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different refresh_token value.
* The value in **refresh_expires_in** is returned in epoch time. Use a library that provides conversion capability. For a UI version, navigate to https://www.epochconverter.com.
* The **id_token**, also a JWT, is returned. For company-level or enterprise-level applications, there is little need to retrieve details of the company-level authenticated user unless it is for auditing purposes. The information stored in the ID token JWT is necessary for user-level mobile-based based applications such as Uber or Triplink supplier applications like Avis or Marriott.
* The value for **geolocation** should be stored as your application’s base URI. Since we have multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives **error code 16**, “**invalid request**, **user lives elsewhere** , your application must be able to submit a second request to “us.api.concursolutions.com” or “emea.api.concursolutions.com” and store that geolocation. The geolocation also identifies geographically where the user is stored.
* Store the refresh token, access tokens, expiration date and instance URL (geolocation) along with your internal information about the company’s profile.

> **IMPORTANT**: Do not append application keys and values to the request URL. Requests containing confidential keys and values will be rejected. Ensure your web servers are not configured with TLS V1.1. https://assets.concur.com/concurtraining/cte/en-us/FAQ_TLS_1.1_End_of_Support.pdf

> **NOTE**: Remove `charset=utf-8` from content-type header in your request. Our implementation of OAuth2, according to the IETF standards https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-B, requires all clients to remove the `charset=utf-8` from the Content-Type header.

##  Application Scopes

Development travel applications by default have the following scopes registered:

* openid
* user.read
* company.read
* FOP
* GHOST
* TRVPRF
* PASSV
* EMERG
* TSAI
* TMCSP
* MEDIC
* UNUTX
* NOTIF
* COMPD
* ITINER

Receipts (receipts.read, receipts.write, receipts.writeonly) and Travel Request scopes for development applications are available upon request.

For security purposes, production itinerary applications will have limited scopes registered. The designated scopes are:

* openid
* ITINER

Explanations for these scopes are documented here:

* https://developer.concur.com/api-reference/authentication/scopes.html#connectscopes
* https://developer.concur.com/api-reference/authentication/scopes.html#v4apiscopes

If you wish to have your application include additional scopes or endpoints, you must have your application re-certified.

## Geolocations

We have multiple [data centers](https://developer.concur.com/platform/base-uris.html):

* United States: https://us.api.concursolutions.com
* EMEA: https://emea.api.concursolutions.com
* Public Sector: https://usg.api.concursolutions.com
* China: https://www-cn.api.concurcdc.cn
* Implementation: Not Supported

Host Location|Geolocation based on location of Company GUID|URL to use for Travel Itinerary
------|-----|-----
EMEA|https://emea.api.concursolutions.com/oauth2/v0/token|https://emea.api.Concursolutions.com/api/travelprofile/v2.0/profile
US|https://us.api.concursolutions.com/oauth2/v0/token|https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile
PSCC|https://usg.api.Concursolutions.com/oauth2/v0/token|https://usg.api.Concursolutions.com/api/travelprofile/v2.0/profile

## User Profile Web Service

### Get User Information

https://developer.concur.com/api-explorer/v3-0/Users.html

If you are still in transition from legacy Profile Sync to the Travel Profile API, it may be necessary to use the User API to retrieve user’s login IDs or Email IDs – which the Travel Itinerary API v1.x Web Service uses as its matching fact for Travel Itinerary retrievals or updates.

### Retrieve UUID for All Active Users

GET

```
https://us.api.concursolutions.com/users?offset= 10 0&limit=100 0 &isactive=true
Authorization: Bearer {access_token}
```

### Retrieve UUID by Login ID

GET

```
https://us.api.concursolutions.com/users/?loginid=logind_id@domain
Authorization:Bearer {access_token}
```

### Retrieve UUID by Primary Email ID

GET

```
https://us.api.concursolutions.com/users/?primaryemail=email@domain.com
Authorization: Bearer {access_token}
```

RESPONSE

```
{
    "total": "1",
    "offset": 0,
    "limit": 100,
    "companyinfo": {
        "name": "Company Name, Inc",
        "address": "601 108th Ave NE \ Suite 1000",
        "city": "Bellevue",
        "state": "WA",
        "zip": "98004",
        "country": "US"
    },
    "Items": [
        {
            "Active": true,
            "CountryCode": "US",
            "CellPhoneNumber": "425-590-5000",
            "PrimaryEmail": "Email1@domain.com",
            "EmployeeID": 106,
            "ID": "### UUID ####",
            "Emails": {
                "PrimaryEmail": "Email1@domain.com",
                "VerifiedEmail": null,
                "email2": "Email2@domain.com",
                "email3": "",
                "email4": "",
                "email5": ""
            },
            "OrganizationUnit": null,
            "MiddleName": "Middle",
            "LastName": "Last
            "FirstName": "first",
            "LoginID": "login_id@domain.com"
        }
    ]
}
```

>NOTE: Store the concur-correlationid value returned in the header response for logging, troubleshooting, or case escalation purposes

>NOTE: Make note of the geolocation where the company user exists. If the user’s geolocation is unknown or incorrect, then default the request to https://us.api.concursolutions.com. An error message will return the correct geolocation for the user.

## Itinerary Web Service

The Itinerary Web Service allows Travel Management Companies (TMC), SAP Concur clients, and third-party developers to create, update and view travel related events in the Concur Travel system. TMCs may post bookings for any travel type but must register as an authorized Travel Supplier. This web service can also be used by SAP Concur clients and third-party developers to request trip information for Concur Travel users. The public Itinerary XSD can be found here. In
addition, the GetList XSD can be found here.

### Create a Basic Itinerary

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#postdetails

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#postut

**REQUEST**

POST

```
{{geolocation}}
/api/travel/trip/v1.1/?userid_type=login_id&userid_value=user@domain.com

Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
   <RuleViolations />
   <ExternalLinks />
   <FormsOfId />
   <ClientLocator>XYZ123</ClientLocator>
   <ItinSourceName>AGENCY_OBT</ItinSourceName>
   <TripName>Trip from Milan to Rome2</TripName>
   <Comments />
   <StartDateLocal>2021-01-11T08:55:00</StartDateLocal>
   <EndDateLocal>2021-01-15T12:35:00</EndDateLocal>
   <StartDateUtc>2021-01-11T15:55:00</StartDateUtc>
   <EndDateUtc>2021-01-15T14:35:00</EndDateUtc>
   <TripStatus>0</TripStatus>
   <DateCreatedUtc>2020-01-06T09:05:16</DateCreatedUtc>
   <DateModifiedUtc>2020-01-06T09:05:16</DateModifiedUtc>
   <IsDemoTrip>false</IsDemoTrip>
   <ReminderEmailSent>false</ReminderEmailSent>
   <BookedByFirstName>AGENT-FIRST</BookedByFirstName>
   <BookedByLastName>AGENT-LAST</BookedByLastName>
   <IsBillable>false</IsBillable>
   <DateBookedLocal>2020-01-06T00:00:00-04:00</DateBookedLocal>
   <Bookings>
      <Booking>
         <Segments>
            <Hotel>
               <ConfirmationNumber>339920160201</ConfirmationNumber>
               <Currency>EUR</Currency>
               <DailyRate>150.0000</DailyRate>
               <DateCreatedUtc>2020-01-06T14:16:59</DateCreatedUtc>
               <DateModifiedUtc>2020-01-06T16:00:26</DateModifiedUtc>
               <EndDateLocal>2021-01-15T00:00:00</EndDateLocal>
               <Name>William Never01</Name>
               <NumPersons>1</NumPersons>
               <NumRooms>1</NumRooms>
               <RoomType>King</RoomType>
               <StartAddress>Hotel Novotel Roma Est</StartAddress>
               <StartCity>ROM</StartCity>
               <StartCountry>IT</StartCountry>
               <StartDateLocal>2021-01-11T13:59:59</StartDateLocal>
               <TotalRate>1000.0000</TotalRate>
               <Vendor>$$</Vendor>
               <VendorName>HRS</VendorName>
               <Charges>
                  <Rate>
                     <Amount>150.0000</Amount>
                     <Currency>EUR</Currency>
                     <IsPrimary>false</IsPrimary>
                     <NumUnits>4.0000</NumUnits>
                     <PerUnit>DAY</PerUnit>
                     <SemanticsCode>ROOMRATE</SemanticsCode>
                     <SemanticsVendorType>H</SemanticsVendorType>
                     <StartDateLocal>2021-01-11T14:00:00</StartDateLocal>
                  </Rate>
               </Charges>
            </Hotel>
            <Car>
               <AirCondition>R</AirCondition>
               <Body>C</Body>
               <Class>I</Class>
               <ConfirmationNumber>1252246711</ConfirmationNumber>
               <Currency>EUR</Currency>
               <DateCreatedUtc>2020-01-06T03:14:14</DateCreatedUtc>
               <DateModifiedUtc>2020-01-06T03:14:14</DateModifiedUtc>
               <DiscountCode>XZ23S17</DiscountCode>
               <EndCityCode>ROM</EndCityCode>
               <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
               <EndDateUtc>2021-01-15T17:00:00</EndDateUtc>
               <NumCars>1</NumCars>
               <PhoneNumber>8443708304</PhoneNumber>
               <RateCode>IH9564</RateCode>
               <StartCityCode>ROM</StartCityCode>
               <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
               <StartDateUtc>2021-01-15T23:00:00</StartDateUtc>
               <Status>HK</Status>
               <TotalRate>45.9100</TotalRate>
               <Transmission>A</Transmission>
               <Vendor>SX</Vendor>
               <VendorName>SIXT</VendorName>
               <Charges>
                  <RateWithAllowance>
                     <AllowanceIsUnlimited>true</AllowanceIsUnlimited>
                     <Amount>40.0000</Amount>
                     <Currency>EUR</Currency>
                     <IsPrimary>true</IsPrimary>
                     <NumUnits>1.0000</NumUnits>
                     <PerUnit>DAY</PerUnit>
                     <SemanticsCode>DAYS</SemanticsCode>
                     <SemanticsVendorType>C</SemanticsVendorType>
                     <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                  </RateWithAllowance>
               </Charges>
            </Car>
            <Air>
               <ClassOfService>S</ClassOfService>
               <ConfirmationNumber />
               <EndCityCode>ROM</EndCityCode>
               <EndDateLocal>2021-01-15T08:30:00</EndDateLocal>
               <FlightNumber>2013</FlightNumber>
               <StartCityCode>MIL</StartCityCode>
               <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
               <Vendor>AZ</Vendor>
               <VendorName>Alitalia</VendorName>
               <ParseErrors />
               <RuleViolations />
               <Status>HK</Status>
               <VirtualCreditCardType />
               <OperatedByVendor />
               <OperatedByVendorName />
               <FareBasisCode />
               <Remarks />
               <Meals />
               <Bags />
               <PerDiemLocation />
               <IsPreferredVendor>1</IsPreferredVendor>
               <Duration>80</Duration>
               <NumStops>0</NumStops>
               <StartTerminal>LIN</StartTerminal>
               <EndTerminal>FCO</EndTerminal>
               <Miles>303</Miles>
               <Cabin />
               <AircraftCode>A320</AircraftCode>
               <Charges>
                  <Fixed>
                     <Currency>EUR</Currency>
                     <Amount>333.75</Amount>
                     <Description>Airline Price</Description>
                     <IsPaid>false</IsPaid>
                     <IsPrimary>true</IsPrimary>
                     <SemanticsVendorType>A</SemanticsVendorType>
                     <Vendor>AZ</Vendor>
                     <VendorName>Alitalia Airlines</VendorName>
                     <VendorChargeCode />
                     <SemanticsCode>SEGFEE</SemanticsCode>
                  </Fixed>
               </Charges>
               <Seats>
                  <AirSeat>
                     <PassengerRph>1</PassengerRph>
                     <Status />
                     <SeatNumber />
                  </AirSeat>
               </Seats>
            </Air>
            <Air>
               <ClassOfService>S</ClassOfService>
               <ConfirmationNumber />
               <EndCityCode>LIN</EndCityCode>
               <EndDateLocal>2021-01-15T08:20:00</EndDateLocal>
               <FlightNumber>2038</FlightNumber>
               <StartCityCode>FCO</StartCityCode>
               <StartDateLocal>2021-01-11T09:30:00</StartDateLocal>
               <Vendor>AZ</Vendor>
               <VendorName>Alitalia Airlines</VendorName>
               <ParseErrors />
               <RuleViolations />
               <Status>HK</Status>
               <VirtualCreditCardType />
               <OperatedByVendor />
               <OperatedByVendorName />
               <FareBasisCode />
               <Remarks />
               <Meals />
               <Bags />
               <PerDiemLocation />
               <IsPreferredVendor>1</IsPreferredVendor>
               <Duration>80</Duration>
               <NumStops>0</NumStops>
               <StartTerminal />
               <EndTerminal>LIN</EndTerminal>
               <Miles>303</Miles>
               <Cabin />
               <AircraftCode>A320</AircraftCode>
               <Charges>
                  <Fixed>
                     <Currency>EUR</Currency>
                     <Amount>335.75</Amount>
                     <Description>Airline Price</Description>
                     <IsPaid>false</IsPaid>
                     <IsPrimary>true</IsPrimary>
                     <SemanticsVendorType>A</SemanticsVendorType>
                     <Vendor />
                     <VendorChargeCode />
                     <SemanticsCode>SEGFEE</SemanticsCode>
                  </Fixed>
               </Charges>
               <Seats>
                  <AirSeat>
                     <PassengerRph>1</PassengerRph>
                     <Status />
                     <SeatNumber />
                  </AirSeat>
               </Seats>
            </Air>
         </Segments>
         <AirlineTickets />
         <AirfareQuotes>
            <Quote>
               <DateCreatedUtc>2020-10-06T09:05:16</DateCreatedUtc>
               <DateModifiedUtc>2020-10-06T09:05:16</DateModifiedUtc>
               <Taxes />
               <AirlineCharges />
               <TotalFare>400</TotalFare>
               <TotalFareCurrency>EUR</TotalFareCurrency>
               <BaseFare>333.75</BaseFare>
               <BaseFareCurrency>EUR</BaseFareCurrency>
            </Quote>
         </AirfareQuotes>
         <MiscChargeOrders />
         <RailPayments />
         <RailQuotes />
         <Passengers>
            <Passenger>
               <NameFirst>William</NameFirst>
               <NameLast>Never1</NameLast>
            </Passenger>
         </Passengers>
         <PhoneNumbers />
         <WebAddresses />
         <PassPrograms />
         <Remarks />
         <Charges />
         <RecordLocator>EYQA1001</RecordLocator>
         <BookingSource>POSTMAN</BookingSource>
         <DateCreatedUtc>2020-10-06T09:05:16</DateCreatedUtc>
         <DateModifiedUtc>2020-10-06T09:05:16</DateModifiedUtc>
         <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
         <IsCliqbookSystemOfRecord>false</IsCliqbookSystemOfRecord>
         <FormOfPaymentName />
         <ItinSourceName>API</ItinSourceName>
         <PassengerCount>1</PassengerCount>
         <CalculatedAirCharges>
            <CalculatedAirCharge>
               <Charges />
               <Text>Estimated Air Fare</Text>
               <BaseFare />
               <TotalFareCurrency>EUR</TotalFareCurrency>
               <TotalFare>333.75</TotalFare>
               <NetFare>333.75</NetFare>
               <FareType>Quote</FareType>
               <Tax />
            </CalculatedAirCharge>
         </CalculatedAirCharges>
      </Booking>
   </Bookings>
</Itinerary>

```
**RESPONSE**

200 Success

```
<?xml version="1.0" encoding="utf-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
 <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZkYtp0lWbN5gQkBMQfjRbbc$sbDCQ</id>
    <ItinLocator>gWu9dRi$pEjxZkYtp0lWbN5gQkBMQfjRbbc$sbDCQ</ItinLocator>
    <TripId>gWu9dRi$pEjxZkYtp0lWbN5gQkBMQfjRbbc$sbDCQ</TripId>
    <BookedByFirstName>AGENT-FIRST</BookedByFirstName>
    <BookedByLastName>AGENT-LAST</BookedByLastName>
    <ClientLocator>XYZ123</ClientLocator>
    <TripLinkLocator>NYR5ZT</TripLinkLocator>
    <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
    <TripName>Trip from Milan to Rome2</TripName>
    <TripStatus>0</TripStatus>
    <Bookings>
        <Booking>
            <BookingOwner>ConcurConnectAPI</BookingOwner>
            <Source>ConcurConnectAPI</Source>
            <BookingSource>POSTMAN</BookingSource>
            <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
            <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
            <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
            <RecordLocator>EYQA1001</RecordLocator>
            <AirfareQuotes>
                <Quote>
                    <BaseFare>333.75</BaseFare>
                    <BaseFareCurrency>EUR</BaseFareCurrency>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <TotalFare>400</TotalFare>
                    <TotalFareCurrency>EUR</TotalFareCurrency>
                </Quote>
            </AirfareQuotes>
            <Passengers>
                <Passenger>
                    <NameFirst>William</NameFirst>
                    <NameLast>Never1</NameLast>
                </Passenger>
            </Passengers>
            <Segments>
                <Hotel>
                    <ConfirmationNumber>339920160201</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DailyRate>150.0000</DailyRate>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <EndDateLocal>2021-01-15T00:00:00</EndDateLocal>
                    <Name>William Never01</Name>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <RoomType>King</RoomType>
                    <StartAddress>Hotel Novotel Roma Est</StartAddress>
                    <StartCity>ROM</StartCity>
                    <StartCountry>IT</StartCountry>
                    <StartDateLocal>2021-01-11T23:59:59</StartDateLocal>
                    <TotalRate>1000.0000</TotalRate>
                    <Vendor>$$</Vendor>
                    <VendorName>HRS</VendorName>
                    <Charges>
                        <Rate>
                            <Amount>150.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>false</IsPrimary>
                            <NumUnits>4.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T14:00:00</StartDateLocal>
                        </Rate>
                    </Charges>
                </Hotel>
                <Car>
                    <AirCondition>R</AirCondition>
                    <Body>C</Body>
                    <Class>I</Class>
                    <ConfirmationNumber>1252246711</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <DiscountCode>XZ23S17</DiscountCode>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
                    <NumCars>1</NumCars>
                    <PhoneNumber>8443708304</PhoneNumber>
                    <RateCode>IH9564</RateCode>
                    <StartCityCode>ROM</StartCityCode>
                    <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T14:00:00</StartDateUtc>
                    <Status>HK</Status>
                    <TotalRate>45.9100</TotalRate>
                    <Transmission>A</Transmission>
                    <Vendor>SX</Vendor>
                    <VendorName>SIXT</VendorName>
                    <Charges>
                        <RateWithAllowance>
                            <AllowanceIsUnlimited>true</AllowanceIsUnlimited>
                            <Amount>40.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>true</IsPrimary>
                            <NumUnits>1.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                        </RateWithAllowance>
                    </Charges>
                </Car>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T08:30:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:30:00</EndDateUtc>
                    <EndTerminal>FCO</EndTerminal>
                    <FlightNumber>2013</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>1</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>MIL</StartCityCode>
                    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
                    <StartTerminal>LIN</StartTerminal>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>333.75</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                            <Vendor>AZ</Vendor>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>LIN</EndCityCode>
                    <EndDateLocal>2021-01-15T08:20:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:20:00</EndDateUtc>
                    <EndTerminal>LIN</EndTerminal>
                    <FlightNumber>2038</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>2</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>FCO</StartCityCode>
                    <StartDateLocal>2021-01-11T09:30:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T08:30:00</StartDateUtc>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia Airlines</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>335.75</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
            </Segments>
        </Booking>
    </Bookings>
</Itinerary>
```

>**NOTE**: Submitting itinerary data with similar travel dates and trip data will result in multiple itineraries for the traveler if login_id is the only parameter used.

>**NOTE**: Store the returned TripID. This value is required for itinerary updates or cancellations.

>**NOTE**: For additional itinerary samples, please contact your Platform Enablement PM.

>**NOTE**: Store the concur-correlationid value returned in the header response for logging, troubleshooting, or case escalation purposes.

### Update an Itinerary

**REQUEST**

POST
```
{{geolocation}} /api/travel/trip/v1.1/?tripid={{stored TripID}}
userid_type=login_id&userid_value=user@domain.com

Authorization: Bearer {access_token}
```

BODY
```
<?xml version="1.0" encoding="UTF-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
   <RuleViolations />
   <ExternalLinks />
   <FormsOfId />
   <ClientLocator>XYZ123</ClientLocator>
   <ItinSourceName>AGENCY_OBT</ItinSourceName>
   <TripName>Trip from Milan to Rome UPDATED</TripName>
.
.
.
```
**RESPONSE**

200 Success

```
<<?xml version="1.0" encoding="utf-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
<id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
<ItinLocator>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</ItinLocator>
<TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
.
.
.
```

>**NOTE**: Use login ID and the original trip ID from the initial response as request parameters to update or modify an existing itinerary.

>**NOTE**: Add a date in the trip name for the traveler as an identifier. Store the last modified date value returned in the response for reporting or historical purposes.

>**NOTE**: When updating an existing itinerary, retain and resend all valid segments relevant to the original trip. Modified trip data will overwrite what was previously submitted. If a segment is not posted in a subsequent itinerary submission, that segment will not appear in Concur Travel.

### Cancel an Itinerary

**REQUEST**

POST

```
{geolocation} /api/travel/trip/v1.1/cancel?tripid={{stored TripID}}
userid_type=login_id&userid_value=user@domain.com
```
```
Authorization: Bearer {access_token}
```

BODY

```
{None}
```

**RESPONSE**


200 Success

```
<?xml version="1.0" encoding="utf-8"?>
<Message>Cancelled Successfully</Message>
```
### Retrieve a List of Trip Summaries by Date

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#getlist

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#getts


>**NOTE**: Refer to the above links for variations and commonly used parameters. The samples below are specific to company level or agency level requests.

>**NOTE**: Do not submit requests for date ranges beyond one calendar month. Repeated requests for long-range dates and large response payloads will result in service errors and application or domain exclusion from Web Services

>**NOTE: Avoid monthly release nights. The calendar is available [here](https://www.concurtraining.com/customers/tech_pubs/ReleaseCalendar/2020/2020-calendar-client.pdf). Avoid weekly maintenance hours typically between 5:00 PM and 7:00 PM Pacific.

>**NOTE**: The number of requests per minute from a specific domain should not exceed 4000 requests per minute or 240,000 requests per hour to the itinerary endpoint. This threshold applies to a single agency application that may be connected to multiple enterprise organizations.

**REQUEST**

GET

```
{geolocation}/api/travel/trip/v1.1/?userid_type=login&userid_value=ALL&lastMod
ifiedDate=YYYY-MM-DDT00:00:00&includeMetadata=true&ItemsPerPage=100&Page=1

Authorization: Bearer {access_token}
```
BODY

```
{None}
```

**RESPONSE**


200 Success

```
<ConnectResponse>
    <Metadata>
        <Paging>
            <TotalItems>1</TotalItems>
            <TotalPages>1</TotalPages>
            <CurrentPage>1</CurrentPage>
            <ItemsPerPage>100</ItemsPerPage>
        </Paging>
    </Metadata>
    <Data>
        <ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <ItineraryInfo>
                <BookingSource>POSTMAN</BookingSource>
                <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
                <Passengers>William Never1</Passengers>
                <RecordLocator>XYZ123, EYQA1001</RecordLocator>
                <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
                <TravelerFirst>William</TravelerFirst>
                <TravelerLast>Never10</TravelerLast>
                <TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
                <TripName>Trip from Milan to Rome UPDATED</TripName>
                <UserLoginId>demo10@pe30-connect.com</UserLoginId>
                <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
            </ItineraryInfo>
        </ItineraryInfoList>
    </Data>
</ConnectResponse>
```

>**NOTE**: Retrieve lists of trip summaries in periodic intervals based on the last modified date value. Queue the list of trip ids returned in the response along with the last modified date. To avoid duplicate trip ids, compare and remove duplicate trips previously retrieved based on the trip’s last modified date value.

>**NOTE**: The retrieval interval should never be less than ten minutes or six requests per hour. High volume sites, over twenty thousand bookings per month, will average one thousand bookings a day or sixty trips an hour.

>**NOTE**: Avoid retrieving trip details in bulk during business hours. The best hours to retrieve itineraries are between the hours of 9:00 PM to 3:00 AM Pacific. For organizations based in Europe and some parts of the APA, retrieve trip details between the hours of 6:00 PM to 12:00 AM GMT. This will vary by country.

### Retrieve a List of Trip Summaries by Traveler

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#getlist

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#getts

**REQUEST**

GET

```
{geolocation}/api/travel/trip/v1.1/?userid_type=login&userid_value=logindID@domain.com&
lastModifiedDate=YYYY-MM-DDT00:00:00&includeMetadata=true&ItemsPerPage=10&Page=1

Authorization: Bearer {access_token}
```

BODY

```
{None}
```

**RESPONSE**

200 Success

```
<ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <ItineraryInfo>
        <BookingSource>POSTMAN</BookingSource>
        <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
        <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
        <Passengers>William Never1</Passengers>
        <RecordLocator>XYZ123, EYQA1001</RecordLocator>
        <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
        <TravelerFirst>William</TravelerFirst>
        <TravelerLast>Never10</TravelerLast>
        <TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
        <TripName>Trip from Milan to Rome UPDATED</TripName>
        <UserLoginId>demo10@pe30-connect.com</UserLoginId>
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
    </ItineraryInfo>
</ItineraryInfoList>
```

>**NOTE**: Retrieve lists of trip summaries by login IDs in batches and periodic intervals based on overall booking volume. Queue the list of login_IDs and trip IDs by last modified date. To avoid repeatedly retrieving trip details with the same
trip ID, compare and remove duplicate trip IDs previously retrieved based on the trip’s last modified date value.

### Retrieve Trip Details

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#getdetails

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#gettd

**REQUEST**

GET

```
{geolocation}/api/travel/trip/v1.1/{tripid}

Authorization: Bearer {access_token}
```

BODY

```
{None}
```

RESPONSE

200 Success

```
<?xml version="1.0" encoding="utf-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
    <ItinLocator>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</ItinLocator>
    <TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
    <BookedByFirstName>AGENT-FIRST</BookedByFirstName>
    <BookedByLastName>AGENT-LAST</BookedByLastName>
    <ClientLocator>XYZ123</ClientLocator>
    <TripLinkLocator>MYR2UH</TripLinkLocator>
    <UserLoginId>demo10@pe30-connect.com</UserLoginId>
    <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
    <DateCreatedUtc>2020-10-18T22:26:53</DateCreatedUtc>
    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
    <TripName>Trip from Milan to Rome UPDATED</TripName>
    <TripStatus>1</TripStatus>
    <Bookings>
        <Booking>
            <BookingOwner>ConcurConnectAPI</BookingOwner>
            <Source>ConcurConnectAPI</Source>
            <BookingSource>POSTMAN</BookingSource>
            <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
            <DateCreatedUtc>2020-10-18T22:26:53</DateCreatedUtc>
            <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
            <RecordLocator>XYZ123</RecordLocator>
            <AirfareQuotes>
                <Quote>
                    <BaseFare>333.7500</BaseFare>
                    <BaseFareCurrency>EUR</BaseFareCurrency>
                    <DateCreatedUtc>2020-10-18T22:26:53</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:26:53</DateModifiedUtc>
                    <TotalFare>400.0000</TotalFare>
                    <TotalFareCurrency>EUR</TotalFareCurrency>
                </Quote>
            </AirfareQuotes>
            <Passengers>
                <Passenger>
                    <NameFirst>William</NameFirst>
                    <NameLast>Never1</NameLast>
                </Passenger>
            </Passengers>
        </Booking>
        <Booking>
            <BookingOwner>ConcurConnectAPI</BookingOwner>
            <Source>ConcurConnectAPI</Source>
            <BookingSource>POSTMAN</BookingSource>
            <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
            <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
            <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
            <RecordLocator>EYQA1001</RecordLocator>
            <AirfareQuotes>
                <Quote>
                    <BaseFare>333.7500</BaseFare>
                    <BaseFareCurrency>EUR</BaseFareCurrency>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <TotalFare>400.0000</TotalFare>
                    <TotalFareCurrency>EUR</TotalFareCurrency>
                </Quote>
            </AirfareQuotes>
            <Passengers>
                <Passenger>
                    <NameFirst>William</NameFirst>
                    <NameLast>Never1</NameLast>
                </Passenger>
            </Passengers>
            <Segments>
                <Hotel>
                    <ConfirmationNumber>339920160201</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DailyRate>150.0000</DailyRate>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <EndDateLocal>2021-01-15T00:00:00</EndDateLocal>
                    <Name>William Never01</Name>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <RoomType>King</RoomType>
                    <StartAddress>Hotel Novotel Roma Est</StartAddress>
                    <StartCity>ROM</StartCity>
                    <StartCountry>IT</StartCountry>
                    <StartDateLocal>2021-01-11T23:59:59</StartDateLocal>
                    <TotalRate>1000.0000</TotalRate>
                    <Vendor>$$</Vendor>
                    <VendorName>HRS</VendorName>
                    <Charges>
                        <Rate>
                            <Amount>150.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>false</IsPrimary>
                            <NumUnits>4.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T14:00:00</StartDateLocal>
                        </Rate>
                    </Charges>
                </Hotel>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T08:30:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:30:00</EndDateUtc>
                    <EndTerminal>FCO</EndTerminal>
                    <FlightNumber>2013</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>1</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>MIL</StartCityCode>
                    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
                    <StartTerminal>LIN</StartTerminal>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>333.7500</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                            <Vendor>AZ</Vendor>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>LIN</EndCityCode>
                    <EndDateLocal>2021-01-15T08:20:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:20:00</EndDateUtc>
                    <EndTerminal>LIN</EndTerminal>
                    <FlightNumber>2038</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>2</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>FCO</StartCityCode>
                    <StartDateLocal>2021-01-11T09:30:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T08:30:00</StartDateUtc>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>335.7500</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
                <Car>
                    <AirCondition>R</AirCondition>
                    <Body>C</Body>
                    <Class>I</Class>
                    <ConfirmationNumber>1252246711</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <DiscountCode>XZ23S17</DiscountCode>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
                    <NumCars>1</NumCars>
                    <PhoneNumber>8443708304</PhoneNumber>
                    <RateCode>IH9564</RateCode>
                    <StartCityCode>ROM</StartCityCode>
                    <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T14:00:00</StartDateUtc>
                    <Status>HK</Status>
                    <TotalRate>45.9100</TotalRate>
                    <Transmission>A</Transmission>
                    <Vendor>SX</Vendor>
                    <VendorName>Sixt</VendorName>
                    <Charges>
                        <RateWithAllowance>
                            <AllowanceIsUnlimited>true</AllowanceIsUnlimited>
                            <Amount>40.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>true</IsPrimary>
                            <NumUnits>1.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                        </RateWithAllowance>
                    </Charges>
                </Car>
            </Segments>
        </Booking>
    </Bookings>
</Itinerary>
```

## Travel Search Events Service

The Travel Search Event Subscription Service (ESS) implements Publish/Subscribe pattern using principles of Event Driven Architecture. It allows clients and partners to be notified through web services when search travel actions take place in connected companies. When the travel search event occurs in Concur Travel, ESS sends that event to the configured endpoint with relevant information.

https://developer.concur.com/api-reference/common/ess/getting-started.html

If an agency has a need to be notified for upcoming or modified travel plans for travelers to/from a specific country or if the agency wishes to be notified if an existing itinerary is being acted upon in Concur Travel, this service is available.
Contact your Platform Enablement PM for more information.

## FAQ

Q. Can I create a travel itinerary an itinerary response?

A. Yes. Be aware that there are several fields and custom fields in an itinerary response that are not necessary with an itinerary creation. Refer to developer.concur.com for specifics.

Q. Can anyone create a travel itinerary or use the booking endpoints?

A. No, your application must be authorized and registered in our Supplier system before submitting itineraries on behalf of a traveler with your company level token. Contact your Platform Enablement PM for details.

##   Error Handling
**REQUIRED**: Retain the GUID returned in all responses under the header “concur-correlationid”. It is a value that will be referenced to locate transactions in our logging system.

**REQUIRED**: Support the following HTTP error conditions / codes: https://developer.concur.com/api-reference/http-status-codes.html.

**REQUIRED**: Provide retry logic for timeouts and 500/503 errors.

**RECOMMENDED**: Provide your own unique “concur-correlationid” header and randomly generated value – inserted with a company_id for example. If you provide the following in your request header, we will return the same value in the response header, for example:

```
concur-correlationid: 2997-e17fb88b-5b9a-41b9-b285-6da70eeba98a
```

**RECOMMENDED**: Error logging - retain logs for a minimum of 7 days for troubleshooting and support.

## Development Support

* For travel configuration questions/support, contact Travel Solutions or your Alliance Manager.
* Review Release Notes regularly – API updates are delivered with monthly releases:
    * http://www.concurtraining.com/customers/tech_pubs/
    * http://www.concurtraining.com/customers/tech_pubs/TravelDocs/ReleaseNotes/_CCC_RN.htm
* Review content on https://developer.concur.com/ regularly.
* If you need access or permissions to preview content on http://developer.concur.com, please contact your Travel Solutions or Travel Support representative.
* For reproducible issues, log a case via case management system to the SAP Concur Support team. Support will escalate to respective Platform Partner Services and R&D teams.
    * Visit https://developer.concur.com/tools-support/support.html
    * Partner Support Case Management System - https://sapconcur.my.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi
* Support engineers attempt to reproduce your application’s issues using a RestUI based request/response application such as POSTMAN or SoapUI. Our application Analysts and Engineers are not developers so they do not require .C, .JS, or any other source language files.

Please have the following data and identifiers available:
* Application Identifiers:
   * Application Name (Your agency may have more than one certified application).
   * Brief application description.
   * Last 6 characters of your application’s client_ID.
   * DO NOT submit / paste full application IDs (keys), secrets, or OAuth tokens.
   * The UUID formatted concur-correlationID from your response headers.
* Company Identifiers:
   * Company Name or Customer Name.
   * The SAP Concur Company ID (also known as CliqID).
   * The Travel Config ID.
   * The expense entity code or entity ID.
   * The company GUID if available.
* Identifiers of affected areas:
   * Affected user(s) if applicable.
   * The employee name or employee ID.
   * The UUID if possible.
   * LoginID if necessary.
   * Expense report name / ID.
   * Invoice/Payment Request name/ ID.
   * Trip Itinerary name / Travel Request name/ ID.
   * Booking Segment name/source.
   * Trip ID.
   * Receipt ID.
   * Locator/PNR.
   * Date range.
* Reproduction Information:
   * Provide contextual information related to the issue so engineers have an understanding of what your application was attempting to do at the time.
   * Function –retrieving data or creating/updating data.
   * Parameter(s) – by creation date, last modified date, by ID, etc.
   * Affected product areas – Imaging, expense types, dates, amounts, city codes, workflow.
* API-transaction related information:
   * Token (never supply this via email).
   * Request URL.
   * Method (GET, POST, PUT).
   * Request Headers.
   * Request Body.
   * Response Headers.
   * Response Body.
   * Any additional log or response information relevant to the issue.

> **IMPORTANT NOTE**: DO NOT SEND CLIENT OR PARTNER SENSITIVE DATA such as OAuth refresh tokens, application_ids, application_secrets through email. Use secured channels ONLY!

## Support concur-correlationID

This is a screen shot of a typical “Body” response for retrieving a profile in POSTMAN.

Select “Headers” for the response headers. Note “concur-correlationid”

We require that you store the response GUID when an error occurs. When you log a case, please include the concur-correlationid GUID so we can retrieve the error(s) from our internal tools / logging system. This is what response headers look like in POSTMAN:

Here’s what it would look like when we search for your application’s errors using the concur-correlationID GUID. It is vital for troubleshooting efficiency.
