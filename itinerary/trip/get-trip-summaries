---
title: Get Trip Summaries 
layout: operation
---

##  Description

Travel Management Companies (TMCs) and third-party developers can use this endpoint to get a list of itineraries.
An itinerary is also known as trip and it can containe multiple bookings. 
TMCs and third-party developers can perform several GET operations on this endpoint to obtain different levels of trip information, such as:

* Getting lists of itineraries and trip details for a specific user.
* Getting a list of itineraries for all users in an entire company.

The response for this operation supports paging for easier processing.

**Endppoint**: GET /api/travel/trip/v1.1

## Request

### Request paramenters
All request paramenters are optional. 
To identify a specific user by login ID or XMLSyncID, you can specify the following request parameters:

|Parameter Name	|Parameter Type	|Data Type	|Description|
|:--------------|:--------------|:----------|:----------|
|startDate	|date	|dateTime	|The URL-encoded start date (in Coordinated Universal Time, aka UTC) for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the start date is set to today's date - 30 days. The request will only return trips that are ongoing during the provided dates, either starting on the date, or starting before the date and ongoing during the provided date.|
|endDate	|date	|dateTime	|The URL-encoded UTC end date for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the end date is set to today's date + 12 months. The request will only return trips that are ongoing during the provided dates, either ending on the date, or starting before the date and ongoing during the provided date.|
|createdAfterDate	|date	|dateTime	|The URL-encoded UTC date for when the trip was created. The query string will return trips created on or after this date. Used with the createdbeforedate for finding trips created during a date range. Format: YYYY-MM-DD.|
|createdBeforeDate	|date	|dateTime	|The URL-encoded UTC date for when the trip was created. The query string will return trips created on or before this date. Used with the createdafterdate for finding trips created during a date range. Format: YYYY-MM-DD.|
|lastModifiedDate	|date	|dateTime	|The last modified UTC date of the trips and any their associated bookings. This query string will return only the trips where the trip or any of its associated bookings have a last modified date that is greater or equal to the supplied time. The provided date/time can be anytime between now and the first date of trip creation in the database. The format is either the date or the date and time combined.
|bookingType	|type	|string	|The trip includes at least one booking of this type. Format: Air, Car, Dining, Hotel, Parking, Rail, or Ride
|userid_type=login&userid_value	|userid	|string	|The loginID is the user's Concur login ID. The userid_value of ALL can be sent to get trip summaries for all users at the company. The userid_type and userid_value parameters can only be used if the OAuth consumer has one of the user roles listed above. 
|includeMetadata=true&ItemsPerPage	|true/false&number	|string&integer	|The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters will cause the response to be divided into pages. The response will be wrapped in a ConcurResponse parent element, with both the response details and the paging metadata included. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1. 
|includeVirtualTrip	|flag	integer	|Virtual trips are segments booked offline through the Travel Request product. Set the includeVirtualTrip query parameter to 1 to include those trips in the list. 
|includeCanceledTrips	|true/false	string	|The includeCanceledTrips query parameter will cause the request to also return trips with a status of Canceled. When this query parameter is set to true, the response will include the TripStatus element. 


### Headers

#### Authorization header

Authorization: OAuth {access_token} 
Where access_token is the OAuth 2.0 access token of the user whose itinerary information you want to retrieve. If you want to access company-wide itinerary information, the Concur user account associated with the OAuth 2.0 access token must have one of these roles: Web Services Administrator for Professional or Can Administer for Standard

#### Content-Type header

application/xml

## Response

### Root elements

### <Child elements>

## Examples

### Example 1: <Example 1 description>

#### Request

#### Response
