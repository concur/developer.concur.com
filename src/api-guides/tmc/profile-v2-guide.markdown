---
title: Guide to the Travel Profile v2 API, TMC Edition
layout: reference
---

## Travel: Travel Profile API Travel Service Guide i


- Last Revised: April 08,
- Travel Profile API Contents
- Section 1: IMPORTANT – About this Guide
- Section 2: Purpose of Scope Document
- Section 3: Travel Profile v2.0 - Purpose and Description
- Section 4: Target Audience
- Section 5: Professional and Standard Editions
- Section 6: Prerequisites
- Section 7: Objectives
- Section 8: Development Environment
- Section 9: Travel Access Control Service, February
- Section 10: Application Request Procedure
- Section 11: Migrating to an Access Controlled Application
- Section 12: Company Level Authentication
- Section 13: Obtain Company Level Refresh Token
   - Descriptions
- Section 14: Obtain Company Level Access Token
   - Descriptions
- Section 15: Application Scopes
- Section 16: Geolocations
- Section 17: User Profile Web Service
- Section 18: SAP Concur Unique User ID
- Section 19: Travel Profile v2.0 Web Service
   - GET Profile Information
   - CREATE Travel Profile
   - Minimum Elements Required to Create a New User
- Section 20: Create a Full Traveler Record
      - Update a Traveler’s Unused Tickets
      - Deactivate a Traveler Profile by Login ID
- Section 21: Validate Your XML Against Our XSD
- Section 22: Form of Payment Web Service
   - Create a Form of Payment by Login ID
   - Update Form of Payment by Login ID
      - Form of Payment Update Functionality
   - Retrieve Form of Payment
- Section 23: FAQ
- Last Revised: April 08, ii Travel: Travel Profile API Travel Service Guide
- Section 24: Travel Profile Error Messages and Codes
   - Error Messages
   - Error Codes
- Section 25: Error Handling
   - Development Support
- Section 26: Support SAP Concur CorrelationID



## Travel Profile v2.0 - Purpose and Description

This endpoint provides travel profile information for a specified traveler. It replaces the previous version of travel profile synchronization known as XML Profile Sync or XML Sync. While XML Profile sync is internal to the Concur Travel
offering, the travel profile APIs are publicly exposed and allows RESTful developed applications to pull and post information such as the traveler’s identity, contact information, rate preferences, discount codes by travel type, as well as custom
fields. The 2.0 version of the API was originally released in late 2016. The updated 2.1 version of the API, specific to TMCs, was released in December 2019.

Be aware of the following:

* **Infinite variables:** Certain scenarios have an infinite number of variables or extremely unusual circumstances, like rare cancellation or refund situations. So, not all scenarios can be presented in this guide. Also, certain processes may be influenced by third- or fourth-party providers. In some cases, you must contact the provider directly.
* **User interface, fees, rates, schedules:** When other providers change their user interface (for example, web site) or their fees/rates/schedules, they are under no obligation to make us aware of those changes. If a screen sample in this guide is outdated because of a change made by a provider, we will update that screen sample when we become aware of the change and at our earliest convenience.
* **Permissions:** A company's admin may or may not have the correct permissions to manage the feature described in this guide. If an admin needs to manage this feature and does not have the proper permissions, they should contact the company's SAP Concur administrator.

Also, the admin should be aware that some of the tasks described in this guide cannot be completed by the company. In this case, the client must contact their TMC (if a TMC provides their support) or their SAP Concur administrator.

### Target Audience

**Primary audience** - TMC Partners who plan to develop a SAP Concur platform certified application to support the Travel Profile v2 API, a replacement to SAP Concur Travel’s XML Profile Sync and the Travel Profile v1.0 API.

