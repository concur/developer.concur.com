---
title: Travel Search Event
layout: reference
---

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
`arrangerUserId`|`String`|GUID|Uniquely identifies the user arranging the trip.
`searchLegs`|`String`|RoundTrip, MultiSeg, OneWay | Type of air search.
`isGuestBooking`|`boolean`||identifies if the booking is guest or not. 
`isFlexFaring`|`boolean`||identifies if search is for flex faring. 
`segments`|`Array`||[Air Search Segment|(#schema-air-search-segment)
`numberOfTravelers`|`Integer`||
`classOfTrip`|`String`|F, C, W, Y| Selected class
`airCarriers`|`Array`|E.g. AA, VA, LH|If the user filters for individual carriers, this list will be populated with the airline carrier codes.

### <a name="schema-air-search-segment"></a>Air Search Segment

Name|Type|Format|Description
---|---|---|---
`departures`|`Array`|IATA Airport Code|List of departure airports selected by the traveler.
`arrivals`|`Array`|IATA Airport Code|List of arrival airports selected by the traveler.
`departureDate`|`String`|YYYY-MM-DD|Date traveler will depart from the origin, UTC. Either the departure date/time OR the arrival date/time will be populated.
`departureTime`|`String`|HH:MM:SS|Departure time, UTC.  Either the departure date/time OR the arrival date/time will be populated.
`departureTimeWindow`|`Integer`||Time window (+/-) from selected departure time, in hours.  Either the departure date/time OR the arrival date/time will be populated.
`arrivalDate`|`String`|YYYY-MM-DD|Date in which the traveler will arrive in the destination, UTC. Either the departure date/time OR the arrival date/time will be populated.
`arrivalTime`|`String`|HH:MM:SS|Time in which the traveler will arrive in the destination, UTC.  Either the departure date/time OR the arrival date/time will be populated.
`arrivalTimeWindow`|`Integer`||Time window (+/-) from selected to arrive in the destination, in hours.  Either the departure date/time OR the arrival date/time will be populated.

### <a name="schema-hotel-request"></a>Hotel

Name|Type|Format|Description
---|---|---|---
`id`|`String`|GUID|Uniquely identifies the event.
`correlationId`|String|GUID|Uniquely identifies the hotel search request.
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
`refPointName`|`String`||Reference point location name.
`radiusDistance`|`Integer`||Distance from the reference point as selected by the user.
`distanceUnit`|`String`|Mile, Kilometer|Unit for radius distance.
`checkInDate`|`String`|YYYY-MM-DD|Arrival date, UTC.
`checkOutDate`|`String`|YYYY-MM-DD|Departure date, UTC.
