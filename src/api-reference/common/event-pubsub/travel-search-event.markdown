---
title: Travel Search Event
layout: reference
---

{% include prerelease.html %}

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
`eventType`|String|-|Identifies the search event type. for air search it is travelSearchAir
`topic`|String|-|Topic for subscription for air hotel and car search this will be : concur.travel.search
`subTopic`|String| -|identify sub catagory for air search it can be :  <br>-airshop.v1.schedule <br>-airshop.v1.price
`timeStamp`|String|date/time|Search event time, UTC.
`facts`|`Object`|[Air Search Facts](#schema-air-search-facts)| Facts for air search.

### <a name="schema-air-search-facts"></a>Air Search Facts

Name|Type|Format|Description
---|---|---|---
`companyId`|`String`|GUID|Uniquely identifies the company of the traveler.
`userId`|`String`|GUID|Uniquely identifies the user performing the search. *NOTE:* In the event travel is booked by an arranger, this is the traveler. In cases where the individual is booking on behalf of a guest, this is the user performing the search.
`arrangerUserId`|`String`|GUID|Uniquely identifies the user arranging the trip.
`searchLegs`|`String`|RoundTrip, MultiSeg, OneWay | Type of air search.
`isGuestBooking`|`boolean`|-|Identifies if the booking is guest or not.
`isFlexFaring`|`boolean`|-|Identifies if search is for flex faring.
`segments`|`Array`|[Air Search Segment](#schema-air-search-segment)|List of segment for search.
`numberOfTravelers`|`Integer`|-|Number of travlers.
`classOfTrip`|`String`|F, C, W, Y| Selected class.
`airCarriers`|`Array`|E.g. AA, VA, LH|If the user filters for individual carriers, this list will be populated with the airline carrier codes.

### <a name="schema-air-search-segment"></a>Air Search Segment

Name|Type|Format|Description
---|---|---|---
`departures`|`Array`|[City](#schema-city)|List of departure airports selected by the traveler.
`arrivals`|`Array`|[City](#schema-city)|List of arrival airports selected by the traveler.
`departureDate`|`String`|YYYY-MM-DD|Date traveler will depart from the origin, UTC. Either the departure date/time OR the arrival date/time will be populated.
`departureTime`|`String`|HH:MM:SS|Departure time, UTC.  Either the departure date/time OR the arrival date/time will be populated.
`departureTimeWindow`|`Integer`|-|Time window (+/-) from selected departure time, in hours.  Either the departure date/time OR the arrival date/time will be populated.
`arrivalDate`|`String`|YYYY-MM-DD|Date in which the traveler will arrive in the destination, UTC. Either the departure date/time OR the arrival date/time will be populated.
`arrivalTime`|`String`|HH:MM:SS|Time in which the traveler will arrive in the destination, UTC.  Either the departure date/time OR the arrival date/time will be populated.
`arrivalTimeWindow`|`Integer`|-|Time window (+/-) from selected to arrive in the destination, in hours.  Either the departure date/time OR the arrival date/time will be populated.

### <a name="schema-city"></a>City

Name|Type|Format|Description
---|---|---|---
`cityName`|`String`|-|Name of the city. Example: Frankfurt
`cityIATACode`|`String`|-|IATA code of the city. Example: FRA

### <a name="schema-hotel-request"></a>Hotel

Name|Type|Format|Description
---|---|---|---
`id`|`String`|GUID|Uniquely identifies the event.
`correlationId`|String|GUID|Uniquely identifies the hotel search request.
`eventType`|String|-|Identifies the search event type. For hotel it is travelSearchHotel.
`topic`|String|-|Identify the topic for pubsub subscription.
`subTopic`|String|-|Identify sub catagory of search. for hotel search it is hotelshop.v1.price.
`timeStamp`|String|date/time|Search event time, UTC.
`facts`|`Object`|[Hotel Search Facts](#schema-hotel-search-facts)|Facts for hotel search

### <a name="schema-hotel-search-facts"></a>Hotel Search Facts

Name|Type|Format|Description
---|---|---|---
`companyId`|`String`|GUID|Uniquely identifies the company of the traveler.
`userId`|`String`|GUID|Uniquely identifies the user performing the search. *NOTE:* In the event travel is booked by an arranger, this is the traveler. In cases where the individual is booking on behalf of a guest, this is the user performing the search.
`refPointLatitude`|`Number`|Double | Search location, latitude.
`refPointLongitude`|`Number`|Double | Search location, longitude.
`refPointName`|`String`|-|Reference point location name.
`radiusDistance`|`Integer`|-|Distance from the reference point as selected by the user.
`distanceUnit`|`String`|Mile, Kilometer|Unit for radius distance.
`checkInDate`|`String`|YYYY-MM-DD|Check in date, UTC.
`checkOutDate`|`String`|YYYY-MM-DD|Check out date, UTC.
