---
title: Travel Search Event
layout: reference
---

{% include prerelease.html %}

* [Overview](#overview)
* [Schema](#schema)
	* [Air](#schema-air-request)
	* [Hotel](#schema-hotel-request)
* [Sample Events](#sample-events)

## <a name="overview"></a>Overview

The topic 'concur.travel.search' provides travel search information.  Subscribers to this event will receive search criteria for travel searches performed within SAP Concur's online booking tool.

This event is relevant for applications that are interacting with travelers before they book their trip such as applications that context to the traveler regarding company policy, preferences, or general compliance requirements for booking travel.

## <a name="schema"></a>Schema

### <a name="schema-air-request"></a>Air

Name|Type|Format|Description
---|---|---|---
`id`|`string`|`GUID`|Uniquely identifies the event.
`correlationId`|`string`|`GUID`|Uniquely identifies the air search request.
`eventType`|`string`|-|Identifies the search event type. Supported values: `travelSearchAir`
`topic`|`string`|-|Topic for subscription. Supported values: `concur.travel.search`
`subTopic`|`string`| -|Identifies a sub topic. Supported values: `airshop.v1.schedule`, `airshop.v1.price`
`timeStamp`|`string`|`date/time`|Search event time in UTC.
`facts`|`object`|[Air Search Facts](#schema-air-search-facts)|Facts for air search.

### <a name="schema-air-search-facts"></a>Air Search Facts

Name|Type|Format|Description
---|---|---|---
`companyId`|`string`|`GUID`|Uniquely identifies the company of the traveler.
`userId`|`string`|`GUID`|Uniquely identifies the user performing the search. Note: In the event travel is booked by an arranger, this will be the traveler's ID. In cases where a profiled user is booking on behalf of a non profiled guest, this will be the user performing the search.
`arrangerUserId`|`string`|`GUID`|If the user is also the traveler, this value will be the same as the userID above. If an arranger is booking on behalf of the traveler, this will uniquely identify the user arranging the trip.
`searchLegs`|`string`|-|Type of air search. Supported values: `RoundTrip`, `MultiSeg`, `OneWay`
`isGuestBooking`|`boolean`|-|Identifies if the booking is a guest.
`isFlexFaring`|`boolean`|-|Identifies if search is for flex faring.
`segments`|`array`|[Air Search Segment](#schema-air-search-segment)|List of segments for search.
`numberOfTravelers`|`integer`|-|Number of travelers.
`classOfTrip`|`string`|-|Selected cabin class. Supported values: `F` = First Class, `C` = Business Class, `W` = Premium Economy, `Y` = Economy Class
`airCarriers`|`array`|-|If the user filters for individual carriers, this list will be populated with the IATA airline carrier codes. Example: AA, VA, LH

### <a name="schema-air-search-segment"></a>Air Search Segment

Name|Type|Format|Description
---|---|---|---
`departures`|`array`|[City](#schema-city)|List of departure airports selected by the user. A user can select a city area/hub as point of departure, which will result in an array of multiple airports.
`arrivals`|`array`|[City](#schema-city)|List of arrival airports selected by the user. A user can select a city area/hub as point of arrival, which will result in an array of multiple airports.
`departureDate`|`string`|`YYYY-MM-DD`|Date traveler will depart from the point of departure, local time. Either the departure date/time, or the arrival date/time will be populated.
`departureTime`|`string`|`HH:MM AM/PM`|Departure time, in local time.  Either the departure date/time, or the arrival date/time will be populated.
`departureTimeWindow`|`integer`|-|Time window (+/-) around selected departure time, in hours. Either the departure date/time, or the arrival date/time will be populated.
`arrivalDate`|`string`|`YYYY-MM-DD`|Date on which the traveler will arrive at the destination, in local time. Either the departure date/time, or the arrival date/time will be populated.
`arrivalTime`|`string`|`HH:MM AM/PM`|Time at which the traveler will arrive at the destination, in local time.  Either the departure date/time, or the arrival date/time will be populated.
`arrivalTimeWindow`|`integer`|-|Time window (+/-) around selected arrival time, in hours. Either the departure date/time, or the arrival date/time will be populated.

### <a name="schema-city"></a>City

Name|Type|Format|Description
---|---|---|---
`cityName`|`string`|-|Name of the city. Example: Frankfurt
`cityIATACode`|`string`|-|IATA code of the city. Example: FRA. Note: If the user searches for a group of airports (e.g. Los Angeles area airports), this code will not be IATA standard. In this case, the city name should be used.

### <a name="schema-hotel-request"></a>Hotel

Name|Type|Format|Description
---|---|---|---
`id`|`string`|`GUID`|Uniquely identifies the event.
`correlationId`|`string`|`GUID`|Uniquely identifies the hotel search request.
`eventType`|`string`|-|Identifies the search event type. Supported  values: `travelSearchHotel`
`topic`|`string`|-|Topic for subscription. Supported values: `concur.travel.search`
`subTopic`|`string`|-|Identifies sub-topic. Supported values: `hotelshop.v1.price`
`timeStamp`|`string`|`date/time`|Search event time in UTC.
`facts`|`object`|[Hotel Search Facts](#schema-hotel-search-facts)|Facts for hotel search.

### <a name="schema-hotel-search-facts"></a>Hotel Search Facts

Name|Type|Format|Description
---|---|---|---
`companyId`|`string`|`GUID`|Uniquely identifies the company of the traveler.
`userId`|`string`|`GUID`|Uniquely identifies the user performing the search. Note: In the event travel is booked by an arranger, this will be the traveler’s ID. In cases where a profiled user is booking on behalf of a non-profiled guest, this will be the user performing the search.
`refPointLatitude`|`number`|`double`|Reference point for the search latitude.
`refPointLongitude`|`number`|`double`|Reference point for the search longitude.
`refPointName`|`string`|-|Reference point for the search name.
`radiusDistance`|`integer`|-|Distance around the reference point as selected by the user.
`distanceUnit`|`string`|-|Unit for radius distance. Supported values: `Mile`, `Kilometer`
`checkInDate`|`string`|`YYYY-MM-DD`|Check in date, in local time.
`checkOutDate`|`string`|`YYYY-MM-DD`|Check out date, in local time.

## <a name="sample-events"></a>Sample Events

### <a name="sample-air-event"></a>Air

Sample roundtrip air search

```json
{
  "id": "00e4aeb3-d181-4881-89b1-0d0b5418968f",
  "correlationId": "51AB4E74-1287-4B20-87FB-98A93CE4CEEB",
  "eventType": "travelSearchAir",
  "topic": "concur.travel.search",
  "timeStamp": "2018-10-15T14:19:06.752Z",
  "data": null,
  "subtopic": null,
  "facts": {
    "companyId": "",
    "userId": "",
    "arrangerUserId": "",
    "searchLegs": "RoundTrip",
    "isGuestBooking": false,
    "isFlexFaring": false,
    "segments": [
    {
     "departures": [
          "LHR"
       ],
     "arrivals": [
          "FRA"
      ],
     "departureDate": "1/15/2019",
     "departureTime": "9:00 AM",
     "departureTimeWindow": 3,
     "arrivalDate": null,
     "arrivalTime": null,
     "arrivalTimeWindow": null
      },
     {
      "departures": [
          "FRA"
      ],
      "arrivals": [
         "LHR"
       ],
      "departureDate": "1/16/2019",
      "departureTime": "3:00 PM",
      "departureTimeWindow": 3,
      "arrivalDate": null,
      "arrivalTime": null,
      "arrivalTimeWindow": null
     }
    ],
  "numberOfTravelers": 1,
  "classOfTrip": null,
  "airCarriers": null
  }
}

```
