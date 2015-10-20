---
title: Booking
layout: reference
---

## Description
The Booking resource represents booking segments in the Concur Travel system. TripLink suppliers use this resource to display a subset of the full booking fields.

## Version
Version 1.1

## URI
`/travel/booking/v1.1/{query_parameters}`

## Scope

In order to obtain itinerary data when making Itinerary API calls, the value of the OAuth scope parameter must be set to: `ITINER`


## Operations

* Create a new booking
* Update an existing booking
* Cancel a booking

## Create or update bookings

Creates a new booking or updates an existing booking. A new booking will be assigned to the specified trip, or if no trip is specified, the first itinerary that spans the booking dates. If no trip is specified and no itinerary exists that spans the booking dates, a new itinerary will be created.
This endpoint can be used to create/update bookings for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to create/update a booking on behalf of a user. The supplier or TMC must be registered with Concur, and must have an account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.


## Request
<samp>
    POST /api/travel/booking/v1.0?tripId=12345678 HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token} 
</samp>
### Request Parameters

#### Query Parameters - Optional

* **tripId={tripId}**
The unique identifier for the trip. Supplied in order to add a booking to an existing trip.
* **userid_type=login_id&userid_value={loginID}**
The Concur login ID of the user who owns the booking. Only provided when the booking owner is not the OAuth consumer. Can only be used when the OAuth consumer has the required user role.

Examples:

https://www.concursolutions.com/api/travel/booking/v1.1?tripId={tripId}

https://www.concursolutions.com/api/travel/booking/v1.1?userid_type=login_id&userid_value={loginID}


### Content type
application/xml

### Authorization header
Authorization header with OAuth token for valid Concur user. In order to create or update booking for anyone other than the OAuth consumer, the OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

### Request body root elements
The request contains a Booking parent element with the following child elements:

|  Required Element |  Description |
|-------------------|--------------|
|  BookingSource |  The supplier's name. |
|  RecordLocator |  Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source |


|  Optional Element |  Description |
|-------------------|--------------|
|  DateBookedLocal |  The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  FormOfPaymentName |  The name of the form of payment for the booking. |
|  FormOfPaymentType |  The type of the form of payment. |
|  TicketMailingAddress |  The mailing address for the booked ticket, if available. |
|  TicketPickupLocation |  The pickup location for the booked ticket, if available |
|  TicketPickupNumber |  The confirmation number to pick up the booked ticket, if available. |
|  AirfareQuotes |  List of stored airfare quotes for this booking. |
|  AirlineTickets |  List of Airline Tickets for this booking. |
|  Charges |  List of Charges for this booking. |
|  MiscChargeOrders |  List of Miscellaneous AirCharges for this booking. |
|  Passengers | The *Passengers* element contains child element for each booked passenger. The description of each child element can be seen in a subsequent table. |
|  PassPrograms |  List of Pass Programs for this booking. |
|  PhoneNumbers |  List of Phone numbers associated with this booking. |
|  RailPayments |  List of Rail payments associated with rail segments in this booking. |
|  Segments |  List of Segments in this booking. This parent element contains one or more **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, or **Event** parent elements for the booking. Refer to [Booking Object Elements][1] for more information about the child elements contained in the booking elements. |
|  Delivery |  The method this booking was delivered.  |
|  WaitListSegments |  The segments that the traveler is waitlisted for this booking. |
|  Warnings |  The warnings associated with the booking. |
|  WebAddresses |  List of web addresses such as emails, pickup urls, etc.. associated with this bookings |


### **Passengers** child elements:

|  Required Element |  Description   |
|-------------------|----------------|
|  NameFirst |  The first name of the passenger. |  
|  NameLast |  The last name of the passenger. |


|  Optional Element |  Description   |
|-------------------|----------------|
|  NameMiddle |  The middle name of the passenger. |
|  NamePrefix |  The name prefix of the passenger. |
|  NameRemark |  Additional details about the passenger's name. |
|  NameSuffix |  The name suffix of the passenger. |
|  NameTitle |  The title of the passenger. |
|  TextName |  The user's full name as entered in the booking tool if different from the name in the database. |
|  FrequentTravelerProgram |  Passenger's loyalty programs |


## Response
This function returns the full trip details, as documented in the Response of the [Get Itinerary Details][2] function.

