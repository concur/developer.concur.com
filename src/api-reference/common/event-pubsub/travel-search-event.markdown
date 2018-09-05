---
title: Travel Search Event
layout: reference
---

# Travel Search Event

**Preview** _This is a prerelease version of the service and is subject to change before final release._

Subscribers to this event will receive search criteria for travel searches performed within Concur's online booking tool.


* [Subscribing](#subscribing)
* [Schema](#schema)
	* [Air](#schema-air-request)
  * [Hotel](#schema-hotel-request)

## <a name="subscribing"></a>Subscribing

To subscribe to this event, please refer to the Event PubSub Getting Started Documentation and subscribe to the topic:

_concur.travel.search_

### Scopes

Name|Description
---|---
`tbd`|Provides access to subscribe to events.

## <a name="schema"></a>Schema

### <a name="schema-air-request"></a>Air

Name|Type|Format|Description
---|---|---|---
`id`|`String`|GUID|Uniquely identifies the event.
`correlationId`|String|GUID|Uniquely identifies the air search request.
`topic`|String|concur.travel.search|
`timeStamp`|String|date/time|Search event time, UTC.
`facts`|`Object`||[Air Search Facts](#schema-air-search-facts)

### <a name="schema-air-search-facts"></a>Air Search Facts

Name|Type|Format|Description
---|---|---|---
`companyId`|`String`|GUID|Uniquely identifies the company of the traveler.
`userId`|`String`|GUID|Uniquely identifies the user performing the search. *NOTE:* In the event travel is booked by an arranger, this is the traveler. In cases where the individual is booking on behalf of a guest, this is the user performing the search.
`searchLegs`|`String`|RoundTrip, MultiSeg, OneWay | Type of air search.
`segments`|`Array`||[Air Search Segment|(#schema-air-search-segment)
`numberOfTravelers`|`Integer`||
`classOfTrip`|`String`|F, C, W, Y| Selected class
`airCarriers`|`Array`|E.g. AA, VA, LH|If the user filters for individual carriers, this list will be populated with the airline carrier codes.

### <a name="schema-air-search-segment"></a>Air Search Segment

Name|Type|Format|Description
---|---|---|---
`departures`|`String`|IATA Airport Code|List of departure airports selected by the traveler.
`arrivals`|`String`|IATA Airport Code|List of destination airports selected by the traveler.
`departureDate`|`String`|YYYY-MM-DD|Departure date, UTC.
`departureTime`|`String`|HH:MM:SS|Departure time, UTC.
`departureTimeWindow`|`Integer`||Time window (+/-) from selected departure time in hours.
`arrivalDate`|`String`|YYYY-MM-DD|Arrival date, UTC.
`arrivalTime`|`String`|HH:MM:SS|Arrival time, UTC.
`arrivalTimeWindow`|`Integer`||Time window (+/-) from selected arrival time in hours.

### <a name="schema-hotel-request"></a>Hotel

Name|Type|Format|Description
---|---|---|---
`id`|`String`|GUID|Uniquely identifies the event.
`correlationId`|String|GUID|Uniquely identifies the air search request.
`topic`|String|concur.travel.search|
`timeStamp`|String|date/time|Search event time, UTC.
`facts`|`Object`||[Hotel Search Facts](#schema-hotel-search-facts)

### <a name="schema-hotel-search-facts"></a>Hotel Search Facts

Name|Type|Format|Description
---|---|---|---
`companyId`|`String`|GUID|Uniquely identifies the company of the traveler.
`userId`|`String`|GUID|Uniquely identifies the user performing the search. *NOTE:* In the event travel is booked by an arranger, this is the traveler. In cases where the individual is booking on behalf of a guest, this is the user performing the search.
`refPointLatitude`|`Number`|Double | Search location, latitude.
`refPointLongitude`|`Number`|Double | Search location, longitude.
`refPointName`|`String`||Location name as entered by the user.
`radiusDistance`|`Integer`||Distance from the reference point as selected by the user.
`distanceUnit`|`String`|Mile, Kilometer|Unit for radius distance.
`checkInDate`|`String`|YYYY-MM-DD|Arrival date, UTC.
`checkOutDate`|`String`|YYYY-MM-DD|Departure date, UTC.
