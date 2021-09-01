---
title: TMC
layout: reference
has_children: true
---

# TMC Guide Overview

This series of guides is designed for TMC Partners or their third-party developers who are developing applications using our APIs. Since much of the information is the same for each API, we have collated the common information in this introduction to eliminate repetition if you are using more that one API. For API-specific information please see the following guides:

* [Itinerary v1](/api-guides/tmc/itinerary-v1-guide.html)
* [Profile v2](/api-guides/tmc/profile-v2-guide.html)
* [Receipts v4](/api-guides/tmc/receipts-v4-guide.html)
* [Request v4](/api-guides/tmc/request-v4-guide.html)

Be aware of the following:

* **Infinite variables:** Certain scenarios have an infinite number of variables or extremely unusual circumstances, like rare cancellation or refund situations. So, not all scenarios can be presented in this guide. Also, certain processes may be influenced by third- or fourth-party providers. In some cases, you must contact the provider directly.
* **User interface, fees, rates, schedules:** When other providers change their user interface (for example, web site) or their fees/rates/schedules, they are under no obligation to make us aware of those changes. If a screen sample in this guide is outdated because of a change made by a provider, we will update that screen sample when we become aware of the change and at our earliest convenience.
* **Permissions:** A company's admin may or may not have the correct permissions to manage the feature described in this guide. If an admin needs to manage this feature and does not have the proper permissions, they should contact the company's SAP Concur administrator.

Also, the admin should be aware that some of the tasks described in this guide cannot be completed by the company. In this case, the client must contact their TMC (if a TMC provides their support) or their SAP Concur administrator.

## Target Audience

**Primary audience** - TMC Partners who plan to develop a SAP Concur platform certified application.

**Secondary audience** - Customers and third party developers who wish to develop an internal-only application or vendor application to support the SAP Concur platform. Internally developed applications do not require application certification, however, most the specifications in this document should be considered best practices application development and support. Third party developed applications, branded for usage by agencies, must be certified.

## Professional and Standard Editions

These guides discuss both Professional and Standard Travel. In those cases where a feature applies to one but not the other, that difference is noted.

## Prerequisites

You should have some background with core SAP Concur applications and services such as Concur Travel and Concur Travel Administration. The following list of technical knowledge and skills will aid in the development and certification of your application.

