---
layout: conceptual
title: Itinerary Data Model
---

## Overview
The Itinerary data model defines data elements  that are returned or sent when getting, creating, updating, or deleting trips and bookings with the /api/travel/trip/v1.1 and /api/travel/booking/v1.1 resources respectively. 
Trips include all bookings in an itinerary whereas a booking includes only a specific segment of an itinerary.

## Root elements

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

## Booking elements
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
| AirfareQuotes | Array |  | List of stored airfare quotes for this booking. For more information, see the AirFare Quotes table. |
| ItinSourceName | String |  | The itinerary source. Format: TravelSupplier (NOTE TO TECH REVIEWERS: This element is not in the xsd but appears in the Post booking details request for TMCs example) |
| AirlineTickets | Array |  | List of airline tickets for this booking. See the AirLine Tickets Elements Table. |
| Charges | Array |  | The charges for this booking. Refer to the Charges Child Elements table.     |
| MiscChargeOrders | Array |  | An array of Miscellaneous for this booking.  |
| Passengers | Array | Y | This parent element contains a Passenger child element for each booked passenger. See the Passengers table for more information about the child elements. |
| PassPrograms |   |  | List of Pass Programs for this booking. This parent element has a PassProgram child element for each pass program associated with the booking. The PassProgramparent element has the following child elements:  |
| PhoneNumbers |   |  | List of Phone numbers associated with this booking.  This parent element has a PhoneNumberDataÂ child element for each phone number associated with the booking. ThePhoneNumberData parent element has the following child elements:  |
| RailPayments | Array |  | List of Rail payments associated with rail segments in this booking. |
| Segments |   | Y | List of Segments in this booking. This parent element contains one or more Air, Car, Hotel, Dining, Ride, Rail, Parking, or Travel parent elements for the booking. The segments are described in tables below, see Air Booking Elements, Car Booking Elements, Hotel Booking Elements, Dining Booking Elements, Ride Booking Elements, Parking Booking Elements, and Travel Booking Elements |
| Delivery | String |  | The method this booking was delivered.  |
| WaitListSegments |   |  | The segments that the traveler is waitlisted for this booking. |
| Warnings |   |  | The warnings associated with the booking. |
| WebAddresses |   |  | List of web addresses such as emails and pickup URLs associated with this booking. |

### Miscellaneous child elements

| Element Name | Data Type | TripLink | Description | 
|---------------------------|-----------|----------|------------------|
| DateCreatedUtc | dateTime |  | The date the charge order was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the charge order was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| IssueDate  | dateTime |  | The date the charge order was issued. Format: YYYY-MM-DDThh:mm:ss |  
| PlatingCarrierNumericCode | string |  | Part of the ticket number that indicates the airline code. This is a three digit number. For example: 001=American, 005=Continental, 006=Delta, 012=Northwest |  
| PlatingControlNumber | string |  | Part of the ticket number that indicates the ticket control number. Format: Ten digit number. |  
| TotalAmount | decimal |  | The total amount of charge orders for the ticket. |  
| TotalAmountCurrency | string |  | The [3-letter ISO 4217 currency code][1] for the total charge order amount. |  

### PassProgram child elements

| Element Name | Data Type | TripLink | Description |
|---------------------|-----------|----------|----------------------------------|
| Amount   | decimal |  | The program amount. |
| Name     | string |  | The program name. |
| Type   | string |  | The program type. |
| UserFirstName    | string |  | The first name of the passenger. |
| UserLastName    | string |  | The last name of the passenger. |

### PhoneNumberData child elements

| Element Name | Data Type | TripLink | Description |
|----------------------|-----------|----------|--------------------------------------------|
| PassengerRPH     | integer |  | Indicates the passenger to whom this phone number belongs. |
| PhoneNumber  | string |  | The passenger's phone number. |
| Type   | string |  | The type of phone number. |
| Description     | string |  | The description for the phone number. |

### RailPayments child elements

| Element Name | Data Type | TripLink | Description |
|----------------|-----------|----------|-------------------------------------------|
| RailAdjustment | Type |  |  The amount adjusted for a rail booking. |
| RailPayment | Type |  |  The payment information for a rail booking.  |

