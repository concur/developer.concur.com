---
title: Itinerary Service
layout: reference
---

## Overview

The Concur Itinerary service can be used to programmatically access travel data such as trips and bookings in the Concur travel system. The Concur Travel system uses this data to match and consolidate bookings it receives from disparate sources and put these into consolidated travelers’ itineraries, providing travelers a convenient way to view their trips in a single itinerary view. Travelers can view their itineraries through mobile applications or other services. The following diagram provides a graphical overview of the Concur Itinerary web service:


## Version

Version 1.0

## Resources

[Trip](/api-reference/travel/itinerary/trip/trip-resource.html)

[Booking](/api-reference/travel/itinerary/booking/booking-resource.html)

## Concepts

### Itineraries and trips

The terms itinerary and trip are synonyms. Trip is the name used for the Concur web serice resource that represents an itinerary.

### Itinerary, booking record, and segment

* An _itinerary_ is the container for all bookings in a trip. An itinerary can have more than one booking.
* A _booking record_ is the container for all segments booked with from a source with the same unique identifier (_record locator_ or _confirmation number_). A single booking can have multiple segments.
* A _segment_ includes details about the travel booking.

## Who can use this web service?

TripLink suppliers, travel management companies (TMCs), and Concur partners can use the Concur Itinerary web service. The level of access to the data in the Concur Travel system on who is accessing it and the Concur products that have been purchased.

### Travel management companies (TMCs)

* Can view and post bookings for any travel type.
* Send new reservations that users create on the supplier's site to Concur.
* Send a notice of trip cancellations to Concur.
* Get a list of current trips for a user from Concur.
* Get the full details of user trips from Concur.
* Can view the full set of fields for their customers' itineraries because TMCs have an existing relationship with their customers.
* Can send proposed itineraries when the Agency Proposal feature of Travel Request is active.
* Can cancel bookings on behalf of a user.

### TripLink travel suppliers

* Can post bookings for their travel type.
* Get limited itinerary details.
* Get the full details of the bookings that they own, but see a limited set of fields and data for other bookings.
* Modify bookings.
* Cancel bookings for their travel type.

### Third-party developers 

* Request trip information for Concur users.
* Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

