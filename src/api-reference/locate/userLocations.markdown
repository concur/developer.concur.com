---
title: User Locations
layout: reference
---

{% include prerelease.html %}

# User Locations

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Service Details](#serviceDetails)
* [Regional Availability](#regionalAvailability)
* [Schema](#schema)
  * [Client](#client)
  * [Users](#users)
  * [Locations](#locations)
  * [Source Partner](#sourcePartner)
  * [Transaction](#transaction)
* [Request Headers](#requestHeaders)
* [Response Headers](#responseHeaders)
* [Status Codes](#statusCodes)
* [Example](#example)

## Overview

The goal of this API is to allow customers and 3rd party vendors to add their traveler's location data to Concur Locate so it can be utilized locate and contact travelers to address their duty of care requirements.

This API supports POST only.

## Prerequisites

1. [Obtain a client ID, secret and sandbox environment](/manage-apps/partner-applications.html) if you don't already have one.
2. Obtain your [Source partner](#sourcePartner) information. This will be provided along with your application credentials.
3. This API supports all Valid JWTs whether they be company level, password grants or client_credentials grant. Read the [Getting Started](/api-reference/authentication/getting-started.html) section of [Authentication API](/api-reference/authentication/apidoc.html) for details. Your sandbox will be configured to accept posts from your application.


## Service Details
 The service is a POST call adhering to the following steps:
 
* Vendor onboarding has been completed prior to invoking the API. All the authentication and authorization credentials have been set up at this point.
* Third party vendors invoke the User Location API using the client credentials (JWT)
* Since the new service is registered with API gateway, the call is intercepted by the API Gateway and basic authentication and authorization for the given client credentials (JWT) is done
* If the checks fail, then the appropriate error response is returned to the caller.
* If the checks pass, then the request is forwarded to the load balancer which routes the request to the appropriate node for processing
* The selected node processes the request which is in JSON format. Validations are performed the data conversion takes place. If any of the validations fail, then the appropriate error response is returned to the client (HTTP 400 Bad Request / HTTP 403 Unauthorized)
* If the validations pass, then the request is processed, and the data is persisted to the backend (DB) in the following ways:
    * Direct persistence
    * Persistence via queues
* If the persistence is successful, then an HTTP 200 OK is returned to the caller
* If there are any issues with the persistence, then the appropriate codes are returned to the caller (HTTP 500 Application exception)
* Note that the error messages are intentionally ambiguous to prevent exploitation

## Regional Availability

```
https://us.api.concursolutions.com/locate/api/v1/user/locations
```
```
https://emea.api.concursolutions.com/locate/api/v1/user/locations
```

## Schema

_POST /locate/api/v1/user/locations_

See the schema documentation below for the specifications of each type, plus the various schemas that are shared components of each receipt schema.

The user locations API includes users and itineraries (locations) in addition to information about the company and post type (add or cancel).

Property Name|Type|Format|Description
---|---|---|---
UserLocations|Object|JSON|**Required** Contains the Client, Users, Locations, Source Partner and Transaction.
Client|Object|JSON|**Required** This indicates which entity within the organization the traveler belongs to.
Users|Object|JSON|**Required** This is the users' information. This will be used to either create a new traveler or to match with an existing traveler.
Locations|Object|JSON|**Required** This is the users' location information. Multiple locations can be passed for a single user.
SourcePartner|Object|JSON|**Required** This is used to identify your application. This information will be provided to you in advance.
Transaction|Object|JSON|**Required** Whether this transaction adds or cancels itineraries/locations.

### Client

This indicates which entity within the organization the traveler belongs to. This will vary by client. You will be provided with a list of the applicable agencies for each customer.

Property Name|Values/Length|Type|Description
---|---|---|---
Id|36|String|**Required**  Id: This maps to the top-level corporation
firstSubLevel|36|String|This is the child corporation i.e one level below the top level corporation.
secondSubLevel|36|String|This is the sub level of the child corporation (firstsublevel).

### Users

This information will be used to match or create a new user. Either login ID or email address must be provided. If an existing user is not found for the login ID or email, one will be created.                 

Property Name|Values/Length|Type|Description
---|---|---|---
userID|10|Long|**Required** This is a unique identifier for the user generated by your application.
firstName|100|String| **Required** The first name of the user.
lastName|100|String|**Required** The last name of the user.
email|255|String|**Either email or concurLoginId must be provided**
employeeId|19|String|Optional field to indicate the employee id of the user
mobileCountryCode|3|String|ISO Alpha-2 code. As a reference the full set can be found at [Country Codes](http://www.mcc-mnc.com/)
mobile|10|String|The contact number of the user
optedIn|'True' / 'False'|String|Indicates if the user has chosen to receive messages via SMS or Text
concurLoginId|128|String|**Either email or concurLoginId must be provided**
affiliation|255|String|Used to indicate the type of traveler (e.g. employee, student, faculty)  

### Locations

This section includes information about the traveler's future or current location. Either the location latitude and longitude OR the IATA (airport) code must be present. If both are present, the latitude and longitude take precedence.

Property Name|Values/Length|Type|Description
---|---|---|---
locationId|-|String|Identifier of the travel location
locationAddress|512|String|Address of the travel location
locationName|100|String|Name of the travel location
locationDescription|100|String|A short description of the travel location
locationPhone|50|String|Contact details of the travel location
locationLatitude|-|String|**Either the airport or latitude/longitude must be provided**
locationLongitude|-|String|**Either the airport or latitude/longitude must be provided**
locationIATACode|3|String|[IATA Airport Codes](https://en.wikipedia.org/wiki/List_of_airports_by_IATA_code:_A) Either the airport or latitude/longitude must be provided.
startDate|16|String (format YYYY-MM-DDTHH:MM)|**Required** Traveler's arrival date
endDate|16|String (format YYYY-MM-DDTHH:MM)|**Required** Traveler's departure date
timezoneId|60|String|**Required** As a reference the full set of timezones can be found at <http://joda-time.sourceforge.net/timezones.html>
visitorID|10|-|This corresponds to the user ID provided in the [Users](#users) schema.Ids present in this array must be present in the [Users](#users) schema.

### Source partner

This information will be provided to you along with your client ID and secret.

Property Name|Values/Length|Type|Description
---|---|---|---
Id|2|String|**Required**
name|100|String|The name of the source provider e.g Source Provider1
description|100|String|A short description of the source provider

### Transaction

Itineraries can be added or cancelled. This section allows you to indicate whether this is an addition of a new itinerary or cancellation of an existing itinerary. A cancellation request is for canceling the itinerary completely in our system and if there are any updates to the existing itineraries then it needs to be resent using the same booking or transaction id.

Property Name|Values/Length|Type|Description
---|---|---|---
transactionId|5|String|**Required** This is a unique identifier generated by your application for the request.
createdDate|16|String (format YYYY-MM-DDTHH:MM)|**Required**
transactionType|10|**Required** 'Add' or 'Cancel'| Add is indicative of creating a new itinerary or updating an existing itinerary. Cancel means removing the itinerary. Cancel works only on future dated itineraries

## Request Headers

* [RFC 7230 Host](https://tools.ietf.org/html/rfc7230#section-5.4)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7231 Accept-Encoding](https://tools.ietf.org/html/rfc7231#section-5.3.4)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7231 Referer](https://tools.ietf.org/html/rfc7231#section-5.5.2)
* [RFC 7231 User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)

## Response Headers

* [RFC 7231 Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Date](https://tools.ietf.org/html/rfc7231#section-7.1.1.2)
* [RFC 7230 Transfer-Encoding](https://tools.ietf.org/html/rfc7230#section-3.3.1)
* [RFC 7231 Vary](https://tools.ietf.org/html/rfc7231#section-7.1.4)

## Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [204 No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)

Exceptions from the service will be mapped to one of the aforementioned
error codes.

## Example


### Mobile and Mobile Country Code valid combinations
Example with Country code for South Africa (Country Code:ZA)
Country Code|Mobile Number
---|---
Empty|7160986233
US|2125553423
ZA|716098992

### Request

```shell
POST https://{baseURI}/locate/api/v1/user/locations
Content-Type: application/json
Accept: application/json
Authorization: Bearer {token}
```

```json
{
  "userLocations": [
    {
      "client": {
        "id": "UL_CLI",
        "firstSubLevel": "",
        "secondSubLevel": ""
      },
      "users": [
        {
          "userId": 22,
          "firstName": "Test",
          "lastName": "TEST3",
          "email": "test.test3@abcd.com",
          "employeeId": "abc333",
          "mobileCountryCode": "",
          "mobile": "+(27)7160981138",
          "optedIn": true,
          "concurLoginId": "",
          "affiliation": "Student"
        }
      ],
      "locations": [
        {
          "locationId": 0,
          "locationAddress": "",
          "locationName": "SomeLocation",
          "locationDescription": "",
          "locationLatitude": "",
          "locationLongitude": "",
          "locationIataCode": "LHR",
          "startDate": "2018-09-01T12:07",
          "endDate": "2018-09-02T12:07",
          "timezoneId": "Europe/London",
          "locationPhone": "",
          "visitorId": [
            22
          ]
        }
      ],
      "sourcePartner": {
        "id": "SP",
        "name": "Source Partner",
        "description": "Source Partner"
      },
      "transaction": {
        "transactionId": "AAAAAA",
        "createdDate": "2018-08-06T12:05",
        "transactionType": "Cancel"
      }
    }
  ]
}
```

### Response

```shell
200 OK
date: Mon, 15 May 2018 14:28:07 GMT
content-length: 20
content-type: application/json
```

```json
{
    "processedTransactions": {
        "Nui-API" : "Successfully Processed"
    },
    "unprocessedTransactions": {
        "AWS4e-N1QaN-swer-456": "Transaction type not found"
    }
} 
```
