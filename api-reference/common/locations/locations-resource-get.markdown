---
title: Get locations
layout: operation
---


## Description
Gets details of locations that are used by Concur and that are valid at the user's company.

## Request

### Request parameters

#### Query parameters

| Parameter | Required/Optional | Data Type | Description |
|------------|------------------|--------------|--------------|
|offset | optional | string | The starting point of the next set of results, after the limit specified in the limit field has been reached. |
|limit | required | Int32 | The number of records to return. Default value: 25 |
|name | optional | string | A common name associated with the location. This name can be a location description such as a neighborhood (SoHo), a landmark (Statue of Liberty), or a city name (New York). |
|city | optional | string | The city name of the location. |
|countrySubdivision | optional | string | The [ISO 3166-2:2007 country subdivision code][1] for the location. Example: US-WA |
|country | optional | string | The 2-letter [ISO 3166-1 country code][2] for the location. Example: United States is US |
|administrativeRegion | optional | string | The administrative region of the location. An administrative region is a government unit, such as a county, that contains one or more cities. |

Example: `https://www.concursolutions.com/api/v3.0/common/locations?offset={offset}&limit=25&name={name}&city={city}&countrySubdivision={countrySubdivision}&country={country}&administrativeRegion={administrativeRegion}`

### Headers

#### Content type
application/xml
application/json

#### Authorization header

The authorization header must have an OAuth token for a valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

## Response

### Content body
This request will return a **locations** parent element containing an **items** child element. The **items** element contains a **location** child element for each location.

#### location elements

| Element | Required/Optional | Data Type | Description |
|------------|---------------|--------------|-----------------------|
| AdministrativeRegion | optional | string | The administrative region of the location. An administrative region is a government unit, such as a county, that contains one or more cities. |
| Country | optional | string | The 2-letter [ISO 3166-1 country code][2] for the location. Example: United States is US |
| CountrySubdivision | optional | string | The [ISO 3166-2:2007 country subdivision code][1] for the location. Example: US-WA |
| IATA code | optional | string | The [International Air Transport Association (IATA) airport code][3] of the location. |
| ID | optional | string | The ID of the location. |
| IsAirport | optional | Boolean | Indicates whether the location is an airport. Format: true or false |
| IsBookingTool | optional | Boolean | Indicates whether the location is used by the booking tool. Format: true or false |
| Latitude | optional | Decimal | The latitude of the geocode for the location. |
| Longitude | optional | Decimal | The longitude of the geocode for the location. |
| Name | optional | string | A common name associated with the location. This name can be a location description such as a neighborhood (SoHo), a landmark (Statue of Liberty), or a city name (New York). |
| URI | optional | string | The URI of the resource. |

## Examples

### XML example request



### XML example of successful response





[1]: http://en.wikipedia.org/wiki/ISO_3166-2
[2]: http://en.wikipedia.org/wiki/ISO_3166-1
[3]: http://www.iata.org/publications/Pages/code-search.aspx