* Business travel industry experience.
* Concur Travel and Expense experience.
* Concur Travel System Administration, Agency Configuration Administration, Expense Administration, User Administration experience.
* Concur traveler profile / GDS Profiles / Concur XML Profile Sync.
* RESTful API / XML development, OAuth 2.0, data structures.
* Browse the [Developer Center](https://developer.concur.com), for information on authentication and relevant APIs.

## Objectives

After reviewing this document, you will have a better understanding of how to:

* Develop integrations (applications) using the SAP Concur platform.
* Support structures and elements of our APIs.
* Obtain a company level OAuth refresh token.
* Obtain a company level OAuth access token.
* Generate general receipt type data (JSON) at point of sale.
* Capture or manage the traveler’s UUID during transaction process.
* POST the eReceipt using UUID as matching fact.
* View the receipt data and rendered image in Concur Expense.
* Record the correlation_ID.
* Support error conditions.
* Prepare for application certification.
* Prepare for application enablement & deployment.

## Development Environment

The following is a general list of items we provide that are necessary for application development and testing:

* A Professional edition instance of Concur Travel or SAP Concur Travel & Expense.
* A second instance of Concur Travel hosted in a data center hosted in a second data center.
* Default travel configuration.
* Default agency configuration SAP Concur-Sabre PCC.
* Sandboxes may not have Concur Travel booking capabilities. It is available upon request.
* To access corporate discounts the application must be registered in our Travel Supplier system.
* A default “development” app with a unique Client ID, Client Secret, and applicable scopes. Log a case to request additional applications or scopes.
* Sandbox Admin credentials with demo / dev user credentials. Log a case to request additional permissions or users.
* Access developer.concur.com for the latest information.
* Access to RESTful development tool such as POSTMAN or SOAPUI to send JSON/XML requests and receive XML responses.

> **NOTE**: To retrieve a traveler’s itinerary and profile with program loyalty information and form of payment information, your application must be registered in our travel supplier system. This is a managed procedure and must be requested.

> **NOTE**: To retrieve a traveler’s itinerary, profile, and form of payment within a specific agency and agency configuration, you must register your agency Company UUID with your Application ID. This is a managed procedure and will be required before proceeding with development.

## Travel Access Control Service

A travel access control service has been built into the Travel Profile and Travel Itinerary API. This service, managed internally by us, can be used when specified by settings defined in agency applications. Agency applications that are deployed to enterprises that are serviced by multiple agencies are required to integrate with this service.

App Center partners, Triplink suppliers, and  clients can use the Travel Profile and Itinerary APIs as is. Their applications will not be affected, and their endpoint destinations remain the same. Partner applications will be allowed to use their user-level tokens to retrieve profiles for an individual or company-level tokens to retrieve profiles from an entire enterprise organization regardless of agency service affiliation or number of agency configurations.

For TMCs using the Itinerary API and Travel Profile API, the access control service has been built into the Itinerary and Profile web service. Data returned by the API is now controlled by a system that monitors all active Agency IDs and their associative active Travel Configuration IDs. Itinerary data associated with a different agency ID will NOT be returned. To use this security feature, an agency UUID must be specified in the properties (profile) of the agency’s application ID (Client_ID).

For specific profile information see the [Travel Profile Guide](/api-guides/tmc/profile-v2-guide.html#access-control).

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
* Store and reuse the `refresh_token` – a UUID4 identifier that allows your application to obtain fresh `access_tokens`.
* Use the 60 minute `access_tokens` to make transaction API calls.
* Develop a process that updates `refresh_tokens` before their 6 month expiration period.
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

Term|Definition
---|---
* The **expires_in** value is returned in seconds. Your `access_token` is valid for sixty minutes.
* The **scopes** returned in the response are what your application has been registered to work with. Scopes are selectively enabled based on the functionality required. The values returned in the response should never change. If new scopes are added, your application will require re-certification.
* The **token_type** – We return the value of “Bearer, an industry standard. The value of “Bearer” can be interpreted as “allow access to the bearer of this token.”
* The **access_token**, a JWT, informs us that the bearer of the returned token has been authorized to access our API and perform specific actions as specified by the scopes that have been granted. The `access_token` is valid for sixty minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The **refresh_token**, also a JWT, is the unique token that contains the information required to obtain a new `access_token` or `id_token`. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different `refresh_token` value.
* The value in **refresh_expires_in** is returned in epoch time. Use a library that provides conversion capability. For a UI version, navigate to https://www.epochconverter.com.
* The **id_token**, also a JWT, is returned. For company-level or enterprise-level applications, there is little need to retrieve details of the company-level authenticated user unless it is for auditing purposes. The information stored in the ID token JWT is necessary for user-level mobile-based based applications such as Uber or Triplink supplier applications like Avis or Marriott.
* The value for **geolocation** should be stored as your application’s base URI. Since we have multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives **error code 16, “invalid request”,** **user lives elsewhere** , your application must be able to submit a second request to “us.api.concursolutions.com” or “emea.api.concursolutions.com” and store that geolocation. The geolocation also identifies geographically where the user is stored.
* Store the refresh token, access tokens, expiration date and instance URL (geolocation) along with your internal information about the company’s profile.

> **IMPORTANT**: Do not append application keys and values to the request URL. Requests containing confidential keys and values will be rejected. Ensure your web servers are not configured with TLS V1.1. https://assets.concur.com/concurtraining/cte/en-us/FAQ_TLS_1.1_End_of_Support.pdf

> **NOTE**: Remove `charset=utf-8` from content-type header in your request. Our implementation of OAuth2, according to the IETF standards https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-B, requires all clients to remove the `charset=utf-8` from the Content-Type header.

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

* The **expires_in** value is returned in seconds. Your `access_token` is valid for sixty minutes.
* The **scopes** returned in the response are what your application has been registered to work with. Scopes are selectively enabled based on the functionality required. The values returned in the response should never change. If new scopes are added, your application will require re-certification.
* The **token_type** – We return the value of “Bearer", an industry standard. The value of “Bearer” can be interpreted as “allow access to the bearer of this token.”
* The **access_token**, a JWT, informs us that the bearer of the returned token has been authorized to access our API and perform specific actions as specified by the scopes that have been granted. The `access_token` is valid for sixty minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The **refresh_token**, also a JWT, is the unique token that contains the information required to obtain a new `access_token` or `id_token`. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different `refresh_token` value.
* The value in **refresh_expires_in** is returned in epoch time. Use a library that provides conversion capability. For a UI version, navigate to https://www.epochconverter.com.
* The **id_token**, also a JWT, is returned. For company-level or enterprise-level applications, there is little need to retrieve details of the company-level authenticated user unless it is for auditing purposes. The information stored in the ID token JWT is necessary for user-level mobile-based based applications such as Uber or Triplink supplier applications like Avis or Marriott.
* The value for **geolocation** should be stored as your application’s base URI. Since we have multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives **error code 16**, “**invalid request**, **user lives elsewhere** , your application must be able to submit a second request to “us.api.concursolutions.com” or “emea.api.concursolutions.com” and store that geolocation. The geolocation also identifies geographically where the user is stored.
* Store the refresh token, access tokens, expiration date and instance URL (geolocation) along with your internal information about the company’s profile.

> **IMPORTANT**: Do not append application keys and values to the request URL. Requests containing confidential keys and values will be rejected. Ensure your web servers are not configured with TLS V1.1. https://assets.concur.com/concurtraining/cte/en-us/FAQ_TLS_1.1_End_of_Support.pdf

> **NOTE**: Remove `charset=utf-8` from content-type header in your request. Our implementation of OAuth2, according to the IETF standards https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-B, requires all clients to remove the `charset=utf-8` from the Content-Type header.

## Geolocation

We have multiple [data centers](https://developer.concur.com/platform/base-uris.html) See the following for information specific to the API you're interested in:

* [Itinerary](/api-guides/tmc/itinerary-v1-guide.html#geolocation)
* [Profile](/api-guides/tmc/profile-v2-guide.html#geolocation)
* [Receipts](/api-guides/tmc/receipts-v4-guide.html#geolocation)
* [Request](/api-guides/tmc/request-v4-guide.html#geolocation)

## <a name="unique-user"></a>Unique User ID

The UUID format is being used throughout the SAP Concur platform and new OAuth methodology. It is recommended that you adopt the SAP Concur UUID as the traveler's unique identifier. Your application’s client (company) identifier, client secret, and authentication tokens are all in UUID format. Even error IDs are returned in UUID format.

UUID v4 information can be found here: https://en.wikipedia.org/wiki/Universally_unique_identifier. This tool is also useful: https://www.uuidgenerator.net/.

UUID is now available with every user record stored at SAP Concur. UUIDs are automatically generated whenever an employee or traveler record is created - even during 350 record type imports. And as the standard indicates, the UUID value (which is randomly generated) is guaranteed unique at SAP Concur. Because of this uniqueness, UUID can be used as a matching-fact and the unique identifier at SAP Concur. You no longer need to rely on XML Sync ID or Employee ID which are often not unique and is responsible for numerous user record errors and support queries. Login ID, still unique at SAP Concur, is widely adopted by SAP Concur Platform partner applications but has not be widely adopted with XML Profile Sync.
We do not recommend using the old Sync ID associated with XML Profile Sync. We highly recommend transitioning to support SAP Concur UUID.

UUID was exposed in the Travel Profile API and it was also made available in the PNR editing tool. The label and data in the travel profile response will look like this: e588fcc4-417f-4d6c-81de-6b51bfc9c90a SAP Concur UUID is required for the Request v4 API. It is the only element supported as its matching-fact. UUID is also required for the Receipts v4 API. Receipts v4.0 does not support Login ID, Email ID, or any other attribute.

## Error Handling

**REQUIRED**: Retain the GUID returned in all responses under the header “concur-correlationid”. It is a value that will be referenced to locate transactions in our logging system.

**REQUIRED**: Support the following HTTP error conditions / codes: [Status codes](https://developer.concur.com/api-reference/http-status-codes.html).

**REQUIRED**: Provide retry logic for timeouts and 500/503 errors.

**RECOMMENDED**: Provide your own unique “concur-correlationid” header and randomly generated value – inserted with a company_id for example. If you provide the following in your request header, we will return the same value in the response header, for example:

```
concur-correlationid: 2997-e17fb88b-5b9a-41b9-b285-6da70eeba98a
```

**RECOMMENDED**: Error logging - retain logs for a minimum of 7 days for troubleshooting and support.

## Development Support

* For travel configuration questions/support, contact Travel Solutions or your Alliance Manager.
* Review Release Notes regularly to see the latest API updates.
  * [API Release Notes](https://developer.concur.com/tools-support/release-notes/index.html)
  * [Concur Product Release Notes](http://www.concurtraining.com/customers/tech_pubs/)
  * [Concur Travel Release Notes](http://www.concurtraining.com/customers/tech_pubs/TravelDocs/ReleaseNotes/_CCC_RN.htm)
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

This is a screen shot of a typical Body response for retrieving a profile in POSTMAN.

![Postman body response](images/overview-postman-body.png)

Select “Headers” for the response headers. Note “concur-correlationid”

We require that you store the response GUID when an error occurs. When you log a case, please include the concur-correlationid GUID so we can retrieve the error(s) from our internal tools / logging system. This is what response headers look like in POSTMAN:

![Postman response headers](images/overview-postman-headers.png)

Here’s what it would look like when we search for your application’s errors using the concur-correlationID GUID. It is vital for troubleshooting efficiency.

![correlationID search results](images/overview-correlationid.png)
