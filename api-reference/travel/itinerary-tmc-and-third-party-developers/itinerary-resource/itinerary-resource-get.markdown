---
title: Get itineraries
layout: operation
---




This resource supports the following GET actions:

##  Get List of Itineraries Request

| ----- |
|  Description |
|

Retrieves trip summaries for the traveler specified in the OAuth token. This endpoint can also be used to get details for trips for a different user or the whole company. This is most often done when a Travel Management Company needs to get a list of trips on behalf of a user or company. During the request, a user with one of the following user roles from the user's company must authenticate through OAuth: Web Services Administrator for Professional, or Can Administer for Standard.

The response for this function can be divided into pages for easier processing.

 |
|  Query Parameters - Required |  Supported Accept Types |
|  None |   |
|  Query Parameters - Optional |   |
|  **NOTE**: If multiple query parameters are supplied, they will be combined with a logical AND. The trip must match all provided criteria to be returned in the search results.

* **startDate={_date_}**  
The URL-encoded start date (in Coordinated Universal Time, aka UTC) for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the start date is set to today's date - 30 days. The request will only return trips that are ongoing during the provided dates, either starting on the date, or starting before the date and ongoing during the provided date.
* **endDate****={_date_}**  
The URL-encoded UTC end date for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the end date is set to today's date + 12 months. The request will only return trips that are ongoing during the provided dates, either ending on the date, or starting before the date and ongoing during the provided date.
* **createdAfterDate****={_date_}**  
The URL-encoded UTC date for when the trip was created. The query string will return trips created on or after this date. Used with the createdbeforedate for finding trips created during a date range. Format: YYYY-MM-DD.
* **createdBeforeDate****={_date_}**  
The URL-encoded UTC date for when the trip was created. The query string will return trips created on or before this date. Used with the createdafterdate for finding trips created during a date range. Format: YYYY-MM-DD.
* **lastModifiedDate****={_date_}**  
The last modified UTC date of the trips and any their associated bookings. This query string will return only the trips where the trip or any of its associated bookings have a last modified date that is greater or equal to the supplied time. The provided date/time can be anytime between now and the first date of trip creation in the database. The format is either the date or the date and time combined.
* **bookingType={_type_}**  
The trip includes at least one booking of this type. Format: Air, Car, Dining, Hotel, Parking, Rail, or Ride
* **userid_type=login&userid_value=_{loginID}_**  
The loginID is the user's Concur login ID. The userid_value of ALL can be sent to get trip summaries for all users at the company. The userid_type and userid_value parameters can only be used if the OAuth consumer has one of the user roles listed above.
* **includeMetadata=true&ItemsPerPage={_number_}&Page={_number_}**  
The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters will cause the response to be divided into pages. The response will be wrapped in a **ConcurResponse** parent element, with both the response details and the paging metadata included. The details of the response are here. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1.
* **includeVirtualTrip=_1_**  
Virtual trips are segments booked offline through the Travel Request product. Set the includeVirtualTrip query parameter to 1 to include those trips in the list.
* **includeCanceledTrips=_{true/false}_**  
The includeCanceledTrips query parameter will cause the request to also return trips with a status of Canceled. When this query parameter is set to **true**, the response will include the **TripStatus** element.

Examples:  
**To get itinerary list for the entire company (OAuth consumer must have Admin user role):**  
https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}&userid_type=login&userid_value=ALL

**To get itinerary list for a single user (the OAuth consumer):**  
https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}

**To get itinerary list for a single user (other than the OAuth consumer):**  
https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={_startdate_}&endDate={_enddate_}_&_createdAfterDate={_date_}&createdBeforeDate={_date_}&lastModifiedDate={_date_}&bookingType={_type_}&userid_type=login_id&userid_value={_loginID_}

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

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

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |   |
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
**TotalItems**: The total number of itineraries the query returned.  
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
|  Retrieves the details for the specified trip. By default, the OAuth consumer should be the owner of the trip. This endpoint can also be used to get details for trips that the OAuth consumer does not own. This is most often done when a Travel Management Company needs to get trip details on behalf of a user. The TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

