---
title: Travel Itinerary API v4 with Business Events
layout: reference
---

* [Introduction](#introduction)
* [Data Scope](#data-scope)
* [Event details](#event-details)
* [Itinerary V4 API](#itinerary)
* [References for Enumeration Types](#references)

## <a name="introduction"></a>Introduction

The event driven GET Itinerary V4 API will provide a scalable solution by allowing partners to get near real time updates for trips being created, updated, cancelled, deleted, and anonymized.

## <a name="data-scope"></a>Data Scope

Events will be raised for all trips saved to the itinerary data store. This includes trips booked in Concur Travel, offline with a TMC, or directly with a TripLink supplier. It also includes plans sent by users to TripIt travel segments added to Concur Request. Data sources can be differentiated by source, documented in the [References for Enumeration Types](#references) section.

Because some sources of travel data are indirect (through email parsing, for example) or only signal traveler intent, it is not uncommon for records to be incomplete or populated with suspicious data. Data customers must develop a strategy for incomplete records, as appropriate for their use cases. For example, in duty of care services, a flight from JFK to LHR without a flight number (or a fake flight number), should be interpreted as traveler intent to be in London on that date.

## <a name="event-details"></a>Event Details

The Event Subscription Service (ESS) enables the set up/creation of a subscription using partner’s App & a webhook. Using the following resources, the end point can be set up and a subscription to the Travel Itinerary Event can be created.

*  [ESS (Getting Started)](/api-reference/ess/v4.event-subscription.html)
*  [Event Subscription Management](/event-topics/index.html)
*	 [Travel Itinerary Event](/event-topics/travel/v4.itinerary-events.html)

## <a name="itinerary"></a>Itinerary V4 API

Using a Company Level Token and the href from the Events payload, partners use the Itinerary V4 API endpoint to obtain trip details.

Schema and Sample API Request and Response can be found in:

*  [API reference documentation](/api-reference/travel/itinerary-v4/v4.itinerary.html)
*  [Swagger](/api-explorer/v4-0/Itinerary.html)


## <a name="References"></a>References for Enumeration Types

#### Itin Source  Names

>**Note**: The source name appears both at the Itinerary level and the Booking level.  The value at the Booking level is generally more useful.  The value at the Itinerary level represents that value of the first booking added to the Itinerary and could therefore be misleading.

Itin Source Name|Description
----|----
Cliqbook|	Bookings created using Concur Travel or booked directly with a TMC agent and sent via the GDS.
Panama|	Trip confirmation emails sent to plans@concur.com, a feature of Concur TripLink. **Note**: The plans@concur.com functionality has been deprecated.
Agency|	Bookings made on other booking tools and posted to the SAP Concur platform.
TravelSupplier|	Concur TripLink bookings made directly on supplier websites & mobile apps and posted to the SAP Concur platform.
TripIt|	Trip confirmation emails sent to plans@tripit.com, a feature of Concur TripLink.
TravelRequest|	Travel plans from Concur Request that signal traveler intent but might not yet have actual reservations in place.

#### Trip Status Values

Status Types|	Status Number
----|----
Confirmed|	0
Ticketed|	1
Withdrawn|	2
Virtual|	4
VirtualCancelled|	5
Proposal|6
BookedProposal|	7
Removed|	Byte.MaxValue

#### Airline Adjustment Types

Charge Type| Description
----|----
V|	Void
R|	Refund
C|	Credit
A|	Ancillary
O|  Other

#### Rail Adjustment Types

Description|	Charge Type
----|----
Refund|	R
Credit|	C
Ancillary| A
Other| O

#### Airline Charge Types

Charge Type|	Description
----|----
T|	Airline Ticket
J|	Airline Adjustments
Q|	Airfare Quote
M|  Miscellaneous Charge Oder
A|	Manual Airline Ticket
R|	Rail Payment
U|	Rail Adjustment
L|	Rail Quote
