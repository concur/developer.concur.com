---
title: Opportunities 
layout: reference
---

# Opportunities

Retrieves a collection of opportunities for a specified trip or for all trips that fall within a date range

* [Retrieve a collection of opportunities for a specified trip or for all trips that fall within a date range](#get)
* [Schema](#schema)

### Version
3.0

## <a name="get"></a>Retrieve all connection requests tht match the TripLink supplier ID

    GET  https://www.concursolutions.com/api/v3.0/insights/opportunities

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`tripId	`|	`string`	|	`query`	|	The trip id
`opportunityType`	|	`string`	|	`query`	|	Comma seperated list of opportunities (Hotel, Car, Air, Rail, Taxi and Service) to get. Do not specify any values to get all opportunities
`fromUtc`	|	`DateTime`	|	`query`	|	The From date in UTC for the date range
`toUtc`	|	`DateTime`	|	`query`	|	The To date in UTC for the date range


## <a name="schema"></a>Schema


### <a name="opportunities"></a>Opportunities

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Opportunity](#opportunity)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.


### <a name="opportunity"></a>Opportunity

Name | Type | Format | Description
-----|------|--------|------------
`EndCityCode`	|	`string`	|	-	|	The city code of the destination city where the opportunity is offered
`EndDateLocal`	|	`DateTime`	|	-	|	The local end date of the location where the opportunity is offered
`EndPostalCode`	|	`string`	|	-	|	The postal code of the destination location where the opportunity is offered
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`IsActive`	|	`boolean`	|	-	|	Indicates that the opportunity is currently active
`StartCityCode`	|	`string`	|	-	|	The city code of the originating city where the opportunity is offered
`StartDateLocal`	|	`DateTime`	|	-	|	The local start date of the location where the opportunity is offered
`tartPostalCode	`|	`string`	|	-	|	The postal code of the originating location where the opportunity is offered
`TripId	`|	`string`	|	-	|	The trip id of the associated itinerary
`Type`	|	`string`	|	-	|	['Hotel' or 'Car' or 'Air' or 'Rail' or 'Taxi' or 'Service']The type of opportunity
`URI`	|	`string`	|	-	|	The URI to the resource.					
