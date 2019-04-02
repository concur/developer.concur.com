---
title: Locations v1.1
layout: reference

redirect_from:
  - /api-reference-deprecated/version-one-one/expense-report/location-resource-get.html
  - /api-reference-deprecated/version-one-one/expense-report/location-resource.html
---

{% include deprecation-alert.html %}

**NOTE:** Find the newer version 3.0 [here](./v3.locations.markdown)

The valid city location codes in Concur. These location codes are used in the Post requests for the Expense Report service, when the City field is provided/required. The location codes vary by client, and cannot be used across multiple clients.

## URI

```
https://www.concursolutions.com/api/expense/expensereport/v1.1/Locations
```

## Get a list of locations

Retrieves a list of valid city location codes.

### Request

#### Parameters

Parameter|Required/Optional|Description
---|---|---
`city={_searchstring_}`|Required|The city name. The system will return all values with city names that begin with the supplied name. The city name value is not case sensitive. The value can contain the `*` wildcard. This wildcard matches any number of characters. For example, `Locations?city=old*b_o` will match the city name "Old Saybrook"

**Example**

```
https://www.concursolutions.com/api/expense/expensereport/v1.1/Locations?city=Redmond
```

#### Headers

* Authorization - Required. Authorization header with OAuth token for valid Concur user.
* Content-Type - application/xml

### Response

#### Content types

application/xml

#### Payload

This request will return a **LocationsList** parent element with a **Location** parent element for each location with a City Name that contains the search text. The **Location** parent element contains the following child elements.

#### Location elements

Element|Description
---|---
Name|The city name.
Country|The country name for the location.
State|The state/province name for the location. Empty if there is no corresponding state/province.
LocationID|The unique key for the location. This value is required when posting data in the **City** element.

### Examples

#### XML example request

```shell
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/Locations?city={_searchstring_} HTTP/1.1
Authorization: OAuth {access token}
```

### XML example of successful response

```shell
HTTP/1.1 200 OK
Content-Type: application/xml
```

```xml
<LocationList xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03"    
  xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <Location>
    <Country>UNITED STATES</Country>
    <LocationID>nXipdPDzr4oCPylSOd91NQqQ$sqmnQrQxR</LocationID>
    <Name>Redmond</Name>
    <State>Washington</State>
  </Location>
  <Location>
    <Country>UNITED STATES</Country>
    <LocationID>8WWeksu7dEoHlsiIE$28kkj3ED8swhgGgye</LocationID>
    <Name>Redmond</Name>
    <State>Oregon</State>
  </Location>
  <Location>
    <Country>UNITED STATES</Country>
    <LocationID>Oe11hKEi$lslPncYAe2k2h7s67sdkkLEigUIF$</LocationID>
    <Name>Redmond</Name>
    <State>Utah</State>
  </Location>
</LocationList>
```
