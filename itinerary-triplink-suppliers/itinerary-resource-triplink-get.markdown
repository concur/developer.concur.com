---
title: Itinerary Resource 
layout: operation
---




NOTE: If you are a TMC or third party developer, please review the alternate resource documentation [here][1].

This resource supports the following GET actions:

##  Get List of Itineraries Request

| ----- |
|  Description |
|  Retrieves trip summaries for the traveler specified in the OAuth token.  
The response for this function can be divided into pages for easier processing. |
|  Query Parameters - Required |  Supported Accept Types |
|  None |   |
|  Query Parameters - Optional |   |
|  **NOTE**: If multiple query parameters are supplied, they will be combined with a logical AND. The trip must match all provided criteria to be returned in the search results.

* **startDate={_date_}**  
The URL-encoded start date (in Coordinated Universal Time, aka UTC) for the trip. Format: YYYY/MM/DD. If no query parameters are provided, the start date is set to today's date - 30 days. The request will only return trips that are ongoing during the provided dates, either starting on the date, or starting before the date and ongoing during the provided date.
* **endDate****={_date_}**  
The URL-encoded UTC end date for the trip. Format: YYYY/MM/DD. If no query parameters are provided, the end date is set to today's date + 12 months. The request will only return trips that are ongoing during the provided dates, either ending on the date, or starting before the date and ongoing during the provided date.
* **createdAfterDate****={_date_}**  
The URL-encoded UTC date for when the trip was created. The query string will return trips created on or after this date. Used with the createdbeforedate for finding trips created during a date range. Format: YYYY/MM/DD.
* **createdBeforeDate****={_date_}**  
The URL-encoded UTC date for when the trip was created. The query string will return trips created on or before this date. Used with the createdafterdate for finding trips created during a date range. Format: YYYY/MM/DD.
* **lastModifiedDate****={_date_}**  
The last modified UTC date of the trips and any their associated bookings. This query string will return only the trips where the trip or any of its associated bookings have a last modified date that is greater or equal to the supplied time. The provided date/time can be anytime between now and the first date of trip creation in the database. The format is either the date or the date and time combined.
* **bookingType={_type_}**  
The trip includes at least one booking of this type. Format: Air, Car, Dining, Hotel, Parking, Rail, or Ride
* **includeMetadata=true&ItemsPerPage={_number_}&Page={_number_}**  
The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters will cause the response to be divided into pages. The response will be wrapped in a **ConcurResponse** parent element, with both the response details and the paging metadata included. The details of the response are here. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1.
* **includeVirtualTrip=1**  
Virtual trips are segments booked offline through the Travel Request product. Set the includeVirtualTrip query parameter to 1 to include those trips in the list.
* **includeCanceledTrips=_{true/false}_**  
The includeCanceledTrips query parameter will cause the request to also return trips with a status of Canceled. When this query parameter is set to **true**, the response will include the **TripStatus** element.

Example:

**To get the itinerary list:**  
https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}  
 

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request by Start and End Date

    GET /api/travel/trip/v1.1/?startDate=2012%2F02%2F01&endDate=2013%2F12%2F31 HTTP 1.1
    Host: [www.concursolutions.com][2]
    Authorization: OAuth {access token}
    ...

####  XML Example Request by Booking Type and Start Date

    GET /api/travel/trip/v1.1/?startDate=2012%2F02%2F01&bookingType=Air HTTP 1.1
    Host: [www.concursolutions.com][2]
    Authorization: OAuth {access token}
    ...

####  XML Example Request by Created Date

    GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01 HTTP 1.1
    Host: [www.concursolutions.com][2]
    Authorization: OAuth {access token}

####  XML Example Request with Paging

    GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&includeMetadata=true&ItemsPerPage=2 HTTP 1.1
    Host: [www.concursolutions.com][2]
    Authorization: OAuth {access token}

##  Get List of Itineraries Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][3] |   |
|  Content Body |   |
|

This request will return an **ItineraryInfoList** parent element with an **ItineraryInfo** child element for each trip summary for the specified traveler. Each **ItineraryInfo** element has the following child elements:

|  Element |  Description |
|  TripId |  Encrypted trip identifier value. |   |
|  TripName |  Name of the trip |
|  TripStatus |  The status of the trip. This element only appears if the **includeCanceledTrips** query parameter is used in the request. |
|  StartDateLocal |  The start date of the trip in the starting location's timezone. Format: YYYY-MM-DDThh:mm:ss. |
|  EndDateLocal |  The end date of the trip in the ending location's timezone. Format: YYYY-MM-DDThh:mm:ss. |
|  UserLoginId |  The user's login to Concur. Only appears when the OAuth consumer has one of the specified admin roles. |
|  DateModifiedUtc |  The UTC date that this trip was last modified. Format: YYYY-MM-DDThh:mm:ss. |
|  id |  Trip ID URI with encrypted ID. |

**Paging**

If the includeMetadata and ItemsPerPage query parameters are included in the request, the response will include a **ConnectResponse** parent element with the following elements:

| ----- |
|  Element |  Description |
|  Data |  This parent element contains the response as detailed above. |
|  Metadata |  This parent element contains the following elements:

|  Paging |  The parent element of the paging information. Contains the following child elements:

**TotalPages**: The total number of pages the query returned.  
**TotalItems**: The total number of itineraries the query returned.If the request did not include the ItemsPerPage query parameter, this  
**CurrentPage**: The page number for the set of results in the current response.  
**ItemsPerPage**: The number of items set to display per page.  
**PreviousPageURL**: The URI to the previous page of results. This element will be empty when there are no previous pages.  
**NextPageURL**: The URI to the next set of results. This element will be empty when there are no next pages.

 |

 |

 |

####  XML Example of Successful Response

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

####  XML Example of Successful Response with Paging

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
                <PreviousPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&amp;itemsPerPage=5&amp;page=3&amp;includeMetaData=true</PreviousPageURL>
                <NextPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&amp;itemsPerPage=5&amp;page=1&amp;includeMetaData=true</NextPageURL>
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

##  Get Itinerary Details Request

| ----- |
|  Description |  Supported Accept Types |
|

Retrieves the details for the specified trip, owned by the OAuth consumer.

If the TripLink - Open Booking supplier is the booking source for a booking in the Itinerary, they will receive the full details of that booking, as documented in the TMC version of the [Get Itinerary Details][4] function. Any bookings that the TripLink - Open Booking supplier was not the source of will return the subset of booking fields documented on this page.

**Air** booking suppliers will only be able to view carrier, flight number, and flight departure time information for the bookings that they own.

The response can be formatted for TripIt, using the **systemformat** query string. Refer to the [TripIt API documentation][5] for the format definitions.

Refer to the [Itinerary FAQ][6] for additional information.

 |   |
|  Query Parameters - Required |   |
|

* **{_tripId_}**  
The identifier for the desired trip.

Example:  
**To get trip details for the OAuth consumer:**  
https://www.concursolutions.com/api/travel/trip/v1.1/{_tripId_}

**URI Source**: This URI is returned in the **id** element by the Get List of Itineraries  function.

 

 |
|  Query Parameters - Optional |
|

* **systemFormat=_{format}_**  
The **systemFormat** query parameter can be used to specify that the response is formatted for a different system. The supported value is **Tripit**. Refer to the [TripIt API documentation][5] for more details.

Example:  
**To get trip details for the OAuth consumer and receive a response in the TripIt format:**  
https://www.concursolutions.com/api/travel/trip/v1.1/{_tripId_}&systemFormat=Tripit

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET /api/travel/trip/v1.1/CNQR1234567890 HTTPS 1.1
    Host: [www.concursolutions.com][2]
    Authorization: OAuth {access token}
    ...

##  Get Itinerary Details Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|

[HTTP Status Codes][3]

 |   |
|  Content Body |   |
|  This request will return an **Itinerary** parent element with a subset of the following child elements:

|  Element |  Description |
|  BookedByFirstName |  The first name of the person who booked the trip. |   |
|  BookedByLastName |  The last name of the person who booked the trip. |
|  CancelComments |  The comments provided if the itinerary is cancelled. Maximum length: 256 characters. |
|  Comments |  Optional comments. Maximum length: 512 characters. |
|  DateBookedLocal |  The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date that this trip was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date that this trip was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  Description |  The trip description. Maximum length: 512 characters. |
|  EndDateLocal |  The end date of the trip in the ending location's timezone. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The end date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  id |  The complete resource URI for this trip, including the trip id. |
|  IsPersonal |  Whether the trip is a Business or Leisure trip. Format: true/false. |
|  ItinLocator |  Obsolete, supported for backward compatibility. |
|  StartDateLocal |  The start date of the trip in the starting location's timezone. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateUtc |  The start date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  TripId |  The unique identifier for the trip. |
|  TripName |  Name of the trip. Maximum length: 255 characters. |
|  Bookings |  This parent element will contain a **Booking** child element for each booking associated with this itinerary. Refer to the Booking Child Elements table. |

| ----- |
|  Booking Child Elements |
|  Element |  Description |
|  BookingOwner |  Indicates the tool that supplied the booking to Concur Travel. One of these:

ConcurTravel  
OpenBookingEmail  
AmadeusETravel  
ConcurConnectAPI  
OpenBookingSupplier  
TripIt

 |
|  BookingSource |  The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. This could be a GDS, OTA, Vendor Code for Supplier website or Supplier Direct Connect API. |
|  Source |  Obsolete, supported for backward compatibility. |
|  DateBookedLocal |  The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  RecordLocator |  Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source. |
|  Passengers |  This parent element has a **Passenger** child element for each included passenger. Refer to the Passenger Child Element table. |
|  Segments |  This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**. Refer to [Booking Object Elements][7] for more information about the Segment child elements. |

| ----- |
|  Passenger Child Elements |
|  Element |  Description |
|  NameFirst |  The passenger's first name. |
|  NameLast |  The passenger's last name. |
|  NameMiddle |  The passenger's middle name. |
|  NamePrefix |  The passenger's name prefix. |
|  NameRemark |  Additional details about the passenger's name. |
|  NameSuffix |  The passenger's name suffix. |
|  NameTitle |  The passenger's name title. |
|  TextName |  The user's full name. |
|  FrequentTravelerProgram |  The passenger's loyalty program information. |

 |

####  XML Example of Successful Response

    HTTP 1.1 200 OK
    Content-Type: application/xml
    ...

    <?xml version="1.0" encoding="utf-8"?>
    <Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
        <ItinLocator>CNQR1234567890</ItinLocator>
        <TripName>Trip from Dallas to Seattle</TripName>
        <TripId>CNQR1234567890</TripId>
        <CancelComments />
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <StartDateUtc>2013-12-21T07:25:00</StartDateUtc>
        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
        <EndDateUtc>2013-12-24T23:59:00</EndDateUtc>
        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
        <DateCreatedUtc>2012-07-24T19:15:52</DateCreatedUtc>
        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
        <Description />
        <IsPersonal>false</IsPersonal>
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
                <BookingOwner>ConcurTravel</BookingOwner>
                <BookingSource>ConcurCars</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <DateCreatedUtc>2013-11-10T13:01:00</DateCreatedUtc>
                <Source>OTA</Source>
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
                <BookingOwner>ConcurTravel</BookingOwner>
                <BookingSource>ConcurHotel</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <DateCreatedUtc>2013-11-10T13:01:00</DateCreatedUtc>
                <Source>OTA</Source>
            </Booking>
        </Bookings>
    </Itinerary>



[1]: https://developer.concur.com/itinerary-tmc-and-third-party-developers/itinerary-resource/itinerary-resource-get
[2]: http://www.concursolutions.com "www.concursolutions.com"
[3]: https://developer.concur.com/reference/http-codes
[4]: https://developer.concur.com/node/514#getitindetails
[5]: https://www.tripit.com/developer
[6]: https://developer.concur.com/node/550#faq
[7]: /node/546#bookingelements