If the end user updates an existing reservation which results in a new confirmation number, the old booking must be explicitly cancelled in addition to posting the new booking to Concur.  If the previous booking is not cancelled, the user will see both bookings in their Concur trip list.


## Examples

### Example 1: XML Example Request
```
    POST /api/travel/booking/v1.0?tripId=12345678 HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token} 
    ... 
```
```XML
    <Booking xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <Segments>
            <Car>
                <Vendor>AL</Vendor> 
                <VendorName>Alamo</VendorName> 
                <Status>HK</Status> 
                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal> 
                <EndDateLocal>2013-12-23T12:00:00</EndDateLocal> 
                <StartDateUtc>2013-12-21T20:00:00</StartDateUtc> 
                <EndDateUtc>2013-12-23T20:00:00</EndDateUtc> 
                <ConfirmationNumber>F16726AIUS</ConfirmationNumber> 
                <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
                <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
                <StartCityCode>SEA</StartCityCode> 
                <EndCityCode>SEA</EndCityCode> 
                <StartLocation>SEA</StartLocation> 
                <EndLocation>SEA</EndLocation> 
                <Class>E</Class> 
                <Body>C</Body> 
                <Transmission>A</Transmission> 
                <AirCondition>R</AirCondition> 
                <NumPersons>1</NumPersons> 
                <NumCars>1</NumCars> 
                <DiscountCode>4321</DiscountCode> 
                <DailyRate>35.0000</DailyRate> 
                <TotalRate>105.0000</TotalRate> 
                <RateType>D</RateType> 
                <Currency>USD</Currency> 
            </Car>
        </Segments>
        <RecordLocator>PANAMA50</RecordLocator> 
        <BookingSource>Alamo</BookingSource> 
        <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
        <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
        <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal> 
        <Passengers>
            <Passenger>
                <PassengerKey>0</PassengerKey> 
                <NameFirst>Chris</NameFirst> 
                <NameLast>Miller</NameLast> 
            </Passenger>
        </Passengers>
    </Booking>
```

### Example 2: XML Example of Successful Response

```XML
    <Itinerary xmlns="https://www.concursolutions.com/api/travel/trip/2010/06">
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
        <ItinLocator>CNQR1234567890</ItinLocator>
        <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
        <ItinSourceName>TravelSupplier</ItinSourceName>
        <TripName>Trip to Seattle</TripName>
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <EndDateLocal>2013-12-23T23:59:00</EndDateLocal>
        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
        <BookedVia>EveryGDS</BookedVia>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
        <Booking>
            <Segments>
                <Car>
                    <Vendor>AL</Vendor> 
                    <VendorName>Alamo</VendorName> 
                    <Status>HK</Status> 
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal> 
                    <EndDateLocal>2013-12-23T12:00:00</EndDateLocal> 
                    <StartDateUtc>2013-12-21T20:00:00</StartDateUtc> 
                    <EndDateUtc>2013-12-23T20:00:00</EndDateUtc> 
                    <ConfirmationNumber>F16726AIUS</ConfirmationNumber> 
                    <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
                    <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
                    <StartCityCode>SEA</StartCityCode> 
                    <EndCityCode>SEA</EndCityCode> 
                    <StartLocation>SEA</StartLocation> 
                    <EndLocation>SEA</EndLocation> 
                    <Class>E</Class> 
                    <Body>C</Body> 
                    <Transmission>A</Transmission> 
                    <AirCondition>R</AirCondition> 
                    <NumPersons>1</NumPersons> 
                    <NumCars>1</NumCars> 
                    <DiscountCode>4321</DiscountCode> 
                    <DailyRate>35.0000</DailyRate> 
                    <TotalRate>105.0000</TotalRate> 
                    <RateType>D</RateType> 
                    <Currency>USD</Currency> 
                </Car>
            </Segments>
            <RecordLocator>PANAMA50</RecordLocator> 
            <BookingSource>Alamo</BookingSource> 
            <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
            <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal> 
            <ItinSourceName>TravelSupplier</ItinSourceName> 
            <Passengers>
                <Passenger>
                    <PassengerKey>0</PassengerKey> 
                    <NameFirst>Chris</NameFirst> 
                    <NameLast>Miller</NameLast> 
                </Passenger>
            </Passengers>
        </Booking>
    </Itinerary>

```

# Post Booking Cancellation

## Description
Cancels an existing booking. By default, the OAuth consumer should be the owner of the booking. This endpoint can also be used to cancel bookings that the OAuth consumer does not own. This is most often done when a Travel Management Company needs to cancel bookings on behalf of a user. The TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

