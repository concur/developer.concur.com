---
title: Realtime Ingest Location
layout: reference
---

{% include prerelease.html %}

# Realtime Ingest Location

* [Overview](#overview)
* [Regional Availability](#regional-availability)
* [Request Headers](#request-headers)
* [Response Headers](#response-headers)
* [Status Codes](#status-codes)
* [Example](#example)
* [Schema](#schema)
  * [dropOffLocation](#schema-dropOffLocation)
  * [address](#schema-address)
  * [errorDescription](#schema-errorDescription)
  
## <a name="overview"></a>Overview

This API provides an endpoint to ingest real time user location information from Rideshare Services. 

## <a name="regional-availability"></a>Regional Availability

```
https://us.api.concursolutions.com/realtimeingest
```

## <a name="request-headers"></a>Request Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)

### Request Payload

Please refer the [Schema](#schema) section for more information regarding each field in the payload.

## <a name="response-headers"></a>Response Headers

* [concur-correlationid] Concur specific custom header
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7231 Date](https://tools.ietf.org/html/rfc7231#section-7.1.1.2)
* [RFC 7231 Server](https://tools.ietf.org/html/rfc7231#section-7.4.2)

### Response Payload

Name|Type|Format|Description
---|---|---|---
concur-correlationId|String|-|Concur specific custom field
requestId|String|-|Unique ID for the request
appVersion|String|-|Application version number
message|String|-|Success / Error message
errorDescription|Object|JSON|Description of error, if applicable

## <a name="status-codes"></a>Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorised](https://tools.ietf.org/html/rfc7235#section-3.1)
* [406 Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)

## <a name="example"></a>Example

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
    }
  }
}
```

### Response Header

```
Date: Mon, 11 Jun 2018 17:43:28 GMT
Server: pproxy/d8b665e
Content-Length: 170     
Content-Type: application/json
concur-correlationid: {concur-correlationid}
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

## <a name="schema"></a>Schema

See the schema documentation below for the specifications of each type, plus the various schemas that are shared components of each receipt schema.

The user locations API includes users and itineraries (locations) in addition to information about the company and post type (add or cancel).

Property Name|Type|Format|Description
---|---|---|---
uuid|String|-|**Required** UUID of the user.
dropOffDateTime|String|DateTime|**Required** Date Time where the user was dropped off (in RFC3339 format)
dropOffLocation|Object|JSON|**Required** Location where the user was dropped off

### <a name="schema-dropOffLocation"></a>dropOffLocation   

Property Name|Type|Format|Description
---|---|---|---
name|String|-|Canonical name of the location.
latitude|Number|Float|**Required** Numeric value of latitude (Range -90.00 and 90.00)
longitude|Number|Float|**Required** Numeric value of longitude (Range -180.00 and 180.00)
address|Object|JSON|Address where the user was dropped off

### <a name="schema-address"></a>address

Property Name|Type|Format|Description
---|---|---|---
streetAddress|String|-|Street address of the location.
addressLocality|String|-|Canonical City name of the address
addressRegion|String|-|1 to 3 character country subdivision code as defined in ISO 3166-2:2013
addressCountry|String|-|2 or 3 character country code as defined in ISO 3166-1:2013
postalCode|String|-|Postal code of the address

### <a name="schema-errorDescription"></a>errorDescription

Property Name|Type|Format|Description
---|---|---|---
fieldName|Array|-|Errors associated with the given *fieldName*
