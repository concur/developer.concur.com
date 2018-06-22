---
title: Realtime Ingest Location
layout: reference
---

# Realtime Ingest Location

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Regional Availability](#regionalAvailability)
* [Schema](#schema)
  * [dropOffLocation](#dropOffLocation)
  * [address](#address)
* [Request Headers](#requestHeaders)
* [Response Headers](#responseHeaders)
* [Status Codes](#statusCodes)
* [Example](#example)

## Overview

This API provides an endpoint to ingest real time user location information from Rideshare Services. 

## Regional Availability

```
https://us.api.concursolutions.com/realtimeingest
```

## Schema

POST /location/:uuid

See the schema documentation below for the specifications of each type, plus the various schemas that are shared components of each receipt schema. Property names mentioned in __*bold italics*__ are required fields.

The user locations API includes users and itineraries (locations) in addition to information about the company and post type (add or cancel).

  | Property Name         | Type   | Format   | Description                                                               |
  | --------------------- | ------ | -------- | ------------------------------------------------------------------------- |
  | __*uuid*__            | String | -        | **Required** UUID of the user.                                            |
  | __*dropOffDateTime*__ | String | DateTime | **Required** Date Time where the user was dropped off (in RFC3339 format) |
  | __*dropOffLocation*__ | Object | JSON     | **Required** Location where the user was dropped off                      |

### dropOffLocation   
  | Property Name   | Type   | Format | Description                                                        |
  | --------------- | ------ | ------ | ------------------------------------------------------------------ |
  | __*name*__      | String | -      | Canonical name of the location.                                    |
  | __*latitude*__  | Number | Float  | **Required** Numeric value of latitude (Range -90.00 and 90.00)    |
  | __*longitude*__ | Number | Float  | **Required** Numeric value of longitude (Range -180.00 and 180.00) |
  | __*address*__   | Object | JSON   | Address where the user was dropped off                             |

  ### address
  | Property Name         | Type   | Format | Description                                                             |
  | --------------------- | ------ | ------ | ----------------------------------------------------------------------- |
  | __*streetAddress*__   | String | -      | Street address of the location.                                         |
  | __*addressLocality*__ | String | -      | Canonical City name of the address                                      |
  | __*addressRegion*__   | String | -      | 1 to 3 character country subdivision code as defined in ISO 3166-2:2013 |
  | __*addressCountry*__  | String | -      | 2 or 3 character country code as defined in ISO 3166-1:2013             |
  | __*postalCode*__      | String | -      | Postal code of the address                                              |


## Request Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)

## Response Headers

* [concur-correlationid] Concur specific custom header
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7231 Date](https://tools.ietf.org/html/rfc7231#section-7.1.1.2)
* [RFC 7231 Server](https://tools.ietf.org/html/rfc7231#section-7.4.2)

## Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorised](https://tools.ietf.org/html/rfc7235#section-3.1)
* [406 Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)


## Example

### Request URL
```
https://{baseURI}/location/{uuid}
```

### Request
```
POST https://{baseURI}/location/{uuid}
Content-Type: application/json
Authorization: Bearer {access-token}
```
```json
{
  "uuid": "uuid",
  "dropOffDateTime": "2018-06-08T09:00:45-0600",
  "dropOffLocation": {
    "latitude": 47.610378,
    "longitude": -122.200676,
    "name": "Bellevue",
    "address": {
      "streetAddress": "601 108th Ave NE",
      "addressCountry": "US",
      "addressLocality": "Bellevue",
      "addressRegion": "WA",
      "postalCode": "98004"
    },
  }
}
```

### Response Header
```                          
 Date: Mon, 11 Jun 2018 17:43:28 GMT
 Server: pproxy/d8b665e
 Content-Length: 170     
 Content-Type: application/json
 concur-correlationid: concur-correlationid
                                                 
```

### Response Body
```json
{ 
  "concur-correlationId": "concur-correlationId",
  "requestId": "requestId",  
  "appVersion": "appVersion",                    
  "message": "Event Received"                          
 }                       
```
