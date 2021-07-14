---
title: Duty of Care
layout: reference
---

* [Introduction](#introduction)
* [Data Scope](#data-scope)
* [Quick Connect (Authentication)](#quick-connect)
* [Company Profile API](#company-profile)
* [Event details](#event-details)
* [Itinerary V4 API](#itinerary)
* [Identity V4 API](#identity)

## <a name="introduction"></a>Introduction

Duty of care (DoC) partners are provided access to travel itinerary data. Previously, the Itinerary API required partners to poll for new or recently changed trips. You can now subscribe to events and fetch trips by ID which will improve scale and performance. This event-driven GET endpoint in the Itinerary V4 API will provide a scalable solution by allowing you to get near real time updates for trips being created, updated, and cancelled.

> **Note**: This integration and the use of the event-driven Itinerary V4 API applies only to DoC partners.

## <a name="data-scope"></a>Data Scope

Events will be raised for all trips saved to the itinerary data store. This includes trips booked in Concur Travel, offline with a TMC, or directly with a TripLink supplier. It also includes plans sent by users to TripIt or plans\@concur.com, and travel segments added to Concur Request. Data sources can be differentiated by source, see [References for Enumeration Types](#enumeration-types).

Because some sources of travel data are indirect (through email parsing, for example) or only signal traveler intent, it is not uncommon for records to be incomplete or populated with suspicious data. Data customers must develop a strategy for incomplete records, as appropriate for their use cases. In the case of duty of care services, a flight from JFK to LHR without a flight number (or a fake flight number), should be interpreted as traveler intent to be in London on that date.

## <a name="quick-connect"></a>Quick Connect

**Quick Connect** describes the authentication process that customers use to connect their SAP Concur site with an App Center partner’s enterprise application. See the [Quick Connect](/api-guides/ERP-integration/quick-connect-scope-for-enterprise-apps.html) scope document for details to guide you through the development of this required piece to obtain Company JWTs for customers.

## <a name="company-profile"></a>Company Profile API (optional)

If you're interested in obtaining profile information of a company or customer who connected to your app from the App Center can use this API.

[Profile Company API v1](/api-reference/profile/v1.company.html#get)

## <a name="event-details"></a>Event Details

The SAP Concur Event Subscription Service (ESS) enables the set up of a subscription using partner’s app and a webhook.

*  [ESS (Getting Started)](/api-reference/ess/v4.event-subscription.html)
*  [Event Subscription Management](/event-topics/index.html)

The SAP Concur Partner Enablement team will ensure that:

*  The scopes: `events.topic.read` and `travel.itinerary.read` are added to your app.
*  Event Subscriptions are created using the endpoint/webhook you provide for the topic `public.concur.travel.itinerary` in both the US and EMEA datacenters.

When a company connects to your app from the App Center, the Event Subscription is automatically updated with the Company ID and events start being sent to partners based on the itinerary or trip activities of this company.

The following are the different Event Types available:

*  `ItineraryCreated` for when a new trip is created.
*  `ItineraryUpdated` for when any update to the trip is made, including segment cancellations.

> **Note**: This event will be fired for every change to the trip document and can result in multiple events being returned within minutes (as multiple backend processes make updates), you can choose to handle that in a way that feels reasonable to you.

*  `ItineraryCancelled` for when the trip reservations are cancelled.
*  `ItineraryDeleted` for when a trip is deleted permanently.

> **Note**: The trip needs to be removed, as there will be no further updates.

*  `ItineraryAnonymized` for when a trip is anonymized on account of requests for GDPR, RTBF, and client termination.

### Sample Events

`ItineraryCreated/ItineraryUpdated/ItineraryCancelled`

```
{
  "eventType": "ItineraryCreated",
  "timeStamp": "2016-01-01T23:01:01.000Z",
  "topic": "public.concur.travel.itinerary",
  "correlationId": "b2fd900a-5935-46fc-8d29-599de9864e21",
  "facts": {
    "id": "51519e89-2c1d-47ec-bd93-7c4ace9c57e6",
    "userId": "b7d12989-0489-471a-81cd-175f8b78afa5",
    "companyId": "ab83bc5f-f66e-4ce0-9dcc-7dbf0195e061",
    "hrefs": {
      "v4": "https://us.api.concursolutions.com/travel/v4/trips/51519e89-2c1d-47ec-bd93-7c4ace9c57e6"
    }
  }
}
```

`ItineraryDeleted/ItineraryAnonymized`

```
{
  "id": "51519e89-2c1d-47ec-bd93-7c4ace9c57e7",
  "eventType": "ItineraryDeleted|ItineraryAnonymized",
  "timeStamp": "2016-01-01T23:01:01.000Z",
  "topic": "public.concur.travel.itinerary",
  "correlationId": "b2fd900a-5935-46fc-8d29-599de9864e21",
  "facts": {
    "id": "51519e89-2c1d-47ec-bd93-7c4ace9c57e8",
    "userId": "b7d12989-0489-471a-81cd-175f8b78afa5",
    "companyId": "ab83bc5f-f66e-4ce0-9dcc-7dbf0195e061"
  }
}
```

> **Note**: For `ItineraryDeleted` and `ItineraryAnonymized` events there is no callback or hrefs, as that trip record is deleted or anonymized and no further updates will be provided for the trip.

> **Disclaimer**: The href is subject to change and we advise against storing these values.

## <a name="itinerary"></a>Itinerary V4 API

Using a Company Level Token and the href from the Events payload, the Itinerary V4 API is used to obtain trip details.

Schema and Sample API Request and Response can be found in:

*  [API reference documentation](/api-reference/travel/itinerary-v4/v4.itinerary.html)
*  [Swagger](/api-explorer/v4-0/Itinerary.html)

### <a name="enumeration-types"></a>References for Enumeration Types

#### Booking Owner Types

The BookingOwner on the booking level identifies the system the booking originated from.

BookingOwner Types|Description
-----|-----
ConcurTravel | Bookings created using Concur Travel or booked directly with a TMC agent and sent to SAP Concur solution via the GDS.
OpenBookingEmail | Trip confirmation emails sent to plans@concur.com, a feature of Concur TripLink.
ConcurConnectAPI | Bookings made on other booking tools and posted using the SAP Concur API.
OpenBookingSupplier | Concur TripLink bookings made directly on supplier websites and mobile apps then posted using the SAP Concur API.
TripIt | Trip confirmation emails sent to plans@tripit.com, a feature of Concur TripLink.
TravelRequest | Travel plans from Concur Request that signal traveler intent but might not yet have actual reservations in place.

### Trip Status Values

Status Types | Status Number
-----|-----
Confirmed | 0  
Ticketed  | 1
Withdrawn | 2  
Virtual   | 4
VirtualCancelled | 5
Proposal | 6
BookedProposal  | 7  
Removed | Byte.MaxValue

### Airline Adjustment Types

Charge Type | Description
------|-----
V  | Void
R  | Refund
C  | Credit
A  | Ancillary
O  | Other

### Rail Adjustment Types

Description | Charge Type
-----|-----
Refund | R
Credit | C
Ancillary | A
Other  | O

### Airline Charge Types

Charge Type | Description
-----|-----
T  | Airline Ticket
J  | Airline Adjustments
Q  | Airfare Quote
M  | Miscellaneous Charge Order
A  | Manual Airline Ticket
R  | Rail Payment
U  | Rail Adjustment
L  | Rail Quote

### FAQ

Q: Are all reservations returned from this API automatically updated when a traveler or a supplier makes a change?

>   A: No. In some cases, the reservation was sent to us by a traveler or arranger. When plans change, the user would have to take action to update the record. Some direct connect content booked in Concur Travel can be changed by calling the supplier directly and, in some cases, that causes us to lose visibility into the reservation.

Q: Does Concur Travel always have the latest information in the GDS?

>   A: Generally, yes, but TMC needs to ensure that PNR Acquisition is properly configured and the PNR is correctly documented with the required data points.

Q: How often does Concur Travel import bookings from GDS queues?

>   A: The process runs constantly but is impacted by volume. It can take anywhere from a few minutes to a few hours for a change in the GDS to be reflected in Concur Travel during normal operations.

Q: Why do I see a delete and a create event raised in quick succession for a trip?

>   A: Due to internal processing within Concur Travel where trips are created  and updated from many sources, the system will occasionally do a delete and create instead of an update.

Q: How will I get upcoming trips (booked in the past) for a company that signs with us?

>   A: The App Center partner should open a case for when a partner needs this data for a company, to get this information.

>   Concur Travel will provide a JSON document with all upcoming trips, booked in the  past, for a given company as the partner goes live with them. This document will contain the trip id and the URL for the partner to fetch these trips from this list as they do for any events received upfront.

Q: Why do I get an update event for a trip without receiving a create event?

>   A: There is a possibility that the update event for a trip that they didn’t get a create event (example a trip created in the past). It is best to fetch the trip details for the trip in this case even if the trip id doesn’t exist in your data store.

Q: What should be the best practice to handle anonymization events?

>   A: The best practice to handle anonymization events is to anonymize these trips by getting the updated anonymized trip and update on the partners end, only if these trips exist in the partner data store and not fetch the trip details if they are not part of the datastore. We offer data retention capabilities that are configurable based on our customer needs. There might be a scenario where you see a number of anonymize events as the data retention policy comes into play with immediate effect for old trips that don’t exist in the partner datastore.

## <a name="identity"></a>Identity V4 API

You can use this API to obtain individual user profile information like emails, addresses, phone numbers, organization, cost center, and so on.

You can choose any of the 2 parameter options below to make the API call:

* `userId` value from the Events payload.

   Sample Request

```
    GET https://emea.api.concursolutions.com/profile/identity/v4/users/{userId}
```

*   Or `UserLoginId` value from the Itinerary API.

    Sample Request

```
    GET
    https://emea.api.concursolutions.com/profile/identity/v4/Users?filter=userName
    eq “{UserLoginId}”

```
 Schema and Sample API Request and Response can be found in:

*  [Reference Documentation](https://preview.developer.concur.com/api-reference/profile/v4.identity.html)
*  [Swagger](https://developer.concur.com/api-explorer/v4-0/Identity.html)