The returned elements will vary based on the following conditions:

* Some elements, such as **AirlineTickets** or **RailPayments**, will only appear for bookings of the appropriate type.
* Amount values, such as **Rate** or **Tax**, will only appear if the requestor is the source of the booking. All other suppliers will not receive the amount elements associated with the bookings.
* Some elements, such as **SabreDKNumber**, will only appear if the booking was created by the relevant GDS.
* Some elements are vendor-specific and will only appear in responses for the associated vendor.

This documentation contains the full set of possible elements that can be returned. No itinerary can contain all of the possible elements, so the response will always be a subset of the possible returned values. For full response details, view the [Public Itinerary XSD][3]. Internet Explorer users should right click the link and choose Save Target As... to view the XSD.

The response can be formatted for TripIt, using the **systemformat** query string. Refer to the [TripIt API documentation][4] for the format definitions.

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

* **userid_type=login&userid_value=_{loginID}_**  
The loginID is the user's Concur login ID. The userid_value of ALL can be sent to get trip summaries for all users at the company. The userid_type and userid_value parameters can only be used if the OAuth consumer has one of the user roles listed above.
* **systemFormat=_{format}_**  
The **systemFormat** query parameter can be used to specify that the response is formatted for a different system. The supported value is **Tripit**. Refer to the [TripIt API documentation][4] for more details.

Examples:  
**To get trip details for a user other than the OAuth consumer:**  
https://www.concursolutions.com/api/travel/trip/v1.1/{_tripId_}?userid_type=login_id&userid_value={_loginID_}

**To get trip details for the OAuth consumer and receive a response in the TripIt format:**  
https://www.concursolutions.com/api/travel/trip/v1.1/{_tripId_}&systemFormat=Tripit

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |

####  XML Example Request

    GET /api/travel/trip/v1.1/CNQR1234567890 HTTPS 1.1
    Host: [www.concursolutions.com][1]
    Authorization: OAuth {access token}
    ...

##  Get Itinerary Details Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|

[HTTP Status Codes][2]

 |   |
|  Content Body |   |
|  This request will return an **Itinerary** parent element with a subset of the following child elements:

|  Element |  Description |
|  BookedByFirstName |  The first name of the person who booked the trip. |   |
|  BookedByLastName |  The last name of the person who booked the trip. |
|  BookedVia |  The booking method for the trip. |
|  CancelComments |  The comments provided if the itinerary is cancelled. Maximum length: 256 characters. |
|  Comments |  Optional comments. Maximum length: 512 characters. |
|  DateBookedLocal |  The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date that this trip was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date that this trip was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  Description |  The trip description. Maximum length: 512 characters. |
|  EndDateLocal |  The end date of the trip in the ending location's timezone. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The end date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  IsPersonal |  Whether the trip is a Business or Leisure trip. Format: true/false. |
|  ProjectName |  The associated project name for the trip. Maximum length: 255 characters. |
|  StartDateLocal |  The start date of the trip in the starting location's timezone. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateUtc |  The start date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  TripName |  Name of the trip. Maximum length: 255 characters. |
|  Bookings |  This parent element will contain a **Booking** child element for each booking associated with this itinerary. Refer to the Booking Child Elements table. |
|  RuleViolations |  The list of rule violations associated with the itinerary. This parent element contains a **RuleViolation** child element for each associated rule violation. Refer to the [Public Itinerary XSD][3] for more information. |
|  Status |  The status of the itinerary. One of the following:

0- Confirmed  
1- Ticketed by agent  
2- Canceled

 |

| ----- |
|  Booking Child Elements |
|  Element |  Description |
|  BookingSource |  The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. |
|  DateBookedLocal |  The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  FormOfPaymentName |  The name of the form of payment for the booking. |
|  FormOfPaymentType |  The type of the form of payment. |
|  PassengerCount |  The number of passengers included in the booking. |
|  RecordLocator |  Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source. |
|  RetrievedDateUtc |  The date the booking was last accessed, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  TicketMailingAddress |  The mailing address for the booked ticket, if any. |
|  TicketPickupLocation |  The pickup location for the booked ticket, if any. |
|  TicketPickupNumber |  The confirmation number to pick up the booked ticket, if any. |
|  AirfareQuotes |  List of stored airfare quotes. This parent element has a **Quote** child element for each airfare quote. The **Quote** parent element contains the following child elements:

