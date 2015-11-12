---
title: Trips 
layout: reference
---


# Trips
The Trips resource represents itineraries in the Concur Travel system. TripLink suppliers use this resource to display a subset of the full booking fields.

## Version

1.1

## URI  

`/travel/trip/v1.1/{query_parameters}`

## Scope

In order to obtain itinerary data when making Itinerary API calls, the value of the OAuth scope parameter must be set to: `ITINER`

## Operations

* [Get trip summaries](#getts)
* [Get trip details](#gettd)
* [Create a new trip](#postnt)
* [Update a trip](#postut)
* [Cancel a trip](#delete)

## <a name="getts"></a>Get trip summaries

The Get Itinerary Summaries endpoint is used for retrieving trip summaries for the traveler whose account is associated with the OAuth access token used to make the API call. This endpoint can also be used to get trip summaries for a different user or the whole company. This is usually done when a Travel Management Company needs to get trip summaries on behalf of a user or company.

## Request

	GET /travel/trip/v1.1/{query_parameters}

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

#### Authorization header (required)

`Authorization: OAuth {access_token}`  
Where access_token is the OAuth 2.0 access token of the user whose itinerary information you want to retrieve. If you want to access company-wide itinerary information, the Concur user account associated with the OAuth 2.0 access token must have one of these roles: Web Services Administrator for Professional or Can Administer for Standard

#### Accept header (optional)
application/xml


## Response
The response returns an `ItineraryInfoList` parent element with with an `ItineraryInfo` child element for each trip summary for the specified traveler. If the `includeMetadata` and `ItemsPerPage` query parameters are included in the request, the response will include a `ConnectResponse` parent element which contains a `MetaData` element with paging information and a `Data` element with an `ItineraryInfoList` child element. The response for this operation can be divided into pages for easier processing.

### Data elements

| Element Name | Data Type | Description
| --------- | ---------| ---------
| ItineraryInfoList	| element | Parent element with an ItineraryInfo child element for each trip summary for the specified traveler.

### ItineraryInfoList elements

| Element Name | Data Type | Description
| --------- | ---------| ---------
| ItineraryInfo	| element  | Parent element with the information about an itinerary for the specified user.

### ItineraryInfo elements

| Element Name | Data Type | Description
| --------- | ---------| ---------
| TripId |  string  |  Encrypted trip identifier value.
| TripName |  |string  |  Name of the trip.
| TripStatus  |  string  |  The status of the trip. This element only appears if the includeCanceledTrips query parameter is used in the request.
| StartDateLocal  |  dateTime  |  The start date of the trip in the starting location’s timezone. Format: YYYY-MM-DDThh:mm:ss.
| EndDateLocal  |  dateTime  |  The end date of the trip in the ending location’s timezone. Format: YYYY-MM-DDThh:mm:ss.
| DateModifiedUtc  |  dateTime  |  The UTC date that this trip was last modified. Format: YYYY-MM-DDThh:mm:ss.
| UserLoginId  |  string  | The user's login to Concur. This element appears in the response of the GET /api/travel/trip/v1.1 operation when the OAuth 2.0 is access token is associated with a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.
| id  |  string  |  Trip ID URI with encrypted ID

### Metadata element
The parent element of the paging information (Paging elements).

### Paging elements

| Element Name | Data Type | Description
| --------- | ---------| ---------
| TotalPages  |  integer  |  The total number of pages the query returned.
| TotalItems  |  integer  |  The total number of itineraries the query returned.
| CurrentPage  |  integer   |  The page number for the set of results in the current response.
| ItemsPerPage  |  integer  |  The number of items set to display per page.
| PreviousPageURL  |  string  |  The URI to the previous page of results. This element will be empty when there are no previous pages.
| NextPageURL  |  string  |  The URI to the next set of results. This element will be empty when there are no next pages.



## Examples

### Example 1: Get trip summaries by start and end date

#### Request

	GET /api/travel/trip/v1.1/?startDate=2012%2F02%2F01&endDate=2013%2F12%2F31 HTTP 1.1
	Host: www.concursolutions.com
	Authorization: OAuth {access token} 
	...

#### Response
	HTTP 1.1 200 OK
	Content-Type: application/xml
	...

	<?xml version="1.0" encoding="utf-8"?>
	<ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    	<ItineraryInfo>
        	<TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
        	<TripName>Trip from Baltimore to New York</TripName>
        	<StartDateLocal>2012-02-15T09:00:00</StartDateLocal>
        	<EndDateLocal>2012-02-21T17:30:00</EndDateLocal>
        	<UserLoginId>cm@example.com</UserLoginId>
        	<DateModifiedUtc>2012-02-14T17:13:07</DateModifiedUtc>
        	<id>https://www.concursolutions.com/api/travel/trip/
        	v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</id>
    	</ItineraryInfo>
    	<ItineraryInfo>
        	<TripId>I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</TripId>
        	<TripName>Trip from Baltimore to Seattle</TripName>
        	<StartDateLocal>2012-03-26T09:00:00</StartDateLocal>
        	<EndDateLocal>2012-03-29T17:30:00</EndDateLocal>
        	<DateModifiedUtc>2012-03-24T19:00:00</DateModifiedUtc>
        	<UserLoginId>cm@example.com</UserLoginId>
        	<id>https://www.concursolutions.com/api/travel/trip/
        	v1.1/I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</id>
    	</ItineraryInfo>
	</ItineraryInfoList>

### Example 2: Get trip summary by booking type and start date Request
This request returns trip summaries for trips that started by the specified date for the specified booking type.

#### Request

	GET /api/travel/trip/v1.1/?startDate=2015%2F01%2F01&bookingType=Air HTTP 1.1
	Host: www.concursolutions.com
	Authorization: OAuth {access token} 
	...

#### Response

	HTTP 1.1 200 OK
	Content-Type: application/xml
	...

	<?xml version="1.0" encoding="utf-8"?>
	<ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    	<ItineraryInfo>
        	<TripId>I2uwiJJw8r7OwCIQOb2SHTsozwBsSie9W</TripId>
        	<TripName>Trip by air from Seattle to San Francisco</TripName>
        	<StartDateLocal>2015-01-01T12:30:00</StartDateLocal>
        	<EndDateLocal>2015-01-05T10:30:00</EndDateLocal>
        	<UserLoginId>cm@example.com</UserLoginId>
        	<DateModifiedUtc>2014-12-23T11:10:00</DateModifiedUtc>
        	<id>https://www.concursolutions.com/api/travel/trip/
        	v1.1/I2uwiJJw8r7OwCIQOb2SHTsozwBsSie9W</id>
    	</ItineraryInfo>
	</ItineraryInfoList>

### Example 3: Get trip summary by created date
This requests returns trip summaries created after the specified date.

#### Request

	GET /api/travel/trip/v1.1/?createdAfterDate=2015%2F02%2F13 HTTP 1.1
	Host: www.concursolutions.com
	Authorization: OAuth {access token}

#### Response

	HTTP 1.1 200 OK
	Content-Type: application/xml
	...

	<?xml version="1.0" encoding="utf-8"?>
	<ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    	<ItineraryInfo>
        	<TripId>BWjCIJJw8r7OwCIQOb2SHTsozwBsWlSie9</TripId>
        	<TripName>Trip by air from Los Angeles to Mexico City</TripName>
        	<StartDateLocal>2015-03-09T18:45:00</StartDateLocal>
        	<EndDateLocal>2015-03-30T08:00:00</EndDateLocal>
        	<UserLoginId>cm@example.com</UserLoginId>
        	<DateModifiedUtc>2015-01-28T09:30:00</DateModifiedUtc>
        	<id>https://www.concursolutions.com/api/travel/trip/
        	v1.1/BWjCIJJw8r7OwCIQOb2SHTsozwBsWlSie9</id>
    	</ItineraryInfo>
	</ItineraryInfoList>

### Example 4: Get trip summary with paging

#### Request
This request is used for dividing the response into pages for easier processing.

	GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&includeMetadata=true&ItemsPerPage=2&Page=1 HTTP 1.1
	Host: www.concursolutions.com
	Authorization: OAuth {access token}

#### Response
The response returns a ConnectResponse parent element which contains a MetaData element with paging information and a Data element with an ItineraryInfoList child element.

	HTTP 1.1 200 OK
	Content-Type: application/xml
	...

	<ConnectResponse>
    	<Metadata>
        	<Paging>
           		<TotalPages>38</TotalPages>
            	<TotalItems>187</TotalItems>
            	<CurrentPage>2</CurrentPage>
            	<ItemsPerPage>2</ItemsPerPage>
            	<PreviousPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?
            	createdAfterDate=2012%2F02%2F01&amp;
                  itemsPerPage=5&amp;page=3&amp;includeMetaData=true</PreviousPageURL>
            	<NextPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?
            	createdAfterDate=2012%2F02%2F01&amp;
                        itemsPerPage=5&amp;page=1&amp;includeMetaData=true</NextPageURL>
        	</Paging>
    	</Metadata>
    	<Data>
       	 <ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            	<ItineraryInfo>
                	<TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
                	<TripName>Trip from Baltimore to New York</TripName>
                	<StartDateLocal>2012-02-15T09:00:00</StartDateLocal>
                	<EndDateLocal>2012-02-21T17:30:00</EndDateLocal>
                	<UserLoginId>cm@example.com</UserLoginId>
                	<DateModifiedUtc>2012-02-14T17:13:07</DateModifiedUtc>
               		<id>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</id>
            	</ItineraryInfo>
            	<ItineraryInfo>
                	<TripId>I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</TripId>
                	<TripName>Trip from Baltimore to Seattle</TripName>
                	<StartDateLocal>2012-03-26T09:00:00</StartDateLocal>
                	<EndDateLocal>2012-03-29T17:30:00</EndDateLocal>
                	<DateModifiedUtc>2012-03-24T19:00:00</DateModifiedUtc>
                	<UserLoginId>cm@example.com</UserLoginId>
                	<id>https://www.concursolutions.com/api/travel/trip/v1.1/I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</id>
            	</ItineraryInfo>
        	</ItineraryInfoList>
    	</Data>
	</ConnectResponse>



## <a name="gettd"></a>Get trip details

The Get Itinerary Details endpoint is used for getting details for the specified trip. The elements included in the response vary as follows:
* Some elements, such as AirlineTickets or RailPayments, appear only for bookings of the appropriate type. For example AirlineTickets appears in the reponse only for air bookings and RailPayments, for rail bookings.
* Amount values, such as Rate or Tax, appear onlyif the requestor is the source of the booking. All other suppliers will not receive the amount elements associated with the bookings.
* Some elements, such as SabreDKNumber, appear onlyif the booking was created by the relevant GDS.
* Some elements are vendor-specific and appear only in responses for the associated vendor.  

This topic describes the full set of possible elements that can be returned. No itinerary can contain all of the possible elements, so the response will always be a subset of all the possible returned values.    

By default, when calling this API, the Concur account associated the OAuth access token used to make the API call should be the owner of the trip. This endpoint can also be used to get details for trips that the OAuth consumer does not own. This is most often done when a Travel Management Company needs to get trip details on behalf of a user. The TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

## Request

	GET /travel/trip/v1.1/trip_ID?[systemFormat=system_format|&userid_type=login|&user_id=login_ID]

## Path Parameters

| Parameter Name | Data Type |Description 
| --------- | --------- | ------- 
| trip_ID (required) | string  |  The identifier for the desired trip. This identifier is returned as the value of the id element when getting trip summaries. For example, if the returned value of the id element is I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL, then the URI for the request is `/travel/trip/v1.1/I2uwiJJw8r7Owl3IWlSie9WIelxhAhwi`


## Query Paramenters

| Parameter Name |Data Type |Description 
| --------- | --------- | ------- 
| systemFormat (optional) | string  |  Format of the response for a different system. The supported value is Tripit. The format for the request URI using this query paramenter is `/travel/trip/v1.1/trip_ID?systemFormat=Tripit` 
| userid_type (optional)  |  string  |  The type of user identification to use. Possible value is: login
| userid_value (optional)  | string  |  The user's login ID. This parameter must be provided in conjunction with the userid_type parameter. The userid_type and userid_value parameters can only be used if the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard. The format for the request URI using the userid_type and userid_value query paramenters is `/travel/trip/v1.1/trip_ID?userid_type=login&userid_value=login_ID`

### Headers

#### Authorization Header (required)

`Authorization: OAuth {access_token}`  
Where `access_token` is the OAuth 2.0 access token of the user whose itinerary information you want to retrieve. If you want to access company-wide itinerary information, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

#### Accept Header (optional)

application/xml

## Response
The response returns subset of the elements described in the following tables depending on the parameters used in the request and the status and details for the itinerary. The response can be formatted for TripIt, using the systemformat query string.

### Parent Elements

| Element Name | Data Type |Description 
| --------- | --------- | -------
| id	|string	|Trip ID URI with encrypted ID.
|ItinLocator | string	|The itinerary locator. This element is now deprecated and only supported for backward compatibility.
|ClientLocator	|string	|The XSD does not have a description for this element. Please provide one.
|ItinSourceName	|string	|The itinerary source. Format: TravelSupplier
|TripName	|string	|Name of the trip. Maximum length 255 characters.
|Comments	|string	|Comments for this itinerary. Maximum length 512 characters.
|StartDateLocal	|dateTime	|The start date of the trip in the starting location’s timezone. Format: YYYY-MM-DDThh:mm:ss
|EndDateLocal	|dateTime	|The end date of the trip in the ending location’s timezone. Format: YYYY-MM-DDThh:mm:ss
|DateCreatedUtc	|dateTime	|The date that this trip was created, in UTC. Format: YYYY-MM-DDThh:mm:ss
|DateModifiedUtc	|dateTime	|The UTC date that this trip was last modified. Format: YYYY-MM-DDThh:mm:ss
|BookedVia	|string	|The booking method for the trip.
|BookedByFirstName	|string	|The first name of the person who booked the trip.
|BookedByLastName	|string	|The last name of the person who booked the trip.
|DateBookedLocal	|dateTime	|The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss
|CancelComments	|string	|The comments provided if the itinerary is cancelled. Maximum length: 256 characters.
|Description	|string	|The trip description. Maximum length: 512 characters.
|EndDateUtc	|dateTime	|The end date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss
|IsPersonal	|boolean	|Whether the trip is a Business or Leisure trip. Format: true/false.
|ProjectName	|string	|The associated project name for the trip. Maximum length: 255 characters.
|StartDateUtc	|dateTime	|The start date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss
|RuleViolations	|array	|The list of rule violations associated with the itinerary. This parent element contains a RuleViolation child element for each associated rule violation.
|Status	|string	|The status of the itinerary. One of the following: 0- Confirmed; 1- Ticketed by agent; 2- Canceled
|Bookings	|array	|A parent element that contains a Booking child element for each booking associated with this itinerary.

### Booking Element
The Booking element contains the following elements:

| Element Name | Data Type |Description 
| --------- | --------- | -------
|Segments	|array	|List of Segments in this booking. The child elements included in this element vary depending on wheter a TMC, third-party developer, or TripLink supplier is requesting the itinerary details: **For TMCs and third-party developers**, the Segments element contains one or more Air, Car, Hotel, Dining, Ride, Rail, Parking, or Travel parent elements. **For TripLink suppliers**, the Segments element contains one or more Air, Car, Hotel, or Ride parent element.
|Passengers	|array	|Contains a Passenger child element for each included passenger. For the descriptions of these elements, see Passengers Elements
|RecordLocator	|string	|The unique identifier for a booking. This is often six alphameric characters but can have other formats depending on the booking source.
|BookingSource	|string	|The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place.
|DateModifiedUtc	|dateTime	|The date the booking was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss
|DateBookedLocal	|dateTime	|The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss
|ItinSourceName	|string	|The itinerary source. Format: TravelSupplier
|PassengerCount	|integer	|The number of passengers included in the booking.

## Examples

### Example 1: Get trip details for a trip ID

#### Request

	GET /api/travel/trip/v1.1/CNQR1234567890
	Host: www.concursolutions.com
	Authorization: OAuth {access token} 
	...

#### Response

	HTTP 1.1 200 OK
	Content-Type: application/xml
	...
```    
	<?xml version="1.0" encoding="utf-8"?>
	<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    	<id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    	<ItinLocator>CNQR1234567890</ItinLocator>
    	<ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    	<ItinSourceName>ConcurTravel</ItinSourceName>
    	<TripName>Trip from Dallas to Seattle</TripName>
    	<Comments />
    	<StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    	<EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    	<DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    	<BookedVia>EveryGDS</BookedVia>
    	<BookedByFirstName>Chris</BookedByFirstName>
 	   <BookedByLastName>Miller</BookedByLastName>
    	<DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    	<Bookings>
       	 	<Booking>
       	     <Segments>
        	        <Car>
            	        <Vendor>CQ</Vendor>
                	    <Status>HK</Status>
                	    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
               	     	<EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    	<ConfirmationNumber>F1672664579</ConfirmationNumber>
                    	<DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    	<StartCityCode>SEA</StartCityCode>
                    	<EndCityCode>SEA</EndCityCode>
                    	<StartLocation>SEA</StartLocation>
                    	<EndLocation>SEA</EndLocation>
                    	<Class>E</Class>
                    	<Body>C</Body>
                    	<Transmission>M</Transmission>
                    	<AirCondition>R</AirCondition>
                    	<NumCars>1</NumCars>
                    	<DiscountCode>346660</DiscountCode>
                    	<DailyRate>44.0000</DailyRate>
                    	<TotalRate>44.0000</TotalRate>
                    	<RateType>D</RateType>
                    	<Currency>USD</Currency>
                    	<Charges>
                        	<Fixed>
                            	<Description>Dropoff Fee</Description>
                            	<Currency>USD</Currency>
                            	<Amount>0.0000</Amount>
                            	<IsPrimary>false</IsPrimary>
                            	<SemanticsCode>DROPOFFFEE</SemanticsCode>
                            	<SemanticsVendorType>C</SemanticsVendorType>
                        	</Fixed>

                        	<RateWithAllowance>
                            	<Currency>USD</Currency>
                            	<Amount>44.0000</Amount>
                            	<StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                            	<IsPrimary>true</IsPrimary>
                            	<SemanticsCode>DAYS</SemanticsCode>
                            	<SemanticsVendorType>C</SemanticsVendorType>
                            	<PerUnit>DAY</PerUnit>
                            	<NumUnits>1.0000</NumUnits>
                            	<AllowanceNumUnits>250.0000</AllowanceNumUnits>
                            	<AllowanceAmount>0.2400</AllowanceAmount>
                            	<AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                        	</RateWithAllowance>
                    	</Charges>
                	</Car>
            	</Segments>
            	<Passengers>
                	<Passenger>
                    	<NameFirst>Chris</NameFirst>
                    	<NameLast>Miller</NameLast>
                	</Passenger>
            	</Passengers>
            	<RecordLocator>C123456789</RecordLocator>
            	<BookingSource>ConcurCars</BookingSource>
            	<DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            	<DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            	<ItinSourceName>TravelSupplier</ItinSourceName>
            	<PassengerCount>1</PassengerCount>
        	</Booking>
        	<Booking>
            	<Segments>
                	<Hotel>
                    	<Vendor>CQ</Vendor>
                    	<Status>GK</Status>
                    	<StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    	<EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    	<ConfirmationNumber>3364214265</ConfirmationNumber>
                    	<DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    	<RateCode>LV4</RateCode>
                    	<Name>CONCUR HOTEL</Name>
                    	<HotelPropertyId>CONQ</HotelPropertyId>
                    	<CheckinTime>00:00</CheckinTime>
                    	<CheckoutTime>00:00</CheckoutTime>
                    	<NumPersons>1</NumPersons>
                    	<NumRooms>1</NumRooms>
                    	<CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                    	<DailyRate>240.3500</DailyRate>
                    	<Currency>USD</Currency>
                    	<RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                    	<Charges>
                        	<Rate>
                            	<Currency>USD</Currency>
                            	<Amount>240.3500</Amount>
                            	<StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                            	<IsPrimary>false</IsPrimary>
                            	<SemanticsCode>ROOMRATE</SemanticsCode>
                            	<SemanticsVendorType>H</SemanticsVendorType>
                            	<PerUnit>DAY</PerUnit>
                            	<NumUnits>3.0000</NumUnits>
                        	</Rate>
                    	</Charges>
                	</Hotel>
            	</Segments>
            	<Passengers>
                	<Passenger>
                    	<NameFirst>Chris</NameFirst>
                    	<NameLast>Miller</NameLast>
                	</Passenger>
            	</Passengers>
            	<RecordLocator>0987654321</RecordLocator>
            	<BookingSource>ConcurHotel</BookingSource>
            	<DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            	<DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            	<OriginalItinLocator>33491211</OriginalItinLocator>
            	<ItinSourceName>ConcurTravel</ItinSourceName>
            	<PassengerCount>1</PassengerCount>
        	</Booking>
    	</Bookings>
	</Itinerary>
```

### Example 2: Get trip details in TripIt format

#### Request

	GET /api/travel/trip/v1.1/CNQR1234567890 /travel/trip/v1.1/73014481752?systemFormat=Tripit
	Host: www.concursolutions.com
	Authorization: OAuth {access token} 
 	...

#### Response

```
<?xml version="1.0" encoding="utf-8"?>
<Response>
    <Trip>
        <id>73014481752</id>
        <relative_url>/api/travel/trip/v1.1/73014481752</relative_url>
        <start_date>2013-08-21</start_date>
        <end_date>2013-08-24</end_date>
        <display_name>Strategy Team meeting</display_name>
        <is_private>true</is_private>
    </Trip>
    <AirObject>
        <booking_site_conf_num>RL10001005</booking_site_conf_num>
        <booking_site_name>Concur Travel</booking_site_name>
        <booking_site_phone></booking_site_phone>
        <booking_site_url>https://www.concursolutions.com</booking_site_url>
        <record_locator>4294993825</record_locator>
        <supplier_conf_num>CN10001005</supplier_conf_num>
        <supplier_contact></supplier_contact>
        <supplier_email_address></supplier_email_address>
        <supplier_name></supplier_name>
        <supplier_phone></supplier_phone>
        <supplier_url></supplier_url>
        <is_purchased>1</is_purchased>
        <notes></notes>
        <restrictions></restrictions>
        <total_cost></total_cost>
        <Segment>
            <StartDateTime>
                <date>2013-08-21</date>
                <time>07:45:00</time>
            </StartDateTime>
            <EndDateTime>
                <date>2013-08-21</date>
                <time>13:03:00</time>
            </EndDateTime>
            <start_airport_code>PHX</start_airport_code>
            <start_gate>A11</start_gate>
            <start_terminal>4</start_terminal>
            <end_airport_code>ORD</end_airport_code>
            <end_gate>F8</end_gate>
            <end_terminal>2</end_terminal>
            <marketing_airline>US</marketing_airline>
            <marketing_flight_number>1</marketing_flight_number>
            <aircraft>320</aircraft>
            <duration></duration>
            <distance>1433</distance>
            <notes></notes>
            <seats></seats>
            <service_class>Economy</service_class>
            <stops>Nonstop</stops>
        </Segment>
        <Segment>
            <StartDateTime>
                <date>2013-08-24</date>
                <time>13:55:00</time>
            </StartDateTime>
            <EndDateTime>
                <date>2013-08-24</date>
                <time>16:58:00</time>
            </EndDateTime>
            <start_airport_code>ORD</start_airport_code>
            <start_gate></start_gate>
            <start_terminal></start_terminal>
            <end_airport_code>PHX</end_airport_code>
            <end_gate></end_gate>
            <end_terminal></end_terminal>
            <marketing_airline>US</marketing_airline>
            <marketing_flight_number>1728</marketing_flight_number>
            <aircraft>A320</aircraft>
            <duration></duration>
            <distance></distance>
            <notes></notes>
            <seats></seats>
            <service_class>Economy</service_class>
            <stops> stops</stops>
        </Segment>
        <Traveler>
            <first_name>William</first_name>
            <middle_name></middle_name>
            <last_name>Never</last_name>
            <frequent_traveler_num></frequent_traveler_num>
            <frequent_traveler_supplier></frequent_traveler_supplier>
            <ticket_num></ticket_num>
        </Traveler>
    </AirObject>
</Response>  
```



## <a name="postnt"></a>Create a new trip
This endpoint is used for creating a new trip. To create a new trip, the specified dates in the content body can only span the trip to be created and cannot span an existing trip. To create or update a trip on behal of a user, the OAuth access token used to make the API call should be associated with the Concur account of that user. The TripLink supplier or TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

## Request

	POST /travel/trip/v1.1?[userid_type=login&user_id=login_ID]

### Request Parameters

| Parameter Name |Data Type |Description 
| --------- | --------- | ------- 
| userid_type (optional) | string	| The type of user identification to use. Possible value is: `login_id`
| userid_value (optional) | string	| The value for the user identification type. Currently the only available type is `login_id` so the value is the login credentials. This parameter must be provided in conjunction with the `userid_type` parameter. The `userid_type` and `userid_value` parameters can only be used if the user account associated with the OAuth 2.0 access token is associated with a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard. The format for the request URI using the `userid_type` and `userid_value` query paramenters is `/travel/trip/v1.1/trip_ID?userid_type=login&userid_value=login_ID`

## Headers

### Authorization Header (required)

`Authorization: OAuth {access_token}`  

Where access_token is the OAuth 2.0 access token of the user whose trip you want to create or update. If you want to access company-wide itinerary information, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

### Request

| Element Name | Required or Optional | TripLink | Data Type | Description 
| --------- | --------- | ------- | -------- | ---------
| Itinerary | required | Y | ItineraryType	| The root element for a trip. For this endpoint, it contains the following elements: ClientLocator, ItinSourceName, TripName, Comments, StartDateLocal, EndDateLocal, BookedByFirstName, BookedByLastName, Bookings.
| TripName | required | Y | string | Name of the trip. Maximum length: 255 characters.
| TripStatus | required	| Y | unsignedByte | The status of the trip. One of the following: 0 - Confirmed; 1 - Ticketed; 2 - Canceled; 6 - Proposal; 7 - Booked Proposal  This element only appears if the includeCanceledTrips query parameter is used in the request.
| RecordLocator | required | Y | string	| The unique identifier for a booking. This is often six alphameric characters but can have other formats depending on the booking source.
| BookingSource | required	| Y | string	| The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. This could be a GDS, OTA, Vendor code for a Supplier website, or Supplier Direct Connect API. For TripLink suppliers, this is the supplier's name.
| StartDateLocal |	optional | Y | dateTime | The start date of the trip in the starting location’s timezone. Format: YYYY-MM-DDThh:mm:ss
| EndDateLocal | optional | Y | dateTime	| The end date of the trip in the ending location’s timezone. Format: YYYY-MM-DDThh:mm:ss
| BookedByFirstName	| optional | Y | string	| The first name of the person who booked the trip.
| BookedByLastName | optional | Y | string	| The last name of the person who booked the trip.
| Bookings | optional | Y | array	| A parent element that contains a Booking child element for each booking associated with this itinerary.
| Booking | optional | Y | array	| A child element of the Bookings element which in turn contains the following child elements: Segments, Passengers, RecordLocator, BookingSource, DateModifiedUtc, DateBookedLocal, ItinSourceName, and PassengerCount.
| Segments | optional	 | Y | array	| List of Segments in this booking. The child elements included in this element vary depending on wheter a TMC, third-party developer, or TripLink supplier is requesting the itinerary details: **For TMCs and third-party developers**, the Segments element contains one or more Air, Car, Hotel, Dining, Ride, Rail, Parking, or Travel parent elements. For TripLink suppliers, the Segments element contains one or more Air, Car, Hotel, or Ride parent element.
| Comments | optional	 | Y | string	| Comments for the itinerary. Maximum length: 512 characters.
| ItinSourceName | optional | N | string	| The itinerary source. Format: TravelSupplier
| BookingOwner	| optional	 | Y | string	| Indicates the tool that supplied the booking to Concur Travel.
| Source | optional | N/A | string	| This element is obsolete. It is supported for backward compatibility only.
| DateBookedLocal | optional | Y | dateTime	| The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss
| FormOfPaymentName | optional | - | string	| The name of the form of payment for the booking.
| FormOfPaymentType | optional	 | - |string	| The type of the form of payment.
| TicketMailingAddress | optional | - | - | The mailing address for the booked ticket, if available.
| TicketPickupLocation | optional | - | - | The pickup location for the booked ticket, if available.
| TicketPickupNumber | optional	| - |  - |The confirmation number for the booked ticket, if available.
| AirfareQuotes | optional | - | array | List of stored airfare quotes for this booking.
| Airline Tickets |optional	| - |array	| List of airline tickets for this booking.
| Charges |optional | - | array | List of charges for this booking.
| MiscChargeOrders | optional | - | array |List of Miscellaneous AirCharges for this booking.
| Passengers | optional | Y | array	| Contains a Passenger child element for each included passenger. The Passenger child element in turn contains the following **required child elements**: NameFirst; NameLast; and the following **optional elements**: NameMiddle; NamePrefix; NameRemark; NameSuffix; NameTitle; TextName; FrequentTravelerProgram
| PassPrograms | optional | - | array | List of Pass Programs for this booking. This parent element has a PassProgram child element for each pass program associated with the booking. The PassProgram parent element has the following child elements: Amount, Name, Type, UserFirstName, and UserLastname
| PhoneNumbers | optional | - | array | List of Phone numbers associated with this booking. This parent element has a PhoneNumberData child element for each phone number associated with the booking. The PhoneNumberData parent element has the following child elements: PassengerRPH, PhoneNumber, Type, and Description.
| RailPayments | optional | - | array	| List of Rail payments associated with rail segments in this booking. It has the following child elements: RailPaymment that represents the payment information for a rail booking and RailAdjustment for the amount adjusted for a rail booking. 
| Segments | optional | Y | array | List of Segments in this booking. The child elements included in this element vary depending on wheter a TMC, third-party developer, or TripLink supplier is requesting the itinerary details: **For TMCs and third-party developers**, the Segments element contains one or more Air, Car, Hotel, Dining, Ride, Rail, Parking, or Travel parent elements. **For TripLink suppliers**, the Segments element contains one or more Air, Car, Hotel, or Ride parent element.
| Delivery | optional | - | - | The method this booking was delivered. 
| WaitListSegments | optional | - | - | The segments that the traveler is waitlisted for this booking.
| Warning | optional | - | - | The warnings associated with the booking.
| WebAddresses |optional | - | - | List of web addresses such as emails, pick-up URLs, and so on associated with this booking.


### Response
The response returns an HTTP status code and if the trip is created successfully, it also returns the full posted trip details with the following additional elements inside the Itinerary parent element:

| Element Name | Data Type | TripLink | Description 
| --------- | --------- | ------- | --------
|id | string | Y| The URI including the trip ID.
| ItinLocator | string | Y | The Itinerary Locator value (trip ID without the URL). The ItinLocator value is used when updating an existing trip.
| DateModifiedUtc | dateTime | Y | The UTC formatted date that this booking was last modified.
| BookedVia | string | Y | The booking method or the GDS the itinerary was booked in.
| DateBookedLocal | dateTime | Y | The date, in the traveler’s local time, that the booking was made.

## Examples

### Example 1: TMC creates a trip for user using their login credentials
This example shows how to create a trip for a user using their login credentials.

#### Request

```
POST /api/travel/trip/v1.1?userid_type=login_id&userid_value=cm@example.com HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token} 
... 
    
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>ConcurConnectAPI</ItinSourceName>
    <TripName>Trip from Dallas to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <Vendor>CQ</Vendor>
                    <Status>HK</Status>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <ConfirmationNumber>F1672664579</ConfirmationNumber>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                    <StartLocation>SEA</StartLocation>
                    <EndLocation>SEA</EndLocation>
                    <Class>E</Class>
                    <Body>C</Body>
                    <Transmission>M</Transmission>
                    <AirCondition>R</AirCondition>
                    <NumCars>1</NumCars>
                    <DiscountCode>346660</DiscountCode>
                    <DailyRate>44.0000</DailyRate>
                    <TotalRate>44.0000</TotalRate>
                    <RateType>D</RateType>
                    <Currency>USD</Currency>
                    <Charges>
                        <Fixed>
                            <Description>Dropoff Fee</Description>
                            <Currency>USD</Currency>
                            <Amount>0.0000</Amount>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>DROPOFFFEE</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                        </Fixed>
                        <RateWithAllowance>
                            <Currency>USD</Currency>
                            <Amount>44.0000</Amount>
                            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>1.0000</NumUnits>
                            <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                            <AllowanceAmount>0.2400</AllowanceAmount>
                            <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                        </RateWithAllowance>
                    </Charges>
                </Car>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
        <Booking>
            <Segments>
                <Hotel>
                    <Vendor>CQ</Vendor>
                    <Status>GK</Status>
                    <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    <ConfirmationNumber>3364214265</ConfirmationNumber>
                    <RateCode>LV4</RateCode>
                    <Name>CONCUR HOTEL</Name>
                    <HotelPropertyId>CONQ</HotelPropertyId>
                    <CheckinTime>03:00 PM</CheckinTime>
                    <CheckoutTime>12:00 PM</CheckoutTime>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                    <DailyRate>240.3500</DailyRate>
                    <Currency>USD</Currency>
                    <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                    <Charges>
                        <Rate>
                            <Currency>USD</Currency>
                            <Amount>240.3500</Amount>
                            <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>3.0000</NumUnits>
                        </Rate>
                    </Charges>
                </Hotel>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
```

#### Response

```
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    <ItinLocator>CNQR1234567890</ItinLocator>
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>ConcurTravel</ItinSourceName>
    <TripName>Trip from Dallas to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <BookedVia>EveryGDS</BookedVia>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <Vendor>CQ</Vendor>
                    <Status>HK</Status>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <ConfirmationNumber>F1672664579</ConfirmationNumber>
                    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                    <StartLocation>SEA</StartLocation>
                    <EndLocation>SEA</EndLocation>
                    <Class>E</Class>
                    <Body>C</Body>
                    <Transmission>M</Transmission>
                    <AirCondition>R</AirCondition>
                    <NumCars>1</NumCars>
                    <DiscountCode>346660</DiscountCode>
                    <DailyRate>44.0000</DailyRate>
                    <TotalRate>44.0000</TotalRate>
                    <RateType>D</RateType>
                    <Currency>USD</Currency>
                    <Charges>
                        <Fixed>
                            <Description>Dropoff Fee</Description>
                            <Currency>USD</Currency>
                            <Amount>0.0000</Amount>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>DROPOFFFEE</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                        </Fixed>
                        <RateWithAllowance>
                            <Currency>USD</Currency>
                            <Amount>44.0000</Amount>
                            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>1.0000</NumUnits>
                            <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                            <AllowanceAmount>0.2400</AllowanceAmount>
                            <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                        </RateWithAllowance>
                    </Charges>
                </Car>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>ConcurCars</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>TravelSupplier</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
        <Booking>
            <Segments>
                <Hotel>
                    <Vendor>CQ</Vendor>
                    <Status>GK</Status>
                    <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    <ConfirmationNumber>3364214265</ConfirmationNumber>
                    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    <RateCode>LV4</RateCode>
                    <Name>CONCUR HOTEL</Name>
                    <HotelPropertyId>CONQ</HotelPropertyId>
                    <CheckinTime>00:00</CheckinTime>
                    <CheckoutTime>00:00</CheckoutTime>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                    <DailyRate>240.3500</DailyRate>
                    <Currency>USD</Currency>
                    <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                    <Charges>
                        <Rate>
                            <Currency>USD</Currency>
                            <Amount>240.3500</Amount>
                            <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>3.0000</NumUnits>
                        </Rate>
                    </Charges>
                </Hotel>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>ConcurHotel</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurTravel</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
```

### Example 2: TripLink supplier creates a trip
This example shows how a TripLink supplier create a trip.

#### Request

```
POST /api/travel/trip/v1.1/ HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token} 
... 
    
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <TripName>Trip from Dallas to Seattle</TripName>
    <TripStatus>HK</TripStatus>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                </Car>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
        </Booking>
        <Booking>
            <Segments>
                <Hotel>
                    <Status>GK</Status>
                    <StartCityCode>SEA</StartCityCode>
                    <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    <TimeZoneId>Pacific</TimeZoneId>
                    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    <StartCity>Seattle</StartCity>
                    <StartCountry>US</StartCountry>
                </Hotel>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
        </Booking>
    </Bookings>
</Itinerary>
```

#### Response

```
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    <ItinLocator>CNQR1234567890</ItinLocator>
    <TripName>Trip from Dallas to Seattle</TripName>
    <TripStatus>HK</TripStatus>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <BookedVia>EveryGDS</BookedVia>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                </Car>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
        </Booking>
        <Booking>
            <Segments>
                <Hotel>
                    <Status>GK</Status>
                    <StartCityCode>SEA</StartCityCode>
                    <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    <TimeZoneId>Pacific</TimeZoneId>
                    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    <StartCity>Seattle</StartCity>
                    <StartCountry>US</StartCountry>
                </Hotel>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
        </Booking>
    </Bookings>
</Itinerary>
```

### Example 3: Third-party developer creates a trip using the access token used to make the API call
This example shows how to create a trip for a user whose account is associated with the access token used to make the API call.

#### Request

```
POST https://www.concursolutions.com/api/travel/trip/v1.1 HTTPS 1.1
Authorization: OAuth {access token} 
... 
    
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>ConcurConnectAPI</ItinSourceName>
    <TripName>Trip from Dallas to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName> 
    <TripStatus>7</TripStatus> 
    <TravelRequestId>3339</TravelRequestId> 
    <CustomAttributes>
        <CustomAttribute>
            <ExternalId /> 
            <DataType>Numeric</DataType> 
            <Name>ProposalBatchSize</Name> 
            <DisplayTitle /> 
            <Data>3</Data> 
            <DisplayOnItinerary>true</DisplayOnItinerary> 
        </CustomAttribute> 
        <CustomAttribute>
            <ExternalId /> 
            <DataType>Numeric</DataType> 
            <Name>ProposalSequenceIndex</Name> 
            <DisplayTitle /> 
            <Data>1</Data> 
            <DisplayOnItinerary>true</DisplayOnItinerary> 
        </CustomAttribute>
    </CustomAttributes>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <Vendor>CQ</Vendor>
                    <Status>HK</Status>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <ConfirmationNumber>F1672664579</ConfirmationNumber>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                    <StartLocation>SEA</StartLocation>
                    <EndLocation>SEA</EndLocation>
                    <Class>E</Class>
                    <Body>C</Body>
                    <Transmission>M</Transmission>
                    <AirCondition>R</AirCondition>
                    <NumCars>1</NumCars>
                    <DiscountCode>346660</DiscountCode>
                    <DailyRate>44.0000</DailyRate>
                    <TotalRate>44.0000</TotalRate>
                    <RateType>D</RateType>
                    <Currency>USD</Currency>
                    <Charges>
                        <Fixed>
                            <Description>Dropoff Fee</Description>
                            <Currency>USD</Currency>
                            <Amount>0.0000</Amount>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>DROPOFFFEE</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                        </Fixed>
                        <RateWithAllowance>
                            <Currency>USD</Currency>
                            <Amount>44.0000</Amount>
                            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>1.0000</NumUnits>
                            <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                            <AllowanceAmount>0.2400</AllowanceAmount>
                            <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                        </RateWithAllowance>
                    </Charges>
                </Car>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
        <Booking>
            <Segments>
                <Hotel>
                    <Vendor>CQ</Vendor>
                    <Status>GK</Status>
                    <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    <ConfirmationNumber>3364214265</ConfirmationNumber>
                    <RateCode>LV4</RateCode>
                    <Name>CONCUR HOTEL</Name>
                    <HotelPropertyId>CONQ</HotelPropertyId>
                    <CheckinTime>03:00 PM</CheckinTime>
                    <CheckoutTime>12:00 PM</CheckoutTime>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                    <DailyRate>240.3500</DailyRate>
                    <Currency>USD</Currency>
                    <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                    <Charges>
                        <Rate>
                            <Currency>USD</Currency>
                            <Amount>240.3500</Amount>
                            <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>3.0000</NumUnits>
                        </Rate>
                    </Charges>
                </Hotel>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
```

#### Response
The response is the same as in Example 1.



## <a name="postut"></a>[Update a trip](/api-reference/travel/itinerary-tmc-thirdparty/index.html#postdetails)
Creates a new trip or updates an existing trip. A new trip will be created if the trip dates span no existing trip and the request doesn’t include a tripId. If a tripId is included in the uri it will update the specified trip. The full trip information is included in the update request, which replaces the existing trip.  

This endpoint can be used to create trips for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to create a trip on behalf of a user. The supplier or TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.



## <a name="delete"></a>Cancel a trip
This endpoint can be used to cancel all segments in a trip. To cancel a trip on behalf of a user, the OAuth access token used to make the API call should be associated with the Concur account of that user. The TripLink supplier or TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

## Request
	POST /travel/trip/v1.1/cancel?tripid=trip_ID[&userid_type=login&userid_value=login_ID]

### Path Parameters

| Parameter Name | Data Type |Description 
| --------- | --------- | -------
| cancel | required | string | The URI path modifier for canceling a trip. The format for the request is `/travel/trip/v1.1/cancel?tripid=trip_ID[&userid_type=login&userid_value=login_ID]`

### Request Parameters

| Parameter Name | Data Type |Description 
| --------- | --------- | -------
| tripid (optional) | string | The identifier for the trip to be updated. For example, if the value of tripid is `I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL`, then the request is `POST /travel/trip/v1.1?tripid=I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL`
| userid_type (optional) |string | The type of user identification to use. Possible value is: `login_id`
| userid_value (optional) | string | The user's login ID. This parameter must be provided in conjunction with the userid_type parameter. The `userid_type` and userid_value parameters can only be used if the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard. The format for the request URI using the userid_type and userid_value query paramenters is `/travel/trip/v1.1/trip_ID?userid_type=login&userid_value=login_ID`

## Headers

### Authorization Header (required)

`Authorization: OAuth {access_token}`  

Where access_token is the OAuth 2.0 access token of the user whose trip you want to create or update. If you want to access company-wide itinerary information, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

### Request Content Body
None.

### Response
The request returns the full trip details for the cancelled trip. If the request is successful, the response trip will not contain any segments because they have been cancelled. The response includes the following additional elements inside the Itinerary parent element:

| Parameter Name | Data Type |Description 
| --------- | --------- | -------
| id | string | The URI including the trip ID.
| ItinLocator | string | The Itinerary Locator value (trip ID without the URL). The ItinLocator value is used when updating an existing trip.
|DateModifiedUtc | dateTime | The UTC formatted date that this booking was last modified.
| BookedVia | string | The GDS the itinerary was booked in.
| DateBookedLocal | dateTime | The date, in the traveler’s local time, that the booking was made.


## Examples

### Example: Cancel a trip with a specific trip ID

#### Request

```
POST /api/travel/trip/v1.1/cancel?tripId=CNQR1234567890 HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
... 
```

#### Response

```
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    <ItinLocator>CNQR1234567890</ItinLocator>
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>ConcurTravel</ItinSourceName>
    <TripName>Trip from Dallas to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <BookedVia>EveryGDS</BookedVia>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <Bookings>
        <Booking>
            <Segments/>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>ConcurCars</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>TravelSupplier</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
        <Booking>
            <Segments/>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>ConcurHotel</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurTravel</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
```