### RailAdjustment child elements

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
| Taxes         | Array |  | This parent element contains a Tax child element for each rail adjustment tax. Refer to the Tax Elements for the Tax child element. |

### RailPayment child elements

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
| RailCharges      | array |  | The charges applied by the airline. This parent element contains a Fixed and Tax child element for each fixed charge and tax from the airline. Refer to the Fixed Elements table for the Fixed child element  and the Tax Element table for the Tax child element. |


## AirfareQuotes elements

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
| AirlineCharges | Array |  | Child elements  |

### AirlineCharges child elements

| Element Name | Data Type | TripLink | Description |
|--------------|-----------|----------|----------------------------------|
| Fixed | type |   | This parent element contains a Fixed child element for each fixed charge from the airline. Refer to the Fixed Elements table for the Fixed child element. |
| Percent | type |   | This parent element contains a Percent child element for each  charge from the airline. Refer to the Percent Element table for the Percent child element. |

## Passengers elements

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

## AirlineTickets elements

The AirLineTickets parent element is an array that contains the following child elements.

| Element Name | Data Type | TripLink | Description |
|---------------------|-----------|----------|--------------------------------------------|
| AirlineAdjustment | Type |  | Any adjustment made to the booking. |
| ManualAirlineTicket | Type |  | The manual airline ticket for the booking. |
| AirlineTicket | Type |  | The airline ticket for the booking |

### AirlineAdjustment child elements

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

### ManualAirlineTicket child elements

| Element Name | Data Type | TripLink | Description |
|------------------|-----------|----------|------------------------|
| BaseFare   | decimal |  |   |
| BaseFareCurrency  | string |  |   |
| DateCreatedUtc  | dateTime |  |   |
| DateModifiedUtc  | dateTime |  |   |
| TotalFareTotalFareCurrency   | decimal |  |   |
| AirlineCharges  | array |  | The charges applied by the airline. This parent element contains a Fixed and Tax child element for each fixed charge and tax from the airline. Refer to the Fixed Elements table for the Fixed child element  and the Tax Element table for the Tax child element. |

### AirlineTicket child elements

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
| AirlineCharges    | array |  | An array of Fixed Types. This parent element contains a Fixed child element for each fixed charge from the airline. Refer to the Fixed Elements table for the Fixed child element. |
| AirlineTicketCoupons  | array |  | An array of AirlineTicketCoupon types contiaining the following elements |
| AirlineTicketExchanges  | array |  | An array of AirlineTickeExchange types contiaining the following elements: |
| AirlineTicketFareBreakups  | array |  | An array of AirlineTicketFareBreakup types contiaining the following elements:  |

#### AirlineTicketCoupons child elements

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

#### AirlineTicketExchanges child elements

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

#### AirlineTicketFareBreakups child elements

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
| Taxes   | array |  | The charges applied by the airline. This parent element contains a Fixed and Tax child element for each fixed charge and tax from the airline. Refer to the Fixed Elements table for the Fixed child element  and the Tax Child Element table for the Tax child element. |

### Fixed child elements

This Fixed element contains the following child elements.

| Element Name | Data Type | TripLink | Description |
|------------------|-----------|----------|--------------------------------|
| Amount | Decimal |  | The total amount for the rate for the booking.  |
| Currency | String |  | The [3-letter ISO 4217 currency code][1] for the total amount. |
| Description | String |  | The description for the rate.  |
| IsPaid | Boolean |  | Whether the rate has been paid. Format: true/false. |
| IsPrimary | Boolean |  | Indicates whether the charge is the Primary or  Main rate. For example, if one of the rates is the actual rate and the  rest are penalties, the actual rate should be set as IsPrimary. Only one charge  in a set should be primary. Format: true/false. |
| SemanticsCode | String |  | Indicates the charge category for the line item. Refer to the Semantics Codes table for more information.  |
| SemanticsVendorType | String |  | The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
| StartDateLocal | DateTime |  | The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | String |  |  The vendor for the booking charge. |
| VendorChargeCode | String |  | The vendor's code for the charge |

