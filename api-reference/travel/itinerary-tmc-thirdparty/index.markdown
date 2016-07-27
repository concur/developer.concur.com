---
title: Itinerary Web Service (TMC/Third-Party)
layout: reference
---


# Itinerary Web Service (TMC & Third-Party)


The Concur Itinerary Web Service allows Travel Management Companies (TMC) and third-party developers to view and create travel related events in the Concur Travel system. TMCs can post bookings for any travel type. This web service can also be used by third party developers to request trip information for Concur users. This web service is designed for use by TMCs or third party developers. The public Itinerary XSD can be found [here.](/api-reference/travel/itinerary/ItinServices_Public_0.xsd)  In addition, the GetList XSD can be found [here.](/api-reference/travel/itinerary/GetListOfItinerariesImport_v1_1.xsd)


* [GET List of Itineraries](#getlist)
* [GET Itinerary Details](#getdetails)
* [POST Itinerary Details](#postdetails)
* [POST Itinerary Cancellation](#postcancel)
* [POST Booking Details](#post)
* [POST Booking Cancellation](#cancel)
* [Booking Object Elements](#objects)


##  <a name="getlist"></a>GET List of Itineraries


Retrieves trip summaries for the traveler specified in the OAuth token. This endpoint can also be used to get details for trips for a different user or the whole company. This is most often done when a Travel Management Company needs to get a list of trips on behalf of a user or company. During the request, a user with one of the following user roles from the user's company must authenticate through OAuth: Web Services Administrator for Professional, or Can Administer for Standard.

The response for this function can be divided into pages for easier processing.


### Parameters

Name |  Description
-----| ------------			
`tripId`	|	The trip id
`startDate={_date_}` |The URL-encoded start date (in Coordinated Universal Time, aka UTC) for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the start date is set to today's date - 30 days. The request will only return trips that are ongoing during the provided dates, either starting on the date, or starting before the date and ongoing during the provided date.
`endDate****={_date_}` | The URL-encoded UTC end date for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the end date is set to today's date + 12 months. The request will only return trips that are ongoing during the provided dates, either ending on the date, or starting before the date and ongoing during the provided date.
`createdAfterDate****={_date_}` | The URL-encoded UTC date for when the trip was created. The query string will return trips created on or after this date. Used with the createdbeforedate for finding trips created during a date range. Format: YYYY-MM-DD.
`createdBeforeDate****={_date_}` | The URL-encoded UTC date for when the trip was created. The query string will return trips created on or before this date. Used with the createdafterdate for finding trips created during a date range. Format: YYYY-MM-DD.
`lastModifiedDate****={_date_}` | The last modified UTC date of the trips and any their associated bookings. This query string will return only the trips where the trip or any of its associated bookings have a last modified date that is greater or equal to the supplied time. The provided date/time can be anytime between now and the first date of trip creation in the database. The format is either the date or the date and time combined.
`bookingType={_type_}` | The trip includes at least one booking of this type. Format: Air, Car, Dining, Hotel, Parking, Rail, or Ride
`userid_type=login&userid_value=_{loginID}_` | The loginID is the user's Concur login ID. The userid_value of ALL can be sent to get trip summaries for all users at the company. The userid_type and userid_value parameters can only be used if the OAuth consumer has one of the user roles listed above.
`includeMetadata=true&ItemsPerPage={_number_}&Page={_number_}` |  The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters will cause the response to be divided into pages. The response will be wrapped in a **ConcurResponse** parent element, with both the response details and the paging metadata included. The details of the response are here. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1.
`includeVirtualTrip=_1_` |  Virtual trips are segments booked offline through the Travel Request product. Set the includeVirtualTrip query parameter to 1 to include those trips in the list.
`includeCanceledTrips=_{true/false}_` | The includeCanceledTrips query parameter will cause the request to also return trips with a status of Canceled. When this query parameter is set to **true**, the response will include the **TripStatus** element.

### Examples:  
**To get itinerary list for the entire company (OAuth consumer must have Admin user role):**  
https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}&userid_type=login&userid_value=ALL

**To get itinerary list for a single user (the OAuth consumer):**  
https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}

**To get itinerary list for a single user (other than the OAuth consumer):**  
https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}&userid_type=login_id&userid_value={_loginID_}


####  XML Example Request by Start and End Date

    GET /api/travel/trip/v1.1/?startDate=2012%2F02%2F01&endDate=2013%2F12%2F31 HTTP 1.1
    Host: [www.concursolutions.com][1]
    Authorization: OAuth {access token}
    ...

####  XML Example Request by Booking Type and Start Date

    GET /api/travel/trip/v1.1/?startDate=2012%2F02%2F01&bookingType=Air HTTP 1.1
    Host: [www.concursolutions.com][1]
    Authorization: OAuth {access token}
    ...

####  XML Example Request by Created Date

    GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01 HTTP 1.1
    Host: [www.concursolutions.com][1]
    Authorization: OAuth {access token}

####  XML Example Request with Paging

    GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&includeMetadata=true&ItemsPerPage=2&Page=1 HTTP 1.1
    Host: [www.concursolutions.com][1]
    Authorization: OAuth {access token}


##  Get List of Itineraries Response

This request will return an **ItineraryInfoList** parent element with an **ItineraryInfo** child element for each trip summary for the specified traveler. Each **ItineraryInfo** element has the following child elements:


Name |  Description
-----| ------------		
`TripId` |  Encrypted trip identifier value.
`TripName` |  Name of the trip 
`TripStatus` |  The status of the trip. This element only appears if the **includeCanceledTrips** query parameter is used in the request.
`StartDateLocal` |  The start date of the trip in the starting location's timezone. Format: YYYY-MM-DDThh:mm:ss.
`EndDateLocal` |  The end date of the trip in the ending location's timezone. Format: YYYY-MM-DDThh:mm:ss. 
`UserLoginId` |  The user's login to Concur. Only appears when the OAuth consumer has one of the specified admin roles. `
`DateModifiedUtc` |  The UTC date that this trip was last modified. Format: YYYY-MM-DDThh:mm:ss.`
`id` |  Trip ID URI with encrypted ID.

## Paging

If the includeMetadata and ItemsPerPage query parameters are included in the request, the response will include a **ConnectResponse** parent element with the following elements:

Name |  Description
-----| ------------		
`Data` |  This parent element contains the response as detailed above.
`Metadata` |  This parent element contains the [Paging](#pagingchild) elements.

### <a name="pagingchild"></a>Paging Elements
The parent element of the paging information. Contains the following child elements:

Name |  Description
-----| ------------	
`TotalPages` | The total number of pages the query returned.
`TotalItems` | The total number of itineraries the query returned.  
`CurrentPage` | The page number for the set of results in the current response.  
`ItemsPerPage` | The number of items set to display per page.  
`PreviousPageURL` | The URI to the previous page of results. This element will be empty when there are no previous pages.  
`NextPageURL` | The URI to the next set of results. This element will be empty when there are no next pages.



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



##  <a name="getdetails"></a>GET Itinerary Details

Retrieves the details for the specified trip. By default, the OAuth consumer should be the owner of the trip. This endpoint can also be used to get details for trips that the OAuth consumer does not own. This is most often done when a Travel Management Company needs to get trip details on behalf of a user. The TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.  

The returned elements will vary based on the following conditions:

* Some elements, such as **AirlineTickets** or **RailPayments**, will only appear for bookings of the appropriate type.
* Amount values, such as **Rate** or **Tax**, will only appear if the requestor is the source of the booking. All other suppliers will not receive the amount elements associated with the bookings.
* Some elements, such as **SabreDKNumber**, will only appear if the booking was created by the relevant GDS.
* Some elements are vendor-specific and will only appear in responses for the associated vendor.

This documentation contains the full set of possible elements that can be returned. No itinerary can contain all of the possible elements, so the response will always be a subset of the possible returned values.  

### Parameters

Name |  Description
-----| ------------		
`{_tripId_}` | **Required.** The identifier for the desired trip.
`userid_type=login&userid_value=_{loginID}_` | The loginID is the user's Concur login ID. The userid_value of ALL can be sent to get trip summaries for all users at the company. The userid_type and userid_value parameters can only be used if the OAuth consumer has one of the user roles listed above.
`systemFormat=_{format}_` | The **systemFormat** query parameter can be used to specify that the response is formatted for a different system. The supported value is **Tripit**.


##  Get Itinerary Details Response
This request will return an **Itinerary** parent element with a subset of the following child elements:

### Parameters

Name |  Description
-----| ------------	
`BookedByFirstName` |  The first name of the person who booked the trip.
`BookedByLastName` |  The last name of the person who booked the trip.
`BookedVia` |  The booking method for the trip.
`CancelComments` |  The comments provided if the itinerary is cancelled. Maximum length: 256 characters.
`Comments` |  Optional comments. Maximum length: 512 characters.
`DateBookedLocal` |  The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss
`DateCreatedUtc` |  The date that this trip was created, in UTC. Format: YYYY-MM-DDThh:mm:ss
`DateModifiedUtc` |  The date that this trip was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss 
`Description` |  The trip description. Maximum length: 512 characters.
`EndDateLocal` |  The end date of the trip in the ending location's timezone. Format: YYYY-MM-DDThh:mm:ss
`EndDateUtc` |  The end date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss 
`IsPersonal` |  Whether the trip is a Business or Leisure trip. Format: true/false. |
`ProjectName` |  The associated project name for the trip. Maximum length: 255 characters. |
`StartDateLocal` |  The start date of the trip in the starting location's timezone. Format: YYYY-MM-DDThh:mm:ss |
`StartDateUtc` |  The start date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`TripName` |  Name of the trip. Maximum length: 255 characters. |
`Bookings` |  This parent element will contain a **Booking** child element for each booking associated with this itinerary. Refer to the Booking Child Elements table. |
`RuleViolations` |  The list of rule violations associated with the itinerary. This parent element contains a **RuleViolation** child element for each associated rule violation. Refer to the [Public Itinerary XSD](/api-reference/travel/itinerary/ItinServices_Public_0.xsd) for more information. |
`Status` |  The status of the itinerary. One of the following: 0- Confirmed; 1- Ticketed by agent; 2- Canceled
 |

### Booking Child Elements

Name |  Description
-----| ------------	
`BookingSource` |  The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. |
`DateBookedLocal` |  The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
`DateCreatedUtc` |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`DateModifiedUtc` |  The date the booking was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`FormOfPaymentName` |  The name of the form of payment for the booking. |
`FormOfPaymentType` |  The type of the form of payment. |
`PassengerCount` |  The number of passengers included in the booking. |
`RecordLocator` |  Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source. |
`RetrievedDateUtc` |  The date the booking was last accessed, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`TicketMailingAddress` |  The mailing address for the booked ticket, if any. |
`TicketPickupLocation` |  The pickup location for the booked ticket, if any. |
`TicketPickupNumber` |  The confirmation number to pick up the booked ticket, if any. |
`AirfareQuotes` |  List of stored airfare quotes. This parent element has a **Quote** child element for each airfare quote. The **Quote** parent element contains [Airfare Quotes Child Elements](#afchild)
`AirlineTickets` |  List of Airline Tickets. This parent element contains [Airline Tickets Child Elements](#alchild)
`Charges` |  The charges for the booking. 
`MiscChargeOrders` |  This parent element has a **MiscellaneousChargeOrder** child element for each included miscellaneous charge. The **MiscellaneousChargeOrder** parent element cotains [Miscellaneous Charge Order Child Elements](#mcchild)
`Passengers` |  This parent element has a **Passenger** child element for each included passenger. Refer to the [Passenger Child Elements](#pchild)
`PassPrograms` |  This parent element has [**Pass Program** child elements](#ppchild) for each pass program associated with the booking.
`PhoneNumbers` |  This parent element has [**Phone Number Data** child elements](#phone) for each phone number associated with the booking. 
`RailPayments` |  This parent element has [Rail Payment Child Elements](#rail)
`Segments` |  This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**.
`Delivery` |  The method used to deliver this booking. Refer to the [Delivery Method Child Elements](#delivery)
`WaitListSegments` |  Information will appear in this element if the segment is on a waiting list. |
`Warnings` |  The warnings associated with the booking.
`WebAddresses` |  List of web addresses. This parent element includes [**Web Address Data** child elements](#Web) for each associated web address




### <a name="afchild"></a>Airfare Quotes Child Elements

Name |  Description
-----| ------------	
`BaseFare` |  The base fare of the booking quote. |
`BaseFareCurrency` |  The [3-letter ISO 4217 currency code][5] for the booking quote. | 
`BaseFareNuc` |  The base fare in [NUC][6]. |
`BaseFareNucCurrency` |  The [3-letter ISO 4217 currency code][5] for the base fare in NUC. |
`DateCreatedUtc` |  The date the quote was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`DateModifiedUtc` |  The date the quote was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`Endorsements` |  Notes from the airline if it endorses the ticket as acceptable on a different airline. |
`IssueByDate` |  The date the quote must be issued by. Format: YYYY-MM-DDThh:mm:ss |
`TotalFare` |  The total price of the booking. |
`TotalFareCurrency` |  The [3-letter ISO 4217 currency code][5] for the total fare. |
`AirlineCharges` |  The charges applied by the airline. This parent element contains a **Fixed** child element for each fixed charge from the airline.
`Taxes` |  The taxed applied to this airline ticket.


### <a name="alchild"></a>Airline Tickets Child Elements

Name |  Description
-----| ------------	
`ManualAirlineTicket` |  The manual airline ticket for the booking. 
`AirlineTicket |  The airline ticket for the booking. 
`AirlineAdjustment` |  Any adjustment made to the booking. 


### <a name="mcchild"></a>Miscellaneous Charge Order Child Elements

Name |  Description
-----| ------------	
`DateCreatedUtc` |  The date the charge order was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`DateModifiedUtc` |  The date the charge order was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
`IssueDate` |  The date the charge order was issued. Format: YYYY-MM-DDThh:mm:ss |
`PlatingCarrierNumericCode` |  Part of the ticket number that indicates the airline code. This is a three digit number. For example: 001=American, 005=Continental, 006=Delta, 012=Northwest |
`PlatingControlNumber` |  Part of the ticket number that indicates the ticket control number. Format: Ten digit number. |
`TotalAmount` |  The total amount of charge orders for the ticket. |
`TotalAmountCurrency` |  The [3-letter ISO 4217 currency code][5] for the total charge order amount. |



### <a name="ppchild"></a>Pass Programs Child Elements

Name |  Description
-----| ------------	
`Amount` |  The program amount. |
`Name` |  The program name. | 
`Type` |  The program type. |
`UserFirstName` |  The first name of the passenger. |
`UserLastName` |  The last name of the passenger. |


### <a name="phone"></a>Phone Number Data Child Elements

Name |  Description
-----| ------------	
`PassengerRPH` |  Indicates the passenger to whom this phone number belongs. |
`PhoneNumber` |  The passenger's phone number. |
`Type` |  The type of phone number. |
`Description` |  The description for the phone number. |


### <a name="rail"></a>Rail Payments Child Elements

Name |  Description
-----| ------------	
`RailPayment` |  The payment information for a rail booking. 
`RailAdjustment` |  The amount adjusted for a rail booking. Refer to the [Public Itinerary XSD](/api-reference/travel/itinerary/ItinServices_Public_0.xsd) for more information.



### <a name="delivery"></a>Delivery Method Child Elements

Name |  Description
-----| ------------	
`LocationAdditionalDetails` |  Additional information about the delivery location. |
`AddressLine1` |  The delivery address.
`AddressLine2` |  The delivery address. |
`City` |  The delivery address. |
`Country` |  The delivery address. |
`LocationDesc` |  Description of the delivery location. |
`Email` |  The delivery email contact. |
`Latitude` |  The delivery address. |
`Longitude` |  The delivery address. |
`LocationName` |  The name of the delivery location. |
`PhoneNumber` |  The phone number of the delivery contact. |
`ReferenceNumber` |  The reference number for the delivery. |
`State` |  The delivery address. |
`Type` |  The type of delivery address. |
`Zip` |  The delivery address. |




### <a name="web"></a>Web Address Data Child Elements

Name |  Description
-----| ------------	
`PassengerRPH` |  Indicates the passenger to whom this web address belongs. |
`WebAddress` |  Web address. Format: email address or URL. Maximum length: 250 characters. |   
`Format` |  Format of the web address. Format: E=Email, U=URL, I=IM |
`Type` |  Type code for web address. Format: TKT, RES, BUS |
`Description` |  Free text describing the web address. Maximum length: 50 characters. |


### <a name="pchild"></a>Passenger Child Elements

Name |  Description
-----| ------------	
`FirstNameNumber` |  The number of characters in the passenger's first name. |
`LastNameNumber` |  The number of characters in the passenger's last name. |
`NameFirst` |  The passenger's first name. |
`NameLast` |  The passenger's last name. |
`NameMiddle` |  The passenger's middle name. |
`NamePrefix` |  The passenger's name prefix. |
`NameRemark` |  Additional details about the passenger's name. |
`NameSuffix` |  The passenger's name suffix. |
`NameTitle` |  The passenger's name title. |
`TextName` |  The user's full name. |
`FrequentTravelerProgram` |  The passenger's loyalty program identifier. This parent element contains the `FrequentFlyer` and `RailProgram` child elements.
`FrequentFlyer` |  The passenger's frequent flyer program details. This parent element has [Frequent Flyer Child Elements](#ffchild)
`RailProgram` |  The passenger's rail loyalty program details. This parent element has [Rail Program Child Elements](#rpchild)


### <a name="ffchild"></a>Frequent Flyer Child Elements

Name |  Description
-----| ------------	
`AirlineVendor` |  The vendor of the frequent flyer program. 
`Description` |  The program description. 
`DiscountProgramExpirationDate` |  The date the discount program enrollment expires. Format: YYYY-MM-DDThh:mm:ss 
`DiscountProgramType` |  The type of discount program. 
`FrequentFlyerNumber` |  The passenger's identifier for the program. 
`ProgramVendor` |  The program vendor. 
`Status` |  The passenger's program status. 
`StatusExpirationDate` |  The expiration date for the passenger's program status. 


### <a name="rpchild"></a>Rail Program Child Elements

Name |  Description
-----| ------------	
`Description` |  Description of the discount program. 
`DiscountProgramExpirationDate` |  The date the discount program enrollment expires. Format: YYYY-MM-DDThh:mm:ss 
`DiscountProgramType` |  The type of discount program. 
`ProgramNumber` |  The passenger's identifier for the program. 
`ProgramVendor` |  The program vendor. 
`Status` |  The passenger's program status. 
`StatusExpirationDate` |  The expiration date for the passenger's program status.


####  XML Example of Successful Response

    HTTP 1.1 200 OK
    Content-Type: application/xml
    ...

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

####  XML Response in TripIt Format

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



## <a name="postdetails"></a>POST Itinerary Details

### Description 

Creates a new trip or updates an existing trip. A new trip will be created if the trip dates span no existing trip and the request doesn't include a tripId. If a tripId is included in the uri it will update the specified trip. The full trip information is included in the update request, which replaces the existing trip.

This endpoint can be used to create trips for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to create a trip on behalf of a user. The supplier or TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

###  Agency Proposals

Travel Management Companies for Concur clients with the Agency Proposal feature of Travel Request can send proposed itineraries using the Itinerary web service. The TMC will indicate that the itinerary is a proposal using the **TripStatus** element. The request must also include the **CustomAttributes** element and its child elements.

| Query Parameters - Required | Supported Content Types |
| --------------------------- | ----------------------- |
| None | application/xml |

### Query Parameters - Optional

* **{_tripId_}**  
The identifier for the desired trip. Provided if the request is updating an existing trip.
* **userid_type=login_id&userid_value={_loginID_}**  
The Concur loginID of the user that owns the trip. Can be used when creating a new trip or updating an existing trip. The userid_type and userid_value parameters can only be used if the OAuth consumer has the user role listed above.

Examples:  
****To post a new trip for the OAuth consumer:****  
https://www.concursolutions.com/api/travel/trip/v1.1

****To update a trip for the OAuth consumer:****  
https://www.concursolutions.com/api/travel/trip/v1.1?tripId={_tripId_}

****To post a trip for a user other than the OAuth consumer:****  
https://www.concursolutions.com/api/travel/trip/v1.1?userid_type=login_id&userid_value={_loginID_}

| Request Headers - Required | Request Headers - Optional |
| -------------------------- | -------------------------- |
| Authorization header with OAuth token for valid Concur user. To post trips for users other than the OAuth consumer, the OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |

### Content Body
This function requires as its arguments an **Itinerary** parent element. The parent element contains the following child elements:

### Required Elements

| Element | Description |
| ------- | ----------- |
|  TripName |  Name of the trip. Maximum length: 255 characters. |
|  TripStatus |  The status of the itinerary. One of the following:<br>0 - Confirmed<br>1 - Ticketed<br>2 - Canceled<br>6 - Proposal<br>7 - Booked Proposal |



### Required Elements for Agency Proposal

| Element | Description |
| ------- | ----------- |
| ClientLocator | The unique identifier for the batch of proposals. All proposals in the batch should have the same value. |
| TravelRequestId | The identifier for the travel request that the proposal is associated with. |
| CustomAttributes | This parent element will contain **CustomAttributes** child element. The **CustomAttributes** child elements are detailed in the CustomAttributes Elements table.


### CustomAttributes Elements required


|DataType|Name| Data Supported Values|Comment|
|:--|:------------:|:-------------:|:---------------------|
|**Numeric**|**ProposalBatchSize**|1 to 3|The number of proposals in the batch. Maximum: 3
|**Numeric**|**ProposalSequenceIndex**|1 to 3|The index of the proposal in the batch of proposals.|
|**Text**|**AutoSelectProposal**|True, False|If true, then the proposal will be selected accordingly and replace the segments previously entered by the user. <br> If False, then the proposal will be up to the user to decide which proposal s/he wants to manually select.|
|**Text**|**TicketIssued**|True, False| Are the tickets for this proposal issued or not.|
|Text |**DisplayOnItinerary**| True |The value for this element has to be 'True'.| 
|N/A |**DisplayTitle**| N/A |This element should be empty.| 
|N/A |**ExternalId**| N/A | This element should be empty.|


###  Optional Elements

| Element | Description |
| ------- | ----------- |
| BookedByFirstName | First name of the trip owner. |
| BookedByLastName | Last name of the trip owner. |
| Bookings | This parent element will contain a **Booking** child element for each booking associated with this itinerary. The **Booking** child elements are detailed in the Booking Elements table. |
|  CancelComments |  User supplied comments if the trip is cancelled. 256 Characters Maximum |
|  Comments |  Comments on the itinerary. 512 Characters Maximum |
|  DateBookedLocal |  The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss |
|  Description |  The trip description. Maximum length: 512 characters. |
|  IsPersonal |  Whether the trip is a Business or Leisure trip. |
|  ProjectName |  The associated project name for the trip. Maximum length: 255 characters. |
|  RuleViolations |  The list of rule violations associated with the itinerary. This parent element contains a <RuleViolation> child element for each associated rule violation. |

### Booking Elements - Required

| Element | Description |
| ------- | ----------- |
|  BookingSource |  The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. This could be a GDS, OTA, Vendor code for Supplier website, or Supplier Direct Connect API. |
|  RecordLocator |  The unique identifier for the booking. Send the value for an existing booking to update an existing trip. |

### Booking Elements - Optional

| Element | Description |
| ------- | ----------- |
|  BookingOwner |  Indicates the tool that supplied the booking to Concur Travel. |
|  Source |  Obsolete, supported for backward compatibility. |
|  DateBookedLocal |  The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  FormOfPaymentName |  The name of the form of payment for the booking. |
|  FormOfPaymentType |  The type of the form of payment. |
|  TicketMailingAddress |  The mailing address for the booked ticket, if available. |
|  TicketPickupLocation |  The pickup location for the booked ticket, if available. |
|  TicketPickupNumber |  The confirmation number for the booked ticket, if available. |
|  AirfareQuotes |  List of stored airfare quotes for this booking. |
|  Airline Tickets |  List of airline tickets for this booking. |
|  Charges |  List of charges for this booking. |
|  MiscChargeOrders |  List of Miscellaneous AirCharges for this booking. |
|  Passengers |  This parent element contains a **Passenger** child element for each booked passenger. The **Passenger** child element contains the following child elements:<br>NameFirst -  The first name of the passenger.<br>NameLast (optional) -  The last name of the passenger.<br>NameMiddle -  The middle name of the passenger.<br>NamePrefix -  The passenger's name prefix.<br>NameRemark -  Additional details about the passenger's name.<br>NameSuffix -  The passenger's name suffix.<br>NameTitle -  The passenger's name title.<br>TextName - The user's full name as entered in the booking tool if different from the name in the database.<br>FrequentTravelerProgram -  Passenger's loyalty programs.|
|  PassPrograms |  List of Pass Programs for this booking. |
|  PhoneNumbers |  List of Phone numbers associated with this booking. |
|  RailPayments |  List of Rail payments associated with rail segments in this booking. |
|  Segments |  This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, **Event**.|
|  Delivery |  The method this booking was delivered.  |
|  WaitListSegments |  The segments that the traveler is waitlisted for this booking. |
|  Warning |  The warnings associated with the booking. |
|  WebAddresses |  List of web addresses such as emails, pickup urls, etc.. associated with this booking. |

###  XML Example Request

    POST /api/travel/trip/v1.1?userid_type=login_id&userid_value=cm@example.com HTTPS 1.1
    Host: [www.concursolutions.com][3]
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

###  XML Example Request of Agency Proposal

    POST https://www.concursolutions.com/api/travel/trip/v1.1?userid_type=login_id&userid_value=cm@example.com HTTPS 1.1
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

##  Post Itinerary Details Response

| HTTP Responses | Supported Content Types |
| -------------- | ----------------------- |
| [HTTP Status Codes](/tools-support/reference/http-codes.html) | application/xml |

### Content Body
When the trip is created successfully, the request will return the full posted trip details with the following additional elements inside the **Itinerary** parent element:

| Element | Description |
| ------- | ----------- |
| id | The URI containing the trip ID. |
| ItinLocator | The Itinerary Locator value (trip ID without the URL). The **ItinLocator** value is used when updating an existing trip. |
| DateModifiedUtc | The UTC formatted date that this booking was last modified. |
| BookedVia | The GDS the itinerary was booked in. |
| DateBookedLocal | The date, in the traveler's local time, that the booking was made. |

###  Agency Proposal

The response will include the **CustomAttributes** element and its child elements if the request was an Agency Proposal.

###  XML Example of Successful Response

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

###  XML Example of Successful Response for Agency Proposal

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
    </Itinerary>

###  Post Itinerary Cancellation Request

| Description | Supported Content Types |
| ----------- | ----------------------- |
|  Cancels all segments in the supplied trip.<br>This endpoint can be used to cancel trips for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to cancel a trip on behalf of a user. The supplier or TMC must be registered with Concur and have a Concur account with one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.<br>| application/xml |

### Query Parameters - Required

* **cancel?{_tripId_}**  
The identifier for the desired trip and the cancel keyword.

Example:  
https://www.concursolutions.com/api/travel/trip/v1.1/cancel?tripId={_tripId_}


### Query Parameters - Optional

* **userid_type=login_id&userid_value={_loginID_}**  
The Concur loginID of the user that owns the trip. The userid_type and userid_value parameters can only be used if the OAuth consumer has the user role listed above.

Example:  
https://www.concursolutions.com/api/travel/trip/v1.1/cancel?tripId={_tripId_}&userid_type=login_id&userid_value={_loginID_}

| Request Headers - Required | Request Headers - Optional |
| -------------------------- | -------------------------- |
|  Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |

###  XML Example Request

    POST /api/travel/trip/v1.1/cancel?tripId=CNQR1234567890 HTTPS 1.1
    Host: [www.concursolutions.com][3]
    Authorization: OAuth {access token}
    ...




##  <a name="postcancel"></a>POST Itinerary Cancellation

| HTTP Responses | Supported Content Types |
| -------------- | ----------------------- |
| [HTTP Status Codes](/tools-support/reference/http-codes.html) | application/xml |

### Content Body
The request will return the full trip details for the cancelled trip. The trip will contain no segments, as those are all cancelled. The response includes the following additional elements inside the **Itinerary** parent element:

| Element | Description |
| ------- | ----------- |
| id | The URI containing the trip ID. | 
| ItinLocator | The Itinerary Locator value (trip ID without the URL). |
| ClientLocator | The identifier for the client. |
| DateModifiedUtc | The UTC formatted date that this booking was last modified. |
| BookedVia | The GDS the itinerary was booked in. |
| DateBookedLocal | The date, in the traveler's local time, that the booking was made. |

###  XML Example of Successful Response

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




## <a name="post"></a>POST Booking Details
Creates a new booking or updates an existing booking. A new booking will be assigned to the specified trip, or if no trip is specified, the first itinerary that spans the booking dates. If no trip is specified and no itinerary exists that spans the booking dates, a new itinerary will be created.  

This endpoint can be used to create/update bookings for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to create/update a booking on behalf of a user. The supplier or TMC must be registered with Concur, and must have an account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.
  
  
    POST /api/travel/booking/v1.0?tripId=12345678 HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token} 

### Request Parameters

#### Query Parameters - Optional

* **tripId={tripId}**
The unique identifier for the trip. Supplied in order to add a booking to an existing trip.
* **userid_type=login_id&userid_value={loginID}**
The Concur login ID of the user who owns the booking. Only provided when the booking owner is not the OAuth consumer. Can only be used when the OAuth consumer has the required user role.

Examples:

`https://www.concursolutions.com/api/travel/booking/v1.1?tripId={tripId}`

`https://www.concursolutions.com/api/travel/booking/v1.1?userid_type=login_id&userid_value={loginID}`


### Request body root elements
The request contains a Booking parent element with the following child elements:

|  Required Element |  Description |
|-------------------|--------------|
|  BookingSource |  The supplier's name. |
|  ItinSourceName |  The itinerary source. Format: TravelSupplier |
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
|  Segments |  List of Segments in this booking. This parent element contains one or more **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, or **Event** parent elements for the booking. |
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


### Response
This function returns the full trip details.

If the end user updates an existing reservation which results in a new confirmation number, the old booking must be explicitly cancelled in addition to posting the new booking to Concur.  If the previous booking is not cancelled, the user will see both bookings in their Concur trip list.



### Examples

#### Example 1: XML Example Request

    POST /api/travel/booking/v1.0?tripId=12345678 HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token} 
    ... 
        
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
        <ItinSourceName>TravelSupplier</ItinSourceName> 
        <Passengers>
            <Passenger>
                <PassengerKey>0</PassengerKey> 
                <NameFirst>Chris</NameFirst> 
                <NameLast>Miller</NameLast> 
            </Passenger>
        </Passengers>
    </Booking>


#### Example 2: XML Example of Successful Response

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



## <a name="cancel"></a>POST Booking Cancellation

Cancels an existing booking. By default, the OAuth consumer should be the owner of the booking. This endpoint can also be used to cancel bookings that the OAuth consumer does not own. This is most often done when a Travel Management Company needs to cancel bookings on behalf of a user. The TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

**NOTE:**  
Booking records can only be updated by the booking source that created them. Concur verifies the source information before processing the request.


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


### Response
This function returns the full booking details.
If the booking is not found, the function returns a HTTP 404 error and the following element:

**Status**: This element contains the value: NotFound.



## Examples

#### Examples 1: XML Example Request

    POST /api/travel/booking/v1.1/cancel?bookingSource={FastTravel}&confirmationNumber={098765431}
    Host: www.concursolutions.com
    Authorization: OAuth {access token} 


#### Examples 2: XML Example of Successful Response

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

# <a name="objects"></a>Booking Object Elements

## Booking Object Elements - TMCs and Third-party Developers
The booking elements contain many child elements. For ease of use, these elements are divided into the Core Elements, which are the most frequently used, and Additional Elements, which are not often used but are supported by the Itinerary web service. Some elements only appear if the travel supplier created the booking. Elements are marked as required if they must be supplied for a new booking.  

**NOTE:** TripLink - Open Booking suppliers see a targeted subset of these fields. Refer to the documentation here for the TripLink - Open Booking supplier booking object elements.

###  Air Booking Elements

####  Core Elements - Required
  
|  Element | Description |
|----------|-------------|
|  ClassOfService |  The class of the booking. |
|  ConfirmationNumber |  The record locator or confirmation number for the flight from the airline. |
|  EndCityCode |  The[ IATA airport code][1] for the end city of the booking. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  FlightNumber |  The flight number for the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. Use $$ when not available. |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndGate |  The arrival gate for the booking. |
|  EndTerminal |  The arrival terminal for the booking. |
|  LegId |  The leg ID of the booking. Leg IDs do not change on a connection. For each unique leg ID in the trip, all flights subsequent to the first segment with the same leg ID are connections. |
|  Seats |  The seats for the booking. This parent element contains an **AirSeat** element for each included seat. The **AirSeat** element contains the following child elements: **PassengerRph** - The passenger assigned to the seat.  **SeatNumber** - The number of the seat. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartGate |  The departure gate for the booking. |
|  StartTerminal |  The departure terminal for the booking. |
|  Status |  The GDS based booking status for the segment such as HK, HL, BK, etc. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |

#### Additional Elements - Optional


|  Element |  Description |
|----------|-------------|
|  AircraftCode |  The code for the aircraft type. |
|  Bags |  The number of bags included in the booking. |
|  Cabin |  The section of the airplane for the booking. |
|  CarbonEmissionLbs |  The pounds of carbon emission for this booking. |
|  CarbonModel |  The model used to calculate the carbon emissions. |
|  CheckedBaggage |  Whether the booking includes checked baggage. |
|  Duration |  The duration of the booked flight. |
|  ETicket |  Whether the booking has an e-ticket. Format: Y/N |
|  IsOpenSegment |  Whether the segment is open. Format: True/False |
|  IsPreferredVendor |  If the airline is marked as a preferred property by the company. Format: True/False |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: True/False |
|  Meals |  The meals included in the booking. |
|  Miles |  The number of miles included in the booking. |
|  Notes |  Additional details about the booking. |
|  OpenSegment |  Additional information about the open segment. |
|  OperatedByFlightNumber |  Flight Number provided by the airline operating the flight on behalf of the booked airline. |
|  OperatedByVendor |  The airline operating the flight on behalf of the booked airline. |
|  OperatedByVendorName |  The name of the airline operating the flight on behalf of the booked airline. |
|  Services |  The services included in the booking. |
|  SpecialInstructions |  Additional instructions regarding the booking. Max Length: 256 |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |

###  Car Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DailyRate |  The daily rate for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndCityCode |  The [IATA airport code][1] for the ending address for the booking. |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude for the ending location of the booking. |
|  EndLongitude |  The longitude for the ending location of the booking. |
|  Notes |  Additional information about the booking. |
|  PhoneNumber |  The phone number for the user. |
|  RateCode |  The rate code for the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude for the starting location of the booking. |
|  StartLongitude |  The longitude for the starting location of the booking. |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |


#### Additional Elements - Optional

|  Element |  Description |
|----------|-------------|
|  AirCondition |  The character code that indicates if car has air conditioner. R for AC, N for No AC |
|  Body |  The character code to indicate how many passengers the car can seat. |
|  Class |  Character code to indicate the class of the car e.g. if it is economy, full size, compact, etc. Varies by Vendor |
|  DiscountCode |  The discount code used by the company/TMC to get a discounted rate. |
|  DropoffCollectionAddress1 |  The AddressLine1 for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionAddressType |  &nbsp; |
|  DropoffCollectionCategory |  &nbsp; |
|  DropoffCollectionCity |  City for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionCityCode |  The [IATA airport code][1] for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionCountry |  The country for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionLatitude |  The latitude for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionLongitude |  The longitude for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionNumber |  &nbsp; |
|  DropoffCollectionPhoneNumber |  The phone number for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionPostalCode |  The postal code for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionState |  The state for the dropoff address when the rental service offers dropoff. |
|  EndAddress |  The ending address for the booking. |
|  EndAddress2 |  The ending address for the booking. |
|  EndCity |  The ending address for the booking. |
|  EndCloseTime |  The closing time for the dropoff location. |
|  EndCountry |  The ending address for the booking. |
|  EndLocation |  The dropoff location. |
|  EndOpenTime |  The opening time of the dropoff location. |
|  EndPhoneNumber |  The phone number of the dropoff location. |
|  EndPostalCode |  The ending address for the booking. |
|  EndState |  The ending address for the booking. |
|  FrequentTravelerId |  The loyalty program ID for the user. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: True/False |
|  NumCars |  The number of cars rented. |
|  NumPersons |  The number of people including the driver that the rental is for. |
|  PickupDeliveryAddress1 |  The AddressLine1 for the pickup address when the rental service offers pickup. |
|  PickupDeliveryAddressType |  &nbsp; |
|  PickupDeliveryCategory |  &nbsp; |
|  PickupDeliveryCity |  The city for the pickup address when the rental service offers pickup. |
|  PickupDeliveryCityCode |  The [IATA airport code][1] for the pickup address when the rental service offers pickup. |
|  PickupDeliveryCountry |  The country for the pickup address when the rental service offers pickup. |
|  PickupDeliveryLatitude |  The latitude for the pickup address when the rental service offers pickup. |
|  PickupDeliveryLongitude |  The longitude for the pickup address when the rental service offers pickup. |
|  PickupDeliveryNumber |  &nbsp; |
|  PickupDeliveryPhoneNumber |  The phone number for the pickup address when the rental service offers pickup. |
|  PickupDeliveryPostalCode |  The postal code for the pickup address when the rental service offers pickup. |
|  PickupDeliveryState |  The state for the pickup address when the rental service offers pickup. |
|  RateType |  The rate type for the booking. |
|  SpecialEquipment |  Any special equipment required by the renter. |
|  SpecialInstructions |  Additional instructions regarding the booking. Max Length: 256 |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address for the booking. |
|  StartCity |  The starting address for the booking. |
|  StartCloseTime |  The closing time for the pickup location. |
|  StartCountry |  The starting address for the booking. |
|  StartLocation |  The starting location of the booking. |
|  StartOpenTime |  The opening time for the pickup location. |
|  StartPostalCode |  The starting address for the booking. |
|  StartState |  The starting address for the booking. |
|  Transmission |  The character code that indicates if the car has auto-transmission. A for Auto, M for Manual |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |

###  Hotel Booking Elements

#### Core Elements - Required 

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Name |  The hotel name for the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Status |  The booking status. |
|  Vendor |  The two letter GDS vendor code. |


####  Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  CheckinTime |  The check in time for the hotel booking. |
|  CheckoutTime |  The check out time for the hotel booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DailyRate |  Average per day rate for the hotel. If the rate varies over the duration, it can be specified using the charges model. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  HotelPropertyId |  The hotel's property ID. |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of people the booking is for. |
|  NumRooms |  The number of rooms the booking is for. |
|  PhoneNumber |  The phone number for the booking. |
|  RateCode |  The rate code for the booking. |
|  RoomDescription |  The room description for the booking. Max Length: 200 |
|  RoomType |  The room type for the booking. |
|  SpecialInstructions |  Additional instructions regarding the booking. Max Length: 256 |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address for the booking. |
|  StartCity |  The starting address for the booking. |
|  StartCountry |  The starting address for the booking. |
|  StartLatitude |  The latitude for the starting location of the booking. |
|  StartLongitude |  The longitude for the starting location of the booking. |
|  StartPostalCode |  The starting address for the booking. |
|  StartState |  The starting address for the booking. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |

#### Additional Elements - Optional

|  Element |  Description |
|----------|-------------|
|  EndCityCode |  The [IATA airport code][1] for the ending address for the booking. |
|  DiscountCode |  The discount code for the booking. |
|  FrequentTravelerId |  The traveler’s ID for the frequent traveler reward program. |
|  HadDeposit |  Whether the booking had a deposit. Format: true/false |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  ModificationCode |  The code for the modification to the booking. |
|  PartnerMembershipId |  The membership ID of the partner associated with the booking. |
|  PassiveType |  The type of the booking. |
|  RateAccess |  The rate access for the booking. |
|  RateType |  The rate type for the booking. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  VendorFlags |  Semi-colon-delimited list of flags for free hotel service flags. E.g. free breakfast (FB), internet (FI), Parking (FP), etc. If they were all present they can be concatenated as - FB;FI;FP; |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |

###  Dining Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  Core Elements - Optional |   |
|  Element |  Description |
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  FrequentTravelerId |  The loyalty program ID for the user. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  Name |  The name of the restaurant. Maximum length: 80 |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of persons for the booking. |
|  PhoneNumber |  The restaurant phone number. |
|  RestaurantId |  The booking vendor’s restaurant ID. Maximum length: 50 |
|  StartAddress |  The restaurant address. Maximum length: 80 |
|  StartAddress2 |  The restaurant address. Maximum length: 80 |
|  StartCity |  The restaurant address. Maximum length: 50 |
|  StartCountry |  The restaurant address. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the restaurant. |
|  StartLongitude |  The longitude of the restaurant. |
|  StartPostalCode |  The restaurant address. Maximum length: 24 |
|  StartState |  The restaurant address. Maximum length: 50 |
|  Status |  The status of the segment. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |

###  Ride Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  EndCityCode |  The ending [IATA airport code][1] of the booking. |
|  StartCityCode |  The starting [IATA airport code][1] of the booking. |
|  Vendor |  The two letter GDS vendor code. One of the following codes Vendor codes: |

##### Vendor Codes

|  Code |  Description |
|----------|-------------|
|  $R |  RideCharge |
|   AL |  AddisonLee |  
|  DG |  DeemGroundLimo |
|  GC |  GroundScope |
|  GS |  GroundSpan |
|  LC |  Limoscom |
|  SQ |  SummitQwest |
|  SW |  SummitQwest |
|  TD |  Tandem |
|  TV |  Transvip |
| $$ | unknown |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DropoffInstructions |  Instructions regarding the booking. |
|  Duration |  The duration of the booking. |
|  EndAddress |  The ending address of the booking. |
|  EndAddress2 |  The ending address of the booking. |
|  EndCity |  The ending address of the booking. |
|  EndCountry |  The ending address of the booking. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude for the ending location of the booking. |
|  EndLocation |  The ending location of the booking. |
|  EndLocationCode |  The ending location code of the booking. |
|  EndLocationName |  The ending location name of the booking. |
|  EndLongitude |  The longitude of the ending point of the booking. |
|  EndPostalCode |  The ending address of the booking. |
|  EndState |  The ending address of the booking. |
|  IsPersonal |  Whether the segment is for personal travel. Format: true/false. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  MeetingInstructions |  The instructions for the meeting location of the booking. |
|  Miles |  The number of miles for the booking. |
|  Name |  The name on the booking. |
|  Notes |  Additional information about the booking. |
|  NumberOfHours |  The number of hours of the booking. |
|  NumPersons |  The number of people included in the booking. |
|  OperatedByVendor |  The operated by vendor for the booking. |
|  PassiveCityCode |  The passive city code of the booking. |
|  PhoneNumber |  The ride vendor phone number. |
|  PickupInstructions |  Instructions regarding the booking. |
|  Rate |  The rate for the booking. |
|  RateDescription |  The rate description for the booking. |
|  RateNotes |  The rate notes for the booking. |
|  RateType |  The rate type for the booking. |
|  ReservationId |  The booking vendor’s reservation ID. |
|  SpecialInstructions |  The special instructions for the ride. Max Length: 256 |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address of the booking. |
|  StartCity |  The starting address of the booking. |
|  StartCountry |  The starting address of the booking. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the booking start location. |
|  StartLocation |  The starting location of the booking. |
|  StartLocationCode |  The code of the starting location of the booking. |
|  StartLocationName |  The name of the starting location of the booking. |
|  StartLongitude |  The longitude of the booking start location. |
|  StartPostalCode |  The starting address of the booking. |
|  StartState |  The starting address of the booking. |
|  Status |  The status of the segment. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |

###  Rail Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  StartDateLocal |  The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  Amenities |  The booked amenities. |
|  Cabin |  The cabin identifier. |
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CarbonEmissionLbs |  The pounds of carbon emission for this booking. |
|  CarbonModel |  The model used to calculate the carbon emissions. |
|  ClassOfService |  The class of the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DiscountCode |  The discount code for the booking. |
|  Duration |  The duration of the trip booked. |
|  EndCity |  The end city for the rail trip. |
|  EndCityCode |  The [IATA airport code][1] for the end city of the trip. |
|  EndCountry |  The country code for the booking. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude of the ending point of the booking. |
|  EndLongitude |  The longitude of the ending point of the booking. |
|  EndPlatform |  The ending platform location of the booking. |
|  EndRailStation |  The code for the ending station of the booking. |
|  EndRailStationName |  The name of the ending station of the booking. |
|  ETicket |  The e-ticket number. |
|  FareType |  The type of fare on the rail booking. |
|  FrequentTravelerId |  The traveler’s ID for the frequent traveler reward program. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  LegId |  The trip leg ID. |
|  Meals |  The booked meals. |
|  Miles |  The number of miles booked. |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of persons booked for the trip. |
|  NumStops |  The number of stops in the booking. |
|  OperatedByTrainNumber |  The train identifier of the operating vendor of the booked trip. |
|  OperatedByVendor |  The operating vendor of the booked trip. |
|  RateCode |  The vendor's code for the rate of the booking. |
|  RouteRestrictCode |  The code to restrict the route of the booking. |
|  SpecialInstructions |  The instructions for the booking. Max Length: 256 |
|  StartCity |  The starting city of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartCountry |  The starting country of the booking. |
|  StartDateUtc |  The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the starting location of the booking. |
|  StartLongitude |  The longitude of the starting location of the booking. |
|  StartPlatform |  The starting platform location of the booking. |
|  StartRailStation |  The code of the starting station of the booking. |
|  StartRailStationName |  The name of the starting station of the booking. |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  TrainNumber |  The number for the booked train. |
|  TrainTypeCode |  The code for the type of train used in the booking. |
|  TrainTypeName |  The name of the type of train used in the booking. |
|  TransportMode |  The transport mode of the booking. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  WagonNumber |  The wagon number of the train car. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  Seats |  The booked seats. This parent element contains a **RailSeat** element for each included seat. The **RailSeat** element has the following child elements:

##### RailSeat child elements

|  Element |  Description |
|----------|-------------|
|  Amenities |  The amenities for the seat. |
|  BerthPosition |  The berth location of the seat. | 
|  Deck |  Which deck the seat is on. |
|  FacingForward |  Whether the seat is facing forward. |
|  FareSpaceComfort |  The space around the seat. |
|  PassengerRph |  Which passenger the seat is assigned to. |
|  SeatNumber |  The number of the seat. |
|  SeatPosition |  The location of the seat. |
|  SpaceType |  The type of space around the seat. |
|  Status |  The status of the seat booking. |
|  WagonNumber |  The number of the wagon the seat is on. |
|  WagonType |  The type of wagon the seat is on. |

###  Parking Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  StartDateLocal |  The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  ClassOfService |  The class of the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  FrequentTravelerId |  The traveler’s ID for the frequent traveler reward program. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  Notes |  Additional information about the booking. |
|  OperatedByVendor |  The operating vendor of the booking. |
|  ParkingLocationId |  The location of the parking booking. |
|  PhoneNumber |  The parking phone number. |
|  Pin |  The PIN number for the booking. |
|  RateCode |  The vendor's code for the rate of the booking. |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address of the booking. |
|  StartCity |  The starting address of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartCountry |  The starting address of the booking. |
|  StartDateUtc |  The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLocation |  The parking location. |
|  StartPostalCode |  The starting address of the booking. Maximum length: 24 |
|  StartState |  The starting address of the booking. Maximum length: 50 |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |

###  Travel Booking  
**NOTE**: This booking type is used by the Concur Travel Request product to store the main destination for the trip without specifying a transport type.
#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartCity |  The starting address of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartDateLocal |  The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DailyRate |  Average per day rate for the booking. If the rate varies over the duration, it can be specified using the charges model. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndAddress |  The ending address of the booking. |
|  EndAddress2 |  The ending address of the booking. |
|  EndCity |  The ending address of the booking. |
|  EndCityCode |  The ending address of the booking. |
|  EndCountry |  The ending address of the booking. |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude for the ending location of the booking. |
|  EndLocation |  The ending location of the booking. |
|  EndLongitude |  The longitude of the ending point of the booking. |
|  EndPostalCode |  The ending address of the booking. |
|  EndState |  The ending address of the booking. |
|  TransportMode |  The transport mode of the booking. |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of persons booked for the trip. |
|  PhoneNumber |  The parking phone number. |
|  SpecialInstructions |  The instructions for the booking. Max Length: 256 |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address of the booking. |
|  StartCity |  The starting address of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartCountry |  The starting address of the booking. |
|  StartDateUtc |  The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the restaurant. |
|  StartLongitude |  The longitude of the restaurant. |
|  StartPostalCode |  The starting address of the booking. Maximum length: 24 |
|  StartState |  The starting address of the booking. Maximum length: 50 |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  Seats |  The seats for the booking. This parent element contains an **TravelSeat** element for each included seat. The **TravelSeat** element contains the following child elements:


####  Charges Child Elements

#####  Core Elements - Required

###### Percent - The percent of fixed charges. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  Amount |  The total amount for the rate for the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |
|  Description |  The description for the rate. |
|  IsPaid |  Whether the rate has been paid. Format: true/false. |
|  IsPrimary |  Indicates whether the charge is the Primary or Main rate. For example, if one of the rates is the actual rate and the rest are penalties, the actual rate should be set as IsPrimary. Only one charge in a set should be primary. Format: true/false. |
|  SemanticsCode |  Indicates the charge category for the line item.  |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor for the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge |

###### Fixed - The fixed charges. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |
|  Description |  The description for the fixed amount. |
|  IsPaid |  Whether the fixed amount has been paid. Format: true/false. |
|  IsPrimary |  Whether the fixed amount is primary. Format: true/false. |
|  SemanticsCode |  Indicates the charge category for the line item. Refer to the [Semantics and Vendor Codes][3] document for more information. |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor applying the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge. |

###### Rate - The rate for the booking. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  Amount |  The total amount for the rate for the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |
|  Description |  The description for the rate. |
|  IsPaid |  Whether the rate has been paid. Format: true/false. |
|  IsPrimary |  Whether the rate is primary. Format: true/false. |
|  NumUnits |  The number of units expected for the charge. For instance, 3 days |
|  PerUnit |  The unit of measure for the charge. Values represent rates like per DAY, WEEK, or MONTH |
|  SemanticsCode |  Indicates the charge category for the line item. Refer to the [Semantics and Vendor Codes][3] document for more information. |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor for the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge. |

###### RateWithAllowance - The rate for the booking, including any travel allowances. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  AllowanceAmount |  The cost of overage fees when the allowance is exceeded. For example, if the allowance is 5000 miles, the cost could be $0.02 per mile. The overage must be in the same currency as the basic rate. |
|  AllowanceIsUnlimited |  Whether the allowance is unlimited. Format: true/false. |
|  AllowanceNumUnits |  The number of units for the allowance associated with the charge. For example, 5000 miles. |
|  AllowanceUnit |  The unit of measure for the allowance associated with the charge. For example, a car weekly rate might allow 5000 miles included in the rate. |
|  Amount |  The total amount for the rate for the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |
|  Description |  The description for the rate. |
|  IsPaid |  Whether the rate has been paid. Format: true/false. |
|  IsPrimary |  Indicates whether the charge is the Primary or Main rate. For example, if one of the rates is the actual rate and the rest are penalties, the actual rate should be set as IsPrimary. Only one charge in a set should be primary. Format: true/false. |
|  NumUnits |  The number of units expected for the charge. For instance, 3 days. |
|  PerUnit |  The unit of measure for the charge. Values represent rates like per DAY, WEEK, or MONTH |
|  SemanticsCode |  Indicates the charge category for the line item. Refer to the [Semantics and Vendor Codes][3] document for more information. |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor for the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge. |

##### TravelSeat Elements

|  Element |  Description |
|----------|-------------|
|  PassengerRph |  The passenger assigned to the seat. |
|  SeatNumber |  The number of the seat. |  


###  Time Zone Formats

#### Olson Time Zones

|       |       |          |           |
|-------|-------|----------|-----------| 
| Africa/Cairo |  Africa/Casablanca |  Africa/Harare |  Africa/Luanda |
|  Africa/Nairobi |  Africa/Windhoek |  America/Anchorage |  America/Argentina/Buenos_Aires |
|  America/Asuncion |  America/Bahia |  America/Bogota |  America/Buenos_Aires |
|  America/Caracas |  America/Chicago |  America/Chihuahua |  America/Denver |
|  America/Godthab |  America/Guyana |  America/Halifax |  America/Indianapolis |
|  America/Los_Angeles |  America/Manaus |  America/Mexico_City |  America/Montevideo |
|  America/New_York |  America/Phoenix |  America/Regina |  America/Santiago |
|  America/Sao_Paulo |  America/St_Johns |  America/Swift_Current |  America/Tijuana |
|  Asia/Almaty |  Asia/Amman |  Asia/Baghdad |  Asia/Baku |
|  Asia/Bangkok |  Asia/Beirut |  Asia/Calcutta |  Asia/Colombo |
|  Asia/Damascus |  Asia/Dhaka |  Asia/Irkutsk |  Asia/Jerusalem |
|  Asia/Kabul |  Asia/Kamchatka |  Asia/Karachi |  Asia/Karachi |
|  Asia/Katmandu |  Asia/Krasnoyarsk |  Asia/Magadan |  Asia/Muscat |
|  Asia/Novosibirsk |  Asia/Rangoon |  Asia/Riyadh |  Asia/Seoul |
|  Asia/Shanghai |  Asia/Singapore |  Asia/Taipei |  Asia/Tbilisi |
|  Asia/Tehran |  Asia/Tokyo |  Asia/Ulaanbaatar |  Asia/Vladivostok |
|  Asia/Yakutsk |  Asia/Yekaterinburg |  Asia/Yerevan |  Atlantic/Azores |
|  Atlantic/Cape_Verde |  Atlantic/South_Georgia |  Australia/Adelaide |  Australia/Brisbane |
|  Australia/Darwin |  Australia/Hobart |  Australia/Perth |  Australia/Sydney |
|  Etc/GMT+12 |  Etc/GMT-11 |  Etc/GMT-2 |  Europe/Athens |
|  Europe/Berlin |  Europe/Helsinki |  Europe/Istanbul |  Europe/Kaliningrad |
|  Europe/London |  Europe/Minsk |  Europe/Moscow |  Europe/Paris |
|  Europe/Prague |  Europe/Sarajevo |  GMT |  GMT-1200 |
|  Indian/Mauritius |  Pacific/Apia |  Pacific/Auckland |  Pacific/Fiji |
|  Pacific/Guadalcanal |  Pacific/Guam |  Pacific/Honolulu |  Pacific/Tongatapu |
|  UTC | | |

#### Windows Time Zones

|       |       |          |           |
|-------|-------|----------|-----------| 
|  Africa/Cairo |  Africa/Casablanca |  Africa/Harare |  Africa/Luanda |
|  Africa/Nairobi |  Africa/Windhoek |  America/Anchorage |  America/Argentina/Buenos_Aires |
|  America/Asuncion |  America/Bahia |  America/Bogota |  America/Buenos_Aires |
|  America/Caracas |  America/Chicago |  America/Chihuahua |  America/Denver |
|  America/Godthab |  America/Guyana |  America/Halifax |  America/Indianapolis |
|  America/Los_Angeles |  America/Manaus |  America/Mexico_City |  America/Montevideo |
|  America/New_York |  America/Phoenix |  America/Regina |  America/Santiago |
|  America/Sao_Paulo |  America/St_Johns |  America/Swift_Current |  America/Tijuana |
|  Asia/Almaty |  Asia/Amman |  Asia/Baghdad |  Asia/Baku |
|  Asia/Bangkok |  Asia/Beirut |  Asia/Calcutta |  Asia/Colombo |
|  Asia/Damascus |  Asia/Dhaka |  Asia/Irkutsk |  Asia/Jerusalem |
|  Asia/Kabul |  Asia/Kamchatka |  Asia/Karachi |  Asia/Karachi |
|  Asia/Katmandu |  Asia/Krasnoyarsk |  Asia/Magadan |  Asia/Muscat |
|  Asia/Novosibirsk |  Asia/Rangoon |  Asia/Riyadh |  Asia/Seoul |
|  Asia/Shanghai |  Asia/Singapore |  Asia/Taipei |  Asia/Tbilisi |
|  Asia/Tehran |  Asia/Tokyo |  Asia/Ulaanbaatar |  Asia/Vladivostok |
|  Asia/Yakutsk |  Asia/Yekaterinburg |  Asia/Yerevan |  Atlantic/Azores |
|  Atlantic/Cape_Verde |  Atlantic/South_Georgia |  Australia/Adelaide |  Australia/Brisbane |
|  Australia/Darwin |  Australia/Hobart |  Australia/Perth |  Australia/Sydney |
|  Etc/GMT+12 |  Etc/GMT-11 |  Etc/GMT-2 |  Europe/Athens |
|  Europe/Berlin |  Europe/Helsinki |  Europe/Istanbul |  Europe/Kaliningrad |
|  Europe/London |  Europe/Minsk |  Europe/Moscow |  Europe/Paris |
|  Europe/Prague |  Europe/Sarajevo |  GMT |  GMT-1200 |
|  Indian/Mauritius |  Pacific/Apia |  Pacific/Auckland |  Pacific/Fiji |
|  Pacific/Guadalcanal |  Pacific/Guam |  Pacific/Honolulu |  Pacific/Tongatapu |
|  UTC | | |


[1]: https://www.iata.org/publications/Pages/code-search.aspx
[2]: https://en.wikipedia.org/wiki/ISO_4217
[4]: https://www.tripit.com/developer
[5]: https://en.wikipedia.org/wiki/ISO_4217
[6]: https://en.wikipedia.org/wiki/Neutral_unit_of_construction_(airlines)






