---
layout: conceptual
title: Itinerary Data Model
---

## Overview
The Itinerary data model defines data elements  that are returned or sent when getting, creating, updating, or deleting trips and bookings with the /api/travel/trip/v1.1 and /api/travel/booking/v1.1 resources respectively. 
Trips include all bookings in an itinerary whereas a booking includes only a specific segment of an itinerary.

## Root elements
| Element Name          | Data Type    | TripLink | Description                                                          |
|:----------------------|:-------------|:---------|:---------------------------------------------------------------------|
| id                    | String       | Y        | The unique identifier for the trip URI with encrypted ID. Format:    |
| ItineraryInfo         |              | Y        | Parent element with the information about an itinerary for the specified user. Format: <NOTE TO TECH REVIEWERS: This element is not in the xsd but appears in the Get List of Itineraries response example>                                                                                                                 |
| TripId                | String       | Y        | Encrypted trip identifier value.                                     |
| ItinLocator           | String       | Y        | This element is obsolete and is supported only for backward compatibility.|
| BookedVia             | String       |          | The booking method for the trip.|
| BookedByFirstName     | String       | Y        | The first name of the person who booked the trip.|
| BookedByLastName      | String       | Y        | The last name of the person who booked the trip.|
| HasOpenBookingPassive | String       |          |                                                          |
| CancelComments        | String       | Y        | The comments provided if the itinerary is cancelled. Maximum length: 256 characters.  |
| ClientLocator         | String       |          |         |
| TripLinkLocator       | String       |          |                                                 |
| Comments              | String       | Y        | <Description here>. Maximum length 512 characters.   |
| DateBookedLocal       | DateTime     | Y        | The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss   |
| DateCreatedUtc        | DateTime     | Y        | The date that this trip was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc       | DateTime     | Y        | The date when this trip was last modified in UTC format. Format: YYYY-MM-DDThh:mm:ss.|
| Description           | String       | Y        | The description for this trip. Maximum length 512 characters. |
| EndDateLocal          | DateTime     | Y        | The end date of the trip in the ending location’s timezone. Format: YYYY-MM-DDThh:mm:ss.|
| EndDateUtc            | DateTime     | Y        | The end date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| TravelRequestId       | String       |          | |
| IsPersonal            | Boolean      | Y        | Indicates whether this trip is for business or for leisure. Format: Business|Leisure  |
| ProjectName           | String       |          | The name of the project assiciated with this trip. Maximum length 255 characters.|
| StartDateLocal        | DateTime     | Y        | The start date of the trip in the starting location’s timezone. Format: YYYY-MM-DDThh:mm:ss. |
| StartDateUtc          | DateTime     | Y        | The date when this trip started in UTC format. Format: YYYY-MM-DDThh:mm:ss. |
| TripName              | String       | Y        | Name of the trip. Maximum length 255 characters.  |
| TripStatus            | unsignedByte | Y        | The status of the trip. This element only appears if the includeCanceledTrips query parameter is used in the request.|
| UserLoginId           |              | Y        | The user's login to Concur. This element appears only when the OAuth token is associated with a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.<NOTE TO TECH REVIEWERS: This element is not in the xsd but appears in the Get List of Itineraries response example>|
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

## MiscChargeOrders child elements

| Element Name | Data Type | TripLink | Description | 
|---------------------------|-----------|----------|------------------|
| DateCreatedUtc | dateTime |  | The date the charge order was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| DateModifiedUtc | dateTime |  | The date the charge order was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
| IssueDate  | dateTime |  | The date the charge order was issued. Format: YYYY-MM-DDThh:mm:ss |  
| PlatingCarrierNumericCode | string |  | Part of the ticket number that indicates the airline code. This is a three digit number. For example: 001=American, 005=Continental, 006=Delta, 012=Northwest |  
| PlatingControlNumber | string |  | Part of the ticket number that indicates the ticket control number. Format: Ten digit number. |  
| TotalAmount | decimal |  | The total amount of charge orders for the ticket. |  
| TotalAmountCurrency | string |  | The 3-letter ISO 4217 currency code for the total charge order amount. |  


## AirfareQuotes elements
