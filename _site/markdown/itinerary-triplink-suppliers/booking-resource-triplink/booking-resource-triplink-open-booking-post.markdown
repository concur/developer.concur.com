[Source](https://developer.concur.com/itinerary-triplink-suppliers/booking-resource-triplink/booking-resource-triplink-open-booking-post "Permalink to Booking Resource: TripLink - Open Booking: POST")

# Booking Resource: TripLink - Open Booking: POST

NOTE: If you are a TMC or third party developer, please review the alternate resource documentation [here][1].

This resource supports the following POST actions:

##  Post Booking Details Request

| ----- |
|  Description |
|  Creates a new booking or updates an existing booking. A new booking will be assigned to the specified trip, or if no trip is specified, the first itinerary that spans the booking dates. If no trip is specified and no itinerary exists that spans the booking dates, a new itinerary will be created. TripLink - Open Booking suppliers can only update bookings that they created. |
|  Query Parameters - Required |  Supported Content Types |
|  None |  application/xml |
|  Query Parameters - Optional |   |
|

* **tripId={_tripId_}**  
The unique identifier for the trip. Supplied in order to add a booking to an existing trip.

Examples:  
https://www.concursolutions.com/api/travel/booking/v1.1?tripId={_tripId_}

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |
|  Content Body |   |
|

The request contains a **Booking** parent element with the following child elements:

|  Core Elements - Required |
|  Element |  Description |
|  BookingSource |  The supplier's name. |
|  ItinSourceName |  The itinerary source. Format: TravelSupplier |
|  RecordLocator |  Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source |
|  Core Elements - Optional |   |
|  Element |  Description |
|  DateBookedLocal |  The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Passengers |  This parent element contains a **Passenger** child element for each booked passenger. The **Passenger** child element contains the following child elements:

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
|  Segments |  List of Segments in this booking. This parent element contains one or more **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, or **Event** parent elements for the booking. Refer to [Booking Object Elements][2] for more information about the child elements contained in the booking elements. |

 |

####  XML Example Request

    POST /api/travel/booking/v1.0?tripId=12345678 HTTPS 1.1
    Host: [www.concursolutions.com][3]
    Authorization: OAuth {access token}
    ...

    <Booking xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <Segments>
            <Car>
                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                <EndDateLocal>2013-12-23T12:00:00</EndDateLocal>
                <StartDateUtc>2013-12-21T20:00:00</StartDateUtc>
                <EndDateUtc>2013-12-23T20:00:00</EndDateUtc>
                <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
                <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc>
                <StartCityCode>SEA</StartCityCode>
                <EndCityCode>SEA</EndCityCode>
            </Car>
        </Segments>
        <RecordLocator>PANAMA50</RecordLocator>
        <BookingSource>Alamo</BookingSource>
        <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
        <ItinSourceName>TravelSupplier</ItinSourceName>
        <Passengers>
            <Passenger>
                <NameFirst>Chris</NameFirst>
                <NameLast>Miller</NameLast>
            </Passenger>
        </Passengers>
    </Booking>

##  Post Booking Details Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][4] |   |
|  Content Body |   |
|  This function returns the full trip details, as documented in the **Response** of the [Get Itinerary Details][5] function.

If the end user updates an existing reservation which results in a new confirmation number, the old booking must be explicitly cancelled in addition to posting the new booking to Concur.  If the previous booking is not cancelled, the user will see both bookings in their Concur trip list.

 |

####  XML Example of Successful Response

    <Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
        <ItinLocator>CNQR1234567890</ItinLocator>
        <TripName>Trip to Seattle</TripName>
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <EndDateLocal>2013-12-23T23:59:00</EndDateLocal>
        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
        <Booking>
            <Segments>
                <Car>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-23T12:00:00</EndDateLocal>
                    <StartDateUtc>2013-12-21T20:00:00</StartDateUtc>
                    <EndDateUtc>2013-12-23T20:00:00</EndDateUtc>
                    <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
                    <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                </Car>
            </Segments>
            <RecordLocator>PANAMA50</RecordLocator>
            <BookingSource>Alamo</BookingSource>
            <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
            <ItinSourceName>TravelSupplier</ItinSourceName>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
        </Booking>
    </Itinerary>

##  Post Booking Cancellation Request

| ----- |
|  Description |  Supported Content Types |
|  Cancels an existing booking, owned by the OAuth consumer.

**NOTE**:

* Booking records can only be updated by the booking source that created them. Concur verifies the source information before processing the request.
 |   |
|  Query Parameters - Required |   |
|

* **cancel?bookingSource={_Supplier_}**  
The cancel keyword and the unique identifier for the supplier, configured by Concur during the application review. The bookingSource must match the Supplier Name associated with the booking.
* **confirmationNumber=****{_confnum_}**  
The confirmation number for the booking to cancel.

Example:  
https://www.concursolutions.com/api/travel/booking/v1.1/cancel?bookingSource={_Supplier_}&confirmationNumber={_confnum_}

 |
|  Query Parameters - Optional |
|  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    POST /api/travel/booking/v1.1/cancel?bookingSource={FastTravel}&confirmationNumber={0987654321}
    Host: [www.concursolutions.com][3]
    Authorization: OAuth {access token}
    ...

##  Post Booking Cancellation Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][4] |   |
|  Content Body |   |
|  This function returns the full booking details, as specified in [Booking Object Elements][6].

If the booking is not found, the function returns a HTTP 404 error and the following element:

**Status**: This element contains the value: NotFound.

 |

####  XML Example of Successful Response

    <Booking xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <Segments>
            <Car>
                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                <EndDateLocal>2013-12-23T12:00:00</EndDateLocal>
                <StartDateUtc>2013-12-21T20:00:00</StartDateUtc>
                <EndDateUtc>2013-12-23T20:00:00</EndDateUtc>
                <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
                <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc>
                <StartCityCode>SEA</StartCityCode>
                <EndCityCode>SEA</EndCityCode>
            </Car>
        </Segments>
        <RecordLocator>11292837123</RecordLocator>
        <BookingSource>FastTravel</BookingSource>
        <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
        <Passengers>
            <Passenger>
                <NameFirst>Chris</NameFirst>
                <NameLast>Miller</NameLast>
            </Passenger>
        </Passengers>
    </Booking>

Last Modified: 10/31/2013 1:45 PM PDT

[1]: https://developer.concur.com/node/512
[2]: /node/510#bookingelements
[3]: http://www.concursolutions.com "www.concursolutions.com"
[4]: https://developer.concur.com/node/205
[5]: https://developer.concur.com/node/547#getitindetails
[6]: /node/546#bookingelements
