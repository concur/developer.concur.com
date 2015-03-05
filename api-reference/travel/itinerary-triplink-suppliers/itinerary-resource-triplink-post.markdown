---
title: Itinerary Resource 
layout: operation
---




If you are a TMC or third party developer, please review the alternate resource documentation [here][1].

This resource supports the following POST actions:

##  Post Itinerary Details Request

| ----- |
|  Description |
|  Creates a new trip or updates an existing trip. A new trip will be created if the trip dates span no existing trip and the request doesn't include a tripId. If a tripId is included in the uri it will update the specified trip. The full trip information is included in the update request, which replaces the existing trip. TripLink - Open Booking suppliers can only update trips or bookings that they created. |
|  Query Parameters - Required |  Supported Content Types |
|  None |   |
|  Query Parameters - Optional |   |
|

* **{_tripId_}**  
The identifier for the desired trip. Provided if the request is updating an existing trip.

Examples:  
**To post a new trip:**  
<https://www.concursolutions.com/api/travel/trip/v1.1>

**To update a trip:**  
https://www.concursolutions.com/api/travel/trip/v1.1?tripId={_tripId_}

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |
|  Content Body |   |
|

This function requires as its arguments an **Itinerary** parent element. The parent element contains the following child elements:

|  Element |  Description |
|  Required Elements |   | |
|  TripName |  Name of the trip. |
|  TripStatus |  The status of the trip. |
|  Optional Elements |   |
|  BookedByFirstName |  First name of the trip owner. |
|  BookedByLastName |  Last name of the trip owner. |
|  Bookings |  This parent element will contain a **Booking** child element for each booking associated with this itinerary. The **Booking** child elements are detailed in the Booking Elements table. |
|  CancelComments |  User supplied comments if the trip is cancelled. Maximum length: 256 characters |
|  Comments |  Comments on the itinerary. |
|  DateBookedLocal |  The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss |
|  Description |  The trip description. Maximum length: 512 characters. |
|  EndDateLocal |  The end date of the trip in the ending location's timezone. |
|  IsPersonal |  Whether the trip is a Business or Leisure trip. Format: true/false |
|  StartDateLocal |  The start date of the trip in the starting location's timezone. |

###  Booking Elements

| ----- |
|  Element |  Description |
|  Required Elements |   |
|  BookingSource |  The booking vendor. |
|  RecordLocator |  The unique identifier for the booking. Send the value for an existing booking to update an existing trip. This value is returned in the RecordLocator element by the [Post Booking Details][2] function. |
|  Optional Elements |   |
|  Segments |  This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, **Event**.

Refer to [Booking Object Elements][3] for more information about the child elements contained in the booking elements.

 |
|  Passengers |

This parent element contains a **Passenger** child element for each booked passenger. The **Passenger** child element contains the following child elements:

|  Required Elements |
|  NameFirst |  The first name of the passenger. |   |
|  NameLast |  The last name of the passenger. |
|  Optional Elements |   |
|  NameMiddle |  The middle name of the passenger. |
|  NamePrefix |  The name prefix of the passenger. |
|  NameRemark |  Additional details about the passenger's name. |
|  NameSuffix |  The name suffix of the passenger. |
|  NameTitle |  The title of the passenger. |
|  TextName |  The user's full name as entered in the booking tool if different from the name in the database. |
|  FrequentTravelerProgram |  Passenger's loyalty programs |

 |
|  DateBookedLocal |  The date, in the traveler's local time, that the booking was made. |

 |

####  XML Example Request

    POST /api/travel/trip/v1.1/ HTTPS 1.1
    Host: [www.concursolutions.com][4]
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

##  Post Itinerary Details Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][5] |   |
|  Content Body |   |
|  When the trip is created successfully, the request will return the full posted trip details with the following additional elements inside the **Itinerary** parent element:

|  Element |  Description |
|  id |  The URI containing the trip ID. |   |
|  ItinLocator |  The Itinerary Locator value (trip ID without the URL). The **ItinLocator** value is used when updating an existing trip. |
|  DateModifiedUtc |  The UTC formatted date that this booking was last modified. |
|  BookedVia |  The GDS the itinerary was booked in. |
|  DateBookedLocal |  The date, in the traveler's local time, that the booking was made. |

 |

####  XML Example of Successful Response

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

##  Post Itinerary Cancellation Request

| ----- |
|  Description |  Supported Content Types |
|  Cancels all segments in the supplied trip. TripLink - Open Booking suppliers can only cancel trips that they have created. If they did not create the trip, this request will cancel any segments in the supplied trip that they created. |   |
|  Query Parameters - Required |   |
|

* **cancel?{_tripId_}**  
The identifier for the desired trip and the cancel keyword.

Example:  
https://www.concursolutions.com/api/travel/trip/v1.1/cancel?tripId={_tripId_}

 |
|  Query Parameters - Optional |
|  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    POST /api/travel/trip/v1.1/cancel?tripId=CNQR1234567890 HTTPS 1.1
    Host: [www.concursolutions.com][4]
    Authorization: OAuth {access token}
    ...

##  Post Itinerary Cancellation Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][5] |   |
|  Content Body |   |
|  The request will return the full trip details for the cancelled trip. The trip will contain no segments, as those are all cancelled. The response includes the following additional elements inside the **Itinerary** parent element:

|  Element |  Description |
|  id |  The URI containing the trip ID. |   |
|  ItinLocator |  The Itinerary Locator value (trip ID without the URL). |
|  ClientLocator |  The identifier for the client. |
|  DateModifiedUtc |  The UTC formatted date that this booking was last modified. |
|  BookedVia |  The GDS the itinerary was booked in. |
|  DateBookedLocal |  The date, in the traveler's local time, that the booking was made. |

 |

####  XML Example of Successful Response

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
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
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
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <PassengerCount>1</PassengerCount>
            </Booking>
        </Bookings>
    </Itinerary>



[1]: https://developer.concur.com/itinerary-tmc-and-third-party-developers/itinerary-resource/itinerary-resource-post
[2]: https://developer.concur.com/itinerary-triplink-suppliers/booking-resource-triplink/booking-resource-triplink-open-booking-post
[3]: /node/546#bookingelements
[4]: http://www.concursolutions.com "www.concursolutions.com"
[5]: https://developer.concur.com/reference/http-codes