### Tax child elements

This Tax element contains the following child elements.

| Element Name | Data Type | TripLink | Description |
|--------------|-----------|----------|------------------------|
| TaxAmount | Decimal |  | The amount of the tax. |
| TaxType | String |  | The type of the tax. |

### Percent child elements

| Element  | Data Type | TripLink | Description |
|----------|----------------|----------|----------------------------|
| Percent | Parent Element |  | The percent of fixed charges. This parent element contains the following child elements. |

#### Percent child elements (need to disambiguate)

| Element  | Data Type | TripLink | Description |
|---------------------|-----------|----------|-----------------------------|
| Amount | Decimal |  | The total amount for the rate for the booking.  |
| Currency | string |  | The [3-letter ISO 4217 currency code][1] for the total amount. |
| Description | sring |  | The description for the rate.  |
| IsPaid | boolean |  | Whether the rate has been paid. Format: true/false. |
| IsPrimary | boolean |  | Indicates whether the charge is the Primary or  Main rate. For example, if one of the rates is the actual rate and the  rest are penalties, the actual rate should be set as IsPrimary. Only one charge  in a set should be primary. Format: true/false. |
| SemanticsCode | string |  | Indicates the charge category for the line item. Refer to the Semantics Codes table for more information.  |
| SemanticsVendorType | string |  | The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
| StartDateLocal | dateTime |  | The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  |  The vendor for the booking charge. |
| VendorChargeCode | string |  | The vendor's code for the charge |

### CustomAttributes child elements

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

### RuleViolations elements

The RuleViolations contains a list of rule violations associated with the itinerary. This parent element contains a RuleViolation child element for each associated rule violation.

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

## AirBooking elements

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
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table. |
| DateCancelledUtc | dateTime |  | The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateCreatedUtc | dateTime |  | The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| EndDateUtc | dateTime | Y | The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss. <br/>For TripLink suppliers: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| EndGate | string | Y | The arrival gate for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| EndTerminal | string | Y | The arrival terminal for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| LegId | string |  | The leg ID of the booking. Leg IDs do not change on a connection. For each  unique leg ID in the trip, all flights subsequent to the first segment with the  same leg ID are connections. |
| Seats | Parent Element |  | The seats for the booking. This parent element contains an AirSeat element for each included seat. The AirSeat element contains the following child elements |
| StartDateUtc | dateTime | Y | The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss. <br/>For  TripLink suppliers:The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| StartGate | string | Y | The departure gate for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| StartTerminal | string | Y | The departure terminal for the booking. <br/>For TripLink suppliers: Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking. |
| Status | string |  | The  GDS based booking status for the segment such as HK, HL, BK, etc. |
| TimeZone | string | Y | The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. (need link)  |
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
| SpecialInstructions | string |  | Additional instructions regarding the booking.  |
| UpgradedDateTime | dateTime |  | The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |

### AirSeat child elements

| Element | Data Type | Description |
|--------------|-----------|---------------------------|
| PassengerRph | integer | The passenger assigned to the seat. |
| SeatNumber | string | The number of the seat. |

## Car Booking elements

The Car Booking parent element is the Car Element in the Segments Array in Booking Elements. This parent element contains a Car Booking child element for each booked car.

| Element  | Data Type | TripLink | Description |
|--------------------|----------------|----------|-----------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| EndDateLocal | dateTime | Y | The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| StartDateLocal | dateTime | Y | The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  | The two letter GDS vendor code. See the Car Vendor Codes table for  car vendor codes. (need link)|
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| CancellationPolicy | string |  | The cancellation policy from the vendor. |
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table. |
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
| Body | string |  | The character code to indicate how many passengers the car can seat.  |
| Class | string |  | Character code to indicate the class of the car e.g. if it is economy, full size, compact, etc. Varies by Vendor |
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
| SpecialInstructions | string |  | Additional instructions regarding the booking.  |
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

## Hotel Booking elements

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
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table. |
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
| RoomDescription | string |  | The room description for the booking.  |
| RoomType | string |  | The room type for the booking.  |
| SpecialInstructions | string |  | Additional instructions regarding the booking.  |
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