If you are a TMC or a Concur partner developer who would like to start using this web service, please visit: [http://www.concur.com/en-us/connect-platform/suppliers][3] or contact the Concur Connect Platform Team. Concur products are highly configurable, and not all clients will have access to all features.

## Authentication and authorization

The Itinerary web service uses OAuth 2.0 for authenticating users and authorizing access to travel data.

### Authorization for TMCs

TMCs can request or send travel bookings in two ways:

* By using an OAuth token for the user the travel booking belongs to. This token allows access to the user's data.
* By using an OAuth token for a user with an administrative role at the company, which allows access to company-wide information. The user who authenticates during this OAuth process must have a Concur account with one of the following user roles: **Web Services Administrator** for Professional, or **Can Administer** for Standard.

### Authorization for TripLink suppliers

The travel supplier can request or send travel bookings by using an OAuth token for the user the travel booking belongs to, generated with the user's involvement.

## Configuration

* If you are a TMC, third-party developer, or a TripLink supplier who would like to start using this web service, please visit: [http://www.concur.com/en-us/connect-platform/suppliers][3] or contact the Concur Connect Platform Team.
* Concur products are highly configurable, and not all Concur clients will have access to all features.
* Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="http://forum.developer.concur.com/" target="_blank">Developer Forum</a> if you have questions about the configuration settings.

## FAQs

#### When do I send trips versus bookings?

* TMCs, OTA, or partners that own or manage the entire trip on behalf of the traveler should send trips. 
* Travel suppliers such as hotels, car vendors or airlines that own only parts of the trips should send bookings. 
* Posted bookings are merged with any existing trips if their dates overlap. 
* Posted trips are not merged even if a trip already exists with overlapping dates. 

#### Can other TripLink suppliers see all the booking details of my bookings?

The Itinerary Web service returns the full booking details to the supplier who will provide the booked service. Suppliers that are not the service provider will receive a subset of the possible fields. These vary by the type of booking relative to the type of supplier. For example, Air booking suppliers that are not the supplier will not see the following fields:
* Vendor 
* FlightNumber 
* StartDateLocal 
* StartDateUtc 

#### How can we save additional charges for hotel and car segments? What types of charges are supported?

The Charges element under Car and Hotel segments allow you to save additional charges using Semantics Codes. Refer to the Semantics and Vendor Codes document for more information.

#### What vendor codes can I use when sending hotel and car segments?

Refer to the Semantics and Vendor Codes document for the full list.

#### Can I view a trip posted through the Itinerary Web service in the Concur UI? 

Yes. The user who owns the trip will see the trip on their My Concur page. If the trip is in the future, it will show under the upcoming trip list. Trips that are ready to expense will show in the expense report list.

#### When can a trip be expensed?

Trips can be expensed after the trip is over under the following conditions:

* The trip has a Car, Hotel or Ride segment. 
* The trip has an Air segment with a ticket and the ticket has at least one valid ticket coupon, meaning the coupon is in one of the following statuses: 
* OPEN
* USED
* PRTD
* StartDateUtc

Air segments can be expensed as soon as they have a ticket with a valid coupon, if the company uses the PreExpenseAir option.

#### Why is my new booking not showing in the UI? 

The request returned successfully with HTTP status - 200 OK.
Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates and the booking has been added to it.

#### Will posted bookings be overwritten by emailed or TripIt trips?

No.

#### Will posted bookings merge with existing Cliqbook or TripIt trips?

Yes.

#### Will posted trips merge with existing trips?

No.

## <a name="reference_topics" id="reference_topics">Reference</a>

The Itinerary Reference documentation includes the following reference information that can be used in conjunction with the Trip Resource API and Booking Resource API documentation. It includes the following reference topics:

* [Itinerary Data Model](#itinerary_data_model)
* [Car Vendor Codes](#car_vendor_codes)
* [Hotel Vendor Codes](#hotel_vendor_codes)
* [Ride Vendor Codes](#ride_vendor_codes)
* [Semantics Codes](#semantics_codes)
* [Time Zone Formats](#time_zones)

###  <a name="itinerary_data_model" id="itinerary_data_model">Itinerary data model</a>
[Return to Reference topics](#reference_topics)

The Itinerary data model defines data elements  that are returned or sent when getting, creating, updating, or deleting trips and bookings with the /api/travel/trip/v1.1 and /api/travel/booking/v1.1 resources respectively. 
Trips include all bookings in an itinerary whereas a booking includes only a specific segment of an itinerary.  It includes the following elements:

* [Root elements] (#root_elements)
* [Booking elements](#booking_elements)
* [AirfareQuotes elements](#airfarequotes_elements)
* [Passengers elements](#passengers_elements)
* [AirlineTickets elements](#airlinetickets_elements)
* [Fixed elements](#fixed_elements)
* [AirBooking elements](#airbooking_elements)
* [CarBooking elements](#carbooking_elements)
* [Hotel Booking elements](#hotel_booking_elements)
* [Dining Booking elements](#dining_booking_elements)
* [Ride Booking elements](#ride_booking_elements)
* [Rail Booking elements](#rail_booking_elements)
* [Parking Booking elements](#parking_booking_elements)
* [Travel Booking elements](#travel_booking_elements)

#### <a name="root_elements" id="root_elements">Root elements</a>

| Element Name          | Data Type    | TripLink | Description |
|----------------------|-------------|---------|---------------------------------------------------------------------|
| id                    | String       | Y        | The unique identifier for the trip URI with encrypted ID. Format:    |
| ItineraryInfo         |              | Y        | Parent element with the information about an itinerary for the specified user. Format: (NOTE TO TECH REVIEWERS: This element is not in the xsd but appears in the Get List of Itineraries response example)                                                                                                                 |
| TripId                | String       | Y        | Encrypted trip identifier value.                                     |
| ItinLocator           | String       | Y        | This element is obsolete and is supported only for backward compatibility.|
| BookedVia             | String       |          | The booking method for the trip.|
| BookedByFirstName     | String       | Y        | The first name of the person who booked the trip.|
| BookedByLastName      | String       | Y        | The last name of the person who booked the trip.|
| HasOpenBookingPassive | String       |          |                                                          |
| CancelComments        | String       | Y        | The comments provided if the itinerary is cancelled. Maximum length: 256 characters.  |
| ClientLocator         | String       |          |         |
| TripLinkLocator       | String       |          |                                                 |
| Comments              | String       | Y        | (Description here). Maximum length 512 characters.   |
| DateBookedLocal       | DateTime     | Y        | The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss   |
| DateCreatedUtc        | DateTime     | Y        | The date that this trip was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc       | DateTime     | Y        | The date when this trip was last modified in UTC format. Format: YYYY-MM-DDThh:mm:ss.|
| Description           | String       | Y        | The description for this trip. Maximum length 512 characters. |
| EndDateLocal          | DateTime     | Y        | The end date of the trip in the ending location’s timezone. Format: YYYY-MM-DDThh:mm:ss.|
| EndDateUtc            | DateTime     | Y        | The end date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| TravelRequestId       | String       |          | |
| IsPersonal            | Boolean      | Y        | Indicates whether this trip is for business or for leisure. Format: Business, Leisure  |
| ProjectName           | String       |          | The name of the project assiciated with this trip. Maximum length 255 characters.|
| StartDateLocal        | DateTime     | Y        | The start date of the trip in the starting location’s timezone. Format: YYYY-MM-DDThh:mm:ss. |
| StartDateUtc          | DateTime     | Y        | The date when this trip started in UTC format. Format: YYYY-MM-DDThh:mm:ss. |
| TripName              | String       | Y        | Name of the trip. Maximum length 255 characters.  |
| TripStatus            | unsignedByte | Y        | The status of the trip. This element only appears if the includeCanceledTrips query parameter is used in the request.|
| UserLoginId           |              | Y        | The user's login to Concur. This element appears only when the OAuth token is associated with a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.(NOTE TO TECH REVIEWERS: This element is not in the xsd but appears in the Get List of Itineraries response example)|
| Bookings              | Array        | Y        | An array of bookings that contains a Booking child element for each included booking.|
| Custom Attributes     | Array        |          |    |
| RuleViolations        | Array        | N        | The list of rule violations associated with the itinerary. This parent element contains a RuleViolation child element for each associated rule violation.|

#### <a name="booking_elements" id="booking_elements">Booking elements</a>
The Bookings parent element contains a Booking child element for each included booking. TripLink suppliers have access only to a subset of the Booking elements. The TripLink column indicates with a Y if a specific elment is available for a TripLink supplier. Each booking element contains the following child elements:

| Element  | Data Type | TripLink | Description |
|-----------------------------|-----------|----------|------------------------------------------|
| BookingOwner | String | Y | Specifies the tool that supplied the booking to Concur Travel. The possible values are: ConcurTravel, OpenBookingEmail, AmadeusETravel, ConcurConnectAPI, OpenBookingSupplier and TripIt |
| BookingSource | String | Y | For TMCs: The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. <br/>For TripLink suppliers: The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. This could be a GDS, OTA, Vendor Code for Supplier website or Supplier Direct Connect API <br/>(NOTE TO TECH REVIEWERS: Is the definition for this element different for a TMC vs. a TripLink supplier?) |
| Source |   | Y | This element is obsolete and is supported only for backward compatibility. (NOTE TO TECH REVIEWERS:This element is not in the XSD because it is obsolete. Should we continue to keep this in the documentation? If yes, should we create a separate topic titled "Obsolete Elements" and document it there?) |
| DateBookedLocal | DateTime | Y | The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | DateTime | Y | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | DateTime | Y | The date the booking was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| FareExpiresEmailDatetimeUtc | DateTime |  |   |
| FormOfPaymentName | String |  | The name of the form of payment for the booking. |
| FormOfPaymentType | String |  | The type of the form of payment. |
| LastTicketDateUtc | DateTime |  |   |
| PassengerCount | Int |  | The total count of passengers for the booking. |
| RecordLocator | String | Y | The unique identifier for the booking |
| RetrievedDateUtc |   |  |   |
| TicketMailingAddress |   |  | The mailing address for the booked ticket, if available. |
| TicketPickupLocation |   |  | The pickup location for the booked ticket, if available |
| TicketPickupNumber |   |  | The confirmation number to pick up the booked ticket, if available. |
| AirfareQuotes | Array |  | List of stored airfare quotes for this booking. For more information, see the **AirFareQuotes elements** table. |
| ItinSourceName | String |  | The itinerary source. Format: TravelSupplier (NOTE TO TECH REVIEWERS: This element is not in the xsd but appears in the Post booking details request for TMCs example) |
| AirlineTickets | Array |  | List of airline tickets for this booking. For more information, see the **AirLine Tickets elements** table. |
| Charges | Array |  | The charges for this booking. For more information, see the **Charges elements** table later on this page.  |
| MiscChargeOrders | Array |  | An array of miscellaneous charge orders for this booking. This parent element has a **MiscellaneousChargeOrders** child element for each miscellaneous charge order associated with this booking. For information about the child elements, see the **MiscellaneousChargeOrders elements** table later on this page. |
| Passengers | Array | Y | This parent element contains a **Passenger** child element for each booked passenger. See the **Passengers elements** table for more information about the child elements. |
| PassPrograms |   |  | List of Pass Programs for this booking. This parent element has a **PassProgram** child element for each pass program associated with the booking. For information about the child elements, see the **PassProgram elements** table later on this page. |
| PhoneNumbers |   |  | List of Phone numbers associated with this booking.  This parent element has a **PhoneNumberData** child element for each phone number associated with the booking. For information about the child elements, see the **PhoneNumberData elements** table later on this page.  |
| RailPayments | Array |  | List of Rail payments associated with rail segments in this booking. For information about the child elements in the array, see the **RailPayments elements** table later on this page. |
| Segments |   | Y | List of Segments in this booking. This parent element contains one or more Air, Car, Hotel, Dining, Ride, Rail, Parking, or Travel parent elements for the booking. The segments are described in the tables below, see **Air Booking elements**, **Car Booking elements**, **Hotel Booking elements**, **Dining Booking elements**, **Ride Booking elements**, **Parking Booking elements**, and **Travel Booking elements**. |
| Delivery | String |  | The method this booking was delivered.  |
| WaitListSegments |   |  | The segments that the traveler is waitlisted for this booking. |
| Warnings |   |  | The warnings associated with the booking. |
| WebAddresses |   |  | List of web addresses such as emails and pickup URLs associated with this booking. |

##### MiscellaneousChargeOrder elements

| Element Name | Data Type | TripLink | Description | 
|---------------------------|-----------|----------|------------------|
| DateCreatedUtc | dateTime |  | The date the charge order was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the charge order was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| IssueDate  | dateTime |  | The date the charge order was issued. Format: YYYY-MM-DDThh:mm:ss |  
| PlatingCarrierNumericCode | string |  | Part of the ticket number that indicates the airline code. This is a three digit number. For example: 001=American, 005=Continental, 006=Delta, 012=Northwest |  
| PlatingControlNumber | string |  | Part of the ticket number that indicates the ticket control number. Format: Ten digit number. |  
| TotalAmount | decimal |  | The total amount of charge orders for the ticket. |  
| TotalAmountCurrency | string |  | The [3-letter ISO 4217 currency code][1] for the total charge order amount. |  

##### PassProgram elements

| Element Name | Data Type | TripLink | Description |
|---------------------|-----------|----------|----------------------------------|
| Amount   | decimal |  | The program amount. |
| Name     | string |  | The program name. |
| Type   | string |  | The program type. |
| UserFirstName    | string |  | The first name of the passenger. |
| UserLastName    | string |  | The last name of the passenger. |

##### PhoneNumberData elements

| Element Name | Data Type | TripLink | Description |
|----------------------|-----------|----------|--------------------------------------------|
| PassengerRPH     | integer |  | Indicates the passenger to whom this phone number belongs. |
| PhoneNumber  | string |  | The passenger's phone number. |
| Type   | string |  | The type of phone number. |
| Description     | string |  | The description for the phone number. |

##### RailPayments elements

| Element Name | Data Type | TripLink | Description |
|----------------|-----------|----------|-------------------------------------------|
| RailAdjustment | Type |  |  The amount adjusted for a rail booking. For information about the RailAdjustment child elements, see the **RailAdjustment elements** table later on this page. |
| RailPayment | Type |  |  The payment information for a rail booking. For information about the RailPayment child elements, see the **RailPayment elements** table later on this page. |

##### RailAdjustment elements

| Element Name | Data Type | TripLink | Description |
|-------------------|-----------|----------|------------------------------|
| AdjustmentDateTime  | dateTime |  |   |
| AdjustmentDateTimeUTC   | dateTime |  |   |
| AdjustmentType     | string |  |   |
| DateCreatedUtc    | dateTime |  |   |
| DateModifiedUtc    | dateTime |  |   |
| TicketDocumentIdentifier   | string |  |   |
| TotalAdjustment    | decimal |  |   |
| TotalAdjustmentCurrency  | string |  |   |
| Taxes         | Array |  | This parent element contains a Tax child element for each rail adjustment tax. For more information, see the **Tax elements** table later on this page. |

##### RailPayment elements

| Element Name | Data Type | TripLink | Description |
|------------------|-----------|----------|-------------------------|
| BaseFare   | decimal |  | The base fare of the booking quote. |
| BaseFareCurrency   | string |  | The [3-letter ISO 4217 currency code][1] for the total fare. |
| DateCreatedUtc   | dateTime |  | The date the quote was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc    | dateTime |  | The date the quote was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| IssueByDate  | dateTime |  | The date the quote must be issued by. Format: YYYY-MM-DDThh:mm:ss |
| IssueDateTime   | dateTime |  |   |
| IssueDateTimeUTC  | dateTime |  |   |
| TicketDocumentIdentifier     | string |  |   |
| TicketType   | string |  |   |
| TotalFare  | decimal |  | The total price of the booking. |
| TotalFareCurrency   | string |  | The [3-letter ISO 4217 currency code][1] for the total fare. |
| RailCharges      | array |  | The charges applied by the airline. This parent element contains a **Fixed** and a **Tax** child element for each fixed charge and tax from the airline. See the **Fixed elements** table and the **Tax elements** table. |

#### <a name="airfarequotes_elements" id="airfarequotes_elements">AirfareQuotes elements</a>

The AirfareQuotes parent element is an array that contains a Quote child element that contains the following child elements.

| Element Name | Data Type | TripLink | Description |
|---------------------|-----------|----------|-----------------|
| BaseFare | Decimal |  |   |
| BaseFareCurrency | String |  |   |
| BaseFareNuc | Decimal |  |   |
| BaseFareNucCurrency | String |  |   |
| DateCreatedUtc | DateTime |  |   |
| DateModifiedUtc | DateTime |  |   |
| Endorsements | String |  |   |
| IssueByDate | DateTime |  |   |
| TotalFare | Decimal |  |   |
| TotalFareCurrency | String |  |   |
| AirlineCharges | Array |  | This parent element contains a **Fixed** and a **Percent** child element for each fixed charge and percent of fixed charge associated with this airfare quote. For information about these child elements, see the **Fixed elements** table and the **Percent elements** table later on this page. |

#### <a name="passengers_elements" id="passengers_elements">Passengers elements</a>

The passenger parent element is the Passengers Element in Booking Elements. This parent element contains a Passenger child element for each booked passenger.

| Element Name | Data Type | Required/Optional | TripLink | Description |
|-------------------|-----------|-------------------|----------|---------------------------|
| NameFirst | String | required | Y | The first name of the passenger.  |
| NameLast | String | required | Y | The last name of the passenger. |
| NameMiddle | String | optional | Y | The middle name of the passenger.  |
| NamePrefix | String | optional | Y | The name prefix of the passenger. |
| NameRemark | String | optional | Y | Additional details about the passenger's name. |
| NameSuffix | String | optional | Y | The name suffix of the passenger.  |
| NameTitle | String | optional | Y | The title of the passenger.  |
| TextName | String | optional | Y | The user's full name as entered in the booking tool if different from the name in the database. |
| FrequentTravelerProgram | String | optional | Y | Passenger's loyalty programs |

#### <a name="airlinetickets_elements" id="airlinetickets_elements">AirlineTickets elements</a>

The AirLineTickets parent element is an array that contains the following child elements.

| Element Name | Data Type | TripLink | Description |
|---------------------|-----------|----------|--------------------------------------------|
| AirlineAdjustmentType | Type |  | Any adjustment made to the booking. For information about the child elements of AirlineAdjustmentType, see the **AirlineAdjustmentType elements** table later on this page. |
| ManualAirlineTicket | Type |  | The manual airline ticket for the booking. For information about the child elements of ManualAirlineTicket, see the **ManualAirlineTicket elements** table later on this page. |
| AirlineTicket | Type |  | The airline ticket for the booking. For information about the child elements of AirlineTicket, see the **AirlineTicket elements** table later on this page. |

##### AirlineAdjustmentType elements

| Element Name | Data Type | TripLink | Description |
|----------------------|-----------|----------|-------------|
| AddCollectAmount    | decimal |  |   |
| AdjustmentDateTime    | dateTime |  |   |
| AdjustmentDateTimeUTC  | dateTime |  |   |
| AdjustmentType   | String |  |   |
| DateCreatedUtc   | dateTime |  |   |
| DateModifiedUtc   | dateTime |  |   |
| PassengerName   | string |  |   |
| PlatingCarrierNumericCode    | string |  |   |
| PlatingControlNumber    | string |  |   |
| RecordLocator   | string |  |   |
| TotalAdjustment   | decimal |  |   |
| TotalAdjustmentCurrency    | string |  |   |
| Taxes | Array |  |   |

##### ManualAirlineTicket elements

| Element Name | Data Type | TripLink | Description |
|------------------|-----------|----------|------------------------|
| BaseFare   | decimal |  |   |
| BaseFareCurrency  | string |  |   |
| DateCreatedUtc  | dateTime |  |   |
| DateModifiedUtc  | dateTime |  |   |
| TotalFareTotalFareCurrency   | decimal |  |   |
| AirlineCharges  | array |  | The charges applied by the airline. This parent element contains a **Fixed** and a **Tax** child element for each fixed charge and tax from the airline. For information about these child elements, see the **Fixed elements** table and the **Tax elements** table later on this page. |

##### AirlineTicket elements

| Element Name | Data Type | TripLink | Description |
|-----------------------|-----------|----------|----------------------|
| AddCollectAmount | decimal |  |   |
| AccountingLine   | string |  |   |
| BaseFare  | decimal |  |   |
| BaseFareCurrency   | string |  |   |
| BaseFareNuc   | decimal |  |   |
| BaseFareNucCurrency   | string |  |   |
| DateCreatedUtc    | dateTime |  |   |
| DateModifiedUtc  |  dateTime |  |   |
| Endorsements   | string |  |   |
| InvoiceNumber    | string |  |   |
| IssueDateTime      |  dateTime |  |   |
| IssueDateTimeUTC       |  dateTime |  |   |
| IssuingIataAgencyNumber   | integer |  |   |
| IssuingPseudoCity   | string |  |   |
| LinearFareConstructor    | string |  |   |
| MasterTicketNumber  | string |  |   |
| NameReference   | string |  |   |
| PassengerName  | string |  |   |
| PlatingCarrierNumericCode    | string |  |   |
| PlatingControlNumber    | string |  |   |
| ProgramCarrierCode   | string |  |   |
| ProgramMembershipNumber  | string |  |   |
| RecordLocator      string | string |  |   |
| SabreDkNumber      string | string |  |   |
| Ticketless     | boolean |  |   |
| TicketType     | string |  |   |
| TotalFare    | decimal |  |   |
| TotalFareCurrency    | string |  |   |
| TourIdentifier     | string |  |   |
| AirlineCharges    | array |  | A list of airline charges for this ticket. This parent element contains a **Fixed** child element for each fixed charge from the airline. For information about these child elements, see the **Fixed elements** table later on this page. |
| AirlineTicketCoupons  | array |  | A list of coupons for this ticket. This parent element has an **AirlineTicketCoupon** child element for each coupon associated with this airline ticket. For information about these child elements, see the **AirlineTicketCoupon elements** table later on this page. |
| AirlineTicketExchanges  | array |  | A list of exchanges for this ticket. This parent element has an **AirlineTicketExchange** child element for each exchange associated with this airline ticket. For information about these child elements, see the **AirlineTicketExchange elements** table later on this page.|
| AirlineTicketFareBreakups  | array |  | A list of fare breakups for this ticket. This parent element has an **AirlineTicketFareBreakup** child element for each fare breakup associated with this airline ticket. For information about these child elements, see the **AirlineTicketFareBreakup elements** table later on this page. |

###### AirlineTicketCoupons elements

| Element Name | Data Type | TripLink | Description |
|------------------|--------------|----------|-------------|
| ClassOfService    | string |  |   |
| CouponNumber   | unsignedByte |  |   |
| CouponStatus  | string |  |   |
| EndCityCode   | string |  |   |
| FlightNumber   | string |  |   |
| NotValidAfterDate   |  dateTime |  |   |
| NotValidBeforeDate  | dateTime |  |   |
| RateCode   | string |  |   |
| StartCityCode  | sring |  |   |
| StartDateLocal   |  dateTime |  |   |
| Status    | string |  |   |
| TicketDesignator   | string |  |  |
| Vendor    | string |  |   |

###### AirlineTicketExchanges elements

| Element Name | Data Type | TripLink | Description |
|----------------|--------------|----------|-----------------|
| Amount     | decimal |  |   |
| AppliedSegment1  | unsignedByte |  |   |
| AppliedSegment10   | unsignedByte |  |   |
| AppliedSegment2   | unsignedByte |  |   |
| AppliedSegment3    | unsignedByte |  |   |
| AppliedSegment4   | unsignedByte |  |   |
| AppliedSegment5    | unsignedByte |  |   |
| AppliedSegment6  | unsignedByte |  |   |
| AppliedSegment7   | unsignedByte |  |   |
| AppliedSegment8 | unsignedByte |  |   |
| AppliedSegment9   | unsignedByte |  |   |
| Currency   | string |  |   |
| OldRecordLocator   | string |   |   |
| DateModifiedUtc   | dateTime |   |   |
| PlatingCarrierNumericCode  | string |   |   |
| PlatingControlNumber   | string |   |   |

###### AirlineTicketFareBreakups elements

| Element Name | Data Type | TripLink | Description |
|-----------------|-----------|----------|------------------------------|
| BaseFare   | decimal |  |   |
| BaseFareCurrency   | sring |  |   |
| DateCreatedUtc   | dateTime |  |   |
| DateModifiedUtc    | dateTime |  |   |
| IssueByDate  | dateTime |  |   |
| IssueDateTime   | dateTime |   |   |
| IssueDateTimeUTC  | dateTime |  |   |
| TicketDocumentIdentifier     | string |  |   |
| TicketType   | string |  |   |
| TotalFare  | decimal |  |   |
| TotalFareCurrency   | string |  |   |
| Taxes   | array |  | The charges applied by the airline. This parent element contains a **Fixed** and a **Tax** child element for each fixed charge and tax from the airline. For more information, see the **Fixed elements** table and the **Tax elements** table later on this page. |

##### <a name="fixed_elements" id="fixed_elements">Fixed elements</a>

The Fixed element contains the following child elements.

| Element Name | Data Type | TripLink | Description |
|------------------|-----------|----------|--------------------------------|
| Amount | Decimal |  | The total amount for the rate for the booking.  |
| Currency | String |  | The [3-letter ISO 4217 currency code][1] for the total amount. |
| Description | String |  | The description for the rate.  |
| IsPaid | Boolean |  | Whether the rate has been paid. Format: true/false. |
| IsPrimary | Boolean |  | Indicates whether the charge is the Primary or  Main rate. For example, if one of the rates is the actual rate and the  rest are penalties, the actual rate should be set as IsPrimary. Only one charge  in a set should be primary. Format: true/false. |
| SemanticsCode | String |  | Indicates the charge category for the line item. Refer to the [Semantics Codes][3] table for more information.  |
| SemanticsVendorType | String |  | The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
| StartDateLocal | DateTime |  | The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | String |  |  The vendor for the booking charge. |
| VendorChargeCode | String |  | The vendor's code for the charge |

##### Tax elements

This Tax element contains the following child elements.

| Element Name | Data Type | TripLink | Description |
|--------------|-----------|----------|------------------------|
| TaxAmount | Decimal |  | The amount of the tax. |
| TaxType | String |  | The type of the tax. |

##### Percent elements

The percent of fixed charges. This parent element contains the following child elements:

| Element  | Data Type | TripLink | Description |
|---------------------|-----------|----------|-----------------------------|
| Amount | Decimal |  | The total amount for the rate for the booking.  |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the total amount. |
| Description | sring |  | The description for the rate.  |
| IsPaid | boolean |  | Whether the rate has been paid. Format: true/false. |
| IsPrimary | boolean |  | Indicates whether the charge is the Primary or  Main rate. For example, if one of the rates is the actual rate and the  rest are penalties, the actual rate should be set as IsPrimary. Only one charge  in a set should be primary. Format: true/false. |
| SemanticsCode | string |  | Indicates the charge category for the line item. Refer to the [Semantics Codes][3] table for more information.  |
| SemanticsVendorType | string |  | The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
| StartDateLocal | dateTime |  | The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  |  The vendor for the booking charge. |
| VendorChargeCode | string |  | The vendor's code for the charge |

##### CustomAttributes elements

The CustomAttributes parent element contains a CustomAttribute child element with the following child elements.

| Element Name | Data Type | TripLink | Description |
|--------------------|-----------|----------|-------------|
| Data | String |  |   |
| DisplayTitle | String |  |   |
| DisplayValue | String |  |   |
| Name | String |  |   |
| DataType | String |  |   |
| DisplayOnItinerary | Boolean |  |   |
| ExternalId | Int |  |   |

##### RuleViolations elements

The RuleViolations element contains a list of rule violations associated with the itinerary. This parent element contains a RuleViolation child element for each associated rule violation. The RuleViolation element has the following child elements:

| Element Name | Data Type | TripLink | Description |
|-------------------------|-----------|----------|-------------|
| BestGdsPrice | Decimal |  |   |
| BestGdsVendor | String |  |   |
| BestInternetPrice | Decimal |  |   |
| BestInternetVendor | String |  |   |
| CompanyReasonCode | String |  |   |
| CompanyRuleText | String |  |   |
| Currency | String |  |   |
| DateEntered | DateTime |  |   |
| EndCity | String |  |   |
| EndDate | DateTime |  |   |
| NumberOfStops | Int |  |   |
| QuotedPrice | Decimal |  |   |
| RuleAction | String |  |   |
| RuleName | String |  |   |
| SegmentType | String |  |   |
| SelectedOtherAmount | Decimal |  |   |
| SelectedOtherAmountType | String |  |   |
| StartCity | String |  |   |
| StartDate | DateTime |  |   |
| TariffPrice | Decimal |  |   |
| TravelerComments | String |  |   |
| VendorCode | String |  |   |
| VendorName | String |  |   |

#### <a name="airbooking_elements" id="airbooking_elements">AirBooking elements</a>

The Air Booking parent element is the Air Element in the Segments Array in Booking Elements. This parent element contains an Air Booking child element for each booked flight.

| Element  | Data Type | TripLink | Description |
|--------------------|----------------|----------|------------------------------|
| ClassOfService | string |  | The class of the booking. |
| ConfirmationNumber | string |  | The record locator or confirmation number for the flight from the airline.  |
| EndCityCode | string | Y | The [IATA airport code][2] for the end city of the booking.  |
| EndDateLocal | dateTime | Y | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss. <br/>For  TripLink suppliers: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| FlightNumber | string | Y | The flight number for the booking.  |
| StartCityCode | string | Y | The [IATA airport code][2] for the starting address for the booking.  |
| StartDateLocal | dateTime | Y | The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss. <br/>For TripLink suppliers: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| Vendor | string | Y |   |
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| CancellationPolicy | string |  | The cancellation policy from the vendor.  |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table later on this page. |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndDateUtc | dateTime | Y | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss. <br/>For TripLink suppliers: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| EndGate | string | Y | The arrival gate for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| EndTerminal | string | Y | The arrival terminal for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| LegId | string |  | The leg ID of the booking. Leg IDs do not change on a connection. For each  unique leg ID in the trip, all flights subsequent to the first segment with the  same leg ID are connections. |
| Seats | Parent Element |  | The seats for the booking. This parent element contains an AirSeat element for each included seat. For more information, see the **AirSeat elements** table later on this page. |
| StartDateUtc | dateTime | Y | The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss. <br/>For  TripLink suppliers:The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| StartGate | string | Y | The departure gate for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| StartTerminal | string | Y | The departure terminal for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| Status | string |  | The  GDS based booking status for the segment such as HK, HL, BK, etc. |
| TimeZone | string | Y | The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. (need link; may need to create a separate page to store the time zone formats.)  |
| Element  | Data Type |  | Description |
| AircraftCode | string |  | The code for the aircraft type. |
| Bags | string |  | The number of bags included in the booking.  |
| Cabin | string |  | The section of the airplane for the booking.  |
| CarbonEmissionLbs | decimal |  | The pounds of carbon emission for this booking.  |
| CarbonModel | integer |  | The model used to calculate the carbon emissions.  |
| CheckedBaggage | string |  | Whether the booking includes checked baggage.  |
| Duration | integer |  | The duration of the booked flight.  |
| ETicket | string |  | Whether the booking has an  e-ticket. Format: Y/N  |
| IsOpenSegment | boolean |  | Whether the segment is open. Format: True/False  |
| IsPreferredVendor | integer |  | If the airline is marked as a preferred property by the company. Format: True/False  |
| IsUpgradeAllowed | boolean |  | Whether the booking can be upgraded. Format: True/False  |
| Meals | string |  | The meals included in the booking.  |
| Miles | integer |  | The number of miles included in the booking.  |
| Notes | string |  | Additional details about the booking.  |
| OpenSegment | string |  | Additional information about the open segment.  |
| OperatedByFlightNumber | string |  | Flight Number provided by the airline operating the flight on behalf of the booked airline.  |
| OperatedByVendor | sring |  | The airline operating the flight on behalf of the booked airline. |
| OperatedByVendorName | string |  | The name of the airline operating the flight on behalf of the booked airline. |
| Services | string |  | The services included in the booking.  |
| SpecialInstructions | string |  | Additional instructions regarding the booking.  Max Length: 256 |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |

##### AirSeat elements

| Element | Data Type | Description |
|--------------|-----------|---------------------------|
| PassengerRph | integer | The passenger assigned to the seat. |
| SeatNumber | string | The number of the seat. |

#### <a name="carbooking_elements" id="carbooking_elements">CarBooking elements</a>

The Car Booking parent element is the Car Element in the Segments Array in Booking Elements. This parent element contains a Car Booking child element for each booked car.

| Element  | Data Type | TripLink | Description |
|--------------------|----------------|----------|-----------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| EndDateLocal | dateTime | Y | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| StartDateLocal | dateTime | Y | The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  | The two letter GDS vendor code. See the [Car Vendor Codes][3] table for  car vendor codes. (need link)|
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| CancellationPolicy | string |  | The cancellation policy from the vendor. |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table. |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the booking. |
| DailyRate | decimal |  | The daily rate for the booking.  |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndCityCode | string | Y | The [IATA airport code][2] for the ending address for the booking.  |
| EndDateUtc | dateTime | Y | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndLatitude | string |  | The latitude for the ending location of the booking.  |
| EndLongitude | string |  | The longitude for the ending location of the booking.  |
| Notes | string |  | Additional information about the booking. |
| PhoneNumber | string |  | The phone number for the user.  |
| RateCode | string |  | The rate code for the booking.  |
| StartCityCode | string | Y | The [IATA airport code][2] for the starting address for the booking.  |
| StartDateUtc | dateTime | Y | The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| StartLatitude | string |  | The latitude for the starting location of the booking.  |
| StartLongitude | string |  | The longitude for the starting location of the booking.  |
| Status | string |  | The booking  status.  |
| TimeZone | string | Y | The time zone of the booking. Format: One of the supported Olson or Windows  Time Zones.  |
| TotalRate | decimal |  | The total rate amount of the booking.  |
| VendorName | string |  | The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.  |
| AirCondition | string |  | The character code that indicates if car has air conditioner. R for AC, N for No AC |
| Body | string |  | The character code to indicate how many passengers the car can seat. B for 2-door, D for 4-door, F for Four-wheel drive, J for All Terrain, K for truck, L for Limo, P for pick-up, R for recreation, S for Sport, T for Convertible, V for Van, W for Wagon/Estate, X for special. |
| Class | string |  | Character code to indicate the class of the car e.g. if it is economy, full size, compact, etc. Varies by Vendor. C for compact, E for economy, F for full size, I for Intermediate, L for Luxury, M for Mini, P for Premium, S for Standard, X for special. |
| DiscountCode | string |  | The discount code used by the company/TMC to get a discounted rate. |
| DropoffCollectionAddress1 | string |  | The AddressLine1 for the dropoff address when the rental service offers dropoff. |
| DropoffCollectionAddressType | string |  |   |
| DropoffCollectionCategory | string |  |   |
| DropoffCollectionCity | string |  | City for the dropoff address when the rental service offers dropoff. |
| DropoffCollectionCityCode | string |  | The [IATA airport code][2] for the  dropoff address when the rental service offers dropoff. |
| DropoffCollectionCountry | string |  | The country for the dropoff address when the rental service offers dropoff. |
| DropoffCollectionLatitude | string |  | The latitude for the dropoff address when the rental service offers dropoff. |
| DropoffCollectionLongitude | string |  | The longitude for the dropoff address when the rental service offers dropoff. |
| DropoffCollectionNumber | string |  |   |
| DropoffCollectionPhoneNumber | string |  | The phone number for the dropoff address when the rental service offers dropoff. |
| DropoffCollectionPostalCode | string |  | The postal code for the dropoff address when the rental service offers dropoff. |
| DropoffCollectionState | string |  | The state for the dropoff address when the rental service offers dropoff. |
| EndAddress | string |  | The ending address for the booking.  |
| EndAddress2 | string |  | The ending address for the booking.  |
| EndCity | string | Y | The ending address for the booking.  |
| EndCloseTime | string |  | The closing time for the dropoff location.  |
| EndCountry | string | Y | The ending address for the booking.  |
| EndLocation | string |  | The dropoff location.  |
| EndOpenTime | string |  | The opening time of the dropoff location.  |
| EndPhoneNumber | string |  | The phone number of the dropoff location.  |
| EndPostalCode | string |  | The ending address for the booking. |
| EndState | string | Y | The ending address for the booking. |
| FrequentTravelerId | string |  | The loyalty program ID for the user.  |
| IsUpgradeAllowed | boolean |  | Whether the booking can be upgraded. Format: True/False  |
| NumCars | unsignedByte |  | The number of cars rented. |
| NumPersons | unsignedByte |  | The number of people including the driver that the rental is for.  |
| PickupDeliveryAddress1 | string |  | The AddressLine1 for the pickup address when the rental service offers pickup. |
| PickupDeliveryAddressType | string |  |   |
| PickupDeliveryCategory | string |  |   |
| PickupDeliveryCity | string |  | The city for the pickup address when the rental service offers pickup. |
| PickupDeliveryCityCode | string |  | The [IATA airport code][2] for the pickup address when the rental service offers pickup. |
| PickupDeliveryCountry | string |  | The country for the pickup address when the rental service offers pickup. |
| PickupDeliveryLatitude | string |  | The latitude for the pickup address when the rental service offers pickup. |
| PickupDeliveryLongitude | string |  | The longitude for the pickup address when the rental service offers pickup. |
| PickupDeliveryNumber | string |  |   |
| PickupDeliveryPhoneNumber | string |  | The phone number for the pickup address when the rental service offers pickup. |
| PickupDeliveryPostalCode | string |  | The postal code for the pickup address when the rental service offers pickup. |
| PickupDeliveryState | string |  | The state for the pickup address when the rental service offers pickup. |
| RateType | string |  | The rate type for the booking.  |
| SpecialEquipment | string |  | Any special equipment required by the renter.  |
| SpecialInstructions | string |  | Additional instructions regarding the booking. Max Length: 256 |
| StartAddress | string |  | The starting address of the booking.  |
| StartAddress2 | string |  | The starting address for the booking.  |
| StartCity | string | Y | The starting address for the booking.  |
| StartCloseTime | string |  | The closing time for the pickup location.  |
| StartCountry | string | Y | The starting address for the booking.  |
| StartLocation | string |  | The starting location of the booking.  |
| StartOpenTime | string |  | The opening time for the pickup location.  |
| StartPostalCode | string |  | The starting address for the booking. |
| StartState | string | Y | The starting address for the booking. |
| Transmission | string |  | The character code that indicates if the car has auto-transmission. A for Auto, M for Manual |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |

#### <a name="hotel_booking_elements" id="hotel_booking_elements">Hotel Booking elements</a>

The Hotel Booking parent element is the Hotel Element in the Segments Array in Booking Elements. This parent element contains a Hotel Booking child element for each booked hotel.

| Element  | Data Type | TripLink | Description |
|--------------------|----------------|----------|---------------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| EndDateLocal | dateTime | Y | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| Name | string |  | The hotel name for the booking.  |
| StartCityCode | string | Y | The [IATA airport code][2] for the starting address for the booking.  |
| StartDateLocal | dateTime | Y | The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| Status | string | Y | The booking  status.  |
| Vendor | string |  | The two letter GDS vendor code. See the Hotel Codes table for  hotel vendor codes. (need link)|
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| CancellationPolicy | string |  | The cancellation policy from the vendor. |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table. |
| CheckinTime | string |  | The check in time for the hotel booking.  |
| CheckoutTime | string |  | The check out time for the hotel booking.  |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the booking. |
| DailyRate | decimal |  | Average per day rate for the hotel. If the rate varies over the duration, it can be specified using the charges model. |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime | Y | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime | Y | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndDateUtc | dateTime | Y | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| HotelPropertyId | string |  | The hotel's property ID.  |
| Notes | string |  | Additional information about the booking.  |
| NumPersons | unsignedByte |  | The number of people the booking is for.  |
| NumRooms | unsignedByte |  | The number of rooms the booking is for.  |
| PhoneNumber | string |  | The phone number for the booking.  |
| RateCode | string |  | The rate code for the booking.  |
| RoomDescription | string |  | The room description for the booking.  Max Length: 200  |
| RoomType | string |  | The room type for the booking.  |
| SpecialInstructions | string |  | Additional instructions regarding the booking. Max Length: 256 |
| StartAddress | string |  | The starting address of the booking.  |
| StartAddress2 | string |  | The starting address for the booking.  |
| StartCity | string | Y | The starting address for the booking.  |
| StartCountry | string | Y | The starting address for the booking.  |
| StartLatitude | string |  | The latitude for the starting location of the booking.  |
| StartLongitude | string |  | The longitude for the starting location of the booking.  |
| StartPostalCode | string |  | The starting address for the booking. |
| StartState | string |  | The starting address for the booking. |
| StartDateUtc | dateTime | Y | The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| TimeZone | string | Y | The time zone of the booking. Format: One of the supported Olson or Windows  Time Zones.  |
| TotalRate | string |  | The total rate amount of the booking.  |
| EndCityCode | string |  | The [IATA airport code][2] for the ending address for the booking.  |
| DiscountCode | string |  | The discount code for the booking.  |
| FrequentTravelerId | string |  | The traveler’s ID for the frequent traveler reward program. |
| HadDeposit | boolean |  | Whether the booking had a deposit. Format: true/false  |
| IsUpgradeAllowed | boolean |  | Whether the booking can be upgraded. Format: true/false  |
| ModificationCode | string |  | The code for the modification to the booking.  |
| PartnerMembershipId | string |  | The membership ID of the partner associated with the booking.  |
| PassiveType | string |  | The type of the booking.  |
| RateAccess | string |  | The rate access for the booking.  |
| RateType | string |  | The rate type for the booking.  |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
| VendorFlags | string |  | Semi-colon-delimited list of flags for free hotel service flags. E.g. free breakfast (FB), internet (FI), Parking (FP), etc. If they were all present they can be concatenated as - FB;FI;FP;  |
| VendorName | string |  | The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.  |

#### <a name="dining_booking_elements" id="dining_booking_elements">Dining Booking elements</a>

The Dining Booking parent element is the Dining Element in the Segments Array in Booking Elements. This parent element contains a Dining Booking child element for each booked meal.

| Element  | Date Time | TripLink | Description |
|--------------------|----------------|----------|---------------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table later on this page.  |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndDateLocal | dateTime |  | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| EndDateUtc | dateTime |  | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| FrequentTravelerId | string |  | The loyalty program ID for the user.  |
| IsUpgradeAllowed | boolean |  | Whether the booking can be upgraded. Format: true/false  |
| Name | string |  | The name of the restaurant. Maximum length: 80  |
| Notes | string |  | Additional information about the booking. |
| NumPersons | unsignedByte |  | The number of persons for the booking. |
| PhoneNumber | string |  | The restaurant phone number. |
| RestaurantId | string |  | The booking vendor’s restaurant ID. Maximum length: 50  |
| StartAddress | string |  | The restaurant address. Maximum length: 80  |
| StartAddress2 | string |  | The restaurant address. Maximum length: 80  |
| StartCity | string |  | The restaurant address. Maximum length: 50 |
| StartCountry | string |  | The restaurant address. |
| StartDateLocal | dateTime |  | The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| StartDateUtc | dateTime |  | The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| StartLatitude | string |  | The latitude of the restaurant. |
| StartLongitude | string |  | The longitude of the restaurant. |
| StartPostalCode | string |  | The restaurant address. Maximum length: 24  |
| StartState | string |  | The restaurant address. Maximum length: 50  |
| Status | string |  | The status of the segment.  |
| TimeZone | string |  | The time zone of the booking. Format: One of the supported Olson or Windows  Time Zones.  |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  | The two letter GDS vendor code. |
| VendorName | string |  | The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.  |

#### <a name="ride_booking_elements" id="ride_booking_elements">Ride Booking elements</a>

The Ride Booking parent element is the Ride Element in the Segments Array in Booking Elements. This parent element contains a Ride Booking child element for each booked ride.

| Element  | Data Type | TripLink | Description |
|---------------------|-----------|----------|------------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| EndCityCode | string |  | The ending [IATA airport code][2] of the booking. |
| StartCityCode | string |  | The starting [IATA airport code][2] of the booking. |
| Vendor | string |  | The two letter GDS vendor code. See the Ride Codes table (need link; can we insert the "two-letter GDS vendor code" table from the Booking Object Elements - TMCs and Third-party Developers page?) for  ride vendor codes. For an unknown vendor, use the code value $$. |
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| CancellationPolicy | string |  | The cancellation policy from the vendor.  |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the booking. |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DropoffInstructions | string |  | Instructions regarding the booking. |
| Duration | integer |  | The duration of the booking.  |
| EndAddress | string |  | The ending address of the booking. |
| EndAddress2 | string |  | The ending address of the booking. |
| EndCity | string |  | The ending address of the booking. |
| EndCountry | string |  | The ending address of the booking. |
| EndDateLocal | dateTime |  | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| EndDateUtc | dateTime |  | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndLatitude | string |  | The latitude for the ending location of the booking.  |
| EndLocation | string |  | The ending location of the booking.  |
| EndLocationCode | string |  | The ending location code of the booking.  |
| EndLocationName | string |  | The ending location name of the booking.  |
| EndLongitude | string |  | The longitude of the ending point of the booking.  |
| EndPostalCode | string |  | The ending address of the booking. |
| EndState | string |  | The ending address of the booking. |
| IsPersonal | boolean |  | Whether the segment is for personal travel. Format: true/false.  |
| IsUpgradeAllowed | boolean |  | Whether the booking can be upgraded. Format: true/false  |
| MeetingInstructions | string |  | The instructions for the meeting location of the booking.  |
| Miles | integer |  | The number of miles for the booking.  |
| Name | string |  | The name on the booking.  |
| Notes | string |  | Additional information about the booking.  |
| NumberOfHours | double |  | The number of hours of the booking.  |
| NumPersons | unsignedByte |  | The number of people included in the booking.  |
| OperatedByVendor | string |  | The operated by vendor for the booking.  |
| PassiveCityCode | string |  | The passive city code of the booking.  |
| PhoneNumber | string |  | The ride vendor phone number. |
| PickupInstructions | string |  | Instructions regarding the booking. |
| Rate | string |  | The rate for the booking.  |
| RateDescription | string |  | The rate description for the booking.  |
| RateNotes | string |  | The rate notes for the booking.  |
| RateType | string |  | The rate type for the booking.  |
| ReservationId | string |  | The booking vendor’s reservation ID. |
| SpecialInstructions | string |  | The special instructions for the ride. Max Length: 256 |
| StartAddress | string |  | The starting address of the booking. |
| StartAddress2 | string |  | The starting address of the booking. |
| StartCity | string |  | The starting address of the booking. |
| StartCountry | string |  | The starting address of the booking. |
| StartDateLocal | dateTime |  | The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| StartDateUtc | dateTime |  | The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| StartLatitude | string |  | The latitude of the booking start location. |
| StartLocation | string |  | The starting location of the booking. |
| StartLocationCode | string |  | The code of the starting location of the booking.  |
| StartLocationName | string |  | The name of the starting location of the booking. |
| StartLongitude | string |  | The longitude of the booking start location. |
| StartPostalCode | string |  | The starting address of the booking. |
| StartState | string |  | The starting address of the booking. |
| Status | string |  | The status of the segment.  |
| TimeZone | string |  | The time zone of the booking. Format: One of the supported Olson or Windows  Time Zones.  |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
| VendorName | string |  | The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.  |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table.  |

#### <a name="rail_booking_elements" id="rail_booking_elements">Rail Booking elements</a>

The Rail Booking parent element is the Rail Element in the Segments Array in Booking Elements. This parent element contains a Rail Booking child element for each booked rail segment.

| Element  | Data Type | TripLink | Description |
|--------------------|-----------|----------|---------------------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor. |
| StartDateLocal | dateTime | Y | The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |
| Amenities | string |  | The booked amenities. |
| Cabin | string |  | The cabin identifier. |
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| CarbonEmissionLbs | decimal |  | The pounds of carbon emission for this booking.  |
| CarbonModel | integer |  | The model used to calculate the carbon emissions.  |
| ClassOfService | string |  | The class of the booking. |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the booking. |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DiscountCode | string |  | The discount code for the booking.  |
| Duration | integer |  | The duration of the trip booked. |
| EndCity | string |  | The end city for the rail trip.  |
| EndCityCode | string |  | The [IATA airport code][2] for the end city of the trip.  |
| EndCountry | string |  | The country code for the booking.  |
| EndDateLocal | dateTime | Y | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| EndDateUtc | dateTime | Y | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndLatitude | string |  | The latitude of the ending point of the booking.  |
| EndLongitude | integer |  | The longitude of the ending point of the booking.  |
| EndPlatform | string |  | The ending platform location of the booking. |
| EndRailStation | string | Y | The code for the ending station of the booking. |
| EndRailStationName | string | Y | The name of the ending station of the booking. |
| ETicket | integer |  | The e-ticket number.  |
| FareType | string |  | The type of fare on the rail booking.  |
| FrequentTravelerId | string |  | The traveler’s ID for the frequent traveler reward program. |
| IsUpgradeAllowed | boolean |  | Whether the booking can be upgraded. Format: true/false  |
| LegId | string |  | The trip leg ID. |
| Meals | string |  | The booked meals. |
| Miles | integer |  | The number of miles booked. |
| Notes | string |  | Additional information about the booking. |
| NumPersons | unsignedByte |  | The number of persons booked for the trip. |
| NumStops | unsignedByte |  | The number of stops in the booking. |
| OperatedByTrainNumber | string |  | The train identifier of the operating vendor of the booked trip. |
| OperatedByVendor | string |  | The operating vendor of the booked trip. |
| RateCode | string |  | The vendor's code for the rate of the booking.  |
| RouteRestrictCode | string |  | The code to restrict the route of the booking.  |
| SpecialInstructions | string |  | The instructions for the booking. Max Length: 256 |
| StartCity | string |  | The starting city of the booking. |
| StartCityCode | string | Y | The [IATA airport code][2] for the starting city of the booking.  |
| StartCountry | string |  | The starting country of the booking.  |
| StartDateUtc | dateTime | Y | The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| StartLatitude | string |  | The latitude of the starting location of the booking. |
| StartLongitude | string |  | The longitude of the starting location of the booking. |
| StartPlatform | string |  | The starting platform location of the booking. |
| StartRailStation | string | Y | The code of the starting station of the booking. |
| StartRailStationName | string | Y | The name of the starting station of the booking. |
| Status | string |  | The booking  status.  |
| TimeZone | string |  | The time zone of the booking. Format: One of the supported Olson or Windows  Time Zones.  |
| TotalRate | decimal |  | The total rate amount of the booking.  |
| TrainNumber | string |  | The number for the booked train. |
| TrainTypeCode | string |  | The code for the type of train used in the booking. |
| TrainTypeName | string |  | The name of the type of train used in the booking. |
| TransportMode | sring |  | The transport mode of the booking.  |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  | The two letter GDS vendor code. |
| VendorName | string |  | The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.  |
| WagonNumber | string |  | The wagon number of the train car. |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table. |
| Seats | Parent Element |  | The booked seats. This parent element contains a RailSeat element for each included seat. For more information, see the **RailSeat elements** table later on this page.  |

##### RailSeat elements

| Element | Data Type | TripLink | Description |
|------------------|-----------|---|--------------------------------|
| Amenities | string |  | The amenities for the seat. |
| BerthPosition | string |  | The berth location of the seat. |
| Deck | string |  | Which deck the seat is on. |
| FacingForward | string |  | Whether the seat is facing forward. |
| FareSpaceComfort | string |  | The space around the seat. |
| PassengerRph | integer |  | Which passenger the seat is assigned to. |
| SeatNumber | string |  | The number of the seat.  |
| SeatPosition | string |  | The location of the seat. |
| SpaceType | string |  | The type of space around the seat. |
| Status | string |  | The status of the seat booking. |
| WagonNumber | string |  | The number of the wagon the seat is on. |
| WagonType | string |  | The type of wagon the seat is on. |

#### <a name="parking_booking_elements" id="parking_booking_elements">Parking Booking elements</a>

The Parking Booking parent element is the Parking Element in the Segments Array in Booking Elements. This parent element contains a Parking Booking child element for each booked parking.

| Element  | Data Type | TripLink | Description |
|--------------------|-----------|----------|---------------------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| StartDateLocal | dateTime |  | The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| ClassOfService | string |  | The class of the booking. |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the booking. |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndDateLocal | dateTime |  | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| EndDateUtc | dateTime |  | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| FrequentTravelerId | string |  | The traveler’s ID for the frequent traveler reward    program. |
| IsUpgradeAllowed | boolean |  | Whether the booking can be upgraded. Format: true/false  |
| Notes | string |  | Additional information about the booking. |
| OperatedByVendor | string |  | The operating vendor of the booking. |
| ParkingLocationId | string |  | The location of the parking booking. |
| PhoneNumber | string |  | The parking phone number. |
| Pin | string |  | The PIN number for the booking. |
| RateCode | string |  | The vendor's code for the rate of the booking.  |
| StartAddress | string |  | The starting address of the booking. |
| StartAddress2 | string |  | The starting address of the booking. |
| StartCity | string |  | The starting address of the booking. |
| StartCityCode | string |  | The [IATA airport code][2] for the starting city of the booking.  |
| StartCountry | string |  | The starting address of the booking. |
| StartDateUtc | dateTime |  | The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| StartLocation | string |  | The parking location.  |
| StartPostalCode | string |  | The starting address of the booking. Maximum length: 24  |
| StartState | string |  | The starting address of the booking. Maximum length: 50  |
| Status | string |  | The booking  status.  |
| TimeZone | string |  | The time zone of the booking. Format: One of the supported Olson or Windows  Time Zones.  |
| TotalRate | string |  | The total rate amount of the booking.  |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  | The two letter GDS vendor code. |
| VendorName | string |  | The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.  |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table later on this page. |

#### <a name="travel_booking_elements" id="travel_booking_elements">Travel Booking elements</a>

The Travel Booking parent element is the Travel Element in the Segments Array in Booking Elements. This parent element contains a Travel Booking child element for each booked travel request.

NOTE: This booking type is used by the Concur Travel Request product to store the main destination for the trip without specifying a transport type. 

| Element  | Data Type | TripLink | Description |
|--------------------|--------------|----------|--------------------------------------|
| EndDateLocal | dateTime |  | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| StartCity | string |  | The starting address of the booking. |
| StartCityCode | string |  | The [IATA airport code][2] for the starting city of the booking.  |
| StartDateLocal | dateTime |  | The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| ConfirmationNumber | sring |  | The confirmation number from the vendor.  |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the booking. |
| DailyRate | decimal |  | Average per day rate for the booking. If the rate varies over the duration, it can be specified using the charges model. |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndAddress | string |  | The ending address of the booking. |
| EndAddress2 | sring |  | The ending address of the booking. |
| EndCity | string |  | The ending address of the booking. |
| EndCityCode | string |  | The ending address of the booking. |
| EndCountry | string |  | The ending address of the booking. |
| EndDateUtc | dateTime |  | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndLatitude | string |  | The latitude for the ending location of the booking.  |
| EndLocation | sring |  | The ending location of the booking.  |
| EndLongitude | string |  | The longitude of the ending point of the booking.  |
| EndPostalCode | string |  | The ending address of the booking. |
| EndState | sring |  | The ending address of the booking. |
| TransportMode | string |  | The transport mode of the booking.  |
| Notes | string |  | Additional information about the booking. |
| NumPersons | unsignedByte |  | The number of persons booked for the trip. |
| PhoneNumber | string |  | The parking phone number. |
| SpecialInstructions | sring |  | The instructions for the booking. Max Length: 256 |
| StartAddress | string |  | The starting address of the booking. |
| StartAddress2 | string |  | The starting address of the booking. |
| StartCity | sring |  | The starting address of the booking. |
| StartCityCode | string |  | The [IATA airport code][2] for the starting city of the booking.  |
| StartCountry | string |  | The starting address of the booking. |
| StartDateUtc | dateTime |  | The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| StartLatitude | string |  | The latitude of the restaurant. |
| StartLongitude | sring |  | The longitude of the restaurant. |
| StartPostalCode | string |  | The starting address of the booking. Maximum length: 24  |
| StartState | string |  | The starting address of the booking. Maximum length: 50  |
| Status | string |  | The booking  status.  |
| TimeZone | sring |  | The time zone of the booking. Format: One of the supported Olson or Windows  Time Zones.  |
| TotalRate | decimal |  | The total rate amount of the booking.  |
| Vendor | string |  | The two letter GDS vendor code. |
| VendorName | string |  | The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.  |
| Charges | Parent Element |  | The charges for this booking. For more information, see the **Charges elements** table. |

##### Charges elements

| Element  | Data Type | TripLink | Description |
|-------------------|----------------|----------|--------------------------------------|
| Percent | Parent Element |  | The percent of fixed charges. For more information about the child elements of this parent element, see the **Percent elements** table.  |
| Fixed | Parent Element |  | The fixed charges. For more information about the child elements of this parent element, see the **Fixed elements** table.  |
| Rate | Parent Element |  | The rate for the booking.  For more information about the child elements of this parent element, see the **Rate elements** table. |
| RateWithAllowance | Parent Element |  | The rate for the booking, including any travel allowances. For more information about the child elements of this parent element, see the **RateWithAllowance elements** table.  |

###### Rate elements

| Element  | Data Type | Description |  |
|---------------------|-----------|--------------|-------------------|
| Amount | decimal |  |  The total amount for the rate for the booking.  |  
| Currency | string |  |  The [3-letter ISO 4217 currency code][1] for the total amount. |  
| Description | string |  |  The description for the rate. |  
| IsPaid | boolean |  |  Whether the rate has been paid. Format: true/false. |  
| IsPrimary | boolean |  |  Whether the rate is primary. Format: true/false. |  
| NumUnits | decimal |  |  The  number of units expected for the charge. For instance, 3 days |  
| PerUnit | string |  |  The  unit of measure for the charge. Values represent rates like per DAY, WEEK, or  MONTH |  
| SemanticsCode | string |  |  Indicates the charge category for the line item. Refer to the [Semantics Codes][3] table for more information. |  
| SemanticsVendorType | string |  |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |  
| StartDateLocal | dateTime |  |   The start date of the booking, in the user's local time.  Format: YYYY-MM-DDThh:mm:ss |  
| Vendor | string |  |  The vendor for the booking charge. |  
| VendorChargeCode | string |  |  The vendor's code for the charge. |  

###### RateWithAllowance elements

| Element  | Data Type | TripLink | Description |
|----------------------|-----------|----------|----------------------------|
| AllowanceAmount | decimal |  | The cost of overage fees when the allowance is exceeded. For example,  if the allowance is 5000 miles, the cost could be $0.02 per mile. The overage  must be in the same currency as the basic rate. |
| AllowanceIsUnlimited | boolean |  | Whether the allowance is unlimited. Format: true/false. |
| AllowanceNumUnits | decimal |  | The number of units for the allowance associated with the charge. For example, 5000 miles. |
| AllowanceUnit | string |  | The unit of measure for the allowance associated with the charge. For example, a car weekly rate might allow 5000 miles included in the rate. |
| Amount | decimal |  | The total amount for the rate for the booking.  |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the total amount. |
| Description | string |  | The description for the rate. |
| IsPaid | boolean |  | Whether the rate has been paid. Format: true/false. |
| IsPrimary | boolean |  |  Indicates whether the charge is the Primary or  Main rate. For example, if one of the rates is the actual rate and the  rest are penalties, the actual rate should be set as IsPrimary. Only one charge in a set should be primary. Format: true/false. |
| NumUnits | decimal |  | The  number of units expected for the charge. For instance, 3 days. |
| PerUnit | string |  | The  unit of measure for the charge. Values represent rates like per DAY, WEEK, or MONTH |
| SemanticsCode | string |  | Indicates the charge category for the line item. Refer to the [Semantics Codes](#semantics_codes) table for more information. |
| SemanticsVendorType | string |  | The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
| StartDateLocal | dateTime |  | The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  |  The vendor for the booking charge. |
| VendorChargeCode | string |  | The vendor's code for the charge. |

###  <a name="car_vendor_codes" id="car_vendor_codes">Car vendor codes</a>
[Return to Reference topics](#reference_topics)

The following car vendor codes are used in the Car Booking Elements.

|  Vendor Code |  Vendor Name |
|--------------|--------------|
|  FA |  Able |
|  AC |  Ace |
|  AD |  Advantage |
|  AL |  Alamo |
|  LV |  Allstate |
|  AF |  Americar |
|  ZU |  AutoEurope |
|  ZI |  Avis |
|  CH |  Charlie |
|  CP |  Compass |
|  CO |  Continental |
|  DS |  Discount |
|  ZR |  Dollar |
|  ET |  Enterprise |
|  ED |  Eurodollar |
|  EP |  Europcar |
|  FH |  Falles Hire Cars |
|  FD |  Ford Dealer |
|  HO |  Holiday Car |
|  IM |  Imperial |
|  IA |  Independent Auto |
|  TS |  Intl Travel |
|  KG |  Kemwel Holiday |
|  KN |  Kenning |
|  LL |  Localiza |
|  ZW |  Montgomery Ward |
|  NE |  Nationwide |
|  ZA |  Payless |
|  PI |  Pinellas |
|  BL |  Red And Blue |
|  RR |  Rent Rite |
|  RS |  Resort |
|  ZS |  Sears |
|  SX |  Sixt |
|  ZT |  Thrifty |
|  CC |  Country Car |
|  TR |  Triangle |
|  CT |  TT/Key Services |
|  SV |  U-Save |
|  CY |  Carey International |
|  CV |  Capps Vans |
|  AB |  All American |
|  EE |  Exoticar Express |
|  LX |  Limo Service |
|  MW |  Midway |
|  NF |  New Frontier |
|  SL |  SL I.T.S. |
|  US |  US Rent a Car |
|  VR |  Specialty Van |
|  WC |  West Coast |
|  ZH |  Simply Wheelz |
|  NU |  Nu Car Rentals |
|  EY |  Economy Rent a Car |
|  $$ |  Unknown Car Vendor |
|  ZM |  Zoom Rent a Car |
|  ZD |  Budget |
|  ZE |  Hertz |
|  ZL |  National |
|  AU |  Austrian |
|  DR |  DER Travel Svcs |
|  EN |  Vip Car Rental |
|  ML |  Merlin |
|  EZ |  Ez Rent A Car |
|  FX |  Fox |
|  LM |  L & M Car Rental |
|  SW |  Southwest |
|  NW |  New Frontier |


###  <a name="hotel_vendor_codes" id="hotel_vendor_codes">Hotel vendor codes</a>
[Return to Reference topics](#reference_topics)

|  Vendor Code |  Vendor Name |
|--------------|--------------|
| RT | AccorHotels |
| AM | Adams Mark |
| AZ | The Ascott Limited |
| AS | All Suites |
| AR | AC Hoteles |
| AJ | AmeriSuites |
| AN | Ana Hotels |
| AX | Anasazi Service |
| AQ | ATA Hotels |
| AO | Atlantis Hotel |
| AH | Aston Hotels |
| AP | Andre Balazs |
| AC | Atel France |
| BB | Bartell Hotels |
| BW | Best Western |
| BM | Biltmore |
| BU | Baymont Inns |
| CJ | Caesar Park |
| QC | Camberly |
| CA | Confortel |
| CO | Camino Real Htls |
| CV | COMO Hotels and Resorts |
| CE | Chalet Susse |
| CR | Clarion |
| CH | CIH Hotels |
| WX | Coast Hotels |
| CS | Classical Hotels |
| CI | Comfort Inns |
| CD | Concord Hotels|
| WA | Waldorf Astoria |
| BC | Boutiquw|
| CX | Country Inn |
| CL | Corus Hotels |
| DC | Dorchester Htls |
| DE | Delta Hotels |
| DS | Design Hotels |
| FT | Grande Hotels |
| DV | De Vere |
| DA | Doral Hotels |
| DO | Dorintresorts |
| DT | Doubletree |
| DY | Doyle Hotels|
| DR | Drury Inns |
| EE | Marriott Exec Ap |
| EO | Econo Lodge |
| ER | Electronic Rep |
| EU | Exclusive Htls |
| RM | Hetras |
| XH | Extra Holidays |
| FA | Fairmont Hotels |
| FQ | Fauriel |
| FM | Fiesta American |
| FE | Forte Hotels |
| FS | Four Seasons |
| FZ | Friendship Inns |
| FC | Rocco Forte |
| GX | Global Conextion |
| HN | Linkhotel |
| GR | Six Senses Hotel |
| GT | Golden Tulip |
| AG | Gouverner Hotel |
| GN | Gramercy Park Hotel |
| GH | Grand Heritage |
| GD | Grand Tradition |
| HB | Hbs Hotel Booki |
| HX | Hampton Inns |
| HR | Harrah's |
| HV | Harvey Hotels |
| HP | Hyatt Place |
| BH | Hawthorn Suites |
| HL | Hilton Intl |
| BE | Homestead Studio |
| HG | Homewood Suites |
| HO | Hotelrez |
| AI | Armani Hotels |
| HW | Hotel World |
| HQ | Hotelink Intl |
| HA | HOTUSA Hotels |
| MR | Morgans Hotel Group |
| IL | Innlink Res Svc |
| IP | InnPoints |
| IG | Insignia Resorts |
| IC | InterContinental |
| IE | InterEurope Htls |
| IT | Intl Trvl Resort |
| TS | Intl Trvl Svcs |
| IR | Innpoints |
| JA | Jarvinen Hotels |
| JY | Jolly Hotels |
| KA | Karos Hotels |
| KI | Kempinski |
| KY | Keytel |
| KC | Kimpton Hotels |
| KN | Kintetsu Intl |
| NV | Las Vegas Travel |
| LW | Leading Hotels |
| LM | Vantis Hotel GRP |
| LA | Little America |
| LZ | Loews Hotels |
| LR | LRI |
| LU | Luxor Hotel |
| MY | Personality Hotels |
| MZ | Mainstay Suites |
| MO | Mandarin Orientl |
| MH | Marco Polo Htls |
| MM | Maritim Hotels |
| ET | Marriott Cnf Ctr |
| MG | Magnolia Hotels |
| MF | Micros Fidelio |
| MT | Microtel Hotels |
| MU | Millennium Htls |
| MP | Mantra Group |
| MN | Montage Hotels A |
| MI | Malmaison Hotels |
| MK | Movenpick Htls |
| ND | National Hotels |
| NO | New Otani |
| NK | Nikko Hotels |
| NH | Nippon Travel |
| OB | Oberoi Group |
| OC | Okura Hotels |
| OM | Omni Hotels |
| OH | Oslo Hotel |
| OR | Outrigger |
| PS | Sandman Hotels |
| PF | Pan Pacific |
| PL | Parkroyal Hotels |
| PQ | Purple Hotels |
| PH | Preferred Hotels |
| PW | Prima Hotels |
| PN | Peninsula Hotels |
| PR | Protea Hotels |
| QI| Quality Inns |
| QL | Queens Hotels |
| QM | Queens Moat Htls |
| QH | QHotels |
| RD| Radisson |
| NR| Ramada Intl |
| ON | Reconline |
| RL | Red Lion Inns |
| RF | Red Roof Inns |
| RQ | Regal Hotels |
| KR | Regal Hotels UK |
| RE | Regent Intl |
| RH | Reservations Hub |
| BR | Renaissance Intl |
| RC | Residence Inns |
| RR | Righa Royal |
| RZ | Ritz-Carlton |
| RW | Rosewood |
| RI | Rodeway Inns |
| RO | Rotana Hotels and Resorts |
| RB | Resort Bookings |
| RG | Rydges Group |
| SH | Scandic Hotels |
| IQ | Myfidelio |
| SC | Sceptre Hotels |
| SQ | Select Hotels |
| SG | Shangri-La |
| BP | Shilo Inns |
| US | Sierra Hotels |
| SJ | Jameson Inns |
| SZ | Sleep Inns |
| SB | Sofitel |
| LX | Small Luxury |
| SM | InnLink Res Svc |
| SN | Sonesta Hotels |
| ST | Sorat Hotels |
| SP | Special Prop-IHG |
| XV | SpringHill Suites |
| SR | Steigenberger |
| SK | Stakis Hotels |
| YS | Stamford Hotels |
| LV | Las Vegas Test |
| YZ | Staybridge Ste |
| WR | Sterling Intl |
| SS | Studio 6 |
| XL | Summit Hotels |
| SX | Supranational |
| UK | Swallow Hotels |
| SL | Swissotel |
| TI | Thistle Hotels |
| TM | Tianma |
| TP | Top Intnl Htls |
| TH | Trident Hotels |
| TO | TownePlace Suites |
| TA | Reservhotel |
| TX | Treff Hotels |
| TR | Cendant Trip Rewards |
| VP | VIP Intl |
| VA | OneTech Solution |
| VI | Vienna International |
| WH | W Hotels |
| DW | Walt Disney Htl |
| WK | Warwick Hotels |
| WL | Wellesley Inns |
| WM | Westmark Hotel |
| EJ | Williams |
| WC | WestCoast Hotels |
| WW | World Hotels |
| WY | Wyndham Hotels |
| SW | Starwood (All) |
| AL | Aloft Hotels |
| BY | Banyan Tree |
| EL | Elements |
| GA | Global Alliance |
| IW | Hotels & Preference |
| QX | Luxury Lifestyle |
| RP | Rendezvous Hospitality Group |
| RU | Hard Rock |
| TY | Tradyso Global Distribution |
| ZX | Marriott Affliat|
| TB | GTA TravelBound |
| DX | Dolce Hotels |
| JI | Jurys Inns |
| LD | Leonardo |
| LJ | Lalit |
| NZ | Ascend|
| IN | Indigo Hotels|
| LC | Luxury Collection|
| LI | LeisureLink Inc |
| OT | Othon Hotels |
| PX | Performance Conn |
| PY | Peabody Hotels |
| SE | Sercotel |
| WF | West Coast Famil |
| ZC | Ritz Club |
| XO | Luxury Resorts |
| AT | Address Hotels |
| CQ | Club Quarters |
| ML | Melrose Hotels |
| DH | Distinguished Hotels |
| PI | Premier Inn |
| ZZ | Independent |
| JT | Jumeirah |
| EZ | Cambria Suites |
| UB | Suburban Extended Stay |
| FB | Fontainebleau |
| GV | Graves Hotels |
| IM | Independent Htls |
| JL | Jumeriah |
| LP | Lexington |
| OP | Omni Partners |
| PV | Preferred Group |
| RJ | Resort Condos |
| RK | Rezlink Intl |
| UV | Univisit |
| VK | Vacationclick |
| VR | Vacation Rentals |
| XN | Global Res |
| XX | New Synxis |
| XZ | Hotelzon |
| OI | Amadeus LinkHotel |
| GF | Grange Hotels |
| EP | Epoque Hotels |
| LO | Langham Hotels |
| PM | Barcelo Hotels |
| QV | ResortQuest Intl |
| XW | WebRes |
| YH | Booking Services |
| YP | Altiuspar Soluti |
| DD | Derag Hotels |
| XR | St Regis |
| 6C | Intercontinental Hotels Group |
| AB | Abba Hotels |
| AE | AmeriHost Inn |
| AV | Allegience Svcs |
| AW | Astra Worldwide |
| BA | Boscolo Hotels |
| BG | Bulgari Hotels |
| BN | Barcelo Hotels |
| BV | Best Value Inns |
| CG | City Lodge Group |
| CN | Conrad |
| CP | Crowne Plaza |
| CU | Charming Hotels |
| CW | Carlson Brands (All) |
| CZ | Comfort Suites |
| DI | Days Inn |
| DM | Domina Hotels |
| DU | Destinations Unl |
| EC | Choice Brands |
| EH | Hilton (All) |
| EK | Sercotel |
| EM | Marriott (All) |
| GI | Hilton Garden Inn |
| GM | Meritus |
| GW | Great Hotels |
| HE | Historic Hotels |
| HF | HomeGate Studios |
| HU | Hyatt Vacation |
| ID | Resnet |
| IF | ACC-NIFOS |
| IS | Ian Schrager |
| IU | Intourist Travel |
| JC | Cendant Brands (All) |
| JU | Jumer |
| KL | ClubHouse Inns |
| LT | Travelodge AU |
| MS | Magnuson Hotels |
| MV | MGM Mirage |
| NN | Louvre Hotels |
| NY | Denihan Hospitality Group |
| OE | Orient Express |
| OK | Alesia |
| OS | Sweden Hotels |
| PK | Park Plaza Intl |
| PT | Prime Hotels |
| RA | Ramada Hotels |
| RN | Expotel |
| RX | Ringhotels |
| SO | Sonesta |
| SV | Sarova Hotels |
| SY | Starhotels |
| TL | Travelodge |
| TV | ReservHotel |
| VC | Marriott Vacation Club |
| WD | Chase Suite Hotels |
| WG | Wingate Inn |
| XS | Summerfield Suites |
| II | Indecorp |
| GZ | Genares Worldwide |
| GE | Gaylord Hotels |
| FV | Flairview |
| EW | Exclusive World |
| GQ | Genre Hotels |
| FX | First Hotel |
| WT | Tryp by Wyndham |
| UN | Carino Hotels |
| GP | Husa Hotels |
| IV | InnVite |
| LG | Lindner Hotels |
| JJ | Jin Jiang Hotels |
| CK | Black Pepper Hotels |
| QO | Swiss Quality Hotels |
| AK | Autograph |
| EB | Edition |
| EQ | Eaton |
| FD | Etours |
| HM | Missoni |
| JG | JG Black Book |
| OO | One And Only |
| UA | Premier Connect |
| PU | Pullman |
| QG | Quest |
| TW | Trump Hotel Collection |
| TF | Thon Hotels |
| IA | Corinthia Hotels |
| NU | Northwood Hospitality |
| HC | hotel.de |
| $$ | Unknown Hotel Vendor |
| QU | Aqua Hotels and Resorts |
| FG | FastBooking |
| BL | Balladins Hotels |
| ZW | CWT Private Hotels |
| DN | Destination |
| XE | Excalibur |
| CY | Courtyard |
| ES | Embassy Suites |
| FN | Fairfield Inns |
| HH | Hilton |
| HI | Holiday Inn |
| HJ | Howard Johnson |
| HY | Hyatt|
| MC | Marriott|
| SI | Sheraton|
| WI | Westin|
| CB | Classic British |
| HT | Home2 Suites|
| JH | Jumer Hotels |
| LQ | La Quinta Inns|
| QR | Quality Htl Res |
| SU | Southern Sun |
| UI | Utell |
| PD | Park Inn|
| SF | Sutton Place Htl |
| YO | Candlewood Stes|
| KG | Knights Inn|
| VG | Villager|
| OZ | Super 8|
| VY | Maybourne Hotels |
| JD | Doyle Collection |
| EA | Extended Stay |
| VE | Vantis Hotels |
| YX | Synxis Res Svcs |
| BK | Interstate Hotels and Resorts |
| MD | Le Meridien|
| LE | Luxe Worldwide |
| KH | K Hotels |
| FW | Flag Hotels|
| UZ | Unirez |
| GO | Guesthouse International |
| TG | Travelodge UK |
| WO | WorldRes |
| JV | Joie De Vivre |
| PJ | Prince Resorts |
| BI | Best Inns |
| MB | Mandalay Bay |
| YR | Raffles Intl |
| FH | Fiesta Americana |
| NS | NH Hotels |
| NC | Noble House |
| OG | Olympus Hospitality |
| RS | Rockresorts Intl |
| GB | MacDonald Group |
| WB | Relais/Chateaux |
| GG | Grand Hosp. |
| AA | AmericInns |
| MX | Motel 6 |
| DL | Doral Resorts |
| CC | Clarion |
| BT | BT Advantage |
| SA | Sabre Exclusives |
| RV | Red Roof Inns |
| TJ | Taj Hotels |
| BX | Columbus Res Svc |
| BZ | Cmnet Brazil |
| CM | Camino Real |
| DJ | Hotel Port |
| EI | Executive Hotels |
| HK | Hot Key Intl. |
| IH | CIH Hotels |
| KO | KSL Resorts |
| ME | Sol Melia |
| NW | Newtrade |
| PG | Phillips Hotel |
| UE | Universal Resort |
| WS | World Res |
| WV | TravelCLICK |


###  <a name="ride_vendor_codes" id="ride_vendor_codes">Ride vendor Codes</a>
[Return to Reference topics](#reference_topics)

|  Vendor Code |  Vendor Name |
|--------------|--------------|
|  $R |  RideCharge |
|  AL |  AddisonLee |
|  DG |  DeemGroundLimo |
|  GC |  GroundScope |
|  GS |  GroundSpan |
|  LC |  Limoscom |
|  SQ |  SummitQwest |
|  SW |  SummitQwest |
|  TD |  Tandem |
|  TV |  Transvip |


### <a name="semantics_codes" id="semantics_codes">Semantics codes</a>
[Return to Reference topics](#reference_topics)

The semantics codes are used in the Charges child elements in Bookings.

|  Vendor Type |  Semantics Code |  Description |
|--------------|--------------|--------------|
|  Hotel |  OTHER |  Other miscellaneous charges |
|  Hotel |  BUSINESS |  Business center charges |
|  Hotel |  CONFERENCE |  Conference charges |
|  Hotel |  COUNTYTAX |  County tax |
|  Hotel |  VAT |  VAT tax |
|  Hotel |  GST |  GST tax |
|  Hotel |  FEDERALTAX |  Federal tax |
|  Hotel |  FOOD |  Food/beverage charges: hotel restaurant, room service |
|  Hotel |  ALCOHOL |  Alcohol charges: beer, wine, and liquor at restaurant |
|  Hotel |  FOODTAX |  Food/beverage taxes |
|  Hotel |  GIFT |  Gift shop charges |
|  Hotel |  GENERALTAX |  General taxes |
|  Hotel |  HEALTH |  Health club, pool, court, golf, etc. |
|  Hotel |  LAUNDRY |  Laundry |
|  Hotel |  MINIBAR |  In room mini-bar |
|  Hotel |  CITYTAX |  City tax |
|  Hotel |  MOVIE |  Movie, in room entertainment |
|  Hotel |  GAME |  Game, in room entertainment |
|  Hotel |  PARKING |  Parking/Valet |
|  Hotel |  PST |  PST tax |
|  Hotel |  STATETAX |  State tax |
|  Hotel |  PAYMENT |  Payment |
|  Hotel |  DISCOUNT |  Discount |
|  Hotel |  ROOMRATE |  Room rate |
|  Hotel |  ROOMTAX |  Room tax |
|  Hotel |  GRATUITY |  Gratutities, tips |
|  Hotel |  PHONE |  Telephone charges |
|  Hotel |  INTERNET |  Internet charges |
|  Hotel |  NOSHOW |  No show fee |
|  Hotel |  NEGOTIATEDRATE |  Negotiated room rate |
|  Car |  DAYS |  DAYS |
|  Car |  WEEKS |  WEEKS |
|  Car |  MONTHS |  MONTHS |
|  Car |  EXTRAHOURS |  EXTRA HOURS |
|  Car |  EXTRADAYS |  EXTRA DAYS |
|  Car |  EXTRAWEEKS |  EXTRA WEEKS |
|  Car |  MILEAGEFEE |  MILEAGE FEE |
|  Car |  UPGRADEFEE |  UPGRADE FEE |
|  Car |  ADJUSTMENT |  ADJUSTMENT |
|  Car |  DISCOUNT |  DISCOUNT |
|  Car |  COLLECTION |  COLLECTION |
|  Car |  DELIVERY |  DELIVERY |
|  Car |  INTERCITY |  INTERCITY |
|  Car |  ADDLDRIVER |  ADDITIONAL DRIVER |
|  Car |  SERVICECHARGE |  SERVICE CHARGE |
|  Car |  LDWCDW |  LDW/CDW |
|  Car |  ALIAMOUNT |  ALI AMOUNT |
|  Car |  PAIPECAMOUNT |  PAI/PEC AMOUNT |
|  Car |  THEFTPROTECT |  THEFT PROTECTION |
|  Car |  FUELSERVICE |  FUEL SERVICE |
|  Car |  AIRPORTFEE |  AIRPORT FEE |
|  Car |  AGEDIFFER |  AGE DIFFERENTIAL |
|  Car |  CHILDSEAT |  CHILD SEAT |
|  Car |  SKIRACK |  SKI RACK |
|  Car |  ADDLSERVICE |  ADDITIONAL SERVICE |
|  Car |  OTHERCHARGES |  OTHER CHARGES |
|  Car |  TRANSACTIONFEE |  TRANSACTION FEE |
|  Car |  SATELLITERADIO |  SATELLITE RADIO |
|  Car |  NEVERLOST |  NEVERLOST |
|  Car |  ACSURCHARGE |  A/C SURCHARGE |
|  Car |  RESERVATIONFEE |  RESERVATION FEE |
|  Car |  TAXDIFFER |  TAX DIFFERENTIAL |
|  Car |  VOUCHERADJUST |  VOUCHER ADJUSTMENT |
|  Car |  VATAMOUNT |  VAT AMOUNT |
|  Car |  GSTAMOUNT |  GST AMOUNT |
|  Car |  VEHICLELICENSE |  VEHICLE LICENSE FEE |
|  Car |  CUSTFACILITY |  CUSTOMER FACILITY |
|  Car |  VEHLEASETAX |  MOTOR VEHICLE LEASE TAX |
|  Car |  ROADTAX |  ROAD TAX |
|  Car |  OTHER |  OTHER |
|  Car |  ACRECOVERYFEE |  AIR CONDITION RECOVERY FEE |
|  Car |  CONCESSIONFEE |  CONCESSION PASS THRU FEE |
|  Car |  CUSTRELATIONS |  CUSTOMER RELATIONS EXPENSE |
|  Car |  TFFCORPVRT |  TFFC OR PVRT |
|  Car |  IMPOUNDSTORAGE |  IMPOUND/STORAGE |
|  Car |  LISAMOUNT |  LIS AMOUNT |
|  Car |  SUPLIABILITY |  SUPPLEMENTAL LIABILITY PROTECTION |
|  Car |  DROPOFFFEE |  DROPOFF FEE |
|  Car |  WEEKEND |  WEEKEND DAILY RATE |
|  Air |  OTHER |  Miscellaneous charge |
|  Air |  SEGFEE |  Segment fee |
|  Air |  SEGFEE_AS_FEE |  Segment fees as fee |
|  Air |  SEGFEE_AS_FARE |  Segment fees as base fare |
|  Air |  SEGFEE_AS_TAX |  Segment fee as tax |
|  Air |  WIRELESS_FEE |  Wireless Fee |
|  Rail |  OTHER |  Miscellaneous charge |
|  Rail |  TICKET |  Price of ticket |
|  Rail |  SEAT |  Price of seat |


### <a name="time_zones" id="time_zones">Time zones</a>
[Return to Reference topics](#reference_topics)

Concur converts local date/time to UTC.  In order to do that we need to be able to determine where the local time is.

####  Olson time zones

* Best practice is providing **TimeZone** (Olson or Windows time zone format) in addition to the required **StartDateLocal** and **EndDateLocal**. 
* If you cannot provide **TimeZone** (Olson or Windows time zone format), Concur recommends **StartDateUtc** and **EndDateUtc** in addition to the required **StartDateLocal** and **EndDateLocal**.
* Least preferable is providing **StartCityCode** in addition to the required **StartDateLocal** and **EndDateLocal**, if you cannot provide **TimeZone** or **StartDateUtc** and **EndDateUtc**.

| | | | |
|--------------|--------------|--------------|--------------|
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
|  UTC | | | |

####  Windows time zones
[Return to Reference topics](#reference_topics)

| | | | |
|--------------|--------------|--------------|--------------|
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
|  UTC | | | |






[3]: https://www.concur.com/en-us/connect-platform/suppliers
[9]: Itinerarywebserviceoverview.png
