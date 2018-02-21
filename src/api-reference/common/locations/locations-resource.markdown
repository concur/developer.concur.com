---
title: Locations
layout: reference
---

# Locations

Gets details of locations that are used by Concur and that are valid at the user's company.

* [Retrieve details of locations that are used by Concur and that are valid at the user's company](#get)
* [Retrieve details of a specified location](#getID)
* [Schema](#schema)

### Version
3.0  

1.1 has been deprecated and can be found [here.](/api-reference-deprecated/version-one-one/expense-report/location-resource.html)  


## <a name="get"></a>Retrieve details of locations that are used by Concur and that are valid at the user's company

    GET  /api/v3.0/common/locations

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	`string`	|	`query`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
`limit`	|	`Int32`	|	`query`	|	The number of records to return. Default value: 25
`name`	|	`string`	|	`query`	|	A common name associated with the location. This name can be a location description such as a neighborhood (SoHo), a landmark (Statue of Liberty), or a city name (New York).
`city`	|	`string`	|	`query`	|	The city name of the location.
`countrySubdivision`	|	`string`	|	`query`	|	The ISO 3166-2:2007 country subdivision code for the location. Example: US-WA
`country`	|	`string`	|	`query`	|	The 2-letter ISO 3166-1 country code for the location. Example: United States is US
`administrativeRegio`n	|	`string`	|	`query`	|	The administrative region of the location. An administrative region is a government unit, such as a county, that contains one or more cities.



## <a name="getID"></a>Retrieve details of a specified location

    GET  /api/v3.0/common/locations/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the location.


## <a name="schema"></a>Schema


### <a name="locations"></a>Locations

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Location](#location)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.


### <a name="location"></a>Location

Name | Type | Format | Description
-----|------|--------|------------
`AdministrativeRegion`	|	`string`	|	-	|	The administrative region of the location.
`Country`	|	`string`	|	-	|	The 2-letter ISO 3166-1 country code for the location.
`CountrySubdivision`	|	`string`	|	-	|	The ISO 3166-2:2007 country subdivision code for the location. Example: US-WA
`IATACode`	|	`string`	|	-	|	The International Air Transport Association (IATA) airport code of the location.
`ID` |	`string`	|	-	|	The unique identifier of the resource.
`IsAirport`	|	`boolean`	|	-	|	Indicates whether the location is an airport. Format: true or false
`IsBookingTool`	|	`boolean`	|	-	|	Indicates whether the location is used by the booking tool. Format: true or false
`Latitude`	|	`Decimal`	|	-	|	The latitude of the geocode for the location.
`Longitude`	|	`Decimal`	|	-	|	The longitude of the geocode for the location.
`Name`	|	`string`	|	-	|	The location name. Maximum length: 64 characters
`URI`	|	`string`	|	-	|	The URI to the resource.