## Dining Booking elements

The Dining Booking parent element is the Dining Element in the Segments Array in Booking Elements. This parent element contains a Dining Booking child element for each booked meal.

| Element  | Date Time | TripLink | Description |
|--------------------|----------------|----------|---------------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| CancellationNumber | string |  | The cancellation number from the vendor. This field should be set when you cancel a segment. |
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table.  |
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

## Ride Booking elements

The Ride Booking parent element is the Ride Element in the Segments Array in Booking Elements. This parent element contains a Ride Booking child element for each booked ride.

| Element  | Data Type | TripLink | Description |
|---------------------|-----------|----------|------------------------------|
| ConfirmationNumber | string |  | The confirmation number from the vendor.  |
| EndCityCode | string |  | The ending [IATA airport code][2] of the booking. |
| StartCityCode | string |  | The starting [IATA airport code][2] of the booking. |
| Vendor | string |  | The two letter GDS vendor code. See the Ride Codes table (need link) for  ride vendor codes. For an unknown vendor, use the code value $$. |
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
| SpecialInstructions | string |  | The special instructions for the ride. |
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
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table.  |

## Rail Booking Elements

The Rail Booking parent element is the Rail Element in the Segments Array in Booking Elements. This parent element contains a Ride Booking child element for each booked ride.

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
| SpecialInstructions | string |  | The instructions for the booking. |
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
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table. |
| Seats | Parent Element |  | The booked seats. This parent element contains a RailSeat element for each included seat. The RailSeat element has the following child elements:  |

### RailSeat child elements

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

## Parking Booking elements

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
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table. |

## Travel Booking elements

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
| SpecialInstructions | sring |  | The instructions for the booking. |
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
| Charges | Parent Element |  | The charges for this booking. Refer to the Charges Child Elements table. |

### Charges child elements

| Element  | Data Type | TripLink | Description |
|-------------------|----------------|----------|--------------------------------------|
| Percent | Parent Element |  | The percent of fixed charges. This parent element contains the following child elements:  |
| Fixed | Parent Element |  | The fixed charges. This parent element contains the following child elements:  |
| Rate | Parent Element |  | The rate for the booking.  This parent element contains the following child elements |
| RateWithAllowance | Parent Element |  | The rate for the booking, including any travel allowances. This parent element contains the following child elements:  |

#### Rate child elements

| Element  | Data Type | Description |  |
|---------------------|-----------|--------------|-------------------|
| Amount | decimal |  |  The total amount for the rate for the booking.  |  
| Currency | string |  |  The [3-letter ISO 4217 currency code][1] for the total amount. |  
| Description | string |  |  The description for the rate. |  
| IsPaid | boolean |  |  Whether the rate has been paid. Format: true/false. |  
| IsPrimary | boolean |  |  Whether the rate is primary. Format: true/false. |  
| NumUnits | decimal |  |  The  number of units expected for the charge. For instance, 3 days |  
| PerUnit | string |  |  The  unit of measure for the charge. Values represent rates like per DAY, WEEK, or  MONTH |  
| SemanticsCode | string |  |  Indicates the charge category for the line item. Refer to the Semantics Codes table for more information. |  
| SemanticsVendorType | string |  |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |  
| StartDateLocal | dateTime |  |   The start date of the booking, in the user's local time.  Format: YYYY-MM-DDThh:mm:ss |  
| Vendor | string |  |  The vendor for the booking charge. |  
| VendorChargeCode | string |  |  The vendor's code for the charge. |  

#### RateWithAllowance child elements

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
| SemanticsCode | string |  | Indicates the charge category for the line item. Refer to the Semantics Codes table for more information. |
| SemanticsVendorType | string |  | The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
| StartDateLocal | dateTime |  | The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
| Vendor | string |  |  The vendor for the booking charge. |
| VendorChargeCode | string |  | The vendor's code for the charge. |


[1]: http://en.wikipedia.org/wiki/ISO_4217
[2]: http://www.iata.org/publications/Pages/code-search.aspx