|  BaseFare |  The base fare of the booking quote. |
|  BaseFareCurrency |  The [3-letter ISO 4217 currency code][5] for the booking quote. |   | |
|  BaseFareNuc |  The base fare in [NUC][6]. |
|  BaseFareNucCurrency |  The [3-letter ISO 4217 currency code][5] for the base fare in NUC. |
|  DateCreatedUtc |  The date the quote was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the quote was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  Endorsements |  Notes from the airline if it endorses the ticket as acceptable on a different airline. |
|  IssueByDate |  The date the quote must be issued by. Format: YYYY-MM-DDThh:mm:ss |
|  TotalFare |  The total price of the booking. |
|  TotalFareCurrency |  The [3-letter ISO 4217 currency code][5] for the total fare. |
|  AirlineCharges |  The charges applied by the airline. This parent element contains a **Fixed** child element for each fixed charge from the airline. Refer to the [Charges Child Element][7] table for the **Fixed** child elements. |
|  Taxes |  The taxed applied to this airline ticket. This parent element contains a **Tax** child element for each tax amount for the ticket. Refer to the Tax Child Element table. |

 |
|  AirlineTickets |  List of Airline Tickets. This parent element has the following child elements:

|  ManualAirlineTicket |  The manual airline ticket for the booking. Refer to the [Public Itinerary XSD][3] for more information. |
|  AirlineTicket |  The airline ticket for the booking. Refer to the [Public Itinerary XSD][3] for more information. |   | |
|  AirlineAdjustment |  Any adjustment made to the booking. Refer to the [Public Itinerary XSD][3] for more information. |

 |
|  Charges |  The charges for the booking. Refer to the [Public Itinerary XSD][3] for more information. |
|  MiscChargeOrders |  This parent element has a **MiscellaneousChargeOrder** child element for each included miscellaneous charge. The **MiscellaneousChargeOrder** parent element has the following child elements:

|  DateCreatedUtc |  The date the charge order was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the charge order was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |   | |
|  IssueDate |  The date the charge order was issued. Format: YYYY-MM-DDThh:mm:ss |
|  PlatingCarrierNumericCode |  Part of the ticket number that indicates the airline code. This is a three digit number. For example: 001=American, 005=Continental, 006=Delta, 012=Northwest |
|  PlatingControlNumber |  Part of the ticket number that indicates the ticket control number. Format: Ten digit number. |
|  TotalAmount |  The total amount of charge orders for the ticket. |
|  TotalAmountCurrency |  The [3-letter ISO 4217 currency code][5] for the total charge order amount. |

 |
|  Passengers |  This parent element has a **Passenger** child element for each included passenger. Refer to the Passenger Child Element table. |
|  PassPrograms |  This parent element has a **PassProgram** child element for each pass program associated with the booking. The **PassProgram** parent element has the following child elements:

|  Amount |  The program amount. |
|  Name |  The program name. |   | |
|  Type |  The program type. |
|  UserFirstName |  The first name of the passenger. |
|  UserLastName |  The last name of the passenger. |

 |
|  PhoneNumbers |  This parent element has a **PhoneNumberData** child element for each phone number associated with the booking. The **PhoneNumberData** parent element has the following child elements:

|  PassengerRPH |  Indicates the passenger to whom this phone number belongs. |
|  PhoneNumber |  The passenger's phone number. |   | |
|  Type |  The type of phone number. |
|  Description |  The description for the phone number. |

 |
|  RailPayments |  This parent element has the following child elements:

|  RailPayment |  The payment information for a rail booking. Refer to the [Public Itinerary XSD][3] for more information. |
|  RailAdjustment |  The amount adjusted for a rail booking. Refer to the [Public Itinerary XSD][3] for more information. |   | |

 |
