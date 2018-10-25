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
* [Sample Events](#sample-events)

## <a name="subscribing"></a>Subscribing

For partners, please work with your technical enablement contact to subscribe to this event.

You must provide an HTTPS server endpoint that will accept the event payload described below.

Your HTTPS server endpoint must accessible from the public web with a non-self-signed certificate.  The certificate should be signed by a known Certificate Authority and should be reachable through DNS.

### <a name="endpoint-behavior"></a>Endpoint Behavior
The Event Subscription Service provides guaranteed at least once event delivery.  This is accomplished through retrying posting of the event payload to the subscribers' endpoint until the response indicates successful receipt.  The expected acknowledgment max for a request to the subscribers' endpoint is 30 seconds.  The service will attempt posting to the endpoint and then back-off and retry until the subscriber endpoint responds with delivered or not accepted.  Concur suggests the subscriber endpoint implement the following behavior characteristics.
Ensure endpoint responds as quickly as possible (< 3 seconds)
Subscriber must maintain reasonable uptime to support the requirements of the integration scenario
If the subscriber must have durability of delivered events these must be persisted on the subscriber side
If the subscriber action on the event is non-idempotent or expensive guard against a duplicate event by checking the event Id has not already been processed.

### <a name="event-subscription-service-behavior"></a>Event Subscription Service (ESS) Behavior
The Event Subscription service has the following characteristics from the subscriber perspective.
* Requests will come from [us | emea | cn].api.concursolutions.com
* Requests will be re-tried when subscriber responds with HTTP Response Code(s): 5xx, 401, 403 and 429
* Requests will not be re-tried when subscriber responds with HTTP Response Code(s):
  * 2xx – Indicates successful receipt of the event
  * 4xx – Indicates posted event is unexpected or incorrectly formatted
* Request will be retried until delivery OR event retention period expiry
* Event retention period is 72 hours from the time of event being published
* Events are not archived, but of the event delivery attempts/responses are logged and retained a (period of time)


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
`departureDate`|`String`|YYYY-MM-DD|Date traveler will depart from the origin, local time. Either the departure date/time OR the arrival date/time will be populated.
`departureTime`|`String`|HH:MM AM/PM|Departure time, local time.  Either the departure date/time OR the arrival date/time will be populated.
`departureTimeWindow`|`Integer`|-|Time window (+/-) from selected departure time, in hours.  Either the departure date/time OR the arrival date/time will be populated.
`arrivalDate`|`String`|YYYY-MM-DD|Date in which the traveler will arrive in the destination, local time. Either the departure date/time OR the arrival date/time will be populated.
`arrivalTime`|`String`|HH:MM AM/PM|Time in which the traveler will arrive in the destination, local time.  Either the departure date/time OR the arrival date/time will be populated.
`arrivalTimeWindow`|`Integer`|-|Time window (+/-) from selected to arrive in the destination, in hours.  Either the departure date/time OR the arrival date/time will be populated.

### <a name="schema-city"></a>City

Name|Type|Format|Description
---|---|---|---
`cityName`|`String`|-|Name of the city. Example: Frankfurt
`cityIATACode`|`String`|-|IATA code of the city. Example: FRA. NOTE: If the user searches for a group of airports (e.g. Los Angeles area airports), this code will not be IATA standard. In this case, the city name should be used.

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
`checkInDate`|`String`|YYYY-MM-DD|Check in date, local time.
`checkOutDate`|`String`|YYYY-MM-DD|Check out date, local time.

## <a name="sample-events"></a>Sample Events

### <a name="sample-air-event"></a>Air

Sample roundtrip air search

```
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