**Secondary audience** - Customers and third party developers who wish to develop an internal-only application or vendor application to support SAP Concur platform’s Travel Profile v2 API , a replacement to XML Profile Sync
and the Travel Profile v1.0 API. Internally developed applications do not require application certification, however, most the specifications in this document should be considered best practices application development and support. Third party developed applications, branded for usage by agencies, must be certified.

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
    * [Travel Profile v2](https://developer.concur.com/api-reference/travel-profile/v2.profile-service.html)
    * [Authentication](https://developer.concur.com/api-reference/authentication/company-auth.html)
* Access to RESTful development tool such as POSTMAN or SOAPUI to send JSON/XML requests and receive XML responses.
> **NOTE**: To retrieve a traveler’s itinerary and profile with program loyalty information and form of payment information, your application must be registered in our travel supplier system. This is a managed procedure and must be requested.

> **NOTE**: To retrieve a traveler’s itinerary, profile, and form of payment within a specific agency and agency configuration, you must register your agency Company UUID with your Application ID. This is a managed procedure and will be required before proceeding with development.

## Travel Access Control Service

App Center partners, Triplink suppliers, and  clients can use the Travel Profile API as is. Their applications will not be affected, and their endpoint destinations remain the same. Partner applications will be allowed to use their user-level tokens to retrieve profiles for an individual or company-level tokens to retrieve profiles from an entire enterprise organization regardless of agency service affiliation or number of agency configurations.

For TMCs using Travel Profile API v2.0, a new access control service has been built into the existing Travel Profile and Form of Payment web service. Data accepted and returned by the API is now controlled by a service that monitors all active Agency IDs and their respective Travel Configuration IDs. Agency applications expecting travel profile and form of payment data from travelers associated with their own agencies can now be received or returned by Agency. Travel profile and form of payment data associated with a different agency will NOT be received or returned. To utilize this security feature, an agency UUID must be specified in the properties (profile) of the agency’s application ID (Client_ID).

Please refer to the table below:

---|User level tokens from ZZZ Company|Compay level tokens from ZZZ Company|Agency A’s company level token from ZZZ Company|Agency B’s company level token from ZZZ Company
---|---|---|---|---
Travel Profile Summary|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A profiles only|Agency B profiles only
Travel Profile POST|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A profile only|Agency B profile only
Travel Profile GET|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A profiles only|Agency B profiles only
Form of Payment POST|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A FOP only|Agency B FOP only
Form of Payment GET|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A FOP only|Agency B FOP only

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
* The **token_type** – We return the value of “Bearer", an industry standard. The value of “Bearer” can be interpreted as “allow access to the bearer of this token.”
* The **access_token**, a JWT, informs us that the bearer of the returned token has been authorized to access our API and perform specific actions as specified by the scopes that have been granted. The access_token is valid for sixty minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The **refresh_token**, also a JWT, is the unique token that contains the information required to obtain a new access_token or id_token. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different refresh_token value.
* The value in **refresh_expires_in** is returned in epoch time. Use a library that provides conversion capability. For a UI version, navigate to https://www.epochconverter.com.
* The **id_token**, also a JWT, is returned. For company-level or enterprise-level applications, there is little need to retrieve details of the company-level authenticated user unless it is for auditing purposes. The information stored in the ID token JWT is necessary for user-level mobile-based based applications such as Uber or Triplink supplier applications like Avis or Marriott.
* The value for **geolocation** should be stored as your application’s base URI. Since we have multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives **error code 16**, “**invalid request**, **user lives elsewhere** , your application must be able to submit a second request to “us.api.concursolutions.com” or “emea.api.concursolutions.com” and store that geolocation. The geolocation also identifies geographically where the user is stored.
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

### Descriptions

* The **expires_in** value is returned in seconds. Your access_token is valid for sixty minutes.
* The **scopes** returned in the response are what your application has been registered to work with. Scopes are selectively enabled based on the functionality required. The values returned in the response should never change. If new scopes are added, your application will require re-certification.
* The **token_type** – We return the value of “Bearer,” an industry standard. The value of “Bearer” can be interpreted as “allow access to the bearer of this token.""
* The **access_token** , a JWT, informs us that the bearer of the returned token has been authorized to access the our API and perform specific actions as specified by the scopes that have been granted. The access_token is valid for sixty minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The **refresh_token**, also a JWT, is the unique token that contains the information required to obtain a new access_token or id_token. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different refresh_token value.
* The value in **refresh_expires_in** is returned in epoch time. Use a library that provides conversion capability. For a UI version, navigate to https://www.epochconverter.com
* The **id_token**, also a JWT, is returned. For company-level or enterprise- level applications like Receipts API v4.0, there is no need to retrieve details of the company-level authenticated user. The information stored in the ID token JWT is necessary for User-level authentication-based applications such as Uber or Triplink supplier applications like Avis or Marriott.
* The value for **geolocation** should be stored as your application’s base URI. Since we have multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives **error code 16, “invalid request”,** **user lives elsewhere** , your application must be able to submit a second request to “us.api.Concursolutions.com” or “eema.api.concursolutions.com” and store that geolocation. The geolocation also identifies for SAP Concur geographically where the user is stored.
* Store the refresh token, access tokens, expiration date and instance URL (geolocation) along with your internal information about the company’s profile.


> **IMPORTANT**: Do not append application keys and values to the request URL. Requests containing confidential keys and values will be rejected. Ensure your web servers are not configured with TLS V1.1. https://assets.concur.com/concurtraining/cte/en-us/FAQ_TLS_1.1_End_of_Support.pdf

> **NOTE**: Remove `charset=utf-8` from content-type header in your request. Our implementation of OAuth2, according to the IETF standards https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-B, requires all clients to remove the `charset=utf-8` from the Content-Type header.

## Application Scopes

Travel Profile applications by default have the following scopes registered:

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

Itinerary (ITINER) and Receipts (receipts.read, receipts.write) scopes for DEV applications available upon request. Explanations for these scopes are documented at [List of Connect API Scopes](https://developer.concur.com/api-reference/authentication/scopes.html#connectscopes). If you wish to have your application include additional scopes or endpoints, you must have your application re-certified.

### Geolocations

We have multiple [data centers](https://developer.concur.com/platform/base-uris.html):

* United States: https://us.api.concursolutions.com
* EMEA: https://emea.api.concursolutions.com
* Public Sector: https://usg.api.concursolutions.com
* China: https://www-cn.api.concurcdc.cn


Host Location|Geolocation based on location of Company GUID|URL to use for Travel Profile
------|-----|-----
EMEA|https://emea.api.concursolutions.com/oauth2/v0/token|https://emea.api.Concursolutions.com/api/travelprofile/v2.0/profile
US|https://us.api.concursolutions.com/oauth2/v0/token|https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile
PSCC|https://usg.api.Concursolutions.com/oauth2/v0/token|https://usg.api.Concursolutions.com/api/travelprofile/v2.0/profile

## User Profile Web Service

### Get User Information

https://developer.concur.com/api-explorer/v3-0/Users.html

If you are still in transition from legacy Profile Sync to the Travel Profile API, it may be necessary to use the User API to retrieve user’s login IDs or Email IDs – which the Travel Itinerary API v1.x Web Service uses as its matching fact for Travel Itinerary retrievals or updates.

Use the following request parameters to filter your searches:

#### Retrieve All Active Users

GET

```
https://us.api.Concursolutions.com/users?offset=0&limit=100&isactive=true
Authorization: Bearer {access_token}
```

#### Retrieve User Information by Primary Email ID

GET

```
https://www.Concursolutions.com/api/v3.0/common/users?primaryEmail=dutchinw@yahoo.com&active=true HTTP/1.

Authorization: Bearer {access_token}
Content Type:
```

#### Retrieve User Information by Login ID

GET

```
https://www.Concursolutions.com/api/v3.0/common/users?user=dutchinw10@sureware-connect.com&active=true HTTP/1.
Authorization: Bearer {access_token}
```

## Unique User ID

> **RECOMMENDATION** - Adopt UUID as traveler’s unique identifier.

The UUID format is being used throughout the SAP Concur platform and new OAuth methodology. Your application’s client (company) identifier, client secret, and authentication tokens are all in UUID format. Even error IDs are returned in UUID format. UUID v4 information can be found at: https://en.wikipedia.org/wiki/Universally_unique_identifier. This tool is also useful - https://www.uuidgenerator.net/.

UUID is now available with every user record we store. UUIDs are automatically generated whenever an employee or traveler record is created - even during 350 record type imports. And as the standard indicates, the UUID value (which is randomly generated) is guaranteed unique. Because of this uniqueness, UUID can be used as a matching-fact and the unique identifier. You should no longer use the XML Sync ID or Employee ID which are often not unique and is responsible for numerous user record errors and support queries. Login ID is widely adopted by SAP Concur Platform partner applications but has not be widely adopted with XML Profile Sync. We ask Agencies to migrate off the old Sync ID associated with the deprecated XML Profile Sync. We highly recommend transitioning to support UUID.

In 2017, UUID was exposed in the Travel Profile API  API and it was also made available in the PNR editing tool. The label and data in the travel profile response will look like this:

```
<UUID>e58#########################-###0a</UUID>
```

UUID is required for the [Receipts v4 API](https://developer.concur.com/api-reference/receipts/get-started.html#overview). It is the only element supported as its matching-fact. Receipts v4.0 does not support Login ID, Email ID, or any other attribute.

## Travel Profile v2.0 Web Service

The Travel Profile service consists of a set of resources that provide travel profile functionality for developers, travel suppliers, and travel management companies (TMCs). This Web Service is designed to replace the XML Profile Sync built into the Concur Travel product. XML Profile Sync is being deprecated. The profile web services can be used to create, update, and retrieve travel profile information for a specified traveler, or a list of travelers.

The XSD (schema) for Profile API v2.0 is very similar to the existing schema for Profile Sync. The XSD is published on developer.concur.com. The travel profile summary XSD is available here. A spreadsheet of specific changes between XML Profile Sync and Profile API is available upon request.

### GET Profile Information

>**NOTE**: Our development organization has enforced the inclusion of the LastModifiedDate parameter. Users who omit LastModifiedDate, will receive an error. For users who would like to get profile summaries for all of their users, they can set LastModifiedDate to 1900-01-01T12:00:00.

#### Retrieve a List of Travel Profile Summaries by Last Modified Date (with Paging)

GET

```
{{geolocation}}
/api/travelprofile/v2.0/summary?Status="Active"&Page=1&LastModifiedDate=202 0-02-19T00:00:00&userid_type=login&userid_value=ALL&includeMetadata=true&ItemsPe rPage=200
Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve a List of Travel Profile Summaries by Last Modified Date and Config ID (with Paging)

GET

```
GET
{{geolocation}}
/api/travelprofile/v2.0/summary?Status="Active"&Page=1&LastModifiedDate=202 0-02-19T00:00:00&travelConfigs=100,200,3000&userid_type=login&userid_value=ALL&includeMetadata=true&ItemsPerPage=200

Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve Traveler Profile Details by Login ID

GET

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile?userid_type=login&userid_value=dutchin10@domain-connect.com

Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve Travel Profile Information by UUID (FUTURE RELEASE)

GET

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile?uuid=636a6e64-f516-4d84-ae7e-c833c9c20cdc

Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve User Information in Bulk (Limited)

GET

```
https://us.api.Concursolutions.com/users?offset=0&limit=100&isactive=true

Content-type:application/xml
Authorization: Bearer {access_token}
Preview: https://developer.concur.com/api-reference/authentication/get-users31.html
```

### Create Travel Profile

#### Create a Basic Traveler Record

##### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Action="Create" LoginId="dutchinw10@domain-connect.com">
  <General>
    <FirstName>Dutchin</FirstName>
    <LastName>Wong10</LastName>
    <TravelConfigID>113938</TravelConfigID>
  </General>
  <Password>Welcome123</Password>
</ProfileResponse>
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```
### Minimum Elements Required to Create a New User

* First Name
* Last Name
* Travel Configuration ID
* Login ID
* Password
* Rule Class (uses Default Rule Class if not provided).
* Omitted elements will be ignored and not updated.
* Empty elements of datatype string will be cleared out; nillable elements will be cleared out if set as nil. Refer to XSD for nillable elements.

>**NOTE**: To create or update a traveler’s profile with program loyalty information, your application must be registered in our Travel Supplier system. A default rule class must be defined, or the user record may be orphaned.

### Create a Full Traveler Record

##### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse Action="Create" Status="Active"LoginId="dutchinw10@domain-connect.com">
  <General>
    <NamePrefix>Mr</NamePrefix>
    <FirstName>Dutchin</FirstName>
    <MiddleName>W</MiddleName>
    <LastName>Wong</LastName>
    <NameSuffix>Sr.</NameSuffix>
    <PreferredName />
    <JobTitle />
    <CostCenter>
    </CostCenter>
    <CompanyEmployeeID>100011</CompanyEmployeeID>
    <Division> 1000 </Division>
    <PreferredLanguage>en</PreferredLanguage>
    <EReceiptOptIn>true</EReceiptOptIn>
    <RuleClass>Default Travel Class</RuleClass>
    <TravelConfigID>113938</TravelConfigID>
    <GDSProfileName>DUTCHINW10/2</GDSProfileName>
  </General>
  <EmergencyContact>
    <Name>Heather Wong</Name>
    <Relationship>Spouse</Relationship>
    <Phones>
      <Phone Type="DayTime">425-999-8665</Phone>
      <Phone Type="Alternate">425-999-9695</Phone>
    </Phones>
    <Address>
      <Street>601 108th Ave Suite 1000 </Street>
      <City>Bellevue</City>
      <StateProvince>WA</StateProvince>
      <PostalCode>98004</PostalCode>
      <CountryCode>US</CountryCode>
    </Address>
  </EmergencyContact>
  <Telephones>
    <Telephone Type="Home">
      <CountryCode>US</CountryCode>
      <PhoneNumber>888-883 -8411</PhoneNumber>
      <Extension />
    </Telephone>
    <Telephone Type="Work">
      <CountryCode>US</CountryCode>
      <PhoneNumber>4255905248</PhoneNumber>
      <Extension />
    </Telephone>
    <Telephone Type="Cell" ContactOptIn="false" PrimaryMobile="true">
      <CountryCode>US</CountryCode>
      <PhoneNumber>4255905248</PhoneNumber>
      <Extension />
      <MobileDevice>Unknown</MobileDevice>
    </Telephone>
    <Telephone Type="Work">
      <CountryCode>01</CountryCode>
      <PhoneNumber>4255905248</PhoneNumber>
      <Extension />
    </Telephone>
  </Telephones>
  <Addresses>
    <Address Type="Home">
      <Street>601 108th Ave #1000</Street>
      <City>Bellevue</City>
      <StateProvince>WA</StateProvince>
      <PostalCode>98045</PostalCode>
      <CountryCode>US</CountryCode>
    </Address>
    <Address Type="Work">
      <Street>601 108th Ave #1000</Street>
      <City>Bellevue</City>
      <StateProvince>WA</StateProvince>
      <PostalCode>98004</PostalCode>
      <CountryCode>US</CountryCode>
    </Address>
  </Addresses>
  <HasNoPassport>true</HasNoPassport>
  <EmailAddresses>
    <EmailAddress Contact="true"Type="Business">dutchinw@yahoo.com</EmailAddress>
    <EmailAddress Contact="true"Type="Personal">dutchinw@yahoo.com</EmailAddress>
    <EmailAddress Contact="true"Type="Personal">dutchinw@yahoo.com</EmailAddress>
  </EmailAddresses>
  <RatePreferences>
    <AAARate>true</AAARate>
    <AARPRate>false</AARPRate>
    <GovtRate>false</GovtRate>
    <MilitaryRate>false</MilitaryRate>
  </RatePreferences>
  <DiscountCodes>
    <DiscountCode Vendor="Intercontinental HotelsGroup">123456</DiscountCode>
    <DiscountCode Vendor="American Airlines" />
    <DiscountCode Vendor="JetBlue" />
    <DiscountCode Vendor="Delta" />
    <DiscountCode Vendor="Enterprise" />
    <DiscountCode Vendor="Airtran Air" />
    <DiscountCode Vendor="United" />
    <DiscountCode Vendor="US Airways" />
    <DiscountCode Vendor="Southwest" />
    <DiscountCode Vendor="Hertz" />
    <DiscountCode Vendor="Avis" />
    <DiscountCode Vendor="National" />
  </DiscountCodes>
  <Air>
    <AirMemberships>
      <AirMembership>
        <VendorCode>AS</VendorCode>
        <AccountNo>59128856</AccountNo>
      </AirMembership>
    </AirMemberships>
    <Seat>
      <InterRowPositionCode>Aisle</InterRowPositionCode>
      <SectionPositionCode>Forward</SectionPositionCode>
    </Seat>
    <AirOther />
  </Air>
  <Rail>
    <Seat>Window</Seat>
    <Coach>CoachWithTable</Coach>
    <NoiseComfort>MobileSpace</NoiseComfort>
    <Bed>DontCare</Bed>
    <BedCategory>DontCare</BedCategory>
    <Berth>DontCare</Berth>
    <Deck>DontCare</Deck>
    <SpaceType>DontCare</SpaceType>
    <FareSpaceComfort>DontCare</FareSpaceComfort>
    <SpecialMeals>DontCare</SpecialMeals>
    <Contingencies>DontCare</Contingencies>
    <RailMemberships />
  </Rail>
  <Car>
    <CarSmokingCode>NonSmoking</CarSmokingCode>
    <CarGPS>false</CarGPS>
    <CarType>Standard</CarType>
    <CarMemberships>
      <CarMembership>
        <VendorCode>ZI</VendorCode>
        <AccountNo>9WZ25K</AccountNo>
        <Status>PREFERRED</Status>
      </CarMembership>
    </CarMemberships>
    <CarOther />
    <CarSkiRack>false</CarSkiRack>
    <CarTransmission>Automatic</CarTransmission>
  </Car>
  <Hotel>
    <HotelSmokingCode>NonSmoking</HotelSmokingCode>
    <HotelMemberships>
      <HotelMembership>
        <VendorCode>SW</VendorCode>
        <AccountNo>713399498</AccountNo>
      </HotelMembership>
      <HotelMembership>
        <VendorCode>6C</VendorCode>
        <AccountNo>283629903</AccountNo>
      </HotelMembership>
    </HotelMemberships>
    <RoomType>King</RoomType>
    <PreferFoamPillows>true</PreferFoamPillows>
    <PreferCrib>false</PreferCrib>
    <PreferRollawayBed>false</PreferRollawayBed>
    <PreferGym>false</PreferGym>
    <PreferPool>false</PreferPool>
    <PreferRestaurant>false</PreferRestaurant>
    <PreferWheelchairAccess>false</PreferWheelchairAccess>
    <PreferAccessForBlind>false</PreferAccessForBlind>
    <PreferRoomService>false</PreferRoomService>
    <PreferEarlyCheckIn>false</PreferEarlyCheckIn>
  </Hotel>
  <CustomFields />
  <Roles />
  <TSAInfo>
    <Gender>Male</Gender>
    <DateOfBirth>1900-01-01</DateOfBirth>
    <NoMiddleName>false</NoMiddleName>
    <PreCheckNumber />
    <RedressNumber />
  </TSAInfo>
  <Password>Welcome123</Password>
</ProfileResponse>
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

>**NOTE**: The Preferred Language field has an allowed list of canonical values. Any value that is not on this list, will be returned as an empty string beginning in April 2021. Any value that is not on this list will be written to the SAP Concur profile as an empty string beginning in May 2021 and a warning will be returned.


The Preferred Language field allowed list is:


bg	ja	zh	es-AR	es-PE	ja-JP
cs	ko	de-AT	es-BO	es-PR	nl-BE
da	nb	de-CH	es-CL	es-PY	nl-NL
de	nl	de-DE	es-CO	es-SV	no-NO
el	nn	de-LU	es-CR	es-UY	pt-BR
en	no	en-AU	es-DO	es-VE	pt-PT
es	pl	en-CA	es-EC	fr-BE	sv-SE
fi	pt	en-GB	es-ES	fr-CA	zh-CN
fr	ro	en-IE	es-GT	fr-CH	zh-HK
hr	ru	en-IN	es-HN	fr-FR	zh-TW
hu	sk	en-NZ	es-MX	fr-LU
id	sv	en-US	es-NI	it-CH
it	tr	en-ZA	es-PA	it-IT


#### Update a Traveler’s Unused Tickets

##### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse Action="Update" Status="Active"LoginId="dutchinw10@domain-connect.com">
  <UnusedTickets>
    <UnusedTicket>
      <Carrier>UA</Carrier>
      <TicketNumber>HETJUNCRHT</TicketNumber>
      <RecordLocator>L64A17</RecordLocator>
      <BaseFare>731.50</BaseFare>
      <Taxes>82.42</Taxes>
      <Fees>148.42</Fees>
      <Currency>USD</Currency>
      <TicketType>W</TicketType>
      <IssueDate>2017-10-13</IssueDate>
      <ExpirationDate>2022-10- 14</ExpirationDate>
      <Notes>TRIP CHANGE</Notes>
    </UnusedTicket>
  </UnusedTickets>
</ProfileResponse>

```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>

```
#### Deactivate a Traveler Profile by Login ID

##### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse Action="Update" Status="Inactive"LoginId="dutchinw10@domain-connect.com">```
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

RESULT

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Status="Inactive"LoginId="dutchinw03@sureware-connect.com" Unique="">
```

## Validate Your XML Against Our XSD

The Travel Profile API v2.0 incorporates internal XML validation. If you receive the error message here is an error in XML document, it is due to an issue with your XML formatting. The request will not even reach the SAP Concur profile service because the XML issue(s) prevents the system from accepting and processing the request.

To validate your XML, a public online application is available. Launch https://www.freeformatter.com/xml-validator-xsd.html to validate your XML against the Travel Profile v2.0 API XSD. In the top pane of FreeFormatter, paste your XML, and in the bottom pane paste our XSD (https://www.Concursolutions.com/ns/TravelUserProfile.xsd).


Sample response:

```
Cvc-complex-type.2.4.a: Invalid Content Was Found Starting With Element
'ClientName'. One Of '{NamePrefix, FirstName, MiddleName, LastName,
NameSuffix, PreferredName, JobTitle, CostCenter, CompanyEmployeeID,
Division, PreferredLanguage, EReceiptOptIn, HasOpenBooking, CountryCode,
CompanyName, CompanyID, RuleClass, TravelConfigID, MedicalAlerts,
AgencyNumber, SearchId, GDSProfileName, SabreProfileId}' Is Expected., Line
'3', Column '17'.
Cvc-enumeration-valid: Value '' Is Not Facet-valid With Respect To
Enumeration '[BLML, CHML, DBML, FPML, GFML, HNML, BBML, KSML, LCML, LSML,
MOML, NSML, NLML, PFML, SFML, VLML, VGML, KVML, RVML, AVML]'. It Must Be A
Value From The Enumeration., Line '59', Column '26'.
Cvc-type.3.1.3: The Value '' Of Element 'MealCode' Is Not Valid., Line
'59', Column '26'.
Cvc-enumeration-valid: Value '' Is Not Facet-valid With Respect To
Enumeration '[DontCare, Economy, Compact, Intermediate, Standard, FullSize,
Luxury, Premium, Mini, EconomyHybrid, CompactHybrid, IntermediateHybrid,
StandardHybrid, FullSizeHybrid, MiniVan, StandardSUV, FullSizeSUV,
FullSizePickup, Specialized, IntermediateSUV]'. It Must Be A Value From The
Enumeration., Line '66', Column '16'.
Cvc-type.3.1.3: The Value '' Of Element 'CarType' Is Not Valid., Line '66',
Column '16'.
Cvc-datatype-valid.1.2.1: '' Is Not A Valid Value For 'date'., Line '81',
Column '20'.
Cvc-type.3.1.3: The Value '' Of Element 'DateOfBirth' Is Not Valid., Line
'81', Column '20'.
```

## Form of Payment Web Service

>**NOTE**: To retrieve, create, or update a traveler’s Form of Payment, your application must be registered in our Travel Supplier system.

### Create a Form of Payment by Login ID

#### REQUEST

POST

```
https://www.Concursolutions.com/api/travelprofile/v2.0/fop
Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<CorporateFOPResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"LoginId="dutchinw10@domain-connect.com">
  <CreditCards>
    <CreditCard DisplayName="My Visa Card">
      <Vendor>Visa</Vendor>
      <AccountNo>4XXXXXXXXXXXXXXXXXX1</AccountNo>
      <ExpDate>2021-09</ExpDate>
      <NameOnCard>SAP Concur Developer</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>123 Home St</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98006</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="false" />
        <Segment Type="Hotel" Default="false" />
        <Segment Type="Car" Default="false" />
        <Segment Type="Rail" Default="false" />
      </Segments>
    </CreditCard>
  </CreditCards>
</CorporateFOPResponse>
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>

```
### Update Form of Payment by Login ID

##### REQUEST

POST

```
https://www.Concursolutions.com/api/travelprofile/v2.0/fop
Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<CorporateFOPResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema- instance"LoginId="dutchinw10@domain-connect.com">
  <CreditCards>
    <CreditCard DisplayName="AMEX Corporate">
      <Vendor>AmericanExpress</Vendor>
      <AccountNo>3XXXXXXXXXXXXXXXXXXXX1</AccountNo>
      <ExpDate>2021-07</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="true" />
        <Segment Type="Hotel" Default="true" />
        <Segment Type="Car" Default="true" />
        <Segment Type="Rail" Default="true" />
      </Segments>
    </CreditCard>
    <CreditCard DisplayName="British Airways Visa">
      <Vendor>Visa</Vendor>
      <AccountNo>4###################1</AccountNo>
      <ExpDate>2022-05</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="false" />
        <Segment Type="Hotel" Default="false" />
        <Segment Type="Car" Default="false" />
        <Segment Type="Rail" Default="false" />
      </Segments>
    </CreditCard>
    <CreditCard DisplayName="Alaska BofA Visa">
      <Vendor>Visa</Vendor>
      <AccountNo> 4####################1</AccountNo>
      <ExpDate>2022-04</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="true" />
        <Segment Type="Hotel" Default="true" />
        <Segment Type="Car" Default="true" />
        <Segment Type="Rail" Default="true" />
      </Segments>
    </CreditCard>
    <CreditCard DisplayName="BECU Mastercard">
      <Vendor>MasterCard</Vendor>
      <AccountNo>5XXXXXXXXXXXXXXXXXX</AccountNo>
      <ExpDate>2022-05</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="false" />
        <Segment Type="Hotel" Default="false" />
        <Segment Type="Car" Default="false" />
        <Segment Type="Rail" Default="false" />
      </Segments>
    </CreditCard>
  </CreditCards>
</CorporateFOPResponse>
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>

```
#### Form of Payment Update Functionality

Existing credit cards are identified by a credit card number and a vendor (for example, Mastercard, Visa). With the FOP API, functionality for updating credit cards remains the same as XML Profile Sync. If there are no changes to the traveler’s payment types, the application must provide all payment types to the traveler’s
profile otherwise the payment types will be removed.

For example, if the partner provides a list with credit cards A, B, D, & E and the SAP Concur database contained credit cards A, B, C, & D, credit cards A, B, & D would be ignored (updated if there were changes) and the platform would remove card C from the database. Only card E would be added to the database.

The best practice for this web service is to retrieve the traveler’s form of payments, compare it to any existing source, and then update it. Even if the traveler wishes to only add/update a single credit card via the UI, the partner must provide all the existing credit cards for the traveler, which they should have received when they initially retrieved the profile. Use the following matrix as guidance




Payment Type Provided A B D E
```
```
Stored at SAP Concur A B C D
```
```
Result Ignored Ignored Removed Ignored Added

>**NOTE**: The traveler may have multiple credit cards in their profile, each with indicators of whether the card is a ghost card (Corporate) or personal card (Business), Mandatory or Default. Corporate cards or ghost cards cannot be created or updated via the API.

## FAQ


Q. Can I create a traveler profile with all the fields from a response?

A. Yes. Be aware that there are several fields and potentially custom fields in a traveler’s profile that require that other user records such as managers or approvers exist in the system first. Therefore it may be necessary to create a traveler record with default fields before updating the rest of a traveler’s profile with additional details.

Q. I tried to update a travel profile using a response from GET travel profile but I’m getting errors. What should I do?

A.

```
<?xml version="1.0" encoding="UTF-8"?>
<Error>
  <Message>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/HasOpenBooking</Message>
      <Field>General/HasOpenBooking</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/CountryCode</Message>
      <Field>General/CountryCode</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/CompanyName</Message>
      <Field>General/CompanyName</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/CompanyID</Message>
      <Field>General/CompanyID</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/AgencyNumber</Message>
      <Field>General/AgencyNumber</Field>
    </TravelProfileResponseMessage>
  </Message>
  <Server-Time>2017-09-19T16:41:39</Server-Time>
<Id>D3772078-980A-48F7-BF7E-81D6AA04F047</Id>
</Error>
```

**SOLUTION**: Remove the above elements from your profile POST

**ERROR**:

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>W007</Code>
  <Message>The CountryCode field is required.</Message>
  <Field>Telephones/CountryCode</Field>
  <CorrelationId>69102551-e208-4f59-8ba8-1b44d0b6842c</CorrelationId>
</TravelProfileResponseMessage>
```
```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>W002</Code>
  <Message>The field CountryCode must be a string with a maximum lengthof 2.</Message>
  <Field>Telephones/CountryCode</Field>
  <CorrelationId>6e04c764-ccd7-4aad-82cd-33506aac73f5</CorrelationId>
</TravelProfileResponseMessage>
```

**SOLUTION** : Ensure the correct 2 letter country code is included. When the above errors are resolved (by removing the offending elements) you may encounter one last error. Remove these nodes for loyalty programs (Air, Rail, Car). Also, make sure you specify the correct login id.

```
<SegmentTotal />
<PointsUntilNextStatus />
<SegmentsUntilNextStatus />
```
```
<Error>
<Message>Invalid User:dutchinw@anybizbu.com</Message>
<Server-Time>2017-09-27T15:46:57</Server-Time>
<Id>A55930EA-D39C-463B-A12A-356F4853F27C</Id>
</Error>
```

**ERROR**:

```      
<Error>
<Message>
<CannotBeChangedProfileSyncMessage>
<Code>W011</Code>
<Message>Cannot update Mandatory field for Corporate (Ghost) cards
using this service.</Message>
<Field>CreditCard.Segment.Mandatory</Field>
</CannotBeChangedProfileSyncMessage>
</Message>
<Server-Time>2016-10-24T15:38:05</Server-Time>
<Id>385F2AAA-94E9-40F9-A092-AB15AC18E454</Id>
</Error>
```

**SOLUTION**: Corporate Cards and Company Ghost Cards cannot be created or updated using the FOP API. Remove Mandatory="false" from the <Segment Type> element.

##  Travel Profile Error Messages and Codes

### Error Messages

When creating a user, you may encounter the following response error messages:

Error|Reason
-----|-----
Login Id: "{LoginId}" is already in use. |Login Id is already assigned to a user.
Could not create a new user because either Login Id is not specified or is less than three characters.| After trimming, Login Id is either empty or is less than three characters (the column in database requires a value with a length >= 3).
Could not create a new user without a User Type.|User Type value is missing.
Could not create a new user without a Password.|Password value is missing.
Could not create a new user without a Company Id.|Company Id value is missing.
Company Id: "{CompanyId}" does not exist.|Company Id could not be found in database.
Could not create a new user without a Last Name.|Last Name value is missing.
Could not create a new user without a First Name.|First Name value is missing.

### Error Codes

When updating a user, you may encounter the following response messages:

Response Message|Code|Reason
-----|-----|-----
Success|S001|Success
Warning|W001|Value not valid against validation regex. Usually occurs if value contains non-ASCII characters or possible script or mark-up.
Warning|W002|Value is either shorter or longer than acceptable length.
Warning|W003|Look-up value could not be found. Usually occurs if an invalid Rule Class or Org Unit name provided or a User Id does not exist/does not belong to a company.
Warning|W004|Duplicate value in company.
Warning|W005|Duplicate Login Id. Cannot assign the same login Id to multiple users.
Warning|W006|Out of allowed range. For example, a datetime value that is less than the accepted minimum for SQL.
Warning|W007|Required field not populated.
Warning|W008|A list of data was provided, but the associated Update Mode field was not populated with instructions as to what to do with that data.
Warning|W009|Account Number provided was invalid.
Warning| W010|Vendor Code provided was invalid.
Warning|W011|Field cannot be changed. For some fields, the values are only available when the profile is retrieved (i.e. Supervisor's Fax number) but cannot be changed.
Warning|W012|Either no Telephones of Type Cell are specified as Primary or too many are specified as Primary. No action done on Telephones of Type Cell.
Warning|W013|Invalid Information being passed into Custom Fields.
Warning|W014|The provided date range is invalid (i.e. start date after end date, etc.)
Warning|W015|Invalid GUID format.
Warning|W016|Too many items provided in a list (i.e. too many telephones of a certain type, too many custom fields with the same Name, et cetera).
Warning|W017|SQL error occurred.
Warning|UNKNOWN|Unexpected, but not show stopping, error occurred.

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