**NOTE:** 
* Booking records can only be updated by the booking source that created them. Concur verifies the source information before processing the request.


## Request

    POST /api/travel/booking/v1.1/cancel?bookingSource={FastTravel}&confirmationNumber={098765431}
    Host: www.concursolutions.com
    Authorization: OAuth {access token} 


### Request parameters

####Query Parameters - Required
* **cancel?bookingSource={Supplier}**

The cancel keyword and the unique identifier for the supplier, configured by Concur during the application review. The bookingSource must match the Supplier Name associated with the booking.

* **confirmationNumber={confnum}**

The confirmation number for the booking to cancel.

Example: 
https://www.concursolutions.com/api/travel/booking/v1.1/cancel?bookingSource={Supplier}&confirmationNumber={confnum}

####Query Parameters - Optional
* **userid_type=login_id&userid_value={loginID}**

The Concur login ID of the user who owns the booking. Only provided when the booking owner is not the OAuth consumer. Can only be used when the OAuth consumer has the required user role.

Example:
https://www.concursolutions.com/api/travel/booking/v1.1/cancel?bookingSource={Supplier}&confirmationNumber={confnum}&userid_type=login_id&userid_value={loginID}


### Content type
application/xml


### Authorization header
The authorization header must have an OAuth token for valid Concur user.
The OAuth consumer must be registered as a Supplier or TMC with Concur, and must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.


## Response
This function returns the full booking details, as specified in the Booking Object Elements section.
If the booking is not found, the function returns a HTTP 404 error and the following element:

**Status**: This element contains the value: NotFound.


## Examples

### Examples 1: XML Example Request

    POST /api/travel/booking/v1.1/cancel?bookingSource={FastTravel}&confirmationNumber={098765431}
    Host: www.concursolutions.com
    Authorization: OAuth {access token} 


### Examples 2: XML Example of Successful Response

    <Car>
        <Vendor>ZE</Vendor>
        <Status>HK</Status>
        <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
        <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
        <TimeZoneId xsi:nil="true"/>
        <StartDateUtc>2013-12-21T20:00:00</StartDateUtc>
        <EndDateUtc>2013-12-24T20:00:00</EndDateUtc>
        <ConfirmationNumber>0987654321</ConfirmationNumber>
        <CancellationNumber>1029384756</CancellationNumber>
        <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
        <DateCancelledUtc>2012-07-25T14:21:35</DateCancelledUtc>
        <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc>
        <UpgradedDateTime xsi:nil="true"/>
        <IsUpgradeAllowed xsi:nil="true"/>
        <FrequentTravelerId/>
        <StartCityCode>SEA</StartCityCode>
        <EndCityCode>SEA</EndCityCode>
        <StartLocation>SEA</StartLocation>
        <EndLocation>SEA</EndLocation>
        <Class>E</Class>
        <Body>C</Body>
        <Transmission>M</Transmission>
        <AirCondition>R</AirCondition>
        <PhoneNumber/>
        <NumPersons xsi:nil="true"/>
        <NumCars>1</NumCars>
        <DiscountCode>346660</DiscountCode>
        <Charges>
            <Fixed>
                <Description>Dropoff Fee</Description>
                <Currency>USD</Currency>
                <Amount>0.0000</Amount>
                <StartDateLocal xsi:nil="true"/>
                <IsPaid xsi:nil="true"/>
                <SemanticsCode>DROPOFFFEE</SemanticsCode>
                <SemanticsVendorType>C</SemanticsVendorType>
            </Fixed>
            <RateWithAllowance>
                <Currency>USD</Currency>
                <Amount>44.0000</Amount>
                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                <IsPaid xsi:nil="true"/>
                <SemanticsCode>DAYS</SemanticsCode>
                <SemanticsVendorType>C</SemanticsVendorType>
                <PerUnit>DAY</PerUnit>
                <NumUnits>1.0000</NumUnits>
                <AllowanceUnit/>
                <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                <AllowanceAmount>0.2400</AllowanceAmount>
                <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
            </RateWithAllowance>
        </Charges>
        <Remarks/>
        <PerDiemLocation/>
    </Car>

## See Also

[Trip resource][2]

[1]: http://concur.github.io/developer.concur.com/api-reference/authentication/web-flow
[2]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/trip/trip-resource