|  Segments |  This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**. Refer to [Booking Object Elements][8] for more information about the Segment child elements. |
|  Delivery |  The method used to deliver this booking. This parent element has the following child elements:

|  LocationAdditionalDetails |  Additional information about the delivery location. |
|  AddressLine1 |  The delivery address. |   | |
|  AddressLine2 |  The delivery address. |
|  City |  The delivery address. |
|  Country |  The delivery address. |
|  LocationDesc |  Description of the delivery location. |
|  Email |  The delivery email contact. |
|  Latitude |  The delivery address. |
|  Longitude |  The delivery address. |
|  LocationName |  The name of the delivery location. |
|  PhoneNumber |  The phone number of the delivery contact. |
|  ReferenceNumber |  The reference number for the delivery. |
|  State |  The delivery address. |
|  Type |  The type of delivery address. |
|  Zip |  The delivery address. |

 |
|  WaitListSegments |  Information will appear in this element if the segment is on a waiting list. |
|  Warnings |  The warnings associated with the booking. |
|  WebAddresses |  List of web addresses. This parent element includes a **WebAddressData** child element for each associated web address. The **WebAddressData** element has the following child elements:

|  PassengerRPH |  Indicates the passenger to whom this web address belongs. |
|  WebAddress |  Web address. Format: email address or URL. Maximum length: 250 characters. |   | |
|  Format |  Format of the web address. Format: E=Email, U=URL, I=IM |
|  Type |  Type code for web address. Format: TKT, RES, BUS |
|  Description |  Free text describing the web address. Maximum length: 50 characters. |

 |

| ----- |
|  Passenger Child Elements |
|  Element |  Description |
|  FirstNameNumber |  The number of characters in the passenger's first name. |
|  LastNameNumber |  The number of characters in the passenger's last name. |
|  NameFirst |  The passenger's first name. |
|  NameLast |  The passenger's last name. |
|  NameMiddle |  The passenger's middle name. |
|  NamePrefix |  The passenger's name prefix. |
|  NameRemark |  Additional details about the passenger's name. |
|  NameSuffix |  The passenger's name suffix. |
|  NameTitle |  The passenger's name title. |
|  TextName |  The user's full name. |
|  FrequentTravelerProgram |  The passenger's loyalty program identifier. This parent element contains the following child elements:

|  FrequentFlyer |  The passenger's frequent flyer program details. This parent element has the following child elements:

|  AirlineVendor |  The vendor of the frequent flyer program. |
|  Description |  The program description. |   | | | |
|  DiscountProgramExpirationDate |  The date the discount program enrollment expires. Format: YYYY-MM-DDThh:mm:ss |
|  DiscountProgramType |  The type of discount program. |
|  FrequentFlyerNumber |  The passenger's identifier for the program. |
|  ProgramVendor |  The program vendor. |
|  Status |  The passenger's program status. |
|  StatusExpirationDate |  The expiration date for the passenger's program status. |

 |
|  RailProgram |  The passenger's rail loyalty program details. This parent element has the following child elements:

|  Description |  Description of the discount program. |
|  DiscountProgramExpirationDate |  The date the discount program enrollment expires. Format: YYYY-MM-DDThh:mm:ss |   | |
|  DiscountProgramType |  The type of discount program. |
|  ProgramNumber |  The passenger's identifier for the program. |
|  ProgramVendor |  The program vendor. |
|  Status |  The passenger's program status. |
|  StatusExpirationDate |  The expiration date for the passenger's program status. |

 |

 |

 |

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



[1]: http://www.concursolutions.com "www.concursolutions.com"
[2]: https://developer.concur.com/reference/http-codes
[3]: https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd
[4]: https://www.tripit.com/developer
[5]: http://en.wikipedia.org/wiki/ISO_4217
[6]: http://en.wikipedia.org/wiki/Neutral_unit_of_construction_(airlines)
[7]: https://developer.concur.com/node/555#charges
[8]: /node/555#bookingelements
