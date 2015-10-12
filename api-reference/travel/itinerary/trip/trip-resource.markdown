---
title: Trips 
layout: reference
---


## Description
The Trips resource represents itineraries in the Concur Travel system. TripLink suppliers use this resource to display a subset of the full booking fields.

## Version

1.1

## URI  

`/travel/trip/v1.1/{query_parameters}`

## Scope

In order to obtain itinerary data when making Itinerary API calls, the value of the [OAuth scope parameter][1] must be set to: `ITINER`

## Operations

* Get trip summaries
* Get trip details
* Create a new trip
* Update a trip
* Cancel a trip

##  Get trip summaries

The Get Itinerary Summaries endpoint is used for retrieving trip summaries for the traveler whose account is associated with the OAuth access token used to make the API call. This endpoint can also be used to get trip summaries for a different user or the whole company. This is usually done when a Travel Management Company needs to get trip summaries on behalf of a user or company.

## Request

<samp>GET /travel/trip/v1.1/{query_parameters}</samp>

### Query paramenters
All query paramenters are optional. 
To identify a specific user by login ID or XMLSyncID, you can specify the following request parameters:

|Parameter Name|Parameter Type|Data Type|Description|
|:---------|:---------|:-------|:-----------------------------------------|
|startDate	|date	|dateTime	|The URL-encoded start date (in Coordinated Universal Time, aka UTC) for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the start date is set to today's date - 30 days. The request will only return trips that are ongoing during the provided dates, either starting on the date, or starting before the date and ongoing during the provided date.|
|endDate	|date	|dateTime|The URL-encoded UTC end date for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the end date is set to today's date + 12 months. The request will only return trips that are ongoing during the provided dates, either ending on the date, or starting before the date and ongoing during the provided date.|
|createdAfterDate	|date	|dateTime	|The URL-encoded UTC date for when the trip was created. The query string will return trips created on or after this date. Used with the createdbeforedate for finding trips created during a date range. Format: YYYY-MM-DD.|
|createdBeforeDate|date	|dateTime	|The URL-encoded UTC date for when the trip was created. The query string will return trips created on or before this date. Used with the createdafterdate for finding trips created during a date range. Format: YYYY-MM-DD.|
|lastModifiedDate|date|dateTime	|The last modified UTC date of the trips and any their associated bookings. This query string will return only the trips where the trip or any of its associated bookings have a last modified date that is greater or equal to the supplied time. The provided date/time can be anytime between now and the first date of trip creation in the database. The format is either the date or the date and time combined.
|bookingType|type	|string	|The trip includes at least one booking of this type. Format: Air, Car, Dining, Hotel, Parking, Rail, or Ride
|userid_type=login|userid|string|The loginID is the user's Concur login ID.This parameter can only be used if the OAuth consumer has one of the user roles listed above.
|userid_value|userid|string	|The userid_value of ALL can be sent to get trip summaries for all users at the company. This parameter can only be used if the OAuth consumer has one of the user roles listed above. 
|includeMetadata|true/false|string|The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters cause the response to be divided into pages. The response is wrapped in a ConcurResponse parent element, with both the response details and the paging metadata included. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1.|
|ItemsPerPage|number|integer|The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters will cause the response to be divided into pages. The response will be wrapped in a ConcurResponse parent element, with both the response details and the paging metadata included. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1.|
|includeVirtualTrip|flag|integer	|Virtual trips are segments booked offline through the Travel Request product. Set the includeVirtualTrip query parameter to 1 to include those trips in the list.|
|includeCanceledTrips	|true/false|string|The includeCanceledTrips query parameter will cause the request to also return trips with a status of Canceled. When this query parameter is set to true, the response will include the TripStatus element.|

Here are some examples of how to format GET requests using a combination of these query parameters:

* To get trip summaries for the entire company:

https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}&userid_type=login&userid_value=ALL

The access token used to make the API call must be associated with an account that has the Admin user role.

* To get trip summaries for the account associated with the app making the call:

https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}

The access token used to make the API call is associated with the account for the app making the call.

* To get trip summaries for a user with the specified login credentials:

https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}&userid_type=login_id&userid_value={_loginID_}

The access token used to make the API call is associated with the Concur account with the specified login credentials.


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






[1]: http://concur.github.io/developer.concur.com/api-reference/authentication/web-flow
[2]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/booking/booking-resource
